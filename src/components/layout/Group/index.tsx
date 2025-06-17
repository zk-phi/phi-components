import type { ComponentChildren } from "preact";

export type Size = "sm" | "md";
export type Align = "left" | "center" | "right" | "space-between";

const Component = ({ size, align, children }: {
  size: Size,
  align: Align,
  children: ComponentChildren,
}) => (
  <div className={`phi-group ${size} ${align}`}>
    {children}
  </div>
);

export default Component;
