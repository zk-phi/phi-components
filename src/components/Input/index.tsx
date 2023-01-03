import { useCallback, useEffect } from "preact/hooks";
import classNames from "classnames";
import { define } from "preactement";
import { useInputValue } from "../../utils/useInputValue";
import { font, color, borderRadius, padding, spacing, boxShadow, fontSize, lineHeight } from "../../constants/theme";
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

const style = css({
  "--baseAccent": color.primary,
  "--hoverAccent": color.primaryHover,
  "--activeAccent": color.primaryActive,
  "--border": color.border,
  "--bg": color.bg,
  "--fg": color.fg,
  "--boxShadow": boxShadow.primary,
  "&.dark": {
    "--bg": color.dark.bg,
    "--fg": color.dark.fg,
    "--border": color.dark.border,
  },

  fontFamily: font,
  padding: padding.md,
  fontSize: fontSize.md,
  lineHeight: lineHeight.md,
  color: "var(--fg)",
  backgroundColor: "var(--bg)",
  border: `1px solid var(--border)`,
  borderRadius: borderRadius.md,
  outline: "none",

  "&.error": {
    "--baseAccent": color.danger,
    "--hoverAccent": color.dangerHover,
    "--activeAccent": color.dangerActive,
    "--boxShadow": boxShadow.danger,
    color: "var(--baseAccent)",
  },

  "&:focus": {
    boxShadow: "var(--boxShadow)",
  },

  "&:hover": {
    borderColor: "var(--hoverAccent)",
  },

  "&.error:not(:hover)": {
    borderColor: "var(--baseAccent)",
  },

  "&:focus:not(:hover)": {
    borderColor: "var(--baseAccent)",
  },

  "&:active": {
    borderColor: "var(--activeAccent)",
  },

  "&.small": {
    padding: padding.sm,
  },
});

const Input = ({
  value = "",
  size = "normal",
  error = false,
  onChange,
  parent,
}: Props) => {
  const isError = (error && error !== "false") || error === "";
  const className = classNames([style, size, { error: isError, dark: isDark.value }]);
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
