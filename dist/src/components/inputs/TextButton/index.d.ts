import { ComponentChildren } from 'preact';
/**
 * Buttons that look like link texts. Suitable when creating in-text buttons.
 *
 * Usage (CSS-only installation):
 *
 * ```html
 * <button class="phi-text-button" onclick="handleclick">
 *   👆 Click me
 * </button>
 * ```
 *
 * Usage (as a React component):
 *
 * ```html
 * <TextButton onClick={clickHandler}>
 *   👆 Click me
 * </Button>
 * ```
 */
declare const TextButton: ({ onClick, danger, children, }: {
    danger?: boolean;
    onClick: () => void;
    children: ComponentChildren;
}) => import("preact").JSX.Element;
export default TextButton;
