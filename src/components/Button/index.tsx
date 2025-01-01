import * as React from "react";
import "./index.css";

/**
 * Basic button components with some variants.
 *
 * Usage (CSS-only installation):
 *
 * ```html
 * <button class="phi-button default" onclick="handleclick">
 *   <span class="icon">🍺</span>
 *   Cheers!
 * </button>
 * ```
 *
 * Usage (as a React component):
 *
 * ```html
 * <Button variant="default" onClick={clickHandler} icon="🍺">
 *   Cheers!
 * </Button>
 * ```
 */
const Button = ({
  onClick,
  danger,
  variant = "default",
  icon,
  children,
}: {
  danger?: boolean,
  variant: "default" | "primary" | "dotted" | "icon",
  onClick: () => void,
  icon?: React.ReactNode,
  children: React.ReactNode,
}) => (
  <button
      className={`phi-button ${variant} ${danger ? 'danger' : ''}`}
      onClick={onClick}
  >
    {icon && <span className="icon">{icon}</span>}
    {children}
  </button>
);

export default Button;
