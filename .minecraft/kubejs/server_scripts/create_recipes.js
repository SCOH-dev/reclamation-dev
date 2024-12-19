ServerEvents.recipes(event => {
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
})