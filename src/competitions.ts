export const COMPETITION_TYPES = [
  { name: "Classic", value: "classic" },
  { name: "Team", value: "team" },
];

export const COMPETITION_STATUSES = [
  { name: "Upcoming", value: "upcoming" },
  { name: "Ongoing", value: "ongoing" },
  { name: "Finished", value: "finished" },
];

export const COMPETITION_TYPE_VALUES = COMPETITION_TYPES.map((r) => r.value);
export const COMPETITION_TYPE_NAMES = COMPETITION_TYPES.map((r) => r.name);

export const COMPETITION_STATUS_VALUES = COMPETITION_STATUSES.map((r) => r.value);
export const COMPETITION_STATUS_NAMES = COMPETITION_STATUSES.map((r) => r.name);

export function getCompetitionTypeName(value: string) {
  return COMPETITION_TYPES.find((r) => r.value === value);
}

export function getCompetitionTypeValue(name: string) {
  return COMPETITION_TYPES.find((r) => r.name === name);
}

export function getCompetitionStatusName(value: string) {
  return COMPETITION_STATUSES.find((r) => r.value === value);
}

export function getCompetitionStatusValue(name: string) {
  return COMPETITION_STATUSES.find((r) => r.name === name);
}
