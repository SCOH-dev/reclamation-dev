ServerEvents.recipes(event => {
    //archwood conversions
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "input": {
            "item": "ars_nouveau:red_archwood_sapling"
        },
        "mana": 50,
        "output": {
            "item": "ars_nouveau:green_archwood_sapling"
        }
    })
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "input": {
            "item": "ars_nouveau:green_archwood_sapling"
        },
        "mana": 50,
        "output": {
            "item": "ars_nouveau:blue_archwood_sapling"
        }
    })
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "input": {
            "item": "ars_nouveau:blue_archwood_sapling"
        },
        "mana": 50,
        "output": {
            "item": "ars_nouveau:purple_archwood_sapling"
        }
    })
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "input": {
            "item": "ars_nouveau:purple_archwood_sapling"
        },
        "mana": 50,
        "output": {
            "item": "ars_nouveau:red_archwood_sapling"
        }
    })
})