import { useCallback, useEffect, useMemo } from "preact/hooks";
import classNames from "classnames";
import { define } from "preactement";
import { useInputValue } from "../../utils/useInputValue";
import theme, { font, borderRadius, padding, spacing, fontSize, lineHeight } from "../../constants/theme";
import { isDark } from "../../utils/isDark";
import { css } from "goober";

type Size = "normal" | "small";

type Props = {
  value?: string,
  size?: Size,
  error?: boolean | string,
  onChange?: (value: string) => void,
  parent?: HTMLElement,
};

const style = (isError: boolean, isDark: boolean) => {
  const accentVariant = isError ? "danger" : "neutral";
  const color = theme.color[isDark ? "dark" : "light"];
  const accent = color.accent[accentVariant];
  const boxShadow = theme.boxShadow.focus[accentVariant];

  return css({
    fontFamily: font,
    padding: padding.md,
    fontSize: fontSize.md,
    lineHeight: lineHeight.md,
    color: isError ? accent.default : color.fg,
    backgroundColor: color.bg,
    border: `1px solid ${isError ? accent.default : color.border}`,
    borderRadius: borderRadius.md,
    outline: "none",

    "&:focus": {
      boxShadow: boxShadow,
    },

    "&:hover": {
      borderColor: accent.hover,
    },

    "&:focus:not(:hover)": {
      borderColor: accent.default,
    },

    "&:active": {
      borderColor: accent.active,
    },

    "&.small": {
      padding: padding.sm,
    },
  });
};

const Input = ({
  value = "",
  size = "normal",
  error = false,
  onChange,
  parent,
}: Props) => {
  const isError = (error && error !== "false") || error === "";
  const className = useMemo(() => classNames([
    style(isError, isDark.value),
    size,
  ]), [isError, isDark.value]);
  const [currentValue, handleInputValue] = useInputValue<string>(parent, value);

  const onInput = useCallback((e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      if (onChange) {
        onChange(e.target.value);
      }
      handleInputValue(e.target.value, e);
    }
  }, [onChange, handleInputValue]);

  return (
    <input type="text" class={ className } value={ currentValue } onInput={ onInput } />
  );
};

export const register = () => {
  define("phi-input", () => Input, {
    attributes: ["value", "size", "error"],
    formAssociated: true,
  });
};

export default Input;
