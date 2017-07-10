const parseTitle = (title) => {
  return {
    rarity: title[0].replace("Rarity: ", 0),
    name: title[1],
    base: title[2],
  };
};

export const parseInputText = (input) => {
  if (!input || input.trim() === "") {
    return null;
  }
  try {
    const parts = input.split("--------");
    if (parts.length !== 7) {
      return { error: "Cannot parse item data" };
    }
    const [
      title,
      overallStats,
      requirements,
      sockets,
      itemLevel,
      implicitModifiers,
      explicitModifiers,
    ] = parts.map(part => part.split("\n").filter(x => x.trim() !== ""));
    return {
      title: parseTitle(title),
      overallStats,
      requirements,
      sockets,
      itemLevel,
      implicitModifiers,
      explicitModifiers,
    };
  } catch (e) {
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
