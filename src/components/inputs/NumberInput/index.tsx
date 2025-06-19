import { useState, useCallback } from "preact/hooks";
import type { JSX } from "preact";

/* TODO: disabled state */

const Component = ({
  value,
  placeholder = "",
  required = false,
  min,
  max,
  step,
  error,
  onInput,
}: {
  value?: number | undefined,
  placeholder: string,
  required: boolean,
  min?: number,
  max?: number,
  step?: number,
  error?: boolean,
  onInput?: (value: number | undefined, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void,
}) => {
  const [text, setText] = useState(value == null ? "" : value.toString());

  const handler = useCallback((e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const textValue = e.currentTarget.value;
    setText(textValue);
    onInput?.(textValue === "" ? undefined : Number(textValue), e);
  }, [onInput]);

  return (
    <input
        type="number"
        class={`phi-number-input ${error ? "error" : ""}`}
        placeholder={placeholder}
        value={text}
        required={required}
        max={max}
        min={min}
        step={step}
        onInput={handler} />
  );
};

export default Component;
