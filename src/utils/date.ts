const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUNE",
  "JULY",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];

export default function fmt(input: string) {
  const date = new Date(input);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
