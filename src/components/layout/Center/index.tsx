import { ComponentChildren } from "preact";
import { useMemo } from "preact/hooks";
import { define } from "preactement";
import { css, glob } from "goober";

type Props = {
  containerStyle?: any,
  containerClass?: string,
  children: ComponentChildren,
};

const style = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Center = ({ width, height, containerStyle, containerClass, children }: Props) => {
  const className = useMemo(() => `${style} ${containerClass}`, [containerClass]);
  return (
    <div className={ className } style={ containerStyle }>
      { children }
    </div>
  );
};

export const register = () => {
  define("phi-center", () => Center, {
    attributes: ["container-style", "container-class"],
  });
  glob({
    "phi-center": {
      display: "block",
    },
  });
};

export default Center;
