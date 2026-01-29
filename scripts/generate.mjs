#!/usr/bin/env node

/**
 * Angular CLI Generator Script for upov-ui Library
 *
 * Generates components, directives, pipes, services, etc. in the upov-ui project
 * with proper folder structure and automatic barrel file exports.
 *
 * Usage:
 *   npm run generate component button
 *   npm run generate directive highlight
 *   npm run generate service user
 *   npm run generate pipe currency
 *   npm run generate guard auth
 *   npm run generate interceptor http
 */

import {execSync} from 'child_process';
import {appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync} from 'fs';
import {dirname, resolve} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, '..');
const LIB_PATH = 'projects/upov-ui/src/lib';

// Configuration for each artifact type
const ARTIFACT_CONFIG = {
  component: {
    folder: 'components',
    hasBarrel: true,
    cliCommand: 'component',
    fileExtension: '.ts',
    pluralName: 'components',
    usesSubfolder: true // Components get their own subfolder
  },
  directive: {
    folder: 'directives',
    hasBarrel: true,
    cliCommand: 'directive',
    fileExtension: '.ts',
    pluralName: 'directives',
    usesSubfolder: true // Directives get their own subfolder
  },
  pipe: {
    folder: 'pipes',
    hasBarrel: true,
    cliCommand: 'pipe',
    fileExtension: '.ts',
    pluralName: 'pipes',
    usesSubfolder: false, // Pipes are flat with -pipe suffix
    fileSuffix: '-pipe'
  },
  service: {
    folder: 'services',
    hasBarrel: true,
    cliCommand: 'service',
    fileExtension: '.ts',
    pluralName: 'services',
    usesSubfolder: false
  },
  guard: {
    folder: 'guards',
    hasBarrel: true,
    cliCommand: 'guard',
    fileExtension: '.ts',
    pluralName: 'guards',
    usesSubfolder: false
  },
  interceptor: {
    folder: 'interceptors',
    hasBarrel: true,
    cliCommand: 'interceptor',
    fileExtension: '.ts',
    pluralName: 'interceptors',
    usesSubfolder: false
  },
  interface: {
    folder: 'models',
    hasBarrel: true,
    cliCommand: 'interface',
    fileExtension: '.ts',
    pluralName: 'interfaces',
    usesSubfolder: false
  },
  enum: {
    folder: 'models',
    hasBarrel: true,
    cliCommand: 'enum',
    fileExtension: '.ts',
    pluralName: 'enums',
    usesSubfolder: false
  },
  class: {
    folder: 'models',
    hasBarrel: true,
    cliCommand: 'class',
    fileExtension: '.ts',
    pluralName: 'classes',
    usesSubfolder: false
  }
};

/**
 * Logs a message with color
 */
function log(message, type = 'info') {
  const colors = {
    info: '\x1b[36m',    // Cyan
    success: '\x1b[32m', // Green
    error: '\x1b[31m',   // Red
    warning: '\x1b[33m', // Yellow
    reset: '\x1b[0m'
  };

  const color = colors[type] || colors.info;
  console.log(`${color}${message}${colors.reset}`);
}

/**
 * Ensures a directory exists
 */
function ensureDirectoryExists(dirPath) {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, {recursive: true});
    log(`✓ Created directory: ${dirPath}`, 'success');
  }
}

/**
 * Gets the path to the barrel file for a given folder
 */
function getBarrelFilePath(folderName) {
  return resolve(PROJECT_ROOT, LIB_PATH, folderName, 'index.ts');
}

/**
 * Checks if a barrel file exists
 */
function barrelFileExists(folderName) {
  return existsSync(getBarrelFilePath(folderName));
}

/**
 * Creates a barrel file if it doesn't exist
 */
function ensureBarrelFile(folderName) {
  const barrelPath = getBarrelFilePath(folderName);

  if (!existsSync(barrelPath)) {
    writeFileSync(barrelPath, '', 'utf8');
    log(`✓ Created barrel file: ${barrelPath}`, 'success');

    // Add to lib/index.ts if it's a new category
    addToLibIndex(folderName);
  }
}

/**
 * Adds an export to the lib/index.ts barrel file
 */
