import { useMemo, useCallback } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";

/* TODO: disabled state */

const Component = <T,>({
  checked,
  onChange,
  value,
  children,
}: {
  checked: T[],
  onChange?: (checked: T[], e: JSX.TargetedEvent<HTMLInputElement, Event>) => void,
  children: ComponentChildren,
  value: T,
}) => {
  const isChecked = useMemo(() => {
    return checked.findIndex((item) => item === value) !== -1;
  }, [checked, value]);

  const handler = useCallback((e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const inputChecked = e.currentTarget.checked;
    if (inputChecked) {
      onChange?.([...checked, value], e);
    } else {
      onChange?.(checked.filter((item) => item !== value!), e);
    }
  }, [checked, value]);

  return (
    <label className="phi-checkbox">
      <input
          type="checkbox"
          className="input"
          checked={isChecked}
          onChange={handler} />
      {" "}
      {children}
    </label>
  );
};

export default Component;
