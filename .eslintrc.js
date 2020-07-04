module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
  ],
  rules: {
    quotes: ["error", "double"],
    "eol-last": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "semi": ["error", "always", {"omitLastInOneLineBlock": true}],
    "no-multi-spaces": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      parser: "@typescript-eslint/parser",
      plugins: [
        "@typescript-eslint",
      ],
      files: "src/**/*.{ts,tsx}",
      extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      rules: {
        "react/prop-types": "off",
      },
    },
    {
      files: ["./*.js"],
      parser: "babel-eslint",
      env: {
        node: true,
      },
    },
    {
      files: ["__tests__/**/*.js"],
      parser: "babel-eslint",
      plugins: ["jest"],
      extends: [
        "plugin:jest/recommended",
        "plugin:react/recommended",
      ],
      env: {
        "jest/globals": true,
      },
    },
  ],
};
