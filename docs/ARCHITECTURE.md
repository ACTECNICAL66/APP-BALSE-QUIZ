# Arquitectura - IPET 66 TecnoLingo

## Diagrama de Componentes

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND (React + Vite)                  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                     App.tsx (Root)                        │   │
│  │  ┌─────────┐ ┌──────────┐ ┌──────────┐ ┌─────────────┐  │   │
│  │  │ Navbar  │ │ Sidebar  │ │ Aurora   │ │ Onboarding  │  │   │
│  │  │ (layout)│ │ (layout) │ │ (layout) │ │ (auth)      │  │   │
│  │  └─────────┘ └──────────┘ └──────────┘ └─────────────┘  │   │
│  │                                                          │   │
│  │  ┌──────────────────── Views ──────────────────────────┐ │   │
│  │  │ Landing │ Learn │ Leaderboard │ Shop │ Profile │ IA │ │   │
│  │  └─────────────────────────────────────────────────────┘ │   │
│  │                                                          │   │
│  │  ┌───────────┐  ┌──────────┐  ┌────────────────┐        │   │
│  │  │ AuthModal │  │ Lesson   │  │ AvatarSystem   │        │   │
│  │  │ (auth)    │  │ (lesson) │  │ (ui)           │        │   │
│  │  └───────────┘  └──────────┘  └────────────────┘        │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐                │
│  │ data/      │  │ utils/     │  │ index.css  │                │
│  │ curriculum │  │ sound      │  │ Liquid     │                │
│  │ Data.ts    │  │ confetti   │  │ Glass      │                │
│  │            │  │ cn         │  │ Design     │                │
│  └────────────┘  └────────────┘  └────────────┘                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ (futuro: fetch API)
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      BACKEND (Express + TS)                     │
│                                                                 │
│  ┌──────────┐  ┌────────────────┐  ┌────────────────────────┐  │
│  │ server   │  │ routes/        │  │ config/                │  │
│  │ .ts      │──│ health.ts      │  │ index.ts               │  │
│  │          │  │ (futuro: auth) │  │ (env vars)             │  │
│  └──────────┘  │ (futuro: user) │  └────────────────────────┘  │
│                │ (futuro: quiz) │                               │
│                └────────────────┘                               │
└─────────────────────────────────────────────────────────────────┘
```

## Flujo de Datos

1. **Landing Page** → El usuario ve la página de presentación
2. **AuthModal** → Registro/Login con nombre, año, avatar y meta diaria
3. **OnboardingSuccess** → Animación de bienvenida (solo registro nuevo)
4. **Dashboard** → Navbar + Sidebar + Vista activa (Learn/Leaderboard/Shop/Advisor/Profile)
5. **LearnView** → Sendero de niveles por materia con botones 3D zigzag
6. **LessonModal** → Motor de preguntas (multiple-choice, true-false, fill-blanks, match-pairs)
7. **Gamificación** → Combo streak, XP, gemas, corazones, logros

## Tecnologías

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework UI | React | 19.2.6 |
| Lenguaje | TypeScript | 5.9.3 |
| Bundler | Vite | 7.3.2 |
| CSS | TailwindCSS | 4.1.17 |
| Iconos | Lucide React | 1.16.0 |
| Confetti | Canvas Confetti | 1.9.4 |
| Backend | Express | 4.21.0 |
| Sonido | Web Audio API | Nativo |

## Estado (LocalStorage)

Toda la persistencia actual es vía `localStorage` con prefijo `ipet66_`:
- `ipet66_auth` - Estado de autenticación
- `ipet66_name` / `ipet66_avatar` / `ipet66_year` - Perfil de usuario
- `ipet66_combo` / `ipet66_max_combo` - Rachas de combo
- `ipet66_gems` / `ipet66_hearts` / `ipet66_xp` - Economía del juego
- `ipet66_completed` - Array de lecciones completadas (JSON)
- `ipet66_freeze` / `ipet66_frame` / `ipet66_outfit` - Items de tienda

## Futuro: Integración con Supabase

Para persistir datos entre dispositivos:
1. Crear tablas `users`, `progress`, `achievements` en Supabase
2. Agregar rutas API en el backend para CRUD de progreso
3. Sincronizar localStorage ↔ Supabase en el frontend
