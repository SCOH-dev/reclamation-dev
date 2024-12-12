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
})