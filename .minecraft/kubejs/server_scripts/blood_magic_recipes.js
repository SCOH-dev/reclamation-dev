ServerEvents.recipes(event => {
    event.shaped('4x bloodmagic:soulsnare', [
        'S S',
        ' F ',
        'S S'
    ], {
        F: 'naturesaura:token_sorrow',
        S: 'minecraft:string'
    })

    event.remove({id: 'bloodmagic:blood_altar'})
    event.shaped('bloodmagic:altar', [
        'SWS',
        'SFS',
        'TTT'
    ], {
        T: 'naturesaura:tainted_gold',
        S: 'minecraft:blackstone',
        F: 'minecraft:furnace',
        W: 'bloodmagic:basemonstersoul'
    })

    event.remove({id: 'bloodmagic:altar/weakbloodorb'})
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 2000,
        "consumptionRate": 5,
        "drainRate": 1,
        "input": {
            "item": "botania:mana_pearl"
        },
        "output": {
            "item": "bloodmagic:weakbloodorb"
        },
        "upgradeLevel": 0
    })

    event.remove({id: 'bloodmagic:soul_forge'})
    event.shaped('bloodmagic:soulforge', [
        'M M',
        'SBS',
        'SIS'
    ], {
        B: 'bloodmagic:blankslate',
        S: 'minecraft:blackstone',
        M: 'botania:manasteel_ingot',
        I: 'naturesaura:infused_stone'
    })
})