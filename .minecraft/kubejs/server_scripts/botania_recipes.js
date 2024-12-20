ServerEvents.recipes(event => {
    //mana pool recipes to remove
    const remove_pool_ids = ['beetroot_seeds_to_melon_seeds', 'glowstone_dust_to_redstone', 'glow_berries_to_apple', 'carrot_to_beetroot_seeds', 'sweet_berries_to_glow_berries', 'cocoa_beans_to_wheat_seeds', 'potato_to_carrot', 'redstone_to_glowstone_dust', 'apple_to_sweet_berries', 'melon_seeds_to_pumpkin_seeds', 'wheat_seeds_to_potato']
    const remove_rune_ids = ['air', 'water', 'fire', 'earth', 'winter']

    remove_pool_ids.forEach(id => {
        event.remove({ id: 'botania:mana_infusion/'+id})
    })

    event.remove({ id: 'botania:mana_spreader'})
    event.shaped('botania:mana_spreader', [
            'WWW',
            'GP ',
            'WWW'
        ], {
            W: '#botania:livingwood_logs',
            P: '#botania:petals',
            G: 'minecraft:gold_ingot'
        }
    )

    //rune recipes
    remove_rune_ids.forEach(id => {
        event.remove({ id: 'botania:runic_altar/'+id})
    })
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "tag": "botania:mana_dusts"
            },
            {
                "tag": "botania:manasteel_ingots"
            },
            {
                "tag": "minecraft:wool_carpets"
            },
            {
                "item": "minecraft:bamboo"
            },
            {
                "item": "minecraft:string"
            }
        ],
        "mana": 5200,
        "output": {
            "count": 2,
            "item": "botania:rune_air"
        }
    })
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "tag": "botania:mana_dusts"
            },
            {
                "tag": "botania:manasteel_ingots"
            },
            {
                "item": "minecraft:bone_meal"
            },
            {
                "item": "enchanted:water_artichoke"
            },
            {
                "item": "minecraft:fishing_rod"
            }
        ],
        "mana": 5200,
        "output": {
            "count": 2,
            "item": "botania:rune_water"
        }
    })
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "tag": "botania:mana_dusts"
            },
            {
                "tag": "botania:manasteel_ingots"
            },
            {
                "item": "minecraft:stone"
            },
            {
                "item": "create:andesite_alloy"
            },
            [
                {
                    "item": "minecraft:brown_mushroom"
                },
                {
                    "item": "minecraft:red_mushroom"
                }
            ]
        ],
        "mana": 5200,
        "output": {
            "count": 2,
            "item": "botania:rune_earth"
        }
    })
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "tag": "botania:mana_dusts"
            },
            {
                "tag": "botania:manasteel_ingots"
            },
            {
                "item": "minecraft:nether_brick"
            },
            {
                "item": "minecraft:nether_wart"
            },
            {
                "item": "embers:ember_shard"
            }
        ],
        "mana": 5200,
        "output": {
            "count": 2,
            "item": "botania:rune_fire"
        }
    })
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "botania:rune_water"
            },
            {
                "item": "botania:rune_earth"
            },
            {
                "item": "minecraft:snow_block"
            },
            {
                "item": "minecraft:snow_block"
            },
            {
                "tag": "minecraft:wool"
            },
            {
                "item": "minecraft:mushroom_stew"
            }
        ],
        "mana": 8000,
        "output": {
            "count": 2,
            "item": "botania:rune_winter"
        }
    })

    //fel pumpkin
    event.remove({id: "botania:fel_pumpkin"})
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "minecraft:pumpkin"
            },
            {
                "item": "minecraft:rotten_flesh"
            },
            {
                "item": "minecraft:bone"
            },
            {
                "item": "minecraft:string"
            },
            {
                "item": "minecraft:gunpowder"
            }
        ],
        "mana": 4000,
        "output": {
            "count": 1,
            "item": "botania:fel_pumpkin"
        }
    })
})