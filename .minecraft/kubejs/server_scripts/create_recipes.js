ServerEvents.recipes(event => {

    //andesite alloy uses lead
    event.remove({id: 'create:crafting/materials/andesite_alloy'})
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
    event.remove({id: 'create:mixing/andesite_alloy'})
    event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
    event.shaped('create:andesite_alloy', [
            'GA',
            'AG'
        ], {
            G: '#forge:nuggets/lead',
            A: 'minecraft:andesite'
        }
    )
    event.custom({
        "type": "create:mixing",
        "ingredients": [
            {
                "item": "minecraft:andesite"
            },
            {
                "tag": "forge:nuggets/lead"
            }
        ],
        "results": [
            {
                "item": "create:andesite_alloy"
            }
        ]
    })

    //disable mechanical press plate recipes
    event.remove({id: 'create:pressing/brass_ingot'})
    event.remove({id: 'create:pressing/iron_ingot'})
    event.remove({id: 'create:pressing/copper_ingot'})
    event.remove({id: 'create:pressing/gold_ingot'})

    //disable metals from washing
    event.remove({id: 'create:splashing/soul_sand'})
    event.remove({id: 'create:splashing/red_sand'})
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "minecraft:red_sand"
            }
        ],
        "results": [
            {
                "chance": 0.05,
                "item": "minecraft:dead_bush"
            }
        ]
    })
    event.remove({id: 'create:splashing/gravel'})
    event.custom({
        "type": "create:splashing",
        "ingredients": [
            {
                "item": "minecraft:gravel"
            }
        ],
        "results": [
            {
                "chance": 0.25,
                "item": "minecraft:flint"
            }
        ]
    })

    //mechanical pump recipe
    event.remove({id: 'create:crafting/kinetics/mechanical_pump'})
    event.shaped('create:mechanical_pump', [
            'ACA',
            'PEP',
            'ACA'
        ], {
            E: 'embers:mechanical_pump',
            P: 'create:fluid_pipe',
            A: 'create:andesite_alloy',
            C: 'create:cogwheel'
        }
    )

    //rose quartz
    event.custom({
        "type": "create:mixing",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "item": "minecraft:glowstone"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "amount": 100,
                "fluid": "theurgy:sal_ammoniac"
            }
        ],
        "results": [
            {
                "item": "create:rose_quartz"
            }
        ]
    })

    const crushing_resource_recipes = [
        "create:crushing/crimsite_recycling",
        "create:crushing/crimsite",
        "create:crushing/ochrum_recycling",
        "create:crushing/ochrum",
        "create:crushing/veridium_recycling",
        "create:crushing/veridium",
        "create:crushing/tuff_recycling",
        "create:crushing/tuff",
        "create:crushing/asurine_recycling",
        "create:crushing/asurine"
    ]
    crushing_resource_recipes.forEach(id => {
        event.remove({id: id})
    })

})