execute if predicate reclamation:nether_convertible run particle farmersdelight:steam ~ ~ ~ 0.5 0.5 0.5 0 10
execute if predicate reclamation:nether_convertible run setblock ~ ~ ~ minecraft:warped_nylium
fillbiome ~ ~ ~ ~ ~ ~ minecraft:warped_forest
execute positioned ~ ~ ~ if predicate reclamation:random10 run function reclamation:warped/place_vegetation
execute positioned ~ ~ ~ if predicate reclamation:random2 run function reclamation:warped/place_fungus
