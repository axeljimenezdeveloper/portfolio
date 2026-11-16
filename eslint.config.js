// File: eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  // 1. Ignorar artefactos de build y dependencias
  { ignores: ['dist', 'coverage', 'node_modules'] },

  // 2. Reglas base de ESLint
  js.configs.recommended,

  // 3. Reglas recomendadas de TypeScript — SOLO en .ts/.tsx
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
  })),

  // 4. Parser type-aware — SOLO en archivos TS
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // 5. React Hooks
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { 'react-hooks': reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },

  // 6. React Refresh
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { 'react-refresh': reactRefresh },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },

  // 7. Accesibilidad JSX
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: { 'jsx-a11y': jsxA11y },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
    },
  },

  // 8. Globales de navegador y Node
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // 9. Prettier SIEMPRE al final — desactiva reglas de formato en conflicto
  prettierConfig,
);
