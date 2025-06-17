import { useCallback } from "preact/hooks";
import type { ComponentChildren } from "preact";

const Component = ({
  onClick,
  danger,
  children,
}: {
  danger?: boolean,
  onClick?: () => void,
  children: ComponentChildren,
}) => (
  <button className={`phi-icon-button ${danger ? 'danger' : ''}`} onClick={onClick}>
    {children}
  </button>
);

export default Component;
