module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['@react-native-community', 'eslint-config-prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
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
    'no-console': ['error', { allow: ['debug'] }],
  },
};
