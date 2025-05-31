import type { AttributeParser } from "./preact-custom-component";

export const parseBooleanAttribute: AttributeParser<boolean> = val => (
  (val && val !== "false") || val === ""
);

export const normalizeStringAttribute: AttributeParser<string | null> = val => (
  val == null ? "" : val.toString()
);
