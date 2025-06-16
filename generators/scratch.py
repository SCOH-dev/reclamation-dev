"particle reclamation_util:colored_drip_hang 0.588 0.2 1 true ~ ~ ~ 0 0 0 0 1"
for i in range(51):
    offset = 3 - (i / 50 * 3)
    y = i / 50 * 10
    commands = [f"particle reclamation_util:colored_drip_hang 0.588 0.2 1 true ~{offset} ~{y} ~ 0 0 0 0 1",
                f"particle reclamation_util:colored_drip_hang 0.588 0.2 1 true ~{-offset} ~{y} ~ 0 0 0 0 1",
                f"particle reclamation_util:colored_drip_hang 0.588 0.2 1 true ~ ~{y} ~{offset} 0 0 0 0 1",
                f"particle reclamation_util:colored_drip_hang 0.588 0.2 1 true ~ ~{y} ~{-offset} 0 0 0 0 1"]
    print(str(commands) + ",")
