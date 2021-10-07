export const SKILLS = [
  { name: "Overall", value: "overall" },
  { name: "Attack", value: "attack" },
  { name: "Defence", value: "defence" },
  { name: "Strength", value: "strength" },
  { name: "Hitpoints", value: "hitpoints" },
  { name: "Ranged", value: "ranged" },
  { name: "Prayer", value: "prayer" },
  { name: "Magic", value: "magic" },
  { name: "Cooking", value: "cooking" },
  { name: "Woodcutting", value: "woodcutting" },
  { name: "Fletching", value: "fletching" },
  { name: "Fishing", value: "fishing" },
  { name: "Firemaking", value: "firemaking" },
  { name: "Crafting", value: "crafting" },
  { name: "Smithing", value: "smithing" },
  { name: "Mining", value: "mining" },
  { name: "Herblore", value: "herblore" },
  { name: "Agility", value: "agility" },
  { name: "Thieving", value: "thieving" },
  { name: "Slayer", value: "slayer" },
  { name: "Farming", value: "farming" },
  { name: "Runecrafting", value: "runecrafting" },
  { name: "Hunter", value: "hunter" },
  { name: "Construction", value: "construction" },
];

export const ACTIVITIES = [
  { name: "League Points", value: "league_points" },
  { name: "Bounty Hunter (Hunter)", value: "bounty_hunter_hunter" },
  { name: "Bounty Hunter (Rogue)", value: "bounty_hunter_rogue" },
  { name: "Clue Scrolls (All)", value: "clue_scrolls_all" },
  { name: "Clue Scrolls (Beginner)", value: "clue_scrolls_beginner" },
  { name: "Clue Scrolls (Easy)", value: "clue_scrolls_easy" },
  { name: "Clue Scrolls (Medium)", value: "clue_scrolls_medium" },
  { name: "Clue Scrolls (Hard)", value: "clue_scrolls_hard" },
  { name: "Clue Scrolls (Elite)", value: "clue_scrolls_elite" },
  { name: "Clue Scrolls (Master)", value: "clue_scrolls_master" },
  { name: "Last Man Standing", value: "last_man_standing" },
  { name: "Soul Wars Zeal", value: "soul_wars_zeal" },
];

export const BOSSES = [
  { name: "Abyssal Sire", value: "abyssal_sire" },
  { name: "Alchemical Hydra", value: "alchemical_hydra" },
  { name: "Barrows Chests", value: "barrows_chests" },
  { name: "Bryophyta", value: "bryophyta" },
  { name: "Callisto", value: "callisto" },
  { name: "Cerberus", value: "cerberus" },
  { name: "Chambers Of Xeric", value: "chambers_of_xeric" },
  { name: "Chambers Of Xeric (CM)", value: "chambers_of_xeric_challenge_mode" },
  { name: "Chaos Elemental", value: "chaos_elemental" },
  { name: "Chaos Fanatic", value: "chaos_fanatic" },
  { name: "Commander Zilyana", value: "commander_zilyana" },
  { name: "Corporeal Beast", value: "corporeal_beast" },
  { name: "Crazy Archaeologist", value: "crazy_archaeologist" },
  { name: "Dagannoth Prime", value: "dagannoth_prime" },
  { name: "Dagannoth Rex", value: "dagannoth_rex" },
  { name: "Dagannoth Supreme", value: "dagannoth_supreme" },
  { name: "Deranged Archaeologist", value: "deranged_archaeologist" },
  { name: "General Graardor", value: "general_graardor" },
  { name: "Giant Mole", value: "giant_mole" },
  { name: "Grotesque Guardians", value: "grotesque_guardians" },
  { name: "Hespori", value: "hespori" },
  { name: "Kalphite Queen", value: "kalphite_queen" },
  { name: "King Black Dragon", value: "king_black_dragon" },
  { name: "Kraken", value: "kraken" },
  { name: "Kree'Arra", value: "kreearra" },
  { name: "K'ril Tsutsaroth", value: "kril_tsutsaroth" },
  { name: "Mimic", value: "mimic" },
  { name: "Nightmare", value: "nightmare" },
  { name: "Phosani's Nightmare", value: "phosanis_nightmare" },
  { name: "Obor", value: "obor" },
  { name: "Sarachnis", value: "sarachnis" },
  { name: "Scorpia", value: "scorpia" },
  { name: "Skotizo", value: "skotizo" },
  { name: "Tempoross", value: "tempoross" },
  { name: "The Gauntlet", value: "the_gauntlet" },
  { name: "The Corrupted Gauntlet", value: "the_corrupted_gauntlet" },
  { name: "Theatre Of Blood", value: "theatre_of_blood" },
  { name: "Theatre Of Blood (HM)", value: "theatre_of_blood_hard_mode" },
  { name: "Thermonuclear Smoke Devil", value: "thermonuclear_smoke_devil" },
  { name: "TzKal-Zuk", value: "tzkal_zuk" },
  { name: "TzTok-Jad", value: "tztok_jad" },
  { name: "Venenatis", value: "venenatis" },
  { name: "Vet'ion", value: "vetion" },
  { name: "Vorkath", value: "vorkath" },
  { name: "Wintertodt", value: "wintertodt" },
  { name: "Zalcano", value: "zalcano" },
  { name: "Zulrah", value: "zulrah" },
];

