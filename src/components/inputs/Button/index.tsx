import { useCallback } from "preact/hooks";
import type { ComponentChildren } from "preact";

export type Variant = "default" | "primary" | "dotted";

/* TODO: disabled state */

const Component = ({
  onClick,
  danger,
  variant = "default",
  icon,
  children,
}: {
  danger?: boolean,
  variant: Variant,
  onClick?: () => void,
  icon?: ComponentChildren,
  children: ComponentChildren,
}) => (
  <button className={`phi-button ${variant} ${danger ? 'danger' : ''}`} onClick={onClick}>
    {icon && <span className="icon">{icon}</span>}
    {children}
  </button>
);

export default Component;
