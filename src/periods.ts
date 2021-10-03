export const PERIODS = [
  { name: "5 Min", value: "5min" },
  { name: "Day", value: "day" },
  { name: "Week", value: "week" },
  { name: "Month", value: "month" },
  { name: "Year", value: "year" },
];

export const PERIOD_VALUES = PERIODS.map((r) => r.value);
export const PERIOD_NAMES = PERIODS.map((r) => r.name);

export function getPeriodName(value: string) {
  return PERIODS.find((r) => r.value === value);
}

export function getPeriodValue(name: string) {
  return PERIODS.find((r) => r.name === name);
}