export const VIRTUALS = [
  { name: "EHP", value: "ehp" },
  { name: "EHB", value: "ehb" },
];

export const ALL_METRICS = [...SKILLS, ...BOSSES, ...ACTIVITIES, ...VIRTUALS];

export const MEMBER_SKILLS = [
  "agility",
  "construction",
  "farming",
  "fletching",
  "herblore",
  "hunter",
  "thieving",
  "slayer",
];

export const F2P_BOSSES = ["obor", "bryophyta"];

export const COMBAT_SKILLS = ["attack", "strength", "defence", "hitpoints", "ranged", "prayer", "magic"];

export const SKILLS_VALUES = SKILLS.map((r) => r.value);
export const SKILLS_NAMES = SKILLS.map((r) => r.name);

export const BOSSES_VALUES = BOSSES.map((r) => r.value);
export const BOSSES_NAMES = BOSSES.map((r) => r.name);

export const ACTIVITIES_VALUES = ACTIVITIES.map((r) => r.value);
export const ACTIVITIES_NAMES = ACTIVITIES.map((r) => r.name);

export const VIRTUALS_VALUES = VIRTUALS.map((r) => r.value);
export const VIRTUALS_NAMES = VIRTUALS.map((r) => r.name);

export const ALL_METRICS_VALUES = ALL_METRICS.map((r) => r.value);
export const ALL_METRICS_NAMES = ALL_METRICS.map((r) => r.name);

export function getMetricName(value: string) {
  return ALL_METRICS.find((r) => r.value === value);
}

export function getMetricValue(name: string) {
  return ALL_METRICS.find((r) => r.name === name);
}

export function isSkill(metric: string) {
  return SKILLS_VALUES.includes(metric) || SKILLS_NAMES.includes(metric);
}

export function isBoss(metric: string) {
  return BOSSES_VALUES.includes(metric) || BOSSES_NAMES.includes(metric);
}

export function isActivity(metric: string) {
  return ACTIVITIES_VALUES.includes(metric) || ACTIVITIES_NAMES.includes(metric);
}

export function getMeasure(metric: string): string {
  if (isSkill(metric)) return "experience";
  if (isActivity(metric)) return "score";
  if (isBoss(metric)) return "kills";
  return "value";
}

export function getVirtualValue(metric: string) {
  if (isBoss(metric)) return "ehb";
  if (isSkill(metric)) return "ehp";

  return null;
}

export function getMinimumBossKc(metric: string): number {
  if (!isBoss(metric)) return 0;

  switch (metric) {
    case "mimic":
    case "tzkal_zuk":
      return 2;
    case "bryophyta":
    case "chambers_of_xeric_challenge_mode":
    case "hespori":
    case "obor":
    case "skotizo":
    case "the_corrupted_gauntlet":
    case "tztok_jad":
      return 10;
    default:
      return 50;
  }
}

