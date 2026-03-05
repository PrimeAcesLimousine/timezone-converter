// ── Static Page Generator ─────────────────────────────────────────────────────
// Usage: node generate.js
// Reads pairs.js, generates one HTML file per pair + sitemap.xml
// ─────────────────────────────────────────────────────────────────────────────

const fs   = require('fs');
const path = require('path');

const PAIRS    = require('./pairs');
const DOMAIN   = 'https://timezoneconverter.site';
const TEMPLATE = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// ── Helpers ───────────────────────────────────────────────────────────────────

function toSlug(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

// ── Footer styles (injected into each generated page) ─────────────────────────

const FOOTER_STYLES = `
  /* ── Site Footer ── */
  .site-footer {
    margin-top: 48px;
    padding-top: 32px;
    border-top: 1.5px solid #EBEBEB;
    max-width: 820px;
    margin-left: auto;
    margin-right: auto;
  }

  .footer-section-title {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #BEBEBE;
    margin-bottom: 10px;
    display: block;
  }
  .footer-region {
    margin-bottom: 24px;
  }
  .footer-links-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #BEBEBE;
    margin-bottom: 10px;
    display: block;
  }
  .footer-links-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }
  .footer-links-grid a {
    font-size: 13px;
    color: #595959;
    text-decoration: none;
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #EBEBEB;
    transition: background 0.12s, color 0.12s, border-color 0.12s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .footer-links-grid a:hover { background: #F8F8F8; color: #404040; border-color: #D8D8D8; }
  @media (max-width: 600px) {
    .footer-links-grid { grid-template-columns: repeat(2, 1fr); }
  }

  /* Business card */
  .footer-biz-card {
    background: #F8F8F8;
    border: 1.5px solid #D8D8D8;
    border-radius: 12px;
    padding: 16px 20px;
    margin-bottom: 14px;
  }
  .biz-card-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
  }
  .biz-card-text { display: flex; flex-direction: column; gap: 3px; }
  .biz-card-title { font-size: 13px; font-weight: 600; color: #404040; }
  .biz-card-desc  { font-size: 12px; color: #979797; }
  .biz-card-link {
    font-size: 12px;
    font-weight: 600;
    color: #404040;
    text-decoration: none;
    padding: 8px 16px;
    border: 1.5px solid #D8D8D8;
    border-radius: 20px;
    white-space: nowrap;
    flex-shrink: 0;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }
  .biz-card-link:hover { background: #0C0C0C; color: #fff; border-color: #0C0C0C; }

  /* Subtle text link */
  .footer-text-link {
    font-size: 11px;
    color: #CECECE;
    text-align: center;
    padding-bottom: 24px;
  }
  .footer-text-link a { color: #BEBEBE; text-decoration: none; }
  .footer-text-link a:hover { color: #595959; }`;

// ── Page generator ─────────────────────────────────────────────────────────────

function generatePage(pair) {
  const slug      = `${toSlug(pair.from)}-to-${toSlug(pair.to)}`;
  const title     = `${pair.from} to ${pair.to} Time Converter`;
  const desc      = `Convert ${pair.from} time to ${pair.to} time instantly. See the current time in ${pair.to} when scheduling meetings, calls, or travel from ${pair.from}.`;
  const canonical = `${DOMAIN}/${slug}`;

  let html = TEMPLATE;

  // 1. Unique <title>
  html = html.replace(
    '<title>Timezone Converter</title>',
    `<title>${title}</title>`
  );

  // 2. Replace template description with pair-specific one; add canonical + OG tags
  html = html.replace(
    /  <meta name="description" content="[^"]*" \/>/,
    `  <meta name="description" content="${desc}" />`
  );
  html = html.replace(
    `<title>${title}</title>`,
    `<title>${title}</title>\n  <link rel="canonical" href="${canonical}" />\n  <meta property="og:title" content="${title}" />\n  <meta property="og:description" content="${desc}" />\n  <meta property="og:url" content="${canonical}" />`
  );

  // 3. Replace keywords with pair-specific value
  html = html.replace(
    '<meta name="keywords" content="timezone converter" />',
    `<meta name="keywords" content="timezone converter, ${title}" />`
  );

  // 5. Pre-select My timezone (override browser detection)
  html = html.replace(
    'let myZone       = browserTz;',
    `let myZone       = '${pair.fromId}';`
  );

  // 6. Pre-select Their timezone
  html = html.replace(
    `let theirZone    = browserTz === 'America/New_York' ? 'Asia/Singapore' : 'America/New_York';`,
    `let theirZone    = '${pair.toId}';`
  );

  // 5. Inject footer styles before </style>
  html = html.replace('  </style>', `${FOOTER_STYLES}\n  </style>`);

  // 6. Build quick links grouped by region
  const otherPairs = PAIRS.filter(p => p !== pair);

  // Get unique region order (preserving order from pairs.js)
  const regions = [...new Set(PAIRS.map(p => p.region))];

  const groupedLinks = regions.map(region => {
    const regionPairs = otherPairs.filter(p => p.region === region);
    if (!regionPairs.length) return '';
    const links = regionPairs.map(p => {
      const s = `${toSlug(p.from)}-to-${toSlug(p.to)}`;
      return `      <a href="/${s}.html">${p.from} → ${p.to}</a>`;
    }).join('\n');
    return `
  <div class="footer-region">
    <span class="footer-links-label">${region}</span>
    <div class="footer-links-grid">
${links}
    </div>
  </div>`;
  }).join('\n');

  // 7. Build footer HTML
  const footer = `
<footer class="site-footer">
  <div class="footer-links-section">
    <span class="footer-section-title">Other Time Zone Converters</span>
    ${groupedLinks}
  </div>

  <div class="footer-biz-card">
    <div class="biz-card-inner">
      <div class="biz-card-text">
        <span class="biz-card-title">Travelling through Singapore?</span>
        <span class="biz-card-desc">Professional airport transfers &amp; corporate chauffeur service.</span>
      </div>
      <a href="https://www.primeaceslimousine.com" class="biz-card-link" target="_blank" rel="noopener">
        Prime Aces Limousine →
      </a>
    </div>
  </div>

  <p class="footer-text-link">
    Singapore airport transfer &amp; corporate chauffeur —
    <a href="https://www.primeaceslimousine.com" target="_blank" rel="noopener">primeaceslimousine.com</a>
  </p>
</footer>`;

  // 8. Insert footer before </body>
  html = html.replace('</body>', `${footer}\n</body>`);

  return { slug, html };
}

