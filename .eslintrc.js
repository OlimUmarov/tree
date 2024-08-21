module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended', 'plugin:@typescript-eslint/recommended',
    'plugin:@next/next/recommended', 'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
  },
  plugins: ['@next/eslint-plugin-next', 'react', 'react-hooks'],
  rules: {
    // 'react/jsx-indent': ['error', 2],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.tsx']
    }],
    'eol-last': ['error', 'always'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-tag-spacing': [2, { "beforeSelfClosing": "always" }],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-first-prop-new-line': [2, "multiprop"],
    "react/jsx-equals-spacing": [2, "never"],
    'react/jsx-closing-bracket-location': 'error',
    'react/display-name': 'off',
    "react-hooks/exhaustive-deps": "warn",
    'no-multiple-empty-lines': ['error', {
      'max': 2,
      'maxEOF': 0
    }],
    'max-depth': ['error'],
    'no-trailing-spaces': ['error'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/no-explicit-any': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', {
      'ignoreComments': true,
      code: 120
    }]
  },
  overrides: [{
    files: ['*.ts', '*.tsx'],
    parserOptions: {
      project: ['tsconfig.json']
    }
  }],
  ignorePatterns: ['*.js', 'src/shared/icons/icons.tsx', 'src/graphql/__generated__.ts']
};
