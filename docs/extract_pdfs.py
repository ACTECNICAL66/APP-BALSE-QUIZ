#!/usr/bin/env python3
"""Extract text from all PDFs in the docs directory. Output to UTF-8 file."""
import PyPDF2
import os
import sys

pdf_files = [
    "Preguntas de conocimientos básicos de 1er año.pdf",
    "Preguntas para 2do año.pdf",
    "Preguntas y respuestas 3° año.pdf",
    "Preguntas y respuestas de 4to (1).pdf",
    "5to año -  Lysek, Olsak, Vargas.pdf",
    "Preguntas y respuestas 6to.pdf",
    "RESPUESTAS 6TO AÑO.docx.pdf",
]

script_dir = os.path.dirname(os.path.abspath(__file__))
output_path = os.path.join(script_dir, "all_pdfs_extracted.txt")

with open(output_path, 'w', encoding='utf-8') as out:
    for pdf_file in pdf_files:
        filepath = os.path.join(script_dir, pdf_file)
        if not os.path.exists(filepath):
            out.write(f"\n{'='*80}\n")
            out.write(f"FILE NOT FOUND: {pdf_file}\n")
            out.write(f"{'='*80}\n")
            continue
        
        out.write(f"\n{'='*80}\n")
        out.write(f"FILE: {pdf_file}\n")
        out.write(f"{'='*80}\n")
        
        try:
            with open(filepath, 'rb') as f:
                reader = PyPDF2.PdfReader(f)
                num_pages = len(reader.pages)
                out.write(f"Total pages: {num_pages}\n")
                
                for i, page in enumerate(reader.pages):
                    text = page.extract_text() or ""
                    # Clean up excessive spacing
                    lines = text.split('\n')
                    cleaned_lines = []
                    for line in lines:
                        stripped = line.strip()
                        if stripped:
                            cleaned_lines.append(stripped)
                    cleaned_text = '\n'.join(cleaned_lines)
                    
                    out.write(f"\n--- PAGE {i+1} ---\n")
                    out.write(cleaned_text + "\n")
                    
                    # Check for images in this page
                    try:
                        resources = page.get('/Resources')
                        if resources and '/XObject' in resources:
                            xobject = resources['/XObject'].get_object()
                            img_count = 0
                            for obj_name in xobject:
                                obj = xobject[obj_name].get_object()
                                if obj.get('/Subtype') == '/Image':
                                    img_count += 1
                            if img_count > 0:
                                out.write(f"\n[*** THIS PAGE CONTAINS {img_count} IMAGE(S) ***]\n")
                    except:
                        pass
                        
        except Exception as e:
            out.write(f"ERROR reading {pdf_file}: {e}\n")

print("Done!", file=sys.stderr)