function addToLibIndex(folderName) {
  const libIndexPath = resolve(PROJECT_ROOT, LIB_PATH, 'index.ts');
  const exportStatement = `export * from './${folderName}';\n`;

  const content = readFileSync(libIndexPath, 'utf8');

  // Check if export already exists
  if (!content.includes(exportStatement.trim())) {
    appendFileSync(libIndexPath, exportStatement);
    log(`✓ Added export to lib/index.ts: ${exportStatement.trim()}`, 'success');
  }
}

/**
 * Adds an export to the category barrel file
 */
function addToBarrelFile(folderName, artifactName, config) {
  const barrelPath = getBarrelFilePath(folderName);

  let exportPath;
  if (config.usesSubfolder) {
    // Components and directives: ./button/button
    exportPath = `./${artifactName}/${artifactName}`;
  } else {
    // Services, pipes, guards, etc.: ./api or ./capitalize-pipe
    const fileName = config.fileSuffix ? `${artifactName}${config.fileSuffix}` : artifactName;
    exportPath = `./${toKebabCase(fileName)}`;
  }

  const exportStatement = `export * from '${exportPath}';\n`;

  let content = '';
  if (existsSync(barrelPath)) {
    content = readFileSync(barrelPath, 'utf8');
  }

  // Check if export already exists
  if (!content.includes(exportStatement.trim())) {
    appendFileSync(barrelPath, exportStatement);
    log(`✓ Added to barrel file: ${exportStatement.trim()}`, 'success');
  } else {
    log(`ℹ Export already exists in barrel file`, 'warning');
  }
}

/**
 * Generates an Angular artifact using Angular CLI
 */
function generateArtifact(type, name) {
  const config = ARTIFACT_CONFIG[type];

  if (!config) {
    log(`Error: Unknown artifact type "${type}"`, 'error');
    log(`Available types: ${Object.keys(ARTIFACT_CONFIG).join(', ')}`, 'info');
    process.exit(1);
  }

  const folderPath = resolve(PROJECT_ROOT, LIB_PATH, config.folder);
  ensureDirectoryExists(folderPath);

  if (config.hasBarrel) {
    ensureBarrelFile(config.folder);
  }

  // Build the Angular CLI command
  const targetPath = `${config.folder}/${name}`;

  // Add --flat=false for artifacts that should be in subfolders
  const flatOption = config.usesSubfolder ? ' --flat=false' : '';

  const cliCommand = `ng generate ${config.cliCommand} ${targetPath} --project=upov-ui${flatOption}`;

  log(`\n🚀 Generating ${type}: ${name}`, 'info');
  log(`Command: ${cliCommand}\n`, 'info');

  try {
    // Execute the Angular CLI command
    execSync(cliCommand, {
      cwd: PROJECT_ROOT,
      stdio: 'inherit'
    });

    log(`\n✓ Successfully generated ${type}: ${name}`, 'success');

    // Add to barrel file
    if (config.hasBarrel) {
      addToBarrelFile(config.folder, name, config);
    }

    log('\n✅ Generation complete!', 'success');

  } catch (error) {
    log(`\n❌ Error generating ${type}: ${error.message}`, 'error');
    process.exit(1);
  }
}

/**
 * Displays usage information
 */
function showUsage() {
  log('\n📦 Angular CLI Generator for upov-ui Library\n', 'info');
  log('Usage:', 'info');
  log('  npm run generate <type> <name>\n', 'info');
  log('Available types:', 'info');
  Object.keys(ARTIFACT_CONFIG).forEach(type => {
    log(`  - ${type}`, 'info');
  });
  log('\nExamples:', 'info');
  log('  npm run generate component button', 'success');
  log('  npm run generate directive highlight', 'success');
  log('  npm run generate service user', 'success');
  log('  npm run generate pipe uppercase-first', 'success');
  log('  npm run generate guard auth', 'success');
  log('  npm run generate interceptor http', 'success');
  log('  npm run generate interface user', 'success');
  log('  npm run generate enum status', 'success');
  log('');
}

function toKebabCase(str) {
  return str
    // Insert hyphen between consecutive uppercase letters followed by lowercase (e.g., HTTPSConnection -> HTTPS-Connection)
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    // Replace camelCase with camel-case
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    // Replace spaces, underscores, or multiple hyphens with a single hyphen
    .replace(/[\s_]+/g, '-')
    // Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, '')
    // Convert to lowercase
    .toLowerCase();
}


/**
 * Main entry point
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    showUsage();
    process.exit(1);
  }

  const [type, name] = args;
  generateArtifact(type, name);
}

main();

