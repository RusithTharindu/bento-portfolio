export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getCurrentMonthYear() {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
  }).format(new Date());
}
