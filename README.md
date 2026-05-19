# APP-BALSE-QUIZ 🤖⚡

**Plataforma educativa gamificada estilo Duolingo para el IPET 66**

Una Progressive Web App (PWA) interactiva diseñada para que los estudiantes del IPET 66 aprendan y dominen las materias técnicas desde 1º hasta 7º año, con sistema de gamificación completo: combos, rachas, ligas, tienda y logros.

---

## 🏗️ Estructura del Proyecto

```
APP-BALSE-QUIZ/
├── frontend/                   # Cliente React + Vite + TailwindCSS
│   ├── public/                 # Activos estáticos (favicon, iconos PWA)
│   ├── src/
│   │   ├── components/         # Componentes React reutilizables
│   │   │   ├── layout/         # Navbar, Sidebar, AuroraBackground
│   │   │   ├── auth/           # AuthModal, OnboardingSuccess
│   │   │   ├── views/          # LearnView, LeaderboardView, ShopView, etc.
│   │   │   ├── lesson/         # LessonModal (motor de preguntas)
│   │   │   └── ui/             # AvatarSystem y componentes base
│   │   ├── data/               # Datos del currículo y preguntas
│   │   ├── utils/              # Utilidades (sonido, confetti, cn)
│   │   ├── App.tsx             # Componente raíz
│   │   ├── main.tsx            # Punto de entrada
│   │   └── index.css           # Estilos globales + Liquid Glass
│   ├── index.html              # HTML principal
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── backend/                    # Servidor Node.js (preparado para API futura)
│   ├── src/
│   │   ├── server.ts           # Servidor Express
│   │   ├── routes/             # Rutas API
│   │   └── config/             # Configuración
│   ├── package.json
│   └── tsconfig.json
│
├── docs/                       # Documentación del proyecto
│   └── ARCHITECTURE.md         # Diagrama de arquitectura
│
├── .gitignore
└── README.md
```

## 🎮 Características

### Gamificación
- 🔥 **Combo de Aciertos**: Encadena respuestas correctas para multiplicar XP
- ❤️ **Vidas de Taller**: 5 corazones, pierdes uno al fallar
- 🪙 **Tuercas Doradas (Gemas)**: Moneda interna para la tienda
- 🏆 **Ligas Semanales**: Compite con tus compañeros por año o general
- ⭐ **Logros**: Sistema de medallas y progresión
- 🛡️ **Escudo Anti-Fallo**: Protege tu combo al responder mal

### Materias por Ciclo

| Ciclo | Años | Materias |
|-------|------|----------|
| **Básico** | 1º - 3º | Matemática, Taller, Tecnología, Dibujo Técnico |
| **Superior I** | 4º - 5º | Electrotecnia I/II, Informática I/II, Electrónica Analógica I/II, Electrónica Digital I/II, Matemática |
| **Superior II** | 6º - 7º | Telecomunicaciones I/II, Electrónica Industrial I/II, Instalaciones Industriales I/II, Digitales III, Análisis Matemático |

### Tipos de Ejercicios
- ✅ Opción múltiple
- ✅ Verdadero / Falso
- ✅ Completar fórmulas (fill-blanks)
- ✅ Emparejar conceptos (match-pairs)

## 🚀 Instalación y Desarrollo

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend (preparado para futuro)
```bash
cd backend
npm install
npm run dev
```

## 🛠️ Tecnologías

- **Frontend**: React 19, TypeScript, Vite 7, TailwindCSS 4
- **Estilo Visual**: Liquid Glass (iOS 26), Aurora Backgrounds, 3D Buttons
- **Sonido**: Web Audio API (efectos correcta/incorrecta/victoria)
- **Animaciones**: Canvas Confetti, CSS Animations
- **Backend**: Node.js, Express (preparado)
- **PWA**: Service Worker ready, instalable

## 📱 PWA

La app es instalable en dispositivos móviles como app nativa. Se abrirá en modo standalone sin barra del navegador.

## 📝 Licencia

Proyecto educativo para la comunidad del IPET 66, Córdoba, Argentina.
