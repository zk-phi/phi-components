type AttrValue = null | string | boolean | number;
type Parser<T> = (v: AttrValue) => T;

export const parseBooleanAttribute: Parser<boolean> = val => (
  (val && val !== "false") || val === ""
);

export const normalizeStringAttribute: Parser<string> = val => (
  val.toString()
);
