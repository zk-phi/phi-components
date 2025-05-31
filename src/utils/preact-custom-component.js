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

const makeCustomElement = (Component, options) => {
  class PreactElement extends HTMLElement {
    static observedAttributes = Object.keys(options.attributes ?? {});
    static formAssociated = !!options.formAssociated;

    constructor () {
      super();
      // This library assumes that the ShadowDOM feature is always enabled
      this._root = this.attachShadow({ mode: "open" });
      this._initialProps = {};
      if (options.adoptedStyleSheets) {
        this._root.adoptedStyleSheets = options.adoptedStyleSheets;
      }
      if (options.formAssociated) {
        this._internals = this.attachInternals();
      }
    }

    updateProp (name, newValue) {
      // Before the first render: reserve the new value for the first render
      if (!this._vdom) {
        this._initialProps[name] = newValue;
        this._initialProps[toCamelCase] = newValue;
        return;
      }
      // After the first render: rerender UI with the new value
      const props = { [name]: newValue, [toCamelCase(name)]: newValue };
      this._vdom = cloneElement(this._vdom, props);
      render(this._vdom, this._root);
    }

    parseAttribute (name, val, prepend /* = do not overwrite existing values */) {
      if (prepend && this._initialProps?.hasOwnProperty(name)) {
        return;
      }
      const parser = (options.attributes[name]?.parse) ?? options.attributes[name];
      if (parser) {
        // Attributes value defaults to null, but Preact props value defaults to undef.
        // So we convert here for usability.
        this.updateProp(name, parser(val ?? undefined));
      }
    }

    connectedCallback () {
      const { attributes, childNodes } = this;
      // Parse attributes.
      // Results are accumulated in `this._initialProps` by `updateProp`.
      for (let i = 0; i < attributes.length; i++) {
        this.parseAttribute(attributes[i].name, attributes[i].value, true);
      }
      const initialProps = this._initialProps ?? {};
      const slots = Object.fromEntries(
        (options.slots ?? []).map(name => [name, h(Slot, { name }, null)])
      );
      const props = { $element: this, ...initialProps, ...slots };
      this._vdom = h(Component, props, h(Slot, {}, null));
      // TODO: I don't know how this works (just copy-pasted from preact-custom-component)
      (this.hasAttribute('hydrate') ? hydrate : render)(this._vdom, this._root);
    }

    disconnectedCallback () {
      this._vdom = null;
      render(null, this._root);
    }

    attributeChangedCallback (name, _, newValue) {
      this.parseAttribute(name, newValue);
    }
  }

  // Keep Preact props and DOM props in sync
  (options.properties ?? []).forEach(name => {
    const isAssociatedField = name === options.formAssociated;
    const unparser = options.attributes[name]?.reflect;
    Object.defineProperty(PreactElement.prototype, name, {
      get () {
        return this._vdom.props[name];
      },
      set (v) {
        this.updateProp(name, v);
        if (unparser) {
          this.setAttribute(name, unparser(v));
        }
        if (isAssociatedField && this._internals) {
          this._internals.setFormValue(v);
        }
      },
    });
  });

  return PreactElement;
};

export function register(Component, tagName, propNames, options) {
  const element = makeCustomElement(Component, propNames, options);
  return customElements.define(tagName, element);
}
