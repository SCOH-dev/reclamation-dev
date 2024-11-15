import glob
import json
import pandas as pd


# intake plant jsons and make a matrix of their requirements
def snake_to_camel(string):
    return string.replace("_", " ").title()


# convert rows to lows and highs for 10str plant. [0][0] is low for acidity, [1][2] is high for nutrient
def low_high_10str(row):
    arr = [[0] * 3, [0] * 3]
    arr[0][0] = row['acidity_raw'] - row['acidity_tol'] * 10
    arr[1][0] = row['acidity_raw'] + row['acidity_tol'] * 10
    arr[0][1] = row['humidity_raw'] - row['humidity_tol'] * 10
    arr[1][1] = row['humidity_raw'] + row['humidity_tol'] * 10
    arr[0][2] = row['nutrients_raw'] - row['nutrients_tol'] * 10
    arr[1][2] = row['nutrients_raw'] + row['nutrients_tol'] * 10
    match row['acidity_type']:
        case "equal_or_lower":
            arr[0][0] = -99
        case "equal_or_higher":
            arr[1][0] = 99

    match row['humidity_type']:
        case "equal_or_lower":
            arr[0][1] = -99
        case "equal_or_higher":
            arr[1][1] = 99

    match row['nutrients_type']:
        case "equal_or_lower":
            arr[0][2] = -99
        case "equal_or_higher":
            arr[1][2] = 99

    return arr


# convert rows to lows and highs for base plant. [0][0] is low for acidity, [1][2] is high for nutrient
def low_high_base(row):
    arr = [[0] * 3, [0] * 3]
    arr[0][0] = row['acidity_raw']
    arr[1][0] = row['acidity_raw']
    arr[0][1] = row['humidity_raw']
    arr[1][1] = row['humidity_raw']
    arr[0][2] = row['nutrients_raw']
    arr[1][2] = row['nutrients_raw']
    match row['acidity_type']:
        case "equal_or_lower":
            arr[0][0] = -99
        case "equal_or_higher":
            arr[1][0] = 99

    match row['humidity_type']:
        case "equal_or_lower":
            arr[0][1] = -99
        case "equal_or_higher":
            arr[1][1] = 99

    match row['nutrients_type']:
        case "equal_or_lower":
            arr[0][2] = -99
        case "equal_or_higher":
            arr[1][2] = 99

    return arr


input_files = glob.glob('input/plants/*', recursive=True)

acidity_map = {'highly_acidic': 0, 'acidic': 1, 'slightly_acidic': 2, 'neutral': 3, 'slightly_alkaline': 4,
               'alkaline': 5, 'highly_alkaline': 6}
humidity_map = {'arid': 0, 'dry': 1, 'damp': 2, 'wet': 3, 'watery': 4, 'flooded': 5}
nutrient_map = {'none': 0, 'very_low': 1, 'low': 2, 'medium': 3, 'high': 4, 'very_high': 5}

dict = {'plant': [], 'acidity': [], 'acidity_tol': [], 'acidity_type': [], 'humidity': [], 'humidity_tol': [], 'humidity_type': [], 'nutrients': [],
        'nutrients_tol': [], 'nutrients_type': []}
for file in input_files:
    with open(file, 'r') as f:
        json_file = json.load(f)
        requirements = json_file['requirement']
        dict['plant'].append(snake_to_camel(file[13:-5]))
        dict['acidity'].append(requirements['soil_acidity']['value'])
        dict['acidity_tol'].append(requirements['soil_acidity']['tolerance_factor'])
        dict['acidity_type'].append(requirements['soil_acidity']['type'])
        dict['humidity'].append(requirements['soil_humidity']['value'])
        dict['humidity_tol'].append(requirements['soil_humidity']['tolerance_factor'])
        dict['humidity_type'].append(requirements['soil_humidity']['type'])
        dict['nutrients'].append(requirements['soil_nutrients']['value'])
        dict['nutrients_tol'].append(requirements['soil_nutrients']['tolerance_factor'])
        dict['nutrients_type'].append(requirements['soil_nutrients']['type'])

df = pd.DataFrame(data=dict)
df['acidity_raw'] = df['acidity'].apply(lambda row: acidity_map[row])
df['humidity_raw'] = df['humidity'].apply(lambda row: humidity_map[row])
df['nutrients_raw'] = df['nutrients'].apply(lambda row: nutrient_map[row])
df['acidity_low_10str'] = df.apply(lambda row: low_high_10str(row)[0][0], axis=1)
df['acidity_high_10str'] = df.apply(lambda row: low_high_10str(row)[1][0], axis=1)
df['humidity_low_10str'] = df.apply(lambda row: low_high_10str(row)[0][1], axis=1)
df['humidity_high_10str'] = df.apply(lambda row: low_high_10str(row)[1][1], axis=1)
df['nutrients_low_10str'] = df.apply(lambda row: low_high_10str(row)[0][2], axis=1)
df['nutrients_high_10str'] = df.apply(lambda row: low_high_10str(row)[1][2], axis=1)
df['acidity_low_base'] = df.apply(lambda row: low_high_base(row)[0][0], axis=1)
df['acidity_high_base'] = df.apply(lambda row: low_high_base(row)[1][0], axis=1)
df['humidity_low_base'] = df.apply(lambda row: low_high_base(row)[0][1], axis=1)
df['humidity_high_base'] = df.apply(lambda row: low_high_base(row)[1][1], axis=1)
df['nutrients_low_base'] = df.apply(lambda row: low_high_base(row)[0][2], axis=1)
df['nutrients_high_base'] = df.apply(lambda row: low_high_base(row)[1][2], axis=1)
df['acidity'] = df['acidity'].apply(snake_to_camel)
df['humidity'] = df['humidity'].apply(snake_to_camel)
df['nutrients'] = df['nutrients'].apply(snake_to_camel)

df.to_csv('output/plant_matrix.csv')


