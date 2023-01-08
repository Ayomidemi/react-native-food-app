module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['@react-native-community', 'eslint-config-prettier'],
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        'no-inline-styles': false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    // 'no-console': ['error', { allow: ['debug'] }],
  },
};
