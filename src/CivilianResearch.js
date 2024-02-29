const civilianResearchData = [
  {
    "Level": 1,
    "Name": "Stamina",
    "Prerequisite": "-",
    "Requirements": "-",
    "Cost": "",
    "Effects": "Unlocks the Hospital",
    "": ""
  },
  {
    "Level": 1,
    "Name": "Keen",
    "Prerequisite": "-",
    "Requirements": "Residences Lv3",
    "Cost": "3 books",
    "Effects": "Unlocks the Library",
    "": ""
  },
  {
    "Level": 1,
    "Name": "First Aid",
    "Prerequisite": "-",
    "Requirements": "Town Hall Lv1",
    "Cost": "8 Hay Bales",
    "Effects": "Increases colonists' health by 1 heart",
    "": ""
  },
  {
    "Level": 1,
    "Name": "Higher Learning",
    "Prerequisite": "-",
    "Requirements": "Residences Lv3",
    "Cost": "3 Books",
    "Effects": "Unlocks School",
    "": ""
  },
  {
    "Level": 1,
    "Name": "Ambition",
    "Prerequisite": "-",
    "Requirements": "",
    "Cost": "1 Diamond",
    "Effects": "Unlocks Mystical Site",
    "": ""
  },
  {
    "Level": 1,
    "Name": "Remembrance",
    "Prerequisite": "-",
    "Requirements": "Town Hall Lv2",
    "Cost": "8 Bones",
    "Effects": "Unlocks Graveyard",
    "": ""
  },
  {
    "Level": 2,
    "Name": "Band Aid",
    "Prerequisite": "Stamina",
    "Requirements": "Library Lv2",
    "Cost": "1 golden carrot",
    "Effects": "Colonists heal 10% more each tick",
    "": ""
  },
  {
    "Level": 2,
    "Name": "Resistance",
    "Prerequisite": "Stamina",
    "Requirements": "Restaurant Lv2",
    "Cost": "1 golden apple",
    "Effects": "Colonists can heal with only 95% saturation",
    "": ""
  },
  {
    "Level": 2,
    "Name": "Outpost",
    "Prerequisite": "Keen",
    "Requirements": "Residences Lv4",
    "Cost": "64 steak",
    "Effects": "Increases the colony's population cap to 50 colonists",
    "": ""
  },
  {
    "Level": 2,
    "Name": "Diligent",
    "Prerequisite": "Keen",
    "Requirements": "Libraries ≥ 2 levels",
    "Cost": "6 books",
    "Effects": "Increases the rate colonists level up by 5%",
    "": ""
  },
  {
    "Level": 2,
    "Name": "Rails",
    "Prerequisite": "Keen",
    "Requirements": "Courier Huts Lv3",
    "Cost": "64 rails",
    "Effects": "Lets colonists use rails to get around",
    "": ""
  },
  {
    "Level": 2,
    "Name": "Aaaioooiooo",
    "Prerequisite": "Keen",
    "Requirements": "Residences Lv3",
    "Cost": "64 vines",
    "Effects": "Colonists can climb vines",
    "": ""
  },
  {
    "Level": 2,
    "Name": "First Aid II",
    "Prerequisite": "First Aid",
    "Requirements": "Town Hall Lv2",
    "Cost": "16 Hay Bales",
    "Effects": "Increases colonists' health by 2 hearts",
    "": ""
  },
  {
    "Level": 2,
    "Name": "Circus",
    "Prerequisite": "First Aid",
    "Requirements": "Restaurant Lv2",
    "Cost": "1 Cake",
    "Effects": "Increases colonists' happiness by 5%",
    "": ""
  },
  {
    "Level": 2,
    "Name": "Gourmand",
    "Prerequisite": "First Aid",
    "Requirements": "Restaurant Lv2",
    "Cost": "32 Cookies",
    "Effects": "Food is 10% more effective at restoring colonists' saturation",
    "": ""
  },
  {
    "Level": 2,
    "Name": "More Books",
    "Prerequisite": "Higher Learning",
    "Requirements": "School Lv 1",
    "Cost": "32 Cookies",
    "Effects": "Increases the effectiveness of Teachers by 5%",
    "": ""
  },
  {
    "Level": 2,
    "Name": "Nurture",
    "Prerequisite": "Higher Learning",
    "Requirements": "School Lv1",
    "Cost": "32 Cooked Chicken",
    "Effects": "Decreases the time it takes children to grow up by 5%",
    "": ""
  },
  {
    "Level": 2,
    "Name": "Resurrection Chance I",
    "Prerequisite": "Remembrance",
    "Requirements": "Graveyards Lv3",
    "Cost": "1 Ghost Tear",
    "Effects": "Increases the Undertakers chances of resurrecting colonists by 1%",
    "": ""
  },
  {
    "Level": 2,
    "Name": "Grave Decay I",
    "Prerequisite": "Remembrance",
    "Requirements": "Graveyards Lv3",
    "Cost": "64 Rotten Flesh",
    "Effects": "Graves take 2 more minutes before decaying",
    "": ""
  },
  {
    "Level": 2,
    "Name": "Undertaker Emergency",
    "Prerequisite": "Remembrance",
    "Requirements": "Graveyards Lv2",
    "Cost": "1 Iron Boots",
    "Effects": "Undertakers run toward graves instead of walking",
    "": ""
  },
  {
    "Level": 3,
    "Name": "Healing Cream",
    "Prerequisite": "Band Aid",
    "Requirements": "Libraries Lv3",
    "Cost": "8 golden carrots",
    "Effects": "Colonists heal 25% more each tick",
    "": ""
  },
  {
    "Level": 3,
    "Name": "Resilience",
    "Prerequisite": "Resistance",
    "Requirements": "Restaurants Lv3",
    "Cost": "8 golden apples",
    "Effects": "Colonists can heal with only 90% saturation",
    "": ""
  },
  {
    "Level": 3,
    "Name": "Hamlet",
    "Prerequisite": "Outpost",
    "Requirements": "Residences Lv5",
    "Cost": "128 Steak",
    "Effects": "Increases the colony's population cap to a total of 100 colonists",
    "": ""
  },
  {
    "Level": 3,
    "Name": "Studious",
    "Prerequisite": "Diligent",
    "Requirements": "Libraries Lv3",
    "Cost": "12 books",
    "Effects": "Increases the rate colonists level up by 10%",
    "": ""
  },
  {
    "Level": 3,
    "Name": "Nimble",
    "Prerequisite": "Rails",
    "Requirements": "Town Hall Lvl 3",
    "Cost": "1 rabbit foot",
    "Effects": "Increases colonists' speed by 5%",
    "": ""
  },
  {
    "Level": 3,
    "Name": "Lifesaver",
    "Prerequisite": "First Aid II",
    "Requirements": "Town Hall Lv3",
    "Cost": "32 Hay Bales",
    "Effects": "Increases colonists' health by 3 hearts",
    "": ""
  },
  {
    "Level": 3,
    "Name": "Festival",
    "Prerequisite": "Circus",
    "Requirements": "Restaurants Lv3",
    "Cost": "9 Cakes",
    "Effects": "Increases colonists' happiness by 10%",
    "": ""
  },
  {
    "Level": 3,
    "Name": "Nightowl",
    "Prerequisite": "Circus",
    "Requirements": "Libraries Lv3",
    "Cost": "25 Golden Carrots",
    "Effects": "Colonists' bedtime is pushed back by 1 in-game hour(s)",
    "": ""
  },
  {
    "Level": 3,
    "Name": "Gorger",
    "Prerequisite": "Gourmand",
    "Requirements": "Restaurants Lv3",
    "Cost": "64 Cookies",
    "Effects": "Food is 15% more effective at restoring colonists' saturation",
    "": ""
  },
  {
    "Level": 3,
    "Name": "Bookworm",
    "Prerequisite": "More Books",
    "Requirements": "Schools Lv3",
    "Cost": "6 Bookshelves",
    "Effects": "Increases the effectiveness of Teachers by 10%",
    "": ""
  },
  {
    "Level": 3,
    "Name": "Hormones",
    "Prerequisite": "Nurture",
    "Requirements": "Schools Lv3",
    "Cost": "64 Cooked Chicken",
    "Effects": "Decreases the time it takes children to grow up by 10%",
    "": ""
  },
  {
    "Level": 3,
    "Name": "Resurrection Chance II",
    "Prerequisite": "Resurrection Chance I",
    "Requirements": "Graveyards Lv5",
    "Cost": "16 Chorus Fruit",
    "Effects": "Increases the Undertakers chances of resurrecting colonists by 2%",
    "": ""
  },
  {
    "Level": 3,
    "Name": "Grave Decay II",
    "Prerequisite": "Grave Decay I",
    "Requirements": "Graveyards Lv5",
    "Cost": "8 Nether Wart Blocks",
    "Effects": "Graves take 3 more minutes before decaying",
    "": ""
  },
  {
    "Level": "Terminal",
    "Name": "Cast",
    "Prerequisite": "Compress",
    "Requirements": "-",
    "Cost": "64 golden carrot",
    "Effects": "Colonists heal 200% more each tick",
    "": ""
  },
  {
    "Level": "Terminal",
    "Name": "Indefatigability",
    "Prerequisite": "Fortitude",
    "Requirements": "-",
    "Cost": "64 golden apple",
    "Effects": "Colonists can heal with only 50% saturation",
    "": ""
  }
]

export default civilianResearchData