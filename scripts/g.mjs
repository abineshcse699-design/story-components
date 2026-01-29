#!/usr/bin/env node

/**
 * Quick alias script for common generation commands
 * Usage: ./scripts/g.mjs c button (for component)
 *        ./scripts/g.mjs s api (for service)
 */

import {execSync} from 'child_process';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const typeMap = {
  'c': 'component',
  'comp': 'component',
  'd': 'directive',
  'dir': 'directive',
  'p': 'pipe',
  's': 'service',
  'svc': 'service',
  'g': 'guard',
  'i': 'interceptor',
  'int': 'interceptor',
  'if': 'interface',
  'e': 'enum',
  'cl': 'class'
};

const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('\n⚡ Quick Generator Aliases\n');
  console.log('Usage: npm run g <alias> <name>\n');
  console.log('Aliases:');
  console.log('  c, comp       - component');
  console.log('  d, dir        - directive');
  console.log('  p             - pipe');
  console.log('  s, svc        - service');
  console.log('  g             - guard');
  console.log('  i, int        - interceptor');
  console.log('  if            - interface');
  console.log('  e             - enum');
  console.log('  cl            - class\n');
  console.log('Examples:');
  console.log('  npm run g c button');
  console.log('  npm run g s api');
  console.log('  npm run g d highlight\n');
  process.exit(1);
}

const [alias, name] = args;
const type = typeMap[alias];

if (!type) {
  console.error(`\n❌ Unknown alias: ${alias}\n`);
  console.log('Run "npm run g" to see available aliases.\n');
  process.exit(1);
}

// Run the main generate script
try {
  execSync(`node ${__dirname}/generate.mjs ${type} ${name}`, {
    stdio: 'inherit'
  });
} catch (error) {
  process.exit(1);
}

