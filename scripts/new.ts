import yargs from "yargs/yargs";
import chalk from "chalk";
import fs from "fs";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).argv;
const isWin: boolean = process.platform === "win32";

// Variables
let packagesFolder = "";
if (isWin) {
  packagesFolder =
    __dirname.substr(0, __dirname.lastIndexOf("\\")) + "\\packages\\";
} else {
  packagesFolder =
    __dirname.substr(0, __dirname.lastIndexOf("/")) + "/packages/";
}
const newPackageName: string = argv._[0] as string;
const newPackagePath: string = packagesFolder + newPackageName;

// Check if the name is valid
const validNMPPackageName = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
if (!validNMPPackageName.test(newPackageName)) {
  console.log(chalk.red("🛑 ") + "Not a valid package name");
  process.exit(0);
}

// Check if component already exists
if (fs.existsSync(newPackagePath)) {
  console.log(chalk.red("🛑 ") + "Component already exists!");
  process.exit(0);
}

const newPackageNameCamelCase: string = newPackageName
  .split("-")
  .map(
    (partOfTheName) => partOfTheName[0].toUpperCase() + partOfTheName.slice(1)
  )
  .join("");

console.log(newPackageNameCamelCase);
// Start creating
console.log("Creating " + chalk.red(newPackageName) + "!");
fs.mkdirSync(newPackagePath, { recursive: true });
fs.mkdirSync(newPackagePath + "/src", { recursive: true });

import indexVue from "./templates/indexVue";
import packageJson from "./templates/packageJson";
import indexTs from "./templates/indexTs";

const filesToCreate = [
  {
    filepath: "/src/index.vue",
    content: indexVue({ packageName: newPackageNameCamelCase }),
  },
  {
    filepath: "/package.json",
    content: packageJson({ packageName: newPackageName }),
  },
  {
    filepath: "/index.ts",
    content: indexTs({ packageName: newPackageNameCamelCase }),
  },
];

filesToCreate.forEach((file) => {
  const fileBuffer = new Uint8Array(Buffer.from(file.content));
  fs.writeFileSync(newPackagePath + file.filepath, fileBuffer);
  console.log(`✅ created ${newPackagePath}${file.filepath}`);
});

console.log("🚀 done creating " + chalk.red(newPackageName) + "!");
