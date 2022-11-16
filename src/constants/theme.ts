export const font = "'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif";

export const color = {
  fg:        "#333333",
  distantFg: "#ffffff",
  bg:        "#ffffff",
  border:    "#aaaaaa",
  primaryActive: "#de9e00", // okhsl(80, 100, 70)
  primary:       "#eeaa00", // okhsl(80, 100, 75)
  primaryHover:  "#ffb81c", // okhsl(80, 100, 80)
  dangerActive: "#ff3a45", // okhsl(24, 100, 60)
  danger:       "#ff6261", // okhsl(24, 100, 65)
  dangerHover:  "#ff7f7a", // okhsl(24, 100, 70)
};

export const boxShadow = {
  primary: "0 0 0 2px rgba(238, 170, 0, 0.2)",
  danger:  "0 0 0 2px rgba(255, 98, 97, 0.2)",
};

export const borderRadius = {
  md: "8px",
};

export const padding = {
  minimal: "4px",
  sm: "5.6px 7.84px", // 0.4em 0.5em @14px
  md: "10.5px 14px",  // 0.75em 1em @14px
};

export const spacing = {
  minimal: "3.5px",  // 0.25em @14px
  inline: "5.25px ", // 0.375em @14px
};

export const fontSize = {
  smallIcon: "16px",
  md: "14px",
  icon: "26px",
};

export const pressable = {
  boxShadow: "0 1px rgba(0, 0, 0, 0.1)",
  "&:active": {
    boxShadow: "none",
    transform: "translateY(1px)",
  },
};

export const clickable = (color) => ({
  "&:active": {
    color: color,
    backgroundColor: "rgba(238, 170, 0, 0.1)", // #ea0 10%
  },
});
