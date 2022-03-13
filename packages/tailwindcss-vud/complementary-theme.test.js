const resolveConfig = require('tailwindcss/resolveConfig');
const complementaryTheme = require('./complementary-theme.js');

test('complementary theme has correct values', () => {
  const config = {
    theme: complementaryTheme,
  };

  expect(resolveConfig(config)).toMatchSnapshot();
});
