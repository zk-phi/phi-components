import { useCallback } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";

/* TODO: disabled state */

const Component = ({
  checked,
  onChange,
  children,
}: {
  checked: boolean,
  onChange?: (checked: boolean, e: JSX.TargetedEvent<HTMLInputElement, Event>) => void,
  children: ComponentChildren,
}) => {
  const handler = useCallback((e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    onChange?.(e.currentTarget.checked, e);
  }, [onChange]);

  return (
    <label class="phi-checkbox">
      <input
          type="checkbox"
          class="input"
          checked={checked}
          onChange={handler} />
      {" "}
      {children}
    </label>
  );
};

export default Component;
