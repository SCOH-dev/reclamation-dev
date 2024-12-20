LootJS.modifiers(event => {
    event.addBlockLootModifier('minecraft:grass').removeLoot('enchanted:garlic')

    event.addBlockLootModifier('kubejs:dead_log')
        .randomChance(0.2)
        .addLoot('minecraft:charcoal')
})