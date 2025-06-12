import math, json

color_r = 1
color_g = 0
color_b = 0
radius_inner = 3
radius_outer = 5
commands = []
steps = 100
particle_height = 8
linesteps = 50
particle = "minecraft:dripping_lava"
lineparticle = "minecraft:flame"
biome = "crimson"


def get_x(rot):  # gets x offset given degrees
    radians = rot / 360 * 2 * math.pi
    return math.cos(radians)


def get_z(rot):  # gets z offset given degrees
    radians = rot / 360 * 2 * math.pi
    return math.sin(radians)


#particle = f"minecraft:dust {color_r} {color_g} {color_b} 2"
for step in range(0, steps + 1):
    step_command = []
    y = particle_height/steps * step
    if step == 0:
        step_command.append(f"playsound botania:laputa_start block @p[distance=..16] ~ ~{particle_height/2} ~ 1 0.7")
    elif step % 2 == 0:
        step_command.append(f"playsound embers:block.alchemy.start block @p[distance=..16] ~ ~{y} ~ 1")
    radius_fraction = 1 - (step / steps)
    for offset in range(0, 360, 90):
        inner_x = round(get_x(180/steps * step + offset) * radius_inner * radius_fraction, 4)
        inner_z = round(get_z(180/steps * step + offset) * radius_inner * radius_fraction, 4)
        outer_x = round(get_x(180/steps * step + offset + 45) * radius_outer * radius_fraction, 4)
        outer_z = round(get_z(180/steps * step + offset + 45) * radius_outer * radius_fraction, 4)
        step_command.append(f"particle {particle} ~{inner_x} ~{y} ~{inner_z} 0 0 0 0 1")
        step_command.append(f"particle {particle} ~{outer_x} ~{y} ~{outer_z} 0 0 0 0 1")
    commands.append(step_command)

linedown = []
for step in range(0,linesteps):
    linedown.append(f"particle {lineparticle} ~ ~{particle_height/linesteps * step} ~ 0 0 0 0 1")
linedown.append("playsound botania:mana_blaster block @p[distance=..16] ~ ~ ~ 1")
commands.append(linedown)

for step in range(0, 17):
    for i in range(0, 10):
        commands.append([])
    commands.append([f"function reclamation:{biome}/shell_{step}"])


output = {
    "items": [
        {
            "id": "minecraft:iron_ingot",
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

with open('output/ritual.json', 'w') as out:
    json.dump(output, out, ensure_ascii=False, indent=2)


print(commands)