ServerEvents.recipes(event => {
    event.remove({id: 'embers:item_extractor'})
    event.shaped('embers:item_extractor', [
            ' G ',
            'IPI',
            ' G '
        ], {
            G: 'naturesaura:gold_powder',
            I: 'embers:item_pipe',
            P: 'embers:caminite_plate'
        }
    )

    event.remove({id: 'embers:fluid_extractor'})
    event.shaped('embers:fluid_extractor', [
            ' G ',
            'IPI',
            ' G '
        ], {
            G: 'naturesaura:gold_powder',
            I: 'embers:fluid_pipe',
            P: 'embers:caminite_plate'
        }
    )

    //easier fluid tank
    event.remove({ id: 'embers:fluid_vessel'})
    event.shaped('embers:fluid_vessel', [
        'B B',
        'CAC',
        'BCB'
    ], {
        B: 'embers:caminite_brick',
        C: 'minecraft:copper_ingot',
        A: 'theurgy:sal_ammoniac_tank'
    })

    //archaic brick
    event.custom({
        "type": "embers:alchemy",
        "aspects": [
            {
                "tag": "embers:aspectus/iron"
            },
            {
                "tag": "embers:aspectus/copper"
            }
        ],
        "inputs": [
            {
                "item": "naturesaura:infused_iron"
            },
            {
                "item": "naturesaura:tainted_gold"
            }
        ],
        "output": {
            "count": 2,
            "item": "embers:archaic_brick"
        },
        "tablet": {
            "item": "minecraft:brick"
        }
    })
})