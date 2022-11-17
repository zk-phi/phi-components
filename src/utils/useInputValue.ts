import { useMemo, useCallback, useEffect } from "preact/hooks";

// A hack to put "value" on arbitrary custom elements
type CustomInputElement<T> = HTMLElement & { value?: T };

// ElementInternals actually has "setFormValue", but Typescript does not know that
// https://github.com/microsoft/TypeScript/issues/33218
type ExtendedElementInternals<T> = ElementInternals & { setFormValue?: (value: T) => void };

export const useInputValue = <T>(parent: HTMLElement | undefined, value: T) => {
  const internals = useMemo(() => {
    return parent?.attachInternals?.();
  }, [parent]);

  const updater = useCallback((newValue: T, e?: Event) => {
    if (parent) {
      (parent as CustomInputElement<T>).value = newValue;
      if (e) {
        e.stopPropagation();
        parent.dispatchEvent(new Event("input"));
      }
    }
    if (internals) {
      (internals as ExtendedElementInternals<T>).setFormValue?.(newValue);
    }
  }, [parent, internals]);

  useEffect(() => {
    updater(value);
  }, [updater, value]);

  return updater;
};
