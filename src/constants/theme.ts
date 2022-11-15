export const color = {
  fg:        "#333333",
  distantFg: "#ffffff",
  bg:        "#ffffff",
  primaryActive: "#de9e00", // okhsl(80, 100, 70)
  primary:       "#eeaa00", // okhsl(80, 100, 75)
  primaryHover:  "#ffb81c", // okhsl(80, 100, 80)
  dangerActive: "#ff3a45", // okhsl(24, 100, 60)
  danger:       "#ff6261", // okhsl(24, 100, 65)
  dangerHover:  "#ff7f7a", // okhsl(24, 100, 70)
};

export const borderRadius = {
  md: "8px",
};

export const padding = {
  md: "0.75rem 1rem",
};

export const spacing = {
  minimal: "0.25rem",
  inline: "0.375rem",
};

export const fontSize = {
  smallIcon: "16px",
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
