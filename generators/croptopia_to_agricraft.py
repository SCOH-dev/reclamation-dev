# generates agricraft plant files for croptopia crops
import json

plants = ["artichoke", "asparagus", "barley", "basil", "bellpepper", "blackbean", "blackberry", "blueberry", "broccoli",
          "cabbage", "cantaloupe", "cauliflower", "celery", "chile_pepper", "coffee_beans", "corn", "cranberry",
          "cucumber", "currant", "eggplant", "elderberry", "garlic", "ginger", "grape", "greenbean", "greenonion",
          "honeydew", "hops", "kale", "kiwi", "leek", "lettuce", "mustard", "oat", "olive", "onion", "peanut", "pepper",
          "pineapple", "radish", "raspberry", "rhubarb", "rice", "rutabaga", "saguaro", "soybean", "spinach", "squash",
          "strawberry", "sweetpotato", "tea_leaves", "tomatillo", "tomato", "turmeric", "turnip", "vanilla", "yam",
          "zucchini"]

for plant in plants:
    plant_json = {
        "cloneable": True,
        "growth_bonus": 0.025,
        "growth_chance": 0.75,
        "harvest_stage": 4,
        "mods": [],
        "products": [
            {
                "chance": 0.95,
                "item": "croptopia:" + plant,
                "max": 1,
                "min": 1,
                "required": True
            }
        ],
        "requirement": {
            "light_tolerance_factor": 0.5,
            "max_light": 16,
            "min_light": 10,
            "seasons": [
                "summer",
                "autumn"
            ],
            "soil_acidity": {
                "type": "equal",
                "tolerance_factor": 0.2,
                "value": "slightly_acidic"
            },
            "soil_humidity": {
                "type": "equal",
                "tolerance_factor": 0.15,
                "value": "wet"
            },
            "soil_nutrients": {
                "type": "equal_or_higher",
                "tolerance_factor": 0.1,
                "value": "high"
            }
        },
        "seeds": [
            {
                "item": "croptopia:" + plant + "_seeds",
                "override_planting": False,
                "grass_drop_chance": 0.0,
                "seed_drop_chance": 1.0,
                "seed_drop_bonus": 0.0
            }
        ],
        "spread_chance": 0.1,
        "stages": [
            2,
            3,
            4,
            5,
            8,
            10,
            12,
            16
        ]
    }

    seed_model = {
        "parent": "minecraft:item/generated",
        "textures": {
            "layer0": "croptopia:item/"+plant+"_seed"
        }
    }

    with open('output/data/croptopia/agricraft/plants/' + plant + '.json', 'w') as g:
        json.dump(plant_json, g, ensure_ascii=False, indent=2)

    for i in range(8):
        plant_model = {
        }
        with open('output/assets/croptopia/models/crop/' + plant + '_stage' + str(i) + '.json', 'w') as g:
            json.dump(plant_model, g, ensure_ascii=False, indent=2)