module.exports = {
  presets: [
    [
      "@babel/env",
      {
        loose: true,
      },
    ],
    "@babel/typescript",
  ],
  plugins: ["@vue/babel-plugin-jsx", "@babel/transform-runtime"],
  overrides: [
    {
      test: /\.vue$/,
      plugins: ["@babel/transform-typescript"],
    },
  ],
};
