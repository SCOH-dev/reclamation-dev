ServerEvents.recipes(event => {

    event.remove({ id: 'theurgy:crafting/shaped/sal_ammoniac_tank'})
    event.shaped('theurgy:sal_ammoniac_tank', [
        'SCS',
        'SCS',
        'RCR'
    ], {
        S: '#forge:stone',
        C: 'minecraft:copper_ingot',
        R: '#forge:rods/wooden'
    })

    event.remove({ id: 'theurgy:crafting/shaped/sal_ammoniac_accumulator'})
    event.shaped('theurgy:sal_ammoniac_accumulator', [
        'SSS',
        'CCC',
        'R R'
    ], {
        S: '#forge:stone',
        C: 'minecraft:copper_ingot',
        R: '#forge:rods/wooden'
    })
    
    event.remove({ id: 'theurgy:crafting/shaped/distiller'})
    event.shaped('theurgy:distiller', [
        ' C ',
        'CBC',
        'SSS'
    ], {
        S: '#forge:stone',
        C: 'minecraft:copper_ingot',
        B: 'minecraft:copper_block'
    })

    event.remove({ id: 'theurgy:crafting/shaped/calcination_oven'})
    event.shaped('theurgy:calcination_oven', [
        ' S ',
        'CBC',
        ' S '
    ], {
        S: '#forge:stone',
        C: 'minecraft:copper_ingot',
        B: 'minecraft:copper_block'
    })

    event.remove({ id: 'theurgy:crafting/shaped/liquefaction_cauldron'})
    event.shaped('theurgy:liquefaction_cauldron', [
        'CCC',
        'CBC',
        'SSS'
    ], {
        S: '#forge:stone',
        C: 'minecraft:copper_ingot',
        B: 'minecraft:bucket'
    })

    event.remove({ id: 'theurgy:crafting/shaped/incubator'})
    event.shaped('theurgy:incubator', [
        'PSP',
        'CCC',
        'SCS'
    ], {
        S: '#forge:stone',
        C: 'minecraft:copper_ingot',
        P: '#minecraft:planks'
    })

    //dried earth -> dirt sulfur
    event.custom({
        "type": "theurgy:liquefaction",
        "ingredient": {
            "item": "kubejs:dried_earth"
        },
        "liquefaction_time": 100,
        "result": {
            "count": 1,
            "item": "kubejs:sulfur_dirt",
            "nbt": {
                "theurgy:sulfur.source.id": "kubejs:dried_earth"
            }
        },
        "solvent": {
            "fluid": "theurgy:sal_ammoniac"
        },
        "solvent_amount": 10
    })

    //dirt sulfur incubation
    event.custom({
        "type": "theurgy:incubation",
        "incubation_time": 100,
        "mercury": {
            "item": "theurgy:mercury_shard"
        },
        "result": {
            "count": 1,
            "tag": "minecraft:dirt"
        },
        "salt": {
            "item": "theurgy:alchemical_salt_strata"
        },
        "sulfur": {
            "item": "kubejs:sulfur_dirt"
        }
    })

    //iron from zombie flesh
    event.custom({
        "type": "theurgy:accumulation",
        "accumulationTime": 100,
        "evaporant": {
            "tag": "minecraft:water"
        },
        "evaporantAmount": 500,
        "result": {
            "Amount": 100,
            "FluidName": "kubejs:hemoglobic_fluid"
        },
        "solute": {
            "item": "enchanted:mandrake_root",
            "count": 1
        }
    })

    event.custom({
        "type": "theurgy:liquefaction",
        "ingredient": {
            "item": "minecraft:copper_ingot"
        },
        "liquefaction_time": 100,
        "result": {
            "count": 1,
            "item": "theurgy:alchemical_sulfur_iron",
            "nbt": {
                "theurgy:sulfur.source.id": "#forge:ingots/iron"
            }
        },
        "solvent": {
            "fluid": "kubejs:hemoglobic_fluid"
        },
        "solvent_amount": 100
    })
})