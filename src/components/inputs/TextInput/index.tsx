import { useMemo, useCallback } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";

/* TODO: disabled state */

export type Size = "md" | "sm";

const Component = <T extends boolean | any[],>({
  value,
  placeholder = "",
  size = "md",
  error,
  onInput,
}: {
  value: string,
  placeholder: string,
  size: Size,
  error?: boolean,
  onInput?: (checked: string, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void,
}) => {
  const handler = useCallback((e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    onInput?.(e.currentTarget.value, e);
  }, [onInput]);

  return (
    <input
        type="text"
        className={`phi-text-input ${error ? "error" : ""} ${size}`}
        placeholder={placeholder}
        value={value}
        onInput={handler} />
  );
};

export default Component;
