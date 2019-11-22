module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['svelte3'],
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'newline-before-return': 'warn',
    'prefer-const': 'warn',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
  settings: {},
};
