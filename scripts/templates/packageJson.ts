export default ({ packageName }: { packageName: string }): string => {
  return `{
  "name": "@lcs-components/${packageName}",
  "version": "0.0.0",
  "main": "dist/index.js",
  "license": "MIT",
  "scripts": {
    "lint": "npx eslint -f codeframe --config='../../.eslintrc.js' --ext ts,vue ./"
  },
  "devDependencies": {
    "eslint": "^7.17.0"
  }
}`;
};
