// okhsl color picker -> https://bottosson.github.io/misc/colorpicker/

//  1/16 ... 10
//  2/16 ... 20 (1/8)
//  3/16 ... 30
//  4/16 ... 40 (1/4)
//  5/16 ... 50
//  6/16 ... 60
//  7/16 ... 70
//  8/16 ... 80 (1/2)
//  9/16 ... 90
// 10/16 ... a0
// 11/16 ... b0
// 12/16 ... c0 (3/4)
// 13/16 ... d0
// 14/16 ... e0 (7/8)
// 15/16 ... f0

const palette = {
  light:{
    neutral: {
      lighter: "#ffb81c", // okhsl(80, 100, 80)
      base:    "#eeaa00", // okhsl(80, 100, 75)
      darker:  "#de9e00", // okhsl(80, 100, 70)
    },
    danger: {
      lighter: "#fa837e", // okhsl(24, 90, 70)
      base:    "#f76b68", // okhsl(24, 90, 65)
      darker:  "#f15252", // okhsl(24, 90, 60)
    },
  },
  dark: {
    neutral: {
      lighter: "#e6af47", // okhsl(80, 80, 75)
      base:    "#d7a139", // okhsl(80, 80, 70)
      darker:  "#c79431", // okhsl(80, 80, 65)
    },
    danger: {
      lighter: "#ee736e", // okhsl(24, 80, 65)
      base:    "#e65f5c", // okhsl(24, 80, 60)
      darker:  "#d94e4d", // okhsl(24, 80, 65)
    },
  },
};

const color = {
  light: {
    bg:        "#ffffffff",
    distantFg: "#ffffffff",
    fg:        "#000000d0", // #323232
    border:    "#00000040", // #b2b2b2
    neutral: {
      bg:      `${palette.light.neutral.base}20`,
      hover:   palette.light.neutral.lighter,
      default: palette.light.neutral.base,
      active:  palette.light.neutral.darker,
    },
    danger: {
      bg:      `${palette.light.danger.base}20`,
      hover:   palette.light.danger.lighter,
      default: palette.light.danger.base,
      active:  palette.light.danger.darker,
    },
  },
  dark: {
    bg:        "#222222ff",
    distantFg: "#222222ff",
    fg:        "#ffffffd0", // #d4d4d4
    border:    "#ffffff40", // #656565
    neutral: {
      bg:      `${palette.dark.neutral.base}20`,
      hover:   palette.dark.neutral.darker,
      default: palette.dark.neutral.base,
      active:  palette.dark.neutral.lighter,
    },
    danger: {
      bg:      `${palette.dark.danger.base}20`,
      hover:   palette.dark.danger.darker,
      default: palette.dark.danger.base,
      active:  palette.dark.danger.lighter,
    },
  },
};

const boxShadow = {
  light: {
    pressable: {
      default: "0 1px #00000040",
      neutral: {
        default: `0 1px #00000020, 0 1px ${palette.light.neutral.base}`,
        hover:   `0 1px #00000020, 0 1px ${palette.light.neutral.lighter}`,
      },
      danger: {
        default: `0 1px #00000020, 0 1px ${palette.light.danger.base}`,
        hover:   `0 1px #00000020, 0 1px ${palette.light.danger.lighter}`,
      },
    },
    focus: {
      neutral: `0 0 0 2px ${palette.light.neutral.base}30`,
      danger:  `0 0 0 2px ${palette.light.danger.base}30`,
    },
  },
  dark: {
    pressable: {
      default: "0 1px #ffffff80",
      neutral: {
        default: `0 1px #00000040, 0 1px ${palette.dark.neutral.base}`,
        hover:   `0 1px #00000040, 0 1px ${palette.dark.neutral.darker}`,
      },
      danger: {
        default: `0 1px #00000040, 0 1px ${palette.dark.danger.base}`,
        hover:   `0 1px #00000040, 0 1px ${palette.dark.danger.darker}`,
      },
    },
    focus: {
      neutral: `0 0 0 2px ${palette.dark.neutral.base}30`,
      danger:  `0 0 0 2px ${palette.dark.danger.base}30`,
    },
  },
};

export default {
  color,
  boxShadow,
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
