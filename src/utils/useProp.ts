import { useState, useEffect, useMemo, useCallback } from "preact/hooks";

// We define `__props` internal prop on our custom elements
type HTMLElementWithProps = HTMLElement & { __props: Record<string, any> };

// Like useState, but the value is visible and updatable as an element prop.
export const useProp = <T>(parent: HTMLElement | undefined, name: string) => {
  // Initial value is inherited from the current prop value.
  const [value, setValue] = useState<T | undefined>(parent ? (parent as any)[name] : undefined);

  useEffect(() => {
    if (parent) {
      const obj = parent as HTMLElementWithProps;
      if (!obj.__props) {
        obj.__props = {};
      }
      obj.__props[name] = value;
      Object.defineProperty(obj, name, {
        get: () => obj.__props[name],
        set: (value) => {
          obj.__props[name] = value;
          setValue(value);
        },
      });
    }
  }, [parent]);

  const setter = useCallback((value: T | undefined) => {
    if (parent) {
      const obj = parent as HTMLElementWithProps;
      obj.__props[name] = value;
    }
    setValue(value);
  }, [setValue, parent, name]);

  // without this, returned value is inferred as (T | undefined | (T | undefined) => void)[].
  const ret: [T | undefined, (v: T | undefined) => void] = [value, setter];
  return ret;
};
