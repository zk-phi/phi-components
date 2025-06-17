import type { AttributeValue } from "./makeCustomElement";

export const boolean = (val: AttributeValue): boolean => (
  (val && val !== "false" && val !== "0") || val === ""
);

export const string = (val: AttributeValue): string => (
  val == null ? "" : val.toString()
);

export const number = (val: AttributeValue): number => (
  val === null || val === "" || val === false || val === true ? NaN : Number(val)
);

export const raw = (val: AttributeValue): AttributeValue => (
  val
);

export const oneof = <T>(deflt: string, others: string[]) => {
  const items = [deflt, ...others];
  return (val: AttributeValue): string => {
    const string = val?.toString() ?? "";
    return items.find(item => item === string) ?? deflt;
  };
};
