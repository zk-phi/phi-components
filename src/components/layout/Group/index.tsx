import type { ComponentChildren, JSX } from "preact";

export type Gap = "sm" | "md";
export type Align = "left" | "center" | "right" | "space-between";

const Component = ({ gap, align = "left", style, children }: {
  gap: Gap,
  align?: Align,
  style?: JSX.CSSProperties,
  children: ComponentChildren,
}) => (
  <div class={`phi-group ${gap} ${align}`} style={style}>
    {children}
  </div>
);

export default Component;
