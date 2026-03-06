// ── Timezone Pairs Config ─────────────────────────────────────────────────────
// To add a new pair: append a new line with { from, fromId, to, toId, region }
// Then run: node generate.js
// ─────────────────────────────────────────────────────────────────────────────

// ── Base City Metadata (used for homepage, cross-links, TZ detection) ────────
const BASE_CITIES = [
  { city: 'Singapore',   tzId: 'Asia/Singapore',      label: 'Singapore' },
  { city: 'London',      tzId: 'Europe/London',        label: 'London' },
  { city: 'New York',    tzId: 'America/New_York',     label: 'New York' },
  { city: 'Tokyo',       tzId: 'Asia/Tokyo',           label: 'Tokyo' },
  { city: 'Sydney',      tzId: 'Australia/Sydney',     label: 'Sydney' },
  { city: 'Hong Kong',   tzId: 'Asia/Hong_Kong',       label: 'Hong Kong' },
  { city: 'Los Angeles', tzId: 'America/Los_Angeles',  label: 'Los Angeles' },
  { city: 'Dubai',       tzId: 'Asia/Dubai',           label: 'Dubai' },
];

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

  // ── Phase 2: London as base ─────────────────────────────────────────────────
  { from: 'London', fromId: 'Europe/London', to: 'New York',      toId: 'America/New_York',    region: 'Americas' },
  { from: 'London', fromId: 'Europe/London', to: 'Tokyo',         toId: 'Asia/Tokyo',          region: 'Asia Pacific' },
  { from: 'London', fromId: 'Europe/London', to: 'Hong Kong',     toId: 'Asia/Hong_Kong',      region: 'Asia Pacific' },
  { from: 'London', fromId: 'Europe/London', to: 'Singapore',     toId: 'Asia/Singapore',      region: 'Asia Pacific' },
  { from: 'London', fromId: 'Europe/London', to: 'Sydney',        toId: 'Australia/Sydney',    region: 'Asia Pacific' },
  { from: 'London', fromId: 'Europe/London', to: 'Frankfurt',     toId: 'Europe/Berlin',       region: 'Europe' },
  { from: 'London', fromId: 'Europe/London', to: 'Dubai',         toId: 'Asia/Dubai',          region: 'Middle East' },
  { from: 'London', fromId: 'Europe/London', to: 'Shanghai',      toId: 'Asia/Shanghai',       region: 'Asia Pacific' },
  { from: 'London', fromId: 'Europe/London', to: 'Mumbai',        toId: 'Asia/Kolkata',        region: 'Asia Pacific' },
  { from: 'London', fromId: 'Europe/London', to: 'Toronto',       toId: 'America/Toronto',     region: 'Americas' },
  { from: 'London', fromId: 'Europe/London', to: 'Zurich',        toId: 'Europe/Zurich',       region: 'Europe' },
  { from: 'London', fromId: 'Europe/London', to: 'Sao Paulo',     toId: 'America/Sao_Paulo',   region: 'Americas' },
  { from: 'London', fromId: 'Europe/London', to: 'Chicago',       toId: 'America/Chicago',     region: 'Americas' },
  { from: 'London', fromId: 'Europe/London', to: 'Los Angeles',   toId: 'America/Los_Angeles', region: 'Americas' },

  // ── Phase 2: New York as base ───────────────────────────────────────────────
  { from: 'New York', fromId: 'America/New_York', to: 'London',       toId: 'Europe/London',       region: 'Europe' },
  { from: 'New York', fromId: 'America/New_York', to: 'Tokyo',        toId: 'Asia/Tokyo',          region: 'Asia Pacific' },
  { from: 'New York', fromId: 'America/New_York', to: 'Hong Kong',    toId: 'Asia/Hong_Kong',      region: 'Asia Pacific' },
  { from: 'New York', fromId: 'America/New_York', to: 'Singapore',    toId: 'Asia/Singapore',      region: 'Asia Pacific' },
  { from: 'New York', fromId: 'America/New_York', to: 'Sydney',       toId: 'Australia/Sydney',    region: 'Asia Pacific' },
  { from: 'New York', fromId: 'America/New_York', to: 'Frankfurt',    toId: 'Europe/Berlin',       region: 'Europe' },
  { from: 'New York', fromId: 'America/New_York', to: 'Dubai',        toId: 'Asia/Dubai',          region: 'Middle East' },
  { from: 'New York', fromId: 'America/New_York', to: 'Shanghai',     toId: 'Asia/Shanghai',       region: 'Asia Pacific' },
  { from: 'New York', fromId: 'America/New_York', to: 'Mumbai',       toId: 'Asia/Kolkata',        region: 'Asia Pacific' },
  { from: 'New York', fromId: 'America/New_York', to: 'Toronto',      toId: 'America/Toronto',     region: 'Americas' },
  { from: 'New York', fromId: 'America/New_York', to: 'Zurich',       toId: 'Europe/Zurich',       region: 'Europe' },
  { from: 'New York', fromId: 'America/New_York', to: 'Sao Paulo',    toId: 'America/Sao_Paulo',   region: 'Americas' },
  { from: 'New York', fromId: 'America/New_York', to: 'Chicago',      toId: 'America/Chicago',     region: 'Americas' },
  { from: 'New York', fromId: 'America/New_York', to: 'Los Angeles',  toId: 'America/Los_Angeles', region: 'Americas' },

  // ── Phase 2: Tokyo as base ──────────────────────────────────────────────────
  { from: 'Tokyo', fromId: 'Asia/Tokyo', to: 'New York',      toId: 'America/New_York',    region: 'Americas' },
  { from: 'Tokyo', fromId: 'Asia/Tokyo', to: 'London',        toId: 'Europe/London',       region: 'Europe' },
  { from: 'Tokyo', fromId: 'Asia/Tokyo', to: 'Hong Kong',     toId: 'Asia/Hong_Kong',      region: 'Asia Pacific' },
  { from: 'Tokyo', fromId: 'Asia/Tokyo', to: 'Singapore',     toId: 'Asia/Singapore',      region: 'Asia Pacific' },
  { from: 'Tokyo', fromId: 'Asia/Tokyo', to: 'Sydney',        toId: 'Australia/Sydney',    region: 'Asia Pacific' },
  { from: 'Tokyo', fromId: 'Asia/Tokyo', to: 'Shanghai',      toId: 'Asia/Shanghai',       region: 'Asia Pacific' },
  { from: 'Tokyo', fromId: 'Asia/Tokyo', to: 'Seoul',         toId: 'Asia/Seoul',          region: 'Asia Pacific' },
  { from: 'Tokyo', fromId: 'Asia/Tokyo', to: 'Mumbai',        toId: 'Asia/Kolkata',        region: 'Asia Pacific' },
  { from: 'Tokyo', fromId: 'Asia/Tokyo', to: 'Frankfurt',     toId: 'Europe/Berlin',       region: 'Europe' },
  { from: 'Tokyo', fromId: 'Asia/Tokyo', to: 'Dubai',         toId: 'Asia/Dubai',          region: 'Middle East' },
  { from: 'Tokyo', fromId: 'Asia/Tokyo', to: 'Los Angeles',   toId: 'America/Los_Angeles', region: 'Americas' },
  { from: 'Tokyo', fromId: 'Asia/Tokyo', to: 'Toronto',       toId: 'America/Toronto',     region: 'Americas' },

  // ── Phase 2: Sydney as base ─────────────────────────────────────────────────
  { from: 'Sydney', fromId: 'Australia/Sydney', to: 'New York',      toId: 'America/New_York',    region: 'Americas' },
  { from: 'Sydney', fromId: 'Australia/Sydney', to: 'London',        toId: 'Europe/London',       region: 'Europe' },
  { from: 'Sydney', fromId: 'Australia/Sydney', to: 'Tokyo',         toId: 'Asia/Tokyo',          region: 'Asia Pacific' },
  { from: 'Sydney', fromId: 'Australia/Sydney', to: 'Hong Kong',     toId: 'Asia/Hong_Kong',      region: 'Asia Pacific' },
  { from: 'Sydney', fromId: 'Australia/Sydney', to: 'Singapore',     toId: 'Asia/Singapore',      region: 'Asia Pacific' },
  { from: 'Sydney', fromId: 'Australia/Sydney', to: 'Shanghai',      toId: 'Asia/Shanghai',       region: 'Asia Pacific' },
  { from: 'Sydney', fromId: 'Australia/Sydney', to: 'Seoul',         toId: 'Asia/Seoul',          region: 'Asia Pacific' },
  { from: 'Sydney', fromId: 'Australia/Sydney', to: 'Mumbai',        toId: 'Asia/Kolkata',        region: 'Asia Pacific' },
  { from: 'Sydney', fromId: 'Australia/Sydney', to: 'Auckland',      toId: 'Pacific/Auckland',    region: 'Asia Pacific' },
  { from: 'Sydney', fromId: 'Australia/Sydney', to: 'Dubai',         toId: 'Asia/Dubai',          region: 'Middle East' },
  { from: 'Sydney', fromId: 'Australia/Sydney', to: 'Frankfurt',     toId: 'Europe/Berlin',       region: 'Europe' },
  { from: 'Sydney', fromId: 'Australia/Sydney', to: 'Los Angeles',   toId: 'America/Los_Angeles', region: 'Americas' },

  // ── Phase 2: Hong Kong as base ──────────────────────────────────────────────
  { from: 'Hong Kong', fromId: 'Asia/Hong_Kong', to: 'New York',      toId: 'America/New_York',    region: 'Americas' },
  { from: 'Hong Kong', fromId: 'Asia/Hong_Kong', to: 'London',        toId: 'Europe/London',       region: 'Europe' },
  { from: 'Hong Kong', fromId: 'Asia/Hong_Kong', to: 'Tokyo',         toId: 'Asia/Tokyo',          region: 'Asia Pacific' },
  { from: 'Hong Kong', fromId: 'Asia/Hong_Kong', to: 'Singapore',     toId: 'Asia/Singapore',      region: 'Asia Pacific' },
  { from: 'Hong Kong', fromId: 'Asia/Hong_Kong', to: 'Shanghai',      toId: 'Asia/Shanghai',       region: 'Asia Pacific' },
  { from: 'Hong Kong', fromId: 'Asia/Hong_Kong', to: 'Sydney',        toId: 'Australia/Sydney',    region: 'Asia Pacific' },
  { from: 'Hong Kong', fromId: 'Asia/Hong_Kong', to: 'Mumbai',        toId: 'Asia/Kolkata',        region: 'Asia Pacific' },
  { from: 'Hong Kong', fromId: 'Asia/Hong_Kong', to: 'Seoul',         toId: 'Asia/Seoul',          region: 'Asia Pacific' },
  { from: 'Hong Kong', fromId: 'Asia/Hong_Kong', to: 'Dubai',         toId: 'Asia/Dubai',          region: 'Middle East' },
  { from: 'Hong Kong', fromId: 'Asia/Hong_Kong', to: 'Frankfurt',     toId: 'Europe/Berlin',       region: 'Europe' },
  { from: 'Hong Kong', fromId: 'Asia/Hong_Kong', to: 'Taipei',        toId: 'Asia/Taipei',         region: 'Asia Pacific' },
  { from: 'Hong Kong', fromId: 'Asia/Hong_Kong', to: 'Los Angeles',   toId: 'America/Los_Angeles', region: 'Americas' },

  // ── Phase 2: Los Angeles as base ────────────────────────────────────────────
  { from: 'Los Angeles', fromId: 'America/Los_Angeles', to: 'New York',      toId: 'America/New_York',    region: 'Americas' },
  { from: 'Los Angeles', fromId: 'America/Los_Angeles', to: 'London',        toId: 'Europe/London',       region: 'Europe' },
  { from: 'Los Angeles', fromId: 'America/Los_Angeles', to: 'Tokyo',         toId: 'Asia/Tokyo',          region: 'Asia Pacific' },
  { from: 'Los Angeles', fromId: 'America/Los_Angeles', to: 'Hong Kong',     toId: 'Asia/Hong_Kong',      region: 'Asia Pacific' },
  { from: 'Los Angeles', fromId: 'America/Los_Angeles', to: 'Singapore',     toId: 'Asia/Singapore',      region: 'Asia Pacific' },
  { from: 'Los Angeles', fromId: 'America/Los_Angeles', to: 'Sydney',        toId: 'Australia/Sydney',    region: 'Asia Pacific' },
  { from: 'Los Angeles', fromId: 'America/Los_Angeles', to: 'Shanghai',      toId: 'Asia/Shanghai',       region: 'Asia Pacific' },
  { from: 'Los Angeles', fromId: 'America/Los_Angeles', to: 'Seoul',         toId: 'Asia/Seoul',          region: 'Asia Pacific' },
  { from: 'Los Angeles', fromId: 'America/Los_Angeles', to: 'Mumbai',        toId: 'Asia/Kolkata',        region: 'Asia Pacific' },
  { from: 'Los Angeles', fromId: 'America/Los_Angeles', to: 'Dubai',         toId: 'Asia/Dubai',          region: 'Middle East' },
  { from: 'Los Angeles', fromId: 'America/Los_Angeles', to: 'Frankfurt',     toId: 'Europe/Berlin',       region: 'Europe' },
  { from: 'Los Angeles', fromId: 'America/Los_Angeles', to: 'Toronto',       toId: 'America/Toronto',     region: 'Americas' },

  // ── Phase 2: Dubai as base ──────────────────────────────────────────────────
  { from: 'Dubai', fromId: 'Asia/Dubai', to: 'London',        toId: 'Europe/London',       region: 'Europe' },
  { from: 'Dubai', fromId: 'Asia/Dubai', to: 'New York',      toId: 'America/New_York',    region: 'Americas' },
  { from: 'Dubai', fromId: 'Asia/Dubai', to: 'Singapore',     toId: 'Asia/Singapore',      region: 'Asia Pacific' },
  { from: 'Dubai', fromId: 'Asia/Dubai', to: 'Hong Kong',     toId: 'Asia/Hong_Kong',      region: 'Asia Pacific' },
  { from: 'Dubai', fromId: 'Asia/Dubai', to: 'Mumbai',        toId: 'Asia/Kolkata',        region: 'Asia Pacific' },
  { from: 'Dubai', fromId: 'Asia/Dubai', to: 'Tokyo',         toId: 'Asia/Tokyo',          region: 'Asia Pacific' },
  { from: 'Dubai', fromId: 'Asia/Dubai', to: 'Sydney',        toId: 'Australia/Sydney',    region: 'Asia Pacific' },
  { from: 'Dubai', fromId: 'Asia/Dubai', to: 'Frankfurt',     toId: 'Europe/Berlin',       region: 'Europe' },
  { from: 'Dubai', fromId: 'Asia/Dubai', to: 'Shanghai',      toId: 'Asia/Shanghai',       region: 'Asia Pacific' },
  { from: 'Dubai', fromId: 'Asia/Dubai', to: 'Riyadh',        toId: 'Asia/Riyadh',         region: 'Middle East' },
  { from: 'Dubai', fromId: 'Asia/Dubai', to: 'Toronto',       toId: 'America/Toronto',     region: 'Americas' },
  { from: 'Dubai', fromId: 'Asia/Dubai', to: 'Sao Paulo',     toId: 'America/Sao_Paulo',   region: 'Americas' },
];

module.exports = { PAIRS, BASE_CITIES };
