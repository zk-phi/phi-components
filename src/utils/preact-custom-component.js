import { h, cloneElement, render, hydrate } from 'preact';

/* Preact コンポーネントから CustomElement を生やす処理の本体 */
function makeCustomElement = (Component, propNames, options) => {
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
    return instance;
  }
  PreactElement.prototype = Object.create(HTMLElement.prototype);
  PreactElement.prototype.constructor = PreactElement;

  /* こいつらがわからない度高い */
  PreactElement.prototype.connectedCallback = connectedCallback;
  PreactElement.prototype.attributeChangedCallback = attributeChangedCallback;
  PreactElement.prototype.disconnectedCallback = disconnectedCallback;

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
export default function register(Component, tagName, propNames, options) {
  const element = makeCustomElement(Component, propNames, options);
  const tag = tagName || Component.tagName || Component.displayName || Component.name;
  return customElements.define(tag, element);
}

/* 渡ってきた context を ".getChildContext" で取れるようにする Preact Component っぽい。
 * props は子要素の Component にそのまま委譲している */
function ContextProvider ({ context, children, ...props }) {
  this.getChildContext = () => context;
  /* 子コンポーネントを、引数を {...props} として再レンダする */
  return cloneElement(children, props);
}

/* 初回レンダリングで呼ばれる関数 */
function connectedCallback() {
  /* 独自イベントを発射してみて、拾ってくれるのを待つっぽい。
   * このイベントを拾うのは "Slot" コンポーネント */
  const event = new CustomEvent('_preact', {
    detail: {},
    bubbles: true,
    cancelable: true,
  });
  this.dispatchEvent(event);
  /* Slot 側がセットした値をここで回収してるっぽい */
  const context = event.detail.context;

  /* Slot から渡ってきた context から ContextProvider を作って、
   * その下に Component (の VDom) を描画する
   *
   *   <ContextProvider context={context} props={this._initialProps}>
   *     <Component />
   *   </ContextProvider>
   *
   * Component に直接 prop が渡されてないけど、ContextProvider に props を委譲する機構が入っている。
   * props 更新の処理を簡単にするために、ルート要素に props を持たせたい為だと思われる。
   */
  this._vdom = h(
    ContextProvider,
    { ...this._initialProps, context },
    toVdom(this, this._Component)
  );
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
}

function toCamelCase(str) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

function attributeChangedCallback(name, oldValue, newValue) {
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
}

/* VDom を消して、 UI を片付ける */
function disconnectedCallback() {
  this._vdom = null;
  render(null, this._root);
}

/* ------------ ここまで読んだ */

/**
 * Pass an event listener to each `<slot>` that "forwards" the current
 * context value to the rendered child. The child will trigger a custom
 * event, where will add the context value to. Because events work
 * synchronously, the child can immediately pull of the value right
 * after having fired the event.
 */
function Slot (props, context /* こいつは VNode */) {
  const ref = (r) => {
    if (!r) {
      this.ref.removeEventListener('_preact', this._listener);
    } else {
      this.ref = r;
      if (!this._listener) {
        this._listener = (event) => {
          event.stopPropagation();
          event.detail.context = context;
        };
        r.addEventListener('_preact', this._listener);
      }
    }
  };
  return h('slot', { ...props, ref });
}

/* 「element の位置に nodeName (Component またはタグ名) を描画した時の VDom」を再現するっぽい？
 *
 * たとえば
 *
 *   <my-component>
 *     <span>hoge</span>
 *   </my-component>
 *
 * から
 *
 *   <MyComponent children={[<span>hoge</span>]} />
 *
 * に相当する VDom を作る？
 */
function toVdom (element, nodeName /* 再帰する時は null になるっぽい */) {
  /* TextNode */
  if (element.nodeType === 3) {
    return element.data;
  }

  /* 要素以外の謎ノード（コメント、DOCTYPE 宣言、etc） */
  if (element.nodeType !== 1) {
    return null
  };

  /* このノードの (slot 以外の) attr を props にまとめる */
  let props = {};
  const a = element.attributes; /* Attr の配列っぽい何か（厳密には NamedMap） */
  for (let i = a.length; i--; ) {
    if (a[i].name !== 'slot') {
      props[a[i].name] = a[i].value;
      props[toCamelCase(a[i].name)] = a[i].value;
    }
  }

  /* 子要素たちを VDom 化する */
  let children = [];
  const cn = element.childNodes; /* Node の配列っぽい何か（厳密には NodeList） */
  for (let i = cn.length; i--; ) {
    const vnode = toVdom(cn[i], null);
    /* 子要素が slot attr を持っている場合、 children ではなく該当する prop に渡す
     * たとえば <span slot="message">Hello </span> は chidlren ではなく message に渡る */
    const name = cn[i].slot;
    if (name) {
      props[name] = h(Slot, { name }, vnode);
    } else {
      children[i] = vnode;
    }
  }

  // Only wrap the topmost node with a slot
  const wrappedChildren = nodeName ? h(Slot, null, children) : children;
  return h(nodeName || element.nodeName.toLowerCase(), props, wrappedChildren);
}
