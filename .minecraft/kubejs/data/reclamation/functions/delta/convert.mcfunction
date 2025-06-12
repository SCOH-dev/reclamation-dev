execute if predicate reclamation:nether_convertible run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 10
execute if predicate reclamation:nether_convertible run setblock ~ ~ ~ minecraft:warped_nylium
execute positioned ~ ~ ~ if predicate reclamation:random7 run place feature minecraft:warped_forest_vegetation
execute positioned ~ ~ ~ if predicate reclamation:random1 run place feature minecraft:warped_fungus
fillbiome ~ ~ ~ ~ ~ ~ minecraft:warped_forest