// ── Run ───────────────────────────────────────────────────────────────────────

const generated = [];

PAIRS.forEach(pair => {
  const { slug, html } = generatePage(pair);
  const filename = `${slug}.html`;
  fs.writeFileSync(path.join(__dirname, filename), html, 'utf8');
  generated.push(slug);
  console.log(`✓  ${filename}`);
});

// ── Sitemap ───────────────────────────────────────────────────────────────────

const today = new Date().toISOString().split('T')[0];

const sitemapUrls = [
  `  <url>\n    <loc>${DOMAIN}/</loc>\n    <lastmod>${today}</lastmod>\n    <priority>1.0</priority>\n  </url>`,
  ...generated.map(slug =>
    `  <url>\n    <loc>${DOMAIN}/${slug}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.8</priority>\n  </url>`
  )
].join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap, 'utf8');
console.log('✓  sitemap.xml');

// ── Auto-snapshot into versions/YYYY-MM-DD/ ───────────────────────────────────

const snapshotDir = path.join(__dirname, 'versions', today);
fs.mkdirSync(snapshotDir, { recursive: true });

// Files to snapshot: index.html, all generated pages, sitemap, config files
const snapshotFiles = [
  'index.html', 'sitemap.xml', 'robots.txt',
  'pairs.js', 'generate.js', 'package.json',
  '_redirects', 'wrangler.toml', '.assetsignore',
  ...generated.map(s => `${s}.html`),
];

snapshotFiles.forEach(file => {
  const src = path.join(__dirname, file);
  const dst = path.join(snapshotDir, file);
  if (fs.existsSync(src)) fs.copyFileSync(src, dst);
});

console.log(`✓  versions/${today}/ (${snapshotFiles.length} files snapshotted)`);
console.log(`\nDone! ${generated.length} pages generated → deploy to ${DOMAIN}`);
