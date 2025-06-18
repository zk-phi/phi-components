import { useMemo, useCallback } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";

/* TODO: disabled state */

const Component = <T extends boolean | any[],>({
  checked,
  onChange,
  children,
}: {
  checked: boolean,
  onChange: (checked: boolean, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void,
  children: ComponentChildren,
}) => {
  const handler = useCallback((e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    onChange(e.currentTarget.checked, e);
  }, [onChange]);

  return (
    <label className="phi-checkbox">
      <input
          type="checkbox"
          className="input"
          checked={checked}
          onChange={handler} />
      {" "}
      {children}
    </label>
  );
};

export default Component;
