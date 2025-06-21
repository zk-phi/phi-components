import { useMemo } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";

export type Cols = number | "auto-fit";
export type ColWidth = number | "max-content" | "min-content";

export type Gap = "sm" | "md";

const _formatWidth = (width: ColWidth): string => (
  typeof width === "number" ? `${width}px` : width
);

const Component = ({
  gap,
  cols = "auto-fit",
  colWidth,
  colMinWidth = "min-content",
  colMaxWidth = "min-content",
  style,
  children,
}: {
  gap: Gap,
  cols?: Cols,
  colWidth?: ColWidth,
  colMinWidth?: ColWidth,
  colMaxWidth?: ColWidth,
  style?: JSX.CSSProperties,
  children: ComponentChildren,
}) => {
  const template = useMemo(() => {
    const width = colWidth ? (
      _formatWidth(colWidth)
    ) : (
      `minmax(${_formatWidth(colMinWidth)}, ${_formatWidth(colMaxWidth)})`
    );
    return `repeat(${cols}, ${width})`;
  }, [cols, colWidth, colMinWidth, colMaxWidth]);

  return (
    <div class={`phi-grid ${gap}`} style={{ gridTemplateColumns: template, ...style }}>
      {children}
    </div>
  )
};

export default Component;
