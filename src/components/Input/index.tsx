import { useCallback, useEffect, useMemo } from "preact/hooks";
import { define } from "preactement";
import { useInputValue } from "../../utils/useInputValue";
import theme from "../../constants/theme";
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

const style = (isError: boolean, isDark: boolean, size: Size) => {
  const themeVariant = isDark ? "dark" : "light";
  const accentVariant = isError ? "danger" : "neutral";
  const color = theme.color[themeVariant];
  const accent = color[accentVariant];
  const boxShadow = theme.boxShadow[themeVariant].focus[accentVariant];

  return css({
    fontFamily: theme.font.family,
    padding: size === "small" ? theme.spacing.padding.sm : theme.spacing.padding.md,
    fontSize: theme.font.size.md,
    lineHeight: theme.font.lineHeight.md,
    color: isError ? accent.default : color.fg,
    backgroundColor: color.bg,
    border: `1px solid ${isError ? accent.default : color.border}`,
    borderRadius: theme.borderRadius.md,
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
  const className = useMemo(
    () => style(isError, isDark.value, size),
    [isError, isDark.value, size],
  );
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
