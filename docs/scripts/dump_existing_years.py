#!/usr/bin/env python3
import json
import generate_questions as gq

y2 = {
    "year": 2,
    "title": "2do Año - Ciclo Básico",
    "subtitle": "Fundamentos y Herramientas",
    "subjects": [
        {
            "id": "m-2-dibujo",
            "name": "Dibujo Técnico",
            "description": "Normas IRAM/ISO, proyecciones y simbología.",
            "color": "from-blue-500 to-indigo-600",
            "iconName": "Box",
            "lessons": gq.Y2_DIBUJO_LESSONS
        },
        {
            "id": "m-2-mate",
            "name": "Matemática",
            "description": "Números enteros, proporciones, ecuaciones y gráficos.",
            "color": "from-emerald-500 to-teal-600",
            "iconName": "Calculator",
            "lessons": gq.Y2_MATE_LESSONS
        },
        {
            "id": "m-2-taller",
            "name": "Taller Laboratorio",
            "description": "Componentes, instrumentos de medición y seguridad.",
            "color": "from-amber-500 to-orange-600",
            "iconName": "Wrench",
            "lessons": gq.Y2_TALLER_LESSONS
        },
        {
            "id": "m-2-tecno",
            "name": "Tecnología",
            "description": "Sistemas mecánicos, eléctricos básicos y programación.",
            "color": "from-purple-500 to-pink-600",
            "iconName": "Cog",
            "lessons": gq.Y2_TECNO_LESSONS
        }
    ]
}

# Add images to Year 2
y2['subjects'][2]['lessons'][0]['questions'][0]['image'] = '2do_ano_q1.png'
y2['subjects'][2]['lessons'][1]['questions'][0]['image'] = '2do_ano_q2.png'

import os
script_dir = os.path.dirname(os.path.abspath(__file__))
data_dir = os.path.join(script_dir, "..", "data")
os.makedirs(data_dir, exist_ok=True)
with open(os.path.join(data_dir, "y2_gen.json", "w", encoding="utf-8") as f:
    json.dump(y2, f, indent=2, ensure_ascii=False)

y4 = {
    "year": 4,
    "title": "4to Año - Ciclo Orientado",
    "subtitle": "Especialización y Desarrollo",
    "subjects": [
        {
            "id": "m-4-digital",
            "name": "Electrónica Digital",
            "description": "Compuertas lógicas y Karnaugh.",
            "color": "from-blue-500 to-indigo-600",
            "iconName": "Cpu",
            "lessons": gq.Y4_DIGITAL_LESSONS
        },
        {
            "id": "m-4-electro",
            "name": "Electrotecnia I",
            "description": "Leyes de Kirchhoff, potencia y capacitores.",
            "color": "from-amber-500 to-orange-600",
            "iconName": "Zap",
            "lessons": gq.Y4_ELECTRO_LESSONS
        },
        {
            "id": "m-4-analog",
            "name": "Electrónica Analógica I",
            "description": "Semiconductores, diodos, transistores.",
            "color": "from-purple-500 to-pink-600",
            "iconName": "Wrench",
            "lessons": gq.Y4_ANALOG_LESSONS
        },
        {
            "id": "m-4-info",
            "name": "Informática",
            "description": "Programación en C++, sistemas digitales.",
            "color": "from-emerald-500 to-teal-600",
            "iconName": "Monitor",
            "lessons": gq.Y4_INFO_LESSONS
        }
    ]
}

# Add image to Year 4
y4['subjects'][2]['lessons'][1]['questions'][0]['image'] = '4to_ano_q2.png'

import os
script_dir = os.path.dirname(os.path.abspath(__file__))
data_dir = os.path.join(script_dir, "..", "data")
os.makedirs(data_dir, exist_ok=True)
with open(os.path.join(data_dir, "y4_gen.json", "w", encoding="utf-8") as f:
    json.dump(y4, f, indent=2, ensure_ascii=False)

y6 = {
    "year": 6,
    "title": "6to Año - Profesionalización",
    "subtitle": "Proyectos y Prácticas",
    "subjects": [
        {
            "id": "m-6-teleco",
            "name": "Telecomunicaciones",
            "description": "Redes complejas, microondas y sistemas satelitales.",
            "color": "from-blue-500 to-indigo-600",
            "iconName": "Wifi",
            "lessons": gq.Y6_TELECO_LESSONS
        },
        {
            "id": "m-6-instal",
            "name": "Instalaciones Eléctricas",
            "description": "Planos, tableros y protecciones.",
            "color": "from-amber-500 to-orange-600",
            "iconName": "Zap",
            "lessons": gq.Y6_INSTAL_LESSONS
        },
        {
            "id": "m-6-digital3",
            "name": "Electrónica Digital III",
            "description": "Microcontroladores y memorias.",
            "color": "from-purple-500 to-pink-600",
            "iconName": "Cpu",
            "lessons": gq.Y6_DIGITAL3_LESSONS
        },
        {
            "id": "m-6-industrial",
            "name": "Electrónica Industrial",
            "description": "Control de potencia y automatización.",
            "color": "from-emerald-500 to-teal-600",
            "iconName": "Cog",
            "lessons": gq.Y6_INDUSTRIAL_LESSONS
        }
    ]
}

# Add image to Year 6 (Assuming questions index, if it fails we just won't add it)
try:
    y6['subjects'][1]['lessons'][2]['questions'][0]['image'] = '6to_ano_q3.png'
except:
    pass

import os
script_dir = os.path.dirname(os.path.abspath(__file__))
data_dir = os.path.join(script_dir, "..", "data")
os.makedirs(data_dir, exist_ok=True)
with open(os.path.join(data_dir, "y6_gen.json", "w", encoding="utf-8") as f:
    json.dump(y6, f, indent=2, ensure_ascii=False)
