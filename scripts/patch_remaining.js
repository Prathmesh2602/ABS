const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'case-studies.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const remaining = {
  'mcaer-phd-admissions': { logo: '/brand/portals/logo_mcaer.svg', archetype: 'seat_matrix' },
  'agri-diploma-admission': { logo: '/brand/portals/logo_msbte.png', archetype: 'seat_matrix' },
  'aums-agri-erp': { logo: '/brand/portals/logo_mpkv.jpg', archetype: 'academic_logbook' },
};

for (const [slug, data] of Object.entries(remaining)) {
  const slugRegex = new RegExp(`(slug:\\s*["']${slug}["'][\\s\\S]*?officialUrl:\\s*["'][^"']+["'],)`);
  if (slugRegex.test(content)) {
    content = content.replace(slugRegex, `$1\n    portalLogo: "${data.logo}",\n    previewArchetype: "${data.archetype}",`);
    console.log(`Updated ${slug}`);
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('All case studies patched with logos and preview archetypes!');
