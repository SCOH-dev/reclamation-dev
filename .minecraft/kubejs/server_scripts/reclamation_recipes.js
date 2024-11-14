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
})