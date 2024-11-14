ServerEvents.recipes(event => {
    event.remove({ id: 'create:crafting/kinetics/fluid_tank'})
    event.shaped('create:fluid_tank', [
        ' C ',
        ' B ',
        ' C '
    ], {
        B: '#forge:chests',
        C: 'minecraft:copper_ingot'
    })
})