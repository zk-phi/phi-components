import { ComponentChildren, ComponentChild } from "preact";
import classNames from "classnames";
import { define } from "preactement";
import { font, color, borderRadius, padding, fontSize, spacing, pressable, clickable, lineHeight } from "../../constants/theme";
import { css } from "goober";

type Variant = "primary" | "default" | "dotted" | "text" | "icon";

type Props = {
  icon?: ComponentChild,
  variant?: Variant,
  danger?: boolean | "",
  onClick?: () => void,
  children: ComponentChildren,
  parent?: HTMLElement,
};

const buttonStyle = css({
  "--baseAccent": color.primary,
  "--hoverAccent": color.primaryHover,
  "--activeAccent": color.primaryActive,
  "&.danger": {
    "--baseAccent": color.danger,
    "--hoverAccent": color.dangerHover,
    "--activeAccent": color.dangerActive,
  },

  fontFamily: font,
  outline: "none",
  lineHeight: lineHeight.md,
  cursor: "pointer",
  textAlign: "center",
  fontSize: fontSize.md,

  "&.primary": {
    padding: padding.md,
    borderRadius: borderRadius.md,
    color: color.distantFg,
    background: "var(--baseAccent)",
    border: "1px solid var(--baseAccent)",
    ...pressable,
    "&:hover": {
      color: color.distantFg,
      background: "var(--hoverAccent)",
      border: "1px solid var(--hoverAccent)",
    },
  },

  "&.default": {
    padding: padding.md,
    borderRadius: borderRadius.md,
    color: color.fg,
    background: "transparent",
    border: "1px solid currentColor",
    ...pressable,
    "&:hover": {
      color: "var(--baseAccent)",
    },
  },

  "&.dotted": {
    padding: padding.md,
    borderRadius: borderRadius.md,
    color: color.fg,
    background: "transparent",
    border: "1px dashed currentColor",
    ...clickable("var(--activeAccent)"),
    "&:hover:not(:active)": {
      color: "var(--baseAccent)",
    },
  },

  "&.text": {
    padding: 0,
    borderRadius: 0,
    color: color.fg,
    background: "transparent",
    border: "none",
    borderBottom: "1px dotted currentColor",
    ...clickable("var(--activeAccent)"),
    "&:hover:not(:active)": {
      color: "var(--baseAccent)",
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
    ...clickable("var(--activeAccent)"),
    "&:hover:not(:active)": {
      color: "var(--baseAccent)",
    },
  },
});

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
  const isDanger = danger || danger === "";
  const className = classNames([buttonStyle, variant, { danger: isDanger }]);
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
