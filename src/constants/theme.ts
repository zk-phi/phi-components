export default {
  color: {
    light: {
      bg:        "#ffffff",
      distantFg: "#ffffff",
      fg:        "rgba(0, 0, 0, 0.8)", // #333333
      border:    "rgba(0, 0, 0, 0.3)", // #b2b2b2
      accent: {
        neutral: {
          hover:   "#ffb81c", // okhsl(80, 100, 80)
          default: "#eeaa00", // okhsl(80, 100, 75)
          active:  "#de9e00", // okhsl(80, 100, 70)
        },
        danger: {
          hover:   "#fa837e", // okhsl(24, 90, 70)
          default: "#f76b68", // okhsl(24, 90, 65)
          active:  "#f15252", // okhsl(24, 90, 60)
        },
      },
    },
    dark: {
      bg:        "#222222",
      distantFg: "#222222",
      fg:        "rgba(255, 255, 255, 0.8)", // #d3d3d3
      border:    "rgba(255, 255, 255, 0.3)", // #646464
      accent: {
        neutral: {
          hover:   "#c79431", // okhsl(80, 80, 65)
          default: "#d7a139", // okhsl(80, 80, 70)
          active:  "#e6af47", // okhsl(80, 80, 75)
        },
        danger: {
          hover:   "#d94e4d", // okhsl(24, 80, 55)
          default: "#e65f5c", // okhsl(24, 80, 60)
          active:  "#ee736e", // okhsl(24, 80, 65)
        },
      },
    },
  },
  boxShadow: {
    pressable: {
      light: "0 1px rgba(0, 0, 0, 0.1)",
      dark: "0 1px rgba(255, 255, 255, 0.3)",
    },
    focus: {
      neutral: "0 0 0 2px rgba(238, 170, 0, 0.2)",
      danger:  "0 0 0 2px rgba(255, 98, 97, 0.2)",
    },
  },
};

export const font = "'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo, sans-serif";

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

export const lineHeight = {
  md: "16px",
};

export const clickable = (color: string) => ({
  "&:active": {
    color: color,
    backgroundColor: "rgba(238, 170, 0, 0.1)", // #ea0 10%
  },
});
