import { useMemo, useCallback } from "preact/hooks";
import type { JSX } from "preact";

/* TODO: disabled state */

const Component = ({
  value,
  min,
  max,
  step,
  onInput,
  style,
}: {
  value: number,
  min: number,
  max: number,
  step: number,
  onInput?: (value: number | undefined, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void,
  style?: JSX.CSSProperties,
}) => {
  const handler = useCallback((e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const textValue = e.currentTarget.value;
    onInput?.(Number(textValue), e);
  }, [onInput]);

  const gradient = useMemo(() => {
    const percentage = (value - min) / (max - min) * 100;
    return `linear-gradient(to right,  var(--phi-color-border) ${percentage}%, var(--phi-color-bg) ${percentage}%)`;
  }, [value, min, max]);

  return (
    <input
        type="range"
        class="phi-slider"
        value={value}
        max={max}
        min={min}
        step={step}
        style={{ background: gradient, ...style }}
        onInput={handler} />
  );
};

export default Component;
