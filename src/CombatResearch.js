const combatResearchData = [
    {
        "Tier": "1",
        "Name": "Improved Leather",
        "Prerequisites": "-",
        "Building": "Guard Tower Lv1",
        "Cost": "32 Leather",
        "Effect": "Increases Guards’ armor durability by 10%"
      },
      {
        "Tier": "1",
        "Name": "Taunt",
        "Prerequisites": "-",
        "Building": "Guard Tower Lvl1",
        "Cost": "8 Rotten Flesh + 8 Bones + 8 Spider Eyes",
        "Effect": "After a Guard attacks a mob, the mob targets the Guard instead of colonists or the player"
      },
      {
        "Tier": "1",
        "Name": "Tactic Training",
        "Prerequisites": "-",
        "Building": "Guard Tower Lv3",
        "Cost": "3 Blocks of Iron",
        "Effect": "Unlocks Barracks"
      },
      {
        "Tier": "1",
        "Name": "Avoidance",
        "Prerequisites": "-",
        "Building": "Guard Tower Lv3",
        "Cost": "3 Blocks of Iron",
        "Effect": "Knights will be able use shields"
      },
      {
        "Tier": "1",
        "Name": "Accuracy",
        "Prerequisites": "-",
        "Building": "Guard Tower Lv4",
        "Cost": "16 Iron Ingots",
        "Effect": "Guard sleep time reduced 50%"
      },
      {
        "Tier": "2",
        "Name": "Parry",
        "Prerequisites": "Avoidance",
        "Building": "Guard Tower Lvl1",
        "Cost": "16 Iron Ingots",
        "Effect": "Increases Knights armor by 5%"
      },
      {
        "Tier": "2",
        "Name": "Dodge",
        "Prerequisites": "Avoidance",
        "Building": "Guard Tower Lvl1",
        "Cost": "16 Leather",
        "Effect": "Increases Archers armor by 5%"
      },
      {
        "Tier": "2",
        "Name": "Regeneration",
        "Prerequisites": "Improved Leather",
        "Building": "Guard Tower Lvl1",
        "Cost": "1 Emerald",
        "Effect": "Lets Guards run away when they have low health"
      },
      {
        "Tier": "2",
        "Name": "Boiled Leather",
        "Prerequisites": "Improved Leather",
        "Building": "Guard Tower Lv2",
        "Cost": "64 Leather",
        "Effect": "Increases Guards’ armor durability by 20%"
      },
      {
        "Tier": "2",
        "Name": "Consume Arrows",
        "Prerequisites": "Taunt",
        "Building": "Guard Tower Lv2",
        "Cost": "64 Arrows",
        "Effect": "Archers use arrows for +2 damage"
      },
      {
        "Tier": "2",
        "Name": "Quick Draw",
        "Prerequisites": "Accuracy",
        "Building": "Guard Tower Lv2",
        "Cost": "2 Blocks of Iron",
        "Effect": "Increases Knights damage by 0.5 hearts"
      },
      {
        "Tier": "2",
        "Name": "Precise Shot",
        "Prerequisites": "Accuracy",
        "Building": "Guard Tower Lv3",
        "Cost": "16 Flint",
        "Effect": "Increases Archers damage by 0.5 hearts"
      },
      {
        "Tier": "2",
        "Name": "Improved Swords",
        "Prerequisites": "Tactic Training",
        "Building": "Guard Tower Lv3",
        "Cost": "6 Blocks of Iron",
        "Effect": "Unlocks the Combat Academy"
      },
      {
        "Tier": "2",
        "Name": "Improved Bows",
        "Prerequisites": "Tactic Training",
        "Building": "Guard Tower Lv3",
        "Cost": "6 Blocks of Iron",
        "Effect": "Unlocks the Archery"
      },
      {
        "Tier": "3",
        "Name": "Arrow Piercing",
        "Prerequisites": "Consume Arrows",
        "Building": "Guard Tower Lv1",
        "Cost": "64 Arrows + 64 Redstone Dust",
        "Effect": "Archers gain Piercing II"
      },
      {
        "Tier": "3",
        "Name": "Riposte",
        "Prerequisites": "Parry",
        "Building": "Guard Tower Lv1",
        "Cost": "32 Iron Ingots",
        "Effect": "Increases Knights armor by 10%"
      },
      {
        "Tier": "3",
        "Name": "Improved Dodge",
        "Prerequisites": "Dodge",
        "Building": "Guard Tower Lv1",
        "Cost": "32 Leather",
        "Effect": "Increases Archers armor by 10%"
      },
      {
        "Tier": "3",
        "Name": "Squire Training",
        "Prerequisites": "Improved Swords",
        "Building": "Guard Tower Lv3",
        "Cost": "4 Shields",
        "Effect": "Increases the chance for Knights to block attacks by 5%"
      },
      {
        "Tier": "3",
        "Name": "Power Attack",
        "Prerequisites": "Quick Draw",
        "Building": "Guard Tower Lv3",
        "Cost": "4 Blocks of Iron",
        "Effect": "Increases Knights damage by 1 heart"
      },
      {
        "Tier": "3",
        "Name": "Penetrating Sot",
        "Prerequisites": "Precise Shot",
        "Building": "Guard Tower Lv3",
        "Cost": "32 Flint",
        "Effect": "Increases Archers damage by 1 heart"
      },
      {
        "Tier": "3",
        "Name": "Trick Shot",
        "Prerequisites": "Improved Bows",
        "Building": "Guard Tower Lv3",
        "Cost": "5 Bows",
        "Effect": "5% chance for Archers to shoot 2 arrows at the same time"
      },
      {
        "Tier": "3",
        "Name": "Iron Skin",
        "Prerequisites": "Boiled Leather",
        "Building": "Guard Tower Lv3",
        "Cost": "16 Iron Ingots",
        "Effect": "Increases Guards’ armor durability by 30%"
      },
      {
        "Tier": "3",
        "Name": "Panoramix",
        "Prerequisites": "Consume Arrows",
        "Building": "Guard Tower Lv3",
        "Cost": "64 Mistletoe",
        "Effect": "Druids request magic potions to unlock new abilities"
      },
      {
        "Tier": "3",
        "Name": "Feint",
        "Prerequisites": "Regeneration",
        "Building": "Guard Tower Lv4",
        "Cost": "8 Emeralds",
        "Effect": "Fleeing Guards take 20% less damage"
      },
      {
        "Tier": "3",
        "Name": "Avoid",
        "Prerequisites": "Regeneration",
        "Building": "Guard Tower Lv4",
        "Cost": "8 Emeralds",
        "Effect": "Increases Guards’ fleeing speed by 10%"
      },
      {
        "Tier": "4",
        "Name": "Whirlwind",
        "Prerequisites": "Arrow Piercing",
        "Building": "Guard Tower Lv1",
        "Cost": "64 Redstone Dust + 64 Gold Ingot + 128 Lapis Lazuli",
        "Effect": "Knights learn special attack that damages and knocks back nearby enemies"
      },
      {
        "Tier": "4",
        "Name": "Knight Training",
        "Prerequisites": "Squire Training",
        "Building": "Guard Tower Lv4",
        "Cost": "8 Shields",
        "Effect": "Increases the chance for Knights to block attacks by 10%"
      },
      {
        "Tier": "4",
        "Name": "Multi Shot",
        "Prerequisites": "Trick Shot",
        "Building": "Guard Tower Lv4",
        "Cost": "9 Bows",
        "Effect": "10% chance for Archers to shoot 2 arrows at the same time"
      },
      {
        "Tier": "4",
        "Name": "Duelist",
        "Prerequisites": "Riposte",
        "Building": "Guard Tower Lv3",
        "Cost": "64 Iron Ingots",
        "Effect": "Increases Knights armor by 25%"
      },
      {
        "Tier": "4",
        "Name": "Evasion",
        "Prerequisites": "Improved Dodge",
        "Building": "Guard Tower Lv3",
        "Cost": "64 Leather",
        "Effect": "Increases Archers armor by 25%"
      },
      {
        "Tier": "4",
        "Name": "Iron Armor",
        "Prerequisites": "Iron Skin",
        "Building": "Guard Tower Lv4",
        "Cost": "32 Iron Ingots",
        "Effect": "Increases Guards’ armor durability by 40%"
      },
      {
        "Tier": "4",
        "Name": "Fear",
        "Prerequisites": "Feint",
        "Building": "Guard Tower Lv8",
        "Cost": "16 Emeralds",
        "Effect": "Fleeing Guards take 30% less damage"
      },
      {
        "Tier": "4",
        "Name": "Evade",
        "Prerequisites": "Avoid",
        "Building": "Guard Tower Lv8",
        "Cost": "16 Emeralds",
        "Effect": "Increases Guards’ fleeing speed by 20%"
      },
      {
        "Tier": "4",
        "Name": "Piercing Shot",
        "Prerequisites": "Penetrating Shot",
        "Building": "Guard Tower Lv10",
        "Cost": "64 Flint",
        "Effect": "Increases Archers damage by 1.5 hearts"
      },
      {
        "Tier": "4",
        "Name": "Cleave",
        "Prerequisites": "Power Attack",
        "Building": "Guard Tower Lv10",
        "Cost": "8 Blocks of Iron",
        "Effect": "Increases Knights damage by 1.5 hearts"
      },
      {
        "Tier": "5",
        "Name": "Plate Armor",
        "Prerequisites": "Iron Armor",
        "Building": "Guard Tower Lv4",
        "Cost": "32 Iron Ingots",
        "Effect": "Blacksmiths learn plate armor recipes"
      },
      {
        "Tier": "5",
        "Name": "Mighty Cleave",
        "Prerequisites": "Cleave",
        "Building": "Guard Tower Lv5",
        "Cost": "16 Blocks of Iron",
        "Effect": "Increases Knights damage by 2 hearts"
      },
      {
        "Tier": "5",
        "Name": "Wounding Shot",
        "Prerequisites": "Piercing Shot",
        "Building": "Guard Tower Lv5",
        "Cost": "128 Flint",
        "Effect": "Increases Archers damage by 2 hearts"
      },
      {
        "Tier": "5",
        "Name": "Captain Training",
        "Prerequisites": "Knight Training",
        "Building": "Guard Tower Lv5",
        "Cost": "16 Shields",
        "Effect": "Increases the chance for Knights to block attacks by 25%"
      },
      {
        "Tier": "5",
        "Name": "Rapid Shot",
        "Prerequisites": "Multi Shot",
        "Building": "Guard Tower Lv5",
        "Cost": "18 Bows",
        "Effect": "25% chance for Archers to shoot 2 arrows at the same time"
      },
      {
        "Tier": "5",
        "Name": "Provost",
        "Prerequisites": "Duelist",
        "Building": "Guard Tower Lv5",
        "Cost": "16 Diamonds",
        "Effect": "Increases Knights armor by 50%"
      },
      {
        "Tier": "5",
        "Name": "Improved Evasion",
        "Prerequisites": "Evasion",
        "Building": "Guard Tower Lv5",
        "Cost": "16 Diamonds",
        "Effect": "Increases Archers armor by 50%"
      },
      {
        "Tier": "5",
        "Name": "Steel Armor",
        "Prerequisites": "Iron Armor",
        "Building": "Guard Tower Lv5",
        "Cost": "64 Iron Ingots",
        "Effect": "Increases Guards’ armor durability by 50%"
      },
      {
        "Tier": "5",
        "Name": "Retreat",
        "Prerequisites": "Fear",
        "Building": "Guard Tower Lv12",
        "Cost": "32 Emeralds",
        "Effect": "Fleeing Guards take 40% less damage"
      },
      {
        "Tier": "5",
        "Name": "Flee",
        "Prerequisites": "Evade",
        "Building": "Guard Tower Lv12",
        "Cost": "32 Emeralds",
        "Effect": "Increases Guards’ fleeing speed by 30%"
      },
      {
        "Tier": "6 - Terminal",
        "Name": "Savage Strike",
        "Prerequisites": "Mighty Cleave",
        "Building": "-",
        "Cost": "32 Blocks of Iron",
        "Effect": "Increases Knights damage by 4 hearts"
      },
      {
        "Tier": "6 - Terminal",
        "Name": "Deadly Aim",
        "Prerequisites": "Wounding Shot",
        "Building": "-",
        "Cost": "256 Flint",
        "Effect": "Increases Archers damage by 4 hearts"
      },
      {
        "Tier": "6 - Terminal",
        "Name": "Captain Of The Guard",
        "Prerequisites": "Captain Training",
        "Building": "-",
        "Cost": "27 Shields",
        "Effect": "Increases the chance for Knights to block attacks by 50%"
      },
      {
        "Tier": "6 - Terminal",
        "Name": "Master Bowman",
        "Prerequisites": "Rapid Shot",
        "Building": "-",
        "Cost": "27 Bows",
        "Effect": "50% chance for Archers to shoot 2 arrows at the same time"
      },
      {
        "Tier": "6 - Terminal",
        "Name": "Master Swordsman",
        "Prerequisites": "Provost",
        "Building": "-",
        "Cost": "64 Diamonds",
        "Effect": "Increases Knights armor by 100%"
      },
      {
        "Tier": "6 - Terminal",
        "Name": "Agile Archer",
        "Prerequisites": "Improved Evasion",
        "Building": "-",
        "Cost": "64 Diamonds",
        "Effect": "Increases Archers armor by 100%"
      },
      {
        "Tier": "6 - Terminal",
        "Name": "Diamond Skin",
        "Prerequisites": "Steel Armor",
        "Building": "-",
        "Cost": "64 Diamonds",
        "Effect": "Increases Guards’ armor durability by 100%"
      },
      {
        "Tier": "6 - Terminal",
        "Name": "Full Retreat",
        "Prerequisites": "Retreat",
        "Building": "-",
        "Cost": "64 Emeralds",
        "Effect": "Fleeing Guards take 100% less damage"
      },
      {
        "Tier": "6 - Terminal",
        "Name": "Hotfoot",
        "Prerequisites": "Flee",
        "Building": "-",
        "Cost": "64 Emeralds",
        "Effect": "Increases Guards’ fleeing speed by 50%"
      }
];

export default combatResearchData;