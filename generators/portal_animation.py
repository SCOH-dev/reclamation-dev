import math

height = 6
steps_1 = 50
steps_2 = 50
with open(f'output/functions/out.mcfunction', 'w') as out:
    for i in range(steps_1): #up five blocks
        step = []
        d1 = round(i * (height / steps_1), 2)
        rot = (math.pi) / steps_1 * i
        dx = round(math.cos(rot + math.pi*0.25) * 4.2426, 3)
        dz = round(math.sin(rot + math.pi*0.25) * 4.2426, 3)
        # if i % 3 == 0:
        #     step.append(f"playsound ars_nouveau:gaia_family block @a[distance=..32] ~ ~{d1} ~ 1 0.5")
        step.append(f"particle reclamation_util:colored_leaf 1 0.5 0.9 true ~3 ~{d1} ~3")
        step.append(f"particle reclamation_util:colored_leaf 1 0.5 0.9 true ~-3 ~{d1} ~3")
        step.append(f"particle reclamation_util:colored_leaf 1 0.5 0.9 true ~3 ~{d1} ~-3")
        step.append(f"particle reclamation_util:colored_leaf 1 0.5 0.9 true ~-3 ~{d1} ~-3")
        step.append(f"particle reclamation_util:two_colored_drip_hang 1 0.5 0.9 1 0.9 0.5 true ~{dx} ~{d1} ~{dz}")
        step.append(f"particle reclamation_util:two_colored_drip_hang 1 0.5 0.9 1 0.9 0.5 true ~{-dx} ~{d1} ~{dz}")
        step.append(f"particle reclamation_util:two_colored_drip_hang 1 0.5 0.9 1 0.9 0.5 true ~{dx} ~{d1} ~{-dz}")
        step.append(f"particle reclamation_util:two_colored_drip_hang 1 0.5 0.9 1 0.9 0.5 true ~{-dx} ~{d1} ~{-dz}")
        step.append(f"particle reclamation_util:two_colored_drip_hang 1 0.5 0.9 1 0.9 0.5 true ~{dz} ~{d1} ~{dx}")
        step.append(f"particle reclamation_util:two_colored_drip_hang 1 0.5 0.9 1 0.9 0.5 true ~{-dz} ~{d1} ~{dx}")
        step.append(f"particle reclamation_util:two_colored_drip_hang 1 0.5 0.9 1 0.9 0.5 true ~{dz} ~{d1} ~{-dx}")
        step.append(f"particle reclamation_util:two_colored_drip_hang 1 0.5 0.9 1 0.9 0.5 true ~{-dz} ~{d1} ~{-dx}")
        out.write(str(step) + ",\n")
    for i in range(steps_2): #split and glom to the block positions
        step = []
        d1 = round(3 - (2/steps_2 * i), 2)
        d2 = round(3 - (1/steps_2 * i), 2)
        d3 = round(height - ((height-3.5)/steps_2 * i), 2)
        # if i % 3 == 0:
        #     step.append(f"playsound ars_nouveau:gaia_family block @a[distance=..32] ~ ~{d3} ~ 1 0.5")
        step.append(f"particle reclamation_util:colored_leaf 1 0.5 0.9 true ~{d1} ~{d3} ~{d2}")
        step.append(f"particle reclamation_util:colored_leaf 1 0.5 0.9 true ~{d2} ~{d3} ~{d1}")
        step.append(f"particle reclamation_util:colored_leaf 1 0.5 0.9 true ~{-d1} ~{d3} ~{d2}")
        step.append(f"particle reclamation_util:colored_leaf 1 0.5 0.9 true ~{-d2} ~{d3} ~{d1}")
        step.append(f"particle reclamation_util:colored_leaf 1 0.5 0.9 true ~{d1} ~{d3} ~{-d2}")
        step.append(f"particle reclamation_util:colored_leaf 1 0.5 0.9 true ~{d2} ~{d3} ~{-d1}")
        step.append(f"particle reclamation_util:colored_leaf 1 0.5 0.9 true ~{-d1} ~{d3} ~{-d2}")
        step.append(f"particle reclamation_util:colored_leaf 1 0.5 0.9 true ~{-d2} ~{d3} ~{-d1}")
        out.write(str(step) + ",\n")