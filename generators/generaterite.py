import math, json
import mcfunctionloop

color_r = 1
color_g = 0
color_b = 0
map = {
    "soul_sand_valley": [78, 241, 246, 'iron_ingot'],
    "delta": [90, 74, 153, 'gold_ingot'],
    "crimson": [188, 48, 49, 'stick'],
    "warped": [20, 180, 133, 'redstone'],
    "wastes": [255, 73, 21, 'copper_ingot']
}

radius_inner = 3
radius_outer = 5
steps = 100
particle_height = 8
linesteps = 50
lineparticle = "minecraft:soul_fire_flame"


def get_x(rot):  # gets x offset given degrees
    radians = rot / 360 * 2 * math.pi
    return math.cos(radians)


def get_z(rot):  # gets z offset given degrees
    radians = rot / 360 * 2 * math.pi
    return math.sin(radians)


def generate_rite(biome, color_r, color_g, color_b):
    color_r = round(color_r/255, 4)
    color_g = round(color_g/255, 4)
    color_b = round(color_b/255, 4)
    commands = []
    for step in range(0, steps + 1):
        step_command = []
        y = particle_height / steps * step
        if step == 0:
            step_command.append(
                f"playsound botania:laputa_start block @a[distance=..32] ~ ~{particle_height / 2} ~ 1 0.7")
        elif step % 2 == 0:
            step_command.append(f"playsound embers:block.alchemy.start block @a[distance=..32] ~ ~{y} ~ 1")
        radius_fraction = 1 - (step / steps)
        for offset in range(0, 360, 90):
            inner_x = round(get_x(180 / steps * step + offset) * radius_inner * radius_fraction, 4)
            inner_z = round(get_z(180 / steps * step + offset) * radius_inner * radius_fraction, 4)
            outer_x = round(get_x(180 / steps * step + offset + 45) * radius_outer * radius_fraction, 4)
            outer_z = round(get_z(180 / steps * step + offset + 45) * radius_outer * radius_fraction, 4)
            step_command.append(
                f"particle reclamation_util:two_colored_drip_hang {min(color_r+0.5, 1)} {min(color_g+0.5, 1)} {min(color_b+0.5, 1)} {color_r} {color_g} {color_b} true ~{inner_x} ~{y} ~{inner_z} 0 0 0 0 1")
            step_command.append(
                f"particle reclamation_util:two_colored_drip_hang {min(color_r+0.5, 1)} {min(color_g+0.5, 1)} {min(color_b+0.5, 1)} {color_r} {color_g} {color_b} true ~{outer_x} ~{y} ~{outer_z} 0 0 0 0 1")
        commands.append(step_command)

    linedown = []
    for step in range(0, linesteps):
        linedown.append(f"particle {lineparticle} ~ ~{particle_height / linesteps * step} ~ 0 0 0 0 1")
    linedown.append("playsound botania:mana_blaster block @a[distance=..32] ~ ~ ~ 1")
    commands.append(linedown)

    for step in range(0, 17):
        for i in range(0, 10):
            commands.append([])
        commands.append([f"function reclamation:{biome}/shell_{step}"])

    output = {
        "items": [
            {
                "id": "minecraft:"+map[biome][3],
                "Count": 1
            }
        ],
        "shapes": {
            "enchanted:small_circle": "enchanted:nether_chalk"
        },
        "power": 0,
        "factory": {
            "type": "enchanted:command",
            "commands": commands,
            "delay": 2
        }
    }

    with open(f'output/rites/{biome}.json', 'w') as out:
        json.dump(output, out, ensure_ascii=False, indent=2)
    mcfunctionloop.generate_shells(f"reclamation:{biome}/convert", biome, 16)


for biome in map:
    generate_rite(biome, map[biome][0], map[biome][1], map[biome][2])
