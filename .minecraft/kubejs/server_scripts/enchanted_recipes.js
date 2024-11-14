ServerEvents.recipes(event => {
    
    //anointing paste needs results, not seeds
    event.remove({ id: 'enchanted:anointing_paste'})
    event.shapeless('enchanted:anointing_paste', [
        'enchanted:water_artichoke',
        'enchanted:belladonna_flower',
        'enchanted:mandrake_root',
        'enchanted:icy_needle'
    ])

    event.custom({
        "type": "enchanted:witch_cauldron",
        "cookingColor": [
            26,
            71,
            35
        ],
        "finalColor": [
            62,
            128,
            78
        ],
        "ingredients": [
            {
                "item": "enchanted:belladonna_flower"
            },
            {
                "item": "enchanted:water_artichoke"
            },
            {
                "item": "minecraft:bone_meal"
            }
        ],
        "power": 0,
        "result": {
            "count": 2,
            "item": "enchanted:mutandis"
        }
    })
})