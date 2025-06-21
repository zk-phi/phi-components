import type { ComponentChildren, JSX } from "preact";

export type Variant = "default" | "primary" | "dotted";

/* TODO: disabled state */

const Component = ({
  onClick,
  danger,
  variant = "default",
  icon,
  style,
  children,
}: {
  danger?: boolean,
  variant: Variant,
  onClick?: () => void,
  icon?: ComponentChildren,
  style?: JSX.CSSProperties,
  children: ComponentChildren,
}) => (
  <button
      type="button"
      class={`phi-button ${variant} ${danger ? 'danger' : ''}`}
      style={style}
      onClick={onClick}>
    {icon && <span class="icon">{icon}</span>}
    {children}
  </button>
);

export default Component;
