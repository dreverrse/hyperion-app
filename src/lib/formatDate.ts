export function formatDate(
  date: string | Date,
  options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  },
  locale = 'en-US',
): string {
  const value = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, options).format(value);
}

export function formatTime(
  date: string | Date,
  locale = 'en-US',
): string {
  const value = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
    .format(value)
    .toLowerCase();
}

export function isSameDay(a: string | Date, b: Date): boolean {
  const da = typeof a === 'string' ? new Date(a) : a;
  return (
    da.getFullYear() === b.getFullYear() &&
    da.getMonth() === b.getMonth() &&
    da.getDate() === b.getDate()
  );
}