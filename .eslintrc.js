module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
  ],
  rules: {
    quotes: ["error", "double"],
    "eol-last": ["error", "always"]
  },
  settings: {
    react: {
      version: "detect"
    },
  },
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      plugins: [
        "@typescript-eslint"
      ],
      files: "src/**/*.{ts,tsx}",
      extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ]
    },
    {
      files: ["./*.js"],
      parser: "babel-eslint",
      env: {
        node: true
      }
    },
    {
      files: ["__tests__/**/*.js"],
      parser: "babel-eslint",
      plugins: ["jest"],
      extends: [
        "plugin:jest/recommended",
        "plugin:react/recommended"
      ],
      env: {
        "jest/globals": true
      },
    }
  ]
};
