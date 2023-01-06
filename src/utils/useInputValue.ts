import { useProp } from "./useProp";
import { useState, useMemo, useCallback, useEffect } from "preact/hooks";

// ElementInternals actually has "setFormValue", but Typescript does not know that
// https://github.com/microsoft/TypeScript/issues/33218
type ExtendedElementInternals<T> = ElementInternals & { setFormValue?: (value: T) => void };

// Magic hook to make components behave like input elements.
export const useInputValue = <T>(
  parent: HTMLElement | undefined,
  attrValue: T,
  fieldName = "value",
) => {
  const [currentValue, setCurrentValue] = useProp<T>(parent, fieldName, attrValue);

  const internals = useMemo(() => {
    return parent?.attachInternals?.();
  }, [parent]);

  const inputHandler = useCallback((newValue: T, e?: Event) => {
    setCurrentValue(newValue);
    if (parent && e) {
      e.stopPropagation();
      parent.dispatchEvent(new Event("input"));
    }
    if (internals) {
      (internals as ExtendedElementInternals<T>).setFormValue?.(newValue);
    }
  }, [parent, internals]);

  // without this, returned value is infered as (T | (T, Event?) => void)[].
  const ret: [T, (v: T, e?: Event) => void] = [currentValue!, inputHandler];
  return ret;
};
