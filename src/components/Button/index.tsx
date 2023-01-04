import { ComponentChildren, ComponentChild } from "preact";
import { useMemo } from "preact/hooks";
import classNames from "classnames";
import { define } from "preactement";
import theme from "../../constants/theme";
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
  const themeVariant = isDark ? "dark" : "light";
  const colorVariant = isDanger ? "danger" : "neutral";
  const color = theme.color[themeVariant];
  const accent = color[colorVariant];
  const pressableShadow = theme.boxShadow[themeVariant].pressable;

  return css({
    fontFamily: theme.font.family,
    outline: "none",
    cursor: "pointer",
    textAlign: "center",
    fontSize: theme.font.size.md,

    "&.primary": {
      padding: theme.spacing.padding.md,
      lineHeight: theme.font.lineHeight.md,
      borderRadius: theme.borderRadius.md,
      color: color.distantFg,
      background: accent.default,
      border: `1px solid ${accent.default}`,
      boxShadow: pressableShadow[colorVariant].default,
      transform: "translateY(-1px)",
      "&:hover": {
        color: color.distantFg,
        background: accent.hover,
        borderColor: accent.hover,
        boxShadow: pressableShadow[colorVariant].hover,
      },
      "&:active": {
        boxShadow: "none",
        transform: "none",
      },
    },

    "&.default": {
      padding: theme.spacing.padding.md,
      lineHeight: theme.font.lineHeight.md,
      borderRadius: theme.borderRadius.md,
      color: color.fg,
      background: "transparent",
      border: `1px solid ${color.fg}`,
      boxShadow: pressableShadow.default,
      transform: "translateY(-1px)",
      "&:hover": {
        color: accent.default,
        border: `1px solid ${accent.default}`,
        boxShadow: pressableShadow[colorVariant].default,
      },
      "&:active": {
        color: accent.active,
        border: `1px solid ${accent.active}`,
        boxShadow: "none",
        transform: "none",
      },
    },

    "&.dotted": {
      padding: theme.spacing.padding.md,
      lineHeight: theme.font.lineHeight.md,
      borderRadius: theme.borderRadius.md,
      color: color.fg,
      background: "transparent",
      border: `1px dashed currentColor`,
      "&:hover:not(:active)": {
        color: accent.default,
      },
      "&:active": {
        color: accent.active,
        backgroundColor: accent.bg,
      },
    },

    "&.text": {
      padding: 0,
      lineHeight: theme.font.lineHeight.md,
      borderRadius: 0,
      color: color.fg,
      background: "transparent",
      border: "none",
      borderBottom: `1px dotted currentColor`,
      "&:hover:not(:active)": {
        color: accent.default,
      },
      "&:active": {
        color: accent.active,
        backgroundColor: accent.bg,
      },
    },

    "&.icon": {
      color: color.border,
      display: "inline-block",
      padding: theme.spacing.padding.minimal,
      fontSize: theme.font.size.icon,
      lineHeight: 1,
      background: "transparent",
      border: "none",
      borderRadius: "50%",
      "&:hover:not(:active)": {
        color: accent.default,
      },
      "&:active": {
        color: accent.active,
        backgroundColor: accent.bg,
      },
    },
  });
};

const iconStyle = css({
  display: "inline-block",
  fontSize: theme.font.size.smallIcon,
  lineHeight: 0,
  marginRight: theme.spacing.margin.minimal,
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
