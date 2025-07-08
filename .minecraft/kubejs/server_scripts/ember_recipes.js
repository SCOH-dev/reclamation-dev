ServerEvents.recipes(event => {
    const crystal_recipe_ids = ['aluminum', 'copper', 'gold', 'iron', 'lead', 'nickel', 'silver', 'tin', 'zinc']
    crystal_recipe_ids.forEach(id => {
        event.remove({id: 'embers:alchemy/'+id+'_crystal_seed'})
    })

    event.replaceInput({id: 'embers:ancient_codex'},
            'embers:archaic_brick',
            'embers:caminite_brick')

    event.replaceInput({id: 'embers:ancient_codex'},
            'embers:ancient_motive_core',
            'minecraft:wheat')

    event.remove({id: 'embers:item_extractor'})
    event.shaped('embers:item_extractor', [
            ' G ',
            'IPI',
            ' G '
        ], {
            G: 'naturesaura:gold_powder',
            I: 'embers:item_pipe',
            P: 'embers:caminite_plate'
        }
    )

    event.remove({id: 'embers:fluid_extractor'})
    event.shaped('embers:fluid_extractor', [
            ' G ',
            'IPI',
            ' G '
        ], {
            G: 'naturesaura:gold_powder',
            I: 'embers:fluid_pipe',
            P: 'embers:caminite_plate'
        }
    )

    //easier fluid tank
    event.remove({ id: 'embers:fluid_vessel'})
    event.shaped('embers:fluid_vessel', [
        'B B',
        'CAC',
        'BCB'
    ], {
        B: 'embers:caminite_brick',
        C: 'minecraft:copper_ingot',
        A: 'theurgy:sal_ammoniac_tank'
    })

    //archaic brick
    event.custom({
        "type": "embers:alchemy",
        "aspects": [
            {
                "tag": "embers:aspectus/iron"
            },
            {
                "tag": "embers:aspectus/copper"
            }
        ],
        "inputs": [
            {
                "item": "naturesaura:infused_iron"
            },
            {
                "item": "naturesaura:tainted_gold"
            }
        ],
        "output": {
            "count": 2,
            "item": "embers:archaic_brick"
        },
        "tablet": {
            "item": "minecraft:brick"
        }
    })

    event.custom({
        "type": "embers:alchemy",
        "aspects": [
            {
                "tag": "embers:aspectus/iron"
            },
            {
                "tag": "embers:aspectus/copper"
            },
            {
                "tag": "embers:aspectus/silver"
            },
            {
                "tag": "embers:aspectus/dawnstone"
            }
        ],
        "inputs": [
            {
                "item": "naturesaura:infused_iron"
            },
            {
                "item": "naturesaura:tainted_gold"
            },
            {
                "item": "botania:rune_earth"
            },
            {
                "item": "botania:rune_fire"
            },
            {
                "item": "minecraft:copper_ingot"
            }

        ],
        "output": {
            "count": 1,
            "item": "embers:copper_crystal_seed"
        },
        "tablet": {
            "item": "enchanted:attuned_stone_charged"
        }
    })
    event.custom({
        "type": "embers:alchemy",
        "aspects": [
            {
                "tag": "embers:aspectus/iron"
            },
            {
                "tag": "embers:aspectus/copper"
            },
            {
                "tag": "embers:aspectus/silver"
            },
            {
                "tag": "embers:aspectus/dawnstone"
            }
        ],
        "inputs": [
            {
                "item": "naturesaura:infused_iron"
            },
            {
                "item": "naturesaura:tainted_gold"
            },
            {
                "item": "botania:rune_earth"
            },
            {
                "item": "botania:rune_fire"
            },
            {
                "item": "minecraft:iron_ingot"
            }
        ],
        "output": {
            "count": 1,
            "item": "embers:iron_crystal_seed"
        },
        "tablet": {
            "item": "enchanted:attuned_stone_charged"
        }
    })
    event.custom({
        "type": "embers:alchemy",
        "aspects": [
            {
                "tag": "embers:aspectus/iron"
            },
            {
                "tag": "embers:aspectus/copper"
            }
        ],
        "inputs": [
            {
                "item": "embers:lead_ingot"
            },
            {
                "item": "embers:silver_ingot"
            },
            {
                "item": "minecraft:gold_ingot"
            }
        ],
        "output": {
            "count": 1,
            "item": "embers:zinc_crystal_seed"
        },
        "tablet": {
            "item": "enchanted:attuned_stone_charged"
        }
    })
    event.custom({
        "type": "embers:alchemy",
        "aspects": [
            {
                "tag": "embers:aspectus/iron"
            },
            {
                "tag": "embers:aspectus/copper"
            },
            {
                "tag": "embers:aspectus/silver"
            },
            {
                "tag": "embers:aspectus/dawnstone"
            }
        ],
        "inputs": [
            {
                "item": "naturesaura:infused_iron"
            },
            {
                "item": "naturesaura:tainted_gold"
            },
            {
                "item": "botania:rune_earth"
            },
            {
                "item": "botania:rune_fire"
            },
            {
                "item": "embers:lead_ingot"
            }
        ],
        "output": {
            "count": 1,
            "item": "embers:lead_crystal_seed"
        },
        "tablet": {
            "item": "enchanted:attuned_stone_charged"
        }
    })
})