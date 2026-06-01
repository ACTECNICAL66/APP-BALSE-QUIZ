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
  role: "Mascota Oficial de IPET 66",
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
  { id: 'first_step', title: 'Técnico Principiante', description: 'Completa tu primera actividad en IPET 66', icon: '🏆', maxProgress: 1 },
  { id: 'streak_5', title: 'Racha de Fuego', description: 'Logra 5 aciertos seguidos en una lección', icon: '🔥', maxProgress: 5 },
  { id: 'perfect_lesson', title: 'Soldadura Perfecta', description: 'Completa un nivel sin perder ni un corazón', icon: '⚡', maxProgress: 1 },
  { id: 'xp_500', title: 'Batería de Alta Carga', description: 'Acumula 500 puntos de XP', icon: '🔋', maxProgress: 500 },
  { id: 'year_master', title: 'Aprobación de Ciclo', description: 'Completa todas las materias de un año', icon: '🎓', maxProgress: 1 },
];

export const SHOP_ITEMS: ShopItem[] = [
  { id: 'refill', name: 'Recarga Total de Corazones', description: 'Restaura tus 5 corazones para seguir practicando.', cost: 50, icon: '❤️', type: 'heart_refill' },
  { id: 'freeze', name: 'Escudo Anti-Fallo', description: 'Mantiene tu combo de racha intacto ante un error de respuesta.', cost: 150, icon: '🛡️', type: 'streak_freeze' },
  { id: 'frame_gold', name: 'Marco Liquid Gold', description: 'Un marco de vidrio líquido dorado brillante para tu perfil.', cost: 300, icon: '✨', type: 'avatar_frame' },
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
    title: "1er Año - Ciclo Básico",
    subtitle: "Introducción a los talleres y fundamentos técnicos",
    subjects: [
      {
        id: "m-1-taller",
        name: "Taller General",
        description: "Normas de seguridad, herramientas de banco, carpintería y hojalatería.",
        color: "from-amber-500 to-orange-600",
        iconName: "Wrench",
        lessons: [
          {
            id: "1-tal-1", level: 1, title: "Seguridad y Antiparras", description: "Normas de protección personal.", xp: 25,
            questions: [
              { id: "q1", type: "multiple-choice", question: "¿Cuál es el elemento de protección personal OBLIGATORIO al operar el taladro de banco o amoladora?", options: ["Antiparras de seguridad (Lentes)", "Guantes de lana gruesos", "Gorra con visera", "Auriculares con música"], correctAnswer: "Antiparras de seguridad (Lentes)", explanation: "Las antiparras protegen los ojos contra proyección de virutas. Nunca se usan guantes holgados en máquinas giratorias." },
              { id: "q2", type: "true-false", question: "Al trabajar en el taller, está permitido llevar anillos, pulseras o cadenas colgantes.", correctAnswer: false, explanation: "Falso. Todo objeto colgante puede engancharse en partes móviles y causar accidentes." }
            ]
          },
          {
            id: "1-tal-2", level: 2, title: "Instrumentos de Medición", description: "El Calibre Pie de Rey y reglas metálicas.", xp: 30,
            questions: [
              { id: "q3", type: "multiple-choice", question: "¿En qué unidad del sistema internacional (SI) se expresan normalmente los planos de taller?", options: ["Milímetros (mm)", "Metros (m)", "Pulgadas (in)", "Centímetros (cm)"], correctAnswer: "Milímetros (mm)", explanation: "En dibujo mecánico y taller técnico en Argentina se trabaja bajo normas IRAM utilizando milímetros." },
              { id: "q4", type: "match-pairs", question: "Empareja cada herramienta con su función:", pairs: [{ left: "Calibre Pie de Rey", right: "Medición precisa de diámetros y profundidades" }, { left: "Morsa de banco", right: "Sujeción firme de piezas a trabajar" }, { left: "Escofina", right: "Desbaste de maderas en carpintería" }], explanation: "El calibre mide milímetros y fracciones; la morsa sujeta la pieza; la escofina desbasta madera." }
            ]
          },
          {
            id: "1-tal-3", level: 3, title: "Herramientas Manuales", description: "Granete, martillos y sierras.", xp: 35,
            questions: [
              { id: "q5", type: "fill-blanks", question: "Para realizar una marca guía antes de agujerear un metal con el taladro, utilizamos un _______ de marcar y un martillo.", options: ["Punto", "Destornillador", "Formón", "Remache"], correctAnswer: "Punto", explanation: "El punto de marcar (granete) crea una muesca cónica para que la mecha no resbale." }
            ]
          },
          {
            id: "1-tal-4", level: 4, title: "Hojalatería y Trazado", description: "Plegado y remachado de chapas.", xp: 40,
            questions: [
              { id: "q6", type: "true-false", question: "Al cortar chapa galvanizada con tijera de hojalatero, se deben utilizar guantes de descarne.", correctAnswer: true, explanation: "Verdadero. Los filos vivos de la chapa recién cortada pueden causar cortes profundos en las manos." }
            ]
          },
          {
            id: "1-tal-5", level: 5, title: "Evaluación de Taller I", description: "Repaso integral de herramientas y seguridad.", xp: 50,
            questions: [
              { id: "q7", type: "multiple-choice", question: "¿Qué herramienta se utiliza para verificar ángulos rectos exactos de 90° en una pieza?", options: ["Escuadra de sombrero 90°", "Compás de punta", "Tenaza", "Destornillador plano"], correctAnswer: "Escuadra de sombrero 90°", explanation: "La escuadra de sombrero se apoya sobre el borde rectificado para comprobar perpendicularidad." }
            ]
          }
        ]
      },
      {
        id: "m-1-dibujo",
        name: "Dibujo Técnico",
        description: "Normas IRAM, rotulado, caligrafía técnica y tipos de líneas.",
        color: "from-blue-500 to-indigo-600",
        iconName: "PencilRuler",
        lessons: [
          {
            id: "1-dib-1", level: 1, title: "Formatos Normalizados", description: "Hojas formato A4 y A3.", xp: 25,
            questions: [
              { id: "qd1", type: "multiple-choice", question: "¿Cuáles son las dimensiones exactas de una hoja formato A4 según la norma IRAM?", options: ["210 x 297 mm", "200 x 300 mm", "216 x 279 mm", "250 x 350 mm"], correctAnswer: "210 x 297 mm", explanation: "El formato A4 mide exactamente 210 mm de ancho por 297 mm de alto." }
            ]
          },
          {
            id: "1-dib-2", level: 2, title: "Tipos de Líneas IRAM", description: "Línea continua, trazos y ejes.", xp: 30,
            questions: [
              { id: "qd2", type: "match-pairs", question: "Asocia cada tipo de línea normalizada con su aplicación:", pairs: [{ left: "Línea continua gruesa", right: "Contornos y aristas visibles" }, { left: "Línea de trazos cortos", right: "Aristas y contornos ocultos" }, { left: "Línea de trazo y punto", right: "Ejes de simetría y de revolución" }], explanation: "Cada línea en Dibujo Técnico comunica una parte de la geometría de la pieza." }
            ]
          },
          {
            id: "1-dib-3", level: 3, title: "Rotulado y Caligrafía", description: "Norma IRAM 4503.", xp: 35,
            questions: [
              { id: "qd3", type: "true-false", question: "El rótulo (cuadro de datos) se ubica siempre en el ángulo inferior derecho del plano.", correctAnswer: true, explanation: "Verdadero. Es el estándar para facilitar la lectura al archivar y doblar los planos." }
            ]
          },
          {
            id: "1-dib-4", level: 4, title: "Uso de Escuadras", description: "Trazados a 30°, 45° y 60°.", xp: 40,
            questions: [
              { id: "qd4", type: "fill-blanks", question: "Al combinar una escuadra de 45° y una de 30°/60° apoyadas en la regla T, podemos trazar líneas inclinadas a _____ grados exactos (ej: 45 + 30).", options: ["75", "90", "10", "100"], correctAnswer: "75", explanation: "Sumando o restando los ángulos de ambas escuadras se obtienen múltiplos de 15°." }
            ]
          },
          {
            id: "1-dib-5", level: 5, title: "Evaluación de Dibujo I", description: "Examen final de caligrafía e IRAM.", xp: 50,
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
            id: "1-mat-1", level: 1, title: "Fracciones en el Taller", description: "Medidas en pulgadas fraccionales.", xp: 25,
            questions: [{ id: "qm1", type: "multiple-choice", question: "¿Cuánto es la mitad de 1/2 pulgada?", options: ["1/4 pulgada", "1/8 pulgada", "1 pulgada", "3/8 pulgada"], correctAnswer: "1/4 pulgada", explanation: "(1/2) / 2 = 1/4. Es una medida habitual en llaves fijas y bulones." }]
          },
          {
            id: "1-mat-2", level: 2, title: "Cálculo de Perímetros", description: "Perímetros de chapas y perfiles.", xp: 30,
            questions: [{ id: "qm2", type: "true-false", question: "El perímetro de una chapa rectangular de 3m por 2m es igual a 10 metros.", correctAnswer: true, explanation: "Verdadero. Perímetro = 2x(3+2) = 10 metros." }]
          },
          {
            id: "1-mat-3", level: 3, title: "Escalas Numéricas", description: "Escalas de ampliación y reducción.", xp: 35,
            questions: [{ id: "qm3", type: "multiple-choice", question: "Si en un plano a escala 1:2 una pieza metálica mide 50 mm, ¿cuánto mide la pieza real en el taller?", options: ["100 mm", "25 mm", "50 mm", "200 mm"], correctAnswer: "100 mm", explanation: "La escala 1:2 significa que el dibujo es la mitad del tamaño real. 50 mm x 2 = 100 mm." }]
          },
          {
            id: "1-mat-4", level: 4, title: "Cálculo de Áreas", description: "Superficie de piezas planas.", xp: 40,
            questions: [{ id: "qm4", type: "fill-blanks", question: "Para calcular el área de un triángulo rectangular, multiplicamos la base por la altura y dividimos entre _____.", options: ["2", "3", "4", "5"], correctAnswer: "2", explanation: "Área = (base * altura) / 2." }]
          },
          {
            id: "1-mat-5", level: 5, title: "Examen de Matemática I", description: "Problemas aplicados al taller.", xp: 50,
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
            id: "1-tec-1", level: 1, title: "Propiedades Mecánicas", description: "Dureza, ductilidad y maleabilidad.", xp: 25,
            questions: [{ id: "qt1", type: "multiple-choice", question: "¿Qué propiedad de un metal le permite deformarse formando hilos o alambres sin romperse (como el cobre)?", options: ["Ductilidad", "Maleabilidad", "Dureza", "Tenacidad"], correctAnswer: "Ductilidad", explanation: "La ductilidad forma alambres; la maleabilidad forma láminas o chapas." }]
          },
          {
            id: "1-tec-2", level: 2, title: "Materiales Ferrosos", description: "Diferencia entre hierro fundido y acero.", xp: 30,
            questions: [{ id: "qt2", type: "true-false", question: "El acero es una aleación metálica compuesta principalmente por Hierro (Fe) y Carbono (C).", correctAnswer: true, explanation: "Verdadero. El porcentaje de carbono define las propiedades del acero." }]
          },
          {
            id: "1-tec-3", level: 3, title: "Maderas y Carpintería", description: "Tipos de maderas y uniones.", xp: 35,
            questions: [{ id: "qt3", type: "fill-blanks", question: "Para unir dos piezas de madera de forma permanente en ensamble, se utiliza adhesivo vinílico comúnmente llamado _______ de carpintero.", options: ["Cola", "Silicona", "Resina", "Cemento"], correctAnswer: "Cola", explanation: "La cola vinílica penetra en los poros de la madera logrando una unión muy resistente." }]
          },
          {
            id: "1-tec-4", level: 4, title: "Plásticos y Polímeros", description: "Termoplásticos vs Termoestables.", xp: 40,
            questions: [{ id: "qt4", type: "match-pairs", question: "Asocia cada tipo de plástico con su propiedad:", pairs: [{ left: "Termoplástico (PVC, PET)", right: "Se reblandece con el calor y puede reciclarse" }, { left: "Termoestable (Baquelita)", right: "No se derrite con el calor una vez curado" }], explanation: "Los termoplásticos se moldean repetidamente con calor." }]
          },
          {
            id: "1-tec-5", level: 5, title: "Análisis de Producto", description: "Estudio morfológico y funcional.", xp: 50,
            questions: [{ id: "qt5", type: "multiple-choice", question: "En el análisis de un objeto técnico, el 'análisis funcional' responde a la pregunta:", options: ["¿Para qué sirve y cómo cumple su función?", "¿De qué material está hecho?", "¿Cuánto cuesta fabricarlo?", "¿Qué forma geométrica tiene?"], correctAnswer: "¿Para qué sirve y cómo cumple su función?", explanation: "El análisis funcional indaga el propósito y la utilidad del objeto." }]
          }
        ]
      }
    ]
  },

  // 2DO AÑO
  {
    year: 2,
    title: "2do Año - Ciclo Básico",
    subtitle: "Consolidación de técnicas, taller eléctrico y ajuste",
    subjects: [
      {
        id: "m-2-taller",
        name: "Taller: Electricidad y Ajuste",
        description: "Conexiones eléctricas básicas, empalmes, limado y taladrado.",
        color: "from-amber-500 to-orange-600",
        iconName: "Zap",
        lessons: [
          {
            id: "2-tal-1", level: 1, title: "Empalmes Eléctricos", description: "Cola de ratón y Western Union.", xp: 25,
            questions: [{ id: "q21", type: "multiple-choice", question: "¿Cómo se llama el empalme utilizado para prolongar dos cables de cobre sometidos a cierta tracción mecánica?", options: ["Western Union", "Cola de ratón", "Derivación en T", "Ojalillo"], correctAnswer: "Western Union", explanation: "El Western Union asegura excelente resistencia mecánica a la tracción." }]
          },
          {
            id: "2-tal-2", level: 2, title: "Circuito Domiciliario", description: "Fase, Neutro y Tierra.", xp: 30,
            questions: [{ id: "q22", type: "true-false", question: "En una instalación eléctrica domiciliaria, el interruptor (llave de luz) debe cortar siempre el cable de NEUTRO.", correctAnswer: false, explanation: "Falso. Siempre debe cortar el cable de FASE para evitar descargas al cambiar una lámpara." }]
          },
          {
            id: "2-tal-3", level: 3, title: "Técnicas de Limado", description: "Limas planas, medias cañas y escofinas.", xp: 35,
            questions: [{ id: "q23", type: "fill-blanks", question: "Al realizar el limado de una pieza metálica en la morsa, el avance de corte se realiza empujando la lima hacia _______.", options: ["Adelante", "Atrás", "Los costados", "Arriba"], correctAnswer: "Adelante", explanation: "Los dientes de las limas cortan solo en el movimiento de avance hacia adelante." }]
          },
          {
            id: "2-tal-4", level: 4, title: "Taladrado de Metales", description: "Ángulos de afilado de mechas.", xp: 40,
            questions: [{ id: "q24", type: "match-pairs", question: "Asocia cada tipo de broca (mecha) con el material a agujerear:", pairs: [{ left: "Mecha de Acero Rápido (HSS)", right: "Metales, chapas y aceros" }, { left: "Mecha con punta de Widia", right: "Mampostería, ladrillo y hormigón" }, { left: "Mecha de tres puntas", right: "Maderas y aglomerados" }], explanation: "Cada punta está diseñada para la dureza específica del material." }]
          },
          {
            id: "2-tal-5", level: 5, title: "Evaluación de Taller II", description: "Práctica integral eléctrica y ajuste.", xp: 50,
            questions: [{ id: "q25", type: "multiple-choice", question: "¿Qué color de aislamiento tiene el cable reglamentario de Puesta a Tierra según norma IRAM?", options: ["Verde y Amarillo (bicolor)", "Rojo", "Azul", "Blanco"], correctAnswer: "Verde y Amarillo (bicolor)", explanation: "El cable verde/amarillo se destina de forma exclusiva a la protección de puesta a tierra." }]
          }
        ]
      },
      {
        id: "m-2-dibujo",
        name: "Dibujo Técnico II",
        description: "Proyecciones ortogonales (Método ISO E) y acotación.",
        color: "from-blue-500 to-indigo-600",
        iconName: "Box",
        lessons: [
          {
            id: "2-dib-1", level: 1, title: "Sistema Diedrico ISO E", description: "Proyección en el primer diedro.", xp: 25,
            questions: [{ id: "qd21", type: "match-pairs", question: "En el sistema europeo (ISO E), relaciona la ubicación de cada vista respecto a la vista frontal (anterior):", pairs: [{ left: "Vista Superior (Planta)", right: "Se dibuja DEBAJO de la vista frontal" }, { left: "Vista Lateral Izquierda", right: "Se dibuja a la DERECHA de la vista frontal" }], explanation: "En ISO E la pieza se sitúa entre el observador y el plano, invirtiendo la posición en el papel." }]
          },
          {
            id: "2-dib-2", level: 2, title: "Normas de Acotación", description: "Líneas de cota y flechas.", xp: 30,
            questions: [{ id: "qd22", type: "true-false", question: "Las líneas de cota deben cruzarse entre sí para ahorrar espacio en el plano.", correctAnswer: false, explanation: "Falso. Por norma IRAM, las líneas de cota jamás deben cruzarse entre sí ni con otras líneas del plano." }]
          },
          {
            id: "2-dib-3", level: 3, title: "Vistas Auxiliares", description: "Caras inclinadas y verdaderas magnitudes.", xp: 35,
            questions: [{ id: "qd23", type: "multiple-choice", question: "¿Cuándo se hace necesario realizar una 'vista auxiliar' en un plano técnico?", options: ["Cuando la pieza tiene planos oblicuos a los de proyección", "Cuando la pieza es muy pequeña", "Cuando se dibuja en formato A3", "Cuando se pinta a color"], correctAnswer: "Cuando la pieza tiene planos oblicuos a los de proyección", explanation: "La vista auxiliar se proyecta perpendicular a la cara inclinada para ver su tamaño real." }]
          },
          {
            id: "2-dib-4", level: 4, title: "Acotación de Diámetros", description: "Símbolos de diámetro y radios.", xp: 40,
            questions: [{ id: "qd24", type: "fill-blanks", question: "Para indicar el diámetro de un agujero redondo en acotación, antecedemos a la cifra el símbolo griego _____ (o Ø).", options: ["Fi (Ø)", "Alfa", "Beta", "Omega"], correctAnswer: "Fi (Ø)", explanation: "El símbolo Ø indica que la dimensión acotada es circular o cilíndrica." }]
          },
          {
            id: "2-dib-5", level: 5, title: "Evaluación de Dibujo II", description: "Proyecciones completas y acotación.", xp: 50,
            questions: [{ id: "qd25", type: "multiple-choice", question: "En ISO E, si observas un cubo desde arriba, ¿dónde dibujas ese cuadrado en el plano de las 3 vistas?", options: ["Debajo de la vista frontal", "Arriba de la vista frontal", "A la derecha", "A la izquierda"], correctAnswer: "Debajo de la vista frontal", explanation: "La vista superior (planta) se rebate quedando siempre debajo del alzado." }]
          }
        ]
      },
      {
        id: "m-2-mate",
        name: "Matemática II",
        description: "Ecuaciones de primer grado, Teorema de Pitágoras y trigonometría básica.",
        color: "from-emerald-500 to-teal-600",
        iconName: "Calculator",
        lessons: [
          {
            id: "2-mat-1", level: 1, title: "Ecuaciones de 1er Grado", description: "Despeje de variables en fórmulas mecánicas.", xp: 25,
            questions: [{ id: "qm21", type: "multiple-choice", question: "En la ecuación 2X + 10 = 30, ¿cuál es el valor de X?", options: ["10", "20", "5", "15"], correctAnswer: "10", explanation: "2X = 30 - 10 => 2X = 20 => X = 10." }]
          },
          {
            id: "2-mat-2", level: 2, title: "Teorema de Pitágoras", description: "Hipotenusas y catetos en escuadras.", xp: 30,
            questions: [{ id: "qm22", type: "fill-blanks", question: "En un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la _________ de los cuadrados de los catetos.", options: ["Suma", "Resta", "Multiplicación", "División"], correctAnswer: "Suma", explanation: "El célebre Teorema de Pitágoras: a² + b² = c²." }]
          },
          {
            id: "2-mat-3", level: 3, title: "Escuadra 3-4-5", description: "El método del constructor en taller.", xp: 35,
            questions: [{ id: "qm23", type: "true-false", question: "Un triángulo con lados de 3m, 4m y 5m forma un ángulo recto perfecto (90°).", correctAnswer: true, explanation: "Verdadero. 3² + 4² = 9 + 16 = 25 = 5². Es un método práctico de taller para trazar escuadras." }]
          },
          {
            id: "2-mat-4", level: 4, title: "Razones Trigonométricas", description: "Seno, Coseno y Tangente.", xp: 40,
            questions: [{ id: "qm24", type: "match-pairs", question: "Asocia cada función con su relación en el triángulo rectángulo:", pairs: [{ left: "Seno (sin)", right: "Cateto Opuesto / Hipotenusa" }, { left: "Coseno (cos)", right: "Cateto Adyacente / Hipotenusa" }, { left: "Tangente (tan)", right: "Cateto Opuesto / Cateto Adyacente" }], explanation: "Son las razones básicas SOH-CAH-TOA." }]
          },
          {
            id: "2-mat-5", level: 5, title: "Examen de Matemática II", description: "Aplicación a estructuras.", xp: 50,
            questions: [{ id: "qm25", type: "multiple-choice", question: "Si en un techo a un agua la altura es 3m y el largo horizontal es 4m, ¿cuánto mide la chapa inclinada (hipotenusa)?", options: ["5m", "7m", "6m", "3.5m"], correctAnswer: "5m", explanation: "√ (3² + 4²) = √25 = 5 metros." }]
          }
        ]
      },
      {
        id: "m-2-tecno",
        name: "Tecnología II",
        description: "Mecanismos simples, poleas, engranajes y palancas.",
        color: "from-purple-500 to-pink-600",
        iconName: "Cog",
        lessons: [
          {
            id: "2-tec-1", level: 1, title: "Palancas y Apoyos", description: "Palancas de 1er, 2do y 3er género.", xp: 25,
            questions: [{ id: "qt21", type: "multiple-choice", question: "¿Qué tipo de palanca es una carretilla de mano de taller?", options: ["2do Género (Resistencia en el medio)", "1er Género (Punto de apoyo en el medio)", "3er Género (Potencia en el medio)", "No es una palanca"], correctAnswer: "2do Género (Resistencia en el medio)", explanation: "El eje de la rueda es el apoyo, la carga va al centro y levantamos por los mangos." }]
          },
          {
            id: "2-tec-2", level: 2, title: "Transmisión por Poleas", description: "Relación de diámetros y velocidades.", xp: 30,
            questions: [{ id: "qt22", type: "multiple-choice", question: "Si un motor gira con polea de 100mm y transmite a una polea de 200mm, la velocidad de la segunda polea será:", options: ["La mitad de la del motor", "El doble de la del motor", "Igual a la del motor", "Cuatro veces mayor"], correctAnswer: "La mitad de la del motor", explanation: "A mayor diámetro, menor velocidad angular." }]
          },
          {
            id: "2-tec-3", level: 3, title: "Engranajes Rectos", description: "Cálculo de dientes (Z) y módulo.", xp: 35,
            questions: [{ id: "qt23", type: "true-false", question: "Para que dos engranajes puedan acoplar y girar juntos, deben tener obligatoriamente el mismo Módulo.", correctAnswer: true, explanation: "Verdadero. El módulo define el tamaño y forma del diente." }]
          },
          {
            id: "2-tec-4", level: 4, title: "Tornillo Sin Fin", description: "Reducción irreversible de velocidad.", xp: 40,
            questions: [{ id: "qt24", type: "fill-blanks", question: "En un mecanismo de tornillo sin fin y corona de 40 dientes, por cada vuelta completa del tornillo la corona avanza exactamente ______ diente(s).", options: ["1", "40", "10", "2"], correctAnswer: "1", explanation: "El tornillo sin fin de una entrada produce una gran reducción de velocidad (1:40)." }]
          },
          {
            id: "2-tec-5", level: 5, title: "Mecanismos Articulados", description: "Biela-manivela y levas.", xp: 50,
            questions: [{ id: "qt25", type: "match-pairs", question: "Asocia cada mecanismo con su transformación de movimiento:", pairs: [{ left: "Biela-Manivela", right: "Transforma movimiento rotatorio en lineal alternativo (como un motor de auto)" }, { left: "Piñón-Cremallera", right: "Transforma giro en desplazamiento rectilíneo (portón corredizo)" }], explanation: "Mecanismos clave en la construcción de maquinaria industrial." }]
          }
        ]
      }
    ]
  },

  // 3ER AÑO
  {
    year: 3,
    title: "3er Año - Cierre de Ciclo Básico",
    subtitle: "Preparación para las especialidades técnicas superiores",
    subjects: [
      {
        id: "m-3-taller",
        name: "Taller: Herrería y Soldadura",
        description: "Soldadura por arco eléctrico (SMAW), forja y estructuras metálicas.",
        color: "from-amber-500 to-orange-600",
        iconName: "Flame",
        lessons: [
          {
            id: "3-tal-1", level: 1, title: "Soldadura por Arco", description: "Equipos, masa y pinza portaelectrodo.", xp: 25,
            questions: [{ id: "q31", type: "multiple-choice", question: "¿Qué nos indica el número '6013' en un electrodo de soldadura de taller?", options: ["60.000 psi de resistencia a la tracción y apto para todas las posiciones", "60 mm de longitud y 13 mm de espesor", "60 amperios de mínimo y 13 de voltaje", "Código de fábrica sin significado"], correctAnswer: "60.000 psi de resistencia a la tracción y apto para todas las posiciones", explanation: "Norma AWS: 60 indica resistencia en miles de psi; el 1 indica todas las posiciones." }]
          },
          {
            id: "3-tal-2", level: 2, title: "Caretas Fotolumínicas", description: "Protección contra rayos UV e infrarrojos.", xp: 30,
            questions: [{ id: "q32", type: "true-false", question: "Al soldar con arco eléctrico, los anteojos de sol comunes brindan protección suficiente contra el destello.", correctAnswer: false, explanation: "Falso. El arco emite rayos UV e infrarrojos intensos que requieren cristales DIN 10 o superior." }]
          },
          {
            id: "3-tal-3", level: 3, title: "Amperaje y Espesores", description: "Regulación de la máquina soldadora.", xp: 35,
            questions: [{ id: "q33", type: "fill-blanks", question: "Para soldar caños estructurales de pared delgada (1.2mm) con electrodo de 2.5mm, regulamos la máquina a un amperaje aproximado de ______ A.", options: ["65", "200", "10", "300"], correctAnswer: "65", explanation: "Un amperaje muy alto perforaría el caño delgado." }]
          },
          {
            id: "3-tal-4", level: 4, title: "Limpieza de Escoria", description: "Piqueta y cepillo de alambre.", xp: 40,
            questions: [{ id: "q34", type: "match-pairs", question: "Asocia cada defecto de soldadura con su causa:", pairs: [{ left: "Inclusión de escoria", right: "Falta de limpieza entre pasadas del cordón" }, { left: "Mordedura o socavación", right: "Amperaje excesivamente alto al soldar" }], explanation: "La técnica correcta exige pulso constante y limpieza." }]
          },
          {
            id: "3-tal-5", level: 5, title: "Evaluación de Soldadura", description: "Examen final de Herrería y SMAW.", xp: 50,
            questions: [{ id: "q35", type: "multiple-choice", question: "¿Qué gas se genera y quema alrededor de la gota fundida en el electrodo revestido para protegerla del oxígeno?", options: ["Gases de combustión del revestimiento (atmósfera protectora)", "Argón puro", "Oxígeno puro", "Helio"], correctAnswer: "Gases de combustión del revestimiento (atmósfera protectora)", explanation: "El fundente exterior del electrodo crea una campana de gas y escoria protectora al arder." }]
          }
        ]
      },
      {
        id: "m-3-dibujo",
        name: "Dibujo Técnico III",
        description: "Cortes, secciones, rayados y perspectivas isométricas.",
        color: "from-blue-500 to-indigo-600",
        iconName: "Layers",
        lessons: [
          {
            id: "3-dib-1", level: 1, title: "Perspectiva Isométrica", description: "Representación 3D a 30 grados.", xp: 25,
            questions: [{ id: "qd31", type: "fill-blanks", question: "En perspectiva isométrica, los tres ejes de ancho, profundidad y altura forman ángulos iguales de ______ grados entre sí.", options: ["120", "90", "45", "60"], correctAnswer: "120", explanation: "En isometría los tres ejes forman 120° en el papel (líneas base inclinadas 30° respecto a la horizontal)." }]
          },
          {
            id: "3-dib-2", level: 2, title: "Perspectiva Caballera", description: "Vista frontal en magnitud real.", xp: 30,
            questions: [{ id: "qd32", type: "true-false", question: "En la perspectiva caballera, el eje de profundidad se reduce a la mitad (1/2) para evitar la distorsión visual.", correctAnswer: true, explanation: "Verdadero. Al dibujar la profundidad a 45°, se aplica un coeficiente de reducción (normalmente 0.5)." }]
          },
          {
            id: "3-dib-3", level: 3, title: "Cortes y Rayados", description: "Norma IRAM para indicar cortes interiores.", xp: 35,
            questions: [{ id: "qd33", type: "multiple-choice", question: "¿A qué inclinación y con qué tipo de línea se realiza el rayado (achurado) de una sección cortada en metal?", options: ["Línea continua fina a 45°", "Línea gruesa a 90°", "Línea de trazos a 30°", "Rayado a mano alzada"], correctAnswer: "Línea continua fina a 45°", explanation: "Las superficies seccionadas se rayan con trazo fino inclinado a 45°." }]
          },
          {
            id: "3-dib-4", level: 4, title: "Corte Escalonado", description: "Planos de corte paralelos.", xp: 40,
            questions: [{ id: "qd34", type: "match-pairs", question: "Asocia el tipo de corte con su objetivo:", pairs: [{ left: "Corte Total", right: "El plano de corte atraviesa completamente la pieza de lado a lado" }, { left: "Medio Corte (Semicorte)", right: "Muestra la mitad exterior y la mitad interior en piezas simétricas" }], explanation: "Técnicas avanzadas para piezas mecánicas complejas." }]
          },
          {
            id: "3-dib-5", level: 5, title: "Evaluación de Dibujo III", description: "Examen de perspectivas y cortes.", xp: 50,
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
            id: "3-mat-1", level: 1, title: "Sistemas Lineales 2x2", description: "Métodos de igualación y sustitución.", xp: 25,
            questions: [{ id: "qm31", type: "multiple-choice", question: "En el sistema: X + Y = 10 y X - Y = 2, ¿cuáles son los valores de X e Y?", options: ["X=6, Y=4", "X=5, Y=5", "X=8, Y=2", "X=7, Y=3"], correctAnswer: "X=6, Y=4", explanation: "Sumando ambas ecuaciones: 2X = 12 => X = 6. Reemplazando: 6 + Y = 10 => Y = 4." }]
          },
          {
            id: "3-mat-2", level: 2, title: "Función Lineal y Pendiente", description: "La recta y = mx + b.", xp: 30,
            questions: [{ id: "qm32", type: "true-false", question: "La pendiente 'm' en la ecuación y = mx + b representa la inclinación de la recta respecto al eje horizontal.", correctAnswer: true, explanation: "Verdadero. Si m es positiva la recta asciende, si es negativa desciende." }]
          },
          {
            id: "3-mat-3", level: 3, title: "Operaciones con Polinomios", description: "Suma y producto de expresiones algebraicas.", xp: 35,
            questions: [{ id: "qm33", type: "fill-blanks", question: "Al multiplicar (X + 2) por (X + 3), el resultado polinómico es X² + _____X + 6.", options: ["5", "6", "1", "4"], correctAnswer: "5", explanation: "X*X + 3X + 2X + 6 = X² + 5X + 6." }]
          },
          {
            id: "3-mat-4", level: 4, title: "Casos de Factoreo", description: "Factor común y diferencia de cuadrados.", xp: 40,
            questions: [{ id: "qm34", type: "match-pairs", question: "Asocia cada expresión con su factorización:", pairs: [{ left: "X² - 9", right: "(X - 3)(X + 3)" }, { left: "2X² + 4X", right: "2X(X + 2)" }], explanation: "Factorizar simplifica el cálculo de estructuras complejas." }]
          },
          {
            id: "3-mat-5", level: 5, title: "Examen de Matemática III", description: "Aplicaciones físicas y gráficas.", xp: 50,
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
            id: "3-tec-1", level: 1, title: "Centrales Eléctricas", description: "Hidroeléctricas, térmicas y nucleares.", xp: 25,
            questions: [{ id: "qt31", type: "match-pairs", question: "Empareja cada central con su fuente primaria de energía:", pairs: [{ left: "Central Hidroeléctrica", right: "Energía potencial y cinética del agua en embalses" }, { left: "Central Fotovoltaica", right: "Radiación solar directa sobre silicio" }, { left: "Central Eólica", right: "Fuerza del viento en aerogeneradores" }], explanation: "Las centrales transforman recursos naturales en corriente eléctrica." }]
          },
          {
            id: "3-tec-2", level: 2, title: "Ciclo de 4 Tiempos", description: "Motores de combustión interna (Otto).", xp: 30,
            questions: [{ id: "qt32", type: "multiple-choice", question: "¿Cuál es el orden correcto de los 4 tiempos en un motor naftero de taller?", options: ["Admisión, Compresión, Expansión (Combustión), Escape", "Escape, Admisión, Expansión, Compresión", "Compresión, Escape, Admisión, Expansión", "Expansión, Escape, Compresión, Admisión"], correctAnswer: "Admisión, Compresión, Expansión (Combustión), Escape", explanation: "Es el ciclo de funcionamiento de los motores térmicos alternativos." }]
          },
          {
            id: "3-tec-3", level: 3, title: "Turbinas de Vapor", description: "Ciclo Rankine en termoeléctricas.", xp: 35,
            questions: [{ id: "qt33", type: "true-false", question: "En una central nuclear, la fisión del uranio genera calor para hervir agua y mover turbinas de vapor.", correctAnswer: true, explanation: "Verdadero. El reactor atómico funciona esencialmente como una gran caldera térmica." }]
          },
          {
            id: "3-tec-4", level: 4, title: "Energías Renovables", description: "Paneles solares y colectores térmicos.", xp: 40,
            questions: [{ id: "qt34", type: "fill-blanks", question: "Un panel solar fotovoltaico transforma los rayos de luz directamente en corriente eléctrica _______ (CC).", options: ["Continua", "Alterna", "Trifásica", "Estática"], correctAnswer: "Continua", explanation: "Las celdas fotovoltaicas generan corriente continua que luego un inversor pasa a alterna." }]
          },
          {
            id: "3-tec-5", level: 5, title: "Examen de Tecnología III", description: "Matriz energética y eficiencia.", xp: 50,
            questions: [{ id: "qt35", type: "multiple-choice", question: "¿Qué máquina o elemento se utiliza en las centrales para elevar el voltaje de la corriente antes de enviarla por las torres de alta tensión?", options: ["Transformador elevador", "Batería de plomo", "Motor diésel", "Fusible cerámico"], correctAnswer: "Transformador elevador", explanation: "Se eleva el voltaje para minimizar las pérdidas de calor (Efecto Joule) en los cables largos." }]
          }
        ]
      }
    ]
  },

  // 4TO AÑO (Especialidad)
  {
    year: 4,
    title: "4to Año - Ciclo Superior",
    subtitle: "Ingreso a la especialidad: Electrotecnia, Informática y Electrónica",
    subjects: [
      {
        id: "m-4-electrotecnia1",
        name: "Electrotecnia I",
        description: "Leyes fundamentales de la electricidad: Ohm, Kirchhoff, Potencia en CC.",
        color: "from-red-500 to-amber-600",
        iconName: "Zap",
        lessons: [
          {
            id: "4-ele-1", level: 1, title: "La Ley de Ohm", description: "Voltaje, Corriente y Resistencia.", xp: 25,
            questions: [
              { id: "q41", type: "multiple-choice", question: "¿Cuál es la fórmula de la Ley de Ohm para calcular corriente (I)?", options: ["I = V / R", "I = V * R", "I = R / V", "I = V² * R"], correctAnswer: "I = V / R", explanation: "La intensidad es directamente proporcional al voltaje e inversamente proporcional a la resistencia." },
              { id: "q42", type: "fill-blanks", question: "Si conectamos un resistor de 100 ohmios a 12 voltios, circulará una corriente de ______ amperios (o 120 mA).", options: ["0.12", "1.2", "1200", "12"], correctAnswer: "0.12", explanation: "I = 12V / 100Ω = 0.12A." }
            ]
          },
          {
            id: "4-ele-2", level: 2, title: "Circuitos en Serie", description: "Divisores de voltaje y resistencia total.", xp: 30,
            questions: [{ id: "q43", type: "true-false", question: "En un circuito en SERIE de tres resistencias, la corriente que pasa por cada una de ellas es exactamente la misma.", correctAnswer: true, explanation: "Verdadero. En serie solo hay un camino posible para el flujo de electrones." }]
          },
          {
            id: "4-ele-3", level: 3, title: "Circuitos en Paralelo", description: "Divisores de corriente y conductancia.", xp: 35,
            questions: [{ id: "q44", type: "multiple-choice", question: "Si conectamos dos resistencias iguales de 100 Ω en paralelo, la resistencia total equivalente será:", options: ["50 Ω", "200 Ω", "100 Ω", "10 Ω"], correctAnswer: "50 Ω", explanation: "En paralelo con valores iguales: R_eq = R / n = 100 / 2 = 50 Ω." }]
          },
          {
            id: "4-ele-4", level: 4, title: "Leyes de Kirchhoff", description: "Mallas y Nodos en CC.", xp: 40,
            questions: [{ id: "q45", type: "match-pairs", question: "Asocia cada Ley de Kirchhoff con su principio de conservación:", pairs: [{ left: "1ra Ley de Nodos", right: "La suma de corrientes que entran a un nodo es igual a las que salen (Conservación de carga)" }, { left: "2da Ley de Mallas", right: "La suma algebraica de voltajes en una malla cerrada es cero (Conservación de energía)" }], explanation: "Herramientas clave en el cálculo de redes eléctricas." }]
          },
          {
            id: "4-ele-5", level: 5, title: "Potencia Eléctrica en CC", description: "Ley de Joule (P = V * I).", xp: 50,
            questions: [{ id: "q46", type: "multiple-choice", question: "¿Qué potencia disipa una lámpara de automóvil conectada a 12V si por ella circulan 5 amperios?", options: ["60 W", "2.4 W", "17 W", "120 W"], correctAnswer: "60 W", explanation: "Potencia = V * I = 12V * 5A = 60 Watts." }]
          }
        ]
      },
      {
        id: "m-4-info1",
        name: "Informática I",
        description: "Estructura de computadores, hardware, sistemas operativos y algoritmos.",
        color: "from-blue-600 to-cyan-500",
        iconName: "Terminal",
        lessons: [
          {
            id: "4-inf-1", level: 1, title: "Hardware y Memoria", description: "RAM, ROM, CPU y periféricos.", xp: 25,
            questions: [{ id: "qi41", type: "match-pairs", question: "Asocia cada componente con su característica:", pairs: [{ left: "Memoria RAM", right: "Memoria volátil de lectura y escritura rápida" }, { left: "Microprocesador (CPU)", right: "Unidad central que ejecuta cálculos e instrucciones" }, { left: "Disco SSD", right: "Almacenamiento no volátil de alta velocidad sin partes móviles" }], explanation: "La RAM se borra al apagar; la CPU procesa; el SSD almacena permanentemente." }]
          },
          {
            id: "4-inf-2", level: 2, title: "Diagramas de Flujo", description: "Simbología y lógica de programación.", xp: 30,
            questions: [{ id: "qi42", type: "true-false", question: "En un diagrama de flujo, un rombo representa un proceso de cálculo matemático secuencial.", correctAnswer: false, explanation: "Falso. El rombo representa una CONDICIÓN o toma de decisión (Bifurcación Sí/No)." }]
          },
          {
            id: "4-inf-3", level: 3, title: "Variables y Tipos de Datos", description: "Enteros (int), flotantes y booleanos.", xp: 35,
            questions: [{ id: "qi43", type: "multiple-choice", question: "¿Qué tipo de dato utilizarías en un programa C++ para almacenar un número con decimales como el voltaje (Ej: 12.5)?", options: ["float (o double)", "int", "char", "bool"], correctAnswer: "float (o double)", explanation: "El tipo float permite almacenar valores con punto flotante (decimales)." }]
          },
          {
            id: "4-inf-4", level: 4, title: "Estructuras Condicionales", description: "La sentencia if - else.", xp: 40,
            questions: [{ id: "qi44", type: "fill-blanks", question: "Para verificar si una variable 'temperatura' es mayor a 100 en C++, escribimos: if (temperatura _____ 100) { ... }", options: [">", "<", "==", "!="], correctAnswer: ">", explanation: "El operador de comparación '>' verifica que el valor izquierdo sea mayor que el derecho." }]
          },
          {
            id: "4-inf-5", level: 5, title: "Evaluación Informática I", description: "Examen integral de algoritmos.", xp: 50,
            questions: [{ id: "qi45", type: "multiple-choice", question: "¿Qué símbolo o secuencia se utiliza en C++ para escribir un comentario de una sola línea en el código?", options: ["// (Doble barra)", "/* (Barra asterisco)", "# (Numeral)", "<!--"], correctAnswer: "// (Doble barra)", explanation: "Las dos barras le indican al compilador que ignore el resto de la línea." }]
          }
        ]
      },
      {
        id: "m-4-analog1",
        name: "Electrónica Analógica I",
        description: "Semiconductores, diodos, rectificación y filtrado.",
        color: "from-emerald-600 to-green-500",
        iconName: "Activity",
        lessons: [
          {
            id: "4-ana-1", level: 1, title: "El Diodo Semiconductor", description: "Unión P-N, silicio y polarización.", xp: 25,
            questions: [{ id: "qa41", type: "multiple-choice", question: "¿Cuál es la caída de tensión aproximada de un diodo rectificador de Silicio (como el 1N4007) en directa?", options: ["0.7 V", "0.3 V", "1.5 V", "12 V"], correctAnswer: "0.7 V", explanation: "Los diodos de silicio tienen una barrera de potencial de aproximadamente 0.7V a temperatura ambiente." }]
          },
          {
            id: "4-ana-2", level: 2, title: "Rectificación Media Onda", description: "Diodo único en corriente alterna.", xp: 30,
            questions: [{ id: "qa42", type: "true-false", question: "En un rectificador de media onda con un solo diodo, la corriente pasa hacia la carga durante ambos semiciclos.", correctAnswer: false, explanation: "Falso. El diodo solo conduce durante el semiciclo positivo, recortando el negativo." }]
          },
          {
            id: "4-ana-3", level: 3, title: "Puente Rectificador", description: "Onda completa con 4 diodos.", xp: 35,
            questions: [{ id: "qa43", type: "fill-blanks", question: "En un rectificador de onda completa con puente de 4 diodos, la frecuencia del rizado de salida es el ________ de la frecuencia de entrada (ej: 100 Hz para red de 50 Hz).", options: ["Doble", "Triple", "Mismo valor", "Cuádruple"], correctAnswer: "Doble", explanation: "Al aprovechar ambos semiciclos, los picos en la salida se duplican (50Hz -> 100Hz)." }]
          },
          {
            id: "4-ana-4", level: 4, title: "Filtrado Capacitivo", description: "Capacitores electrolíticos y rizado (ripple).", xp: 40,
            questions: [{ id: "qa44", type: "match-pairs", question: "Asocia el componente con su función en la fuente de alimentación:", pairs: [{ left: "Transformador", right: "Reduce el voltaje alterno de la red (Ej: 220V a 12V CA)" }, { left: "Puente de diodos", right: "Convierte la corriente alterna en pulsante continua" }, { left: "Capacitor electrolítico", right: "Alisa los picos y reduce el voltaje de rizado (filtro)" }], explanation: "Son las etapas elementales de una fuente lineal de taller." }]
          },
          {
            id: "4-ana-5", level: 5, title: "Diodos Zener", description: "Regulación de voltaje en polarización inversa.", xp: 50,
            questions: [{ id: "qa45", type: "multiple-choice", question: "¿Para qué se utiliza principalmente un diodo Zener en un circuito electrónico?", options: ["Para mantener un voltaje constante de referencia en la salida (Regulador)", "Para emitir luz blanca", "Para amplificar sonido", "Para medir temperatura"], correctAnswer: "Para mantener un voltaje constante de referencia en la salida (Regulador)", explanation: "El Zener polarizado en inversa mantiene fija su tensión nominal (V_z) ante variaciones." }]
          }
        ]
      },
      {
        id: "m-4-digital1",
        name: "Electrónica Digital I",
        description: "Sistemas numéricos, álgebra de Boole y compuertas lógicas (AND, OR, NOT).",
        color: "from-purple-600 to-indigo-500",
        iconName: "Binary",
        lessons: [
          {
            id: "4-dig-1", level: 1, title: "Sistema Binario", description: "Conversión binario a decimal.", xp: 25,
            questions: [{ id: "qdi41", type: "multiple-choice", question: "¿A qué número decimal equivale el número binario '1010'?", options: ["10", "8", "12", "14"], correctAnswer: "10", explanation: "1x2³ + 0x2² + 1x2¹ + 0x2⁰ = 8 + 0 + 2 + 0 = 10." }]
          },
          {
            id: "4-dig-2", level: 2, title: "Compuertas Lógicas Básicas", description: "AND, OR y NOT en TTL (74xx).", xp: 30,
            questions: [{ id: "qdi42", type: "match-pairs", question: "Asocia cada compuerta lógica con su función:", pairs: [{ left: "Compuerta AND (7408)", right: "Multiplicación lógica (Solo da 1 si todas las entradas son 1)" }, { left: "Compuerta OR (7432)", right: "Suma lógica (Da 1 si al menos una entrada es 1)" }, { left: "Compuerta NOT (7404)", right: "Inversor lógico (Cambia 0 por 1 y viceversa)" }], explanation: "Compuertas elementales en la lógica combinacional." }]
          },
          {
            id: "4-dig-3", level: 3, title: "Tablas de Verdad", description: "Análisis de combinaciones binarias.", xp: 35,
            questions: [{ id: "qdi43", type: "true-false", question: "Una compuerta OR de dos entradas entrega un 0 a la salida únicamente cuando ambas entradas están en 0.", correctAnswer: true, explanation: "Verdadero. Si cualquiera de las entradas es 1, la salida es 1." }]
          },
          {
            id: "4-dig-4", level: 4, title: "Compuertas NAND y NOR", description: "Lógica universal invertida.", xp: 40,
            questions: [{ id: "qdi44", type: "fill-blanks", question: "La compuerta _______ (NAND / NOR) entrega un 0 a la salida solo cuando todas sus entradas están en 1.", options: ["NAND", "NOR", "XOR", "XNOR"], correctAnswer: "NAND", explanation: "La NAND es la compuerta AND seguida de un inversor." }]
          },
          {
            id: "4-dig-5", level: 5, title: "Examen de Digitales I", description: "Álgebra de Boole y simplificación.", xp: 50,
            questions: [{ id: "qdi45", type: "multiple-choice", question: "¿Cuántas combinaciones posibles en la tabla de verdad tiene un circuito lógico de 3 entradas binarias?", options: ["8", "6", "9", "4"], correctAnswer: "8", explanation: "2^N = 2³ = 8 combinaciones (000 hasta 111)." }]
          }
        ]
      },
      {
        id: "m-4-mate4",
        name: "Matemática IV",
        description: "Funciones cuadráticas, logaritmos, exponenciales y números complejos.",
        color: "from-teal-500 to-emerald-600",
        iconName: "Calculator",
        lessons: [
          {
            id: "4-mat4-1", level: 1, title: "Números Complejos", description: "Forma binómica y polar.", xp: 25,
            questions: [{ id: "qm41", type: "fill-blanks", question: "La unidad imaginaria 'i' o 'j' (en electrotecnia) se define como la raíz cuadrada de ________.", options: ["-1", "0", "1", "-2"], correctAnswer: "-1", explanation: "j = √(-1). En electrónica se usa 'j' para no confundir con corriente 'i'." }]
          },
          {
            id: "4-mat4-2", level: 2, title: "Función Cuadrática", description: "Parábolas y raíces (Baskhara).", xp: 30,
            questions: [{ id: "qm42", type: "true-false", question: "El coeficiente 'a' en y = ax² + bx + c determina si las ramas de la parábola abren hacia arriba o hacia abajo.", correctAnswer: true, explanation: "Verdadero. Si a es positivo abre hacia arriba; si es negativo, hacia abajo." }]
          },
          {
            id: "4-mat4-3", level: 3, title: "Logaritmos y Decibeles", description: "Propiedades logarítmicas en sonido y ganancia.", xp: 35,
            questions: [{ id: "qm43", type: "multiple-choice", question: "¿A cuánto equivale el logaritmo en base 10 de 1000? (log_10 1000 = ?)", options: ["3", "10", "100", "30"], correctAnswer: "3", explanation: "10³ = 1000. Por eso en acústica o filtros se usa escala logarítmica." }]
          },
          {
            id: "4-mat4-4", level: 4, title: "Funciones Exponenciales", description: "Carga y descarga de capacitores.", xp: 40,
            questions: [{ id: "qm44", type: "match-pairs", question: "Asocia cada función con su comportamiento en el tiempo:", pairs: [{ left: "Exponencial creciente (1 - e^-t)", right: "Curva de carga de voltaje en un capacitor" }, { left: "Exponencial decreciente (e^-t)", right: "Curva de descarga de corriente en un circuito RC" }], explanation: "Modelado matemático de transitorios en electrónica." }]
          },
          {
            id: "4-mat4-5", level: 5, title: "Examen Matemática IV", description: "Cálculo de impedancias complejas.", xp: 50,
            questions: [{ id: "qm45", type: "multiple-choice", question: "Al sumar dos números complejos en forma binómica (3 + j4) + (2 + j2), el resultado es:", options: ["5 + j6", "6 + j8", "1 + j2", "5 + j2"], correctAnswer: "5 + j6", explanation: "Se suman partes reales (3+2) y partes imaginarias (4+2)." }]
          }
        ]
      }
    ]
  },

  // 5TO AÑO
  {
    year: 5,
    title: "5to Año - Ciclo Superior",
    subtitle: "Profundización: Corriente alterna, microcontroladores y amplificadores",
    subjects: [
      {
        id: "m-5-electrotecnia2",
        name: "Electrotecnia II",
        description: "Corriente Alterna monofásica y trifásica, transformadores e impedancia.",
        color: "from-red-500 to-amber-600",
        iconName: "Zap",
        lessons: [
          {
            id: "5-ele-1", level: 1, title: "Onda Senoidal de CA", description: "Frecuencia, período y valor eficaz (RMS).", xp: 25,
            questions: [{ id: "q51", type: "multiple-choice", question: "¿Cuál es el valor eficaz (RMS) aproximado de una toma de corriente alterna con pico máximo de 311 Voltios?", options: ["220 V", "311 V", "110 V", "380 V"], correctAnswer: "220 V", explanation: "V_rms = V_pico / √2 = 311 / 1.414 ≈ 220 V." }]
          },
          {
            id: "5-ele-2", level: 2, title: "Reactancia Inductiva (X_L)", description: "Bobinas y desfase de corriente.", xp: 30,
            questions: [{ id: "q52", type: "true-false", question: "En un inductor (bobina) ideal en corriente alterna, la corriente eléctrica ATRASA 90° respecto al voltaje.", correctAnswer: true, explanation: "Verdadero. La autoinducción se opone a los cambios bruscos de corriente." }]
          },
          {
            id: "5-ele-3", level: 3, title: "Reactancia Capacitiva (X_C)", description: "Condensadores en CA.", xp: 35,
            questions: [{ id: "q53", type: "fill-blanks", question: "En un capacitor en corriente alterna senoidal, la corriente _________ (adelanta / atrasa) 90 grados respecto a la tensión.", options: ["Adelanta", "Atrasa", "Se anula", "Queda en fase"], correctAnswer: "Adelanta", explanation: "El capacitor se llena de carga antes de que el voltaje alcance su máximo." }]
          },
          {
            id: "5-ele-4", level: 4, title: "Factor de Potencia (Cos φ)", description: "Potencia activa, reactiva y aparente.", xp: 40,
            questions: [{ id: "q54", type: "match-pairs", question: "Asocia cada tipo de potencia en CA con su unidad de medida:", pairs: [{ left: "Potencia Activa (P)", right: "Watts (W) - Trabajo mecánico o calor útil" }, { left: "Potencia Reactiva (Q)", right: "Volt-Amper Reactivo (VAr) - Magnetización de motores" }, { left: "Potencia Aparente (S)", right: "Volt-Amper (VA) - Potencia total de la red" }], explanation: "El triángulo de potencias es clave en el diseño industrial." }]
          },
          {
            id: "5-ele-5", level: 5, title: "Sistemas Trifásicos", description: "Conexiones Estrella y Triángulo en 380V.", xp: 50,
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
            id: "5-inf-1", level: 1, title: "Bucles Iterativos: FOR", description: "Repetición controlada por contador.", xp: 25,
            questions: [{ id: "qi51", type: "fill-blanks", question: "Para repetir un bloque de código 10 veces en C++, utilizamos el bucle: _______ (int i=0; i<10; i++) { ... }", options: ["for", "while", "do", "switch"], correctAnswer: "for", explanation: "El bucle 'for' es idóneo para iteraciones con número exacto conocido." }]
          },
          {
            id: "5-inf-2", level: 2, title: "Bucle WHILE y DO-WHILE", description: "Repetición condicional.", xp: 30,
            questions: [{ id: "qi52", type: "true-false", question: "El bucle 'do-while' garantiza que el código de su interior se ejecute al menos UNA vez antes de evaluar la condición.", correctAnswer: true, explanation: "Verdadero. La condición se evalúa al final del bloque." }]
          },
          {
            id: "5-inf-3", level: 3, title: "Arreglos (Arrays / Vectores)", description: "Almacenamiento múltiple en memoria.", xp: 35,
            questions: [{ id: "qi53", type: "multiple-choice", question: "En un arreglo en C++ declarado como: int pines[5] = {2, 4, 6, 8, 10}; ¿qué valor se encuentra en la posición pines[2]?", options: ["6", "4", "2", "8"], correctAnswer: "6", explanation: "Los índices en C++ comienzan desde el cero (0:2, 1:4, 2:6)." }]
          },
          {
            id: "5-inf-4", level: 4, title: "Funciones en C++", description: "Modularización y retorno de valores (return).", xp: 40,
            questions: [{ id: "qi54", type: "match-pairs", question: "Asocia el tipo de retorno de la función con su significado:", pairs: [{ left: "void", right: "La función ejecuta una tarea pero no devuelve ningún valor" }, { left: "int", right: "La función retorna un número entero al finalizar" }], explanation: "Modular el código mejora su lectura y reutilización en robótica." }]
          },
          {
            id: "5-inf-5", level: 5, title: "Examen Informática II", description: "Programación en C++ aplicada a sensores.", xp: 50,
            questions: [{ id: "qi55", type: "multiple-choice", question: "¿Qué función principal y obligatoria debe existir en todo programa de C++ para que el sistema operativo inicie su ejecución?", options: ["main()", "start()", "loop()", "setup()"], correctAnswer: "main()", explanation: "La función 'main()' es el punto de entrada estándar en C/C++." }]
          }
        ]
      },
      {
        id: "m-5-analog2",
        name: "Electrónica Analógica II",
        description: "Transistores BJT, MOSFET y Amplificadores Operacionales.",
        color: "from-emerald-600 to-green-500",
        iconName: "Activity",
        lessons: [
          {
            id: "5-ana-1", level: 1, title: "El Transistor BJT", description: "Base, Colector, Emisor y ganancia Beta (h_fe).", xp: 25,
            questions: [{ id: "qa51", type: "match-pairs", question: "Asocia cada estado del transistor NPN con su comportamiento en un circuito:", pairs: [{ left: "Región de Corte", right: "Actúa como un interruptor abierto (no hay corriente de base ni de colector)" }, { left: "Región de Saturación", right: "Actúa como un interruptor cerrado (máxima corriente entre colector y emisor)" }, { left: "Región Activa", right: "Amplifica señales analógicas proporcionales a la corriente de base" }], explanation: "El BJT se puede usar como llave de conmutación o amplificador lineal." }]
          },
          {
            id: "5-ana-2", level: 2, title: "Transistores MOSFET", description: "Puerta aislada y control por voltaje.", xp: 30,
            questions: [{ id: "qa52", type: "true-false", question: "A diferencia del BJT que se controla por corriente, el MOSFET se controla aplicando VOLTAJE en su pin de Puerta (Gate).", correctAnswer: true, explanation: "Verdadero. La alta impedancia del Gate hace que consuma casi nula corriente de control." }]
          },
          {
            id: "5-ana-3", level: 3, title: "Amplificador Operacional", description: "El circuito integrado LM741 / TL081.", xp: 35,
            questions: [{ id: "qa53", type: "multiple-choice", question: "¿Qué característica principal posee la entrada de un Amplificador Operacional ideal?", options: ["Impedancia de entrada infinita (no consume corriente por sus entradas)", "Impedancia nula (cortocircuito)", "Ganancia cero", "Solo funciona en alterna"], correctAnswer: "Impedancia de entrada infinita (no consume corriente por sus entradas)", explanation: "Esto permite medir señales débiles de sensores sin distorsionarlas ni cargar el circuito." }]
          },
          {
            id: "5-ana-4", level: 4, title: "Configuración Inversora", description: "Ganancia por lazo cerrado (A_v = - Rf / R_in).", xp: 40,
            questions: [{ id: "qa54", type: "fill-blanks", question: "Si en un op-amp inversor la resistencia de realimentación es 10k y la de entrada 1k, la ganancia de voltaje será de -______.", options: ["10", "100", "1", "5"], correctAnswer: "10", explanation: "A_v = - 10k / 1k = -10 (Invierte la fase de la onda)." }]
          },
          {
            id: "5-ana-5", level: 5, title: "Examen Analógica II", description: "Comparadores e histéresis.", xp: 50,
            questions: [{ id: "qa55", type: "multiple-choice", question: "¿Qué ocurre en la salida de un op-amp funcionando como COMPARADOR si la entrada no inversora (+) tiene mayor voltaje que la inversora (-)?", options: ["La salida satura al voltaje positivo de la fuente (+Vcc)", "La salida es cero voltios", "La salida satura a -Vcc", "El integrado se quema"], correctAnswer: "La salida satura al voltaje positivo de la fuente (+Vcc)", explanation: "El comparador sin realimentación compara voltajes y conmuta a los extremos de su alimentación." }]
          }
        ]
      },
      {
        id: "m-5-digital2",
        name: "Electrónica Digital II",
        description: "Lógica secuencial, Flip-Flops, Contadores y Registros.",
        color: "from-purple-600 to-indigo-500",
        iconName: "Cpu",
        lessons: [
          {
            id: "5-dig-1", level: 1, title: "Biestables RS", description: "Memorización de 1 bit con compuertas NOR.", xp: 25,
            questions: [{ id: "qdi51", type: "true-false", question: "En un Latch RS con compuertas NOR, activar simultáneamente las entradas Set=1 y Reset=1 genera un estado prohibido o indeterminado.", correctAnswer: true, explanation: "Verdadero. Al intentar encender y apagar a la vez, ambas salidas caen a 0 violando la regla Q y Q_negado." }]
          },
          {
            id: "5-dig-2", level: 2, title: "El Flip-Flop Tipo D", description: "Transferencia síncrona por flanco de reloj.", xp: 30,
            questions: [{ id: "qdi52", type: "multiple-choice", question: "¿Cuál es el Flip-Flop más utilizado para construir registros de memoria o dividir la frecuencia de reloj a la mitad?", options: ["Flip-Flop tipo D", "Compuerta AND", "Multiplexor", "Decodificador"], correctAnswer: "Flip-Flop tipo D", explanation: "El biestable tipo D copia el dato de entrada a la salida en el instante exacto del flanco de reloj." }]
          },
          {
            id: "5-dig-3", level: 3, title: "Temporizador NE555", description: "Generador de pulsos astable y monoestable.", xp: 35,
            questions: [{ id: "qdi53", type: "match-pairs", question: "Asocia el modo del 555 con su aplicación práctica:", pairs: [{ left: "Modo Astable", right: "Genera un tren continuo de pulsos cuadrados (reloj para circuitos digitales)" }, { left: "Modo Monoestable", right: "Genera un único pulso temporizado al presionar un pulsador (temporizador de escalera)" }], explanation: "El circuito integrado más famoso de la electrónica." }]
          },
          {
            id: "5-dig-4", level: 4, title: "Contadores Binarios", description: "Conexión en cascada de Flip-Flops JK.", xp: 40,
            questions: [{ id: "qdi54", type: "fill-blanks", question: "Un contador binario construido con 4 Flip-Flops en cascada puede contar desde el 0 hasta el número decimal _______ (1111 en binario).", options: ["15", "8", "16", "10"], correctAnswer: "15", explanation: "2⁴ = 16 estados posibles, numerados del 0 al 15." }]
          },
          {
            id: "5-dig-5", level: 5, title: "Examen de Digitales II", description: "Registros de desplazamiento (Shift Registers).", xp: 50,
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
            id: "5-mat-1", level: 1, title: "Vectores en el Plano", description: "Módulo, dirección y sentido.", xp: 25,
            questions: [{ id: "qm51", type: "true-false", question: "Dos vectores con el mismo módulo y dirección, pero con sentidos opuestos, se anulan mutuamente al sumarse.", correctAnswer: true, explanation: "Verdadero. Como dos fuerzas iguales tirando de una cuerda en sentidos opuestos." }]
          },
          {
            id: "5-mat-2", level: 2, title: "Operaciones Matriciales", description: "Suma y producto de matrices.", xp: 30,
            questions: [{ id: "qm52", type: "multiple-choice", question: "Para poder multiplicar dos matrices A y B, ¿qué condición dimensional debe cumplirse?", options: ["El número de columnas de A debe ser igual al número de filas de B", "Ambas deben ser cuadradas 3x3", "El número de filas de A debe ser igual al de B", "No hay condiciones"], correctAnswer: "El número de columnas de A debe ser igual al número de filas de B", explanation: "Es la regla fundamental del producto de matrices." }]
          },
          {
            id: "5-mat-3", level: 3, title: "Determinantes", description: "Regla de Sarrus y cálculo de mallas.", xp: 35,
            questions: [{ id: "qm53", type: "fill-blanks", question: "El determinante de una matriz de 2x2 con filas (a, b) y (c, d) se calcula restando el producto cruzado: a*d - ______.", options: ["b*c", "a*c", "b*d", "a+b"], correctAnswer: "b*c", explanation: "Det = ad - bc. Es la base de la Regla de Cramer en resolución de mallas eléctricas." }]
          },
          {
            id: "5-mat-4", level: 4, title: "Sistemas de 3 Mallas (3x3)", description: "Regla de Cramer en electrotecnia.", xp: 40,
            questions: [{ id: "qm54", type: "match-pairs", question: "Asocia cada concepto algebraico con su aplicación en circuitos:", pairs: [{ left: "Matriz de Resistencias", right: "Coeficientes que multiplican a las corrientes desconocidas de cada malla" }, { left: "Vector de Voltajes", right: "Términos independientes que representan a las fuentes de cada malla" }], explanation: "El álgebra lineal resuelve redes eléctricas de múltiples nodos y lazos." }]
          },
          {
            id: "5-mat-5", level: 5, title: "Examen de Matemática V", description: "Aplicación a sistemas complejos.", xp: 50,
            questions: [{ id: "qm55", type: "multiple-choice", question: "¿Qué significa que el determinante principal de un sistema de ecuaciones de mallas sea exactamente igual a cero (Det = 0)?", options: ["Que el sistema no tiene solución única (ecuaciones dependientes o incompatibles)", "Que las corrientes son infinitas", "Que no hay resistencias", "Que todas las corrientes valen 1A"], correctAnswer: "Que el sistema no tiene solución única (ecuaciones dependientes o incompatibles)", explanation: "Si el determinante es cero, la matriz no se puede invertir para hallar una solución única." }]
          }
        ]
      }
    ]
  },

  // 6TO AÑO
  {
    year: 6,
    title: "6to Año - Ciclo Superior Avanzado",
    subtitle: "Telecomunicaciones, Automatización Industrial y Digitales Avanzados",
    subjects: [
      {
        id: "m-6-teleco1",
        name: "Telecomunicaciones I",
        description: "Líneas de transmisión, modulación AM/FM, antenas y fibra óptica.",
        color: "from-indigo-500 to-blue-600",
        iconName: "Radio",
        lessons: [
          {
            id: "6-tel-1", level: 1, title: "Ondas Electromagnéticas", description: "Espectro y velocidad de la luz (c).", xp: 25,
            questions: [{ id: "qt61", type: "multiple-choice", question: "¿A qué velocidad aproximada en el vacío se propagan las ondas de radio y la luz en telecomunicaciones?", options: ["300.000 km/s (3x10^8 m/s)", "340 m/s (Velocidad del sonido)", "1.000 km/h", "Infinita"], correctAnswer: "300.000 km/s (3x10^8 m/s)", explanation: "Es la constante 'c', velocidad máxima de propagación de la luz en el vacío." }]
          },
          {
            id: "6-tel-2", level: 2, title: "Modulación de Amplitud (AM)", description: "Portadora y onda envolvente.", xp: 30,
            questions: [{ id: "qt62", type: "true-false", question: "En la modulación AM, la información de audio se transmite modificando la altura (amplitud) de los picos de la onda portadora de alta frecuencia.", correctAnswer: true, explanation: "Verdadero. La envolvente exterior de los picos copia la onda de la voz." }]
          },
          {
            id: "6-tel-3", level: 3, title: "Modulación de Frecuencia (FM)", description: "Inmunidad al ruido y ancho de banda.", xp: 35,
            questions: [{ id: "qt63", type: "multiple-choice", question: "¿Qué parámetro de la portadora se hace variar en la Modulación de Frecuencia (FM)?", options: ["La frecuencia instantánea de la onda portadora", "La amplitud máxima de los picos", "La fase de forma constante", "El voltaje en continua"], correctAnswer: "La frecuencia instantánea de la onda portadora", explanation: "En FM los picos se juntan y separan según el volumen de la moduladora, logrando gran inmunidad al ruido." }]
          },
          {
            id: "6-tel-4", level: 4, title: "Fibra Óptica", description: "Reflexión interna total y fotones.", xp: 40,
            questions: [{ id: "qt64", type: "match-pairs", question: "Asocia cada medio de transmisión con su principio físico:", pairs: [{ left: "Cable Coaxial (Cobre)", right: "Transmite impulsos eléctricos protegidos por una malla de blindaje" }, { left: "Fibra Óptica (Vidrio/Silicio)", right: "Transmite fotones de luz por reflexión interna total sin interferencias" }], explanation: "La fibra óptica permite el ancho de banda masivo de internet." }]
          },
          {
            id: "6-tel-5", level: 5, title: "Examen Telecomunicaciones", description: "Antenas dipolo y propagación.", xp: 50,
            questions: [{ id: "qt65", type: "fill-blanks", question: "Para calcular la longitud de onda (lambda) de una señal de radio, dividimos la velocidad de la luz entre la _______ (f).", options: ["Frecuencia", "Amplitud", "Potencia", "Resistencia"], correctAnswer: "Frecuencia", explanation: "Lambda = c / f. Es fundamental para calcular el tamaño exacto de las antenas." }]
          }
        ]
      },
      {
        id: "m-6-industrial1",
        name: "Electrónica Industrial I",
        description: "Tiristores (SCR, TRIAC), optoacopladores y control de potencia.",
        color: "from-amber-600 to-yellow-500",
        iconName: "Cpu",
        lessons: [
          {
            id: "6-ind-1", level: 1, title: "Tiristor SCR", description: "Rectificador controlado de silicio.", xp: 25,
            questions: [{ id: "qin61", type: "multiple-choice", question: "¿Cómo se activa para que empiece a conducir un tiristor SCR polarizado en directa?", options: ["Aplicando un pequeño pulso de corriente positiva en su pin de Puerta (Gate)", "Calentándolo con el soldador", "Cortando el cable de ánodo", "Invirtiendo la polaridad"], correctAnswer: "Aplicando un pequeño pulso de corriente positiva en su pin de Puerta (Gate)", explanation: "Una vez disparado por el Gate, el SCR sigue conduciendo hasta que se corta la corriente principal." }]
          },
          {
            id: "6-ind-2", level: 2, title: "TRIAC y Dimmers", description: "Control bidireccional en corriente alterna.", xp: 30,
            questions: [{ id: "qin62", type: "true-false", question: "El TRIAC es un semiconductor bidireccional capaz de conmutar corriente alterna en ambos semiciclos, ideal para regular luz o velocidad de motores.", correctAnswer: true, explanation: "Verdadero. Funciona internamente como dos SCRs conectados en antiparalelo." }]
          },
          {
            id: "6-ind-3", level: 3, title: "Aislamiento Galvánico", description: "Optoacopladores y relés de estado sólido.", xp: 35,
            questions: [{ id: "qin63", type: "match-pairs", question: "Asocia cada dispositivo de control industrial con su función clave:", pairs: [{ left: "SCR (Tiristor)", right: "Rectificador controlado unidireccional para corriente continua o media onda" }, { left: "TRIAC", right: "Interruptor bidireccional para corriente alterna" }, { left: "Optoacoplador (MOC3021)", right: "Aislamiento galvánico por haz de luz entre microcontrolador y 220V" }], explanation: "Aislar la etapa de control de la etapa de potencia protege a los operarios y microprocesadores." }]
          },
          {
            id: "6-ind-4", level: 4, title: "Control por Ángulo de Fase", description: "Recorte senoidal de voltaje.", xp: 40,
            questions: [{ id: "qin64", type: "fill-blanks", question: "En un atenuador (dimmer) con DIAC y TRIAC, retardar el disparo del Gate recorta el _______ de conducción de la onda senoidal, bajando el voltaje eficaz.", options: ["Ángulo", "Frecuencia", "Neutro", "Filtro"], correctAnswer: "Ángulo", explanation: "Al recortar parte de la onda en cada ciclo, se reduce la energía promedio entregada al motor o lámpara." }]
          },
          {
            id: "6-ind-5", level: 5, title: "Examen Electrónica Ind. I", description: "Protecciones snubber y disipación térmica.", xp: 50,
            questions: [{ id: "qin65", type: "multiple-choice", question: "¿Para qué se coloca una red RC en paralelo (Snubber) a los terminales de un TRIAC al controlar cargas inductivas como motores?", options: ["Para evitar disparos indeseados por picos bruscos de voltaje (dV/dt)", "Para generar luces de colores", "Para consumir más energía", "Para aumentar el ruido"], correctAnswer: "Para evitar disparos indeseados por picos bruscos de voltaje (dV/dt)", explanation: "El snubber amortigua las oscilaciones de alta frecuencia que podrían encender al TRIAC sin señal de Gate." }]
          }
        ]
      },
      {
        id: "m-6-instalaciones1",
        name: "Instalaciones Industriales I",
        description: "Tableros eléctricos, protecciones térmicas, contactores y motores trifásicos.",
        color: "from-emerald-600 to-teal-500",
        iconName: "ShieldCheck",
        lessons: [
          {
            id: "6-ins-1", level: 1, title: "Contactores Magnéticos", description: "Bobina de mando y contactos de potencia.", xp: 25,
            questions: [{ id: "qis61", type: "multiple-choice", question: "¿Qué terminales normalizados corresponden a la bobina de accionamiento de un contactor industrial?", options: ["A1 y A2", "L1, L2 y L3", "NO 13 y 14", "T1, T2 y T3"], correctAnswer: "A1 y A2", explanation: "A1 y A2 alimentan el electroimán que atrae los contactos de alta potencia." }]
          },
          {
            id: "6-ins-2", level: 2, title: "Relevadores Térmicos", description: "Protección contra sobrecargas bimetálicas.", xp: 30,
            questions: [{ id: "qis62", type: "true-false", question: "Un relé térmico corta instantáneamente la corriente ante un cortocircuito violento.", correctAnswer: false, explanation: "Falso. El relé térmico actúa lentamente por calentamiento ante sobrecargas de motores. Para cortocircuitos se usan fusibles o disyuntores magnéticos." }]
          },
          {
            id: "6-ins-3", level: 3, title: "Arranque Estrella-Triángulo", description: "Reducción del pico de corriente de arranque.", xp: 35,
            questions: [{ id: "qis63", type: "multiple-choice", question: "¿Qué ventaja principal ofrece el método de arranque Estrella-Triángulo en un motor asincrónico trifásico?", options: ["Reduce el pico de corriente de arranque en la línea a un tercio", "Duplica la velocidad final del eje", "Permite que el motor funcione sin aceite", "Evita el uso de cables de tierra"], correctAnswer: "Reduce el pico de corriente de arranque en la línea a un tercio", explanation: "En estrella, la tensión por bobina se divide entre √3, disminuyendo drásticamente el impacto eléctrico al arrancar." }]
          },
          {
            id: "6-ins-4", level: 4, title: "Guardamotores Magnéticos", description: "Protección integral compacta.", xp: 40,
            questions: [{ id: "qis64", type: "fill-blanks", question: "Un guardamotor combina en un solo aparato la protección _______ (contra cortocircuitos rápidos) y la protección térmica (contra sobrecargas lentas).", options: ["Magnética", "Óptica", "Acústica", "Digital"], correctAnswer: "Magnética", explanation: "El disparo magnético desconecta en milisegundos si detecta un cortocircuito masivo." }]
          },
          {
            id: "6-ins-5", level: 5, title: "Examen Instalaciones I", description: "Diseño de tableros y enclavamientos.", xp: 50,
            questions: [{ id: "qis65", type: "match-pairs", question: "Asocia cada elemento del tablero con su función de seguridad:", pairs: [{ left: "Pulsador de Parada de Emergencia (Seta)", right: "Contacto Normalmente Cerrado (NC) con retención para cortar todo el circuito de mando" }, { left: "Enclavamiento eléctrico", right: "Conexión cruzada que impide que dos contactores contrarios entren al mismo tiempo (inversión de marcha)" }], explanation: "Normas de seguridad estrictas para automatismos de potencia." }]
          }
        ]
      },
      {
        id: "m-6-digital3",
        name: "Digitales III",
        description: "Arquitectura de microcontroladores (Arduino / ESP32) y sensores I2C/SPI.",
        color: "from-purple-600 to-pink-500",
        iconName: "Server",
        lessons: [
          {
            id: "6-dig3-1", level: 1, title: "Microcontroladores: GPIO", description: "Pines digitales de entrada y salida.", xp: 25,
            questions: [{ id: "qdg61", type: "multiple-choice", question: "¿Qué función de Arduino configura un pin como salida digital?", options: ["pinMode(pin, OUTPUT);", "digitalWrite(pin, HIGH);", "analogRead(pin);", "Serial.begin(9600);"], correctAnswer: "pinMode(pin, OUTPUT);", explanation: "La instrucción pinMode en la función setup le indica al micro si el pin leerá o entregará voltaje." }]
          },
          {
            id: "6-dig3-2", level: 2, title: "Conversor ADC (Analógico)", description: "Lectura de potenciómetros y sensores.", xp: 30,
            questions: [{ id: "qdg62", type: "true-false", question: "El conversor ADC de un Arduino Uno de 10 bits transforma un voltaje de 0 a 5V en un número digital de 0 a 1023.", correctAnswer: true, explanation: "Verdadero. 2^10 = 1024 pasos posibles (0 a 1023)." }]
          },
          {
            id: "6-dig3-3", level: 3, title: "Modulación PWM (Ancho de Pulso)", description: "Control de velocidad y brillo en LEDs.", xp: 35,
            questions: [{ id: "qdg63", type: "fill-blanks", question: "Para simular una salida analógica variando el ancho de los pulsos en un pin de Arduino, utilizamos la técnica conocida por sus siglas en inglés _____ (Pulse Width Modulation).", options: ["PWM", "USB", "I2C", "SPI"], correctAnswer: "PWM", explanation: "La modulación por ancho de pulso conmuta muy velozmente variando el ciclo de trabajo." }]
          },
          {
            id: "6-dig3-4", level: 4, title: "Protocolo de Bus I2C", description: "Comunicación serial con dos cables (SDA y SCL).", xp: 40,
            questions: [{ id: "qdg64", type: "match-pairs", question: "Asocia cada línea del bus I2C con su propósito:", pairs: [{ left: "SDA (Serial Data)", right: "Línea bidireccional por donde viajan los bits de datos entre maestro y esclavos" }, { left: "SCL (Serial Clock)", right: "Línea de sincronismo de reloj generada por el dispositivo maestro" }], explanation: "I2C permite conectar pantallas OLED y múltiples sensores usando solo 2 pines." }]
          },
          {
            id: "6-dig3-5", level: 5, title: "Examen Digitales III", description: "Interrupciones por hardware e IoT.", xp: 50,
            questions: [{ id: "qdg65", type: "multiple-choice", question: "¿Para qué se utiliza una 'Interrupción Externa' (attachInterrupt) en un microcontrolador?", options: ["Para detener inmediatamente el programa principal y atender un evento urgente en un pin (Ej: Pulsador de emergencia)", "Para apagar la pantalla", "Para borrar la memoria", "Para conectarse a WiFi"], correctAnswer: "Para detener inmediatamente el programa principal y atender un evento urgente en un pin (Ej: Pulsador de emergencia)", explanation: "Las interrupciones por hardware responden en microsegundos sin esperar al bucle loop()." }]
          }
        ]
      },
      {
        id: "m-6-analisis",
        name: "Análisis Matemático",
        description: "Límites, Derivadas, estudio de funciones y razones de cambio.",
        color: "from-rose-500 to-red-600",
        iconName: "TrendingUp",
        lessons: [
          {
            id: "6-ana-1", level: 1, title: "Concepto de Límite", description: "Aproximación asintótica a un punto.", xp: 25,
            questions: [{ id: "qam61", type: "multiple-choice", question: "¿A qué valor tiende la función f(x) = 1/x cuando X se hace infinitamente grande (X -> ∞)?", options: ["0 (Cero)", "Infinito", "1", "-1"], correctAnswer: "0 (Cero)", explanation: "Si divides 1 entre un número gigante (1/1000000), el resultado es casi nulo." }]
          },
          {
            id: "6-ana-2", level: 2, title: "La Derivada en Física", description: "Velocidad como derivada del espacio.", xp: 30,
            questions: [{ id: "qam62", type: "true-false", question: "En cinemática, la derivada de la posición respecto al tiempo (dx/dt) representa la VELOCIDAD instantánea del objeto.", correctAnswer: true, explanation: "Verdadero. La derivada mide la rapidez instantánea con la que cambia una variable." }]
          },
          {
            id: "6-ana-3", level: 3, title: "Reglas de Derivación", description: "Potencias, sumas y productos.", xp: 35,
            questions: [{ id: "qam63", type: "fill-blanks", question: "La derivada de la función potencia f(x) = X³ es igual a _____X².", options: ["3", "2", "6", "1"], correctAnswer: "3", explanation: "Regla de la potencia: d/dx (X^n) = n * X^(n-1)." }]
          },
          {
            id: "6-ana-4", level: 4, title: "Cálculo de Máximos y Mínimos", description: "Puntos donde la pendiente es cero.", xp: 40,
            questions: [{ id: "qam64", type: "match-pairs", question: "Asocia el signo de la primera derivada con el comportamiento de la curva:", pairs: [{ left: "Derivada f'(x) Positiva (>0)", right: "La función es estrictamente Creciente (la curva asciende)" }, { left: "Derivada f'(x) Negativa (<0)", right: "La función es estrictamente Decreciente (la curva desciende)" }, { left: "Derivada f'(x) Cero (=0)", right: "Punto crítico (posible máximo o mínimo horizontal)" }], explanation: "El análisis de derivadas permite optimizar dimensiones de piezas mecánicas." }]
          },
          {
            id: "6-ana-5", level: 5, title: "Examen de Análisis Mat.", description: "Problemas de optimización industrial.", xp: 50,
            questions: [{ id: "qam65", type: "multiple-choice", question: "Geométricamente, ¿qué representa la derivada de una función en un punto específico (x_0)?", options: ["La pendiente de la recta tangente a la curva en ese punto exacto", "El área total bajo la curva", "El punto de corte con el eje Y", "La distancia al origen"], correctAnswer: "La pendiente de la recta tangente a la curva en ese punto exacto", explanation: "La derivada indica la inclinación instantánea de la curva en ese punto de trabajo." }]
          }
        ]
      }
    ]
  },

  // 7MO AÑO (Graduación)
  {
    year: 7,
    title: "7mo Año - Prácticas Profesionalizantes",
    subtitle: "El año cumbre: Proyectos de graduación, PLC y automatización total",
    subjects: [
      {
        id: "m-7-teleco2",
        name: "Telecomunicaciones II",
        description: "Redes IP, telefonía celular, IoT (Internet de las Cosas) y satélites.",
        color: "from-indigo-600 to-blue-700",
        iconName: "Wifi",
        lessons: [
          {
            id: "7-tel-1", level: 1, title: "Arquitectura IoT y Nube", description: "Sensores conectados a bases de datos.", xp: 25,
            questions: [{ id: "qt71", type: "multiple-choice", question: "¿Cuál es el protocolo de mensajería ligero basado en Publicar/Suscribir más utilizado en sistemas IoT (Internet de las Cosas)?", options: ["MQTT", "HTTP 1.0", "FTP", "SMTP"], correctAnswer: "MQTT", explanation: "MQTT es ideal para microcontroladores con pocos recursos y redes inalámbricas inestables." }]
          },
          {
            id: "7-tel-2", level: 2, title: "Direccionamiento IP", description: "IPv4 vs IPv6 y máscaras de subred.", xp: 30,
            questions: [{ id: "qt72", type: "true-false", question: "Una dirección IPv4 estándar (como 192.168.1.1) está formada por 32 bits divididos en 4 octetos.", correctAnswer: true, explanation: "Verdadero. Cada número separado por un punto puede valer entre 0 y 255 (8 bits)." }]
          },
          {
            id: "7-tel-3", level: 3, title: "Redes Inalámbricas WiFi", description: "Frecuencias 2.4 GHz y 5 GHz en el ESP32.", xp: 35,
            questions: [{ id: "qt73", type: "fill-blanks", question: "El microcontrolador ESP32 muy utilizado en los talleres de 7mo año incluye conectividad inalámbrica WiFi y _______ de bajo consumo (BLE).", options: ["Bluetooth", "LoRa", "ZigBee", "NFC"], correctAnswer: "Bluetooth", explanation: "El ESP32 es un SoC dual-core que integra radiofrecuencia WiFi y Bluetooth en un solo chip." }]
          },
          {
            id: "7-tel-4", level: 4, title: "Tecnología LoRaWAN", description: "Largo alcance y bajo consumo.", xp: 40,
            questions: [{ id: "qt74", type: "match-pairs", question: "Asocia cada protocolo inalámbrico con su nicho de aplicación en IoT:", pairs: [{ left: "WiFi (IEEE 802.11)", right: "Alta velocidad de datos a corta distancia (streaming, cámaras)" }, { left: "LoRaWAN", right: "Largo alcance kilométrico con bajísimo consumo de batería (sensores agrícolas)" }], explanation: "Elegir el protocolo correcto es vital en los proyectos integradores de graduación." }]
          },
          {
            id: "7-tel-5", level: 5, title: "Examen Telecomunicaciones II", description: "Sistemas de telemetría y seguridad.", xp: 50,
            questions: [{ id: "qt75", type: "multiple-choice", question: "¿Qué función cumple un 'Broker' (como Mosquitto) en una arquitectura IoT basada en MQTT?", options: ["Recibe todos los mensajes de los publicadores y los distribuye a los suscriptores correspondientes", "Genera electricidad para el router", "Apaga las antenas de noche", "Traduce código C++ a Python"], correctAnswer: "Recibe todos los mensajes de los publicadores y los distribuye a los suscriptores correspondientes", explanation: "El Broker actúa como la oficina de correos central que clasifica y enruta la telemetría." }]
          }
        ]
      },
      {
        id: "m-7-industrial2",
        name: "Electrónica Industrial II",
        description: "Inversores de frecuencia (VFD), servomotores y robótica industrial.",
        color: "from-amber-600 to-yellow-600",
        iconName: "Cpu",
        lessons: [
          {
            id: "7-ind-1", level: 1, title: "Variadores VFD (Inversores)", description: "Control de velocidad en motores asincrónicos.", xp: 25,
            questions: [{ id: "qin71", type: "multiple-choice", question: "¿Cómo logra variar la velocidad de giro de un motor trifásico un variador de frecuencia (VFD)?", options: ["Modificando simultáneamente el voltaje y la frecuencia de alimentación (Relación V/f constante)", "Colocando resistencias de alambre gigantes", "Frenando el eje mecánicamente", "Cambiando el aceite del cárter"], correctAnswer: "Modificando simultáneamente el voltaje y la frecuencia de alimentación (Relación V/f constante)", explanation: "La velocidad sincrónica depende directamente de la frecuencia eléctrica (n = 60 * f / p)." }]
          },
          {
            id: "7-ind-2", level: 2, title: "Servomotores y Encoders", description: "Lazo cerrado de posicionamiento exacto.", xp: 30,
            questions: [{ id: "qin72", type: "true-false", question: "Un servomotor industrial requiere de un sensor de retroalimentación (Encoder o Resolver) para informar al driver la posición exacta de su eje.", correctAnswer: true, explanation: "Verdadero. El control de lazo cerrado corrige instantáneamente los errores de posición en robótica y tornos CNC." }]
          },
          {
            id: "7-ind-3", level: 3, title: "Transistores IGBT", description: "El corazón de los variadores modernos.", xp: 35,
            questions: [{ id: "qin73", type: "fill-blanks", question: "El semiconductor híbrido de potencia utilizado en los inversores VFD se conoce por sus siglas en inglés _______ (Insulated Gate Bipolar Transistor).", options: ["IGBT", "MOSFET", "TRIAC", "SCR"], correctAnswer: "IGBT", explanation: "Combina la entrada aislada por voltaje de un MOSFET con la gran capacidad de corriente de salida de un BJT." }]
          },
          {
            id: "7-ind-4", level: 4, title: "Robótica Industrial: Ejes", description: "Brazos antropomórficos y SCARA.", xp: 40,
            questions: [{ id: "qin74", type: "match-pairs", question: "Asocia cada tipo de robot industrial con su geometría de movimiento:", pairs: [{ left: "Robot Articulado (6 ejes)", right: "Brazo flexible que imita el hombro, codo y muñeca humana para soldar y pintar" }, { left: "Robot SCARA", right: "Brazo horizontal de alta rigidez vertical, ultra veloz para tareas de montaje de chips en PCB" }], explanation: "Tecnología punta en las líneas de ensamblaje automotriz y electrónica." }]
          },
          {
            id: "7-ind-5", level: 5, title: "Examen Industrial II", description: "Sistemas de frenado dinámico y regenerativo.", xp: 50,
            questions: [{ id: "qin75", type: "multiple-choice", question: "¿Qué ocurre en un variador VFD con 'frenado regenerativo' cuando un ascensor cargado baja y el motor actúa como generador?", options: ["La energía cinética devuelta se inyecta de regreso a la red eléctrica o se disipa en resistencias de frenado", "El variador explota por sobrevoltaje", "El motor gira al revés indefinidamente", "Se queman los fusibles"], correctAnswer: "La energía cinética devuelta se inyecta de regreso a la red eléctrica o se disipa en resistencias de frenado", explanation: "Aprovechar la energía de frenado de grandes inercias mejora drásticamente la eficiencia industrial." }]
          }
        ]
      },
      {
        id: "m-7-instalaciones2",
        name: "Instalaciones Industriales II",
        description: "Autómatas Programables (PLC), Neumática, Electroneumática y SCADA.",
        color: "from-emerald-600 to-teal-600",
        iconName: "Settings",
        lessons: [
          {
            id: "7-ins-1", level: 1, title: "PLC: Arquitectura de Hardware", description: "CPU, módulos I/O y fuentes de 24V CC.", xp: 25,
            questions: [{ id: "qis71", type: "multiple-choice", question: "¿Qué voltaje estándar y tipo de corriente se utiliza mayoritariamente en las entradas digitales de los sensores conectados a un PLC industrial?", options: ["24 Voltios de Corriente Continua (24V CC)", "220 Voltios Alternos", "5 Voltios", "380 Voltios Trifásicos"], correctAnswer: "24 Voltios de Corriente Continua (24V CC)", explanation: "El estándar industrial de 24V CC ofrece gran inmunidad al ruido y seguridad ante contactos accidentales." }]
          },
          {
            id: "7-ins-2", level: 2, title: "Programación en Ladder", description: "Contactos NA, NC y bobinas de salida.", xp: 30,
            questions: [{ id: "qis72", type: "match-pairs", question: "Asocia el símbolo de programación Ladder (Escalera) con su elemento equivalente en el tablero:", pairs: [{ left: "-[ ]- Contacto Normalmente Abierto", right: "Pulsador de arranque o sensor sin activar" }, { left: "-[ / ]- Contacto Normalmente Cerrado", right: "Pulsador de parada de emergencia o fin de carrera NC" }, { left: "-( )- Bobina de Salida", right: "Relé, contactor o electroválvula neumática" }], explanation: "El lenguaje Ladder imita esquemas de relés para facilitar la transición de los técnicos electricistas." }]
          },
          {
            id: "7-ins-3", level: 3, title: "Circuitos de Enclavamiento", description: "Auto-retención (memoria) en Ladder.", xp: 35,
            questions: [{ id: "qis73", type: "fill-blanks", question: "Para mantener activada una salida en el PLC después de soltar el botón de marcha, colocamos un contacto de la propia salida en paralelo llamado _______ o auto-retención.", options: ["Enclavamiento", "Inversor", "Bypass", "Cortocircuito"], correctAnswer: "Enclavamiento", explanation: "El enclavamiento en paralelo permite que la bobina siga energizada hasta pulsar la parada." }]
          },
          {
            id: "7-ins-4", level: 4, title: "Electroneumática Industrial", description: "Cilindros y electroválvulas 5/2 monostables.", xp: 40,
            questions: [{ id: "qis74", type: "true-false", question: "Una electroválvula 5/2 monostable con retorno por muelle regresa automáticamente a su posición original al cortar la corriente de su solenoide.", correctAnswer: true, explanation: "Verdadero. El resorte interior empuja la corredera garantizando una posición de reposo segura." }]
          },
          {
            id: "7-ins-5", level: 5, title: "Examen Instalaciones II", description: "Temporizadores TON y contadores CTU en PLC.", xp: 50,
            questions: [{ id: "qis75", type: "multiple-choice", question: "¿Qué hace un temporizador tipo TON (Timer On Delay) en un programa de PLC?", options: ["Retarda la activación de su contacto de salida un tiempo prefijado desde que recibe señal en su entrada", "Corta la energía de todo el PLC", "Cuenta piezas en una cinta transportadora", "Mide la presión del compresor neumático"], correctAnswer: "Retarda la activación de su contacto de salida un tiempo prefijado desde que recibe señal en su entrada", explanation: "El TON (retardo a la conexión) es clave para secuencias de arranque escalonado de motores." }]
          }
        ]
      },
      {
        id: "m-7-analisis2",
        name: "Análisis Matemático Avanzado",
        description: "Ecuaciones diferenciales, Transformada de Laplace y control de lazo cerrado.",
        color: "from-rose-600 to-red-700",
        iconName: "TrendingUp",
        lessons: [
          {
            id: "7-ana-1", level: 1, title: "Ecuaciones Diferenciales", description: "Modelado de sistemas dinámicos RLC.", xp: 25,
            questions: [{ id: "qam71", type: "true-false", question: "Una ecuación diferencial relaciona una función matemática desconocida con sus propias derivadas en el tiempo.", correctAnswer: true, explanation: "Verdadero. Describe sistemas donde el ritmo de cambio depende del estado actual del sistema." }]
          },
          {
            id: "7-ana-2", level: 2, title: "Transformada de Laplace", description: "Paso del dominio del tiempo 't' a la frecuencia compleja 's'.", xp: 30,
            questions: [{ id: "qam72", type: "multiple-choice", question: "¿Qué enorme simplificación nos brinda la Transformada de Laplace al analizar circuitos eléctricos y control?", options: ["Convierte ecuaciones diferenciales complejas del tiempo en ecuaciones algebraicas sencillas (multiplicar o dividir por 's')", "Elimina las resistencias del circuito", "Hacer que el voltaje sea infinito", "Enfriar los transistores"], correctAnswer: "Convierte ecuaciones diferenciales complejas del tiempo en ecuaciones algebraicas sencillas (multiplicar o dividir por 's')", explanation: "Laplace convierte las derivadas en multiplicaciones por 's' y las integrales en divisiones por 's'." }]
          },
          {
            id: "7-ana-3", level: 3, title: "Función de Transferencia (G_s)", description: "Relación entre Salida y Entrada en el plano 's'.", xp: 35,
            questions: [{ id: "qam73", type: "fill-blanks", question: "En un sistema de control, la Función de Transferencia G(s) se define como el cociente entre la transformada de la _________ (Salida / Entrada) y la transformada de la entrada.", options: ["Salida", "Frecuencia", "Masa", "Tensión"], correctAnswer: "Salida", explanation: "G(s) = Y(s) / U(s). Resume el comportamiento dinámico interno de una planta o motor." }]
          },
          {
            id: "7-ana-4", level: 4, title: "Estabilidad de Sistemas: Polos", description: "Raíces del denominador en el semiplano izquierdo.", xp: 40,
            questions: [{ id: "qam74", type: "match-pairs", question: "Asocia la ubicación de los Polos en el plano complejo 's' con la estabilidad del sistema:", pairs: [{ left: "Polos en el semiplano izquierdo (Re < 0)", right: "Sistema Estable (las oscilaciones se amortiguan y se detienen en un valor seguro)" }, { left: "Polos en el semiplano derecho (Re > 0)", right: "Sistema Inestable (las oscilaciones crecen exponencialmente hasta destruir el sistema)" }], explanation: "El diseño de controladores PID en automatización busca mantener todos los polos en la zona estable." }]
          },
          {
            id: "7-ana-5", level: 5, title: "Examen Final de Graduación", description: "Control PID en procesos industriales.", xp: 50,
            questions: [{ id: "qam75", type: "multiple-choice", question: "En un controlador industrial PID, ¿qué función cumple la acción 'I' (Integral)?", options: ["Elimina el error en estado estacionario (suma el error a lo largo del tiempo hasta llevarlo a cero)", "Aumenta las oscilaciones violentas al arrancar", "Frena el motor bruscamente", "Mide la temperatura ambiente"], correctAnswer: "Elimina el error en estado estacionario (suma el error a lo largo del tiempo hasta llevarlo a cero)", explanation: "El término Integral asegura que el motor o válvula alcance milimétricamente el valor deseado (setpoint)." }]
          }
        ]
      }
    ]
  }
];

