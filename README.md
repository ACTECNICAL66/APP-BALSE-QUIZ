# APP-BALSE-QUIZ 🤖⚡

**Plataforma educativa interactiva y gamificada para el IPET 66**

PWA interactiva para que estudiantes del IPET 66 aprendan materias técnicas (1º a 7º año) con sistema de gamificación: combos, rachas, ligas, tienda y logros.

---

## 🚀 Características

- 🎮 **Sistema gamificado**: Combos, corazones, XP, tuercas doradas y ligas.
- 📚 **Currículo completo**: 7 años con materias técnicas, 5 niveles cada una.
- 🔒 **Progresión bloqueada**: Años se desbloquean secuencialmente.
- 🆓 **Modo examen libre**: Desbloquea todos los años.
- 🪟 **Diseño Liquid Glass**: Interfaz con vidrio esmerilado y aurora animada.
- 📱 **PWA**: Instalable en dispositivos móviles.
- 🎨 **Avatares temáticos**: 10 identidades del taller técnico.
- 🤖 **Chat IA con Volti**: Asistente virtual con Gemma 4 31B.

## 📁 Estructura del proyecto

```
APP-BALSE-QUIZ/
├── frontend/                          # Cliente React + Vite + TailwindCSS
│   ├── public/                        # Activos estáticos (imágenes, iconos)
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/                # Barra de navegación y menú lateral
│   │   │   │   ├── BarraNavegacion.tsx  → Navbar: año, combo, gemas, corazones
│   │   │   │   ├── BarraLateral.tsx     → Sidebar: menú de pestañas
│   │   │   │   └── FondoAurora.tsx      → AuroraBackground: fondo animado
│   │   │   ├── auth/                  # Autenticación y registro
│   │   │   │   ├── ModalAuth.tsx        → AuthModal: login/registro
│   │   │   │   └── ExitoRegistro.tsx    → OnboardingSuccess: bienvenida
│   │   │   ├── views/                 # Vistas principales de la app
│   │   │   │   ├── PaginaInicio.tsx     → LandingPage: pantalla de bienvenida
│   │   │   │   ├── VistaAprendizaje.tsx → LearnView: árbol de materias
│   │   │   │   ├── VistaLiga.tsx        → LeaderboardView: tabla de posiciones
│   │   │   │   ├── VistaTienda.tsx      → ShopView: tienda de objetos
│   │   │   │   ├── VistaConsejero.tsx   → AdvisorView: consejero técnico IA
│   │   │   │   └── VistaPerfil.tsx      → ProfileView: perfil del usuario
│   │   │   ├── lesson/               # Motor de preguntas
│   │   │   │   └── ModalLeccion.tsx     → LessonModal: preguntas y respuestas
│   │   │   ├── ui/                   # Componentes reutilizables
│   │   │   │   └── SistemaAvatar.tsx    → AvatarSystem: selección de avatar
│   │   │   ├── ChatIA.tsx              → AIChat: chat con Volti (Gemma 4 31B)
│   │   │   └── RenderizadorMath.tsx    → MathRenderer: renderizado LaTeX
│   │   ├── data/                     # Datos de la aplicación
│   │   │   ├── datosCurriculares.ts    → curriculumData: 7 años, materias, preguntas
│   │   │   └── recursosApp.ts          → appAssets: rutas de imágenes y recursos
│   │   ├── utils/                    # Utilidades
│   │   │   ├── sonido.ts               → sound: efectos de sonido
│   │   │   └── confeti.ts              → confetti: animación de celebración
│   │   ├── App.tsx                    → Estado global y ruteo por pestañas
│   │   ├── main.tsx                   → Punto de entrada React
│   │   └── index.css                  → Estilos Liquid Glass + Tailwind
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
├── backend/                          # Servidor Express (API futura)
│   ├── src/
│   │   ├── servidor.ts                 → server: configuración Express
│   │   ├── routes/
│   │   │   └── salud.ts                → health: endpoint de salud
│   │   └── config/
│   │       └── indice.ts               → index: configuración del servidor
│   ├── package.json
│   └── tsconfig.json
│
├── docs/
│   └── ARCHITECTURE.md
├── .gitignore
└── README.md
```

