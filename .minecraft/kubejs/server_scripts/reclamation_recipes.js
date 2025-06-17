ServerEvents.recipes(event => {
    
    //dead wood recipes
    event.shapeless('4x kubejs:scrap_wood', [
        'kubejs:dead_log'
    ])
    event.shaped('kubejs:flimsy_planks', [
        'AA',
        'AA'
    ], {
        A: 'kubejs:scrap_wood'
    })
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "kubejs:dead_log"
            }
        ],
        "result": [
            {
                "item": "kubejs:scrap_wood",
                "count": 8
            },
            {
                "chance": 0.5,
                "item": "kubejs:scrap_wood",
                "count": 2
            },
            {
                "chance": 0.15,
                "item": "minecraft:charcoal",
                "count": 1
            }
        ],
        "tool": {
            "type": "farmersdelight:tool_action",
            "action": "axe_dig"
        }
    })

    //remove early game dirt -> coarse dirt -> dirt duplication
    event.remove({ id: 'minecraft:coarse_dirt'})
    event.shapeless('minecraft:coarse_dirt', [
        'minecraft:dirt',
        'minecraft:gravel'
    ])

    //cut copper into ingots
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "minecraft:cut_copper"
            }
        ],
        "result": [
            {
                "item": "minecraft:copper_ingot",
                "count": 6
            },
            {
                "chance": 0.75,
                "item": "minecraft:copper_ingot",
                "count": 2
            },
            {
                "chance": 0.5,
                "item": "minecraft:copper_ingot"
            }
        ],
        "tool": {
            "type": "farmersdelight:tool_action",
            "action": "pickaxe_dig"
        }
    })

    //copper bucket
    event.shaped('minecraft:bucket', [
        'A A',
        'DAD',
        '   '
    ], {
        A: 'minecraft:copper_ingot',
        D: 'embers:caminite_blend'
    })

    //pasture seeds through ritual
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:hay_block"
            },
            {
                "tag": "forge:seeds"
            },
            {
                "item": "enchanted:hint_of_rebirth"
            },
            {
                "item": "enchanted:breath_of_the_goddess"
            }
        ],
        "sapling": {
            "item": "minecraft:birch_sapling"
        },
        "output": {
            "item": "botania:grass_seeds"
        },
        "time": 250
    })

    //gold nether ore from bricks
    event.custom({
        "type": "botania:pure_daisy",
        "input": {
            "type": "block",
            "block": "naturesaura:gold_nether_brick"
        },
        "output": {
            "name": "minecraft:nether_gold_ore"
        }
    })

    //chest from planks... quark >_>
    event.shaped('minecraft:chest', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'kubejs:flimsy_planks'
    })

    //feather-flesh amalgam
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:feather"
            },
            {
                "item": "minecraft:feather"
            },
            {
                "item": "minecraft:feather"
            },
            {
                "item": "minecraft:feather"
            },
            {
                "item": "minecraft:rotten_flesh"
            },
            {
                "item": "minecraft:rotten_flesh"
            },
            {
                "item": "minecraft:rotten_flesh"
            },
            {
                "item": "minecraft:rotten_flesh"
            },
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": "kubejs:feather_flesh_amalgam"
        },
        "time": 250
    })

    //blooded amalgam
    event.custom({
        "type": "theurgy:liquefaction",
        "ingredient": {
            "item": "kubejs:feather_flesh_amalgam"
        },
        "liquefaction_time": 100,
        "result": {
            "count": 1,
            "item": "kubejs:blooded_amalgam"
        },
        "solvent": {
            "fluid": "kubejs:hemoglobic_fluid"
        },
        "solvent_amount": 1000
    })

    //mana amalgam
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "tag": "botania:mana_dusts"
            },
            {
                "item": "botania:grass_seeds"
            },
            {
                "item": "kubejs:blooded_amalgam"
            }
        ],
        "mana": 4000,
        "output": {
            "item": "kubejs:mana_amalgam"
        }
    })

    //chicken spawn egg
    event.custom({
        "type": "naturesaura:offering",
        "input": {
            "item": "kubejs:infused_amalgam"
        },
        "start_item": {
            "item": "naturesaura:calling_spirit"
        },
        "output": {
            "item": "minecraft:chicken_spawn_egg",
            "Count": 2
        }
    })

    //silver sulfur
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "tag": "botania:mana_dusts"
            },
            {
                "item": "embers:dawnstone_ingot"
            },
            {
                "item": "embers:ember_crystal"
            },
            {
                "item": "enchanted:whiff_of_magic"
            },
            {
                "item": "enchanted:gypsum"
            }
        ],
        "mana": 4000,
        "output": {
            "item": "theurgy:alchemical_sulfur_silver",
            "nbt": {
                "theurgy:sulfur.source.id": "#forge:ingots/silver"
            }
        }
    })

    event.shapeless(
        Item.of('agricraft:seed', '{genes:{fertility:{dom:1,rec:1},gain:{dom:1,rec:1},growth:{dom:1,rec:1},mutativity:{dom:1,rec:1},resistance:{dom:10,rec:10},species:{dom:"minecraft:dandelion",rec:"minecraft:dandelion"},strength:{dom:1,rec:1}}}'),
        [
            'minecraft:dandelion',
            'minecraft:wheat_seeds'
        ]
    )
    event.shapeless(
        Item.of('agricraft:seed', '{genes:{fertility:{dom:1,rec:1},gain:{dom:1,rec:1},growth:{dom:1,rec:1},mutativity:{dom:1,rec:1},resistance:{dom:10,rec:10},species:{dom:"minecraft:poppy",rec:"minecraft:poppy"},strength:{dom:1,rec:1}}}'),
        [
            'minecraft:dandelion',
            'minecraft:wheat_seeds'
        ]
    )

    //bee stuff
    event.remove({id: 'complicated_bees:apiary'})
    event.shaped('complicated_bees:apiary', [
        'PPP',
        'B B',
        'PPP'
    ], {
        P: '#minecraft:planks',
        B: 'embers:caminite_brick'
    })

    //combs
    event.custom({
        "type": "complicated_bees:centrifuge",
        "input": {
            "item": "complicated_bees:comb",
            "nbt": {
                "comb_type": "reclamation:barren"
            }
        },
        "outputs": [
            {
                "item": "complicated_bees:beeswax",
                "chance": 0.7
            },
            {
                "item": "complicated_bees:honey_droplet",
                "chance": 0.2
            }
        ]
    })
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "complicated_bees:comb",
                "nbt": {
                    "comb_type": "reclamation:barren"
                }
            }
        ],
        "result": [
            {
                "item": "complicated_bees:beeswax",
                "count": 1,
                "chance": 0.5
            },
            {
                "chance": 0.1,
                "item": "complicated_bees:honey_droplet",
                "count": 1
            }
        ],
        "tool": {
            "tag": "forge:tools/knives"
        }
    })

    //biome bottle
    event.shaped('4x reclamation_util:empty_biome_bottle', [
        ' A ',
        'G G',
        ' G '
    ], {
        A: 'enchanted:attuned_stone_charged',
        G: 'minecraft:glass'
    })

    //prosperity shard
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "tag": "forge:nuggets/copper"
            }
        ],
        "result": [
            {
                "item": "mysticalagriculture:prosperity_shard",
                "chance": 0.15,
                "count": 1
            }
        ],
        "tool": {
            "type": "farmersdelight:tool_action",
            "action": "pickaxe_dig"
        }
    })
})