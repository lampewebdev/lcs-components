export default ({ packageName }: { packageName: string }): string => {
  return `{
  "name": "@lcs-components/${packageName}",
  "version": "0.0.0",
  "main": "dist/index.js",
  "license": "MIT",
  "scripts": {
    "lint": "npx eslint -f codeframe --config='../../.eslintrc.js' --ext ts,vue ./"
  },
  "peerDependencies": {
    "vue": "^3.0.4"
  },
  "devDependencies": {
    "@vue/test-utils": "^2.0.0-beta.13",
    "eslint": "^7.17.0"
  }
}`;
};
