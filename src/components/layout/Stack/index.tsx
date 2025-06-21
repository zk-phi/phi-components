import type { ComponentChildren } from "preact";

export type Gap = "sm" | "md";

const Component = ({ gap, children }: {
  gap: Gap,
  children: ComponentChildren,
}) => (
  <div class={`phi-stack ${gap}`}>
    {children}
  </div>
);

export default Component;
