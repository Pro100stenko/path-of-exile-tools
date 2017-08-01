/*
  Rarity: Rare
  Rapture Barb
  Eternal Sword
*/
function parseTitle(title) {
  return {
    rarity: title[0].replace("Rarity: ", ""),
    name: title[1],
    base: title[2],
  };
}

const physDamageRegex = /Physical Damage: (\d+)-(\d+)\s*(\(augmented\))?/;
const elementalDamageRegex = /Elemental Damage: (\d+)-(\d+)\s*(\(augmented\))?/;
const apsRegex = /Attacks per Second: (.*)/;

function parseDps(minVal, maxVal, attacksPerSecond) {
  return ((minVal + maxVal) / 2) * attacksPerSecond;
}

/*
  One Handed Sword
  Quality: +14% (augmented)
  Physical Damage: 142-239 (augmented)
  Elemental Damage: 6-133 (augmented)
  Critical Strike Chance: 5.00%
  Attacks per Second: 1.50
  Weapon Range: 9
*/
function parseOverallStats(stats) {
  const physDamageMatch = stats.filter(stat => stat.match(physDamageRegex));
  const eleDamageMatch = stats.filter(stat => stat.match(elementalDamageRegex));
  const aps = stats.filter(stat => stat.match(apsRegex));
  let attacksPerSecond = 0;
  let physicalDps = 0;
  let elementalDps = 0;
  if (aps.length > 0) {
    attacksPerSecond = parseFloat(aps[0].match(apsRegex)[1]);
  }
  if (physDamageMatch.length > 0) {
    const [, low, high] = physDamageMatch[0].match(physDamageRegex);
    physicalDps = parseDps(parseInt(low), parseInt(high), attacksPerSecond);
  }
  if (eleDamageMatch.length > 0) {
    const [, low, high] = eleDamageMatch[0].match(elementalDamageRegex);
    elementalDps = parseDps(parseInt(low), parseInt(high), attacksPerSecond);
  }
  return {
    weaponType: stats[0],
    physicalDps,
    elementalDps,
    totalDps: physicalDps + elementalDps,
    stats: stats.slice(1, stats.length),
  };
}

/*
  Requirements:
  Level: 66
  Str: 104
  Dex: 122
*/
function parseRequirements(requirements) {
  const parts = requirements.slice(1, requirements.length);
  const reqs = {};
  parts.forEach((part) => {
    const [k, v] = part.split(": ");
    reqs[k.toLowerCase()] = parseInt(v);
  });
  return reqs;
}

/*
  Sockets: R-R R
*/
function parseSockets(sockets) {
  return sockets[0].split(": ")[1];
}

/*
  Item Level: 70
*/
function parseItemLevel(itemLevel) {
  return parseInt(itemLevel[0].split(": ")[1]);
}

// const flatDamageRegex = /Adds (\d+) to (\d+) (\S+) Damage/;

// function parseDamageModifiers(mods) {
//   const damageMods = mods.filter(mod => mod.match(flatDamageRegex));
//   return damageMods.map((mod) => {
//     const [, low, high, type] = mod.match(flatDamageRegex);

//     return {
//       [type.toLowerCase()]: {
//         low: parseInt(low),
//         high: parseInt(high),
//       },
//     };
//   });
// }

// function parseOtherModifiers(mods) {
//   return mods.filter(mod => !mod.match(flatDamageRegex));
// }

/*
  +475 to Accuracy Rating
*/
function parseImpicitModifiers(mods) {
  // const flatDamageMods = parseDamageModifiers(mods);
  // const otherMods = parseOtherModifiers(mods);
  // return {
  //   flatDamageMods,
  //   otherMods,
  // };
  return mods;
}

/*
  154% increased Physical Damage
  Adds 6 to 133 Lightning Damage
  9% reduced Enemy Stun Threshold
  +29% to Fire Resistance
  +34% to Cold Resistance
  Adds 12 to 21 Physical Damage
*/
const parseExplicitModifiers = (mods) => {
  // const flatDamageMods = parseDamageModifiers(mods);
  // const otherMods = parseOtherModifiers(mods);
  // return {
  //   flatDamageMods,
  //   otherMods,
  // };
  return mods;
};

