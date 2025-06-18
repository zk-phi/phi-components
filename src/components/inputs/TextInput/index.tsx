import { useMemo, useCallback } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";

/* TODO: disabled state */

const Component = <T extends boolean | any[],>({
  value,
  placeholder = "",
  error,
  onInput,
}: {
  value: string,
  placeholder: string,
  error?: boolean,
  onInput?: (checked: string, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void,
}) => {
  const handler = useCallback((e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    onInput?.(e.currentTarget.value, e);
  }, [onInput]);

  return (
    <input
        type="text"
        className={`phi-text-input ${error ? "error" : ""}`}
        placeholder={placeholder}
        value={value}
        onInput={handler} />
  );
};

export default Component;
