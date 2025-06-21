import { useMemo, useEffect, useState } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";

export type Gap = "sm" | "md";
export type ConfigurationEntry = { width: number, columns: number[] };

const Component = ({
  gap,
  configuration,
  style,
  children,
}: {
  gap: Gap,
  configuration: ConfigurationEntry[],
  style?: JSX.CSSProperties,
  children: ComponentChildren,
}) => {
  const [width, setWidth] = useState(() => document.body.clientWidth);

  const sortedConfiguration = useMemo(() => (
    configuration.sort((a, b) => b.width - a.width)
  ), [configuration]);

  const template = useMemo(() => {
    const row = sortedConfiguration.find(item => item.width <= width) ?? { columns: [1] };
    return row.columns.map(col => `${col}fr`).join(" ");
  }, [sortedConfiguration, width]);

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = document.body.clientWidth;
      if (width !== newWidth) {
        setWidth(newWidth);
      }
    };
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [width]);

  return (
    <div
        class={`phi-responsive-columns ${gap}`}
        style={{ gridTemplateColumns: template, ...style }}>
      {children}
    </div>
  )
};

export default Component;
