export default ({ newPackageName }: { newPackageName: string }): string => {
  return `{
  "name": "@lcs-components/${newPackageName}",
  "version": "0.0.0",
  "main": "dist/index.js",
  "license": "MIT",
  "peerDependencies": {
    "vue": "^3.0.4"
  },
  "devDependencies": {
    "@vue/test-utils": "^2.0.0-beta.13"
  }
}`;
};
