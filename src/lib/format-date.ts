// Turns the mock ISO dates (YYYY-MM-DD) into UI-friendly parts.
// Formatting uses UTC and a fixed locale so the server render and the browser
// render match, and a date never shifts by a day.

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function parseIsoDate(value: string): Date | null {
  if (!ISO_DATE.test(value)) return null;
  const date = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(date.getTime()) ? null : date;
}

const shortDate = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});
const monthOnly = new Intl.DateTimeFormat("en-US", {
  month: "short",
  timeZone: "UTC",
});
const weekdayOnly = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  timeZone: "UTC",
});
const dayOnly = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  timeZone: "UTC",
});

/** "2025-04-11" -> "Fri, Apr 11". Returns the raw string if it can't be parsed. */
export function formatShortDate(value: string): string {
  const date = parseIsoDate(value);
  return date ? shortDate.format(date) : value;
}

/** "2025-04-12" -> "APR" */
export function formatMonth(value: string): string {
  const date = parseIsoDate(value);
  return date ? monthOnly.format(date).toUpperCase() : "";
}

/** "2025-04-12" -> "12" */
export function formatDayOfMonth(value: string): string {
  const date = parseIsoDate(value);
  return date ? dayOnly.format(date) : "";
}

/** "2025-04-12" -> "Saturday" */
export function formatWeekday(value: string): string {
  const date = parseIsoDate(value);
  return date ? weekdayOnly.format(date) : "";
}
