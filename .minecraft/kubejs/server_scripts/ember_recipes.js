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
})