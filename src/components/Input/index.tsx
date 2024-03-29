import { useCallback, useEffect, useMemo } from "preact/hooks";
import { define } from "preactement";
import { useInputValue } from "../../utils/useInputValue";
import theme from "../../constants/theme";
import { isDark } from "../../utils/isDark";
import { css } from "goober";

type Size = "normal" | "small";

type Attrs = {
  value?: string,
  size?: string,
  error?: string,
  parent?: HTMLElement,
};

type Props = {
  value: string,
  onChange: (value: string, e: Event) => void,
  size?: Size,
  error?: boolean,
};

const style = (error: boolean, isDark: boolean, size: Size) => {
  const themeVariant = isDark ? "dark" : "light";
  const accentVariant = error ? "danger" : "neutral";
  const color = theme.color[themeVariant];
  const accent = color[accentVariant];
  const boxShadow = theme.boxShadow[themeVariant].focus[accentVariant];

  return css({
    fontFamily: theme.font.family,
    padding: size === "small" ? theme.spacing.padding.sm : theme.spacing.padding.md,
    fontSize: theme.font.size.md,
    lineHeight: theme.font.lineHeight.md,
    color: error ? accent.default : color.fg,
    backgroundColor: color.bg,
    border: `1px solid ${error ? accent.default : color.border}`,
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
}: Props) => {
  const className = useMemo(() => (
    style(error, isDark.value, size)
  ), [error, isDark.value, size]);

  const onInput = useCallback((e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      onChange(e.target.value, e);
    }
  }, [onChange]);

  return (
    <input type="text" class={ className } value={ value } onInput={ onInput } />
  );
};

const WCInput = ({
  value = "",
  size,
  error,
  parent,
}: Attrs) => {
  const [currentValue, handleInputValue] = useInputValue<string>(parent, "value", value);

  return (
    <Input
        value={ currentValue }
        size={ size === "small" ? "small" : "normal" }
        error={ (error && error !== "false") || error === "" }
        onChange={ handleInputValue } />
  );
}

export const register = () => {
  define("phi-input", () => WCInput, {
    attributes: ["value", "size", "error"],
    formAssociated: true,
  });
};

export default Input;
