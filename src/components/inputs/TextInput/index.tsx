import { useCallback } from "preact/hooks";
import type { JSX } from "preact";

/* TODO: disabled state */

export type Size = "md" | "sm";

const Component = ({
  value,
  placeholder = "",
  required = false,
  minlength,
  maxlength,
  size = "md",
  error,
  onInput,
}: {
  value: string,
  placeholder: string,
  required: boolean,
  minlength?: number,
  maxlength?: number,
  size: Size,
  error?: boolean,
  onInput?: (value: string, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void,
}) => {
  const handler = useCallback((e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    onInput?.(e.currentTarget.value, e);
  }, [onInput]);

  return (
    <input
        type="text"
        class={`phi-text-input ${error ? "error" : ""} ${size}`}
        placeholder={placeholder}
        required={required}
        minlength={minlength}
        maxlength={maxlength}
        value={value}
        onInput={handler} />
  );
};

export default Component;
