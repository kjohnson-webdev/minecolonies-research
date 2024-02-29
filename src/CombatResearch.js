const combatResearchData = [
  {
    "Tier": 1,
    "Name": "Improved Leather",
    "Prerequisite": "-",
    "Requirements": "Guard Tower Lv1",
    "Cost": "32 Leather",
    "Effects": "Increases Guards' armor durability by 10%"
  },
  {
    "Tier": 1,
    "Name": "Taunt",
    "Prerequisite": "-",
    "Requirements": "Guard Tower Lvl1",
    "Cost": "8 Rotten Flesh + 8 Bones + 8 Spider Eyes",
    "Effects": "After a Guard attacks a mob, the mob targets the Guard instead of colonists or the player"
  },
  {
    "Tier": 1,
    "Name": "Tactic Training",
    "Prerequisite": "-",
    "Requirements": "Guard Tower Lv3",
    "Cost": "3 Blocks of Iron",
    "Effects": "Unlocks Barracks"
  },
  {
    "Tier": 1,
    "Name": "Avoidance",
    "Prerequisite": "-",
    "Requirements": "Guard Tower Lv3",
    "Cost": "3 Blocks of Iron",
    "Effects": "Knights will be able use shields"
  },
  {
    "Tier": 1,
    "Name": "Accuracy",
    "Prerequisite": "-",
    "Requirements": "Guard Tower Lv4",
    "Cost": "16 Iron Ingots",
    "Effects": "Guard sleep time reduced 50%"
  },
  {
    "Tier": 2,
    "Name": "Parry",
    "Prerequisite": "Avoidance",
    "Requirements": "Guard Tower Lvl1",
    "Cost": "16 Iron Ingots",
    "Effects": "Increases Knights armor by 5%"
  },
  {
    "Tier": 2,
    "Name": "Dodge",
    "Prerequisite": "Avoidance",
    "Requirements": "Guard Tower Lvl1",
    "Cost": "16 Leather",
    "Effects": "Increases Archers armor by 5%"
  },
  {
    "Tier": 2,
    "Name": "Regeneration",
    "Prerequisite": "Improved Leather",
    "Requirements": "Guard Tower Lvl1",
    "Cost": "1 Emerald",
    "Effects": "Lets Guards run away when they have low health"
  },
  {
    "Tier": 2,
    "Name": "Boiled Leather",
    "Prerequisite": "Improved Leather",
    "Requirements": "Guard Tower Lv2",
    "Cost": "64 Leather",
    "Effects": "Increases Guards' armor durability by 20%"
  },
  {
    "Tier": 2,
    "Name": "Consume Arrows",
    "Prerequisite": "Taunt",
    "Requirements": "Guard Tower Lv2",
    "Cost": "64 Arrows",
    "Effects": "Archers use arrows for +2 damage"
  },
  {
    "Tier": 2,
    "Name": "Quick Draw",
    "Prerequisite": "Accuracy",
    "Requirements": "Guard Tower Lv2",
    "Cost": "2 Blocks of Iron",
    "Effects": "Increases Knights damage by 0.5 hearts"
  },
  {
    "Tier": 2,
    "Name": "Precise Shot",
    "Prerequisite": "Accuracy",
    "Requirements": "Guard Tower Lv3",
    "Cost": "16 Flint",
    "Effects": "Increases Archers damage by 0.5 hearts"
  },
  {
    "Tier": 2,
    "Name": "Improved Swords",
    "Prerequisite": "Tactic Training",
    "Requirements": "Guard Tower Lv3",
    "Cost": "6 Blocks of Iron",
    "Effects": "Unlocks the Combat Academy"
  },
  {
    "Tier": 2,
    "Name": "Improved Bows",
    "Prerequisite": "Tactic Training",
    "Requirements": "Guard Tower Lv3",
    "Cost": "6 Blocks of Iron",
    "Effects": "Unlocks the Archery"
  },
  {
    "Tier": 3,
    "Name": "Arrow Piercing",
    "Prerequisite": "Consume Arrows",
    "Requirements": "Guard Tower Lv1",
    "Cost": "64 Arrows + 64 Redstone Dust",
    "Effects": "Archers gain Piercing II"
  },
  {
    "Tier": 3,
    "Name": "Riposte",
    "Prerequisite": "Parry",
    "Requirements": "Guard Tower Lv1",
    "Cost": "32 Iron Ingots",
    "Effects": "Increases Knights armor by 10%"
  },
  {
    "Tier": 3,
    "Name": "Improved Dodge",
    "Prerequisite": "Dodge",
    "Requirements": "Guard Tower Lv1",
    "Cost": "32 Leather",
    "Effects": "Increases Archers armor by 10%"
  },
  {
    "Tier": 3,
    "Name": "Squire Training",
    "Prerequisite": "Improved Swords",
    "Requirements": "Guard Tower Lv3",
    "Cost": "4 Shields",
    "Effects": "Increases the chance for Knights to block attacks by 5%"
  },
  {
    "Tier": 3,
    "Name": "Power Attack",
    "Prerequisite": "Quick Draw",
    "Requirements": "Guard Tower Lv3",
    "Cost": "4 Blocks of Iron",
    "Effects": "Increases Knights damage by 1 heart"
  },
  {
    "Tier": 3,
    "Name": "Penetrating Sot",
    "Prerequisite": "Precise Shot",
    "Requirements": "Guard Tower Lv3",
    "Cost": "32 Flint",
    "Effects": "Increases Archers damage by 1 heart"
  },
  {
    "Tier": 3,
    "Name": "Trick Shot",
    "Prerequisite": "Improved Bows",
    "Requirements": "Guard Tower Lv3",
    "Cost": "5 Bows",
    "Effects": "5% chance for Archers to shoot 2 arrows at the same time"
  },
  {
    "Tier": 3,
    "Name": "Iron Skin",
    "Prerequisite": "Boiled Leather",
    "Requirements": "Guard Tower Lv3",
    "Cost": "16 Iron Ingots",
    "Effects": "Increases Guards' armor durability by 30%"
  },
  {
    "Tier": 3,
    "Name": "Panoramix",
    "Prerequisite": "Consume Arrows",
    "Requirements": "Guard Tower Lv3",
    "Cost": "64 Mistletoe",
    "Effects": "Druids request magic potions to unlock new abilities"
  },
  {
    "Tier": 3,
    "Name": "Feint",
    "Prerequisite": "Regeneration",
    "Requirements": "Guard Tower Lv4",
    "Cost": "8 Emeralds",
    "Effects": "Fleeing Guards take 20% less damage"
  },
  {
    "Tier": 3,
    "Name": "Avoid",
    "Prerequisite": "Regeneration",
    "Requirements": "Guard Tower Lv4",
    "Cost": "8 Emeralds",
    "Effects": "Increases Guards' fleeing speed by 10%"
  },
  {
    "Tier": 4,
    "Name": "Whirlwind",
    "Prerequisite": "Arrow Piercing",
    "Requirements": "Guard Tower Lv1",
    "Cost": "64 Redstone Dust + 64 Gold Ingot + 128 Lapis Lazuli",
    "Effects": "Knights learn special attack that damages and knocks back nearby enemies"
  },
  {
    "Tier": 4,
    "Name": "Knight Training",
    "Prerequisite": "Squire Training",
    "Requirements": "Guard Tower Lv4",
    "Cost": "8 Shields",
    "Effects": "Increases the chance for Knights to block attacks by 10%"
  },
  {
    "Tier": 4,
    "Name": "Multi Shot",
    "Prerequisite": "Trick Shot",
    "Requirements": "Guard Tower Lv4",
    "Cost": "9 Bows",
    "Effects": "10% chance for Archers to shoot 2 arrows at the same time"
  },
  {
    "Tier": 4,
    "Name": "Duelist",
    "Prerequisite": "Riposte",
    "Requirements": "Guard Tower Lv3",
    "Cost": "64 Iron Ingots",
    "Effects": "Increases Knights armor by 25%"
  },
  {
    "Tier": 4,
    "Name": "Evasion",
    "Prerequisite": "Improved Dodge",
    "Requirements": "Guard Tower Lv3",
    "Cost": "64 Leather",
    "Effects": "Increases Archers armor by 25%"
  },
  {
    "Tier": 4,
    "Name": "Iron Armor",
    "Prerequisite": "Iron Skin",
    "Requirements": "Guard Tower Lv4",
    "Cost": "32 Iron Ingots",
    "Effects": "Increases Guards' armor durability by 40%"
  },
  {
    "Tier": 4,
    "Name": "Fear",
    "Prerequisite": "Feint",
    "Requirements": "Guard Tower Lv8",
    "Cost": "16 Emeralds",
    "Effects": "Fleeing Guards take 30% less damage"
  },
  {
    "Tier": 4,
    "Name": "Evade",
    "Prerequisite": "Avoid",
    "Requirements": "Guard Tower Lv8",
    "Cost": "16 Emeralds",
    "Effects": "Increases Guards' fleeing speed by 20%"
  },
  {
    "Tier": 4,
    "Name": "Piercing Shot",
    "Prerequisite": "Penetrating Shot",
    "Requirements": "Guard Tower Lv10",
    "Cost": "64 Flint",
    "Effects": "Increases Archers damage by 1.5 hearts"
  },
  {
    "Tier": 4,
    "Name": "Cleave",
    "Prerequisite": "Power Attack",
    "Requirements": "Guard Tower Lv10",
    "Cost": "8 Blocks of Iron",
    "Effects": "Increases Knights damage by 1.5 hearts"
  },
  {
    "Tier": 5,
    "Name": "Plate Armor",
    "Prerequisite": "Iron Armor",
    "Requirements": "Guard Tower Lv4",
    "Cost": "32 Iron Ingots",
    "Effects": "Blacksmiths learn plate armor recipes"
  },
  {
    "Tier": 5,
    "Name": "Mighty Cleave",
    "Prerequisite": "Cleave",
    "Requirements": "Guard Tower Lv5",
    "Cost": "16 Blocks of Iron",
    "Effects": "Increases Knights damage by 2 hearts"
  },
  {
    "Tier": 5,
    "Name": "Wounding Shot",
    "Prerequisite": "Piercing Shot",
    "Requirements": "Guard Tower Lv5",
    "Cost": "128 Flint",
    "Effects": "Increases Archers damage by 2 hearts"
  },
  {
    "Tier": 5,
    "Name": "Captain Training",
    "Prerequisite": "Knight Training",
    "Requirements": "Guard Tower Lv5",
    "Cost": "16 Shields",
    "Effects": "Increases the chance for Knights to block attacks by 25%"
  },
  {
    "Tier": 5,
    "Name": "Rapid Shot",
    "Prerequisite": "Multi Shot",
    "Requirements": "Guard Tower Lv5",
    "Cost": "18 Bows",
    "Effects": "25% chance for Archers to shoot 2 arrows at the same time"
  },
  {
    "Tier": 5,
    "Name": "Provost",
    "Prerequisite": "Duelist",
    "Requirements": "Guard Tower Lv5",
    "Cost": "16 Diamonds",
    "Effects": "Increases Knights armor by 50%"
  },
  {
    "Tier": 5,
    "Name": "Improved Evasion",
    "Prerequisite": "Evasion",
    "Requirements": "Guard Tower Lv5",
    "Cost": "16 Diamonds",
    "Effects": "Increases Archers armor by 50%"
  },
  {
    "Tier": 5,
    "Name": "Steel Armor",
    "Prerequisite": "Iron Armor",
    "Requirements": "Guard Tower Lv5",
    "Cost": "64 Iron Ingots",
    "Effects": "Increases Guards' armor durability by 50%"
  },
  {
    "Tier": 5,
    "Name": "Retreat",
    "Prerequisite": "Fear",
    "Requirements": "Guard Tower Lv12",
    "Cost": "32 Emeralds",
    "Effects": "Fleeing Guards take 40% less damage"
  },
  {
    "Tier": 5,
    "Name": "Flee",
    "Prerequisite": "Evade",
    "Requirements": "Guard Tower Lv12",
    "Cost": "32 Emeralds",
    "Effects": "Increases Guards' fleeing speed by 30%"
  },
  {
    "Tier": 6,
    "Name": "Savage Strike",
    "Prerequisite": "Mighty Cleave",
    "Requirements": "-",
    "Cost": "32 Blocks of Iron",
    "Effects": "Increases Knights damage by 4 hearts"
  },
  {
    "Tier": 6,
    "Name": "Deadly Aim",
    "Prerequisite": "Wounding Shot",
    "Requirements": "-",
    "Cost": "256 Flint",
    "Effects": "Increases Archers damage by 4 hearts"
  },
  {
    "Tier": 6,
    "Name": "Captain Of The Guard",
    "Prerequisite": "Captain Training",
    "Requirements": "-",
    "Cost": "27 Shields",
    "Effects": "Increases the chance for Knights to block attacks by 50%"
  },
  {
    "Tier": 6,
    "Name": "Master Bowman",
    "Prerequisite": "Rapid Shot",
    "Requirements": "-",
    "Cost": "27 Bows",
    "Effects": "50% chance for Archers to shoot 2 arrows at the same time"
  },
  {
    "Tier": 6,
    "Name": "Master Swordsman",
    "Prerequisite": "Provost",
    "Requirements": "-",
    "Cost": "64 Diamonds",
    "Effects": "Increases Knights armor by 100%"
  },
  {
    "Tier": 6,
    "Name": "Agile Archer",
    "Prerequisite": "Improved Evasion",
    "Requirements": "-",
    "Cost": "64 Diamonds",
    "Effects": "Increases Archers armor by 100%"
  },
  {
    "Tier": 6,
    "Name": "Diamond Skin",
    "Prerequisite": "Steel Armor",
    "Requirements": "-",
    "Cost": "64 Diamonds",
    "Effects": "Increases Guards' armor durability by 100%"
  },
  {
    "Tier": 6,
    "Name": "Full Retreat",
    "Prerequisite": "Retreat",
    "Requirements": "-",
    "Cost": "64 Emeralds",
    "Effects": "Fleeing Guards take 100% less damage"
  },
  {
    "Tier": 6,
    "Name": "Hotfoot",
    "Prerequisite": "Flee",
    "Requirements": "-",
    "Cost": "64 Emeralds",
    "Effects": "Increases Guards' fleeing speed by 50%"
  }
]

export default combatResearchData;