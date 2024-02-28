const civilianResearchData = [
  {
    "Tier": 1,
    "Name": "Stamina",
    "Prerequisite": "-",
    "Requirements": "-",
    "Cost": "-",
    "Effects": "Unlocks the Hospital",
    "": ""
  },
  {
    "Tier": 1,
    "Name": "Keen",
    "Prerequisite": "-",
    "Requirements": "Residence Lv3",
    "Cost": "3 books",
    "Effects": "Unlocks the Library",
    "": ""
  },
  {
    "Tier": 1,
    "Name": "First Aid",
    "Prerequisite": "-",
    "Requirements": "Town Hall Lv1",
    "Cost": "8 Hay Bales",
    "Effects": "Increases colonists’ health by 1 heart",
    "": ""
  },
  {
    "Tier": 1,
    "Name": "Higher Learning",
    "Prerequisite": "-",
    "Requirements": "Residence Lv3",
    "Cost": "3 Books",
    "Effects": "Unlocks School",
    "": ""
  },
  {
    "Tier": 1,
    "Name": "Ambition",
    "Prerequisite": "-",
    "Requirements": "-",
    "Cost": "1 Diamond",
    "Effects": "Unlocks Mystical Site",
    "": ""
  },
  {
    "Tier": 1,
    "Name": "Remembrance",
    "Prerequisite": "-",
    "Requirements": "Town Hall Lv2",
    "Cost": "8 Bones",
    "Effects": "Unlocks Graveyard",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "Band Aid",
    "Prerequisite": "Stamina",
    "Requirements": "Library Lv2",
    "Cost": "1 golden carrot",
    "Effects": "Colonists heal 10% more each tick",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "Resistance",
    "Prerequisite": "Stamina",
    "Requirements": "Restaurant Lv2",
    "Cost": "1 golden apple",
    "Effects": "Colonists can heal with only 95% saturation",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "Outpost",
    "Prerequisite": "Keen",
    "Requirements": "Residence Lv4",
    "Cost": "64 steak",
    "Effects": "Increases the colony’s population cap to 50 colonists",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "Diligent",
    "Prerequisite": "Keen",
    "Requirements": "Library Lv2",
    "Cost": "6 books",
    "Effects": "Increases the rate colonists level up by 5%",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "Rails",
    "Prerequisite": "Keen",
    "Requirements": "Courier Hut Lv3",
    "Cost": "64 rails",
    "Effects": "Lets colonists use rails to get around",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "Aaaioooiooo",
    "Prerequisite": "Keen",
    "Requirements": "Residence Lv3",
    "Cost": "64 vines",
    "Effects": "Colonists can climb vines",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "First Aid II",
    "Prerequisite": "First Aid",
    "Requirements": "Town Hall Lv2",
    "Cost": "16 Hay Bales",
    "Effects": "Increases colonists’ health by 2 hearts",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "Circus",
    "Prerequisite": "First Aid",
    "Requirements": "Restaurant Lv2",
    "Cost": "1 Cake",
    "Effects": "Increases colonists’ happiness by 5%",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "Gourmand",
    "Prerequisite": "First Aid",
    "Requirements": "Restaurant Lv2",
    "Cost": "32 Cookies",
    "Effects": "Food is 10% more effective at restoring colonists’ saturation",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "More Books",
    "Prerequisite": "Higher Learning",
    "Requirements": "School Lv 1",
    "Cost": "32 Cookies",
    "Effects": "Increases the effectiveness of Teachers by 5%",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "Nurture",
    "Prerequisite": "Higher Learning",
    "Requirements": "School Lv1",
    "Cost": "32 Cooked Chicken",
    "Effects": "Decreases the time it takes children to grow up by 5%",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "Resurrection Chance I",
    "Prerequisite": "Remembrance",
    "Requirements": "Graveyard Lv3",
    "Cost": "1 Ghost Tear",
    "Effects": "Increases the Undertakers chances of resurrecting colonists by 1%",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "Grave Decay I",
    "Prerequisite": "Remembrance",
    "Requirements": "Graveyard Lv3",
    "Cost": "64 Rotten Flesh",
    "Effects": "Graves take 2 more minutes before decaying",
    "": ""
  },
  {
    "Tier": 2,
    "Name": "Undertaker Emergency",
    "Prerequisite": "Remembrance",
    "Requirements": "Graveyard Lv2",
    "Cost": "1 Iron Boots",
    "Effects": "Undertakers run toward graves instead of walking",
    "": ""
  },
  {
    "Tier": 3,
    "Name": "Healing Cream",
    "Prerequisite": "Band Aid",
    "Requirements": "Library Lv3",
    "Cost": "8 golden carrots",
    "Effects": "Colonists heal 25% more each tick",
    "": ""
  },
  {
    "Tier": 3,
    "Name": "Resilience",
    "Prerequisite": "Resistance",
    "Requirements": "Restaurant Lv3",
    "Cost": "8 golden apples",
    "Effects": "Colonists can heal with only 90% saturation",
    "": ""
  },
  {
    "Tier": 3,
    "Name": "Hamlet",
    "Prerequisite": "Outpost",
    "Requirements": "Residence Lv5",
    "Cost": "128 Steak",
    "Effects": "Increases the colony’s population cap to a total of 100 colonists",
    "": ""
  },
  {
    "Tier": 3,
    "Name": "Studious",
    "Prerequisite": "Diligent",
    "Requirements": "Library Lv3",
    "Cost": "12 books",
    "Effects": "Increases the rate colonists level up by 10%",
    "": ""
  },
  {
    "Tier": 3,
    "Name": "Nimble",
    "Prerequisite": "Rails",
    "Requirements": "Town Hall Lvl 3",
    "Cost": "1 rabbit foot",
    "Effects": "Increases colonists’ speed by 5%",
    "": ""
  },
  {
    "Tier": 3,
    "Name": "Lifesaver",
    "Prerequisite": "First Aid II",
    "Requirements": "Town Hall Lv3",
    "Cost": "32 Hay Bales",
    "Effects": "Increases colonists’ health by 3 hearts",
    "": ""
  },
  {
    "Tier": 3,
    "Name": "Festival",
    "Prerequisite": "Circus",
    "Requirements": "Restaurant Lv3",
    "Cost": "9 Cakes",
    "Effects": "Increases colonists’ happiness by 10%",
    "": ""
  },
  {
    "Tier": 3,
    "Name": "Nightowl",
    "Prerequisite": "Circus",
    "Requirements": "Library Lv3",
    "Cost": "25 Golden Carrots",
    "Effects": "Colonists’ bedtime is pushed back by 1 in-game hour(s)",
    "": ""
  },
  {
    "Tier": 3,
    "Name": "Gorger",
    "Prerequisite": "Gourmand",
    "Requirements": "Restaurant Lv3",
    "Cost": "64 Cookies",
    "Effects": "Food is 15% more effective at restoring colonists’ saturation",
    "": ""
  },
  {
    "Tier": 3,
    "Name": "Bookworm",
    "Prerequisite": "More Books",
    "Requirements": "School Lv3",
    "Cost": "6 Bookshelves",
    "Effects": "Increases the effectiveness of Teachers by 10%",
    "": ""
  },
  {
    "Tier": 3,
    "Name": "Hormones",
    "Prerequisite": "Nurture",
    "Requirements": "School Lv3",
    "Cost": "64 Cooked Chicken",
    "Effects": "Decreases the time it takes children to grow up by 10%",
    "": ""
  },
  {
    "Tier": 3,
    "Name": "Resurrection Chance II",
    "Prerequisite": "Resurrection Chance I",
    "Requirements": "Graveyard Lv5",
    "Cost": "16 Chorus Fruit",
    "Effects": "Increases the Undertakers chances of resurrecting colonists by 2%",
    "": ""
  },
  {
    "Tier": 3,
    "Name": "Grave Decay II",
    "Prerequisite": "Grave Decay I",
    "Requirements": "Graveyard Lv5",
    "Cost": "8 Nether Wart Blocks",
    "Effects": "Graves take 3 more minutes before decaying",
    "": ""
  },
  {
    "Tier": 4,
    "Name": "Bandages",
    "Prerequisite": "Healing Cream",
    "Requirements": "Libraries Lv4",
    "Cost": "16 Golden Carrot",
    "Effects": "Colonists heal 50% more each tick they’re healing",
    "": ""
  },
  {
    "Tier": 4,
    "Name": "Vitality",
    "Prerequisite": "Resilience",
    "Requirements": "Restaurant Lv4",
    "Cost": "16 Golden Apple",
    "Effects": "Colonists can heal with only 85% saturation",
    "": ""
  },
  {
    "Tier": 4,
    "Name": "Village",
    "Prerequisite": "Hamlet",
    "Requirements": "Town Hall Lv4",
    "Cost": "256 Steak",
    "Effects": "Increases the colony’s population cap to a total of 150 colonists",
    "": ""
  },
  {
    "Tier": 4,
    "Name": "Scholarly",
    "Prerequisite": "Studious",
    "Requirements": "Libraries Lv4",
    "Cost": "24 Books",
    "Effects": "Increases the rate colonists level up by 25%",
    "": ""
  },
  {
    "Tier": 4,
    "Name": "Agile",
    "Prerequisite": "Nimble",
    "Requirements": "Town Hall Lv4",
    "Cost": "10 Rabbit Feet",
    "Effects": "Increases colonists’ speed by 10%",
    "": ""
  },
  {
    "Tier": 4,
    "Name": "Lifesaver II",
    "Prerequisite": "Lifesaver",
    "Requirements": "Town Hall Lv4",
    "Cost": "64 Hay Bales",
    "Effects": "Increases colonists’ health by 4 hearts",
    "": ""
  },
  {
    "Tier": 4,
    "Name": "Spectacle",
    "Prerequisite": "Festival",
    "Requirements": "Restaurant Lv4",
    "Cost": "18 Cakes",
    "Effects": "Increases colonists’ happiness by 15%",
    "": ""
  },
  {
    "Tier": 4,
    "Name": "Nightowl II",
    "Prerequisite": "Nightowl",
    "Requirements": "Town Hall Lv3",
    "Cost": "75 Golden Carrots",
    "Effects": "Colonists’ bedtime is pushed back by 2 in-game hour(s) (cumulative with prerequisite research)",
    "": ""
  },
  {
    "Tier": 4,
    "Name": "Stuffer",
    "Prerequisite": "Gorger",
    "Requirements": "Restaurant Lv4",
    "Cost": "128 Cookies",
    "Effects": "Food is 25% more effective at restoring colonists’ saturation",
    "": ""
  },
  {
    "Tier": 4,
    "Name": "Bachelor",
    "Prerequisite": "Bookworm",
    "Requirements": "Library Lv3",
    "Cost": "12 Bookshelves",
    "Effects": "Increases the effectiveness of Teachers by 25%",
    "": ""
  },
  {
    "Tier": 4,
    "Name": "Puberty",
    "Prerequisite": "Hormones",
    "Requirements": "Library Lv3",
    "Cost": "128 Cooked Chicken",
    "Effects": "Decreases the time it takes children to grow up by 25%",
    "": ""
  },
  {
    "Tier": 4,
    "Name": "Raising the Dead",
    "Prerequisite": "Resurrection Chance II",
    "Requirements": "Graveyard Lv5",
    "Cost": "1 Totem of Undying",
    "Effects": "Undertakers can use Totems of Undying to increase chance of resurrection",
    "": ""
  },
  {
    "Tier": 5,
    "Name": "Compress",
    "Prerequisite": "Bandages",
    "Requirements": "Library Lv5",
    "Cost": "32 Golden Carrot",
    "Effects": "Colonists heal 100% more each tick they’re healing",
    "": ""
  },
  {
    "Tier": 5,
    "Name": "Fortitude",
    "Prerequisite": "Vitality",
    "Requirements": "Restaurants Lv5",
    "Cost": "32 Golden Apple",
    "Effects": "Colonists can heal with only 80% saturation",
    "": ""
  },
  {
    "Tier": 5,
    "Name": "City",
    "Prerequisite": "Village",
    "Requirements": "Town Hall Lv5",
    "Cost": "512 Steak",
    "Effects": "Increases the colony’s population cap to the maximum amount of colonists in the config file",
    "": ""
  },
  {
    "Tier": 5,
    "Name": "Reflective",
    "Prerequisite": "Scholarly",
    "Requirements": "Library Lv5",
    "Cost": "48 Books",
    "Effects": "Increases the rate colonists level up by 50%",
    "": ""
  },
  {
    "Tier": 5,
    "Name": "Swift",
    "Prerequisite": "Agile",
    "Requirements": "Town Hall Lv5",
    "Cost": "32 Rabbit Feet",
    "Effects": "Increases colonists’ speed by 15%",
    "": ""
  },
  {
    "Tier": 5,
    "Name": "Guardian Angel",
    "Prerequisite": "Lifesaver II",
    "Requirements": "Restaurant Lv5",
    "Cost": "128 Hay Bales",
    "Effects": "Increases colonists’ health by 5 hearts",
    "": ""
  },
  {
    "Tier": 5,
    "Name": "Opera",
    "Prerequisite": "Spectacle",
    "Requirements": "Restaurant Lv5",
    "Cost": "27 Cakes",
    "Effects": "Increases colonists’ happiness by 20%",
    "": ""
  },
  {
    "Tier": 5,
    "Name": "Epicure",
    "Prerequisite": "Stuffer",
    "Requirements": "Restaurant Lv5",
    "Cost": "256 Cookies",
    "Effects": "Food is 50% more effective at restoring colonists’ saturation",
    "": ""
  },
  {
    "Tier": 5,
    "Name": "Master",
    "Prerequisite": "Bachelor",
    "Requirements": "Library Lv5",
    "Cost": "32 Bookshelves",
    "Effects": "Increases the effectiveness of Teachers by 50%",
    "": ""
  },
  {
    "Tier": 5,
    "Name": "Growth",
    "Prerequisite": "Puberty",
    "Requirements": "Library Lv5",
    "Cost": "256 Cooked Chicken",
    "Effects": "Decreases the time it takes children to grow up by 50%",
    "": ""
  },
  {
    "Tier": 6,
    "Name": "Cast",
    "Prerequisite": "Compress",
    "Requirements": "-",
    "Cost": "64 Golden Carrot",
    "Effects": "Colonists heal 200% more each tick they’re healing",
    "": ""
  },
  {
    "Tier": 6,
    "Name": "Indefatigability",
    "Prerequisite": "Fortitude",
    "Requirements": "-",
    "Cost": "64 Golden Apple",
    "Effects": "Colonists can heal with only 50% saturation",
    "": ""
  },
  {
    "Tier": 6,
    "Name": "Academic",
    "Prerequisite": "Reflective",
    "Requirements": "-",
    "Cost": "128 Books",
    "Effects": "Increases the rate colonists level up by 100%",
    "": ""
  },
  {
    "Tier": 6,
    "Name": "Athlete",
    "Prerequisite": "Swift",
    "Requirements": "-",
    "Cost": "64 Rabbit Feet",
    "Effects": "Increases colonists’ speed by 25%",
    "": ""
  },
  {
    "Tier": 6,
    "Name": "Guardian Angel II",
    "Prerequisite": "Guardian Angel",
    "Requirements": "-",
    "Cost": "156 Hay Bales",
    "Effects": "Increases colonists’ health by 10 hearts",
    "": ""
  },
  {
    "Tier": 6,
    "Name": "Theater",
    "Prerequisite": "Opera",
    "Requirements": "-",
    "Cost": "16 Enchanted Golden Apples",
    "Effects": "Increases colonists’ happiness by 50%",
    "": ""
  },
  {
    "Tier": 6,
    "Name": "Glutton",
    "Prerequisite": "Epicure",
    "Requirements": "-",
    "Cost": "512 Cookies",
    "Effects": "Food is 100% more effective at restoring colonists’ saturation",
    "": ""
  },
  {
    "Tier": 6,
    "Name": "PhD",
    "Prerequisite": "Master",
    "Requirements": "-",
    "Cost": "64 Bookshelves",
    "Effects": "Increases the effectiveness of Teachers by 100%",
    "": ""
  },
  {
    "Tier": 6,
    "Name": "Beanstalk",
    "Prerequisite": "Growth",
    "Requirements": "-",
    "Cost": "512 Cooked Chicken",
    "Effects": "Decreases the time it takes children to grow up by 100%",
    "": ""
  }
]

export default civilianResearchData