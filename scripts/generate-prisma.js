const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '..', '.env');
let hasDbUrl = false;

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  if (envContent.includes('DATABASE_URL') && !envContent.match(/DATABASE_URL=\s*$/m)) {
    hasDbUrl = true;
  }
}

if (!hasDbUrl && !process.env.DATABASE_URL) {
  console.log('⚠️ DATABASE_URL is missing. Using a dummy URL to allow Prisma Client generation without crashing.');
  process.env.DATABASE_URL = 'postgresql://dummy:dummy@localhost:5432/dummy';
}

try {
  console.log('Running prisma generate...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  console.log('✅ Prisma Client generated successfully.');
} catch (error) {
  console.error('❌ Failed to generate Prisma Client:', error.message);
  process.exit(0); // Exit gracefully so it doesn't break npm install
}
