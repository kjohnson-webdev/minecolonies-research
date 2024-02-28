const technologyResearchData = [
    {
      "Tier": 1,
      "Name": "Biodegradable",
      "Prerequisite": "-",
      "Requirements": "Farmer's Hut Lv3",
      "Cost": "64 Bonemeal",
      "Effects": "Unlocks the Composter's Hut"
    },
    {
      "Tier": 1,
      "Name": "Soft Shoes",
      "Prerequisite": "-",
      "Requirements": "Farmer's Hut Lv3",
      "Cost": "64 Bonemeal",
      "Effects": "Farmers will no longer trample crops"
    },
    {
      "Tier": 1,
      "Name": "More Scrolls",
      "Prerequisite": "-",
      "Requirements": "Enchanter Tower Lv3",
      "Cost": "64 Paper + 1 Ancient Tome + 64 Lapis Lazuli",
      "Effects": "Enchanters learn scroll recipes to locate workers and summon guards"
    },
    {
      "Tier": 1,
      "Name": "Stone Cake",
      "Prerequisite": "-",
      "Requirements": "Mine Lv3",
      "Cost": "64 Chiseled Stone Bricks",
      "Effects": "Unlocks the Stonemason's Hut"
    },
    {
      "Tier": 1,
      "Name": "Woodwork",
      "Prerequisite": "-",
      "Requirements": "Forester's Hut Lv3",
      "Cost": "64 Oak Planks",
      "Effects": "Unlocks the Sawmill"
    },
    {
      "Tier": 1,
      "Name": "Hot!",
      "Prerequisite": "-",
      "Requirements": "Mine Lv2",
      "Cost": "4 Lava Bucket",
      "Effects": "Unlocks the Smeltery"
    },
    {
      "Tier": 1,
      "Name": "Hitting Iron!",
      "Prerequisite": "-",
      "Requirements": "Mine Lv3",
      "Cost": "1 Anvil",
      "Effects": "Unlocks the Blacksmith's Hut"
    },
    {
      "Tier": 2,
      "Name": "Podzol Chance",
      "Prerequisite": "Biodegradable",
      "Requirements": "Composter Hut Lv2",
      "Cost": "8 Podzol",
      "Effects": "Composters get +100% more podzol"
    },
    {
      "Tier": 2,
      "Name": "Flower Power",
      "Prerequisite": "Biodegradable",
      "Requirements": "Composter Hut Lv3",
      "Cost": "64 Compost",
      "Effects": "Unlocks the Flowershop"
    },
    {
      "Tier": 2,
      "Name": "Let it Grow",
      "Prerequisite": "Biodegradable",
      "Requirements": "Farmer's Hut Lv3",
      "Cost": "16 Compost",
      "Effects": "Unlocks the Plantation"
    },
    {
      "Tier": 2,
      "Name": "Bonemeal",
      "Prerequisite": "Biodegradable",
      "Requirements": "Mine Lv3",
      "Cost": "64 Wheat Seeds",
      "Effects": "Farmers harvest 10% more crops total"
    },
    {
      "Tier": 2,
      "Name": "Open the Nether",
      "Prerequisite": "More Scrolls",
      "Requirements": "-",
      "Cost": "3 Gilded Blackstone",
      "Effects": "Unlocks the Nether Mine"
    },
    {
      "Tier": 2,
      "Name": "Rocking Roll",
      "Prerequisite": "Stone Cake",
      "Requirements": "Stonemason's Hut Lv1",
      "Cost": "64 Stone",
      "Effects": "Unlocks the Crusher's Hut"
    },
    {
      "Tier": 2,
      "Name": "Stringwork",
      "Prerequisite": "Woodwork",
      "Requirements": "Sawmill Lv1",
      "Cost": "16 String",
      "Effects": "Unlocks the Fletcher's Hut"
    },
    {
      "Tier": 2,
      "Name": "Sieving",
      "Prerequisite": "Woodwork",
      "Requirements": "Fisher Hut Lv3",
      "Cost": "64 String",
      "Effects": "Unlocks the Sifter's Hut"
    },
    {
      "Tier": 2,
      "Name": "Memory Aid",
      "Prerequisite": "Woodwork",
      "Requirements": "Sawmill Lv1",
      "Cost": "32 Paper",
      "Effects": "Workers can learn 25% more recipes"
    },
    {
      "Tier": 2,
      "Name": "Is This Redstone?",
      "Prerequisite": "Hot!",
      "Requirements": "-",
      "Cost": "128 Redstone Dust",
      "Effects": "Colonists' block break speed increased by 10%"
    },
    {
      "Tier": 2,
      "Name": "The Flinstones",
      "Prerequisite": "Hot!",
      "Requirements": "Smeltery Lv3",
      "Cost": "64 Stone Bricks",
      "Effects": "Unlocks the Stone Smeltery"
    },
    {
      "Tier": 2,
      "Name": "Those Lungs!",
      "Prerequisite": "Hot!",
      "Requirements": "Smeltery Lv3",
      "Cost": "64 Glass",
      "Effects": "Unlocks the Glassblower's Hut"
    },
    {
      "Tier": 2,
      "Name": "Strong",
      "Prerequisite": "Hitting Iron",
      "Requirements": "Blacksmith Hut Lv1",
      "Cost": "8 Diamond",
      "Effects": "Colonists' tools durability increased by 5%"
    },
    {
      "Tier": 2,
      "Name": "Veinminer",
      "Prerequisite": "Hitting Iron",
      "Requirements": "Mine Lv1",
      "Cost": "32 Iron Ore",
      "Effects": "Miners find 10% more ores total"
    },
    {
      "Tier": 2,
      "Name": "Ability",
      "Prerequisite": "Hitting Iron",
      "Requirements": "Mine Lv1",
      "Cost": "64 Iron Ingot",
      "Effects": "Miners find 10% more ores total"
    },
    {
      "Tier": 2,
      "Name": "What ya Need?",
      "Prerequisite": "Hitting Iron",
      "Requirements": "Blacksmith Hut Lv3",
      "Cost": "64 Redstone Dust",
      "Effects": "Unlocks the Mechanic's Hut"
    },
    {
      "Tier": 3,
      "Name": "Podzol Chance II",
      "Prerequisite": "Podzol Chance",
      "Requirements": "Composter Hut Lv3",
      "Cost": "32 Podzol",
      "Effects": "Composters get +100% more podzol"
    },
    {
      "Tier": 3,
      "Name": "Rainbow Heaven",
      "Prerequisite": "Flower Power",
      "Requirements": "One or multiple Flowershops totaling at least 3 levels",
      "Cost": "64 poppies",
      "Effects": "Unlocks the Dyer's Hut"
    },
    {
      "Tier": 3,
      "Name": "Double Trouble",
      "Prerequisite": "Let It Grow",
      "Requirements": "Plantation Lv3",
      "Cost": "64 bamboo+64 sugar cane+64 cactus",
      "Effects": "Plantations grow two crops at once"
    },
    {
      "Tier": 3,
      "Name": "Dung",
      "Prerequisite": "Bonemeal",
      "Requirements": "Mine Lv4",
      "Cost": "128 Wheat Seeds",
      "Effects": "Farmers harvest 25% more crops total"
    },
    {
      "Tier": 3,
      "Name": "Magic Potions",
      "Prerequisite": "Open the Nether",
      "Requirements": "-",
      "Cost": "16 Nether Wart",
      "Effects": "Unlocks the Alchemist Laboratory"
    },
    {
      "Tier": 3,
      "Name": "Gilded Hammer",
      "Prerequisite": "Rocking Roll",
      "Requirements": "Crusher Hut Lv3",
      "Cost": "64 gravel + 64 sand + 64 clay",
      "Effects": "Crusher Huts recipes cost 50% less"
    },
    {
      "Tier": 3,
      "Name": "Knowledge of the Depth",
      "Prerequisite": "Rocking Roll",
      "Requirements": "Crusher Hut Lv3",
      "Cost": "64 deepslate",
      "Effects": "Crusher Huts can convert deepslate into tuff and tuff into cobblestone"
    },
    {
      "Tier": 3,
      "Name": "Pave the Road",
      "Prerequisite": "Rocking Roll",
      "Requirements": "Crusher Hut Lv1",
      "Cost": "32 white concrete",
      "Effects": "Unlocks the Concrete Mixer's Hut"
    },
    {
      "Tier": 3,
      "Name": "Hot Boots",
      "Prerequisite": "Stringwork",
      "Requirements": "Fletcher Hut Lv1",
      "Cost": "32 leather + 16 iron ingot",
      "Effects": "Miners have fire and lava immunity"
    },
    {
      "Tier": 3,
      "Name": "Space",
      "Prerequisite": "Sieving",
      "Requirements": "Mine Lv3",
      "Cost": "16 rack",
      "Effects": "Buildings can minimum stock 50% more"
    },
    {
      "Tier": 3,
      "Name": "Cheat Sheet",
      "Prerequisite": "Memory Aid",
      "Requirements": "Sawmill Lv2",
      "Cost": "64 paper",
      "Effects": "Workers can learn 50% more recipes"
    },
    {
      "Tier": 3,
      "Name": "Warehouse Master",
      "Prerequisite": "Memory Aid",
      "Requirements": "Sawmill Lv3",
      "Cost": "3 rack",
      "Effects": "Add the option to select recipes based on Warehouses stock"
    },
    {
      "Tier": 3,
      "Name": "Builder Modes",
      "Prerequisite": "Memory Aid",
      "Requirements": "Builder Hut Lv3",
      "Cost": "1 diamond axe",
      "Effects": "Add the option to select different build-modes for your Builders"
    },
    {
      "Tier": 3,
      "Name": "Redstone Powered",
      "Prerequisite": "Is This Redstone?",
      "Requirements": "-",
      "Cost": "256 redstone dust",
      "Effects": "Colonists' block break speed increased by 25%"
    },
    {
      "Tier": 3,
      "Name": "Know the End",
      "Prerequisite": "The Flintstones",
      "Requirements": "Bakery Lv3",
      "Cost": "64 chorus fruit",
      "Effects": "Stonemasons learn endstone recipe\n\tBakers learn chorus bread recipe"
    },
    {
      "Tier": 3,
      "Name": "Hardened",
      "Prerequisite": "Strong",
      "Requirements": "Blacksmith Hut Lv2",
      "Cost": "16 diamond",
      "Effects": "Colonists' tools durability increased by 10%"
    },
    {
      "Tier": 3,
      "Name": "Good Veins",
      "Prerequisite": "Veinminer",
      "Requirements": "Mine Lv2",
      "Cost": "64 iron ore",
      "Effects": "Miners find 25% more ores total"
    },
    {
      "Tier": 3,
      "Name": "Skills",
      "Prerequisite": "Ability",
      "Requirements": "Mine Lv2",
      "Cost": "128 iron ingot",
      "Effects": "Colonists' block place speed increased by 25%"
    },
    {
      "Tier": 3,
      "Name": "Enhanced Gates I",
      "Prerequisite": "What ya Need?",
      "Requirements": "-",
      "Cost": "64 wooden gate + 2 ancient tome + 5 block of iron",
      "Effects": "Gates resistance increased by 100%"
    },
    {
      "Tier": 4,
      "Name": "Honey Pot",
      "Prerequisite": "Rainbow Heaven",
      "Requirements": "Apiary Lv3",
      "Cost": "16 beehive",
      "Effects": "Beekeepers can harvest both honey bottles and combs at once"
    },
    {
      "Tier": 4,
      "Name": "Compost",
      "Prerequisite": "Dung",
      "Requirements": "Mine Lv5",
      "Cost": "256 wheat seeds",
      "Effects": "Farmers harvest 50% more crops total"
    },
    {
      "Tier": 4,
      "Name": "Ocean's Heart",
      "Prerequisite": "Magic Potions",
      "Requirements": "Fisher Hut Lv4",
      "Cost": "1 heart of the sea",
      "Effects": "Fishers can find treasure outside the ocean"
    },
    {
      "Tier": 4,
      "Name": "Capacity",
      "Prerequisite": "Space",
      "Requirements": "Mine Lv4",
      "Cost": "32 rack",
      "Effects": "Buildings can minimum stock 100% more"
    },
    {
      "Tier": 4,
      "Name": "Recipe Book",
      "Prerequisite": "Cheat Sheet",
      "Requirements": "Sawmill Lv3",
      "Cost": "128 paper",
      "Effects": "Workers can learn 100% more recipes"
    },
    {
      "Tier": 4,
      "Name": "Deep Pockets",
      "Prerequisite": "Cheat Sheet",
      "Requirements": "Library Lv4",
      "Cost": "64 emerald",
      "Effects": "Citizen inventory increased by 9 slots"
    },
    {
      "Tier": 4,
      "Name": "Heavy Machinery",
      "Prerequisite": "Redstone Powered",
      "Requirements": "-",
      "Cost": "512 redstone dust",
      "Effects": "Colonists' block break speed increased by 50%"
    },
    {
      "Tier": 4,
      "Name": "Reinforced",
      "Prerequisite": "Hardened",
      "Requirements": "Blacksmith Hut Lv3",
      "Cost": "32 diamond",
      "Effects": "Colonists' tools durability increased by 25%"
    },
    {
      "Tier": 4,
      "Name": "Rich Veins",
      "Prerequisite": "Good Veins",
      "Requirements": "Blacksmith Hut Lv4",
      "Cost": "32 gold ore",
      "Effects": "Miners find 50% more ores total"
    },
    {
      "Tier": 4,
      "Name": "Tools",
      "Prerequisite": "Skills",
      "Requirements": "Blacksmith Hut Lv4",
      "Cost": "256 iron ingot",
      "Effects": "Colonists' block place speed increased by 50%"
    },
    {
      "Tier": 4,
      "Name": "Enhanced Gates II",
      "Prerequisite": "Enhanced Gates I",
      "Requirements": "-",
      "Cost": "64 iron gate + 2 ancient tome + 32 obsidian",
      "Effects": "Gates resistance increased by 200%"
    },
    {
      "Tier": 5,
      "Name": "Fertilizer",
      "Prerequisite": "Compost",
      "Requirements": "Smeltery Lv3",
      "Cost": "512 wheat seeds",
      "Effects": "Farmers harvest 75% more crops total"
    },
    {
      "Tier": 5,
      "Name": "Full Stock",
      "Prerequisite": "Capacity",
      "Requirements": "Mine Lv5",
      "Cost": "64 rack",
      "Effects": "Buildings can minimum stock 200% more"
    },
    {
      "Tier": 5,
      "Name": "RTM",
      "Prerequisite": "Recipe Book",
      "Requirements": "Sawmill Lv4",
      "Cost": "256 paper",
      "Effects": "Workers can learn 200% more recipes"
    },
    {
      "Tier": 5,
      "Name": "Loaded",
      "Prerequisite": "Deep Pockets",
      "Requirements": "Library Lv5",
      "Cost": "128 emerald",
      "Effects": "Citizen inventory increased by 18 slots"
    },
    {
      "Tier": 5,
      "Name": "What Is This Speed?",
      "Prerequisite": "Heavy Machinery",
      "Requirements": "-",
      "Cost": "1024 redstone dust",
      "Effects": "Colonists' block break speed increased by 100%"
    },
    {
      "Tier": 5,
      "Name": "Steel Bracing",
      "Prerequisite": "Reinforced",
      "Requirements": "Blacksmith Hut Lv5",
      "Cost": "64 diamond",
      "Effects": "Colonists' tools durability increased by 50%"
    },
    {
      "Tier": 5,
      "Name": "Amazing Veins",
      "Prerequisite": "Rich Veins",
      "Requirements": "Blacksmith Hut Lv5",
      "Cost": "64 gold ore",
      "Effects": "Miners find 100% more ores total"
    },
    {
      "Tier": 5,
      "Name": "Seems Automatic",
      "Prerequisite": "Tools",
      "Requirements": "Blacksmith Hut Lv5",
      "Cost": "512 iron ingot",
      "Effects": "Colonists' block place speed increased by 100%"
    },
    {
      "Tier": 6,
      "Name": "Magic Compost",
      "Prerequisite": "Fertilizer",
      "Requirements": "-",
      "Cost": "2048 wheat seeds",
      "Effects": "Farmers harvest 200% more crops total"
    },
    {
      "Tier": 6,
      "Name": "Rainman",
      "Prerequisite": "RTM",
      "Requirements": "-",
      "Cost": "27 bucket of salmon",
      "Effects": "Colonists work in rain"
    },
    {
      "Tier": 6,
      "Name": "Heavily Loaded",
      "Prerequisite": "Loaded",
      "Requirements": "-",
      "Cost": "256 emerald",
      "Effects": "Citizen inventory increased by 27 slots"
    },
    {
      "Tier": 6,
      "Name": "Lightning",
      "Prerequisite": "What Is This Speed?",
      "Requirements": "-",
      "Cost": "2048 redstone dust",
      "Effects": "Colonists' block break speed increased by 200%"
    },
    {
      "Tier": 6,
      "Name": "Diamond Coated",
      "Prerequisite": "Steel Bracing",
      "Requirements": "-",
      "Cost": "128 diamond",
      "Effects": "Colonists' tools durability increased by 90%"
    },
    {
      "Tier": 6,
      "Name": "Motherlode",
      "Prerequisite": "Amazing Veins",
      "Requirements": "-",
      "Cost": "64 diamond ore",
      "Effects": "Miners find 200% more ores total"
    },
    {
      "Tier": 6,
      "Name": "Madness!",
      "Prerequisite": "Seems Automatic",
      "Requirements": "-",
      "Cost": "1024 iron ingot",
      "Effects": "Colonists' block place speed increased by 200%"
    }
  ]

export default technologyResearchData;