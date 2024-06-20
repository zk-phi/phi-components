import { useProp, useRef, useCallback, createType, css, c } from "atomico";
import theme from "../../../constants/theme";
import { theme as themeCss } from "../../../constants/themeCss";
import style from "./index.css?raw";

const buttonStyle = (danger: boolean, isDark: boolean, variant: string) => {
  const themeVariant = isDark ? "dark" : "light";
  const colorVariant = danger ? "danger" : "neutral";
  const color = theme.color[themeVariant];
  const accent = color[colorVariant];
  const pressableShadow = theme.boxShadow[themeVariant].pressable;

  return {
    width: "100%",
    fontFamily: theme.font.family,
    fontSize: theme.font.size.md,

    ...(variant === "primary" ? {
      lineHeight: theme.font.lineHeight.md,
    } : {}),

    ...(variant === "default" ? {
      lineHeight: theme.font.lineHeight.md,
    } : {}),

    ...(variant === "dotted" ? {
      lineHeight: theme.font.lineHeight.md,
    } : {}),

    ...(variant === "text" ? {
      lineHeight: theme.font.lineHeight.md,
    } : {}),

    ...(variant === "icon" ? {
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
    } : {}),
  };
};

const Button = ({ onClick, variant, danger }) => {
  const ref = useRef();

  /* support both "onClick" prop and the "click" event */
  const onClickInternal = useCallback((e: Event) => {
    e.stopPropagation();
    ref.current?.dispatchEvent(new Event("click"));
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <host ref={ref} shadowDom>
      <button
          class={`button ${variant} ${danger ? 'danger' : ''}`}
          style={buttonStyle(danger, false, variant)}
          onClick={onClickInternal}>
        <slot name="icon" class="button-icon" />
        <slot />
      </button>
    </host>
  );
};

Button.props = {
  onClick: Function,
  danger: {
    type: Boolean,
    value: false,
  },
  variant: {
    type: String,
    value: "default",
  },
};

Button.styles = [themeCss, css`${style}`];

export default c(Button);
