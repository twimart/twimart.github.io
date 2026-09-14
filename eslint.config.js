import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // ESLint does not treat JSX member expressions (e.g. motion.div) as usage;
      // Vite React template already ignores PascalCase components the same way.
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]|^(motion)$' }],
      // LangContext exports LangProvider + useLang (standard context pattern).
      'react-refresh/only-export-components': [
        'error',
        { allowConstantExport: true, allowExportNames: ['useLang'] },
      ],
    },
  },
])
