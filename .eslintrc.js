/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'import-helpers', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'if',
          'return',
          'function',
          'interface',
          'type',
          'multiline-const',
          'multiline-let',
        ],
      },
      {
        blankLine: 'always',
        prev: ['if'],
        next: ['*'],
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', '/^@//', ['parent', 'sibling'], 'index'],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
