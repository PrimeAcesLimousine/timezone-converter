// ── Timezone Pairs Config ─────────────────────────────────────────────────────
// To add a new pair: append a new line with { from, fromId, to, toId }
// Then run: node generate.js
// ─────────────────────────────────────────────────────────────────────────────

const PAIRS = [
  // ── Phase 1: Singapore as base ────────────────────────────────────────────

  // Asia Pacific
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Kuala Lumpur',  toId: 'Asia/Kuala_Lumpur',  region: 'Asia Pacific' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Bangkok',       toId: 'Asia/Bangkok',        region: 'Asia Pacific' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Jakarta',       toId: 'Asia/Jakarta',        region: 'Asia Pacific' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Manila',        toId: 'Asia/Manila',         region: 'Asia Pacific' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Hong Kong',     toId: 'Asia/Hong_Kong',      region: 'Asia Pacific' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Taipei',        toId: 'Asia/Taipei',         region: 'Asia Pacific' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Seoul',         toId: 'Asia/Seoul',          region: 'Asia Pacific' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Tokyo',         toId: 'Asia/Tokyo',          region: 'Asia Pacific' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Mumbai',        toId: 'Asia/Kolkata',        region: 'Asia Pacific' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Sydney',        toId: 'Australia/Sydney',    region: 'Asia Pacific' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Auckland',      toId: 'Pacific/Auckland',    region: 'Asia Pacific' },

  // Europe
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'London',        toId: 'Europe/London',       region: 'Europe' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Lisbon',        toId: 'Europe/Lisbon',       region: 'Europe' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Madrid',        toId: 'Europe/Madrid',       region: 'Europe' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Paris',         toId: 'Europe/Paris',        region: 'Europe' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Brussels',      toId: 'Europe/Brussels',     region: 'Europe' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Amsterdam',     toId: 'Europe/Amsterdam',    region: 'Europe' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Frankfurt',     toId: 'Europe/Berlin',       region: 'Europe' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Berlin',        toId: 'Europe/Berlin',       region: 'Europe' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Zurich',        toId: 'Europe/Zurich',       region: 'Europe' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Vienna',        toId: 'Europe/Vienna',       region: 'Europe' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Rome',          toId: 'Europe/Rome',         region: 'Europe' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Stockholm',     toId: 'Europe/Stockholm',    region: 'Europe' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Moscow',        toId: 'Europe/Moscow',       region: 'Europe' },

  // Middle East
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Dubai',         toId: 'Asia/Dubai',          region: 'Middle East' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Abu Dhabi',     toId: 'Asia/Dubai',          region: 'Middle East' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Doha',          toId: 'Asia/Qatar',          region: 'Middle East' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Riyadh',        toId: 'Asia/Riyadh',         region: 'Middle East' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Kuwait City',   toId: 'Asia/Kuwait',         region: 'Middle East' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Muscat',        toId: 'Asia/Muscat',         region: 'Middle East' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Tel Aviv',      toId: 'Asia/Jerusalem',      region: 'Middle East' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Cairo',         toId: 'Africa/Cairo',        region: 'Middle East' },

  // Americas
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'New York',      toId: 'America/New_York',    region: 'Americas' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Toronto',       toId: 'America/Toronto',     region: 'Americas' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Chicago',       toId: 'America/Chicago',     region: 'Americas' },
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Los Angeles',   toId: 'America/Los_Angeles', region: 'Americas' },

  // Africa
  { from: 'Singapore', fromId: 'Asia/Singapore', to: 'Johannesburg',  toId: 'Africa/Johannesburg', region: 'Africa' },

  // ── Phase 2: Reverse — major hubs to Singapore ───────────────────────────
  // Uncomment when ready:
  // { from: 'London',      fromId: 'Europe/London',      to: 'Singapore', toId: 'Asia/Singapore' },
  // { from: 'New York',    fromId: 'America/New_York',   to: 'Singapore', toId: 'Asia/Singapore' },
  // { from: 'Sydney',      fromId: 'Australia/Sydney',   to: 'Singapore', toId: 'Asia/Singapore' },
  // { from: 'Tokyo',       fromId: 'Asia/Tokyo',         to: 'Singapore', toId: 'Asia/Singapore' },
  // { from: 'Dubai',       fromId: 'Asia/Dubai',         to: 'Singapore', toId: 'Asia/Singapore' },
  // { from: 'Hong Kong',   fromId: 'Asia/Hong_Kong',     to: 'Singapore', toId: 'Asia/Singapore' },
];

module.exports = PAIRS;
