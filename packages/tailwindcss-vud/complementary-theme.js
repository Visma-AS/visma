/**
 * The intention of this theme is to be used in addition to the official
 * https://github.com/Visma-Unified-Design/vud library.
 *
 * Instructions for usage:
 *  - set theme property `theme: complementaryTheme`;
 *  - use `important: true` to have higher specificity than @vismaux/vud;
 *  - use `corePlugins: { fontFamily: false }` to rely on fonts coming from VUD lib.
 *
 * VUD uses the base font size of 62.5% (10px) which makes the default sizing based on `rem` broken.
 * We need to recalculate all sizes which relies on `rem` by multiplying 1.6 to match the VUD sizing.
 */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  screens: {
    xs: '550px',
    sm: '769px',
    md: '992px',
    lg: '1280px',
    xl: '1440px',
    '2xl': '1680px',
  },
  lineHeight: correctRemSizing(defaultTheme.lineHeight),
  borderRadius: correctRemSizing(defaultTheme.borderRadius),
  maxWidth: (theme, config) =>
    correctRemSizing(defaultTheme.maxWidth(theme, config)),
  fontSize: correctRemSizing(defaultTheme.fontSize),
  fontWeight: {
    bold: 700,
    semibold: 600,
    normal: 400,
    thin: 200,
  },
  // By default the spacing scale is inherited by the:
  // padding, margin, width, height, maxHeight, gap, inset, space, and translate core plugins
  // from: https://tailwindcss.com/docs/customizing-spacing
  spacing: {
    0: '0px',
    px: '1px',
    0.25: '0.2rem',
    0.5: '0.4rem',
    1: '0.8rem',
    1.5: '1.2rem',
    2: '1.6rem',
    3: '2.4rem',
    4: '3.2rem',
    5: '4rem',
    6: '4.8rem',
    7: '5.6rem',
    8: '6.4rem',
    10: '8.0rem',
    12: '9.6rem',
    14: '11.2rem',
    16: '12.8rem',
    18: '14.4rem',
    20: '16.0rem',
    24: '19.2rem',
    28: '22.4rem',
    32: '25.6rem',
    36: '28.8rem',
    40: '32.0rem',
    48: '38.4rem',
  },
  colors: {
    white: 'var(--white)',
    black: 'var(--black)',
    transparent: 'transparent',
    blue: {
      50: 'var(--blue-05)',
      100: 'var(--blue-10)',
      200: 'var(--blue-20)',
      300: 'var(--blue-30)',
      400: 'var(--blue-40)',
      500: 'var(--blue-50)',
      600: 'var(--blue-60)',
      700: 'var(--blue-70)',
      800: 'var(--blue-80)',
      900: 'var(--blue-90)',
      DEFAULT: 'var(--primary-blue)',
    },
    green: {
      50: 'var(--green-05)',
      100: 'var(--green-10)',
      200: 'var(--green-20)',
      300: 'var(--green-30)',
      400: 'var(--green-40)',
      500: 'var(--green-50)',
      600: 'var(--green-60)',
      700: 'var(--green-70)',
      800: 'var(--green-80)',
      900: 'var(--green-90)',
      DEFAULT: 'var(--primary-green)',
    },
    red: {
      50: 'var(--red-05)',
      100: 'var(--red-10)',
      200: 'var(--red-20)',
      300: 'var(--red-30)',
      400: 'var(--red-40)',
      500: 'var(--red-50)',
      600: 'var(--red-60)',
      700: 'var(--red-70)',
      800: 'var(--red-80)',
      900: 'var(--red-90)',
      DEFAULT: 'var(--primary-red)',
    },
    orange: {
      50: 'var(--orange-05)',
      100: 'var(--orange-10)',
      200: 'var(--orange-20)',
      300: 'var(--orange-30)',
      400: 'var(--orange-40)',
      500: 'var(--orange-50)',
      600: 'var(--orange-60)',
      700: 'var(--orange-70)',
      800: 'var(--orange-80)',
      900: 'var(--orange-90)',
      DEFAULT: 'var(--primary-orange)',
    },
    purple: {
      50: 'var(--purple-05)',
      100: 'var(--purple-10)',
      200: 'var(--purple-20)',
      300: 'var(--purple-30)',
      400: 'var(--purple-40)',
      500: 'var(--purple-50)',
      600: 'var(--purple-60)',
      700: 'var(--purple-70)',
      800: 'var(--purple-80)',
      900: 'var(--purple-90)',
      DEFAULT: 'var(--primary-purple)',
    },
    neutral: {
      50: 'var(--neutral-05)',
      100: 'var(--neutral-10)',
      200: 'var(--neutral-20)',
      300: 'var(--neutral-30)',
      400: 'var(--neutral-40)',
      500: 'var(--neutral-50)',
      600: 'var(--neutral-60)',
      700: 'var(--neutral-70)',
      800: 'var(--neutral-80)',
      900: 'var(--neutral-90)',
      DEFAULT: 'var(--primary-neutral)',
    },
  },
  boxShadow: {
    10: 'var(--shadow-10)',
    20: 'var(--shadow-20)',
    30: 'var(--shadow-30)',
    40: 'var(--shadow-40)',
    50: 'var(--shadow-50)',
  },
};

function correctRemValue(value) {
  // 1.4 (tailwindcss sizing) / 0.875 (VUD sizing) = 1.6
  const multiplier = 1.6;
  const matchedRem = value.match(/^(.*)rem/);
  return matchedRem ? +(matchedRem[1] * multiplier).toFixed(2) + 'rem' : value;
}

// Recursively goes through every nested property and tries to update the `rem` values.
function correctRemSizing(originalSizes) {
  if (typeof originalSizes === 'string' || typeof originalSizes === 'number') {
    return correctRemValue(originalSizes);
  }

  if (Array.isArray(originalSizes)) {
    return originalSizes.map((size) => correctRemSizing(size));
  }

  if (typeof originalSizes === 'object') {
    return Object.keys(originalSizes).reduce(
      (sizes, size) => ({
        ...sizes,
        [size]: correctRemSizing(originalSizes[size]),
      }),
      {}
    );
  }

  return originalSizes;
}
