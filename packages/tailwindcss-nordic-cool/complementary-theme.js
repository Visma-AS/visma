/**
 * The intention of this theme is to be used in addition to the official
 * https://github.com/Nordic-Cool/nc4 library.
 *
 * Instructions for usage:
 *  - set as a theme property `theme: complementaryTheme`;
 *  - use `important: true` to have higher specificity than @vismaux/nordic-cool;
 *  - use `corePlugins: { fontFamily: false }` to rely on fonts coming from nc4 lib.
 *
 * Nordic Cool v4 uses the base font of 62.5% (10px) which makes the default sizing based on `rem` broken.
 * We need to recalculate all sizes which relies on `rem` by multiplying 1.6 to match the nordic-cool sizing.
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
  spacing: correctRemSizing(defaultTheme.spacing),
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

/**
 * Nordic Cool v4 uses the base font of 62.5% (10px) which makes the default sizing based on `rem` broken.
 * We need to recalculate all sizes which relies on `rem` by multiplying 1.6 to match the nordic-cool sizing.
 */

function correctRemValue(value) {
  // 1.4 (tailwindcss sizing) / 0.875 (nordic-cool sizing) = 1.6
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
