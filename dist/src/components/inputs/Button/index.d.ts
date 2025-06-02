import { ComponentChildren } from 'preact';
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
declare const Button: ({ onClick, danger, variant, icon, children, }: {
    danger?: boolean;
    variant: Variant;
    onClick?: () => void;
    icon?: ComponentChildren;
    children: ComponentChildren;
}) => import("preact").JSX.Element;
export default Button;
