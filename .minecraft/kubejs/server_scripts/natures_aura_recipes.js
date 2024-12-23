ServerEvents.recipes(event => {
    event.remove({ id: 'naturesaura:tree_ritual/eye'})
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:spider_eye"
            },
            {
                "item": "minecraft:iron_ingot"
            },
            {
                "item": "naturesaura:gold_leaf"
            },
            {
                "item": "naturesaura:gold_leaf"
            }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": "naturesaura:eye"
        },
        "time": 250
    })

    event.remove({ id: 'naturesaura:tree_ritual/nature_altar'})
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:stone"
            },
            {
                "item": "minecraft:stone"
            },
            {
                "item": "minecraft:stone"
            },
            {
                "item": "minecraft:stone"
            },
            {
                "item": "minecraft:poppy"
            },
            {
                "item": "minecraft:dandelion"
            },
            {
                "item": "minecraft:grass"
            },
            {
                "item": "minecraft:apple"
            }
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": "naturesaura:nature_altar"
        },
        "time": 500
    })

    //herbivorous absorber
    event.remove({ id: 'naturesaura:flower_generator'})
    event.shaped('naturesaura:flower_generator', [
            'PJP',
            'IFI',
            'PIP'
        ], {
            P: 'naturesaura:ancient_planks',
            J: 'naturesaura:token_joy',
            I: 'naturesaura:infused_iron',
            F: '#botania:mystical_flowers'
        }
    )

    //new crumbling catalyst recipe
    event.remove({ id: 'naturesaura:tree_ritual/crushing_catalyst'})
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "naturesaura:gold_brick"
            },
            {
                "item": "naturesaura:gold_brick"
            },
            {
                "item": "botania:livingrock"
            },
            {
                "item": "botania:livingrock"
            },
            {
                "item": "minecraft:flint"
            },
            {
                "item": "minecraft:flint"
            },
            {
                "item": "naturesaura:token_joy"
            },
            {
                "item": "naturesaura:token_joy"
            }
        ],
        "sapling": {
            "item": "minecraft:spruce_sapling"
        },
        "output": {
            "item": "naturesaura:crushing_catalyst"
        },
        "time": 500
    })

    //lead ingots
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "naturesaura:infused_iron"
            },
            {
                "item": "naturesaura:infused_iron"
            },
            {
                "item": "minecraft:nether_brick"
            },
            {
                "item": "minecraft:nether_brick"
            }
        ],
        "sapling": {
            "item": "minecraft:spruce_sapling"
        },
        "output": {
            "item": "embers:lead_ingot",
            "count": 2
        },
        "time": 200
    })

    //cinder flour
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "minecraft:netherrack"
        },
        "output": {
            "item": "create:cinder_flour"
        },
        "catalyst": {
            "item": "naturesaura:crushing_catalyst"
        },
        "aura": 4000,
        "time": 200
    })

    //nerf transmutation catalyst
    event.remove({id: "naturesaura:altar/gilded_blackstone"})
    event.remove({id: "naturesaura:altar/egg"})
    event.remove({id: "naturesaura:altar/milk"})
    event.remove({id: "naturesaura:altar/warped_fungus"})
    event.remove({id: "naturesaura:altar/crimson_fungus"})
    event.remove({id: "naturesaura:tree_ritual/conversion_catalyst"})
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "naturesaura:gold_leaf"
            },
            {
                "item": "naturesaura:gold_brick"
            },
            {
                "item": "embers:dawnstone_ingot"
            },
            {
                "item": "naturesaura:tainted_gold"
            },
            {
                "item": "botania:manasteel_ingot"
            },
            {
                "item": "botania:manasteel_ingot"
            }
        ],
        "sapling": {
            "item": "minecraft:jungle_sapling"
        },
        "output": {
            "item": "naturesaura:conversion_catalyst"
        },
        "time": 200
    })

    //more conversion recipes
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "minecraft:netherrack"
        },
        "output": {
            "item": "minecraft:crimson_nylium"
        },
        "catalyst": {
            "item": "naturesaura:conversion_catalyst"
        },
        "aura": 2000,
        "time": 200
    })
    event.custom({
        "type": "naturesaura:altar",
        "input": {
            "item": "minecraft:crimson_nylium"
        },
        "output": {
            "item": "minecraft:warped_nylium"
        },
        "catalyst": {
            "item": "naturesaura:conversion_catalyst"
        },
        "aura": 2000,
        "time": 200
    })
})