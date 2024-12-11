ServerEvents.recipes(event => {
    
    //anointing paste needs results, not seeds
    event.remove({id: 'enchanted:anointing_paste'})
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

    //cauldron for brilliant fiber
    event.remove({id: "naturesaura:gold_fiber"})
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
                "item": "enchanted:odour_of_purity"
            },
            {
                "item": "minecraft:string"
            },
            {
                "item": "enchanted:wolfsbane_flower"
            },
            {
                "item": "enchanted:whiff_of_magic"
            }
        ],
        "power": 0,
        "result": {
            "count": 2,
            "item": "naturesaura:gold_fiber"
        }
    })

    event.remove({id: "enchanted:altar"})
    event.custom({
         "type": "minecraft:crafting_shaped",
         "category": "building",
         "key": {
             "b": {
                 "item": "enchanted:breath_of_the_goddess"
             },
             "e": {
                 "item": "enchanted:exhale_of_the_horned_one"
             },
             "r": {
                 "item": "enchanted:rowan_log"
             },
             "s": {
                 "item": "minecraft:stone_bricks"
             },
             "w": {
                 "item": "minecraft:gold_nugget"
             }
         },
         "pattern": [
             "bwe",
             "srs",
             "srs"
         ],
         "result": {
             "item": "enchanted:altar"
         },
         "show_notification": true
    })

    event.remove({id: "enchanted:attuned_stone"})
    event.custom({"type": "enchanted:witch_cauldron",
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
                 "item": "botania:mana_pearl"
             },
             {
                 "item": "enchanted:whiff_of_magic"
             },
             {
                 "item": "naturesaura:gold_leaf"
             }
         ],
         "power": 500,
         "result": {
             "item": "enchanted:attuned_stone"
         }
    })
})