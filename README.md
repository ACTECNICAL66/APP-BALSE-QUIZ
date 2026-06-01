# APP-BALSE-QUIZ 🤖⚡

**Plataforma educativa interactiva y gamificada para el IPET 66**

Una Progressive Web App (PWA) interactiva diseñada para que los estudiantes del IPET 66 aprendan y dominen las materias técnicas desde 1º hasta 7º año, con sistema de gamificación completo: combos, rachas, ligas, tienda y logros.

---

## 🚀 Características

- 🎮 **Sistema Gamificado**: Combos de aciertos, vidas (corazones), XP, gemas y ligas semanales.
- 📚 **Currículo completo IPET 66**: 7 años con materias técnicas específicas, cada una con 5 niveles de dificultad.
- 🔒 **Progresión bloqueada**: Los años se desbloquean secuencialmente al completar niveles.
- 🆓 **Modo Examen Libre**: Opción de desbloquear todos los años.
- 🪟 **Diseño Liquid Glass**: Interfaz moderna con efectos de vidrio esmerilado y aurora animada.
- 📱 **PWA**: Instalable en dispositivos móviles.
- 🎨 **Avatares temáticos**: 10 identidades visuales del taller técnico.
- 🔐 **Autenticación**: Login con Google o apodo personalizado.

## 📁 Estructura del Proyecto

```
APP-BALSE-QUIZ/
├── frontend/                   # Cliente React + Vite + TailwindCSS
│   ├── public/                 # Activos estáticos
│   ├── src/
│   │   ├── components/
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
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── backend/                    # Servidor Node.js (API futura)
│   ├── src/
│   │   ├── server.ts
│   │   ├── routes/
│   │   └── config/
│   ├── package.json
│   └── tsconfig.json
│
├── docs/
│   └── ARCHITECTURE.md
│
├── .gitignore
└── README.md
```

## 🛠️ Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/APP-BALSE-QUIZ.git
cd APP-BALSE-QUIZ

# Instalar dependencias del frontend
cd frontend
npm install

# Iniciar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## 🎯 Materias por Ciclo

| Ciclo | Años | Materias |
|-------|------|----------|
| **Básico** | 1º - 3º | Matemática, Taller General, Tecnología, Dibujo Técnico |
| **Superior** | 4º - 5º | Electrotecnia I/II, Informática I/II, Electrónica Analógica I/II, Electrónica Digital I/II, Matemática |
| **Avanzado** | 6º - 7º | Telecomunicaciones I/II, Electrónica Industrial I/II, Instalaciones Industriales I/II, Digitales III, Análisis Matemático |

## 🎮 Sistema de Gamificación

- **🔥 Combo de Aciertos**: Respuestas correctas consecutivas multiplican tu XP.
- **❤️ Vidas**: 5 corazones por nivel. Fallar cuesta uno.
- **🪙 Tuercas Doradas**: Moneda para la tienda (recargar vidas, escudos, marcos).
- **🏆 Ligas**: Compite semanalmente en tu año o en la general.
- **👑 Logros**: Desbloquea trofeos al alcanzar metas.

## 📄 Licencia

Proyecto educativo desarrollado para la comunidad del IPET 66, Córdoba, Argentina.
