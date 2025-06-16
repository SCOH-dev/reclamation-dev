ServerEvents.recipes(event => {
    event.remove({ id: 'ae2:network/blocks/crystal_processing_charger'})
    event.shaped('ae2:charger', [
            'WCW',
            'M  ',
            'WCW'
        ], {
            W: 'minecraft:iron_ingot',
            C: 'minecraft:copper_ingot',
            M: 'mekanism:steel_casing'
        }
    )

    event.custom({
        "type": "ae2:charger",
        "ingredient": {
            "item": "mekanism:enriched_diamond"
        },
        "result": {
            "item": "ae2:certus_quartz_crystal"
        }
    })
})