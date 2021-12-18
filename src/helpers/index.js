import { MONTH_NAMES } from "../constants";

/**# Dates #**/
export const daysPassed = (date) => {
  //? One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;
  //? Calculating the time difference between two dates
  const diffInTime = new Date().getTime() - date.getTime();
  //* Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
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
export const getPrettyDate = (date, shortMonth = true) => {
  const _date = new Date(date);
  const month = MONTH_NAMES[_date.getMonth()].slice(
    0,
    shortMonth ? 3 : MONTH_NAMES[_date.getMonth()].length
  );
  const day = _date.getDate() + ordinal(_date.getDate());
  const year = _date.getFullYear();
  return `${month} ${day}, ${year}`;
};
export const ordinal = (number) => {
  if (number > 3 && number < 21) return "th";
  switch (number % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};
/**# Error #**/
export const errorHandler = (err) => {
  return err.response?.data?.message || "An unexpected error occured";
};

/**# Cookies #**/
export function getCookie(key) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}
export function clearAllCookies() {
  document.cookie.replace(/(?<=^|;).+?(?=\=|;|$)/g, (name) =>
    window.location.hostname
      .split(/\.(?=[^.]+\.)/)
      .map((domain) => (domain.startsWith("localhost") ? domain : `.${domain}`))
      .map(
        (domain) =>
          (document.cookie = `${name}=;max-age=0;path=/;domain=${domain}`)
      )
  );
}
