const sharp = require('sharp');
const fs = require('fs');

async function testLogoTagline() {
  const origLogo = sharp('public/logo.png');
  const metadata = await origLogo.metadata();

  // Backup original logo if not yet backed up
  if (!fs.existsSync('scratch/logo_original.png')) {
    fs.copyFileSync('public/logo.png', 'scratch/logo_original.png');
    console.log('Original logo backed up');
  }

  // Erase everything below y=455
  // We can do this by extracting top 0..455 or creating a transparent mask for bottom
  const topPart = await sharp('scratch/logo_original.png')
    .extract({ left: 0, top: 0, width: metadata.width, height: 455 })
    .toBuffer();

  // Now create the new bottom part with sharp, bold, darker tagline:
  // Height: 70px (total 455 + 70 = 525px, or 60px -> 515px)
  // Let's keep height 515px (so bottom is 60px)
  const bottomSvg = Buffer.from(`
    <svg width="${metadata.width}" height="60" viewBox="0 0 ${metadata.width} 60" xmlns="http://www.w3.org/2000/svg">
      <!-- Left horizontal rule -->
      <line x1="40" y1="32" x2="210" y2="32" stroke="#0a192f" stroke-width="4.5" stroke-linecap="round" />
      
      <!-- Tagline Text -->
      <text 
        x="${metadata.width / 2}" 
        y="42" 
        text-anchor="middle" 
        fill="#0a192f" 
        font-family="system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" 
        font-size="34" 
        font-weight="800" 
        letter-spacing="18"
      >SOLUTIONS FOR A BETTER TOMORROW</text>
      
      <!-- Right horizontal rule -->
      <line x1="1630" y1="32" x2="1800" y2="32" stroke="#0a192f" stroke-width="4.5" stroke-linecap="round" />
    </svg>
  `);

  const bottomPng = await sharp(bottomSvg)
    .png()
    .toBuffer();

  // Create new canvas 1840 x 515
  await sharp({
    create: {
      width: metadata.width,
      height: 515,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([
      { input: topPart, left: 0, top: 0 },
      { input: bottomPng, left: 0, top: 455 }
    ])
    .png()
    .toFile('scratch/test_logo_sharp.png');

  console.log('Test sharp logo generated');
}

testLogoTagline().catch(console.error);
