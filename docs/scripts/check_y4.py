import re
with open('frontend/src/data/curriculumData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Extract year 4
y4 = re.search(r'year:\s*4,.*?title:(.*?)subjects:\s*\[\s*(.*?)\s*\]\s*\}\s*,', text, re.DOTALL)
if y4:
    subjects = re.findall(r'name:\s*[\'"](.*?)[\'"]', y4.group(2))
    print('Y4 Subjects in TS:', subjects)
