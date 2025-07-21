ServerEvents.recipes(event => {
    event.remove({id: "embers:copper_ingot_to_nugget"})
    
    //dead wood recipes
    event.shapeless('4x kubejs:scrap_wood', [
        'kubejs:dead_log'
    ])
    event.shaped('kubejs:flimsy_planks', [
        'AA',
        'AA'
    ], {
        A: 'kubejs:scrap_wood'
    })
    event.shaped('minecraft:composter', [
        'A A',
        'ABA',
        'AAA'
    ], {
        A: 'kubejs:flimsy_planks',
        B: 'embers:caminite_blend'
    })

    //ladders
    event.shaped('4x minecraft:ladder', [
        'A A',
        'AAA',
        'A A'
    ], {
        A: '#forge:rods/wooden'
    })

    //chests
    event.shaped('minecraft:chest', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: '#enchanted:planks'
    })

    //microscope
    event.remove('complicated_bees:microscope')
    event.shaped('complicated_bees:microscope', [
        ' EI',
        ' PI',
        'AAA'
    ], {
        A: 'minecraft:iron_block',
        I: 'minecraft:iron_ingot',
        P: 'minecraft:glass_pane',
        E: 'naturesaura:eye'
    })


    //flimsy door
     event.shaped('reclamation_util:flimsy_door', [
         'AA ',
         'AC ',
         'AA '
     ], {
         A: 'kubejs:flimsy_planks',
         C: 'minecraft:copper_ingot'
     })

     //poison frame
      event.shapeless('reclamation_util:poison_frame', [
          'complicated_bees:frame',
          'minecraft:poisonous_potato'
      ])

    //spice rack collision
    event.remove({id: "cookingforblockheads:spice_rack"})
    event.shaped('cookingforblockheads:spice_rack', [
        'ACA'
    ], {
        A: '#minecraft:wooden_slabs',
        C: 'embers:caminite_blend'
    })

    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "kubejs:dead_log"
            }
        ],
        "result": [
            {
                "item": "kubejs:scrap_wood",
                "count": 8
            },
            {
                "chance": 0.5,
                "item": "kubejs:scrap_wood",
                "count": 2
            },
            {
                "chance": 0.15,
                "item": "minecraft:charcoal",
                "count": 1
            }
        ],
        "tool": {
            "type": "farmersdelight:tool_action",
            "action": "axe_dig"
        }
    })

    //remove early game dirt -> coarse dirt -> dirt duplication
    event.remove({ id: 'minecraft:coarse_dirt'})
    event.shapeless('minecraft:coarse_dirt', [
        'minecraft:dirt',
        'minecraft:gravel'
    ])

    //cut copper into ingots
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "minecraft:cut_copper"
            }
        ],
        "result": [
            {
                "item": "minecraft:copper_ingot",
                "count": 6
            },
            {
                "chance": 0.75,
                "item": "minecraft:copper_ingot",
                "count": 2
            },
            {
                "chance": 0.5,
                "item": "minecraft:copper_ingot"
            }
        ],
        "tool": {
            "type": "farmersdelight:tool_action",
            "action": "pickaxe_dig"
        }
    })

    //copper bucket
    event.shaped('minecraft:bucket', [
        'A A',
        'DAD',
        '   '
    ], {
        A: 'minecraft:copper_ingot',
        D: 'embers:caminite_blend'
    })

    //pasture seeds through ritual
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:hay_block"
            },
            {
                "tag": "forge:seeds"
            },
            {
                "item": "enchanted:hint_of_rebirth"
            },
            {
                "item": "enchanted:breath_of_the_goddess"
            }
        ],
        "sapling": {
            "item": "minecraft:birch_sapling"
        },
        "output": {
            "item": "botania:grass_seeds"
        },
        "time": 250
    })

    //gold nether ore from bricks
    event.custom({
        "type": "botania:pure_daisy",
        "input": {
            "type": "block",
            "block": "naturesaura:gold_nether_brick"
        },
        "output": {
            "name": "minecraft:nether_gold_ore"
        }
    })

    //ritual book
    event.custom({
        "type": "patchouli:shapeless_book_recipe",
        "ingredients": [
            {
                "item": "minecraft:book"
            },
            {
                "item": "kubejs:dried_earth"
            }
        ],
        "book": "patchouli:custom_rituals"
    })

    //chest from planks... quark >_>
    event.shaped('minecraft:chest', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'kubejs:flimsy_planks'
    })

    //feather-flesh amalgam
    event.custom({
        "type": "naturesaura:tree_ritual",
        "ingredients": [
            {
                "item": "minecraft:feather"
            },
            {
                "item": "minecraft:feather"
            },
            {
                "item": "minecraft:feather"
            },
            {
                "item": "minecraft:feather"
            },
            {
                "item": "minecraft:rotten_flesh"
            },
            {
                "item": "minecraft:rotten_flesh"
            },
            {
                "item": "minecraft:rotten_flesh"
            },
            {
                "item": "minecraft:rotten_flesh"
            },
        ],
        "sapling": {
            "item": "minecraft:oak_sapling"
        },
        "output": {
            "item": "kubejs:feather_flesh_amalgam"
        },
        "time": 250
    })

    //blooded amalgam
    event.custom({
        "type": "theurgy:liquefaction",
        "ingredient": {
            "item": "kubejs:feather_flesh_amalgam"
        },
        "liquefaction_time": 100,
        "result": {
            "count": 1,
            "item": "kubejs:blooded_amalgam"
        },
        "solvent": {
            "fluid": "kubejs:hemoglobic_fluid"
        },
        "solvent_amount": 1000
    })

    //mana amalgam
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "tag": "botania:mana_dusts"
            },
            {
                "item": "botania:grass_seeds"
            },
            {
                "item": "kubejs:blooded_amalgam"
            }
        ],
        "mana": 4000,
        "output": {
            "item": "kubejs:mana_amalgam"
        }
    })

    //chicken spawn egg
    event.custom({
        "type": "naturesaura:offering",
        "input": {
            "item": "kubejs:infused_amalgam"
        },
        "start_item": {
            "item": "naturesaura:calling_spirit"
        },
        "output": {
            "item": "minecraft:chicken_spawn_egg",
            "Count": 2
        }
    })

    //silver sulfur
    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "tag": "botania:mana_dusts"
            },
            {
                "item": "embers:dawnstone_ingot"
            },
            {
                "item": "embers:ember_crystal"
            },
            {
                "item": "enchanted:whiff_of_magic"
            },
            {
                "item": "enchanted:gypsum"
            }
        ],
        "mana": 4000,
        "output": {
            "item": "theurgy:alchemical_sulfur_silver",
            "nbt": {
                "theurgy:sulfur.source.id": "#forge:ingots/silver"
            }
        }
    })

    event.shapeless(
        Item.of('agricraft:seed', '{genes:{fertility:{dom:1,rec:1},gain:{dom:1,rec:1},growth:{dom:1,rec:1},mutativity:{dom:1,rec:1},resistance:{dom:10,rec:10},species:{dom:"minecraft:dandelion",rec:"minecraft:dandelion"},strength:{dom:1,rec:1}}}'),
        [
            'minecraft:dandelion',
            'minecraft:wheat_seeds'
        ]
    )
    event.shapeless(
        Item.of('agricraft:seed', '{genes:{fertility:{dom:1,rec:1},gain:{dom:1,rec:1},growth:{dom:1,rec:1},mutativity:{dom:1,rec:1},resistance:{dom:10,rec:10},species:{dom:"minecraft:poppy",rec:"minecraft:poppy"},strength:{dom:1,rec:1}}}'),
        [
            'minecraft:poppy',
            'minecraft:wheat_seeds'
        ]
    )

    //bee stuff
    event.remove({id: 'complicated_bees:apiary'})
    event.shaped('complicated_bees:apiary', [
        'PPP',
        'B B',
        'PPP'
    ], {
        P: '#minecraft:planks',
        B: 'embers:caminite_brick'
    })

    //combs
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "complicated_bees:comb",
                "nbt": {
                    "comb_type": "reclamation:barren"
                }
            }
        ],
        "result": [
            {
                "item": "complicated_bees:beeswax",
                "count": 1,
                "chance": 0.5
            },
            {
                "chance": 0.1,
                "item": "complicated_bees:honey_droplet",
                "count": 1
            }
        ],
        "tool": {
            "tag": "forge:tools/knives"
        }
    })
    event.custom({
        "type": "complicated_bees:centrifuge",
        "input": {
            "item": "complicated_bees:comb",
            "nbt": {
                "comb_type": "reclamation:barren"
            }
        },
        "outputs": [
            {
                "item": "complicated_bees:beeswax",
                "chance": 0.7
            },
            {
                "item": "complicated_bees:honey_droplet",
                "chance": 0.2
            }
        ]
    })
    event.custom({
        "type": "complicated_bees:centrifuge",
        "input": {
            "item": "complicated_bees:comb",
            "nbt": {
                "comb_type": "reclamation:magical"
            }
        },
        "outputs": [
            {
                "item": "complicated_bees:beeswax",
                "chance": 0.4
            },
            {
                "item": "complicated_bees:honey_droplet",
                "chance": 0.4
            },
            {
                "item": "mysticalagriculture:inferium_essence",
                "chance": 0.1
            }
        ]
    })
    event.custom({
        "type": "complicated_bees:centrifuge",
        "input": {
            "item": "complicated_bees:comb",
            "nbt": {
                "comb_type": "reclamation:lead"
            }
        },
        "outputs": [
            {
                "item": "complicated_bees:beeswax",
                "chance": 0.5
            },
            {
                "item": "complicated_bees:honey_droplet",
                "chance": 0.3
            },
            {
                "item": "embers:raw_lead",
                "chance": 0.25
            }
        ]
    })
    event.custom({
        "type": "complicated_bees:centrifuge",
        "input": {
            "item": "complicated_bees:comb",
            "nbt": {
                "comb_type": "reclamation:silver"
            }
        },
        "outputs": [
            {
                "item": "complicated_bees:beeswax",
                "chance": 0.5
            },
            {
                "item": "complicated_bees:honey_droplet",
                "chance": 0.3
            },
            {
                "item": "embers:raw_silver",
                "chance": 0.25
            }
        ]
    })
    event.custom({
        "type": "complicated_bees:centrifuge",
        "input": {
            "item": "complicated_bees:comb",
            "nbt": {
                "comb_type": "reclamation:osmium"
            }
        },
        "outputs": [
            {
                "item": "complicated_bees:beeswax",
                "chance": 0.5
            },
            {
                "item": "complicated_bees:honey_droplet",
                "chance": 0.3
            },
            {
                "item": "mekanism:raw_osmium",
                "chance": 0.25
            }
        ]
    })
    event.custom({
        "type": "complicated_bees:centrifuge",
        "input": {
            "item": "complicated_bees:comb",
            "nbt": {
                "comb_type": "reclamation:certus_quartz"
            }
        },
        "outputs": [
            {
                "item": "complicated_bees:beeswax",
                "chance": 0.5
            },
            {
                "item": "complicated_bees:honey_droplet",
                "chance": 0.3
            },
            {
                "item": "ae2:certus_quartz_crystal",
                "chance": 0.25
            }
        ]
    })
    event.custom({
        "type": "complicated_bees:centrifuge",
        "input": {
            "item": "complicated_bees:comb",
            "nbt": {
                "comb_type": "reclamation:tin"
            }
        },
        "outputs": [
            {
                "item": "complicated_bees:beeswax",
                "chance": 0.5
            },
            {
                "item": "complicated_bees:honey_droplet",
                "chance": 0.3
            },
            {
                "item": "mekanism:raw_tin",
                "chance": 0.25
            }
        ]
    })
    event.custom({
        "type": "complicated_bees:centrifuge",
        "input": {
            "item": "complicated_bees:comb",
            "nbt": {
                "comb_type": "reclamation:uranium"
            }
        },
        "outputs": [
            {
                "item": "complicated_bees:beeswax",
                "chance": 0.5
            },
            {
                "item": "complicated_bees:honey_droplet",
                "chance": 0.3
            },
            {
                "item": "mekanism:raw_uranium",
                "chance": 0.25
            }
        ]
    })
    event.custom({
        "type": "complicated_bees:centrifuge",
        "input": {
            "item": "complicated_bees:comb",
            "nbt": {
                "comb_type": "reclamation:zinc"
            }
        },
        "outputs": [
            {
                "item": "complicated_bees:beeswax",
                "chance": 0.5
            },
            {
                "item": "complicated_bees:honey_droplet",
                "chance": 0.3
            },
            {
                "item": "create:raw_zinc",
                "chance": 0.25
            }
        ]
    })

    //biome bottle
    event.shaped('4x reclamation_util:empty_biome_bottle', [
        ' A ',
        'G G',
        ' G '
    ], {
        A: 'enchanted:attuned_stone_charged',
        G: 'minecraft:glass'
    })

    //prosperity shard
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "tag": "forge:nuggets/copper"
            }
        ],
        "result": [
            {
                "item": "mysticalagriculture:prosperity_shard",
                "chance": 0.15,
                "count": 1
            }
        ],
        "tool": {
            "type": "farmersdelight:tool_action",
            "action": "pickaxe_dig"
        }
    })
    event.custom({
        "type": "mekanism:enriching",
        "input": {
            "ingredient": {
                "tag": "forge:nuggets/copper"
            }
        },
        "output": {
            "item": "mysticalagriculture:prosperity_shard",
        }
    })

    //attuned biome bottle
    event.shaped('reclamation_util:attuned_biome_bottle', [
        ' A ',
        'GBG',
        ' S '
    ], {
        A: 'enchanted:attuned_stone_charged',
        B: 'reclamation_util:empty_biome_bottle',
        S: 'bloodmagic:ingot_hellforged',
        G: 'botania:life_essence'
    })

    //sculk awakener
    event.shaped('reclamation_util:sculk_awakener', [
        'TBT',
        'VEV',
        'TBT'
    ], {
        E: 'minecraft:ender_eye',
        V: 'minecraft:sculk_vein',
        B: 'minecraft:bone',
        T: 'mysticalagriculture:tertium_essence'
    })

    //sculk catalyst
    event.shaped('minecraft:sculk_catalyst', [
        'GCG',
        'DSD',
        'BBB'
    ], {
        B: 'minecraft:bone_block',
        C: 'minecraft:crying_obsidian',
        D: 'bloodmagic:defaultcrystal',
        S: 'minecraft:nether_star',
        G: 'minecraft:glowstone'
    })

    //sniffer egg
    event.custom({
        "type": "mysticalagriculture:infusion",
        "ingredients": [
            {
                "item": "minecraft:torchflower"
            },
            {
                "item": "ars_nouveau:wixie_shards"
            },
            {
                "item": "minecraft:torchflower"
            },
            {
                "item": "ars_nouveau:drygmy_shard"
            },
            {
                "item": "minecraft:torchflower"
            },
            {
                "item": "ars_nouveau:starbuncle_shards"
            },
            {
                "item": "minecraft:torchflower"
            },
            {
                "item": "ars_nouveau:whirlisprig_shards"
            }
        ],
        "input": {
            "item": "minecraft:egg"
        },
        "result": {
            "item": "minecraft:sniffer_egg"
        }
    })

    //frame remover
    event.shaped('reclamation_util:frame_remover', [
        ' Ss',
        ' sS',
        'd  '
    ], {
        S: 'minecraft:stone',
        s: 'minecraft:stick',
        d: 'kubejs:dried_earth'
    })

    //unlock sheet from squids
    event.replaceInput({id: 'xercamusic:music_sheet'},
    'minecraft:ink_sac',
    'minecraft:charcoal')

    //easier combees recipes
    event.replaceInput({id: 'complicated_bees:meter'},
    'minecraft:redstone',
    'minecraft:red_dye')
    event.replaceInput({id: 'complicated_bees:meter'},
    'minecraft:redstone_torch',
    'naturesaura:infused_iron')
    event.replaceInput({id: 'complicated_bees:meter'},
    'minecraft:iron_ingot',
    'minecraft:copper_ingot')
    event.replaceInput({id: 'complicated_bees:analyzer'},
    'minecraft:diamond',
    'naturesaura:infused_iron')
    event.replaceInput({id: 'complicated_bees:analyzer'},
    'minecraft:redstone',
    'embers:caminite_brick')
    event.replaceInput({id: 'complicated_bees:bee_sorter'},
    'minecraft:diamond',
    'minecraft:redstone')

    event.remove({id: 'minecraft:cut_copper_from_copper_block_stonecutting'})
    event.custom({
        "type": "minecraft:stonecutting",
        "count": 1,
        "ingredient": {
            "item": "minecraft:copper_block"
        },
        "result": "minecraft:cut_copper"
    })
    //copycats from andesite
    event.replaceInput({mod: 'copycats'},
    'create:zinc_ingot',
    'create:andesite_alloy')

    //cooking for blockheads book easier
    event.replaceInput({id: 'cookingforblockheads:crafting_book'},
    'minecraft:diamond',
    'minecraft:beetroot')

    //creative blaze cake
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "create:blaze_cake"
        },
        "loops": 100,
        "results": [
            {
                "item": "create:creative_blaze_cake"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "create:blaze_cake"
                    },
                    {
                        "item": "complicated_bees:exp_drop"
                    }
                ],
                "results": [
                    {
                        "item": "create:blaze_cake"
                    }
                ]
            },
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "create:blaze_cake"
                    },
                    {
                        "amount": 500,
                        "fluid": "embers:molten_dawnstone",
                        "nbt": {}
                    }
                ],
                "results": [
                    {
                        "item": "create:blaze_cake"
                    }
                ]
            },
            {
                "type": "create:pressing",
                "ingredients": [
                    {
                        "item": "create:blaze_cake"
                    }
                ],
                "results": [
                    {
                        "item": "create:blaze_cake"
                    }
                ]
            }
        ],
        "transitionalItem": {
            "item": "create:blaze_cake"
        }
    })

    event.shapeless('mekanism:creative_chemical_tank', [
        'mekanism:creative_chemical_tank'
    ])

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "C": {
                "item": "create:creative_blaze_cake"
            },
            "P": {
                "item": "bloodmagic:dungeon_metal"
            },
            "S": {
                "item": "mekanism:pellet_antimatter"
            },
            "W": {
                "item": "create:large_cogwheel"
            }
        },
        "pattern": [
            " WWWWW ",
            "WWCCCWW",
            "WCCPCCW",
            "WCPSPCW",
            "WCPSPCW",
            "WCPSPCW",
            "WCCPCCW",
            "WWCCCWW",
            " WWWWW "
        ],
        "result": {
            "count": 1,
            "item": "create:creative_motor"
        }
    })

    event.custom({
        "type": "embers:alchemy",
        "aspects": [
            {
                "tag": "embers:aspectus/lead"
            },
            {
                "tag": "embers:aspectus/dawnstone"
            },
            {
                "tag": "embers:aspectus/copper"
            },
            {
                "tag": "embers:aspectus/iron"
            },
            {
                "tag": "embers:aspectus/silver"
            }
        ],
        "inputs": [
            {
                "item": "embers:shifting_scales"
            },
            {
                "item": "embers:winding_gears"
            },
            {
                "item": "embers:nonbeliever_amulet"
            },
            {
                "item": "embers:explosion_charm"
            },
            {
                "item": "embers:inflictor_gem"
            },
            {
                "item": "embers:eldritch_insignia"
            }
        ],
        "output": {
            "item": "embers:creative_ember_source"
        },
        "tablet": {
            "item": "create:creative_blaze_cake"
        }
    })

    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": false,
        "output": {
            "item": "ars_nouveau:creative_source_jar"
        },
        "pedestalItems": [
            {
                "item": "ars_elemental:mark_of_mastery"
            },
            {
                "item": "create:creative_blaze_cake"
            },
            {
                "item": "ars_nouveau:bookwyrm_charm"
            },
            {
                "item": "ars_nouveau:starbuncle_charm"
            },
            {
                "item": "ars_nouveau:whirlisprig_charm"
            },
            {
                "item": "ars_nouveau:drygmy_charm"
            },
            {
                "item": "ars_nouveau:wixie_charm"
            },
            {
                "item": "ars_nouveau:amethyst_golem_charm"
            },
            {
                "item": "ars_elemental:siren_charm"
            }
        ],
        "reagent": [
            {
                "item": "embers:creative_ember_source"
            }
        ],
        "sourceCost": 10000
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "S": {
                "item": "create:fluid_pipe"
            },
            "M": {
                "item": "create:creative_motor"
            },
            "T": {
                "item": "create:copper_casing"
            },
            "A": {
                "item": "mekanism:pellet_antimatter"
            },
            "C": {
                "item": "create:creative_blaze_cake"
            },
            "P": {
                "item": "create:hose_pulley"
            }
        },
        "pattern": [
            "TTTTTTT ",
            "TCCCMPT ",
            "TCCCTST ",
            "TTTTTST ",
            "   TTSTT",
            "   TAAAT",
            "   TAAAT",
            "   TAAAT",
            "   TTTTT"
        ],
        "result": {
            "count": 1,
            "item": "create:creative_fluid_tank"
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "S": {
                "item": "mekanism:sps_casing"
            },
            "F": {
                "item": "create:creative_fluid_tank"
            },
            "D": {
                "item": "mekanism:qio_drive_supermassive"
            },
            "F": {
                "item": "create:creative_fluid_tank"
            },
            "U": {
                "item": "mekanism:ultimate_chemical_tank"
            },
            "R": {
                "item": "mekanismgenerators:fusion_reactor_frame"
            }
        },
        "pattern": [
            "  SSS  ",
            " SDDDS ",
            "SRUUURS",
            "SRUFURS",
            "SRUFURS",
            "SRUFURS",
            "SRUUURS",
            "SRRRRRS",
            " SSSSS "
        ],
        "result": {
            "count": 1,
            "item": "mekanism:creative_chemical_tank"
        }
    })

    event.custom({
        "type": "botania:runic_altar",
        "ingredients": [
            {
                "item": "botania:laputa_shard"
            },
            {
                "item": "botania:gaia_ingot"
            },
            {
                "item": "ars_nouveau:creative_source_jar"
            },
            {
                "item": "ars_nouveau:creative_source_jar"
            },
            {
                "item": "botania:rune_mana"
            },
            {
                "item": "botania:manasteel_ingot"
            },
            {
                "item": "botania:mana_pearl"
            },
            {
                "item": "botania:mana_diamond"
            },
            {
                "item": "botania:mana_string"
            },
            {
                "item": "botania:manaweave_cloth"
            },
            {
                "item": "botania:mana_powder"
            },
            {
                "item": "botania:quartz_mana"
            },
            {
                "item": "botania:mana_glass"
            },
            {
                "item": "botania:mana_pylon"
            }
        ],
        "mana": 10000000,
        "output": {
            "item": "botania:creative_pool"
        }
    })

    event.shaped('storagedrawers:creative_storage_upgrade', [
        'BAE',
        'CAF',
        'DAG'
    ], {
        A: 'advanced_ae:quantum_storage_256',
        B: 'botania:creative_pool',
        C: 'ars_nouveau:creative_source_jar',
        D: 'embers:creative_ember_source',
        E: 'mekanism:creative_chemical_tank',
        F: 'create:creative_fluid_tank',
        G: 'create:creative_motor'
    })

    event.custom({
        "type": "advanced_ae:reaction",
        "energy": 31415927,
        "fluid": {
            "fluidStack": {
                "Amount": 16000,
                "FluidName": "embers:dwarven_gas"
            }
        },
        "input_items": [
            {
                "amount": 16,
                "ingredient": {
                    "item": "minecraft:echo_shard"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "minecraft:scute"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:totem_of_undying"
                }
            },
            {
                "amount": 64,
                "ingredient": {
                    "item": "ae2:dense_energy_cell"
                }
            },
            {
                "amount": 16,
                "ingredient": {
                    "item": "advanced_ae:quantum_alloy_plate"
                }
            },
            {
                "amount": 2,
                "ingredient": {
                    "item": "botania:creative_pool"
                }
            }
        ],
        "output": {
            "#": 1,
            "#c": "ae2:i",
            "id": "ae2:creative_energy_cell"
        }
    })

    event.custom({
        "type": "create:mechanical_crafting",
        "acceptMirrored": false,
        "key": {
            "C": {
                "item": "storagedrawers:creative_storage_upgrade"
            },
            "A": {
                "item": "mekanism:qio_drive_supermassive"
            },
            "S": {
                "item": "mysticalagriculture:awakened_supremium_gemstone_block"
            },
            "R": {
                "item": "complicated_bees:royal_jelly"
            },
            "L": {
                "item": "complicated_bees:pollen"
            },
            "W": {
                "item": "mysticalagriculture:wither_skeleton_essence"
            },
            "P": {
                "item": "mekanism:pellet_antimatter"
            }
        },
        "pattern": [
            "WLLRRRLLW",
            "LPPPPPPPL",
            "LPSSSSSPL",
            "RPSSASSPR",
            "RPSACASPR",
            "RPSSASSPR",
            "LPSSSSSPL",
            "LPPPPPPPL",
            "WLLRRRLLW"
        ],
        "result": {
            "count": 2,
            "item": "storagedrawers:creative_vending_upgrade"
        }
    })

    event.shapeless('ae2:creative_item_cell', [
        'ae2:item_cell_housing',
        'storagedrawers:creative_vending_upgrade'
    ])

    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
                "item": "minecraft:wheat",
            }
        ],
        "result": [
            {
                "item": "minecraft:wheat_seeds",
                "count": 1,
                "chance": 0.5
            }
        ],
        "tool": {
            "tag": "forge:tools/knives"
        }
    })
})