export function getAbbreviation(abbreviation: string): string | null {
  if (!abbreviation || abbreviation.length === 0) return null;

  switch (abbreviation.toLowerCase()) {
    // Bosses
    case "sire":
      return "abyssal_sire";

    case "hydra":
      return "alchemical_hydra";

    case "barrows":
      return "barrows_chests";

    case "bryo":
      return "bryophyta";

    case "cerb":
      return "cerberus";

    case "cox":
    case "xeric":
    case "chambers":
    case "olm":
    case "raids":
      return "chambers_of_xeric";

    case "cox-cm":
    case "xeric-cm":
    case "chambers-cm":
    case "olm-cm":
    case "raids-cm":
      return "chambers_of_xeric_challenge_mode";

    case "chaos-ele":
      return "chaos_elemental";

    case "fanatic":
      return "chaos_fanatic";

    case "sara":
    case "saradomin":
    case "zilyana":
    case "zily":
      return "commander_zilyana";

    case "corp":
      return "corporeal_beast";

    case "crazy-arch":
      return "crazy_archaeologist";

    case "prime":
      return "dagannoth_prime";
    case "rex":
      return "dagannoth_rex";
    case "supreme":
      return "dagannoth_supreme";

    case "deranged-arch":
      return "deranged_archaeologist";

    case "bandos":
    case "graardor":
      return "general_graardor";

    case "mole":
      return "giant_mole";

    case "dusk":
    case "dawn":
    case "gargs":
    case "guardians":
    case "ggs":
      return "grotesque_guardians";

    case "kq":
      return "kalphite_queen";

    case "kbd":
      return "king_black_dragon";

    case "kree":
    case "kreearra":
    case "armadyl":
    case "arma":
      return "kreearra";

    case "zammy":
    case "zamorak":
    case "kril":
    case "kril-tsutsaroth":
      return "kril_tsutsaroth";

    case "gaunt":
    case "gauntlet":
    case "the-gauntlet":
      return "the_gauntlet";

    case "cgaunt":
    case "cgauntlet":
    case "corrupted":
    case "corrupted-gauntlet":
    case "the-corrupted-gauntlet":
      return "the_corrupted_gauntlet";

    case "tob":
    case "theatre":
    case "verzik":
    case "tob-normal":
      return "theatre_of_blood";

    case "tob-hm":
    case "tob-cm":
    case "tob-hard-mode":
    case "tob-hard":
      return "theatre_of_blood_hard_mode";

    case "nm":
    case "tnm":
    case "nmare":
    case "the-nightmare":
      return "nightmare";

    case "pnm":
    case "phosani":
    case "phosanis":
    case "phosani-nm":
    case "phosani-nightmare":
    case "phosanis nightmare":
      return "phosanis_nightmare";

    case "thermy":
    case "smoke-devil":
      return "thermonuclear_smoke_devil";

    case "zuk":
    case "inferno":
      return "tzkal_zuk";

    case "jad":
    case "fight-caves":
    case "fc":
      return "tztok_jad";

    case "vork":
    case "vorky":
      return "vorkath";

    case "wt":
      return "wintertodt";

    case "snek":
    case "zul":
      return "zulrah";

    // Minigames and others

    case "all-clues":
    case "clues":
      return "clue_scrolls_all";

    case "beginner":
    case "beginner-clues":
    case "beg-clues":
    case "beginners":
      return "clue_scrolls_beginner";

    case "easy":
    case "easy-clues":
    case "easies":
      return "clue_scrolls_easy";

    case "medium":
    case "med":
    case "meds":
    case "medium-clues":
    case "med-clues":
    case "mediums":
      return "clue_scrolls_medium";

    case "hard":
    case "hard-clues":
    case "hards":
      return "clue_scrolls_hard";

    case "elite":
    case "elite-clues":
    case "elites":
      return "clue_scrolls_elite";

    case "master":
    case "master-clues":
    case "masters":
      return "clue_scrolls_master";

    case "lms":
      return "last_man_standing";

    case "league":
    case "lp":
    case "lps":
      return "league_points";

    case "sw":
    case "zeal":
    case "soul-wars":
      return "soul_wars_zeal";

    // Skills

    case "runecraft":
    case "rc":
      return "runecrafting";

    case "att":
    case "atk":
    case "attk":
      return "attack";

    case "def":
    case "defense":
      return "defence";

    case "str":
      return "strength";

    case "hp":
      return "hitpoints";

    case "range":
      return "ranged";

    case "pray":
      return "prayer";

    case "mage":
      return "magic";

    case "cook":
      return "cooking";

    case "wc":
      return "woodcutting";

    case "fletch":
      return "fletching";

    case "fish":
      return "fishing";

    case "fm":
    case "burning":
      return "firemaking";

    case "craft":
      return "crafting";

    case "sm":
    case "smith":
      return "smithing";

    case "mine":
    case "smash":
      return "mining";

    case "herb":
      return "herblore";

    case "agi":
    case "agil":
      return "agility";

    case "thief":
      return "thieving";

    case "slay":
      return "slayer";

    case "farm":
      return "farming";

    case "hunt":
    case "hunting":
      return "hunter";

    case "con":
    case "cons":
    case "const":
      return "construction";

    default:
      return abbreviation;
  }
}
