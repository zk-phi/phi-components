import type { ComponentChildren, JSX } from "preact";

export type Padding = "sm" | "md";

const Component = ({
  padding,
  maxWidth,
  style,
  children,
}: {
  padding: Padding,
  maxWidth: number,
  style?: JSX.CSSProperties,
  children: ComponentChildren,
}) => (
  <div
      class={`phi-responsive-container ${padding}`}
      style={{ maxWidth: maxWidth, ...style }}>
    {children}
  </div>
);

export default Component;
