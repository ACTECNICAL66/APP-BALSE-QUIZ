#!/usr/bin/env python3
"""Replace years 2, 4, 6 in curriculumData.ts - robust version."""
import os

script_dir = os.path.dirname(os.path.abspath(__file__))

# Read the generated content
with open(os.path.join(script_dir, "..", "data", "generated_curriculum.txt"), "r", encoding="utf-8") as f:
    gen_text = f.read()

# Extract year objects: each starts with "  {" on its own line
# Split to get individual year sections  
lines = gen_text.split('\n')
in_array = False
year_objects = []
current = []
depth = 0
capture = False

for line in lines:
    if 'GENERATED_CURRICULUM' in line:
        in_array = True
        continue
    if not in_array:
        continue
    if '];' in line:
        break
    
    if capture:
        current.append(line)
        depth += line.count('{') - line.count('}')
        if depth == 0:
            capture = False
            year_objects.append('\n'.join(current))
            current = []
    elif line.strip().startswith('{'):
        capture = True
        current = [line]
        depth = line.count('{') - line.count('}')

print(f"Found {len(year_objects)} year objects")

# Read original file
with open("frontend/src/data/curriculumData.ts", "r", encoding="utf-8") as f:
    content = f.read()

year_map = {}
for obj in year_objects:
    for line in obj.split('\n'):
        m = __import__('re').search(r'year:\s*(\d+)', line)
        if m:
            year_map[int(m.group(1))] = obj
            print(f"Year {m.group(1)}: {len(obj)} chars")
            break

# Replace each year
for year_num in [2, 4, 6]:
    marker = f"// {year_num}DO AÑO"
    
    # Try different markers based on year
    if year_num == 4:
        patterns = [f"// {year_num}TO AÑO"]
    elif year_num == 6:
        patterns = [f"// {year_num}TO AÑO"]
    else:
        patterns = [f"// {year_num}DO AÑO"]
    
    for marker in patterns:
        # Find the marker comment
        start_idx = content.find(marker)
        if start_idx == -1:
            continue
        
        print(f"Found marker '{marker}' at position {start_idx}")
        
        # Find the opening { of the year object (next non-empty line after marker)
        after_marker = content[start_idx + len(marker):]
        obj_start_in_after = after_marker.find('{')
        if obj_start_in_after == -1:
            print(f"  ERROR: No opening brace after marker")
            continue
        
        obj_start = start_idx + len(marker) + obj_start_in_after
        
        # Match braces to find end of year object
        depth = 0
        obj_end = obj_start
        for i in range(obj_start, len(content)):
            if content[i] == '{':
                depth += 1
            elif content[i] == '}':
                depth -= 1
                if depth == 0:
                    obj_end = i + 1
                    break
        
        # Include the trailing comma and newlines after the closing brace
        end_idx = obj_end
        while end_idx < len(content) and content[end_idx] in ',\n\r\t ':
            end_idx += 1
        
        replacement = year_map[year_num]
        
        # Ensure the replacement has proper indentation
        content = content[:obj_start] + replacement + '\n' + content[end_idx:]
        
        print(f"  Replaced position {obj_start}-{end_idx} with {len(replacement)} chars")
        break
    else:
        print(f"ERROR: Could not find marker for year {year_num}")

with open("frontend/src/data/curriculumData.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("\nDone!")
