export function formatCurrency(
  amount: number,
  currency = 'USD',
  locale = 'en-US',
): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return formatter.format(amount);
}

export function formatCurrencyCompact(
  amount: number,
  currency = 'USD',
  locale = 'en-US',
): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    notation: 'compact',
    maximumFractionDigits: 1,
  });
  return formatter.format(amount);
}

export function formatSigned(amount: number, currency = 'USD'): string {
  const sign = amount >= 0 ? '+' : '-';
  return `${sign}${formatCurrency(Math.abs(amount), currency)}`;
}