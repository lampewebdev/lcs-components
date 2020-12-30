module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
      parser: '@typescript-eslint/parser',
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      sourceType: "module" // Allows for the use of imports
    },
    env: {
        browser: true,
        node: true,
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended",
    ],
    rules: {}
};