import { useMemo, useCallback, useEffect } from "preact/hooks";

export const useInputValue = (parent, value) => {
  const internals = useMemo(() => {
    return parent?.attachInternals();
  }, [parent]);

  const updater = useCallback((newValue, e) => {
    if (parent) {
      parent.value = newValue;
      if (e) {
        e.stopPropagation();
        parent.dispatchEvent(new Event("input"), newValue);
      }
    }
    if (internals) {
      internals.setFormValue(newValue);
    }
  }, [parent, internals]);

  useEffect(() => {
    updater(value);
  }, [updater, value]);

  return updater;
};
