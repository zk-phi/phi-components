import { ComponentChildren, ComponentChild } from "preact";
import { useMemo } from "preact/hooks";
import classNames from "classnames";
import { define } from "preactement";
import theme, { font, borderRadius, padding, fontSize, spacing, clickable, lineHeight } from "../../constants/theme";
import { isDark } from "../../utils/isDark";
import { css } from "goober";

type Variant = "primary" | "default" | "dotted" | "text" | "icon";

type Props = {
  icon?: ComponentChild,
  variant?: Variant,
  danger?: boolean | string,
  onClick?: () => void,
  children: ComponentChildren,
  parent?: HTMLElement,
};

const buttonStyle = (isDanger: boolean, isDark: boolean) => {
  const color = theme.color[isDark ? "dark" : "light"];
  const accent = color.accent[isDanger ? "danger" : "neutral"];
  const pressableShadow = theme.boxShadow.pressable[isDark ? "dark" : "light"];

  return css({
    fontFamily: font,
    outline: "none",
    cursor: "pointer",
    textAlign: "center",
    fontSize: fontSize.md,

    "&.primary": {
      padding: padding.md,
      lineHeight: lineHeight.md,
      borderRadius: borderRadius.md,
      color: color.distantFg,
      background: accent.default,
      border: `1px solid ${accent.default}`,
      boxShadow: pressableShadow,
      "&:hover": {
        color: color.distantFg,
        background: accent.hover,
        border: `1px solid ${accent.hover}`,
      },
      "&:active": {
        boxShadow: "none",
        transform: "translateY(1px)",
      },
    },

    "&.default": {
      padding: padding.md,
      lineHeight: lineHeight.md,
      borderRadius: borderRadius.md,
      color: color.fg,
      background: "transparent",
      border: `1px solid ${color.fg}`,
      boxShadow: pressableShadow,
      "&:hover": {
        color: accent.default,
        border: `1px solid ${accent.default}`,
      },
      "&:active": {
        boxShadow: "none",
        transform: "translateY(1px)",
      },
    },

    "&.dotted": {
      padding: padding.md,
      lineHeight: lineHeight.md,
      borderRadius: borderRadius.md,
      color: color.fg,
      background: "transparent",
      border: `1px dashed currentColor`,
      ...clickable(accent.active),
      "&:hover:not(:active)": {
        color: accent.default,
      },
    },

    "&.text": {
      padding: 0,
      lineHeight: lineHeight.md,
      borderRadius: 0,
      color: color.fg,
      background: "transparent",
      border: "none",
      borderBottom: `1px dotted currentColor`,
      ...clickable(accent.active),
      "&:hover:not(:active)": {
        color: accent.default,
      },
    },

    "&.icon": {
      color: color.border,
      display: "inline-block",
      padding: padding.minimal,
      fontSize: fontSize.icon,
      lineHeight: 1,
      background: "transparent",
      border: "none",
      borderRadius: "50%",
      ...clickable(accent.active),
      "&:hover:not(:active)": {
        color: accent.default,
      },
    },
  });
};

const iconStyle = css({
  display: "inline-block",
  fontSize: fontSize.smallIcon,
  lineHeight: 0,
  marginRight: spacing.minimal,
  verticalAlign: "-0.05em",
});

const Button = ({
  icon,
  children,
  variant = "default",
  danger = false,
  onClick,
}: Props) => {
  const isDanger = (danger && danger !== "false") || danger === "";
  const className = useMemo(() => classNames([
    buttonStyle(isDanger, isDark.value),
    variant,
  ]), [isDanger, isDark.value]);
  return (
    <button class={ className } onClick={ onClick }>
      { icon && <span class={ iconStyle }>{ icon }</span> }
      { children }
    </button>
  );
};

export const register = () => {
  define("phi-button", () => Button, {
    attributes: ["variant", "danger"],
  });
};

export default Button;
