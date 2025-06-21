import { useMemo, useCallback } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";

/* TODO: disabled state */

const Component = <T,>({
  checked,
  onChange,
  value,
  style,
  children,
}: {
  checked: T[],
  onChange?: (checked: T[], e: JSX.TargetedEvent<HTMLInputElement, Event>) => void,
  value: T,
  style?: JSX.CSSProperties,
  children: ComponentChildren,
}) => {
  const isChecked = useMemo(() => {
    return checked.findIndex((item) => item === value) !== -1;
  }, [checked, value]);

  const handler = useCallback((e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const inputChecked = e.currentTarget.checked;
    if (inputChecked) {
      onChange?.([...checked, value], e);
    } else {
      onChange?.(checked.filter((item) => item !== value), e);
    }
  }, [checked, value, onChange]);

  return (
    <label class="phi-checkbox" style={style}>
      <input
          type="checkbox"
          class="input"
          checked={isChecked}
          onChange={handler} />
      {" "}
      {children}
    </label>
  );
};

export default Component;
