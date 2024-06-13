import { ComponentChildren } from "preact";
import { useMemo } from "preact/hooks";
import { define } from "preactement";
import { css, glob } from "goober";
import theme from "../../../constants/theme";

type MarginSize = "inline" | "sm" | "md" | "lg" | "xl";
type Align = "center" | "left" | "right" | "stretch";

type Props = {
  size?: MarginSize,
  align?: Align,
  children: ComponentChildren,
};

type Attrs = {
  size?: string,
  align?: string,
  children: ComponentChildren,
};

const style = (size: MarginSize, align: Align) => css({
  display: "flex",
  alignItems: align === "left" ? "flex-start" : align === "right" ? "flex-end" : align,
  flexDirection: "column",
  "& > * + *": {
    marginTop: theme.spacing.margin[size],
  },
});

const VSpace = ({
  size = "md",
  align = "stretch",
  children,
}: Props) => {
  const className = useMemo(() => style(size, align), [size, align]);
  return (
    <div className={ className }>
      { children }
    </div>
  );
};

const WCVSpace = ({ size, align, children }: Attrs) => {
  const normalizedSize = useMemo(() => (
    size === "inline" || size === "sm" || size === "lg" || size === "xl" ? size : "md"
  ), [size]);

  const normalizedAlign = useMemo(() => (
    align === "left" || align === "right" || align === "center" ? align : "stretch"
  ), [align]);

  return (
    <VSpace size={ normalizedSize } align={ normalizedAlign }>
      { children }
    </VSpace>
  )
};

export const register = () => {
  define("phi-vspace", () => WCVSpace, {
    attributes: ["size", "align"],
  });
  glob({
    "phi-vspace": {
      display: "block",
    },
  });
};

export default VSpace;
