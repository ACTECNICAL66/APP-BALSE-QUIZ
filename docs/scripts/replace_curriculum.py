#!/usr/bin/env python3
"""Replace years 2, 4, 6 in curriculumData.ts with generated content."""

import os, re

# Read the generated content
script_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(script_dir, "..", "data", "generated_curriculum.txt"), "r", encoding="utf-8") as f:
    gen_text = f.read()

# Extract the 3 year objects from the generated content
# The format is: const GENERATED_CURRICULUM: YearCurriculum[] = [\n  { ... },\n  { ... },\n  { ... },\n];
# We need to extract each year object between the brackets

# Split on "  {" to find each year
parts = gen_text.split("  {\n")
# parts[0] = header, parts[1] = year 2, parts[2] = year 4, parts[3] = year 6 complete + footer
year2_obj = "  {\n" + parts[1]  # year 2
year4_obj = "  {\n" + parts[2]  # year 4

# For year 6, it's parts[3] but we need to remove the closing ],\n];\n
year6_full = "  {\n" + parts[3]
# Remove trailing "];\n" or "];" and the const declaration
year6_obj = re.sub(r'\n\]\s*;\s*\n*$', '', year6_full)

# Read the existing curriculum data
with open("frontend/src/data/curriculumData.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Define replacement boundaries
sections = [
    ("// 2DO AÑO", year2_obj),
    ("// 4TO AÑO", year4_obj),
    ("// 6TO AÑO", year6_obj),
]

result = content
for marker, replacement in sections:
    # Find the section starting from the marker comment
    start_idx = result.find(marker)
    if start_idx == -1:
        print(f"ERROR: Could not find {marker}")
        continue
    
    # Find the start of the actual object (first `{` after the marker)
    obj_start = result.find("{", start_idx)
    
    # Find the end of the object and the following comma/newline
    # We need to match the opening `{` to its closing `}` at the year level
    depth = 0
    obj_end = obj_start
    for i in range(obj_start, len(result)):
        if result[i] == '{':
            depth += 1
        elif result[i] == '}':
            depth -= 1
            if depth == 0:
                obj_end = i + 1  # include the closing brace
                break
    
    # The closing is followed by a comma and newline: `},\n`
    # Find where the year object ends (including trailing comma)
    end_idx = obj_end
    while end_idx < len(result) and result[end_idx] in '},\n\r ':
        end_idx += 1
    # Step back so we include the `},\n`
    actual_end = end_idx
    while actual_end > obj_end and result[actual_end-1] in '\n\r ':
        actual_end -= 1
    
    # Replace from obj_start to actual_end with the replacement
    result = result[:obj_start] + replacement + result[actual_end:]
    print(f"Replaced {marker} section ({obj_start}-{actual_end})")

with open("frontend/src/data/curriculumData.ts", "w", encoding="utf-8") as f:
    f.write(result)

print("\nDone! curriculumData.ts updated.")
