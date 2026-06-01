# 📐 Arquitectura de APP-BALSE-QUIZ 🤖⚡

## Diagrama de Componentes

```
┌──────────────────────────────────────────────────────────────────┐
│                    APP-BALSE-QUIZ (PWA)                          │
│                      IPET 66 TecnoLingo                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    FRONTEND (React + Vite)                │   │
│  ├──────────────────────────────────────────────────────────┤   │
│  │                                                          │   │
│  │  ┌────────────┐  ┌────────────┐  ┌──────────────────┐   │   │
│  │  │   Layout    │  │   Auth     │  │      Views       │   │   │
│  │  │ ─────────── │  │ ────────── │  │ ─────────────────│   │   │
│  │  │ • Navbar    │  │ • AuthModal│  │ • LandingPage    │   │   │
│  │  │ • Sidebar   │  │ • Onboard- │  │ • LearnView      │   │   │
│  │  │ • AuroraBkg │  │   ingSucc. │  │ • LeaderboardView│   │   │
│  │  └────────────┘  └────────────┘  │ • ShopView        │   │   │
│  │                                  │ • AdvisorView     │   │   │
│  │  ┌────────────┐  ┌────────────┐  │ • ProfileView     │   │   │
│  │  │  Lesson    │  │    UI      │  └──────────────────┘   │   │
│  │  │ ────────── │  │ ────────── │                         │   │
│  │  │ • LessonMo-│  │ • Avatar-  │  ┌──────────────────┐   │   │
│  │  │   dal      │  │   System   │  │      Data        │   │   │
│  │  └────────────┘  └────────────┘  │ ─────────────────│   │   │
│  │                                  │ • curriculumData │   │   │
│  │  ┌──────────────────────────┐    └──────────────────┘   │   │
│  │  │        App.tsx           │                            │   │
│  │  │  (State Manager Root)    │    ┌──────────────────┐   │   │
│  │  └──────────────────────────┘    │     Utils        │   │   │
│  │                                  │ ─────────────────│   │   │
│  │                                  │ • sound.ts       │   │   │
│  │                                  │ • confetti.ts    │   │   │
│  │                                  │ • cn.ts          │   │   │
│  │                                  └──────────────────┘   │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │               BACKEND (Node.js + Express)                │   │
│  ├──────────────────────────────────────────────────────────┤   │
│  │  ┌────────────────┐  ┌────────────────┐                   │   │
│  │  │   server.ts    │  │    routes/     │                   │   │
│  │  │  (API Entry)   │  │ ───────────── │                   │   │
│  │  └────────────────┘  │ • curriculum  │                   │   │
│  │                      │ • leaderboard │                   │   │
│  │  ┌────────────────┐  │ • auth        │                   │   │
│  │  │     config/    │  └────────────────┘                   │   │
│  │  │ ────────────── │                                       │   │
│  │  │ • database.ts  │                                       │   │
│  │  └────────────────┘                                       │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

## Flujo de Navegación

1. **Usuario no autenticado** → `LandingPage` con aurora background + selector de año.
2. **Registro/Login** → `AuthModal` (login con Google + apodo).
3. **Onboarding** → `OnboardingSuccess` (animación de bienvenida).
4. **App Principal**:
   - `Navbar` + `Sidebar` (panel colapsable).
   - Pestañas: Aprender, Ligas, Tienda, Consejero, Perfil.
5. **Lección** → `LessonModal` (motor de preguntas con combo streak).

## Tecnologías

| Capa | Tecnología |
|------|-----------|
| Frontend | React 19, Vite, TailwindCSS 4 |
| Estado | useState + localStorage (sin librerías externas) |
| Audio | Web Audio API (sintetizado) |
| Animaciones | CSS Keyframes + Tailwind Animations |
| Build | Vite (single-file bundle) |
| Backend | Node.js + Express (preparado para API futura) |
