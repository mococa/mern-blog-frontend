export const daysPassed = (date) => {
  return new Date().getDate() - date;
};
export const isYesterday = (date) => daysPassed(date) === 1;
export const isToday = (date) => daysPassed(date) === 0;
export const displayTime = (date) =>
  date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
export const getTime = (date) => {
  const _date = new Date(date);
  if (isToday(_date)) return `${displayTime(_date)}`;
  if (isYesterday(_date)) return `Yesterday at ${displayTime(_date)}`;
  return `${new Date(_date).toLocaleDateString()} at ${displayTime(_date)}`;
};
