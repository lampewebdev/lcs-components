#!/usr/bin/env ts-node-script

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const chalk = require('chalk');
const fs = require('fs')

// Variables
const packagesFolder = __dirname.substr(0,__dirname.lastIndexOf('/'))+'/packages/';
const newPackageName = argv._[0];
const newPackagePath = packagesFolder + newPackageName;

// Check if the name is valod
const validNMPPackageNAme = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/
if(!validNMPPackageNAme.test(newPackageName)){
    console.log(chalk.red('🛑 ') + 'Not a valid package name')
    process.exit(0)
}

// Check if component already exists
if (fs.existsSync(newPackagePath)) {
    console.log(chalk.red('🛑 ') + 'Component already exists!')
    process.exit(0)
}

// Start creating
console.log('Creating ' + chalk.red(newPackageName) + '!')
fs.mkdirSync(newPackagePath, { recursive: true });
fs.mkdirSync(newPackagePath + '/src', { recursive: true });

const indexVue: Function = require('./templates/indexVue.ts')
const packageJson: Function = require('./templates/packageJson.ts')
const indexTs: Function = require('./templates/indexTs.ts') 

const filesToCreate = [
  {
    filepath: '/src/index.vue',
    content: indexVue({newPackageName})
  },
  {
    filepath: '/package.json',
    content: packageJson({newPackageName}),
  },
  {
    filepath: '/index.ts',
    content: indexTs({newPackageName})
  }
]

filesToCreate.forEach(file => {
  const fileBuffer = new Uint8Array(Buffer.from(file.content));
  fs.writeFileSync(newPackagePath + file.filepath, fileBuffer);
  console.log(`creating ${newPackagePath}${file.filepath}`);
});

console.log('🚀 done creating' + chalk.red(newPackageName) + '!')
