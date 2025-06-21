import type { ComponentChildren, JSX } from "preact";

const Component = ({
  onClick,
  danger,
  style,
  children,
}: {
  danger?: boolean,
  onClick?: () => void,
  style?: JSX.CSSProperties,
  children: ComponentChildren,
}) => (
  <button
      type="button"
      class={`phi-icon-button ${danger ? 'danger' : ''}`}
      style={style}
      onClick={onClick}>
    {children}
  </button>
);

export default Component;
