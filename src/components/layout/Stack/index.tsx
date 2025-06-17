import type { ComponentChildren } from "preact";

export type Size = "sm" | "md";

const Component = ({ size, children }: {
  size: Size,
  children: ComponentChildren,
}) => (
  <div className={`phi-stack ${size}`}>
    {children}
  </div>
);

export default Component;
