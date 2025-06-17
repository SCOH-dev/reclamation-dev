ServerEvents.recipes(event => {

    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "mysticalagriculture:fire_essence"
            },
            {
                "item": "mysticalagriculture:air_essence"
            },
            {
                "item": "mysticalagriculture:water_essence"
            },
            {
                "item": "mysticalagriculture:earth_essence"
            }
        ],
        "mana": 500,
        "output": {
            "count": 4,
            "item": "mysticalagriculture:prudentium_essence"
        }
    })

    function altarRecipeSides(one, two, three, four, corners, output) {
        event.custom({
            "type": "mysticalagriculture:infusion",
            "ingredients": [
                {
                    "item": corners
                },
                {
                    "item": one
                },
                {
                    "item": corners
                },
                {
                    "item": two
                },
                {
                    "item": corners
                },
                {
                    "item": three
                },
                {
                    "item": corners
                },
                {
                    "item": four
                }
            ],
            "input": {
                "item": "mysticalagriculture:prosperity_seed_base"
            },
            "result": {
                "item": output
            }
        })
    }

    function altarRecipe(corners, sides, output) {
        altarRecipeSides(sides, sides, sides, sides, corners, output)
    }

    const seeds = ['stone', 'dirt', 'deepslate', 'nether', 'ice', 'wood']
    seeds.forEach(id => {
        event.remove({id: 'mysticalagriculture:seed/infusion/'+id})
    })
    altarRecipe("mysticalagriculture:prudentium_essence", "minecraft:stone", "mysticalagriculture:stone_seeds")
    altarRecipe("mysticalagriculture:prudentium_essence", "minecraft:dirt", "mysticalagriculture:dirt_seeds")
    altarRecipeSides("minecraft:oak_sapling", "enchanted:alder_sapling", "enchanted:rowan_sapling", "enchanted:hawthorn_sapling", "mysticalagriculture:prudentium_essence", "mysticalagriculture:wood_seeds")
    altarRecipe("mysticalagriculture:prudentium_essence", "minecraft:deepslate", "mysticalagriculture:deepslate_seeds")
    altarRecipe("mysticalagriculture:prudentium_essence", "minecraft:blue_ice", "mysticalagriculture:ice_seeds")
    altarRecipe("mysticalagriculture:prudentium_essence", "mysticalagriculture:nether_agglomeratio", "mysticalagriculture:nether_seeds")
})