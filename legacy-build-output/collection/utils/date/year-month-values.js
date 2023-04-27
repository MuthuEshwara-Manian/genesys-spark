export function getISOYearMonth(year, month) {
  return `${year}-${month}`;
}
export function getYearMonthObject(yearMonthString) {
  const [year, month] = yearMonthString.split('-');
  return { year, month };
}
export function getCurrentISOYearMonth() {
  const newDate = new Date();
  const year = newDate.getFullYear().toString();
  const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
  return getISOYearMonth(year, month);
}