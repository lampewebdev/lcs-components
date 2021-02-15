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
  plugins: [
    "@babel/plugin-transform-spread",
    "@vue/babel-plugin-jsx",
    "@babel/transform-runtime",
  ],
  overrides: [
    {
      test: /\.vue$/,
      plugins: [
        "@babel/plugin-transform-spread",
        "@babel/transform-typescript",
      ],
    },
  ],
};
