module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    `plugin:react/recommended`,
    `standard-with-typescript`,
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: `latest`,
    sourceType: `module`,
    project: [`tsconfig.json`],
  },
  plugins: [
    `react`,
  ],
  rules: {
    '@typescript-eslint/quotes': [`error`, `backtick`],
    '@typescript-eslint/semi': [`error`, `always`],
    'react/react-in-jsx-scope': `off`,
    '@typescript-eslint/explicit-function-return-type': `off`,
    '@typescript-eslint/member-delimiter-style': [`error`, {
      multiline: {
        delimiter: `semi`,
        requireLast: true,
      },
      singleline: {
        delimiter: `semi`,
        requireLast: true,
      },
      multilineDetection: `brackets`,
    }],
    '@typescript-eslint/comma-dangle': [`error`, {
      arrays: `always-multiline`,
      objects: `always-multiline`,
      imports: `always-multiline`,
      exports: `always-multiline`,
      functions: `always-multiline`,
    }],
    '@typescript-eslint/naming-convention': `off`,
    '@typescript-eslint/no-floating-promises': `off`,
    'quotes': `off`,
    'comma-dangle': `off`,
    'semi': `off`,
    'quote-props': [`error`, `consistent`, { unnecessary: false }],
  },
};
