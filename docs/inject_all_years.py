#!/usr/bin/env python3
import json
import os
import re

def convert_to_ts(obj):
    # Extremely basic JSON to TS conversion (removing quotes from keys)
    json_str = json.dumps(obj, indent=2, ensure_ascii=False)
    # Use regex to remove quotes around keys
    ts_str = re.sub(r'"([a-zA-Z0-9_]+)":', r'\1:', json_str)
    return ts_str

y_data = []
for i in range(1, 7):
    with open(f"docs/y{i}_gen.json", "r", encoding="utf-8") as f:
        y_data.append(convert_to_ts(json.load(f)))

# Combine all into the array format
combined_years = ",\n".join(y_data)

# Now read the original curriculumData.ts
with open("frontend/src/data/curriculumData.ts", "r", encoding="utf-8") as f:
    text = f.read()

# Find CURRICULUM_DATA array
start_idx = text.find("export const CURRICULUM_DATA: YearCurriculum[] = [")
if start_idx == -1:
    print("Could not find CURRICULUM_DATA start")
    exit(1)

# We need to preserve Year 7!
# Let's find year 7
y7_match = re.search(r'\{\s*year:\s*7,.*?(?=\]\s*;)', text, re.DOTALL)
y7_text = y7_match.group(0) if y7_match else ""

# The start of the array content (find the '[' after '= [')
eq_pos = text.find("= [", start_idx)
array_start = text.find("[", eq_pos) + 1

# The end of the array
# We need to find the matching '];' for CURRICULUM_DATA
array_end = text.find("];", array_start)

# New array content: combined_years + year 7
new_array_content = "\n" + combined_years
if y7_text:
    new_array_content += ",\n" + y7_text

# Reconstruct file
new_text = text[:array_start] + new_array_content + "\n" + text[array_end:]

with open("frontend/src/data/curriculumData.ts", "w", encoding="utf-8") as f:
    f.write(new_text)

print("Injection complete!")
