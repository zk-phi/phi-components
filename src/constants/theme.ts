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

const _palette = {
  light:{
    neutral: {
      lighter: "#ffb81c", // okhsl(80, 100, 80)
      base:    "#eeaa00", // okhsl(80, 100, 75)
      darker:  "#cd9200", // okhsl(80, 100, 65)
    },
    danger: {
      lighter: "#fa837e", // okhsl(24, 90, 70)
      base:    "#f76b68", // okhsl(24, 90, 65)
      darker:  "#e53c42", // okhsl(24, 90, 55)
    },
  },
  dark: {
    neutral: {
      lighter: "#e6af47", // okhsl(80, 80, 75)
      base:    "#d7a139", // okhsl(80, 80, 70)
      darker:  "#c79431", // okhsl(80, 80, 65)
    },
    danger: {
      lighter: "#f38882", // okhsl(24, 80, 70)
      base:    "#ee736e", // okhsl(24, 80, 65)
      darker:  "#e65f5c", // okhsl(24, 80, 60)
    },
  },
};

const _fontFamilies = [
  "'Helvetica Neue'",
  "Arial",
  "'Hiragino Kaku Gothic ProN'",
  "'Hiragino Sans'",
  "Meiryo",
  "sans-serif",
];

const color = {
  light: {
    bg:        "#ffffffff",
    distantFg: "#ffffffff",
    fg:        "#000000d0", // #323232
    border:    "#00000040", // #b2b2b2
    neutral: {
      bg:      `${_palette.light.neutral.base}20`,
      hover:   _palette.light.neutral.lighter,
      default: _palette.light.neutral.base,
      active:  _palette.light.neutral.darker,
    },
    danger: {
      bg:      `${_palette.light.danger.base}20`,
      hover:   _palette.light.danger.lighter,
      default: _palette.light.danger.base,
      active:  _palette.light.danger.darker,
    },
  },
  dark: {
    bg:         "#222222ff",
    distantFg:  "#222222ff",
    elevatedBg: "#444444ff",
    fg:         "#ffffffd0", // #d4d4d4
    border:     "#ffffff40", // #656565
    neutral: {
      bg:      `${_palette.dark.neutral.base}20`,
      hover:   _palette.dark.neutral.darker,
      default: _palette.dark.neutral.base,
      active:  _palette.dark.neutral.lighter,
    },
    danger: {
      bg:      `${_palette.dark.danger.base}20`,
      hover:   _palette.dark.danger.darker,
      default: _palette.dark.danger.base,
      active:  _palette.dark.danger.lighter,
    },
  },
};

const boxShadow = {
  light: {
    pressable: {
      default: "0 1px #00000040",
      neutral: {
        default: `0 1px #00000020, 0 1px ${_palette.light.neutral.base}`,
        hover:   `0 1px #00000020, 0 1px ${_palette.light.neutral.lighter}`,
      },
      danger: {
        default: `0 1px #00000020, 0 1px ${_palette.light.danger.base}`,
        hover:   `0 1px #00000020, 0 1px ${_palette.light.danger.lighter}`,
      },
    },
    focus: {
      neutral: `0 0 0 2px ${_palette.light.neutral.base}30`,
      danger:  `0 0 0 2px ${_palette.light.danger.base}30`,
    },
    elevated: "#00000020 0 10px 20px, #00000030 0 6px 6px",
  },
  dark: {
    pressable: {
      default: "0 1px #ffffff80",
      neutral: {
        default: `0 1px #00000040, 0 1px ${_palette.dark.neutral.base}`,
        hover:   `0 1px #00000040, 0 1px ${_palette.dark.neutral.darker}`,
      },
      danger: {
        default: `0 1px #00000040, 0 1px ${_palette.dark.danger.base}`,
        hover:   `0 1px #00000040, 0 1px ${_palette.dark.danger.darker}`,
      },
    },
    focus: {
      neutral: `0 0 0 2px ${_palette.dark.neutral.base}30`,
      danger:  `0 0 0 2px ${_palette.dark.danger.base}30`,
    },
  },
};

const font = {
  family: _fontFamilies.join(", "),
  size: {
    smallIcon: "16px",
    md: "14px",
    icon: "26px",
  },
  lineHeight: {
    md: "16px",
  },
};

const borderRadius = {
  sm: "4px",
  md: "8px",
};

const spacing = {
  padding: {
    minimal: "4px",
    sm: "5.6px 7.84px", // 0.4em 0.5em @14px
    md: "10.5px 14px",  // 0.75em 1em @14px
  },
  margin: {
    inline: "5.25px ", // 0.375em @14px
    sm: "3.5px", // 0.25em @14px
    md: "7px", // 0.5em @14px
    lg: "14px", // 1em @14px
    xl: "24.5px", // 1.75em @14px
  },
};

export const globalStyles = (isDark: boolean) => {
  const themeVariant = isDark ? "dark" : "light";
  return {
    fontFamily: _fontFamilies.join(", "),
    fontSize: "14px",
    color: color[themeVariant].fg,
    backgroundColor: color[themeVariant].bg,
  };
};

export default { color, boxShadow, font, borderRadius, spacing };
