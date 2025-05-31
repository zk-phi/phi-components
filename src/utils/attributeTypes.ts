import type { AttributeParser } from "./preact-custom-component";

export const boolean: AttributeParser<boolean> = {
  parse: val => (
    (val && val !== "false" && val !== "0") || val === ""
  ),
  reflect: val => val,
};

export const string: AttributeParser<string> = {
  parse: val => (
    val == null ? "" : val.toString()
  ),
  reflect: val => val,
};

export const number: AttributeParser<number> = {
  parse: val => (
    val === null || val === "" || val === false || val === true ? NaN : Number(val)
  ),
  reflect: val => val,
};

export const any: AttributeParser<AttributeValue> = {
  parse: val => val,
  reflect: val => val,
};
