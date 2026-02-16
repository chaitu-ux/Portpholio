const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...');

try {
  // Check if build directory exists
  const buildDir = path.join(__dirname, 'build', 'client');
  
  if (!fs.existsSync(buildDir)) {
    console.log('📦 Building project...');
    execSync('npm run build', { stdio: 'inherit' });
  }
  
  console.log('✅ Build completed successfully!');
  console.log('📁 Build files are ready in: build/client/');
  
  console.log('\n🌐 Ready for deployment!');
  console.log('Next steps:');
  console.log('1. Go to https://netlify.com');
  console.log('2. Drag the build/client folder to deploy');
  console.log('3. Your portfolio will be live instantly!');
  
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