## 🧠 Explicación del código

### Frontend — `frontend/src/`

| Archivo | Función |
|---------|---------|
| **App.tsx** | Estado global (gemas, XP, corazones, combo). Persiste todo en localStorage. Renderiza la vista según `activeTab` y controla autenticación. |
| **BarraNavegacion.tsx** | Barra superior con selector de año, indicador de combo 🔥, gemas 🪙, corazones ❤️ y acceso al perfil. |
| **BarraLateral.tsx** | Menú lateral con pestañas: Aprender, Ligas, Tienda, Consejero IA, Perfil. Soporta colapso en escritorio y barra inferior en móvil. |
| **FondoAurora.tsx** | Fondo animado con ondas de luz tipo aurora boreal usando SVG y CSS. |
| **PaginaInicio.tsx** | Pantalla de landing con héroe, grid de años, tarjeta de Volti y botones de inicio/login. |
| **ModalAuth.tsx** | Modal de 3 pasos: datos de cuenta → selección de año → avatar. Soporta login local y mock de Google. |
| **ExitoRegistro.tsx** | Pantalla de bienvenida post-registro con confeti y mensaje motivacional. |
| **VistaAprendizaje.tsx** | Árbol de materias por año con nodos circulares, progreso por materia y bloqueo de años. |
| **ModalLeccion.tsx** | Motor de preguntas: múltiple opción, V/F, emparejamiento y completar. Maneja combo, corazones, XP y lecciones perfectas. |
| **VistaLiga.tsx** | Tabla de posiciones con 28 alumnos ficticios, filtro por año y podio top 3. |
| **VistaTienda.tsx** | Tienda con 4 objetos: recarga de corazones, escudo de racha, marco dorado e insignia tester. |
| **VistaConsejero.tsx** | Consejero técnico con tarjeta de ChipLabs 66, chat IA con Volti, cards de mejora y tips docentes. |
| **VistaPerfil.tsx** | Perfil con estadísticas, avatar, logros desbloqueados y objetos cosméticos equipados. |
| **ChatIA.tsx** | Chat con Volti usando OpenRouter + Gemma 4 31B. Sistema de prompt con contexto de la app. |
| **RenderizadorMath.tsx** | Renderiza notación matemática (fracciones, raíces, potencias, letras griegas) sin librerías externas. |
| **SistemaAvatar.tsx** | 10 avatares técnicos con emoji, nombre, descripción e imagen. |
| **datosCurriculares.ts** | Contiene tipos (Question, Lesson, SubjectUnit) y datos completos: 7 años, 28 materias, 139 lecciones, 155+ preguntas. |
| **recursosApp.ts** | Mapeo de rutas de imágenes de Volti (11 poses) y recursos de la app. |
| **sonido.ts** | Clase SoundEffects con Web Audio API para efectos: victoria, error, clic, combo, logro. |
| **confeti.ts** | Animación de confeti con canvas al completar lecciones o comprar en tienda. |

### Backend — `backend/src/`

| Archivo | Función |
|---------|---------|
| **servidor.ts** | Servidor Express con CORS, rutas placeholder y escucha en puerto configurable. |
| **salud.ts** | Endpoint `/api/health` que verifica el estado del servidor. |
| **indice.ts** | Configuración: puerto, origen CORS y entorno. |

## 🛠️ Instalación

```bash
git clone https://github.com/tu-usuario/APP-BALSE-QUIZ.git
cd APP-BALSE-QUIZ/frontend
npm install
npm run dev     # Desarrollo
npm run build   # Producción
```

## 🎮 Sistema de gamificación

- **🔥 Combo**: Respuestas correctas consecutivas multiplican XP.
- **❤️ Corazones**: 5 por nivel. Fallar cuesta uno. Recargar en tienda.
- **🪙 Tuercas doradas**: Moneda para tienda (15 por lección).
- **🏆 Ligas**: Tabla de posiciones por año.
- **👑 Logros**: 5 logros desbloqueables al completar lecciones.

## 📄 Licencia

Proyecto educativo para la comunidad del IPET 66, Córdoba, Argentina.
