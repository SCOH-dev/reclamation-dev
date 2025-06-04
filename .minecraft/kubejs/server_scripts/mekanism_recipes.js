ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:rotary",
        "fluidInput": {
            "amount": 1,
            "fluid": "bloodmagic:life_essence_fluid"
        },
        "fluidOutput": {
            "amount": 1,
            "fluid": "bloodmagic:life_essence_fluid"
        },
        "gasInput": {
            "amount": 1,
            "gas": "reclamation:aerated_essence"
        },
        "gasOutput": {
            "amount": 1,
            "gas": "reclamation:aerated_essence"
        }
    })

    event.custom({
        "type": "mekanism:chemical_infusing",
        "leftInput": {
            "amount": 2,
            "gas": "reclamation:aerated_essence"
        },
        "output": {
            "amount": 1,
            "gas": "reclamation:essence_boosted_ethylene"
        },
        "rightInput": {
            "amount": 1,
            "gas": "mekanism:ethene"
        }
    })
})