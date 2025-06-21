import type { ComponentChildren, JSX } from "preact";

export type Padding = "sm" | "md";

const Component = ({
  padding,
  maxWidth = "100%",
  style,
  children,
}: {
  padding: Padding,
  maxWidth?: number | "100%",
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
