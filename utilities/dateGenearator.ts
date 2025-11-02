// Utility to generate the date in the date + text format for the booking dates
export function datesGenerator(daysFromToday: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysFromToday);

  const weekday = d.toLocaleDateString("en-GB", { weekday: "long" });
  const day = d.getDate();
  const month = d.toLocaleDateString("en-GB", { month: "long" });

  return `${weekday}, ${day} ${month}`;
}
