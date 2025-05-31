import { h, cloneElement, render, hydrate } from 'preact';


const toCamelCase = (str) => (
  str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
);

const Slot = (props) => (
  h('slot', { ...props })
);

const isPrimitive = (obj) => {
  const type = typeof obj;
  return obj == null || type === 'string' || type === 'boolean' || type === 'number';
}

/* Preact コンポーネントから CustomElement を生やす処理の本体 */
const makeCustomElement = (Component, propNames, options) => {
  class PreactElement extends HTMLElement {
    static observedAttributes = propNames;
    static formAssociated = !!options.formAssociated;

    constructor () {
      super();
      // This library assumes that the ShadowDOM feature is always enabled
      this._root = this.attachShadow({ mode: "open" });
      if (options.adoptedStyleSheets) {
        this._root.adoptedStyleSheets = options.adoptedStyleSheets;
      }
      if (options.formAssociated) {
        this._internals = this.attachInternals();
      }
    }

    /* 初回レンダリングで呼ばれる関数 */
    connectedCallback () {
      /* HTML から attrs を読み取って、それを prop として コンポーネントを初回レンダー */
      const { attributes, childNodes } = this;
      const props = { $element: this };
      for (let i = 0; i < attributes.length; i++) {
        if (attributes[i].name !== "slot") {
          props[attributes[i].name] = attributes[i].value;
          props[toCamelCase(attributes[i].name)] = attributes[i].value;
        }
      }
      /* instantiate された後、初回レンダーまでに変更された props を反映する */
      if (this._initialProps) {
        Object.assign(props, this._initialProps);
      }
      if (options.slots) {
        options.slots.forEach(name => props[name] = h(Slot, { name }, null));
      }

      this._vdom = h(Component, props, h(Slot, {}, null));
      (this.hasAttribute('hydrate') ? hydrate : render)(this._vdom, this._root);
    }

    attributeChangedCallback (name, oldValue, newValue) {
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
    disconnectedCallback () {
      this._vdom = null;
      render(null, this._root);
    }
  }

  /* DOM props と Preact props の同期 */
  propNames.forEach(name => {
    const isAssociatedField = name === options.formAssociated;
    Object.defineProperty(PreactElement.prototype, name, {
      get() {
        return this._vdom.props[name];
      },
      set(v) {
        if (this._vdom) {
          /* レンダー済みの UI を更新する（Atrribute が変わった時と同じ） */
          this.attributeChangedCallback(name, null, v);
        } else {
          /* 初回レンダのために props を予約しておく */
          if (!this._initialProps) this._initialProps = {};
          this._initialProps[name] = v;
        }
        /* 更新された prop を Attribute にも reflect する (primitive な値の場合のみ) */
        if (isPrimitive(v)) {
          this.setAttribute(name, v);
        }
        /* 更新された prop を form にも反映する */
        if (isAssociatedField && this._internals) {
          this._internals.setFormValue(v);
        }
      },
    });
  });

  return PreactElement;
};

/* CustomElement を (makeCustomElement で) 生やして、登録する */
export function register(Component, tagName, propNames, options) {
  const element = makeCustomElement(Component, propNames, options);
  return customElements.define(tagName, element);
}
