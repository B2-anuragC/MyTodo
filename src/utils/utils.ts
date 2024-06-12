import dayjs from 'dayjs';

export function getCurrDateMilli(date?: string): string {
  const DATE_FORMAT = 'YYYY-MM-DD';
  date = date ? date : dayjs().format(DATE_FORMAT);

  let inst = dayjs(date, DATE_FORMAT);
  if (!inst.isValid()) {
    throw new Error('Invalid date format');
  }
  return `${dayjs(date).valueOf()}`;
}
