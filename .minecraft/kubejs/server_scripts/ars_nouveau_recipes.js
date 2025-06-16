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

    event.remove({ id: 'ars_elemental:imbuement_anima_essence'})
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 1,
        "input": {
            "tag": "forge:gems/source"
        },
        "output": "ars_elemental:anima_essence",
        "pedestalItems": [
            {
                "item": {
                    "item": "bloodmagic:infusedslate"
                }
            },
            {
                "item": {
                    "item": "minecraft:bone_meal"
                }
            },
            {
                "item": {
                    "item": "minecraft:golden_apple"
                }
            }
        ],
        "source": 3000
    })

    event.remove({id: 'ars_nouveau:storage_lectern'})
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": "ars_nouveau:storage_lectern"
        },
        "pedestalItems": [
            {
                "item": "ars_nouveau:bookwyrm_charm"
            },
            {
                "tag": "forge:chests"
            },
            {
                "tag": "forge:chests"
            },
            {
                "tag": "forge:chests"
            }
        ],
        "reagent": [
            {
                "item": "minecraft:lectern"
            }
        ],
        "sourceCost": 0
    })

    event.remove({id: 'ars_nouveau:novice_spell_book'})
    event.shapeless('ars_nouveau:novice_spell_book', [
        'minecraft:book',
        'botania:manasteel_shovel',
        'botania:manasteel_pick',
        'botania:manasteel_axe',
        'botania:manasteel_sword',
        'ars_nouveau:source_gem',
        'ars_nouveau:source_gem',
        'ars_nouveau:source_gem',
        'ars_nouveau:source_gem'
    ])
    event.replaceInput({id: 'ars_nouveau:wilden_summon_alt'}, 'minecraft:emerald_block', 'bloodmagic:infusedslate')
})