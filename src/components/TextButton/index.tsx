import type { ComponentChildren } from "preact";
import "./index.css";

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
const TextButton = ({
  onClick,
  danger,
  children,
}: {
  danger?: boolean,
  onClick: () => void,
  children: ComponentChildren,
}) => (
  <button
      className={`phi-text-button ${danger ? 'danger' : ''}`}
      onClick={onClick}
  >
    {children}
  </button>
);

export default TextButton;
