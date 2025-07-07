import glob, json

input_files = glob.glob('input/biome/*', recursive=True)
output_stuff = {}

def temperature(temp):
    if temp > 1:
        return "HOT"
    elif temp > 0.85:
        return "WARM"
    elif temp > 0.35:
        return "NORMAL"
    elif temp > 0.0:
        return "COLD"
    elif temp > -0.35:
        return "ICY"
    else:
        return "FROZEN"

def humidity(downfall):
    if downfall > 0.85:
        return "WET"
    elif downfall > 0.3:
        return "NORMAL"
    else:
        return "DRY"

def type(climate):
    types = []
    if ((climate[0] == "WET") & ((climate[1] == "WARM") | (climate[1] == "HOT"))):
        types.append("jungle")
    if ((climate[0] == "NORMAL") & ((climate[1] == "NORMAL") | (climate[1] == "COLD"))):
        types.append("forest")
    if ((climate[0] == "NORMAL") & ((climate[1] == "NORMAL") | (climate[1] == "WARM"))):
        types.append("plains")
    if ((climate[0] == "DRY") & ((climate[1] == "HOT") | (climate[1] == "WARM"))):
        types.append("desert")
    return types


for file in input_files:
    with open(file, 'r') as f:
        json_file = json.load(f)
        climate = [humidity(json_file['downfall']), temperature(json_file['temperature'])]
        output_stuff[file[12:-5]] = [climate, type(climate)]

with open('output/biome/biomes.json', 'w') as out:
    json.dump(output_stuff, out, indent=4)