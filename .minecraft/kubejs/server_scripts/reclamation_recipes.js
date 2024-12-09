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
        ' A ',
        '   '
    ], {
        A: 'minecraft:copper_ingot'
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
})