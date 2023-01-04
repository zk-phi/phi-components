import { useState, useEffect } from "preact/hooks";
import { css } from "goober";
import { globalStyles } from "../../constants/theme";
import { define } from "preactement";
import { isDark } from "../../utils/isDark";

const GlobalStyles = () => {
  const [lastClassName, setLastClassName] = useState(
    css(globalStyles(isDark.value)),
  );

  useEffect(() => {
    const newClassName = css(globalStyles(isDark.value));
    document.documentElement.classList.remove(lastClassName);
    document.documentElement.classList.add(newClassName);
    setLastClassName(newClassName);
  }, [isDark.value]);

  return null;
};

export const register = () => {
  define("phi-global-styles", () => GlobalStyles);
};

export default GlobalStyles;
