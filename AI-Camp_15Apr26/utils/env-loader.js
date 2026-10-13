/** Environment Variables Loader (CommonJS Version)
 * This module loads environment variables from a .env file into process.env using process.loadEnvFile function.
 * It should first checks for a central .env file at '~/ai-api-keys/.env' and loads it if found.
 * If the central .env file is not found, it falls back to loading a local .env file in the same project directory as this script.
 * Usage: Import this module at the top of a main script to ensure environment variables are loaded before use.
 */

const { existsSync }    = require('fs');
const { resolve, join } = require('path');

const centralEnv = resolve('d:/ai-api-keys/.env');

if (existsSync(centralEnv)) {
  process.loadEnvFile(centralEnv);
  console.log('✅ Loaded central .env file');
} else {
  // In CJS, we use the global __dirname instead of import.meta.dirname
  const localEnv = join(__dirname, '../.env');

  if (existsSync(localEnv)) {
    process.loadEnvFile(localEnv);
    console.log('✅ Loaded local .env file');
  } else {
    console.warn('⚠️ No .env file found!');
  }
}