/*
  Wep DPS:
  (50 min + 10 adds min) * (1 + 1/100*(100% inc physical damage + 20% q)) = 60 * 2.2 = 132 min
  (100 max + 20 adds max) * (1 + 1/100*(100% inc physical damage + 20% q)) = 120 * 2.2 = 264 max
*/

export const parseInputText = (input) => {
  if (!input || input.trim() === "") {
    return null;
  }
  try {
    const parts = input.split("--------");
    const [
      title,
      overallStats,
      requirements,
      sockets,
      itemLevel,
      implicitModifiers,
      explicitModifiers,
    ] = parts.map(part => part.split("\n").filter(x => x.trim() !== ""));
    let flavorText = [];
    if (parts.length === 8) {
      flavorText = parts[7].split("\n").filter(x => x.trim() !== "");
    }
    return {
      title: parseTitle(title),
      overallStats: parseOverallStats(overallStats),
      requirements: parseRequirements(requirements),
      sockets: parseSockets(sockets),
      itemLevel: parseItemLevel(itemLevel),
      implicitModifiers: parseImpicitModifiers(implicitModifiers),
      explicitModifiers: parseExplicitModifiers(explicitModifiers),
      flavorText,
    };
  } catch (e) {
    console.error(e);
    return { error: "Cannot parse item data" };
  }
};

export const exampleSword = `Rarity: Rare
Rapture Barb
Eternal Sword
--------
One Handed Sword
Quality: +14% (augmented)
Physical Damage: 142-239 (augmented)
Elemental Damage: 6-133 (augmented)
Critical Strike Chance: 5.00%
Attacks per Second: 1.50
Weapon Range: 9
--------
Requirements:
Level: 66
Str: 104
Dex: 122
--------
Sockets: R-R R
--------
Item Level: 70
--------
+475 to Accuracy Rating
--------
154% increased Physical Damage
Adds 6 to 133 Lightning Damage
9% reduced Enemy Stun Threshold
+29% to Fire Resistance
+34% to Cold Resistance
Adds 12 to 21 Physical Damage
`;

export const lioneyesGlare = `Rarity: Unique
Lioneye's Glare
Imperial Bow
--------
Bow
Quality: +20% (augmented)
Physical Damage: 74-279 (augmented)
Critical Strike Chance: 5.00%
Attacks per Second: 1.62 (augmented)
--------
Requirements:
Level: 66
Str: 66
Dex: 212
Int: 62
--------
Sockets: R-G-G-G G
--------
Item Level: 71
--------
22% increased Elemental Damage with Attack Skills
--------
154% increased Physical Damage
Adds 8 to 24 Physical Damage
12% increased Attack Speed
+94 to maximum Mana
Hits can't be Evaded
Far Shot
--------
"See without doubt, slay without hesitation."
- Marceus Lioneye of Sarn`;

export const exampleSwordTwo = `Rarity: Rare
Woe Skewer
Battle Sword
--------
One Handed Sword
Physical Damage: 58-107 (augmented)
Elemental Damage: 2-28 (augmented)
Critical Strike Chance: 5.00%
Attacks per Second: 1.20
Weapon Range: 9
--------
Requirements:
Level: 44
Str: 83
Dex: 70
--------
Sockets: R-R
--------
Item Level: 47
--------
40% increased Accuracy Rating
--------
53% increased Physical Damage
Adds 2 to 28 Lightning Damage
+19% to Fire Resistance
+35 to Accuracy Rating`;

export const rareArmor = `Rarity: Rare
Loath Shell
Frontier Leather
--------
Evasion Rating: 523 (augmented)
--------
Requirements:
Level: 41
Dex: 114
--------
Sockets: G-R-G
--------
Item Level: 42
--------
+26 to Dexterity
+17 to Evasion Rating
22% increased Evasion Rating
+70 to maximum Life
+18% to Lightning Resistance
11% increased Stun and Block Recovery`;
