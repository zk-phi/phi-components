import type { ComponentChildren, JSX } from "preact";

export type Gap = "sm" | "md";

const Component = ({ gap, style, children }: {
  gap: Gap,
  style?: JSX.CSSProperties,
  children: ComponentChildren,
}) => (
  <div class={`phi-stack ${gap}`} style={style}>
    {children}
  </div>
);

export default Component;
