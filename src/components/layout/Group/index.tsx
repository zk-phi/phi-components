import type { ComponentChildren } from "preact";

export type Gap = "sm" | "md";
export type Align = "left" | "center" | "right" | "space-between";

const Component = ({ gap, align, children }: {
  gap: Gap,
  align: Align,
  children: ComponentChildren,
}) => (
  <div class={`phi-group ${gap} ${align}`}>
    {children}
  </div>
);

export default Component;
