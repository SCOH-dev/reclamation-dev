import os


def write_shell(radius, out, function):
    r_outer_squared = (radius + 0.5) ** 2
    r_inner_squared = (radius - 0.5) ** 2 if radius > 0 else 0

    for x in range(-radius - 1, radius + 2):  # padding to catch edge blocks
        for y in range(-radius - 1, radius + 2):
            for z in range(-radius - 1, radius + 2):
                dx = x
                dy = y
                dz = z
                dist_sq = dx * dx + dy * dy + dz * dz
                if r_inner_squared < dist_sq <= r_outer_squared:
                    out.write(f"execute positioned ~{x} ~{y} ~{z} run function {function}\n")


def generate_shells(function, biome, radius):
    print(function, biome, radius)
    for r in range(0, radius + 1):
        os.makedirs(os.path.dirname(f"output/functions/{biome}/shell_{r}.mcfunction"), exist_ok=True)
        with open(f"output/functions/{biome}/shell_{r}.mcfunction", "w") as out:
            out.write("playsound ars_nouveau:tempestry_family block @p[distance=..16] ~ ~ ~\n")
            write_shell(r, out, function)


generate_shells("reclamation:reclaim/convert", "reclaim", 24)
