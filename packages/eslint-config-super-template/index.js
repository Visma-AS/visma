module.exports = {
  extends: ['@remix-run/eslint-config', 'prettier'],
  plugins: ['no-loops', 'formatjs'],
  rules: {
    'formatjs/enforce-default-message': 'error',
    'formatjs/enforce-placeholders': 'error',
    'formatjs/no-id': 'error',
    'formatjs/no-multiple-whitespaces': 'error',
    'no-console': 'warn',
    'no-loops/no-loops': 'warn',
    'prefer-const': 'warn',
    'react/style-prop-object': [
      'warn',
      {
        allow: ['FormattedNumber', 'FormattedRelativeTime'],
      },
    ],
  },
};
