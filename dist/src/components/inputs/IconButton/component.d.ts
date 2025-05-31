import { ComponentChildren } from 'preact';
/**
 * Icon-only less-significant buttons.
 * Suitable when the icon is widely recognized so that you don't need to annotate.
 * i.e. "x" for close buttons
 *
 * Usage (CSS-only installation):
 *
 * ```html
 * <button class="phi-icon-button" onclick="handleclick">
 *   ＋
 * </button>
 * ```
 *
 * Usage (as a React component):
 *
 * ```html
 * <IconButton onClick={clickHandler}>
 *   ＋
 * </Button>
 * ```
 */
declare const IconButton: ({ onClick, danger, children, }: {
    danger?: boolean;
    onClick: () => void;
    children: ComponentChildren;
}) => import("preact").JSX.Element;
export default IconButton;
