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
})