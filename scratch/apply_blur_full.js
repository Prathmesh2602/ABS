const sharp = require('sharp');
const fs = require('fs');

async function processFullImage() {
  const inputPath = 'public/images/state_secretariat_grants.jpg';
  const backupPath = 'scratch/state_secretariat_grants_original.jpg';

  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(inputPath, backupPath);
    console.log('Original backed up');
  }

  // The nameplate region in full image:
  // left: 508, top: 584, width: 320, height: 180
  const cropBuffer = await sharp(backupPath)
    .extract({ left: 508, top: 584, width: 320, height: 180 })
    .toBuffer();

  const blurredBuffer = await sharp(cropBuffer)
    .blur(25)
    .toBuffer();

  const maskSvg = Buffer.from(`
    <svg width="320" height="180">
      <defs>
        <filter id="feather" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <polygon points="35,50 270,36 272,120 42,142" fill="white" filter="url(#feather)" />
      <polygon points="42,120 272,120 272,168 42,168" fill="white" opacity="0.9" filter="url(#feather)" />
    </svg>
  `);

  const maskedBlur = await sharp(blurredBuffer)
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  const finalPatch = await sharp(cropBuffer)
    .composite([{ input: maskedBlur, blend: 'over' }])
    .jpeg({ quality: 95 })
    .toBuffer();

  // Composite final patch onto full image
  await sharp(backupPath)
    .composite([{ input: finalPatch, left: 508, top: 584 }])
    .jpeg({ quality: 95 })
    .toFile(inputPath);

  console.log('Updated public/images/state_secretariat_grants.jpg successfully');

  // Also create a 900px wide preview for inspection
  await sharp(inputPath)
    .resize(900)
    .toFile('scratch/full_blurred_preview.jpg');
}

processFullImage().catch(console.error);
