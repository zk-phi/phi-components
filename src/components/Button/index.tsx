import { ComponentChildren, ComponentChild } from "preact";
import classNames from "classnames";
import { define } from "preactement";
import { color, borderRadius, padding, fontSize, spacing, pressable, clickable } from "../../constants/theme";
import { css } from "goober";

type Variant = "primary" | "default" | "dotted" | "text";

type Props = {
  icon?: ComponentChild,
  variant?: Variant,
  danger?: boolean,
  onClick: () => void,
  children: ComponentChildren,
  parent?: HTMLElement,
};

const buttonStyle = css({
  "--fg": color.fg,
  "--distantFg": color.distantFg,
  "--baseAccent": color.primary,
  "--hoverAccent": color.primaryHover,
  "--activeAccent": color.primaryActive,
  "&.danger": {
    "--baseAccent": color.danger,
    "--hoverAccent": color.dangerHover,
    "--activeAccent": color.dangerActive,
  },

  outline: "none",
  lineHeight: 1,
  cursor: "pointer",
  textAlign: "center",
  fontSize: "1rem",

  "&.primary": {
    padding: padding.md,
    borderRadius: borderRadius.md,
    color: "var(--distantFg)",
    background: "var(--baseAccent)",
    border: "1px solid var(--baseAccent)",
    ...pressable,
    "&:hover": {
      color: "var(--distantFg)",
      background: "var(--hoverAccent)",
      border: "1px solid var(--hoverAccent)",
    },
  },

  "&.default": {
    padding: padding.md,
    borderRadius: borderRadius.md,
    color: "var(--fg)",
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
    color: "var(--fg)",
    background: "transparent",
    border: "1px dashed currentColor",
    ...clickable("var(--activeAccent)"),
    "&:hover": {
      color: "var(--baseAccent)",
    },
  },

  "&.text": {
    padding: 0,
    borderRadius: 0,
    color: "var(--fg)",
    background: "transparent",
    border: "none",
    borderBottom: "1px dotted currentColor",
    ...clickable("var(--activeAccent)"),
    "&:hover": {
      color: "var(--baseAccent)",
    },
  },
});

const iconStyle = css({
  display: "inline-block",
  fontSize: fontSize.smallIcon,
  lineHeight: 0,
  marginRight: spacing.minimal,
});

const Button = ({
  icon,
  children,
  variant = "default",
  danger = false,
  onClick,
}: Props) => {
  const pressable = variant !== "text" && variant !== "dotted";
  const clickable = !pressable;
  const className = classNames([buttonStyle, variant, { danger, pressable, clickable }]);
  return (
    <button class={ className } onClick={ onClick }>
      { icon && <span class={ iconStyle }>{ icon }</span> }
      { children }
    </button>
  );
};

Button.register = () => {
  define("phi-button", () => Button, {
    attributes: ["variant", "danger"],
  });
};

export default Button;