export const SCHOOL_INFO = {
  name: "IPET 66",
  motto: "Escuela de Educación Técnica - Formando el Futuro Tecnológico",
  location: "Córdoba, Argentina",
  description: "Una institución dedicada a la excelencia en formación técnica profesional, integrando talleres prácticos, ciencias duras y la tecnología de vanguardia."
};

export const AI_TUTOR_TIPS = [
  {
    title: "Progresión y Candados por Años",
    content: "En IPET 66 TecnoLingo, cada año está bloqueado hasta que apruebes el año anterior. Si eres un alumno de cursos superiores (ej: 4to), al iniciar sesión tu perfil desbloqueará automáticamente los años del 1 al 4 para que repases tus bases o hagas tu especialidad."
  },
  {
    title: "Racha por Aciertos (Combo Streak)",
    content: "¡Cada respuesta correcta consecutiva en una lección eleva tu medidor de combo! Lograr rachas de x3 o x5 aciertos multiplica tus tuercas doradas y XP al terminar el nivel."
  },
  {
    title: "5 Niveles de Maestría por Materia",
    content: "Cada asignatura cuenta con 5 niveles de dificultad creciente (desde seguridad e introducción hasta el examen de graduación). Completa las 5 coronas para dominar el taller."
  },
  {
    title: "Modo Dios / Examen Libre",
    content: "Si deseas explorar el contenido de 7mo año sin haber cursado los anteriores, puedes usar el botón 'Desbloquear Todo' en la vista de aprendizaje o tu perfil para tener acceso total como Examen Libre."
  }
];
