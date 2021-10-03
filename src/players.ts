export const PLAYER_TYPES = [
  { name: "Unknown", value: "unknown" },
  { name: "Regular", value: "regular" },
  { name: "Ironman", value: "ironman" },
  { name: "Ultimate", value: "ultimate" },
  { name: "Hardcore", value: "hardcore" },
];

export const PLAYER_BUILDS = [
  { name: "F2P", value: "f2p" },
  { name: "Main", value: "main" },
  { name: "Level 3", value: "lvl3" },
  { name: "Zerker", value: "zerker" },
  { name: "1 Defence Pure", value: "1def" },
  { name: "10 Hitpoints Pure", value: "10hp" },
];

export const PLAYER_BUILD_VALUES = PLAYER_BUILDS.map((b) => b.value);
export const PLAYER_BUILD_NAMES = PLAYER_BUILDS.map((b) => b.name);

export const PLAYER_TYPE_VALUES = PLAYER_TYPES.map((t) => t.value);
export const PLAYER_TYPE_NAMES = PLAYER_TYPES.map((t) => t.name);

export function getPlayerBuildName(value: string) {
  return PLAYER_BUILDS.find((b) => b.value === value);
}

export function getPlayerBuildValue(name: string) {
  return PLAYER_BUILDS.find((b) => b.name === name);
}

export function getPlayerTypeName(value: string) {
  return PLAYER_TYPES.find((t) => t.value === value);
}

export function getPlayerTypeValue(name: string) {
  return PLAYER_TYPES.find((t) => t.name === name);
}
