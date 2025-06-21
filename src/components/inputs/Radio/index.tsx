import { useMemo, useCallback } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";

/* TODO: disabled state */

const Component = <T,>({
  name,
  checked,
  onChange,
  value,
  style,
  children,
}: {
  name: string,
  checked: T,
  onChange?: (checked: T, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void,
  value: T,
  style?: JSX.CSSProperties,
  children: ComponentChildren,
}) => {
  const isChecked = useMemo(() => {
    return checked === value;
  }, [checked, value]);

  const handler = useCallback((e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    if (e.currentTarget.checked) {
      onChange?.(value, e);
    }
  }, [value, onChange]);

  return (
    <label class="phi-radio" style={style}>
      <input
          type="radio"
          class="input"
          name={name}
          checked={isChecked}
          onChange={handler} />
      {" "}
      {children}
    </label>
  );
};

export default Component;
