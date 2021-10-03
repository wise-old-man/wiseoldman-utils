// Maximum effective skill level at 13,034,431 experience.
export const MAX_LEVEL = 99;

// The maximum virtual skill level for any skill (200M experience).
export const MAX_VIRTUAL_LEVEL = 126;

// The maximum skill experience (200M experience).
export const MAX_SKILL_EXP = 200_000_000;

// Builds a lookup table for each level's required experience
// exp = XP_FOR_LEVEL[level - 1] || 13m = XP_FOR_LEVEL[98]
export const XP_FOR_LEVEL = (function () {
  let xp = 0;
  const array = [];

  for (let level = 1; level <= MAX_VIRTUAL_LEVEL; ++level) {
    array[level - 1] = Math.floor(xp / 4);
    xp += Math.floor(level + 300 * Math.pow(2, level / 7));
  }

  return array;
})();

export function getXpForLevel(level: number): number {
  if (level < 1 || level > MAX_VIRTUAL_LEVEL) return 0;
  return XP_FOR_LEVEL[level - 1];
}

export function getLevel(exp: number, virtual = false): number {
  if (exp < 0) {
    return 1;
  }

  let low = 0;
  let high = virtual ? XP_FOR_LEVEL.length - 1 : 98;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    const xpForLevel = XP_FOR_LEVEL[mid];

    if (exp < xpForLevel) {
      high = mid - 1;
    } else if (exp > xpForLevel) {
      low = mid + 1;
    } else {
      return mid + 1;
    }
  }

  return high + 1;
}

export function getCombatLevel(
  attack: number,
  strength: number,
  defence: number,
  ranged: number,
  magic: number,
  hitpoints: number,
  prayer: number
) {
  if (
    attack === 0 ||
    strength === 0 ||
    defence === 0 ||
    ranged === 0 ||
    magic === 0 ||
    hitpoints === 0 ||
    prayer === 0
  ) {
    return 0;
  }

  const baseCombat = 0.25 * (defence + Math.max(hitpoints, 10) + Math.floor(prayer / 2));
  const meleeCombat = 0.325 * (attack + strength);
  const rangeCombat = 0.325 * Math.floor((3 * ranged) / 2);
  const mageCombat = 0.325 * Math.floor((3 * magic) / 2);
  return Math.floor(baseCombat + Math.max(meleeCombat, rangeCombat, mageCombat));
}
