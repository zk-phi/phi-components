import { useCallback, useEffect } from "preact/hooks";
import classNames from "classnames";
import { define } from "preactement";
import { useInputValue } from "../../utils/useInputValue";
import { font, color, borderRadius, padding, fontSize, spacing, boxShadow, fontSize } from "../../constants/theme";
import { css } from "goober";

type Size = "normal" | "small";

type Props = {
  value?: string,
  size?: Size,
  error?: boolean | "",
  onChange?: (value: string) => void,
  parent?: HTMLElement,
};

const style = css({
  "--baseAccent": color.primary,
  "--hoverAccent": color.primaryHover,
  "--activeAccent": color.primaryActive,
  "--boxShadow": boxShadow.primary,

  fontFamily: font,
  padding: padding.md,
  fontSize: fontSize.md,
  lineHeight: 1,
  color: color.fg,
  backgroundColor: color.bg,
  border: `1px solid ${color.border}`,
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
  const isError = error || error === "";
  const className = classNames([style, size, { error: isError }]);
  const handleInputValue = useInputValue(parent, value);

  const onInput = useCallback(e => {
    if (onChange) {
      onChange(e.target.value);
    }
    handleInputValue(e.target.value, e);
  }, [onChange, handleInputValue]);

  return (
    <input type="text" class={ className } value={ value } onInput={ onInput } />
  );
};

Input.register = () => {
  define("phi-input", () => Input, {
    attributes: ["value", "size", "error"],
    formAssociated: true,
  });
};

export default Input;
