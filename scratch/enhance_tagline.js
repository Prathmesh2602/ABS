const sharp = require('sharp');

async function enhanceOriginalTagline() {
  const orig = sharp('scratch/logo_original.png');
  const metadata = await orig.metadata();

  // 1. Extract top part (up to y=460)
  const topPart = await sharp('scratch/logo_original.png')
    .extract({ left: 0, top: 0, width: metadata.width, height: 460 })
    .toBuffer();

  // 2. Extract tagline region from original:
  // minX is 35, maxX is 1828, minY is 472, maxY is 504.
  // Let's extract the exact tagline strip:
  const taglineRaw = await sharp('scratch/logo_original.png')
    .extract({ left: 0, top: 465, width: metadata.width, height: 50 })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = taglineRaw;
  const targetR = 0;   // #001d3e
  const targetG = 29;
  const targetB = 62;

  // Let's create an enhanced pixel buffer:
  // Change color to midnight navy, and boost alpha curve for sharpness/darkness
  const enhancedData = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a > 15) {
      enhancedData[i] = targetR;
      enhancedData[i + 1] = targetG;
      enhancedData[i + 2] = targetB;
      // Make slightly bolder / sharper by boosting partial alpha
      enhancedData[i + 3] = Math.min(255, Math.round(Math.pow(a / 255, 0.65) * 255));
    } else {
      enhancedData[i + 3] = 0;
    }
  }

  // Convert enhancedData back to image buffer
  const enhancedTagline = await sharp(enhancedData, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    }
  })
    .png()
    .toBuffer();

  // Now, to make it slightly bigger (e.g. 1.22x larger) and centered:
  const scale = 1.22;
  const newWidth = Math.round(metadata.width * scale);
  const newHeight = Math.round(info.height * scale);

  const scaledTagline = await sharp(enhancedTagline)
    .resize(newWidth, newHeight, { kernel: 'lanczos3' })
    .toBuffer();

  // Crop the scaled tagline back to original width, centered horizontally
  const leftOffset = Math.round((newWidth - metadata.width) / 2);
  const croppedScaledTagline = await sharp(scaledTagline)
    .extract({ left: leftOffset, top: 0, width: metadata.width, height: newHeight })
    .sharpen({ sigma: 1.2, m1: 1.5, m2: 2.0 })
    .png()
    .toBuffer();

  // Composite onto new 1840 x 525 canvas
  const finalCanvasHeight = 525;
  await sharp({
    create: {
      width: metadata.width,
      height: finalCanvasHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([
      { input: topPart, left: 0, top: 0 },
      { input: croppedScaledTagline, left: 0, top: 462 }
    ])
    .png()
    .toFile('scratch/logo_authentic_sharp.png');

  console.log('Saved scratch/logo_authentic_sharp.png');
}

enhanceOriginalTagline().catch(console.error);
