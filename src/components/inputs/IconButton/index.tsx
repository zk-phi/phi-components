import { useCallback } from "preact/hooks";
import type { ComponentChildren } from "preact";

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
const IconButton = ({
  onClick,
  danger,
  children,
}: {
  danger?: boolean,
  onClick: () => void,
  children: ComponentChildren,
}) => {
  const handler = useCallback((e: MouseEvent) => {
    onClick();
    e.preventDefault();
    e.stopPropagation();
  }, [onClick]);

  return (
    <button
        className={`phi-icon-button ${danger ? 'danger' : ''}`}
        onClick={handler}
    >
      {children}
    </button>
  );
};

export default IconButton;
