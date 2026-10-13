#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get template name from command line arguments
const templateName = process.argv[2];

if (!templateName) {
  console.error('❌ Error: Please provide a template name');
  console.log('Usage: node switch.js <template-name>');
  console.log('Example: node switch.js navdrawer');
  process.exit(1);
}

// Define config file path
const configPath = path.join(process.cwd(), 'oraclejetconfig.json');

// Check if config file exists
if (!fs.existsSync(configPath)) {
  console.error('❌ Error: oraclejetconfig.json not found in current directory');
  process.exit(1);
}

// Check if source directory exists
const sourceDir = path.join(process.cwd(), `src-${templateName}`);
if (!fs.existsSync(sourceDir)) {
  console.error(`❌ Error: Source directory not found: src-${templateName}`);
  console.log('\nAvailable source directories:');

  // List available src-* directories
  const files = fs.readdirSync(process.cwd());
  const sourceDirs = files.filter(file =>
    file.startsWith('src-') && fs.statSync(path.join(process.cwd(), file)).isDirectory()
  );

  if (sourceDirs.length > 0) {
    sourceDirs.forEach(dir => {
      const name = dir.replace('src-', '');
      console.log(`  - ${name}`);
    });
  } else {
    console.log('  (No src-* directories found)');
  }

  process.exit(1);
}

try {
  // Read current config
  const configContent = fs.readFileSync(configPath, 'utf8');
  const config = JSON.parse(configContent);

  // Store old value for reporting
  const oldSource = config.paths?.source?.common || '(not set)';

  // Update the source.common path
  if (!config.paths) {
    config.paths = {};
  }
  if (!config.paths.source) {
    config.paths.source = {};
  }

  config.paths.source.common = `src-${templateName}`;

  // Write updated config back to file
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n', 'utf8');

  console.log(`✅ Successfully switched to template: ${templateName}`);
  console.log(`   Changed: "${oldSource}" → "src-${templateName}"`);

  // Delete old 'active-src-*.lck' files
  const files = fs.readdirSync(process.cwd());
  const oldLockFiles = files.filter(file =>
    file.startsWith('active-src-') && file.endsWith('.lck')
  );

  oldLockFiles.forEach(lockFile => {
    fs.unlinkSync(path.join(process.cwd(), lockFile));
    console.log(`   Removed: ${lockFile}`);
  });

  // Create new lock file
  const newLockFile = `active-src-${templateName}.lck`;
  fs.writeFileSync(
    path.join(process.cwd(), newLockFile),
    `Active template: ${templateName}\nSwitched at: ${new Date().toISOString()}\n`,
    'utf8'
  );
  console.log(`   Created: ${newLockFile}`);

} catch (error) {
  console.error('❌ Error switching template:', error.message);
  process.exit(1);
}