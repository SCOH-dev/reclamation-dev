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

max_radius = 16
function = "reclamation:crimson/convert"

for r in range(0, max_radius + 1):
    with open(f"output/functions/shell_{r}.mcfunction", "w") as out:
        out.write("playsound ars_nouveau:tempestry_family block @p[distance=..16] ~ ~ ~\n")
        write_shell(r, out, function)
