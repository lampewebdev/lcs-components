module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ["@typescript-eslint", "prettier", "vuejs-accessibility"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vuejs-accessibility/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/vue",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": 2,
  },
};
