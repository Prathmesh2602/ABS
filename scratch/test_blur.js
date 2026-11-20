const sharp = require('sharp');

async function testFeatheredBlur() {
  const blurred = await sharp('scratch/nameplate_crop.jpg')
    .blur(25)
    .toBuffer();

  const maskSvg = Buffer.from(`
    <svg width="320" height="180">
      <defs>
        <filter id="feather" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <!-- Exactly covers the nameplate body -->
      <polygon points="35,50 270,36 272,120 42,142" fill="white" filter="url(#feather)" />
      <!-- Covers the reflection below -->
      <polygon points="42,120 272,120 272,168 42,168" fill="white" opacity="0.9" filter="url(#feather)" />
    </svg>
  `);

  const maskedBlur = await sharp(blurred)
    .composite([{ input: maskSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  await sharp('scratch/nameplate_crop.jpg')
    .composite([{ input: maskedBlur, blend: 'over' }])
    .toFile('scratch/nameplate_feathered_test.jpg');

  console.log('Feathered blur saved');
}

testFeatheredBlur();
