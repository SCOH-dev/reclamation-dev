ServerEvents.tags('item', event => {
    event.add('forge:vegetables/garlic', 'enchanted:garlic')
    event.add('forge:crops/garlic', 'enchanted:garlic')
    event.add('forge:garlic', 'enchanted:garlic')

    event.remove('forge:plates/copper', 'create:copper_sheet')
    event.remove('forge:plates/iron', 'create:iron_sheet')
})

ServerEvents.tags('fluid', event => {
    event.add('theurgy:solvent', 'kubejs:hemoglobic_fluid')
})