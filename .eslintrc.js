module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },

  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "standard"],

  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },

  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "jest",
    "prettier",
    "unused-imports",
    "sort-imports-es6-autofix",
  ],

  rules: {
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "comma-dangle": ["error", "always-multiline"],
    "no-unused-vars": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-undef": ["off"],
    "prettier/prettier": ["warn", { usePrettierrc: true, endOfLine: "auto" }],
    "arrow-body-style": ["warn", "as-needed"],

    quotes: ["error", "double"],
    semi: ["error", "always"],

    "@typescript-eslint/member-ordering": [
      "warn",
      {
        default: [
          "private-static-field",
          "protected-static-field",
          "public-static-field",
          "private-static-method",
          "protected-static-method",
          "public-static-method",
          "private-constructor",
          "protected-constructor",
          "public-constructor",
          "private-instance-field",
          "protected-instance-field",
          "public-instance-field",
          "private-instance-method",
          "protected-instance-method",
          "public-instance-method",
        ],
      },
    ],

    "space-before-function-paren": [
      "error",
      {
        // this is just to match the prettier configurations
        named: "never",
        anonymous: "always",
        asyncArrow: "always",
      },
    ],

    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandLast: true,
        noSortAlphabetically: false,
      },
    ],
  },

  overrides: [
    {
      excludedFiles: ["tsconfig.json"],
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/no-var-requires": "error",
      },
    },
  ],

  settings: {
    react: {
      version: "detect",
    },
  },
};
