// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config({ ignores: ['dist', 'node_modules', 'build'] }, {
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2023,
    sourceType: 'module',
    globals: globals.browser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}, storybook.configs["flat/recommended"]);
