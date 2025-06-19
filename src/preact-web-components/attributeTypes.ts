import type { AttributeValue } from "./makeCustomElement";

export const boolean = (val: AttributeValue): boolean => (
  (val && val !== "false" && val !== "0") || val === ""
);

export const string = (val: AttributeValue): string => (
  val == null ? "" : val.toString()
);

export const numberOrUndef = (val: AttributeValue): number | undefined => (
  val === null ? undefined : val === "" || val === false || val === true ? Number.NaN : Number(val)
);

export const numberWithDefault = (n: number) => (val: AttributeValue) => (
  numberOrUndef(val) ?? n
);

export const stringList = (val: AttributeValue): string[] => (
  val == null || val === "" ? (
    []
  ) : typeof val === "string" ? (
    // non-empty string
    val.split(",")
  ) : (
    // boolean or number
    [val.toString()]
  )
);

export const numberList = (val: AttributeValue): number[] => {
  const list = stringList(val);
  const numbers = list.map(str => Number(str));
  return numbers.some(num => Number.isNaN(num)) ? [] : numbers;
};

export const raw = (val: AttributeValue): AttributeValue => (
  val
);

export const oneof = (deflt: string, others: string[]) => {
  const items = [deflt, ...others];
  return (val: AttributeValue): string => {
    const string = val?.toString() ?? "";
    return items.find(item => item === string) ?? deflt;
  };
};
