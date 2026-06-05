export interface Question {
  id: string;
  type: 'multiple-choice' | 'match-pairs' | 'fill-blanks' | 'true-false';
  question: string;
  options?: string[];
  correctAnswer?: string | boolean;
  pairs?: { left: string; right: string }[];
  explanation: string;
}

export interface Lesson {
  id: string;
  level: number; // 1 to 5
  title: string;
  description: string;
  xp: number;
  questions: Question[];
}

export interface SubjectUnit {
  id: string;
  name: string;
  description: string;
  color: string;
  iconName: string; 
  lessons: Lesson[]; // Exactly 5 lessons per subject
}

export interface YearCurriculum {
  year: number;
  title: string;
  subtitle: string;
  subjects: SubjectUnit[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  maxProgress: number;
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  cost: number;
  icon: string;
  type: 'heart_refill' | 'streak_freeze' | 'avatar_frame' | 'outfit';
}

export const MASCOT_INFO = {
  name: "Voltio",
  role: "Mascota Oficial de la app",
  description: "Un pequeño robot de taller con engranajes, circuitos y mucho corazón. ¡Te acompañará a dominar la técnica con energía pura!",
  avatar: "🤖",
  quotes: [
    "¡El taller es donde la magia ocurre! Recuerda usar siempre tus antiparras.",
    "La Ley de Ohm es como el café en la mañana: fundamental para arrancar.",
    "Un error en un circuito no es un fracaso, es un paso más hacia el diseño perfecto.",
    "¡Racha perfecta de aciertos! Tus neuronas están más rápidas que un procesador cuántico."
  ]
};

export const ACHIEVEMENTS_DATA: Achievement[] = [
  { id: 'first_step', title: 'Técnico principiante', description: 'Completa tu primera actividad en IPET 66', icon: '🏆', maxProgress: 1 },
  { id: 'streak_5', title: 'Racha de fuego', description: 'Logra 5 aciertos seguidos en una lección', icon: '🔥', maxProgress: 5 },
  { id: 'perfect_lesson', title: 'Soldadura perfecta', description: 'Completa un nivel sin perder ni un corazón', icon: '⚡', maxProgress: 1 },
  { id: 'xp_500', title: 'Batería de alta carga', description: 'Acumula 500 puntos de XP', icon: '🔋', maxProgress: 500 },
  { id: 'year_master', title: 'Aprobación de ciclo', description: 'Completa todas las materias de un año', icon: '🎓', maxProgress: 1 },
];

export const SHOP_ITEMS: ShopItem[] = [
  { id: 'refill', name: 'Recarga total de corazones', description: 'Restaura tus 5 corazones para seguir practicando.', cost: 50, icon: '❤️', type: 'heart_refill' },
  { id: 'freeze', name: 'Escudo anti-fallo', description: 'Mantiene tu combo de racha intacto ante un error de respuesta.', cost: 150, icon: '🛡️', type: 'streak_freeze' },
  { id: 'frame_gold', name: 'Marco liquid gold', description: 'Un marco de vidrio líquido dorado brillante para tu perfil.', cost: 300, icon: '✨', type: 'avatar_frame' },
  { id: 'badge_tester', name: 'Insignia Tester', description: 'Logro demostrativo del dominio del Tester. Se muestra en tu perfil y avatar como insignia oficial.', cost: 500, icon: '/APP-BALSE-QUIZ/assets/badges/tester-badge.png', type: 'outfit' },
];

export const LEADERBOARD_USERS = [
  // 1er Año
  { id: '1-1', name: 'Tomás Álvarez', avatar: '🔌', xp: 890, isUser: false, year: 1 },
  { id: '1-2', name: 'Milagros López', avatar: '🧠', xp: 820, isUser: false, year: 1 },
  { id: '1-3', name: 'Benjamín Díaz', avatar: '➡️', xp: 740, isUser: false, year: 1 },
  { id: '1-4', name: 'Martina Ruiz', avatar: '⚙️', xp: 680, isUser: false, year: 1 },
  // 2do Año
  { id: '2-1', name: 'Agustín Pereyra', avatar: '⚡', xp: 1120, isUser: false, year: 2 },
  { id: '2-2', name: 'Abril Fernández', avatar: '🚧', xp: 1050, isUser: false, year: 2 },
  { id: '2-3', name: 'Santiago Gómez', avatar: '🔬', xp: 980, isUser: false, year: 2 },
  { id: '2-4', name: 'Catalina Moreno', avatar: '🔄', xp: 920, isUser: false, year: 2 },
  // 3er Año
  { id: '3-1', name: 'Thiago Castro', avatar: '💡', xp: 1450, isUser: false, year: 3 },
  { id: '3-2', name: 'Mía Sánchez', avatar: '🧲', xp: 1380, isUser: false, year: 3 },
  { id: '3-3', name: 'Bautista Vargas', avatar: '🔌', xp: 1290, isUser: false, year: 3 },
  { id: '3-4', name: 'Emma Rodríguez', avatar: '🧠', xp: 1180, isUser: false, year: 3 },
  // 4to Año
  { id: '4-1', name: 'Iñaki Medina', avatar: '➡️', xp: 1820, isUser: false, year: 4 },
  { id: '4-2', name: 'Valentina Ortega', avatar: '⚙️', xp: 1740, isUser: false, year: 4 },
  { id: '4-3', name: 'Lorenzo Herrera', avatar: '⚡', xp: 1650, isUser: false, year: 4 },
  { id: '4-4', name: 'Candela Giménez', avatar: '🚧', xp: 1520, isUser: false, year: 4 },
  // 5to Año
  { id: '5-1', name: 'Mateo Fernández', avatar: '🔬', xp: 2450, isUser: false, year: 5 },
  { id: '5-2', name: 'Luciana Romero', avatar: '🔄', xp: 2280, isUser: false, year: 5 },
  { id: '5-3', name: 'Santino Acosta', avatar: '💡', xp: 2150, isUser: false, year: 5 },
  { id: '5-4', name: 'Julieta Ponce', avatar: '🧲', xp: 1980, isUser: false, year: 5 },
  // 6to Año
  { id: '6-1', name: 'Valentina Gómez', avatar: '🔌', xp: 2890, isUser: false, year: 6 },
  { id: '6-2', name: 'Nicolás Silva', avatar: '🧠', xp: 2750, isUser: false, year: 6 },
  { id: '6-3', name: 'Renata Vega', avatar: '➡️', xp: 2610, isUser: false, year: 6 },
  { id: '6-4', name: 'Bruno Molina', avatar: '⚙️', xp: 2480, isUser: false, year: 6 },
  // 7mo Año
  { id: '7-1', name: 'Joaquín Herrera', avatar: '⚡', xp: 3420, isUser: false, year: 7 },
  { id: '7-2', name: 'Francesca Ruiz', avatar: '🚧', xp: 3280, isUser: false, year: 7 },
  { id: '7-3', name: 'Emilio Torres', avatar: '🔬', xp: 3120, isUser: false, year: 7 },
  { id: '7-4', name: 'Victoria Márquez', avatar: '🔄', xp: 2950, isUser: false, year: 7 },
  // Usuario actual
  { id: 'user', name: 'Tú (Estudiante IPET)', avatar: '🔌', xp: 0, isUser: true, year: 1 },
];

// Helper para crear 5 niveles estructurados por cada materia
export const CURRICULUM_DATA: YearCurriculum[] = [
  // 1ER AÑO
  {
    year: 1,
    title: "1er año - ciclo básico",
    subtitle: "Introducción a los talleres y fundamentos técnicos",
    subjects: [
      {
        id: "m-1-taller",
        name: "Taller general",
        description: "Normas de seguridad, herramientas de banco, carpintería y hojalatería.",
        color: "from-amber-500 to-orange-600",
        iconName: "Wrench",
        lessons: [
          {
            id: "1-tal-1", level: 1, title: "Seguridad y antiparras", description: "Normas de protección personal.", xp: 25,
            questions: [
              { id: "q1", type: "multiple-choice", question: "¿Cuál es el elemento de protección personal OBLIGATORIO al operar el taladro de banco o amoladora?", options: ["Antiparras de seguridad (Lentes)", "Guantes de lana gruesos", "Gorra con visera", "Auriculares con música"], correctAnswer: "Antiparras de seguridad (Lentes)", explanation: "Las antiparras protegen los ojos contra proyección de virutas. Nunca se usan guantes holgados en máquinas giratorias." },
              { id: "q2", type: "true-false", question: "Al trabajar en el taller, está permitido llevar anillos, pulseras o cadenas colgantes.", correctAnswer: false, explanation: "Falso. Todo objeto colgante puede engancharse en partes móviles y causar accidentes." }
            ]
          },
          {
            id: "1-tal-2", level: 2, title: "Instrumentos de medición", description: "El Calibre Pie de Rey y reglas metálicas.", xp: 30,
            questions: [
              { id: "q3", type: "multiple-choice", question: "¿En qué unidad del sistema internacional (SI) se expresan normalmente los planos de taller?", options: ["Milímetros (mm)", "Metros (m)", "Pulgadas (in)", "Centímetros (cm)"], correctAnswer: "Milímetros (mm)", explanation: "En dibujo mecánico y taller técnico en Argentina se trabaja bajo normas IRAM utilizando milímetros." },
              { id: "q4", type: "match-pairs", question: "Empareja cada herramienta con su función:", pairs: [{ left: "Calibre Pie de Rey", right: "Medición precisa de diámetros y profundidades" }, { left: "Morsa de banco", right: "Sujeción firme de piezas a trabajar" }, { left: "Escofina", right: "Desbaste de maderas en carpintería" }], explanation: "El calibre mide milímetros y fracciones; la morsa sujeta la pieza; la escofina desbasta madera." }
            ]
          },
          {
            id: "1-tal-3", level: 3, title: "Herramientas manuales", description: "Granete, martillos y sierras.", xp: 35,
            questions: [
              { id: "q5", type: "fill-blanks", question: "Para realizar una marca guía antes de agujerear un metal con el taladro, utilizamos un _______ de marcar y un martillo.", options: ["Punto", "Destornillador", "Formón", "Remache"], correctAnswer: "Punto", explanation: "El punto de marcar (granete) crea una muesca cónica para que la mecha no resbale." }
            ]
          },
          {
            id: "1-tal-4", level: 4, title: "Hojalatería y trazado", description: "Plegado y remachado de chapas.", xp: 40,
            questions: [
              { id: "q6", type: "true-false", question: "Al cortar chapa galvanizada con tijera de hojalatero, se deben utilizar guantes de descarne.", correctAnswer: true, explanation: "Verdadero. Los filos vivos de la chapa recién cortada pueden causar cortes profundos en las manos." }
            ]
          },
          {
            id: "1-tal-5", level: 5, title: "Evaluación de taller I", description: "Repaso integral de herramientas y seguridad.", xp: 50,
            questions: [
              { id: "q7", type: "multiple-choice", question: "¿Qué herramienta se utiliza para verificar ángulos rectos exactos de 90° en una pieza?", options: ["Escuadra de sombrero 90°", "Compás de punta", "Tenaza", "Destornillador plano"], correctAnswer: "Escuadra de sombrero 90°", explanation: "La escuadra de sombrero se apoya sobre el borde rectificado para comprobar perpendicularidad." }
            ]
          }
        ]
      },
      {
        id: "m-1-dibujo",
        name: "Dibujo técnico",
        description: "Normas IRAM, rotulado, caligrafía técnica y tipos de líneas.",
        color: "from-blue-500 to-indigo-600",
        iconName: "PencilRuler",
        lessons: [
          {
            id: "1-dib-1", level: 1, title: "Formatos normalizados", description: "Hojas formato A4 y A3.", xp: 25,
            questions: [
              { id: "qd1", type: "multiple-choice", question: "¿Cuáles son las dimensiones exactas de una hoja formato A4 según la norma IRAM?", options: ["210 x 297 mm", "200 x 300 mm", "216 x 279 mm", "250 x 350 mm"], correctAnswer: "210 x 297 mm", explanation: "El formato A4 mide exactamente 210 mm de ancho por 297 mm de alto." }
            ]
          },
          {
            id: "1-dib-2", level: 2, title: "Tipos de líneas IRAM", description: "Línea continua, trazos y ejes.", xp: 30,
            questions: [
              { id: "qd2", type: "match-pairs", question: "Asocia cada tipo de línea normalizada con su aplicación:", pairs: [{ left: "Línea continua gruesa", right: "Contornos y aristas visibles" }, { left: "Línea de trazos cortos", right: "Aristas y contornos ocultos" }, { left: "Línea de trazo y punto", right: "Ejes de simetría y de revolución" }], explanation: "Cada línea en Dibujo Técnico comunica una parte de la geometría de la pieza." }
            ]
          },
          {
            id: "1-dib-3", level: 3, title: "Rotulado y caligrafía", description: "Norma IRAM 4503.", xp: 35,
            questions: [
              { id: "qd3", type: "true-false", question: "El rótulo (cuadro de datos) se ubica siempre en el ángulo inferior derecho del plano.", correctAnswer: true, explanation: "Verdadero. Es el estándar para facilitar la lectura al archivar y doblar los planos." }
            ]
          },
          {
            id: "1-dib-4", level: 4, title: "Uso de escuadras", description: "Trazados a 30°, 45° y 60°.", xp: 40,
            questions: [
              { id: "qd4", type: "fill-blanks", question: "Al combinar una escuadra de 45° y una de 30°/60° apoyadas en la regla T, podemos trazar líneas inclinadas a _____ grados exactos (ej: 45 + 30).", options: ["75", "90", "10", "100"], correctAnswer: "75", explanation: "Sumando o restando los ángulos de ambas escuadras se obtienen múltiplos de 15°." }
            ]
          },
          {
            id: "1-dib-5", level: 5, title: "Evaluación de dibujo I", description: "Examen final de caligrafía e IRAM.", xp: 50,
            questions: [
              { id: "qd5", type: "multiple-choice", question: "¿Qué tipo de lápiz o mina se recomienda para trazar líneas guías muy tenues antes de repasar?", options: ["Duro (2H o 3H)", "Blando (2B o 4B)", "Marcador indeleble", "Crayón de cera"], correctAnswer: "Duro (2H o 3H)", explanation: "Los lápices H son duros y de trazo gris claro, ideales para líneas de construcción." }
            ]
          }
        ]
      },
      {
        id: "m-1-mate",
        name: "Matemática",
        description: "Operaciones con fracciones, geometría plana, razones y proporciones.",
        color: "from-emerald-500 to-teal-600",
        iconName: "Calculator",
        lessons: [
          {
            id: "1-mat-1", level: 1, title: "Fracciones en el taller", description: "Medidas en pulgadas fraccionales.", xp: 25,
            questions: [{ id: "qm1", type: "multiple-choice", question: "¿Cuánto es la mitad de 1/2 pulgada?", options: ["1/4 pulgada", "1/8 pulgada", "1 pulgada", "3/8 pulgada"], correctAnswer: "1/4 pulgada", explanation: "(1/2) / 2 = 1/4. Es una medida habitual en llaves fijas y bulones." }]
          },
          {
            id: "1-mat-2", level: 2, title: "Cálculo de perímetros", description: "Perímetros de chapas y perfiles.", xp: 30,
            questions: [{ id: "qm2", type: "true-false", question: "El perímetro de una chapa rectangular de 3m por 2m es igual a 10 metros.", correctAnswer: true, explanation: "Verdadero. Perímetro = 2x(3+2) = 10 metros." }]
          },
          {
            id: "1-mat-3", level: 3, title: "Escalas numéricas", description: "Escalas de ampliación y reducción.", xp: 35,
            questions: [{ id: "qm3", type: "multiple-choice", question: "Si en un plano a escala 1:2 una pieza metálica mide 50 mm, ¿cuánto mide la pieza real en el taller?", options: ["100 mm", "25 mm", "50 mm", "200 mm"], correctAnswer: "100 mm", explanation: "La escala 1:2 significa que el dibujo es la mitad del tamaño real. 50 mm x 2 = 100 mm." }]
          },
          {
            id: "1-mat-4", level: 4, title: "Cálculo de áreas", description: "Superficie de piezas planas.", xp: 40,
            questions: [{ id: "qm4", type: "fill-blanks", question: "Para calcular el área de un triángulo rectangular, multiplicamos la base por la altura y dividimos entre _____.", options: ["2", "3", "4", "5"], correctAnswer: "2", explanation: "Área = (base * altura) / 2." }]
          },
          {
            id: "1-mat-5", level: 5, title: "Examen de matemática I", description: "Problemas aplicados al taller.", xp: 50,
            questions: [{ id: "qm5", type: "multiple-choice", question: "Si 4 tornillos cuestan $120, ¿cuánto costarán 12 tornillos idénticos?", options: ["$360", "$240", "$480", "$300"], correctAnswer: "$360", explanation: "Por regla de tres directa: (12 * 120) / 4 = 360." }]
          }
        ]
      },
      {
        id: "m-1-tecno",
        name: "Tecnología",
        description: "Análisis de productos, materiales metálicos, plásticos y maderas.",
        color: "from-purple-500 to-pink-600",
        iconName: "Cpu",
        lessons: [
          {
            id: "1-tec-1", level: 1, title: "Propiedades mecánicas", description: "Dureza, ductilidad y maleabilidad.", xp: 25,
            questions: [{ id: "qt1", type: "multiple-choice", question: "¿Qué propiedad de un metal le permite deformarse formando hilos o alambres sin romperse (como el cobre)?", options: ["Ductilidad", "Maleabilidad", "Dureza", "Tenacidad"], correctAnswer: "Ductilidad", explanation: "La ductilidad forma alambres; la maleabilidad forma láminas o chapas." }]
          },
          {
            id: "1-tec-2", level: 2, title: "Materiales ferrosos", description: "Diferencia entre hierro fundido y acero.", xp: 30,
            questions: [{ id: "qt2", type: "true-false", question: "El acero es una aleación metálica compuesta principalmente por Hierro (Fe) y Carbono (C).", correctAnswer: true, explanation: "Verdadero. El porcentaje de carbono define las propiedades del acero." }]
          },
          {
            id: "1-tec-3", level: 3, title: "Maderas y carpintería", description: "Tipos de maderas y uniones.", xp: 35,
            questions: [{ id: "qt3", type: "fill-blanks", question: "Para unir dos piezas de madera de forma permanente en ensamble, se utiliza adhesivo vinílico comúnmente llamado _______ de carpintero.", options: ["Cola", "Silicona", "Resina", "Cemento"], correctAnswer: "Cola", explanation: "La cola vinílica penetra en los poros de la madera logrando una unión muy resistente." }]
          },
          {
            id: "1-tec-4", level: 4, title: "Plásticos y polímeros", description: "Termoplásticos vs Termoestables.", xp: 40,
            questions: [{ id: "qt4", type: "match-pairs", question: "Asocia cada tipo de plástico con su propiedad:", pairs: [{ left: "Termoplástico (PVC, PET)", right: "Se reblandece con el calor y puede reciclarse" }, { left: "Termoestable (Baquelita)", right: "No se derrite con el calor una vez curado" }], explanation: "Los termoplásticos se moldean repetidamente con calor." }]
          },
          {
            id: "1-tec-5", level: 5, title: "Análisis de producto", description: "Estudio morfológico y funcional.", xp: 50,
            questions: [{ id: "qt5", type: "multiple-choice", question: "En el análisis de un objeto técnico, el 'análisis funcional' responde a la pregunta:", options: ["¿Para qué sirve y cómo cumple su función?", "¿De qué material está hecho?", "¿Cuánto cuesta fabricarlo?", "¿Qué forma geométrica tiene?"], correctAnswer: "¿Para qué sirve y cómo cumple su función?", explanation: "El análisis funcional indaga el propósito y la utilidad del objeto." }]
          }
        ]
      }
    ]
  },

  // 2DO AÑO
    {
    year: 2,
    title: "2do año - ciclo básico",
    subtitle: "Taller eléctrico, dibujo técnico y matemática aplicada",
    subjects: [
      {
        id: "m-2-taller",
        name: "Taller: electricidad y laboratorio",
        description: "Código de colores, circuitos serie/paralelo/mixto, multímetro y leyes fundamentales.",
        color: "from-amber-500 to-orange-600",
        iconName: "Zap",
          lessons: [
            {
              id: "2-tal-1", level: 1, title: "Código de colores de resistencias", description: "Lectura del valor óhmico.", xp: 25,
              questions: [
                {
                  id: "q21", type: "multiple-choice",
                  question: "El código de color de una resistencia es: naranja, verde, marrón. ¿Qué valor indican estos colores?",
                  options: ["350 $\\Omega$", "650 $\\Omega$", "150 $\\Omega$", "530 $\\Omega$"],
                  correctAnswer: "350 $\\Omega$",
                  explanation: "Naranja = 3, Verde = 5, Marrón = ×10 → 35 × 10 = 350 $\\Omega$.",
                },
                {
                  id: "q21b", type: "multiple-choice",
                  question: "¿En qué magnitud eléctrica se mide la resistencia?",
                  options: ["Ohmios ($\\Omega$)", "Amperes (A)", "Volts (V)", "Watts (W)"],
                  correctAnswer: "Ohmios ($\\Omega$)",
                  explanation: "La resistencia eléctrica se mide en Ohmios, representados por la letra griega Omega ($\\Omega$).",
                },
              ]
            },
            {
              id: "2-tal-2", level: 2, title: "Circuitos: serie, paralelo y mixto", description: "Identificación de asociaciones.", xp: 30,
              questions: [
                {
                  id: "q22", type: "multiple-choice",
                  question: "¿Qué es un circuito mixto?",
                  options: ["Combinación de resistencias en serie y paralelo", "Resistencias conectadas en serie", "Resistencias conectadas en paralelo", "Un circuito sin resistencias"],
                  correctAnswer: "Combinación de resistencias en serie y paralelo",
                  explanation: "Un circuito mixto contiene resistencias conectadas tanto en serie como en paralelo dentro del mismo circuito.",
                },
                {
                  id: "q22b", type: "multiple-choice",
                  question: "En un circuito en serie, la corriente que circula por cada resistencia es:",
                  options: ["La misma en todas", "Diferente en cada una", "Siempre cero", "Alterna"],
                  correctAnswer: "La misma en todas",
                  explanation: "En serie solo hay un camino para los electrones, por lo tanto la corriente es idéntica en cada componente.",
                },
              ]
            },
            {
              id: "2-tal-3", level: 3, title: "El multímetro (Tester)", description: "Medición de magnitudes eléctricas.", xp: 35,
              questions: [
                {
                  id: "q23", type: "multiple-choice",
                  question: "¿A qué dispositivo electrónico corresponde la función de medir voltios, ohmios y amperios?",
                  options: ["Multímetro (tester)", "Osciloscopio", "Fuente de alimentación", "Generador de funciones"],
                  correctAnswer: "Multímetro (tester)",
                  explanation: "El multímetro es un instrumento que permite medir distintas magnitudes eléctricas como tensión (V), corriente (A) y resistencia ($\\Omega$).",
                },
              ]
            },
            {
              id: "2-tal-4", level: 4, title: "Ley de Ohm y potencia", description: "Relación entre V, I, R y P.", xp: 40,
              questions: [
                {
                  id: "q24", type: "multiple-choice",
                  question: "¿Qué relaciona la Ley de Ohm?",
                  options: ["Voltaje, corriente y resistencia", "Potencia y calor", "Tiempo y frecuencia", "Voltaje, corriente y potencia"],
                  correctAnswer: "Voltaje, corriente y resistencia",
                  explanation: "La Ley de Ohm establece que $V = I \\times R$, relacionando voltaje, intensidad de corriente y resistencia eléctrica.",
                },
              ]
            },
            {
              id: "2-tal-5", level: 5, title: "Evaluación de taller eléctrico", description: "Circuitos, mediciones y leyes fundamentales.", xp: 50,
              questions: [
                {
                  id: "q25", type: "multiple-choice",
                  question: "Las leyes de Kirchhoff ayudan a:",
                  options: ["Analizar circuitos complejos", "Crear componentes", "Reparar baterías", "Resolver placas"],
                  correctAnswer: "Analizar circuitos complejos",
                  explanation: "Las leyes de Kirchhoff (nodos y mallas) permiten analizar y calcular tensiones y corrientes en circuitos eléctricos complejos.",
                },
              ]
            },
          ]
      },
      {
        id: "m-2-dibujo",
        name: "Dibujo técnico II",
        description: "Normas IRAM/ISO, proyecciones ortogonales, acotaciones y símbolos electrónicos.",
        color: "from-blue-500 to-indigo-600",
        iconName: "Box",
          lessons: [
            {
              id: "2-dib-1", level: 1, title: "Normas IRAM/ISO en dibujo técnico", description: "Unificación de criterios de representación.", xp: 25,
              questions: [
                {
                  id: "qd21", type: "multiple-choice",
                  question: "¿Para qué sirven las normas IRAM/ISO en dibujo técnico?",
                  options: ["Para unificar la representación técnica", "Mejorar la estética de los planos industriales", "Reemplazar completamente el uso de instrumentos de dibujo técnico", "Para permitir que cada técnico utilice su propio sistema gráfico"],
                  correctAnswer: "Para unificar la representación técnica",
                  explanation: "Las normas IRAM/ISO buscan unificar criterios de representación para que cualquier plano técnico pueda ser entendido correctamente por distintas personas, empresas o países.",
                },
              ]
            },
            {
              id: "2-dib-2", level: 2, title: "Proyecciones ortogonales", description: "Vistas planas relacionadas.", xp: 30,
              questions: [
                {
                  id: "qd22", type: "multiple-choice",
                  question: "¿Qué función cumplen las proyecciones ortogonales?",
                  options: ["Representar un objeto mediante vistas planas relacionadas entre sí", "Generar una representación tridimensional artística del objeto", "Mostrar únicamente las dimensiones exteriores de la pieza", "Sustituir completamente las perspectivas isométricas"],
                  correctAnswer: "Representar un objeto mediante vistas planas relacionadas entre sí",
                  explanation: "Las proyecciones ortogonales permiten representar un objeto desde planta, alzada y perfil para entender completamente su forma.",
                },
              ]
            },
            {
              id: "2-dib-3", level: 3, title: "Acotaciones en planos", description: "Dimensiones y medidas normalizadas.", xp: 35,
              questions: [
                {
                  id: "qd23", type: "multiple-choice",
                  question: "¿Para qué sirven las acotaciones en un plano técnico?",
                  options: ["Definir las dimensiones necesarias para fabricar o interpretar una pieza", "Mejorar la presentación visual del plano", "Establecer el tipo de material utilizado en cada componente", "Diferenciar las vistas principales de las secundarias"],
                  correctAnswer: "Definir las dimensiones necesarias para fabricar o interpretar una pieza",
                  explanation: "Las acotaciones indican tamaños, distancias y medidas exactas necesarias para fabricar o interpretar correctamente una pieza.",
                },
              ]
            },
            {
              id: "2-dib-4", level: 4, title: "Símbolos en esquemas electrónicos", description: "Elementos normalizados de componentes.", xp: 40,
              questions: [
                {
                  id: "qd24", type: "multiple-choice",
                  question: "¿Qué representan los símbolos en un esquema electrónico?",
                  options: ["Elementos normalizados que identifican componentes y conexiones eléctricas", "Referencias gráficas para indicar profundidad y perspectiva", "Indicaciones exclusivas sobre el tamaño físico de los componentes", "Recursos gráficos para organizar visualmente el plano"],
                  correctAnswer: "Elementos normalizados que identifican componentes y conexiones eléctricas",
                  explanation: "Los símbolos electrónicos son representaciones normalizadas que permiten reconocer componentes como resistencias, capacitores y transistores en cualquier circuito.",
                },
              ]
            },
            {
              id: "2-dib-5", level: 5, title: "Evaluación de dibujo: normas y proyecciones", description: "Examen final de normas y simbolización.", xp: 50,
              questions: [
                {
                  id: "qd25", type: "multiple-choice",
                  question: "Las normas IRAM/ISO buscan unificar criterios de representación para que cualquier plano pueda ser entendido internacionalmente. ¿Cuál es su principal beneficio?",
                  options: ["Que cualquier técnico del mundo pueda interpretar el mismo plano sin ambigüedades", "Que los planos sean más coloridos", "Que solo se usen lápices HB", "Que no sea necesario usar escuadras"],
                  correctAnswer: "Que cualquier técnico del mundo pueda interpretar el mismo plano sin ambigüedades",
                  explanation: "La normalización garantiza que un dibujo técnico creado en Argentina sea interpretado correctamente en cualquier otro país sin necesidad de aclaraciones adicionales.",
                },
              ]
            },
          ]
      },
      {
        id: "m-2-mate",
        name: "Matemática II",
        description: "Números enteros negativos, proporcionalidad directa, racionales y resolución de ecuaciones.",
        color: "from-emerald-500 to-teal-600",
        iconName: "Calculator",
          lessons: [
            {
              id: "2-mat-1", level: 1, title: "Números enteros negativos en la vida cotidiana", description: "Aplicaciones de negativos en taller.", xp: 25,
              questions: [
                {
                  id: "qm21", type: "multiple-choice",
                  question: "¿Para qué sirven los números enteros negativos en la vida cotidiana?",
                  options: ["Para representar cantidades menores que cero (temperatura, deudas, profundidad)", "Solo para geometría", "Para medir gases", "Para escribir operaciones"],
                  correctAnswer: "Para representar cantidades menores que cero (temperatura, deudas, profundidad)",
                  explanation: "Los números enteros negativos permiten expresar situaciones cotidianas como temperaturas bajo cero, deudas económicas o altitudes por debajo del nivel del mar.",
                },
              ]
            },
            {
              id: "2-mat-2", level: 2, title: "Proporcionalidad directa", description: "Relación entre magnitudes.", xp: 30,
              questions: [
                {
                  id: "qm22", type: "multiple-choice",
                  question: "La relación de proporcionalidad directa indica que cuando una magnitud aumenta, la otra ____________ en la misma proporción.",
                  options: ["Aumenta", "Disminuye", "Desaparece", "Se divide"],
                  correctAnswer: "Aumenta",
                  explanation: "En una proporcionalidad directa, ambas magnitudes cambian en el mismo sentido: si una aumenta, la otra también aumenta proporcionalmente.",
                },
              ]
            },
            {
              id: "2-mat-3", level: 3, title: "Números racionales", description: "Fracciones y expresiones decimales.", xp: 35,
              questions: [
                {
                  id: "qm23", type: "multiple-choice",
                  question: "¿Cuál de las siguientes opciones describe correctamente a los números racionales?",
                  options: ["Son números que pueden expresarse como una fracción de números enteros", "Son números que solo pueden ser enteros positivos", "Son números que no pueden escribirse como fracción", "Son únicamente los números decimales infinitos no periódicos"],
                  correctAnswer: "Son números que pueden expresarse como una fracción de números enteros",
                  explanation: "Los números racionales incluyen enteros, fracciones y decimales finitos o periódicos que pueden expresarse como cociente de dos números enteros.",
                },
              ]
            },
            {
              id: "2-mat-4", level: 4, title: "Resolución de ecuaciones", description: "Despeje de variables.", xp: 40,
              questions: [
                {
                  id: "qm24", type: "fill-blanks",
                  question: "Al resolver la ecuación $2x + 10 = 30$, despejamos $x$ restando 10 y luego dividiendo entre ____.",
                  options: ["2", "10", "5", "20"],
                  correctAnswer: "2",
                  explanation: "$2x + 10 = 30 \\rightarrow 2x = 20 \\rightarrow x = 10$.",
                },
              ]
            },
            {
              id: "2-mat-5", level: 5, title: "Evaluación de matemática", description: "Aplicación de proporcionalidad y racionales.", xp: 50,
              questions: [
                {
                  id: "qm25", type: "multiple-choice",
                  question: "Si en el taller 3 metros de cable cuestan $450, ¿cuánto costarán 8 metros del mismo cable?",
                  options: ["$1200", "$900", "$1500", "$600"],
                  correctAnswer: "$1200",
                  explanation: "Por proporcionalidad directa: $450 \\div 3 = 150$ por metro; $150 \\times 8 = 1200$.",
                },
              ]
            },
          ]
      },
      {
        id: "m-2-tecno",
        name: "Tecnología II",
        description: "Relés, CI 555, capacitores, Ley de Watt y programación por bloques.",
        color: "from-purple-500 to-pink-600",
        iconName: "Cog",
          lessons: [
            {
              id: "2-tec-1", level: 1, title: "El relé como componente electrónico", description: "Activación por bobina.", xp: 25,
              questions: [
                {
                  id: "qt21", type: "multiple-choice",
                  question: "El relé es un componente electrónico que se activa cuando:",
                  options: ["La bobina recibe corriente", "Se calienta", "Se desconecta la batería", "Baja la resistencia"],
                  correctAnswer: "La bobina recibe corriente",
                  explanation: "El relé funciona mediante un electroimán (bobina) que al recibir corriente atrae un contacto conmutador.",
                },
              ]
            },
            {
              id: "2-tec-2", level: 2, title: "Circuitos integrados: CI 555", description: "Temporizador, oscilador y generador.", xp: 30,
              questions: [
                {
                  id: "qt22", type: "multiple-choice",
                  question: "El CI 555 se puede usar como:",
                  options: ["Todas las anteriores", "Temporizador", "Oscilador", "Generador de pulsos"],
                  correctAnswer: "Todas las anteriores",
                  explanation: "El CI 555 es un circuito integrado versátil que puede funcionar como temporizador, oscilador o generador de pulsos según su configuración.",
                },
              ]
            },
            {
              id: "2-tec-3", level: 3, title: "Capacitores: almacenamiento de energía", description: "Función principal del capacitor.", xp: 35,
              questions: [
                {
                  id: "qt23", type: "multiple-choice",
                  question: "¿Cuál es la función principal de un capacitor?",
                  options: ["Almacenar energía eléctrica", "Generar corriente", "Aumentar la resistencia", "Accionar motores"],
                  correctAnswer: "Almacenar energía eléctrica",
                  explanation: "Los capacitores almacenan energía en forma de campo eléctrico entre sus placas y la liberan cuando el circuito lo requiere.",
                },
              ]
            },
            {
              id: "2-tec-4", level: 4, title: "Ley de Watt", description: "Relación entre potencia, voltaje y corriente.", xp: 40,
              questions: [
                {
                  id: "qt24", type: "multiple-choice",
                  question: "¿Qué relaciona la Ley de Watt?",
                  options: ["Potencia, voltaje y corriente, creada por James Watt", "Una ley sobre temperatura creada por Alessandro Volta", "Una ley de movimiento creada por Watt", "Voltaje y resistencia únicamente"],
                  correctAnswer: "Potencia, voltaje y corriente, creada por James Watt",
                  explanation: "La Ley de Watt establece que $P = V \\times I$, donde P es potencia en watts, V es voltaje y I es corriente.",
                },
              ]
            },
            {
              id: "2-tec-5", level: 5, title: "Programación por bloques", description: "Instrucciones conectadas visualmente.", xp: 50,
              questions: [
                {
                  id: "qt25", type: "multiple-choice",
                  question: "Los bloques en la programación visual, ¿para qué se usan?",
                  options: ["Representan instrucciones conectadas para crear algoritmos", "Apagar circuitos", "Reiniciar la PC o notebooks", "Medir magnitudes"],
                  correctAnswer: "Representan instrucciones conectadas para crear algoritmos",
                  explanation: "La programación por bloques une visualmente instrucciones como piezas de rompecabezas para crear algoritmos sin escribir código textual.",
                },
              ]
            },
          ]
      },
    ]
  },
// 3ER AÑO
  {
    year: 3,
    title: "3er año - cierre de ciclo básico",
    subtitle: "Preparación para las especialidades técnicas superiores",
    subjects: [
      {
        id: "m-3-taller",
        name: "Taller: herrería y soldadura",
        description: "Soldadura por arco eléctrico (SMAW), forja y estructuras metálicas.",
        color: "from-amber-500 to-orange-600",
        iconName: "Flame",
        lessons: [
          {
            id: "3-tal-1", level: 1, title: "Soldadura por arco", description: "Equipos, masa y pinza portaelectrodo.", xp: 25,
            questions: [{ id: "q31", type: "multiple-choice", question: "¿Qué nos indica el número '6013' en un electrodo de soldadura de taller?", options: ["60.000 psi de resistencia a la tracción y apto para todas las posiciones", "60 mm de longitud y 13 mm de espesor", "60 amperios de mínimo y 13 de voltaje", "Código de fábrica sin significado"], correctAnswer: "60.000 psi de resistencia a la tracción y apto para todas las posiciones", explanation: "Norma AWS: 60 indica resistencia en miles de psi; el 1 indica todas las posiciones." }]
          },
          {
            id: "3-tal-2", level: 2, title: "Caretas fotolumínicas", description: "Protección contra rayos UV e infrarrojos.", xp: 30,
            questions: [{ id: "q32", type: "true-false", question: "Al soldar con arco eléctrico, los anteojos de sol comunes brindan protección suficiente contra el destello.", correctAnswer: false, explanation: "Falso. El arco emite rayos UV e infrarrojos intensos que requieren cristales DIN 10 o superior." }]
          },
          {
            id: "3-tal-3", level: 3, title: "Amperaje y espesores", description: "Regulación de la máquina soldadora.", xp: 35,
            questions: [{ id: "q33", type: "fill-blanks", question: "Para soldar caños estructurales de pared delgada (1.2mm) con electrodo de 2.5mm, regulamos la máquina a un amperaje aproximado de ______ A.", options: ["65", "200", "10", "300"], correctAnswer: "65", explanation: "Un amperaje muy alto perforaría el caño delgado." }]
          },
          {
            id: "3-tal-4", level: 4, title: "Limpieza de escoria", description: "Piqueta y cepillo de alambre.", xp: 40,
            questions: [{ id: "q34", type: "match-pairs", question: "Asocia cada defecto de soldadura con su causa:", pairs: [{ left: "Inclusión de escoria", right: "Falta de limpieza entre pasadas del cordón" }, { left: "Mordedura o socavación", right: "Amperaje excesivamente alto al soldar" }], explanation: "La técnica correcta exige pulso constante y limpieza." }]
          },
          {
            id: "3-tal-5", level: 5, title: "Evaluación de soldadura", description: "Examen final de Herrería y SMAW.", xp: 50,
            questions: [{ id: "q35", type: "multiple-choice", question: "¿Qué gas se genera y quema alrededor de la gota fundida en el electrodo revestido para protegerla del oxígeno?", options: ["Gases de combustión del revestimiento (atmósfera protectora)", "Argón puro", "Oxígeno puro", "Helio"], correctAnswer: "Gases de combustión del revestimiento (atmósfera protectora)", explanation: "El fundente exterior del electrodo crea una campana de gas y escoria protectora al arder." }]
          }
        ]
      },
      {
        id: "m-3-dibujo",
        name: "Dibujo técnico III",
        description: "Cortes, secciones, rayados y perspectivas isométricas.",
        color: "from-blue-500 to-indigo-600",
        iconName: "Layers",
        lessons: [
          {
            id: "3-dib-1", level: 1, title: "Perspectiva isométrica", description: "Representación 3D a 30 grados.", xp: 25,
            questions: [{ id: "qd31", type: "fill-blanks", question: "En perspectiva isométrica, los tres ejes de ancho, profundidad y altura forman ángulos iguales de ______ grados entre sí.", options: ["120", "90", "45", "60"], correctAnswer: "120", explanation: "En isometría los tres ejes forman 120° en el papel (líneas base inclinadas 30° respecto a la horizontal)." }]
          },
          {
            id: "3-dib-2", level: 2, title: "Perspectiva caballera", description: "Vista frontal en magnitud real.", xp: 30,
            questions: [{ id: "qd32", type: "true-false", question: "En la perspectiva caballera, el eje de profundidad se reduce a la mitad (1/2) para evitar la distorsión visual.", correctAnswer: true, explanation: "Verdadero. Al dibujar la profundidad a 45°, se aplica un coeficiente de reducción (normalmente 0.5)." }]
          },
          {
            id: "3-dib-3", level: 3, title: "Cortes y rayados", description: "Norma IRAM para indicar cortes interiores.", xp: 35,
            questions: [{ id: "qd33", type: "multiple-choice", question: "¿A qué inclinación y con qué tipo de línea se realiza el rayado (achurado) de una sección cortada en metal?", options: ["Línea continua fina a 45°", "Línea gruesa a 90°", "Línea de trazos a 30°", "Rayado a mano alzada"], correctAnswer: "Línea continua fina a 45°", explanation: "Las superficies seccionadas se rayan con trazo fino inclinado a 45°." }]
          },
          {
            id: "3-dib-4", level: 4, title: "Corte escalonado", description: "Planos de corte paralelos.", xp: 40,
            questions: [{ id: "qd34", type: "match-pairs", question: "Asocia el tipo de corte con su objetivo:", pairs: [{ left: "Corte Total", right: "El plano de corte atraviesa completamente la pieza de lado a lado" }, { left: "Medio Corte (Semicorte)", right: "Muestra la mitad exterior y la mitad interior en piezas simétricas" }], explanation: "Técnicas avanzadas para piezas mecánicas complejas." }]
          },
          {
            id: "3-dib-5", level: 5, title: "Evaluación de dibujo III", description: "Examen de perspectivas y cortes.", xp: 50,
            questions: [{ id: "qd35", type: "multiple-choice", question: "¿Con qué letras o símbolos se identifica el plano de corte en las vistas ortogonales?", options: ["Letras mayúsculas en los extremos de la flecha (Ej: A - A)", "Números romanos pequeños", "Colores llamativos", "No se identifica"], correctAnswer: "Letras mayúsculas en los extremos de la flecha (Ej: A - A)", explanation: "El corte se nombra con letras mayúsculas coincidentes en el plano de traza y en la vista cortada." }]
          }
        ]
      },
      {
        id: "m-3-mate",
        name: "Matemática III",
        description: "Sistemas de ecuaciones lineales, funciones y polinomios.",
        color: "from-emerald-500 to-teal-600",
        iconName: "Calculator",
        lessons: [
          {
            id: "3-mat-1", level: 1, title: "Sistemas lineales 2x2", description: "Métodos de igualación y sustitución.", xp: 25,
            questions: [{ id: "qm31", type: "multiple-choice", question: "En el sistema: X + Y = 10 y X - Y = 2, ¿cuáles son los valores de X e Y?", options: ["X=6, Y=4", "X=5, Y=5", "X=8, Y=2", "X=7, Y=3"], correctAnswer: "X=6, Y=4", explanation: "Sumando ambas ecuaciones: 2X = 12 => X = 6. Reemplazando: 6 + Y = 10 => Y = 4." }]
          },
          {
            id: "3-mat-2", level: 2, title: "Función lineal y pendiente", description: "La recta y = mx + b.", xp: 30,
            questions: [{ id: "qm32", type: "true-false", question: "La pendiente 'm' en la ecuación y = mx + b representa la inclinación de la recta respecto al eje horizontal.", correctAnswer: true, explanation: "Verdadero. Si m es positiva la recta asciende, si es negativa desciende." }]
          },
          {
            id: "3-mat-3", level: 3, title: "Operaciones con polinomios", description: "Suma y producto de expresiones algebraicas.", xp: 35,
            questions: [{ id: "qm33", type: "fill-blanks", question: "Al multiplicar (X + 2) por (X + 3), el resultado polinómico es X² + _____X + 6.", options: ["5", "6", "1", "4"], correctAnswer: "5", explanation: "X*X + 3X + 2X + 6 = X² + 5X + 6." }]
          },
          {
            id: "3-mat-4", level: 4, title: "Casos de factoreo", description: "Factor común y diferencia de cuadrados.", xp: 40,
            questions: [{ id: "qm34", type: "match-pairs", question: "Asocia cada expresión con su factorización:", pairs: [{ left: "X² - 9", right: "(X - 3)(X + 3)" }, { left: "2X² + 4X", right: "2X(X + 2)" }], explanation: "Factorizar simplifica el cálculo de estructuras complejas." }]
          },
          {
            id: "3-mat-5", level: 5, title: "Examen de matemática III", description: "Aplicaciones físicas y gráficas.", xp: 50,
            questions: [{ id: "qm35", type: "multiple-choice", question: "¿Qué representa el punto donde dos rectas se cortan en un gráfico cartesiano de un sistema 2x2?", options: ["La solución única del sistema de ecuaciones", "El origen de coordenadas", "Un error de cálculo", "El infinito"], correctAnswer: "La solución única del sistema de ecuaciones", explanation: "El punto de intersección (x, y) satisface simultáneamente ambas ecuaciones." }]
          }
        ]
      },
      {
        id: "m-3-tecno",
        name: "Tecnología III",
        description: "Generación de energía, motores térmicos y energías renovables.",
        color: "from-purple-500 to-pink-600",
        iconName: "BatteryCharging",
        lessons: [
          {
            id: "3-tec-1", level: 1, title: "Centrales eléctricas", description: "Hidroeléctricas, térmicas y nucleares.", xp: 25,
            questions: [{ id: "qt31", type: "match-pairs", question: "Empareja cada central con su fuente primaria de energía:", pairs: [{ left: "Central Hidroeléctrica", right: "Energía potencial y cinética del agua en embalses" }, { left: "Central Fotovoltaica", right: "Radiación solar directa sobre silicio" }, { left: "Central Eólica", right: "Fuerza del viento en aerogeneradores" }], explanation: "Las centrales transforman recursos naturales en corriente eléctrica." }]
          },
          {
            id: "3-tec-2", level: 2, title: "Ciclo de 4 tiempos", description: "Motores de combustión interna (Otto).", xp: 30,
            questions: [{ id: "qt32", type: "multiple-choice", question: "¿Cuál es el orden correcto de los 4 tiempos en un motor naftero de taller?", options: ["Admisión, Compresión, Expansión (Combustión), Escape", "Escape, Admisión, Expansión, Compresión", "Compresión, Escape, Admisión, Expansión", "Expansión, Escape, Compresión, Admisión"], correctAnswer: "Admisión, Compresión, Expansión (Combustión), Escape", explanation: "Es el ciclo de funcionamiento de los motores térmicos alternativos." }]
          },
          {
            id: "3-tec-3", level: 3, title: "Turbinas de vapor", description: "Ciclo Rankine en termoeléctricas.", xp: 35,
            questions: [{ id: "qt33", type: "true-false", question: "En una central nuclear, la fisión del uranio genera calor para hervir agua y mover turbinas de vapor.", correctAnswer: true, explanation: "Verdadero. El reactor atómico funciona esencialmente como una gran caldera térmica." }]
          },
          {
            id: "3-tec-4", level: 4, title: "Energías renovables", description: "Paneles solares y colectores térmicos.", xp: 40,
            questions: [{ id: "qt34", type: "fill-blanks", question: "Un panel solar fotovoltaico transforma los rayos de luz directamente en corriente eléctrica _______ (CC).", options: ["Continua", "Alterna", "Trifásica", "Estática"], correctAnswer: "Continua", explanation: "Las celdas fotovoltaicas generan corriente continua que luego un inversor pasa a alterna." }]
          },
          {
            id: "3-tec-5", level: 5, title: "Examen de tecnología III", description: "Matriz energética y eficiencia.", xp: 50,
            questions: [{ id: "qt35", type: "multiple-choice", question: "¿Qué máquina o elemento se utiliza en las centrales para elevar el voltaje de la corriente antes de enviarla por las torres de alta tensión?", options: ["Transformador elevador", "Batería de plomo", "Motor diésel", "Fusible cerámico"], correctAnswer: "Transformador elevador", explanation: "Se eleva el voltaje para minimizar las pérdidas de calor (Efecto Joule) en los cables largos." }]
          }
        ]
      }
    ]
  },

  // 4TO AÑO (Especialidad)
    {
    year: 4,
    title: "4to año - ciclo superior",
    subtitle: "Electrotecnia, informática y electrónica",
    subjects: [
      {
        id: "m-4-electrotecnia1",
        name: "Electrotecnia I",
        description: "Leyes de Ohm y Kirchhoff, vatímetro, capacitores e inducción electromagnética.",
        color: "from-red-500 to-amber-600",
        iconName: "Zap",
          lessons: [
            {
              id: "4-ele-1", level: 1, title: "Ley de Ohm", description: "Tensión, corriente y resistencia.", xp: 25,
              questions: [
                {
                  id: "q41", type: "multiple-choice",
                  question: "¿Cuál es la ley que relaciona tensión, corriente y resistencia?",
                  options: ["Ley de Ohm", "Ley de Kirchhoff", "Ley de Faraday", "Ley de Joule"],
                  correctAnswer: "Ley de Ohm",
                  explanation: "La Ley de Ohm establece que $V = I \\times R$, relacionando voltaje, intensidad de corriente y resistencia.",
                },
              ]
            },
            {
              id: "4-ele-2", level: 2, title: "Medición de potencia eléctrica", description: "El vatímetro.", xp: 30,
              questions: [
                {
                  id: "q42", type: "multiple-choice",
                  question: "¿Qué instrumento se utiliza para medir potencia eléctrica?",
                  options: ["Vatímetro", "Voltímetro", "Amperímetro", "Capacitor"],
                  correctAnswer: "Vatímetro",
                  explanation: "El vatímetro es el instrumento diseñado para medir potencia eléctrica activa en watts (W).",
                },
              ]
            },
            {
              id: "4-ele-3", level: 3, title: "Leyes de Kirchhoff", description: "Nodos y mallas.", xp: 35,
              questions: [
                {
                  id: "q43", type: "multiple-choice",
                  question: "¿Qué establece una de las leyes de Kirchhoff en un nodo?",
                  options: ["La suma de corrientes que entran es igual a la suma que salen", "La suma de voltajes es siempre cero", "La resistencia total es la suma de todas", "La corriente se divide por igual"],
                  correctAnswer: "La suma de corrientes que entran es igual a la suma que salen",
                  explanation: "La primera ley de Kirchhoff (Ley de Nodos) establece que la suma de las corrientes que entran a un nodo es igual a la suma de las corrientes que salen.",
                },
              ]
            },
            {
              id: "4-ele-4", level: 4, title: "Capacitores e inducción", description: "Almacenamiento de energía y campos.", xp: 40,
              questions: [
                {
                  id: "q44", type: "multiple-choice",
                  question: "¿Qué componente almacena energía en forma de campo eléctrico?",
                  options: ["Capacitor", "Resistor", "Bobina", "Transformador"],
                  correctAnswer: "Capacitor",
                  explanation: "Los capacitores almacenan energía electrostática en forma de campo eléctrico entre sus placas.",
                },
                {
                  id: "q44b", type: "multiple-choice",
                  question: "¿Cuál de las siguientes leyes explica la inducción electromagnética?",
                  options: ["Leyes de Faraday y Lenz", "Ley de Ohm", "Ley de Coulomb", "Ley de Joule"],
                  correctAnswer: "Leyes de Faraday y Lenz",
                  explanation: "Faraday descubrió que un campo magnético variable induce una corriente; Lenz determinó el sentido de esa corriente inducida.",
                },
              ]
            },
            {
              id: "4-ele-5", level: 5, title: "Evaluación de electrotecnia I", description: "Leyes fundamentales de la electricidad.", xp: 50,
              questions: [
                {
                  id: "q45", type: "multiple-choice",
                  question: "Si por un resistor de 10 $\\Omega$ circulan 2 A, ¿cuál es la potencia disipada?",
                  options: ["40 W", "20 W", "10 W", "5 W"],
                  correctAnswer: "40 W",
                  explanation: "$P = I^2 \\times R = 2^2 \\times 10 = 4 \\times 10 = 40$ W.",
                },
              ]
            },
          ]
      },
      {
        id: "m-4-info1",
        name: "Informática I",
        description: "Hardware (RAM, CPU), diagramas de flujo, lenguaje C y bucles.",
        color: "from-blue-600 to-cyan-500",
        iconName: "Terminal",
          lessons: [
            {
              id: "4-inf-1", level: 1, title: "Memoria RAM y CPU", description: "Componentes fundamentales de una PC.", xp: 25,
              questions: [
                {
                  id: "qi41", type: "multiple-choice",
                  question: "¿Cuál es la función principal de la memoria RAM?",
                  options: ["Almacenar datos y programas temporalmente mientras se usan", "Guardar archivos permanentes", "Ejecutar operaciones matemáticas", "Controlar dispositivos externos"],
                  correctAnswer: "Almacenar datos y programas temporalmente mientras se usan",
                  explanation: "La memoria RAM guarda información de manera temporal para que el procesador pueda acceder rápidamente mientras la computadora está funcionando.",
                },
                {
                  id: "qi41b", type: "multiple-choice",
                  question: "¿Cuál es la función principal del procesador (CPU) en una computadora?",
                  options: ["Ejecutar instrucciones y procesar datos", "Almacenar archivos permanentemente", "Mostrar imágenes en pantalla", "Conectar dispositivos externos"],
                  correctAnswer: "Ejecutar instrucciones y procesar datos",
                  explanation: "El procesador es el componente encargado de realizar cálculos y ejecutar las instrucciones necesarias para el funcionamiento de la computadora.",
                },
              ]
            },
            {
              id: "4-inf-2", level: 2, title: "Diagramas de flujo", description: "Simbología de algoritmos.", xp: 30,
              questions: [
                {
                  id: "qi42", type: "multiple-choice",
                  question: "¿Para qué se utilizan los símbolos y flechas en un diagrama de flujo?",
                  options: ["Para representar el paso a paso del algoritmo", "Para decorar el algoritmo", "Para guardar información en la memoria", "Para reiniciar el algoritmo"],
                  correctAnswer: "Para representar el paso a paso del algoritmo",
                  explanation: "Para hacer un diagrama de flujo se usan símbolos y flechas mostrando el paso a paso de un algoritmo.",
                },
              ]
            },
            {
              id: "4-inf-3", level: 3, title: "Lenguaje C: sintaxis básica", description: "Punto y coma y estructura.", xp: 35,
              questions: [
                {
                  id: "qi43", type: "multiple-choice",
                  question: "¿Qué símbolo se usa para finalizar una instrucción en lenguaje C?",
                  options: [";", ".", ":", ","],
                  correctAnswer: ";",
                  explanation: "En C, cada instrucción debe terminar con punto y coma (;) para indicar el final de la línea de código.",
                },
              ]
            },
            {
              id: "4-inf-4", level: 4, title: "Estructuras de repetición: bucles", description: "Repetir instrucciones varias veces.", xp: 40,
              questions: [
                {
                  id: "qi44", type: "multiple-choice",
                  question: "¿Qué estructura se utiliza para repetir instrucciones varias veces en un programa?",
                  options: ["Bucle", "Variable", "Clase", "Librería"],
                  correctAnswer: "Bucle",
                  explanation: "Un bucle permite ejecutar varias veces un bloque de instrucciones mientras se cumpla una condición determinada.",
                },
              ]
            },
            {
              id: "4-inf-5", level: 5, title: "Evaluación de informática I", description: "Conceptos de hardware y algoritmos.", xp: 50,
              questions: [
                {
                  id: "qi45", type: "multiple-choice",
                  question: "¿Qué tipo de dato usarías en C para almacenar un valor lógico de verdadero o falso?",
                  options: ["int", "float", "char", "double"],
                  correctAnswer: "int",
                  explanation: "En C no existe el tipo bool nativo; se usa int (0 = falso, cualquier otro valor = verdadero).",
                },
              ]
            },
          ]
      },
      {
        id: "m-4-analog1",
        name: "Electrónica analógica I",
        description: "Multímetro, diodos, Zener, transistores BJT y amplificación.",
        color: "from-emerald-600 to-green-500",
        iconName: "Activity",
          lessons: [
            {
              id: "4-ana-1", level: 1, title: "El multímetro digital", description: "Medición de tensión, corriente y resistencia.", xp: 25,
              questions: [
                {
                  id: "qa41", type: "multiple-choice",
                  question: "¿Qué instrumento se utiliza para medir tensión, corriente y resistencia eléctrica?",
                  options: ["Multímetro", "Osciloscopio", "Generador de funciones", "Transformador"],
                  correctAnswer: "Multímetro",
                  explanation: "El multímetro permite medir distintas magnitudes eléctricas como tensión, corriente y resistencia en un circuito.",
                },
              ]
            },
            {
              id: "4-ana-2", level: 2, title: "El diodo semiconductor", description: "Polarización y conducción.", xp: 30,
              questions: [
                {
                  id: "qa42", type: "multiple-choice",
                  question: "¿Cuál es la función principal de un diodo?",
                  options: ["Permitir el paso de corriente en un solo sentido", "Amplificar señales", "Almacenar energía", "Medir tensión"],
                  correctAnswer: "Permitir el paso de corriente en un solo sentido",
                  explanation: "El diodo conduce corriente cuando está polarizado correctamente (directa) y bloquea el paso en sentido contrario.",
                },
                {
                  id: "qa42b", type: "multiple-choice",
                  question: "¿Para qué se utiliza comúnmente un diodo Zener?",
                  options: ["Regular tensión (mantener voltaje constante)", "Generar sonido", "Aumentar corriente", "Encender motores"],
                  correctAnswer: "Regular tensión (mantener voltaje constante)",
                  explanation: "El diodo Zener se utiliza como regulador de voltaje manteniendo una tensión estable en el circuito cuando se polariza en inversa.",
                },
              ]
            },
            {
              id: "4-ana-3", level: 3, title: "Transistores BJT", description: "PNP y NPN.", xp: 35,
              questions: [
                {
                  id: "qa43", type: "multiple-choice",
                  question: "¿Qué tipos principales de transistor BJT existen?",
                  options: ["PNP y NPN", "AC y DC", "Serie y paralelo", "Digital y analógico"],
                  correctAnswer: "PNP y NPN",
                  explanation: "Los transistores BJT se clasifican principalmente en PNP y NPN según la disposición de sus materiales semiconductores.",
                },
              ]
            },
            {
              id: "4-ana-4", level: 4, title: "Amplificación de señales", description: "El transistor como amplificador.", xp: 40,
              questions: [
                {
                  id: "qa44", type: "multiple-choice",
                  question: "¿Qué componente se utiliza para amplificar señales eléctricas?",
                  options: ["Transistor", "Resistor", "Capacitor", "Fusible"],
                  correctAnswer: "Transistor",
                  explanation: "El transistor puede funcionar como amplificador, aumentando la intensidad de una señal eléctrica en un circuito.",
                },
              ]
            },
            {
              id: "4-ana-5", level: 5, title: "Evaluación de analógica I", description: "Semiconductores y componentes.", xp: 50,
              questions: [
                {
                  id: "qa45", type: "multiple-choice",
                  question: "¿Cuál es la caída de tensión típica de un diodo de silicio polarizado en directa?",
                  options: ["0.7 V", "0.3 V", "1.5 V", "5 V"],
                  correctAnswer: "0.7 V",
                  explanation: "Los diodos de silicio tienen una barrera de potencial de aproximadamente 0.7 V a temperatura ambiente cuando conducen en directa.",
                },
              ]
            },
          ]
      },
      {
        id: "m-4-digital1",
        name: "Electrónica digital I",
        description: "Álgebra de Boole, compuertas lógicas, mapas de Karnaugh y tablas de verdad.",
        color: "from-purple-600 to-indigo-500",
        iconName: "Binary",
          lessons: [
            {
              id: "4-dig-1", level: 1, title: "Tablas de verdad y compuertas", description: "Identificación de compuertas lógicas.", xp: 25,
              questions: [
                {
                  id: "qdi41", type: "multiple-choice",
                  question: "Observá la siguiente tabla de verdad: A=0,B=0→0; A=0,B=1→1; A=1,B=0→1; A=1,B=1→1. ¿Qué compuerta representa?",
                  options: ["OR", "AND", "NAND", "XOR"],
                  correctAnswer: "OR",
                  explanation: "La compuerta OR da salida 1 cuando al menos una entrada es 1. Solo da 0 cuando ambas entradas son 0.",
                },
              ]
            },
            {
              id: "4-dig-2", level: 2, title: "Mapas de Karnaugh", description: "Simplificación de funciones lógicas.", xp: 30,
              questions: [
                {
                  id: "qdi42", type: "multiple-choice",
                  question: "¿Para qué sirve un mapa de Karnaugh?",
                  options: ["Simplificar funciones lógicas", "Convertir números binarios a decimales", "Sumar señales eléctricas", "Amplificar voltaje"],
                  correctAnswer: "Simplificar funciones lógicas",
                  explanation: "Permite reducir la cantidad de compuertas necesarias en un circuito agrupando combinaciones de valores iguales, logrando circuitos más simples y económicos.",
                },
              ]
            },
            {
              id: "4-dig-3", level: 3, title: "Álgebra de Boole", description: "Comportamiento lógico de variables binarias.", xp: 35,
              questions: [
                {
                  id: "qdi43", type: "multiple-choice",
                  question: "¿Qué estudia el Álgebra de Boole?",
                  options: ["El comportamiento lógico de variables binarias", "Circuitos eléctricos de potencia", "Operaciones matemáticas con números complejos", "El movimiento de electrones"],
                  correctAnswer: "El comportamiento lógico de variables binarias",
                  explanation: "Se utiliza para analizar y diseñar circuitos digitales mediante operaciones lógicas como AND, OR y NOT. Es la base matemática de la electrónica digital.",
                },
              ]
            },
            {
              id: "4-dig-4", level: 4, title: "Compuertas lógicas y nivel lógico", description: "Aplicación de compuertas y estados.", xp: 40,
              questions: [
                {
                  id: "qdi44", type: "multiple-choice",
                  question: "¿Para qué se utilizan las compuertas lógicas?",
                  options: ["Para realizar operaciones lógicas en circuitos digitales", "Para almacenar energía", "Para aumentar corriente eléctrica", "Para medir tensión"],
                  correctAnswer: "Para realizar operaciones lógicas en circuitos digitales",
                  explanation: "Las compuertas lógicas procesan señales binarias de entrada y generan una salida según una operación lógica determinada.",
                },
                {
                  id: "qdi44b", type: "multiple-choice",
                  question: "¿Qué representa un '1' lógico en electrónica digital?",
                  options: ["Un estado alto o activado", "Ausencia de señal", "Estado indefinido", "Circuito desconectado"],
                  correctAnswer: "Un estado alto o activado",
                  explanation: "El '1' lógico representa normalmente la presencia de tensión o un nivel alto de voltaje. Indica que una señal está activada.",
                },
              ]
            },
            {
              id: "4-dig-5", level: 5, title: "Evaluación de digitales I", description: "Compuertas y simplificación.", xp: 50,
              questions: [
                {
                  id: "qdi45", type: "multiple-choice",
                  question: "¿Qué compuerta tiene la forma de una AND con un círculo en la salida (inversión)?",
                  options: ["NAND", "NOR", "NOT", "XOR"],
                  correctAnswer: "NAND",
                  explanation: "La compuerta NAND se reconoce porque tiene la forma de una AND y un pequeño círculo en la salida que representa la inversión lógica.",
                },
              ]
            },
          ]
      },
      {
        id: "m-4-mate4",
        name: "Matemática IV",
        description: "Números irracionales, complejos, radicales, combinatoria y logaritmación.",
        color: "from-teal-500 to-emerald-600",
        iconName: "Calculator",
          lessons: [
            {
              id: "4-mat4-1", level: 1, title: "Números irracionales", description: "Decimales infinitos no periódicos.", xp: 25,
              questions: [
                {
                  id: "qm41", type: "multiple-choice",
                  question: "¿Cuál de los siguientes números es irracional?",
                  options: ["$\\sqrt{3}$ (raíz de 3)", "0.75", "$\\frac{4}{5}$", "-2"],
                  correctAnswer: "$\\sqrt{3}$ (raíz de 3)",
                  explanation: "$\\sqrt{3}$ posee infinitas cifras decimales no periódicas, por eso es un número irracional.",
                },
              ]
            },
            {
              id: "4-mat4-2", level: 2, title: "Números complejos: unidad imaginaria", description: "La unidad imaginaria i.", xp: 30,
              questions: [
                {
                  id: "qm42", type: "multiple-choice",
                  question: "¿Qué representa la letra 'i' en números complejos?",
                  options: ["La unidad imaginaria ($i^2 = -1$)", "Un número natural", "Un número irracional", "Una variable cualquiera"],
                  correctAnswer: "La unidad imaginaria ($i^2 = -1$)",
                  explanation: "La unidad imaginaria cumple que $i^2 = -1$. En electrónica se usa 'j' para no confundir con corriente.",
                },
              ]
            },
            {
              id: "4-mat4-3", level: 3, title: "Propiedades de radicales", description: "Producto de raíces.", xp: 35,
              questions: [
                {
                  id: "qm43", type: "multiple-choice",
                  question: "¿Qué propiedad de los radicales permite escribir $\\sqrt{a} \\times \\sqrt{b} = \\sqrt{a \\times b}$?",
                  options: ["Propiedad del producto", "Propiedad distributiva", "Propiedad asociativa", "Propiedad del cociente"],
                  correctAnswer: "Propiedad del producto",
                  explanation: "La raíz de un producto es igual al producto de las raíces: $\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}$.",
                },
              ]
            },
            {
              id: "4-mat4-4", level: 4, title: "Combinatoria y logaritmación", description: "Conteo y exponentes.", xp: 40,
              questions: [
                {
                  id: "qm44", type: "multiple-choice",
                  question: "¿Qué técnica se utiliza para contar diferentes formas de ordenar elementos?",
                  options: ["Combinatoria", "Factorización", "Radicación", "Potenciación"],
                  correctAnswer: "Combinatoria",
                  explanation: "La combinatoria estudia las diferentes formas de ordenar y agrupar elementos sin tener que enumerarlos uno por uno.",
                },
                {
                  id: "qm44b", type: "multiple-choice",
                  question: "¿Qué operación permite encontrar el valor de un exponente?",
                  options: ["Logaritmación", "Radicación", "Potenciación", "Factorización"],
                  correctAnswer: "Logaritmación",
                  explanation: "Si $b^x = y$, entonces $\\log_b(y) = x$. La logaritmación permite hallar el exponente desconocido.",
                },
              ]
            },
            {
              id: "4-mat4-5", level: 5, title: "Evaluación de matemática IV", description: "Complejos, radicales y logaritmos.", xp: 50,
              questions: [
                {
                  id: "qm45", type: "multiple-choice",
                  question: "Al sumar dos números complejos $(3 + j4) + (2 + j2)$, el resultado es:",
                  options: ["$5 + j6$", "$6 + j8$", "$1 + j2$", "$5 + j2$"],
                  correctAnswer: "$5 + j6$",
                  explanation: "Se suman partes reales $(3+2)$ y partes imaginarias $(4+2)$, dando $5 + j6$.",
                },
              ]
            },
          ]
      },
    ]
  },
// 5TO AÑO
  {
    year: 5,
    title: "5to año - ciclo superior",
    subtitle: "Profundización: corriente alterna, microcontroladores y amplificadores",
    subjects: [
      {
        id: "m-5-electrotecnia2",
        name: "Electrotecnia II",
        description: "Corriente Alterna monofásica y trifásica, transformadores e impedancia.",
        color: "from-red-500 to-amber-600",
        iconName: "Zap",
        lessons: [
          {
            id: "5-ele-1", level: 1, title: "Onda senoidal de CA", description: "Frecuencia, período y valor eficaz (RMS).", xp: 25,
            questions: [{ id: "q51", type: "multiple-choice", question: "¿Cuál es el valor eficaz (RMS) aproximado de una toma de corriente alterna con pico máximo de 311 Voltios?", options: ["220 V", "311 V", "110 V", "380 V"], correctAnswer: "220 V", explanation: "V_rms = V_pico / √2 = 311 / 1.414 ≈ 220 V." }]
          },
          {
            id: "5-ele-2", level: 2, title: "Reactancia inductiva (X_L)", description: "Bobinas y desfase de corriente.", xp: 30,
            questions: [{ id: "q52", type: "true-false", question: "En un inductor (bobina) ideal en corriente alterna, la corriente eléctrica ATRASA 90° respecto al voltaje.", correctAnswer: true, explanation: "Verdadero. La autoinducción se opone a los cambios bruscos de corriente." }]
          },
          {
            id: "5-ele-3", level: 3, title: "Reactancia capacitiva (X_C)", description: "Condensadores en CA.", xp: 35,
            questions: [{ id: "q53", type: "fill-blanks", question: "En un capacitor en corriente alterna senoidal, la corriente _________ (adelanta / atrasa) 90 grados respecto a la tensión.", options: ["Adelanta", "Atrasa", "Se anula", "Queda en fase"], correctAnswer: "Adelanta", explanation: "El capacitor se llena de carga antes de que el voltaje alcance su máximo." }]
          },
          {
            id: "5-ele-4", level: 4, title: "Factor de potencia (cos φ)", description: "Potencia activa, reactiva y aparente.", xp: 40,
            questions: [{ id: "q54", type: "match-pairs", question: "Asocia cada tipo de potencia en CA con su unidad de medida:", pairs: [{ left: "Potencia Activa (P)", right: "Watts (W) - Trabajo mecánico o calor útil" }, { left: "Potencia Reactiva (Q)", right: "Volt-Amper Reactivo (VAr) - Magnetización de motores" }, { left: "Potencia Aparente (S)", right: "Volt-Amper (VA) - Potencia total de la red" }], explanation: "El triángulo de potencias es clave en el diseño industrial." }]
          },
          {
            id: "5-ele-5", level: 5, title: "Sistemas trifásicos", description: "Conexiones Estrella y Triángulo en 380V.", xp: 50,
            questions: [{ id: "q55", type: "multiple-choice", question: "En una red trifásica de 380V de línea (entre fases), ¿cuál es el voltaje de fase (entre cualquier fase y el Neutro)?", options: ["220 V", "380 V", "110 V", "500 V"], correctAnswer: "220 V", explanation: "V_fase = V_linea / √3 = 380 / 1.732 ≈ 220 V." }]
          }
        ]
      },
      {
        id: "m-5-info2",
        name: "Informática II",
        description: "Programación estructurada en C/C++ y estructuras de repetición.",
        color: "from-blue-600 to-cyan-500",
        iconName: "Code",
        lessons: [
          {
            id: "5-inf-1", level: 1, title: "Bucles iterativos: FOR", description: "Repetición controlada por contador.", xp: 25,
            questions: [{ id: "qi51", type: "fill-blanks", question: "Para repetir un bloque de código 10 veces en C++, utilizamos el bucle: _______ (int i=0; i<10; i++) { ... }", options: ["for", "while", "do", "switch"], correctAnswer: "for", explanation: "El bucle 'for' es idóneo para iteraciones con número exacto conocido." }]
          },
          {
            id: "5-inf-2", level: 2, title: "Bucle WHILE y DO-WHILE", description: "Repetición condicional.", xp: 30,
            questions: [{ id: "qi52", type: "true-false", question: "El bucle 'do-while' garantiza que el código de su interior se ejecute al menos UNA vez antes de evaluar la condición.", correctAnswer: true, explanation: "Verdadero. La condición se evalúa al final del bloque." }]
          },
          {
            id: "5-inf-3", level: 3, title: "Arreglos (arrays / vectores)", description: "Almacenamiento múltiple en memoria.", xp: 35,
            questions: [{ id: "qi53", type: "multiple-choice", question: "En un arreglo en C++ declarado como: int pines[5] = {2, 4, 6, 8, 10}; ¿qué valor se encuentra en la posición pines[2]?", options: ["6", "4", "2", "8"], correctAnswer: "6", explanation: "Los índices en C++ comienzan desde el cero (0:2, 1:4, 2:6)." }]
          },
          {
            id: "5-inf-4", level: 4, title: "Funciones en C++", description: "Modularización y retorno de valores (return).", xp: 40,
            questions: [{ id: "qi54", type: "match-pairs", question: "Asocia el tipo de retorno de la función con su significado:", pairs: [{ left: "void", right: "La función ejecuta una tarea pero no devuelve ningún valor" }, { left: "int", right: "La función retorna un número entero al finalizar" }], explanation: "Modular el código mejora su lectura y reutilización en robótica." }]
          },
          {
            id: "5-inf-5", level: 5, title: "Examen informática II", description: "Programación en C++ aplicada a sensores.", xp: 50,
            questions: [{ id: "qi55", type: "multiple-choice", question: "¿Qué función principal y obligatoria debe existir en todo programa de C++ para que el sistema operativo inicie su ejecución?", options: ["main()", "start()", "loop()", "setup()"], correctAnswer: "main()", explanation: "La función 'main()' es el punto de entrada estándar en C/C++." }]
          }
        ]
      },
      {
        id: "m-5-analog2",
        name: "Electrónica analógica II",
        description: "Transistores BJT, MOSFET y Amplificadores Operacionales.",
        color: "from-emerald-600 to-green-500",
        iconName: "Activity",
        lessons: [
          {
            id: "5-ana-1", level: 1, title: "El transistor BJT", description: "Base, Colector, Emisor y ganancia Beta (h_fe).", xp: 25,
            questions: [{ id: "qa51", type: "match-pairs", question: "Asocia cada estado del transistor NPN con su comportamiento en un circuito:", pairs: [{ left: "Región de Corte", right: "Actúa como un interruptor abierto (no hay corriente de base ni de colector)" }, { left: "Región de Saturación", right: "Actúa como un interruptor cerrado (máxima corriente entre colector y emisor)" }, { left: "Región Activa", right: "Amplifica señales analógicas proporcionales a la corriente de base" }], explanation: "El BJT se puede usar como llave de conmutación o amplificador lineal." }]
          },
          {
            id: "5-ana-2", level: 2, title: "Transistores MOSFET", description: "Puerta aislada y control por voltaje.", xp: 30,
            questions: [{ id: "qa52", type: "true-false", question: "A diferencia del BJT que se controla por corriente, el MOSFET se controla aplicando VOLTAJE en su pin de Puerta (Gate).", correctAnswer: true, explanation: "Verdadero. La alta impedancia del Gate hace que consuma casi nula corriente de control." }]
          },
          {
            id: "5-ana-3", level: 3, title: "Amplificador operacional", description: "El circuito integrado LM741 / TL081.", xp: 35,
            questions: [{ id: "qa53", type: "multiple-choice", question: "¿Qué característica principal posee la entrada de un Amplificador Operacional ideal?", options: ["Impedancia de entrada infinita (no consume corriente por sus entradas)", "Impedancia nula (cortocircuito)", "Ganancia cero", "Solo funciona en alterna"], correctAnswer: "Impedancia de entrada infinita (no consume corriente por sus entradas)", explanation: "Esto permite medir señales débiles de sensores sin distorsionarlas ni cargar el circuito." }]
          },
          {
            id: "5-ana-4", level: 4, title: "Configuración inversora", description: "Ganancia por lazo cerrado (A_v = - Rf / R_in).", xp: 40,
            questions: [{ id: "qa54", type: "fill-blanks", question: "Si en un op-amp inversor la resistencia de realimentación es 10k y la de entrada 1k, la ganancia de voltaje será de -______.", options: ["10", "100", "1", "5"], correctAnswer: "10", explanation: "A_v = - 10k / 1k = -10 (Invierte la fase de la onda)." }]
          },
          {
            id: "5-ana-5", level: 5, title: "Examen analógica II", description: "Comparadores e histéresis.", xp: 50,
            questions: [{ id: "qa55", type: "multiple-choice", question: "¿Qué ocurre en la salida de un op-amp funcionando como COMPARADOR si la entrada no inversora (+) tiene mayor voltaje que la inversora (-)?", options: ["La salida satura al voltaje positivo de la fuente (+Vcc)", "La salida es cero voltios", "La salida satura a -Vcc", "El integrado se quema"], correctAnswer: "La salida satura al voltaje positivo de la fuente (+Vcc)", explanation: "El comparador sin realimentación compara voltajes y conmuta a los extremos de su alimentación." }]
          }
        ]
      },
      {
        id: "m-5-digital2",
        name: "Electrónica digital II",
        description: "Lógica secuencial, Flip-Flops, Contadores y Registros.",
        color: "from-purple-600 to-indigo-500",
        iconName: "Cpu",
        lessons: [
          {
            id: "5-dig-1", level: 1, title: "Biestables RS", description: "Memorización de 1 bit con compuertas NOR.", xp: 25,
            questions: [{ id: "qdi51", type: "true-false", question: "En un Latch RS con compuertas NOR, activar simultáneamente las entradas Set=1 y Reset=1 genera un estado prohibido o indeterminado.", correctAnswer: true, explanation: "Verdadero. Al intentar encender y apagar a la vez, ambas salidas caen a 0 violando la regla Q y Q_negado." }]
          },
          {
            id: "5-dig-2", level: 2, title: "El flip-flop tipo D", description: "Transferencia síncrona por flanco de reloj.", xp: 30,
            questions: [{ id: "qdi52", type: "multiple-choice", question: "¿Cuál es el Flip-Flop más utilizado para construir registros de memoria o dividir la frecuencia de reloj a la mitad?", options: ["Flip-Flop tipo D", "Compuerta AND", "Multiplexor", "Decodificador"], correctAnswer: "Flip-Flop tipo D", explanation: "El biestable tipo D copia el dato de entrada a la salida en el instante exacto del flanco de reloj." }]
          },
          {
            id: "5-dig-3", level: 3, title: "Temporizador NE555", description: "Generador de pulsos astable y monoestable.", xp: 35,
            questions: [{ id: "qdi53", type: "match-pairs", question: "Asocia el modo del 555 con su aplicación práctica:", pairs: [{ left: "Modo Astable", right: "Genera un tren continuo de pulsos cuadrados (reloj para circuitos digitales)" }, { left: "Modo Monoestable", right: "Genera un único pulso temporizado al presionar un pulsador (temporizador de escalera)" }], explanation: "El circuito integrado más famoso de la electrónica." }]
          },
          {
            id: "5-dig-4", level: 4, title: "Contadores binarios", description: "Conexión en cascada de Flip-Flops JK.", xp: 40,
            questions: [{ id: "qdi54", type: "fill-blanks", question: "Un contador binario construido con 4 Flip-Flops en cascada puede contar desde el 0 hasta el número decimal _______ (1111 en binario).", options: ["15", "8", "16", "10"], correctAnswer: "15", explanation: "2⁴ = 16 estados posibles, numerados del 0 al 15." }]
          },
          {
            id: "5-dig-5", level: 5, title: "Examen de digitales II", description: "Registros de desplazamiento (Shift Registers).", xp: 50,
            questions: [{ id: "qdi55", type: "multiple-choice", question: "¿Para qué sirve un Registro de Desplazamiento como el 74HC595 en proyectos con Arduino?", options: ["Para expandir salidas digitales (Convierte datos serie a paralelo)", "Para medir voltaje analógico", "Para generar sonido", "Para calentar el circuito"], correctAnswer: "Para expandir salidas digitales (Convierte datos serie a paralelo)", explanation: "Con solo 3 pines del microcontrolador se pueden controlar 8 o más LEDs en paralelo." }]
          }
        ]
      },
      {
        id: "m-5-mate5",
        name: "Matemática V",
        description: "Trigonometría analítica, vectores y matrices.",
        color: "from-teal-500 to-emerald-600",
        iconName: "Calculator",
        lessons: [
          {
            id: "5-mat-1", level: 1, title: "Vectores en el plano", description: "Módulo, dirección y sentido.", xp: 25,
            questions: [{ id: "qm51", type: "true-false", question: "Dos vectores con el mismo módulo y dirección, pero con sentidos opuestos, se anulan mutuamente al sumarse.", correctAnswer: true, explanation: "Verdadero. Como dos fuerzas iguales tirando de una cuerda en sentidos opuestos." }]
          },
          {
            id: "5-mat-2", level: 2, title: "Operaciones matriciales", description: "Suma y producto de matrices.", xp: 30,
            questions: [{ id: "qm52", type: "multiple-choice", question: "Para poder multiplicar dos matrices A y B, ¿qué condición dimensional debe cumplirse?", options: ["El número de columnas de A debe ser igual al número de filas de B", "Ambas deben ser cuadradas 3x3", "El número de filas de A debe ser igual al de B", "No hay condiciones"], correctAnswer: "El número de columnas de A debe ser igual al número de filas de B", explanation: "Es la regla fundamental del producto de matrices." }]
          },
          {
            id: "5-mat-3", level: 3, title: "Determinantes", description: "Regla de Sarrus y cálculo de mallas.", xp: 35,
            questions: [{ id: "qm53", type: "fill-blanks", question: "El determinante de una matriz de 2x2 con filas (a, b) y (c, d) se calcula restando el producto cruzado: a*d - ______.", options: ["b*c", "a*c", "b*d", "a+b"], correctAnswer: "b*c", explanation: "Det = ad - bc. Es la base de la Regla de Cramer en resolución de mallas eléctricas." }]
          },
          {
            id: "5-mat-4", level: 4, title: "Sistemas de 3 mallas (3x3)", description: "Regla de Cramer en electrotecnia.", xp: 40,
            questions: [{ id: "qm54", type: "match-pairs", question: "Asocia cada concepto algebraico con su aplicación en circuitos:", pairs: [{ left: "Matriz de Resistencias", right: "Coeficientes que multiplican a las corrientes desconocidas de cada malla" }, { left: "Vector de Voltajes", right: "Términos independientes que representan a las fuentes de cada malla" }], explanation: "El álgebra lineal resuelve redes eléctricas de múltiples nodos y lazos." }]
          },
          {
            id: "5-mat-5", level: 5, title: "Examen de matemática V", description: "Aplicación a sistemas complejos.", xp: 50,
            questions: [{ id: "qm55", type: "multiple-choice", question: "¿Qué significa que el determinante principal de un sistema de ecuaciones de mallas sea exactamente igual a cero (Det = 0)?", options: ["Que el sistema no tiene solución única (ecuaciones dependientes o incompatibles)", "Que las corrientes son infinitas", "Que no hay resistencias", "Que todas las corrientes valen 1A"], correctAnswer: "Que el sistema no tiene solución única (ecuaciones dependientes o incompatibles)", explanation: "Si el determinante es cero, la matriz no se puede invertir para hallar una solución única." }]
          }
        ]
      }
    ]
  },

  // 6TO AÑO
    {
    year: 6,
    title: "6to año - ciclo superior avanzado",
    subtitle: "Telecomunicaciones, automatización industrial y digitales avanzados",
    subjects: [
      {
        id: "m-6-teleco1",
        name: "Telecomunicaciones I",
        description: "Longitud de onda, ruido térmico, modulación AM/FM, BLU, receptor superheterodino y antenas.",
        color: "from-indigo-500 to-blue-600",
        iconName: "Radio",
          lessons: [
            {
              id: "6-tel-1", level: 1, title: "Longitud de onda y frecuencia", description: "Relación entre $\\lambda$, c y f.", xp: 25,
              questions: [
                {
                  id: "qt61", type: "multiple-choice",
                  question: "¿Qué es la longitud de onda ($\\lambda$) en una señal de telecomunicaciones?",
                  options: ["La distancia entre dos crestas consecutivas de la onda ($\\lambda = c / f$)", "La altura máxima de la onda", "El tiempo que tarda un ciclo", "La potencia de la señal"],
                  correctAnswer: "La distancia entre dos crestas consecutivas de la onda ($\\lambda = c / f$)",
                  explanation: "La longitud de onda es la distancia física entre dos puntos equivalentes de una onda, calculada como $\\lambda = c / f$, donde c es la velocidad de la luz y f la frecuencia.",
                },
              ]
            },
            {
              id: "6-tel-2", level: 2, title: "Ruido térmico y SNR", description: "Relación señal/ruido en receptores.", xp: 30,
              questions: [
                {
                  id: "qt62", type: "multiple-choice",
                  question: "¿Qué es el ruido térmico (ruido blanco) y cómo afecta a la relación señal/ruido (SNR)?",
                  options: ["Es el ruido generado por la agitación molecular; a mayor temperatura, menor SNR", "Es el ruido de las antenas; no afecta al SNR", "Es la interferencia de radio FM; mejora el SNR", "Es el ruido de las fuentes conmutadas; duplica la SNR"],
                  correctAnswer: "Es el ruido generado por la agitación molecular; a mayor temperatura, menor SNR",
                  explanation: "El ruido térmico es producido por la agitación aleatoria de los electrones. Cuanto mayor es la temperatura, más ruido y peor relación señal/ruido.",
                },
              ]
            },
            {
              id: "6-tel-3", level: 3, title: "Modulación AM y BLU/SSB", description: "Índice de modulación y banda lateral única.", xp: 35,
              questions: [
                {
                  id: "qt63", type: "multiple-choice",
                  question: "En modulación AM, ¿qué ocurre si el índice de modulación supera el 100% (sobremodulación)?",
                  options: ["Se produce distorsión por sobremodulación (la envolvente se corta)", "La señal se amplifica al doble", "La portadora desaparece", "Aumenta la frecuencia"],
                  correctAnswer: "Se produce distorsión por sobremodulación (la envolvente se corta)",
                  explanation: "Cuando el índice de modulación supera el 100%, la envolvente de la señal AM se distorsiona, generando armónicos no deseados.",
                },
                {
                  id: "qt63b", type: "multiple-choice",
                  question: "¿Qué ventaja tiene la Banda Lateral Única (BLU/SSB) frente a AM convencional?",
                  options: ["Menor ancho de banda y mayor eficiencia de potencia", "Mayor calidad de sonido estéreo", "No necesita antena", "Funciona sin electricidad"],
                  correctAnswer: "Menor ancho de banda y mayor eficiencia de potencia",
                  explanation: "BLU/SSB transmite solo una banda lateral, ocupando la mitad del espectro y concentrando toda la potencia en la información útil.",
                },
              ]
            },
            {
              id: "6-tel-4", level: 4, title: "Receptor superheterodino y FM", description: "Principio de funcionamiento y pre-énfasis.", xp: 40,
              questions: [
                {
                  id: "qt64", type: "multiple-choice",
                  question: "Explica el principio del Receptor Superheterodino. ¿Qué rol cumple el oscilador local?",
                  options: ["Genera una frecuencia que se mezcla con la señal recibida para convertirla a una Frecuencia Intermedia (FI) fija", "Amplifica el audio directamente", "Sintoniza las estaciones manualmente", "Apaga el receptor cuando no hay señal"],
                  correctAnswer: "Genera una frecuencia que se mezcla con la señal recibida para convertirla a una Frecuencia Intermedia (FI) fija",
                  explanation: "El oscilador local genera una frecuencia que, al mezclarse con la señal recibida, produce una Frecuencia Intermedia fija que es más fácil de amplificar y filtrar.",
                },
                {
                  id: "qt64b", type: "multiple-choice",
                  question: "¿Para qué se utilizan las redes de pre-énfasis en FM y de-énfasis en el receptor?",
                  options: ["Para mejorar la relación señal/ruido amplificando las frecuencias altas antes de transmitir", "Para eliminar los graves", "Para aumentar la potencia de salida", "Para reducir el tamaño de la antena"],
                  correctAnswer: "Para mejorar la relación señal/ruido amplificando las frecuencias altas antes de transmitir",
                  explanation: "El pre-énfasis amplifica las frecuencias altas en el transmisor y el de-énfasis las atenúa en el receptor, mejorando la relación señal/ruido.",
                },
              ]
            },
            {
              id: "6-tel-5", level: 5, title: "Evaluación de telecomunicaciones I", description: "Antenas, detector de envuelta y figura de ruido.", xp: 50,
              questions: [
                {
                  id: "qt65", type: "multiple-choice",
                  question: "¿De qué depende la longitud física ideal de una antena dipolo de media onda ($\\lambda/2$)?",
                  options: ["De la frecuencia de operación ($L = c / 2f$)", "Del color del aislante", "Del material del mástil", "De la potencia del transmisor"],
                  correctAnswer: "De la frecuencia de operación ($L = c / 2f$)",
                  explanation: "La longitud de una antena dipolo de media onda es $L = \\lambda/2 = c / (2f)$. A mayor frecuencia, más corta la antena.",
                },
              ]
            },
          ]
      },
      {
        id: "m-6-industrial1",
        name: "Electrónica industrial I",
        description: "Tiristores, SCR, rectificadores controlados, fuentes SMPS, Flyback, IGBT y snubber.",
        color: "from-amber-600 to-yellow-500",
        iconName: "Cpu",
          lessons: [
            {
              id: "6-ind-1", level: 1, title: "Diodo de potencia vs SCR", description: "Tiristores y conmutación.", xp: 25,
              questions: [
                {
                  id: "qin61", type: "multiple-choice",
                  question: "¿Cuál es la principal diferencia operativa entre un diodo común de potencia y un Tiristor (SCR)?",
                  options: ["El SCR necesita un pulso en el Gate para activarse; el diodo conduce cuando está polarizado en directa", "El diodo necesita Gate; el SCR no", "Ambos funcionan igual", "El SCR solo conduce en CA"],
                  correctAnswer: "El SCR necesita un pulso en el Gate para activarse; el diodo conduce cuando está polarizado en directa",
                  explanation: "El diodo conduce automáticamente en directa. El SCR requiere un pulso de disparo en el Gate y una vez activado sigue conduciendo hasta que la corriente principal se anule.",
                },
                {
                  id: "qin61b", type: "multiple-choice",
                  question: "¿Por qué se daña un transistor si no se coloca un diodo de carrera libre en paralelo a una bobina?",
                  options: ["La bobina genera un pico de tensión inversa al desconectarse que puede superar la tensión máxima del transistor", "La bobina explota", "El transistor se sobrecalienta por la corriente continua", "El diodo evita que la bobina se queme"],
                  correctAnswer: "La bobina genera un pico de tensión inversa al desconectarse que puede superar la tensión máxima del transistor",
                  explanation: "Al cortar la corriente de una bobina, el campo magnético colapsa generando un pico de alta tensión (Ley de Lenz). El diodo flyback recircula esa energía protegiendo el transistor.",
                },
              ]
            },
            {
              id: "6-ind-2", level: 2, title: "Rectificadores controlados y fuentes SMPS", description: "Ángulo de disparo y fuentes conmutadas.", xp: 30,
              questions: [
                {
                  id: "qin62", type: "multiple-choice",
                  question: "En un rectificador controlado por tiristores, ¿qué es el 'ángulo de disparo' ($\\alpha$) y cómo modifica la tensión media?",
                  options: ["Es el retardo en la activación del SCR dentro del ciclo; a mayor $\\alpha$, menor tensión media", "Es la frecuencia de conmutación; no afecta la tensión", "Es el voltaje de alimentación", "Es la corriente de puerta"],
                  correctAnswer: "Es el retardo en la activación del SCR dentro del ciclo; a mayor $\\alpha$, menor tensión media",
                  explanation: "El ángulo de disparo $\\alpha$ es el tiempo que se espera antes de activar el SCR. Cuanto más se retrasa el disparo, menor es la tensión media entregada a la carga.",
                },
                {
                  id: "qin62b", type: "multiple-choice",
                  question: "¿Cuál es la ventaja fundamental de una Fuente Conmutada (SMPS) frente a una lineal?",
                  options: ["Mayor eficiencia (menos pérdidas) y menor peso/volumen", "Es más silenciosa", "Genera menos ruido electromagnético", "Es más simple de construir"],
                  correctAnswer: "Mayor eficiencia (menos pérdidas) y menor peso/volumen",
                  explanation: "Las SMPS conmutan a alta frecuencia, lo que permite transformadores más pequeños y menor disipación de calor, alcanzando eficiencias del 85-95%.",
                },
              ]
            },
            {
              id: "6-ind-3", level: 3, title: "Topología Flyback y VSI", description: "Fuentes conmutadas Flyback e inversores.", xp: 35,
              questions: [
                {
                  id: "qin63", type: "multiple-choice",
                  question: "En una fuente Flyback, ¿cuándo se almacena la energía y cuándo se entrega a la carga?",
                  options: ["Se almacena cuando el transistor conduce (en el primario); se entrega cuando el transistor corta (al secundario)", "Se almacena al cortar; se entrega al conducir", "Siempre está entregando energía", "Almacena en el secundario y entrega en el primario"],
                  correctAnswer: "Se almacena cuando el transistor conduce (en el primario); se entrega cuando el transistor corta (al secundario)",
                  explanation: "En Flyback, cuando el MOSFET conduce, la corriente circula por el primario almacenando energía. Al cortar, el campo colapsa y la energía se transfiere al secundario.",
                },
                {
                  id: "qin63b", type: "multiple-choice",
                  question: "¿Qué es un Inversor de Fuente de Tensión (VSI) y para qué se usa en la industria?",
                  options: ["Convierte CC en CA variable para controlar motores o inyectar energía a la red", "Convierte CA en CC para fuentes de alimentación", "Mide la velocidad del motor", "Protege contra cortocircuitos"],
                  correctAnswer: "Convierte CC en CA variable para controlar motores o inyectar energía a la red",
                  explanation: "Un VSI convierte corriente continua en alterna con frecuencia y voltaje variables, usado en variadores de velocidad (VFD) y sistemas solares fotovoltaicos.",
                },
              ]
            },
            {
              id: "6-ind-4", level: 4, title: "SVPWM y transistores IGBT", description: "Modulación vectorial y semiconductores híbridos.", xp: 40,
              questions: [
                {
                  id: "qin64", type: "multiple-choice",
                  question: "¿Qué es un IGBT y por qué combina las mejores características del MOSFET y BJT?",
                  options: ["Entrada aislada por voltaje (MOSFET) con alta capacidad de corriente de salida (BJT)", "Es un diodo de alta potencia", "Es un capacitor variable", "Es un relé de estado sólido"],
                  correctAnswer: "Entrada aislada por voltaje (MOSFET) con alta capacidad de corriente de salida (BJT)",
                  explanation: "El IGBT tiene la alta impedancia de entrada del MOSFET (control por voltaje) y la baja caída de saturación del BJT (alta corriente).",
                },
              ]
            },
            {
              id: "6-ind-5", level: 5, title: "Evaluación de electrónica industrial I", description: "Resistencia térmica y circuitos Snubber.", xp: 50,
              questions: [
                {
                  id: "qin65", type: "multiple-choice",
                  question: "En las hojas de datos de componentes de potencia, ¿qué representa la resistencia térmica juntura-carcasa ($R_{\\theta JC}$)?",
                  options: ["La oposición al flujo de calor entre el chip semiconductor y la carcasa del componente", "La resistencia eléctrica del componente", "La temperatura máxima de operación", "La capacidad de corriente"],
                  correctAnswer: "La oposición al flujo de calor entre el chip semiconductor y la carcasa del componente",
                  explanation: "$R_{\\theta JC}$ indica cuántos grados Celsius se eleva la juntura por cada watt disipado, permitiendo calcular el disipador térmico necesario.",
                },
              ]
            },
          ]
      },
      {
        id: "m-6-instalaciones1",
        name: "Instalaciones industriales I",
        description: "Protecciones termomagnéticas, diferencial, enclavamientos, Soft Starter, PLC y energía solar.",
        color: "from-emerald-600 to-teal-500",
        iconName: "ShieldCheck",
          lessons: [
            {
              id: "6-ins-1", level: 1, title: "Protección térmica vs magnética", description: "Interruptor termomagnético.", xp: 25,
              questions: [
                {
                  id: "qis61", type: "multiple-choice",
                  question: "¿Qué diferencia hay entre la protección térmica y la magnética dentro de un interruptor termomagnético?",
                  options: ["Térmica protege contra sobrecargas lentas; magnética contra cortocircuitos rápidos", "Térmica protege contra cortocircuitos; magnética contra sobrecargas", "Ambas protegen contra lo mismo", "Térmica desconecta instantáneamente; magnética es lenta"],
                  correctAnswer: "Térmica protege contra sobrecargas lentas; magnética contra cortocircuitos rápidos",
                  explanation: "La protección térmica usa un bimetal que se calienta lentamente con sobrecargas. La magnética usa una bobina que reacciona instantáneamente ante cortocircuitos.",
                },
                {
                  id: "qis61b", type: "multiple-choice",
                  question: "¿Cómo funciona un interruptor diferencial y por qué es vital para la seguridad?",
                  options: ["Compara la corriente de fase y neutro; desconecta si hay diferencia (fuga a tierra)", "Mide la temperatura del cable", "Regula el voltaje de la red", "Indica el consumo eléctrico"],
                  correctAnswer: "Compara la corriente de fase y neutro; desconecta si hay diferencia (fuga a tierra)",
                  explanation: "El interruptor diferencial (DISYUNTOR) compara la corriente que entra por fase con la que vuelve por neutro. Si hay diferencia, significa que hay fuga a tierra y desconecta.",
                },
              ]
            },
            {
              id: "6-ins-2", level: 2, title: "Enclavamientos y relés de protección", description: "Seguridad en circuitos de mando.", xp: 30,
              questions: [
                {
                  id: "qis62", type: "multiple-choice",
                  question: "Al diseñar la inversión de giro de un motor trifásico mediante contactores, ¿por qué es obligatorio hacer un 'enclavamiento eléctrico'?",
                  options: ["Para impedir que ambos contactores se activen simultáneamente (cortocircuito entre fases)", "Para ahorrar energía", "Para que el motor gire más rápido", "Para reducir el ruido"],
                  correctAnswer: "Para impedir que ambos contactores se activen simultáneamente (cortocircuito entre fases)",
                  explanation: "El enclavamiento eléctrico usa contactos NC cruzados que impiden que los dos contactores de inversión se cierren al mismo tiempo, evitando un cortocircuito.",
                },
                {
                  id: "qis62b", type: "multiple-choice",
                  question: "¿Qué daño evita un Relé de Falta de Fase en un motor trifásico?",
                  options: ["El sobrecalentamiento y destrucción del bobinado al funcionar con solo dos fases", "El exceso de velocidad", "La vibración excesiva", "El ruido eléctrico"],
                  correctAnswer: "El sobrecalentamiento y destrucción del bobinado al funcionar con solo dos fases",
                  explanation: "Si falta una fase, el motor sigue girando pero con sobrecorriente que quema los bobinados. El relé de falta de fase desconecta antes de que ocurra el daño.",
                },
              ]
            },
            {
              id: "6-ins-3", level: 3, title: "Arrancadores y conductores", description: "Soft Starter y normativas eléctricas.", xp: 35,
              questions: [
                {
                  id: "qis63", type: "multiple-choice",
                  question: "¿Qué ventaja ofrece un Arrancador Suave (Soft Starter) frente a un arranque directo?",
                  options: ["Reduce el pico de corriente de arranque y evita golpes mecánicos", "Duplica la velocidad del motor", "Elimina la necesidad de contactores", "Funciona sin cableado"],
                  correctAnswer: "Reduce el pico de corriente de arranque y evita golpes mecánicos",
                  explanation: "El Soft Starter incrementa la tensión gradualmente, evitando los picos de corriente y los golpes mecánicos del arranque directo.",
                },
                {
                  id: "qis63b", type: "multiple-choice",
                  question: "¿Para qué se utilizan los ábacos y tablas de conductores según normativas eléctricas?",
                  options: ["Para dimensionar correctamente la sección del cable según corriente y distancia", "Para decorar los planos", "Para medir la temperatura ambiente", "Para calcular el peso del cable"],
                  correctAnswer: "Para dimensionar correctamente la sección del cable según corriente y distancia",
                  explanation: "Las tablas de conductores (basadas en normas IRAM) indican la sección mínima de cable necesaria para una corriente y longitud dadas, evitando sobrecalentamientos.",
                },
              ]
            },
            {
              id: "6-ins-4", level: 4, title: "Automatismos y PLC", description: "Lógica de contactos NC/NA en Ladder.", xp: 40,
              questions: [
                {
                  id: "qis64", type: "multiple-choice",
                  question: "En automatismos por PLC (Ladder), ¿qué diferencia hay entre usar un contacto NA y NC en una parada de emergencia?",
                  options: ["NC (Normal Cerrado) es más seguro porque si se corta el cable, el circuito se abre y detiene la máquina", "NA siempre es más seguro", "No hay diferencia", "NC se usa solo para motores chicos"],
                  correctAnswer: "NC (Normal Cerrado) es más seguro porque si se corta el cable, el circuito se abre y detiene la máquina",
                  explanation: "Las paradas de emergencia usan contactos NC por seguridad: si el cable se corta, el circuito se abre y la máquina se detiene (falla segura).",
                },
              ]
            },
            {
              id: "6-ins-5", level: 5, title: "Evaluación de instalaciones I", description: "Energía solar y CADE SIMU.", xp: 50,
              questions: [
                {
                  id: "qis65", type: "multiple-choice",
                  question: "¿Qué diferencia fundamental existe entre un sistema solar fotovoltaico Off-Grid y On-Grid?",
                  options: ["Off-Grid usa baterías y no está conectado a la red; On-Grid inyecta excedentes a la red eléctrica", "Off-Grid es más caro; On-Grid es más barato", "Off-Grid usa paneles azules; On-Grid usa paneles negros", "No hay diferencia"],
                  correctAnswer: "Off-Grid usa baterías y no está conectado a la red; On-Grid inyecta excedentes a la red eléctrica",
                  explanation: "Off-Grid es autónomo con baterías. On-Grid está conectado a la red y puede vender excedentes según la Ley de Generación Distribuida.",
                },
              ]
            },
          ]
      },
      {
        id: "m-6-digital3",
        name: "Digitales III (microcontroladores)",
        description: "Registros TRIS, USART, PWM, ADC, programación C/C++ y analizador lógico.",
        color: "from-purple-600 to-pink-500",
        iconName: "Server",
          lessons: [
            {
              id: "6-dig3-1", level: 1, title: "Registros TRIS y memoria en microcontroladores", description: "Configuración de direcciones de datos.", xp: 25,
              questions: [
                {
                  id: "qdg61", type: "multiple-choice",
                  question: "¿Qué función cumplen los registros de configuración de dirección de datos (como TRIS en micros PIC)?",
                  options: ["Configuran cada pin como entrada o salida digital", "Almacenan el programa principal", "Generan la frecuencia de reloj", "Controlan la comunicación USB"],
                  correctAnswer: "Configuran cada pin como entrada o salida digital",
                  explanation: "El registro TRIS determina si cada pin del microcontrolador funciona como entrada (1) o como salida (0).",
                },
                {
                  id: "qdg61b", type: "multiple-choice",
                  question: "¿Qué diferencia hay entre la memoria Flash y la EEPROM en un microcontrolador?",
                  options: ["Flash almacena el programa (no volátil); EEPROM guarda datos que se modifican en ejecución", "Flash es volátil; EEPROM no", "Ambas almacenan lo mismo", "Flash es más lenta que EEPROM"],
                  correctAnswer: "Flash almacena el programa (no volátil); EEPROM guarda datos que se modifican en ejecución",
                  explanation: "La memoria Flash guarda el firmware del microcontrolador. La EEPROM permite leer/escribir datos variables que deben conservarse al apagar.",
                },
              ]
            },
            {
              id: "6-dig3-2", level: 2, title: "USART: comunicación serie", description: "Modo síncrono vs asíncrono.", xp: 30,
              questions: [
                {
                  id: "qdg62", type: "multiple-choice",
                  question: "En el módulo USART, ¿cuál es la diferencia clave entre modo Síncrono y Asíncrono?",
                  options: ["Síncrono usa una línea de reloj compartida; Asíncrono no necesita reloj (usa baud rate)", "Síncrono es más lento", "Asíncrono necesita más cables", "No hay diferencia"],
                  correctAnswer: "Síncrono usa una línea de reloj compartida; Asíncrono no necesita reloj (usa baud rate)",
                  explanation: "En modo síncrono, el maestro genera el reloj. En asíncrono, ambos dispositivos deben estar configurados a la misma velocidad (baud rate).",
                },
              ]
            },
            {
              id: "6-dig3-3", level: 3, title: "PWM y ADC", description: "Modulación por ancho de pulso y conversión analógica.", xp: 35,
              questions: [
                {
                  id: "qdg63", type: "multiple-choice",
                  question: "¿Cómo funciona la modulación PWM para simular una salida analógica usando un pin digital?",
                  options: ["Conmutando muy rápido entre 0 y 1; el promedio depende del ciclo de trabajo (duty cycle)", "Variando el voltaje máximo", "Usando una resistencia variable", "Conectando múltiples pines en paralelo"],
                  correctAnswer: "Conmutando muy rápido entre 0 y 1; el promedio depende del ciclo de trabajo (duty cycle)",
                  explanation: "PWM conmuta el pin entre HIGH y LOW a alta frecuencia. El valor promedio depende del duty cycle: 50% da 2.5V, 100% da 5V.",
                },
                {
                  id: "qdg63b", type: "multiple-choice",
                  question: "En un ADC de 10 bits, ¿cuántos niveles de cuantificación tiene y cómo se calcula el paso?",
                  options: ["1024 niveles; paso = V_ref / 1024", "256 niveles; paso = V_ref / 256", "10 niveles; paso = V_ref / 10", "1000 niveles; paso = V_ref / 1000"],
                  correctAnswer: "1024 niveles; paso = V_ref / 1024",
                  explanation: "Un ADC de 10 bits tiene $2^{10} = 1024$ niveles. El paso de cuantificación es $V_{ref} / 1024$ volts por división.",
                },
              ]
            },
            {
              id: "6-dig3-4", level: 4, title: "Programación C/C++ vs Assembler", description: "Ventajas del alto nivel.", xp: 40,
              questions: [
                {
                  id: "qdg64", type: "multiple-choice",
                  question: "¿Qué ventajas tiene programar microcontroladores en C/C++ comparado con Assembler?",
                  options: ["Mayor portabilidad, legibilidad y productividad; el compilador optimiza el código máquina", "Es más rápido siempre", "Ocupa menos memoria", "No necesita compilador"],
                  correctAnswer: "Mayor portabilidad, legibilidad y productividad; el compilador optimiza el código máquina",
                  explanation: "C/C++ permite escribir código más legible y portable entre distintos microcontroladores, delegando la optimización al compilador.",
                },
              ]
            },
            {
              id: "6-dig3-5", level: 5, title: "Evaluación de digitales III", description: "Analizador lógico, CCP y registro W.", xp: 50,
              questions: [
                {
                  id: "qdg65", type: "multiple-choice",
                  question: "¿Para qué sirve un Analizador Lógico y en qué situaciones es indispensable?",
                  options: ["Captura señales digitales en múltiples canales para analizar protocolos serie (I2C, SPI, UART)", "Mide voltajes analógicos de alta precisión", "Genera señales de audio", "Solda componentes SMD"],
                  correctAnswer: "Captura señales digitales en múltiples canales para analizar protocolos serie (I2C, SPI, UART)",
                  explanation: "El analizador lógico captura simultáneamente muchas señales digitales, ideal para depurar buses de comunicación donde un osciloscopio no basta.",
                },
              ]
            },
          ]
      },
    ]
  },
// 7MO AÑO (Graduación)
  {
    year: 7,
    title: "7mo año - prácticas profesionalizantes",
    subtitle: "El año cumbre: proyectos de graduación, PLC y automatización total",
    subjects: [
      {
        id: "m-7-teleco2",
        name: "Telecomunicaciones II",
        description: "Redes IP, telefonía celular, IoT (Internet de las Cosas) y satélites.",
        color: "from-indigo-600 to-blue-700",
        iconName: "Wifi",
        lessons: [
          {
            id: "7-tel-1", level: 1, title: "Arquitectura IoT y nube", description: "Sensores conectados a bases de datos.", xp: 25,
            questions: [{ id: "qt71", type: "multiple-choice", question: "¿Cuál es el protocolo de mensajería ligero basado en Publicar/Suscribir más utilizado en sistemas IoT (Internet de las Cosas)?", options: ["MQTT", "HTTP 1.0", "FTP", "SMTP"], correctAnswer: "MQTT", explanation: "MQTT es ideal para microcontroladores con pocos recursos y redes inalámbricas inestables." }]
          },
          {
            id: "7-tel-2", level: 2, title: "Direccionamiento IP", description: "IPv4 vs IPv6 y máscaras de subred.", xp: 30,
            questions: [{ id: "qt72", type: "true-false", question: "Una dirección IPv4 estándar (como 192.168.1.1) está formada por 32 bits divididos en 4 octetos.", correctAnswer: true, explanation: "Verdadero. Cada número separado por un punto puede valer entre 0 y 255 (8 bits)." }]
          },
          {
            id: "7-tel-3", level: 3, title: "Redes inalámbricas WiFi", description: "Frecuencias 2.4 GHz y 5 GHz en el ESP32.", xp: 35,
            questions: [{ id: "qt73", type: "fill-blanks", question: "El microcontrolador ESP32 muy utilizado en los talleres de 7mo año incluye conectividad inalámbrica WiFi y _______ de bajo consumo (BLE).", options: ["Bluetooth", "LoRa", "ZigBee", "NFC"], correctAnswer: "Bluetooth", explanation: "El ESP32 es un SoC dual-core que integra radiofrecuencia WiFi y Bluetooth en un solo chip." }]
          },
          {
            id: "7-tel-4", level: 4, title: "Tecnología LoRaWAN", description: "Largo alcance y bajo consumo.", xp: 40,
            questions: [{ id: "qt74", type: "match-pairs", question: "Asocia cada protocolo inalámbrico con su nicho de aplicación en IoT:", pairs: [{ left: "WiFi (IEEE 802.11)", right: "Alta velocidad de datos a corta distancia (streaming, cámaras)" }, { left: "LoRaWAN", right: "Largo alcance kilométrico con bajísimo consumo de batería (sensores agrícolas)" }], explanation: "Elegir el protocolo correcto es vital en los proyectos integradores de graduación." }]
          },
          {
            id: "7-tel-5", level: 5, title: "Examen telecomunicaciones II", description: "Sistemas de telemetría y seguridad.", xp: 50,
            questions: [{ id: "qt75", type: "multiple-choice", question: "¿Qué función cumple un 'Broker' (como Mosquitto) en una arquitectura IoT basada en MQTT?", options: ["Recibe todos los mensajes de los publicadores y los distribuye a los suscriptores correspondientes", "Genera electricidad para el router", "Apaga las antenas de noche", "Traduce código C++ a Python"], correctAnswer: "Recibe todos los mensajes de los publicadores y los distribuye a los suscriptores correspondientes", explanation: "El Broker actúa como la oficina de correos central que clasifica y enruta la telemetría." }]
          }
        ]
      },
      {
        id: "m-7-industrial2",
        name: "Electrónica industrial II",
        description: "Inversores de frecuencia (VFD), servomotores y robótica industrial.",
        color: "from-amber-600 to-yellow-600",
        iconName: "Cpu",
        lessons: [
          {
            id: "7-ind-1", level: 1, title: "Variadores VFD (inversores)", description: "Control de velocidad en motores asincrónicos.", xp: 25,
            questions: [{ id: "qin71", type: "multiple-choice", question: "¿Cómo logra variar la velocidad de giro de un motor trifásico un variador de frecuencia (VFD)?", options: ["Modificando simultáneamente el voltaje y la frecuencia de alimentación (Relación V/f constante)", "Colocando resistencias de alambre gigantes", "Frenando el eje mecánicamente", "Cambiando el aceite del cárter"], correctAnswer: "Modificando simultáneamente el voltaje y la frecuencia de alimentación (Relación V/f constante)", explanation: "La velocidad sincrónica depende directamente de la frecuencia eléctrica (n = 60 * f / p)." }]
          },
          {
            id: "7-ind-2", level: 2, title: "Servomotores y encoders", description: "Lazo cerrado de posicionamiento exacto.", xp: 30,
            questions: [{ id: "qin72", type: "true-false", question: "Un servomotor industrial requiere de un sensor de retroalimentación (Encoder o Resolver) para informar al driver la posición exacta de su eje.", correctAnswer: true, explanation: "Verdadero. El control de lazo cerrado corrige instantáneamente los errores de posición en robótica y tornos CNC." }]
          },
          {
            id: "7-ind-3", level: 3, title: "Transistores IGBT", description: "El corazón de los variadores modernos.", xp: 35,
            questions: [{ id: "qin73", type: "fill-blanks", question: "El semiconductor híbrido de potencia utilizado en los inversores VFD se conoce por sus siglas en inglés _______ (Insulated Gate Bipolar Transistor).", options: ["IGBT", "MOSFET", "TRIAC", "SCR"], correctAnswer: "IGBT", explanation: "Combina la entrada aislada por voltaje de un MOSFET con la gran capacidad de corriente de salida de un BJT." }]
          },
          {
            id: "7-ind-4", level: 4, title: "Robótica industrial: ejes", description: "Brazos antropomórficos y SCARA.", xp: 40,
            questions: [{ id: "qin74", type: "match-pairs", question: "Asocia cada tipo de robot industrial con su geometría de movimiento:", pairs: [{ left: "Robot Articulado (6 ejes)", right: "Brazo flexible que imita el hombro, codo y muñeca humana para soldar y pintar" }, { left: "Robot SCARA", right: "Brazo horizontal de alta rigidez vertical, ultra veloz para tareas de montaje de chips en PCB" }], explanation: "Tecnología punta en las líneas de ensamblaje automotriz y electrónica." }]
          },
          {
            id: "7-ind-5", level: 5, title: "Examen industrial II", description: "Sistemas de frenado dinámico y regenerativo.", xp: 50,
            questions: [{ id: "qin75", type: "multiple-choice", question: "¿Qué ocurre en un variador VFD con 'frenado regenerativo' cuando un ascensor cargado baja y el motor actúa como generador?", options: ["La energía cinética devuelta se inyecta de regreso a la red eléctrica o se disipa en resistencias de frenado", "El variador explota por sobrevoltaje", "El motor gira al revés indefinidamente", "Se queman los fusibles"], correctAnswer: "La energía cinética devuelta se inyecta de regreso a la red eléctrica o se disipa en resistencias de frenado", explanation: "Aprovechar la energía de frenado de grandes inercias mejora drásticamente la eficiencia industrial." }]
          }
        ]
      },
      {
        id: "m-7-instalaciones2",
        name: "Instalaciones industriales II",
        description: "Autómatas Programables (PLC), Neumática, Electroneumática y SCADA.",
        color: "from-emerald-600 to-teal-600",
        iconName: "Settings",
        lessons: [
          {
            id: "7-ins-1", level: 1, title: "PLC: arquitectura de hardware", description: "CPU, módulos I/O y fuentes de 24V CC.", xp: 25,
            questions: [{ id: "qis71", type: "multiple-choice", question: "¿Qué voltaje estándar y tipo de corriente se utiliza mayoritariamente en las entradas digitales de los sensores conectados a un PLC industrial?", options: ["24 Voltios de Corriente Continua (24V CC)", "220 Voltios Alternos", "5 Voltios", "380 Voltios Trifásicos"], correctAnswer: "24 Voltios de Corriente Continua (24V CC)", explanation: "El estándar industrial de 24V CC ofrece gran inmunidad al ruido y seguridad ante contactos accidentales." }]
          },
          {
            id: "7-ins-2", level: 2, title: "Programación en Ladder", description: "Contactos NA, NC y bobinas de salida.", xp: 30,
            questions: [{ id: "qis72", type: "match-pairs", question: "Asocia el símbolo de programación Ladder (Escalera) con su elemento equivalente en el tablero:", pairs: [{ left: "-[ ]- Contacto Normalmente Abierto", right: "Pulsador de arranque o sensor sin activar" }, { left: "-[ / ]- Contacto Normalmente Cerrado", right: "Pulsador de parada de emergencia o fin de carrera NC" }, { left: "-( )- Bobina de Salida", right: "Relé, contactor o electroválvula neumática" }], explanation: "El lenguaje Ladder imita esquemas de relés para facilitar la transición de los técnicos electricistas." }]
          },
          {
            id: "7-ins-3", level: 3, title: "Circuitos de enclavamiento", description: "Auto-retención (memoria) en Ladder.", xp: 35,
            questions: [{ id: "qis73", type: "fill-blanks", question: "Para mantener activada una salida en el PLC después de soltar el botón de marcha, colocamos un contacto de la propia salida en paralelo llamado _______ o auto-retención.", options: ["Enclavamiento", "Inversor", "Bypass", "Cortocircuito"], correctAnswer: "Enclavamiento", explanation: "El enclavamiento en paralelo permite que la bobina siga energizada hasta pulsar la parada." }]
          },
          {
            id: "7-ins-4", level: 4, title: "Electroneumática industrial", description: "Cilindros y electroválvulas 5/2 monostables.", xp: 40,
            questions: [{ id: "qis74", type: "true-false", question: "Una electroválvula 5/2 monostable con retorno por muelle regresa automáticamente a su posición original al cortar la corriente de su solenoide.", correctAnswer: true, explanation: "Verdadero. El resorte interior empuja la corredera garantizando una posición de reposo segura." }]
          },
          {
            id: "7-ins-5", level: 5, title: "Examen instalaciones II", description: "Temporizadores TON y contadores CTU en PLC.", xp: 50,
            questions: [{ id: "qis75", type: "multiple-choice", question: "¿Qué hace un temporizador tipo TON (Timer On Delay) en un programa de PLC?", options: ["Retarda la activación de su contacto de salida un tiempo prefijado desde que recibe señal en su entrada", "Corta la energía de todo el PLC", "Cuenta piezas en una cinta transportadora", "Mide la presión del compresor neumático"], correctAnswer: "Retarda la activación de su contacto de salida un tiempo prefijado desde que recibe señal en su entrada", explanation: "El TON (retardo a la conexión) es clave para secuencias de arranque escalonado de motores." }]
          }
        ]
      },
      {
        id: "m-7-analisis2",
        name: "Análisis matemático avanzado",
        description: "Ecuaciones diferenciales, Transformada de Laplace y control de lazo cerrado.",
        color: "from-rose-600 to-red-700",
        iconName: "TrendingUp",
        lessons: [
          {
            id: "7-ana-1", level: 1, title: "Ecuaciones diferenciales", description: "Modelado de sistemas dinámicos RLC.", xp: 25,
            questions: [{ id: "qam71", type: "true-false", question: "Una ecuación diferencial relaciona una función matemática desconocida con sus propias derivadas en el tiempo.", correctAnswer: true, explanation: "Verdadero. Describe sistemas donde el ritmo de cambio depende del estado actual del sistema." }]
          },
          {
            id: "7-ana-2", level: 2, title: "Transformada de Laplace", description: "Paso del dominio del tiempo 't' a la frecuencia compleja 's'.", xp: 30,
            questions: [{ id: "qam72", type: "multiple-choice", question: "¿Qué enorme simplificación nos brinda la Transformada de Laplace al analizar circuitos eléctricos y control?", options: ["Convierte ecuaciones diferenciales complejas del tiempo en ecuaciones algebraicas sencillas (multiplicar o dividir por 's')", "Elimina las resistencias del circuito", "Hacer que el voltaje sea infinito", "Enfriar los transistores"], correctAnswer: "Convierte ecuaciones diferenciales complejas del tiempo en ecuaciones algebraicas sencillas (multiplicar o dividir por 's')", explanation: "Laplace convierte las derivadas en multiplicaciones por 's' y las integrales en divisiones por 's'." }]
          },
          {
            id: "7-ana-3", level: 3, title: "Función de transferencia (G_s)", description: "Relación entre Salida y Entrada en el plano 's'.", xp: 35,
            questions: [{ id: "qam73", type: "fill-blanks", question: "En un sistema de control, la Función de Transferencia G(s) se define como el cociente entre la transformada de la _________ (Salida / Entrada) y la transformada de la entrada.", options: ["Salida", "Frecuencia", "Masa", "Tensión"], correctAnswer: "Salida", explanation: "G(s) = Y(s) / U(s). Resume el comportamiento dinámico interno de una planta o motor." }]
          },
          {
            id: "7-ana-4", level: 4, title: "Estabilidad de sistemas: polos", description: "Raíces del denominador en el semiplano izquierdo.", xp: 40,
            questions: [{ id: "qam74", type: "match-pairs", question: "Asocia la ubicación de los Polos en el plano complejo 's' con la estabilidad del sistema:", pairs: [{ left: "Polos en el semiplano izquierdo (Re < 0)", right: "Sistema Estable (las oscilaciones se amortiguan y se detienen en un valor seguro)" }, { left: "Polos en el semiplano derecho (Re > 0)", right: "Sistema Inestable (las oscilaciones crecen exponencialmente hasta destruir el sistema)" }], explanation: "El diseño de controladores PID en automatización busca mantener todos los polos en la zona estable." }]
          },
          {
            id: "7-ana-5", level: 5, title: "Examen final de graduación", description: "Control PID en procesos industriales.", xp: 50,
            questions: [{ id: "qam75", type: "multiple-choice", question: "En un controlador industrial PID, ¿qué función cumple la acción 'I' (Integral)?", options: ["Elimina el error en estado estacionario (suma el error a lo largo del tiempo hasta llevarlo a cero)", "Aumenta las oscilaciones violentas al arrancar", "Frena el motor bruscamente", "Mide la temperatura ambiente"], correctAnswer: "Elimina el error en estado estacionario (suma el error a lo largo del tiempo hasta llevarlo a cero)", explanation: "El término Integral asegura que el motor o válvula alcance milimétricamente el valor deseado (setpoint)." }]
          }
        ]
      }
    ]
  }
];

export const SCHOOL_INFO = {
  name: "IPET 66",
  motto: "Escuela de educación técnica - formando el futuro tecnológico",
  location: "Córdoba, Argentina",
  description: "Una institución dedicada a la excelencia en formación técnica profesional, integrando talleres prácticos, ciencias duras y la tecnología de vanguardia."
};

export const AI_TUTOR_TIPS = [
  {
    title: "Progresión y candados por años",
    content: "En IPET 66 TecnoLingo, cada año está bloqueado hasta que apruebes el año anterior. Si eres un alumno de cursos superiores (ej: 4to), al iniciar sesión tu perfil desbloqueará automáticamente los años del 1 al 4 para que repases tus bases o hagas tu especialidad."
  },
  {
    title: "Racha por aciertos (combo streak)",
    content: "¡Cada respuesta correcta consecutiva en una lección eleva tu medidor de combo! Lograr rachas de x3 o x5 aciertos multiplica tus tuercas doradas y XP al terminar el nivel."
  },
  {
    title: "5 niveles de maestría por materia",
    content: "Cada asignatura cuenta con 5 niveles de dificultad creciente (desde seguridad e introducción hasta el examen de graduación). Completa las 5 coronas para dominar el taller."
  },
  {
    title: "Modo Dios / examen libre",
    content: "Si deseas explorar el contenido de 7mo año sin haber cursado los anteriores, puedes usar el botón 'Desbloquear Todo' en la vista de aprendizaje o tu perfil para tener acceso total como Examen Libre."
  }
];
