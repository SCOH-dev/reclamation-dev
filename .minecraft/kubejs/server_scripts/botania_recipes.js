ServerEvents.recipes(event => {

    event.remove({ id: 'botania:mana_spreader'})
    event.shaped('botania:mana_spreader', [
            'WWW',
            'GP ',
            'WWW'
        ], {
            W: '#botania:livingwood_logs',
            P: '#botania:petals',
            G: 'minecraft:gold_ingot'
        }
    )
})