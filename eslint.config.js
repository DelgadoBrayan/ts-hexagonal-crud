// eslint.config.js
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
);
