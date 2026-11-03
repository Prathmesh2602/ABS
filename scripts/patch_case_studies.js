const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'case-studies.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const mapping = {
  'custom-govt-llm': { logo: '/brand/portals/logo_govt_llm.svg', archetype: 'ai_ocr' },
  'interior-mitra': { logo: '/brand/portals/logo_interiormitra.svg', archetype: 'ai_ocr' },
  'career-counselling-psychometric': { logo: '/brand/portals/seal_maharashtra.svg', archetype: 'seat_matrix' },
  'secured-paper-delivery': { logo: '/brand/portals/logo_blockchain_vault.svg', archetype: 'blockchain_ledger' },
  'state-cet-cell': { logo: '/brand/portals/seal_maharashtra.svg', archetype: 'seat_matrix' },
  'jceceb-single-admission': { logo: '/brand/portals/seal_jharkhand.svg', archetype: 'seat_matrix' },
  'mcaer-agriculture-admissions': { logo: '/brand/portals/logo_mcaer.svg', archetype: 'seat_matrix' },
  'msbte-agri-diploma': { logo: '/brand/portals/logo_msbte.png', archetype: 'seat_matrix' },
  'aums-mpkv-vnmkv': { logo: '/brand/portals/logo_mpkv.jpg', archetype: 'academic_logbook' },
  'ayurvedik-student-erp': { logo: '/brand/portals/logo_ayush_pradnya.svg', archetype: 'academic_logbook' },
  'mpkv-research-automation': { logo: '/brand/portals/logo_mpkv.jpg', archetype: 'academic_logbook' },
  'desa-haryana-statistics': { logo: '/brand/portals/seal_haryana.svg', archetype: 'statistical_heatmap' },
  'grant-in-aid-assessment': { logo: '/brand/portals/seal_maharashtra.svg', archetype: 'statistical_heatmap' },
  'workload-calculations': { logo: '/brand/portals/seal_maharashtra.svg', archetype: 'statistical_heatmap' },
  'prison-cms-portal': { logo: '/brand/portals/logo_maha_police.svg', archetype: 'academic_logbook' },
  'royal-enfield-vendor-erp': { logo: '/brand/portals/logo_royal_enfield.svg', archetype: 'vendor_supply' },
  'bobade-sir-school-erp': { logo: '/brand/portals/logo_bobade_erp.svg', archetype: 'academic_logbook' },
  'meghdoot-communication-gateway': { logo: '/brand/portals/logo_meghdoot.svg', archetype: 'telecom_gateway' },
  'pavitra-teacher-recruitment': { logo: '/brand/portals/seal_maharashtra.svg', archetype: 'seat_matrix' },
};

for (const [slug, data] of Object.entries(mapping)) {
  const slugRegex = new RegExp(`(slug:\\s*["']${slug}["'][\\s\\S]*?officialUrl:\\s*["'][^"']+["'],)`);
  if (slugRegex.test(content)) {
    content = content.replace(slugRegex, `$1\n    portalLogo: "${data.logo}",\n    previewArchetype: "${data.archetype}",`);
    console.log(`Updated ${slug}`);
  } else {
    // try matching without officialUrl
    const fallbackRegex = new RegExp(`(slug:\\s*["']${slug}["'][\\s\\S]*?jurisdiction:\\s*["'][^"']+["'],)`);
    if (fallbackRegex.test(content)) {
      content = content.replace(fallbackRegex, `$1\n    portalLogo: "${data.logo}",\n    previewArchetype: "${data.archetype}",`);
      console.log(`Updated ${slug} (via jurisdiction fallback)`);
    } else {
      console.warn(`Could not match ${slug}`);
    }
  }
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Finished updating data/case-studies.ts');
