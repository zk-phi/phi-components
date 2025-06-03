import { useCallback } from "preact/hooks";
import type { ComponentChildren } from "preact";

export type Variant = "default" | "primary" | "dotted";

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
  variant: Variant,
  onClick: () => void,
  icon?: ComponentChildren,
  children: ComponentChildren,
}) => {
  const handler = useCallback((e: MouseEvent) => {
    onClick();
    e.preventDefault();
    e.stopPropagation();
  }, [onClick]);

  return (
    <button
        className={`phi-button ${variant} ${danger ? 'danger' : ''}`}
        onClick={handler}
    >
      {icon && <span className="icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
