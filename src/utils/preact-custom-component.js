import { h, cloneElement, render, hydrate } from 'preact';

function toCamelCase(str) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

function Slot (props) {
  return h('slot', { ...props });
}

/* Preact コンポーネントから CustomElement を生やす処理の本体 */
const makeCustomElement = (Component, propNames, options) => {
  function PreactElement () {
    /* コンポーネントを入れる CustomElement のインスタンスを生やす */
    const instance = Reflect.construct(HTMLElement, [], PreactElement);
    instance._Component = Component;
    /* options.shadow が有効なら attachShadow する */
    instance._root = options && options.shadow ? (
      instance.attachShadow({ mode: options.mode || 'open' })
    ) : (
      instance
    );
    if (options.adoptedStyleSheets) {
      instance._root.adoptedStyleSheets = options.adoptedStyleSheets;
    }
    return instance;
  }
  PreactElement.prototype = Object.create(HTMLElement.prototype);
  PreactElement.prototype.constructor = PreactElement;

  /* 初回レンダリングで呼ばれる関数 */
  PreactElement.prototype.connectedCallback = function () {
    /* HTML から attrs を読み取って、それを prop として コンポーネントを初回レンダーする */
    const { attributes, childNodes } = this;
    const props = {};
    for (let i = 0; i < attributes.length; i++) {
      if (attributes[i].name !== "slot") {
        props[attributes[i].name] = attributes[i].value;
        props[toCamelCase(attributes[i].name)] = attributes[i].value;
      }
    }
    for (let i = 0; i < childNodes.length; i++) {
      /* 子要素が slot attr を持っている場合、 children ではなく該当する prop に渡す
       * たとえば <span slot="message">Hello </span> は chidlren ではなく message に渡る */
      const slotName = childNodes[i].slot;
      if (slotName) {
        props[slotName] = h(Slot, { name: slotName }, null);
      }
    }
    /* instantiate された後、初回レンダーまでに変更された props を反映する */
    if (this._initialProps) {
      Object.assign(props, this._initialProps);
    }

    this._vdom = h(this._Component, props, h(Slot, {}, null));
    /* "hydrate" attr をセットしておくと hydrate してくれるっぽい。おそらく SSR 用途
     * Readme に説明がないのでちょっとわからない。誰が "hydrate" をセットしてくれるんだろう
     *
     * たとえばだけど、
     *
     *   <my-hello />
     *
     * をこんな感じに SSR しておけるのかな
     *
     *   <my-hello hydrate>
     *     <root>
     *       <span hydrate>Hello!</span>
     *     </root>
     *   </my-hello>
     */
    (this.hasAttribute('hydrate') ? hydrate : render)(this._vdom, this._root);
  };

  PreactElement.prototype.attributeChangedCallback = function (name, oldValue, newValue) {
    /* 初回レンダがまだなら特にやることなし。最新の prop で初回レンダをするだけなので */
    if (!this._vdom) return;
    /* Attribute のデフォルト値は null だが、Preact 世界ではかわりに undefined を使う */
    newValue = newValue == null ? undefined : newValue;
    const props = {};
    /* Attribute "my-attr" に対応する prop が "myAttr" であることを仮定しているっぽい */
    props[name] = newValue;
    props[toCamelCase(name)] = newValue;
    /* UI を更新 (現在の UI に、props を上書きして再レンダをかける) */
    this._vdom = cloneElement(this._vdom, props);
    render(this._vdom, this._root);
  };

  /* VDom を消して、 UI を片付ける */
  PreactElement.prototype.disconnectedCallback = function () {
    this._vdom = null;
    render(null, this._root);
  };

  /* propNames 引数から (あるいは .propTypes から prop の一覧を拵える) */
  propNames = propNames || Component.observedAttributes || Object.keys(Component.propTypes || {});
  PreactElement.observedAttributes = propNames;

  /* DOM props と Preact props の同期 */
  propNames.forEach((name) => {
    Object.defineProperty(PreactElement.prototype, name, {
      get() {
        return this._vdom.props[name];
      },
      set(v) {
        /* _vdom は connectedCallback でセットされてる値っぽい
         * つまり初回はこれ呼ばれない？ */
        if (this._vdom) {
          /* Atrribute が変わった時と同じ処理をする */
          this.attributeChangedCallback(name, null, v);
        } else {
          /* 初回レンダのための props をセットする。
           * 一度 VDom が作られたら、以降は attributeChangedCallback が仕事をするらしい */
          /* これ attributes で渡された時はどうするんじゃろ */
          if (!this._initialProps) this._initialProps = {};
          this._initialProps[name] = v;
          this.connectedCallback();
        }

        /* prop を Attribute にも reflect する (primitive な値の場合のみ) */
        const type = typeof v;
        if (
          v == null ||
          type === 'string' ||
          type === 'boolean' ||
          type === 'number'
        ) {
          this.setAttribute(name, v);
        }
      },
    });
  });

  return PreactElement;
};

/* CustomElement を (makeCustomElement で) 生やして、登録する */
export function register(Component, tagName, propNames, options) {
  const element = makeCustomElement(Component, propNames, options);
  const tag = tagName || Component.tagName || Component.displayName || Component.name;
  return customElements.define(tag, element);
}
