export interface Question {
  id: string;
  type: 'multiple-choice' | 'match-pairs' | 'fill-blanks' | 'true-false';
  question: string;
  options?: string[];
  correctAnswer?: string | boolean;
  pairs?: { left: string; right: string }[];
  image?: string;
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
  name: "Volti",
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
{
  year: 1,
  title: "1er año - ciclo básico",
  subtitle: "Conocimientos básicos y seguridad",
  subjects: [
    {
      id: "m-1-taller",
      name: "Taller Laboratorio",
      description: "Herramientas de taller, ley de ohm, y normas de seguridad.",
      color: "from-amber-500 to-orange-600",
      iconName: "Wrench",
      lessons: [
        {
          id: "1-tal-1",
          level: 1,
          title: "Taller laboratorio",
          description: "Herramientas y seguridad.",
          xp: 25,
          questions: [
            {
              id: "q11",
              type: "multiple-choice",
              question: "¿Cómo se clasifican las herramientas principales que se utilizan en el taller?",
              options: [
                "Tracción, universal, corte, desbaste, precisión, alargue.",
                "Corte, desbaste, sujeción, medición, golpe, montaje.",
                "Corte, sujeción, soldadura, limpieza, desbaste.",
                "Ninguna es correcta."
              ],
              correctAnswer: "Corte, desbaste, sujeción, medición, golpe, montaje.",
              explanation: "Las herramientas de taller se clasifican según su función en corte, desbaste, sujeción, medición, golpe y montaje."
            }
          ]
        },
        {
          id: "1-tal-2",
          level: 2,
          title: "Ley de Ohm",
          description: "Cálculos básicos de corriente.",
          xp: 30,
          questions: [
            {
              id: "q12",
              type: "multiple-choice",
              question: "¿Cual de las siguientes expresiones corresponde al cálculo de Intensidad de corriente según la ley de Ohm?",
              options: [
                "i = V/R",
                "i = V² / 2xR",
                "i = P x V",
                "i = ∫V.dx"
              ],
              correctAnswer: "i = V/R",
              explanation: "La Ley de Ohm establece que la intensidad (I) es igual al voltaje (V) dividido por la resistencia (R)."
            }
          ]
        },
        {
          id: "1-tal-3",
          level: 3,
          title: "Empalmes eléctricos",
          description: "Uniones y derivaciones.",
          xp: 35,
          questions: [
            {
              id: "q13",
              type: "multiple-choice",
              question: "Si se quiere unir un cable a una línea ya existente (derivación) ¿Qué empalme se puede realizar?",
              options: [
                "Cola de ratón",
                "Empalme en T",
                "Empalme de Western"
              ],
              correctAnswer: "Empalme en T",
              explanation: "El empalme en T se utiliza específicamente para derivar una línea secundaria a partir de una línea principal."
            }
          ]
        },
        {
          id: "1-tal-4",
          level: 4,
          title: "Magnitudes principales",
          description: "Conceptos fundamentales.",
          xp: 40,
          questions: [
            {
              id: "q14",
              type: "multiple-choice",
              question: "¿Cuáles son las 3 magnitudes eléctricas principales?",
              options: [
                "Corriente, Potencia, Frecuencia",
                "Voltaje, Resistencia, Amplitud",
                "Voltaje, Corriente, Resistencia",
                "Frecuencia, Temperatura, Altitud"
              ],
              correctAnswer: "Voltaje, Corriente, Resistencia",
              explanation: "Las 3 magnitudes fundamentales de la electricidad que relaciona la Ley de Ohm son el Voltaje, la Corriente y la Resistencia."
            }
          ]
        },
        {
          id: "1-tal-5",
          level: 5,
          title: "Normas de seguridad",
          description: "Comportamiento en el taller.",
          xp: 50,
          questions: [
            {
              id: "q15",
              type: "multiple-choice",
              question: "En un taller-laboratorio de electrónica donde estaba teniendo lugar una clase. Raulito tenía sed y sacó su botella para beber agua. ¿Qué regla de seguridad el laboratorio rompió Raulito?",
              options: [
                "No interrumpir la clase",
                "No trabajar sin elementos de seguridad",
                "No operar maquinaria eléctrica sin aprobación y autorización del profesor",
                "No ingerir alimentos ni bebidas en el taller"
              ],
              correctAnswer: "No ingerir alimentos ni bebidas en el taller",
              explanation: "Por normas de seguridad está terminantemente prohibido ingerir alimentos o bebidas dentro del taller para evitar accidentes."
            }
          ]
        }
      ]
    },
    {
      id: "m-1-dibujo",
      name: "Dibujo Técnico",
      description: "Normas IRAM, lápices, tipos de líneas y formatos de hoja.",
      color: "from-blue-500 to-indigo-600",
      iconName: "PencilRuler",
      lessons: [
        {
          id: "1-dib-1",
          level: 1,
          title: "Normas IRAM",
          description: "Propósito de las normas.",
          xp: 25,
          questions: [
            {
              id: "qd11",
              type: "multiple-choice",
              question: "¿Cuál es el propósito de las normas IRAM?",
              options: [
                "Decorar los dibujos con líneas cuidadas",
                "Escribir más rápido",
                "Profundizar sobre el sentido de los centímetros",
                "Profundizar sobre la prolijidad y uso de medidas"
              ],
              correctAnswer: "Profundizar sobre la prolijidad y uso de medidas",
              explanation: "Las normas IRAM buscan unificar y estandarizar la representación gráfica."
            }
          ]
        },
        {
          id: "1-dib-2",
          level: 2,
          title: "Tipos de lápices",
          description: "Clasificación de minas.",
          xp: 30,
          questions: [
            {
              id: "qd12",
              type: "multiple-choice",
              question: "¿En que afecta a un lápiz las siglas HB?",
              options: [
                "Afecta al largo del lápiz y su vida útil",
                "Afecta a la dureza y a la punta del lápiz",
                "Afecta a la dureza y oscuridad del trazo",
                "Afecta al peso del lápiz y cuánto daña la hoja"
              ],
              correctAnswer: "Afecta a la dureza y oscuridad del trazo",
              explanation: "HB (Hard Black) indica un equilibrio medio entre dureza y oscuridad del trazo."
            }
          ]
        },
        {
          id: "1-dib-3",
          level: 3,
          title: "Tipos de líneas",
          description: "Líneas en dibujo técnico.",
          xp: 35,
          questions: [
            {
              id: "qd13",
              type: "multiple-choice",
              question: "¿Qué tipos de líneas se utilizan en dibujo técnico?",
              options: [
                "Línea larga, alta, baja y punteada",
                "Línea discontinua, de trazo y punto, continua y punteada",
                "Línea perpendicular, transversal, hexagonal",
                "Línea de cota y continua"
              ],
              correctAnswer: "Línea discontinua, de trazo y punto, continua y punteada",
              explanation: "Las normas establecen líneas continuas (contornos), de trazos (ocultas) y de trazo y punto (ejes)."
            }
          ]
        },
        {
          id: "1-dib-4",
          level: 4,
          title: "Instrumentos",
          description: "Uso de escuadras.",
          xp: 40,
          questions: [
            {
              id: "qd14",
              type: "multiple-choice",
              question: "¿Qué escuadras se utilizan para las láminas?",
              options: [
                "45° y 30°",
                "90° y 120°",
                "360° y 30°",
                "45° y 120°"
              ],
              correctAnswer: "45° y 30°",
              explanation: "Las escuadras estándar en dibujo técnico son la de 45° (isósceles) y la de 30°/60° (cartabón)."
            }
          ]
        },
        {
          id: "1-dib-5",
          level: 5,
          title: "Formatos normalizados",
          description: "Tamaños de hojas.",
          xp: 50,
          questions: [
            {
              id: "qd15",
              type: "multiple-choice",
              question: "¿Qué tamaño de hojas se utiliza para realizar las láminas habitualmente?",
              options: [
                "A1",
                "A2",
                "A3",
                "A4"
              ],
              correctAnswer: "A4",
              explanation: "El formato A4 (210x297mm) es el estándar habitual para prácticas básicas y entrega de láminas."
            }
          ]
        }
      ]
    },
    {
      id: "m-1-tecno",
      name: "Tecnología",
      description: "Circuitos en serie, paralelo, uso del multímetro y cálculos prácticos.",
      color: "from-purple-500 to-pink-600",
      iconName: "Cpu",
      lessons: [
        {
          id: "1-tec-1",
          level: 1,
          title: "Circuitos en serie",
          description: "Cálculo de resistencia total.",
          xp: 25,
          questions: [
            {
              id: "qt11",
              type: "multiple-choice",
              question: "¿Cual es la expresión correcta para un circuito serie de 3 resistencias?",
              options: [
                "Rt= R1x R2xR3",
                "Rt= R1+R2+R3",
                "Rt= 1 ÷ (R1÷1 + R2÷1 + R3÷1)",
                "Rt= R1xR2 ÷ (R1+R2)"
              ],
              correctAnswer: "Rt= R1+R2+R3",
              explanation: "En un circuito en serie, la resistencia total es la suma aritmética de todas las resistencias."
            }
          ]
        },
        {
          id: "1-tec-2",
          level: 2,
          title: "Circuitos en paralelo",
          description: "Cálculo de resistencia total.",
          xp: 30,
          questions: [
            {
              id: "qt12",
              type: "multiple-choice",
              question: "¿Cual es la expresión correcta para un circuito paralelo de 3 resistencias?",
              options: [
                "Rt= R1xR2xR3",
                "Rt= R1+R2+R3",
                "Rt= 1 ÷ (1/R1 + 1/R2 + 1/R3)",
                "Rt= R1xR2 ÷ (R1+R2)"
              ],
              correctAnswer: "Rt= 1 ÷ (1/R1 + 1/R2 + 1/R3)",
              explanation: "En paralelo, la inversa de la resistencia total es igual a la suma de las inversas de cada resistencia."
            }
          ]
        },
        {
          id: "1-tec-3",
          level: 3,
          title: "Uso del multímetro",
          description: "Mediciones de magnitudes.",
          xp: 35,
          questions: [
            {
              id: "qt13",
              type: "multiple-choice",
              question: "En un circuito cerrado con fuente y una resistencia, ¿Como se mide VT, IT y R con un tester?",
              options: [
                "IT en serie abriendo el circuito, VT en paralelo a la fuente, R en paralelo a la resistencia.",
                "IT en paralelo al circuito, VT en paralelo a la fuente, R en serie con la resistencia",
                "IT en serie con la fuente, VT en paralelo con la resistencia, R en paralelo con la resistencia"
              ],
              correctAnswer: "IT en serie abriendo el circuito, VT en paralelo a la fuente, R en paralelo a la resistencia.",
              explanation: "La corriente (IT) se mide en serie (el tester es parte del circuito), el voltaje (VT) en paralelo."
            }
          ]
        },
        {
          id: "1-tec-4",
          level: 4,
          title: "Cálculos prácticos I",
          description: "Análisis de circuito 1.",
          xp: 40,
          questions: [
            {
              id: "qt14",
              type: "multiple-choice",
              question: "En el siguiente circuito calcular RT, IT y VT.",
              image: "1er_ano_q4.png",
              options: [
                "RT= 3k Ω; IT= 5mA; VT= 40v",
                "RT= 2,4k Ω; IT= 5mA; VT= 10v",
                "RT= 2,2k Ω; IT= 20mA; VT= 40v",
                "RT= 2,4k Ω; IT= 5mA; VT= 12v"
              ],
              correctAnswer: "RT= 2,4k Ω; IT= 5mA; VT= 12v",
              explanation: "Aplicando las leyes de los circuitos mixtos y la Ley de Ohm se obtienen los valores de 2.4k ohms, 5mA y 12v."
            }
          ]
        },
        {
          id: "1-tec-5",
          level: 5,
          title: "Cálculos prácticos II",
          description: "Análisis de circuito 2.",
          xp: 50,
          questions: [
            {
              id: "qt15",
              type: "multiple-choice",
              question: "En el siguiente circuito calcular RT, IT y VT.",
              image: "1er_ano_q5.png",
              options: [
                "RT= 183,33Ω; IT= 65,545mA; VT= 12v",
                "RT= 100Ω; IT= 6mA; VT= 24v",
                "RT= 183,33Ω; IT= 65,545mA; VT= 6v",
                "RT= 200Ω; IT= 65,545mA; VT= 12v"
              ],
              correctAnswer: "RT= 183,33Ω; IT= 65,545mA; VT= 12v",
              explanation: "Resolviendo el circuito mixto paso a paso se llega a la resistencia equivalente de 183.33 ohms y una corriente de 65.545mA a 12v."
            }
          ]
        }
      ]
    },
    {
      id: "m-1-mate",
      name: "Matemática",
      description: "Números primos, ecuaciones, probabilidad y expresiones algebraicas.",
      color: "from-emerald-500 to-teal-600",
      iconName: "Calculator",
      lessons: [
        {
          id: "1-mat-1",
          level: 1,
          title: "Números primos",
          description: "Conceptos básicos.",
          xp: 25,
          questions: [
            {
              id: "qm11",
              type: "multiple-choice",
              question: "¿Cual de los siguientes números es primo?",
              options: [
                "17",
                "15",
                "12",
                "21"
              ],
              correctAnswer: "17",
              explanation: "Los números primos son solo divisibles por 1 y por ellos mismos, por lo tanto el único primo es el 17."
            }
          ]
        },
        {
          id: "1-mat-2",
          level: 2,
          title: "Resolución de ecuaciones",
          description: "Despeje de incógnitas.",
          xp: 30,
          questions: [
            {
              id: "qm12",
              type: "multiple-choice",
              question: "Resolver la ecuación: 3x + 5 = 20",
              options: [
                "x = 3",
                "x = 5",
                "x = 7",
                "x = 15"
              ],
              correctAnswer: "x = 5",
              explanation: "Restando 5 a ambos lados queda 3x = 15. Luego dividiendo por 3 queda x = 5."
            }
          ]
        },
        {
          id: "1-mat-3",
          level: 3,
          title: "Probabilidad",
          description: "Probabilidad de eventos.",
          xp: 35,
          questions: [
            {
              id: "qm13",
              type: "multiple-choice",
              question: "Al lanzar un dado común de 6 lados ¿cual es la probabilidad que caiga en 5?",
              options: [
                "1/2",
                "1/4",
                "1/6",
                "4/6"
              ],
              correctAnswer: "1/6",
              explanation: "La probabilidad de que caiga en 5 o en cualquier otro numero es 1 en 6 (un caso favorable sobre 6 casos posibles)."
            }
          ]
        },
        {
          id: "1-mat-4",
          level: 4,
          title: "Expresiones algebraicas",
          description: "Definición.",
          xp: 40,
          questions: [
            {
              id: "qm14",
              type: "multiple-choice",
              question: "¿Que es una expresión algebraica?",
              options: [
                "Una operación matemática que siempre tiene una respuesta numérica única",
                "Una combinación de números, letras y operaciones matemáticas que representa una cantidad o relación",
                "Una igualdad entre dos expresiones matemáticas",
                "Un conjunto de datos organizados en una tabla"
              ],
              correctAnswer: "Una combinación de números, letras y operaciones matemáticas que representa una cantidad o relación",
              explanation: "Las expresiones algebraicas están constituidas por números, letras y operaciones matemáticas."
            }
          ]
        },
        {
          id: "1-mat-5",
          level: 5,
          title: "Tipos de ángulos",
          description: "Clasificación.",
          xp: 50,
          questions: [
            {
              id: "qm15",
              type: "match-pairs",
              question: "Seleccionar el tipo de ángulo con su definición correcta:",
              pairs: [
                {
                  left: "Ángulo obtuso",
                  right: "mide más de 90° y menos de 180°"
                },
                {
                  left: "Ángulo llano",
                  right: "mide exactamente 180°"
                },
                {
                  left: "Ángulo recto",
                  right: "mide exactamente 90°"
                },
                {
                  left: "Ángulo agudo",
                  right: "mide menos de 90°"
                }
              ],
              explanation: "La clasificación de los ángulos se realiza según su medida en grados."
            }
          ]
        }
      ]
    }
  ]
},
{
  year: 2,
  title: "2do año - ciclo básico",
  subtitle: "Fundamentos y herramientas",
  subjects: [
    {
      id: "m-2-dibujo",
      name: "Dibujo Técnico",
      description: "Normas IRAM/ISO, proyecciones y simbología.",
      color: "from-blue-500 to-indigo-600",
      iconName: "Box",
      lessons: [
        {
          id: "2-dib-1",
          level: 1,
          title: "Normas IRAM/ISO en dibujo técnico",
          description: "Unificación de criterios de representación.",
          xp: 25,
          questions: [
            {
              id: "qd21",
              type: "multiple-choice",
              question: "¿Para qué sirven las normas IRAM/ISO en dibujo técnico?",
              options: [
                "Para unificar la representación técnica",
                "Mejorar la estética de los planos industriales",
                "Reemplazar completamente el uso de instrumentos de dibujo técnico",
                "Para permitir que cada técnico utilice su propio sistema gráfico"
              ],
              correctAnswer: "Para unificar la representación técnica",
              explanation: "Las normas IRAM/ISO buscan unificar criterios de representación para que cualquier plano técnico pueda ser entendido correctamente por distintas personas, empresas o países."
            }
          ]
        },
        {
          id: "2-dib-2",
          level: 2,
          title: "Proyecciones ortogonales",
          description: "Vistas planas relacionadas.",
          xp: 30,
          questions: [
            {
              id: "qd22",
              type: "multiple-choice",
              question: "¿Qué función cumplen las proyecciones ortogonales?",
              options: [
                "Representar un objeto mediante vistas planas relacionadas entre sí",
                "Generar una representación tridimensional artística del objeto",
                "Mostrar únicamente las dimensiones exteriores de la pieza",
                "Sustituir completamente las perspectivas isométricas"
              ],
              correctAnswer: "Representar un objeto mediante vistas planas relacionadas entre sí",
              explanation: "Las proyecciones ortogonales permiten representar un objeto desde planta, alzada y perfil para entender completamente su forma."
            }
          ]
        },
        {
          id: "2-dib-3",
          level: 3,
          title: "Acotaciones en planos",
          description: "Dimensiones y medidas normalizadas.",
          xp: 35,
          questions: [
            {
              id: "qd23",
              type: "multiple-choice",
              question: "¿Para qué sirven las acotaciones en un plano técnico?",
              options: [
                "Definir las dimensiones necesarias para fabricar o interpretar una pieza",
                "Mejorar la presentación visual del plano",
                "Establecer el tipo de material utilizado en cada componente",
                "Diferenciar las vistas principales de las secundarias"
              ],
              correctAnswer: "Definir las dimensiones necesarias para fabricar o interpretar una pieza",
              explanation: "Las acotaciones indican tamaños, distancias y medidas exactas necesarias para fabricar o interpretar correctamente una pieza."
            }
          ]
        },
        {
          id: "2-dib-4",
          level: 4,
          title: "Símbolos en esquemas electrónicos",
          description: "Elementos normalizados de componentes.",
          xp: 40,
          questions: [
            {
              id: "qd24",
              type: "multiple-choice",
              question: "¿Qué representan los símbolos en un esquema electrónico?",
              options: [
                "Elementos normalizados que identifican componentes y conexiones eléctricas",
                "Referencias gráficas para indicar profundidad y perspectiva",
                "Indicaciones exclusivas sobre el tamaño físico de los componentes",
                "Recursos gráficos para organizar visualmente el plano"
              ],
              correctAnswer: "Elementos normalizados que identifican componentes y conexiones eléctricas",
              explanation: "Los símbolos electrónicos son representaciones normalizadas que permiten reconocer componentes como resistencias, capacitores y transistores en cualquier circuito."
            }
          ]
        },
        {
          id: "2-dib-5",
          level: 5,
          title: "Evaluación de dibujo: normas y proyecciones",
          description: "Examen final de normas y simbolización.",
          xp: 50,
          questions: [
            {
              id: "qd25",
              type: "multiple-choice",
              question: "Las normas IRAM/ISO buscan unificar criterios de representación para que cualquier plano pueda ser entendido internacionalmente. ¿Cuál es su principal beneficio?",
              options: [
                "Que cualquier técnico del mundo pueda interpretar el mismo plano sin ambigüedades",
                "Que los planos sean más coloridos",
                "Que solo se usen lápices HB",
                "Que no sea necesario usar escuadras"
              ],
              correctAnswer: "Que cualquier técnico del mundo pueda interpretar el mismo plano sin ambigüedades",
              explanation: "La normalización garantiza que un dibujo técnico creado en Argentina sea interpretado correctamente en cualquier otro país sin necesidad de aclaraciones adicionales."
            }
          ]
        }
      ]
    },
    {
      id: "m-2-mate",
      name: "Matemática",
      description: "Números enteros, proporciones, ecuaciones y gráficos.",
      color: "from-emerald-500 to-teal-600",
      iconName: "Calculator",
      lessons: [
        {
          id: "2-mat-1",
          level: 1,
          title: "Números enteros negativos en la vida cotidiana",
          description: "Aplicaciones de negativos en taller.",
          xp: 25,
          questions: [
            {
              id: "qm21",
              type: "multiple-choice",
              question: "¿Para qué sirven los números enteros negativos en la vida cotidiana?",
              options: [
                "Para representar cantidades menores que cero (temperatura, deudas, profundidad)",
                "Solo para geometría",
                "Para medir gases",
                "Para escribir operaciones"
              ],
              correctAnswer: "Para representar cantidades menores que cero (temperatura, deudas, profundidad)",
              explanation: "Los números enteros negativos permiten expresar situaciones cotidianas como temperaturas bajo cero, deudas económicas o altitudes por debajo del nivel del mar."
            }
          ]
        },
        {
          id: "2-mat-2",
          level: 2,
          title: "Proporcionalidad directa",
          description: "Relación entre magnitudes.",
          xp: 30,
          questions: [
            {
              id: "qm22",
              type: "multiple-choice",
              question: "La relación de proporcionalidad directa indica que cuando una magnitud aumenta, la otra ____________ en la misma proporción.",
              options: [
                "Aumenta",
                "Disminuye",
                "Desaparece",
                "Se divide"
              ],
              correctAnswer: "Aumenta",
              explanation: "En una proporcionalidad directa, ambas magnitudes cambian en el mismo sentido: si una aumenta, la otra también aumenta proporcionalmente."
            }
          ]
        },
        {
          id: "2-mat-3",
          level: 3,
          title: "Números racionales",
          description: "Fracciones y expresiones decimales.",
          xp: 35,
          questions: [
            {
              id: "qm23",
              type: "multiple-choice",
              question: "¿Cuál de las siguientes opciones describe correctamente a los números racionales?",
              options: [
                "Son números que pueden expresarse como una fracción de números enteros",
                "Son números que solo pueden ser enteros positivos",
                "Son números que no pueden escribirse como fracción",
                "Son únicamente los números decimales infinitos no periódicos"
              ],
              correctAnswer: "Son números que pueden expresarse como una fracción de números enteros",
              explanation: "Los números racionales incluyen enteros, fracciones y decimales finitos o periódicos que pueden expresarse como cociente de dos números enteros."
            }
          ]
        },
        {
          id: "2-mat-4",
          level: 4,
          title: "Resolución de ecuaciones",
          description: "Despeje de variables.",
          xp: 40,
          questions: [
            {
              id: "qm24",
              type: "fill-blanks",
              question: "Al resolver la ecuación $2x + 10 = 30$, despejamos $x$ restando 10 y luego dividiendo entre ____.",
              options: [
                "2",
                "10",
                "5",
                "20"
              ],
              correctAnswer: "2",
              explanation: "$2x + 10 = 30 \\rightarrow 2x = 20 \\rightarrow x = 10$."
            }
          ]
        },
        {
          id: "2-mat-5",
          level: 5,
          title: "Evaluación de matemática",
          description: "Aplicación de proporcionalidad y racionales.",
          xp: 50,
          questions: [
            {
              id: "qm25",
              type: "multiple-choice",
              question: "Si en el taller 3 metros de cable cuestan $450, ¿cuánto costarán 8 metros del mismo cable?",
              options: [
                "$1200",
                "$900",
                "$1500",
                "$600"
              ],
              correctAnswer: "$1200",
              explanation: "Por proporcionalidad directa: $450 \\div 3 = 150$ por metro; $150 \\times 8 = 1200$."
            }
          ]
        }
      ]
    },
    {
      id: "m-2-taller",
      name: "Taller Laboratorio",
      description: "Componentes, instrumentos de medición y seguridad.",
      color: "from-amber-500 to-orange-600",
      iconName: "Wrench",
      lessons: [
        {
          id: "2-tal-1",
          level: 1,
          title: "Código de colores de resistencias",
          description: "Lectura del valor óhmico.",
          xp: 25,
          questions: [
            {
              id: "q21",
              type: "multiple-choice",
              question: "El código de color de una resistencia es: naranja, verde, marrón. ¿Qué valor indican estos colores?",
              options: [
                "350 $\\Omega$",
                "650 $\\Omega$",
                "150 $\\Omega$",
                "530 $\\Omega$"
              ],
              correctAnswer: "350 $\\Omega$",
              explanation: "Naranja = 3, Verde = 5, Marrón = ×10 → 35 × 10 = 350 $\\Omega$.",
              image: "2do_ano_q1.png"
            },
            {
              id: "q21b",
              type: "multiple-choice",
              question: "¿En qué magnitud eléctrica se mide la resistencia?",
              options: [
                "Ohmios ($\\Omega$)",
                "Amperes (A)",
                "Volts (V)",
                "Watts (W)"
              ],
              correctAnswer: "Ohmios ($\\Omega$)",
              explanation: "La resistencia eléctrica se mide en Ohmios, representados por la letra griega Omega ($\\Omega$)."
            }
          ]
        },
        {
          id: "2-tal-2",
          level: 2,
          title: "Circuitos: serie, paralelo y mixto",
          description: "Identificación de asociaciones.",
          xp: 30,
          questions: [
            {
              id: "q22",
              type: "multiple-choice",
              question: "¿Qué es un circuito mixto?",
              options: [
                "Combinación de resistencias en serie y paralelo",
                "Resistencias conectadas en serie",
                "Resistencias conectadas en paralelo",
                "Un circuito sin resistencias"
              ],
              correctAnswer: "Combinación de resistencias en serie y paralelo",
              explanation: "Un circuito mixto contiene resistencias conectadas tanto en serie como en paralelo dentro del mismo circuito.",
              image: "2do_ano_q2.png"
            },
            {
              id: "q22b",
              type: "multiple-choice",
              question: "En un circuito en serie, la corriente que circula por cada resistencia es:",
              options: [
                "La misma en todas",
                "Diferente en cada una",
                "Siempre cero",
                "Alterna"
              ],
              correctAnswer: "La misma en todas",
              explanation: "En serie solo hay un camino para los electrones, por lo tanto la corriente es idéntica en cada componente."
            }
          ]
        },
        {
          id: "2-tal-3",
          level: 3,
          title: "El multímetro (tester)",
          description: "Medición de magnitudes eléctricas.",
          xp: 35,
          questions: [
            {
              id: "q23",
              type: "multiple-choice",
              question: "¿A qué dispositivo electrónico corresponde la función de medir voltios, ohmios y amperios?",
              options: [
                "Multímetro (tester)",
                "Osciloscopio",
                "Fuente de alimentación",
                "Generador de funciones"
              ],
              correctAnswer: "Multímetro (tester)",
              explanation: "El multímetro es un instrumento que permite medir distintas magnitudes eléctricas como tensión (V), corriente (A) y resistencia ($\\Omega$)."
            }
          ]
        },
        {
          id: "2-tal-4",
          level: 4,
          title: "Ley de Ohm y potencia",
          description: "Relación entre V, I, R y P.",
          xp: 40,
          questions: [
            {
              id: "q24",
              type: "multiple-choice",
              question: "¿Qué relaciona la Ley de Ohm?",
              options: [
                "Voltaje, corriente y resistencia",
                "Potencia y calor",
                "Tiempo y frecuencia",
                "Voltaje, corriente y potencia"
              ],
              correctAnswer: "Voltaje, corriente y resistencia",
              explanation: "La Ley de Ohm establece que $V = I \\times R$, relacionando voltaje, intensidad de corriente y resistencia eléctrica."
            }
          ]
        },
        {
          id: "2-tal-5",
          level: 5,
          title: "Evaluación de taller eléctrico",
          description: "Circuitos, mediciones y leyes fundamentales.",
          xp: 50,
          questions: [
            {
              id: "q25",
              type: "multiple-choice",
              question: "Las leyes de Kirchhoff ayudan a:",
              options: [
                "Analizar circuitos complejos",
                "Crear componentes",
                "Reparar baterías",
                "Resolver placas"
              ],
              correctAnswer: "Analizar circuitos complejos",
              explanation: "Las leyes de Kirchhoff (nodos y mallas) permiten analizar y calcular tensiones y corrientes en circuitos eléctricos complejos."
            }
          ]
        }
      ]
    },
    {
      id: "m-2-tecno",
      name: "Tecnología",
      description: "Sistemas mecánicos, eléctricos básicos y programación.",
      color: "from-purple-500 to-pink-600",
      iconName: "Cog",
      lessons: [
        {
          id: "2-tec-1",
          level: 1,
          title: "El relé como componente electrónico",
          description: "Activación por bobina.",
          xp: 25,
          questions: [
            {
              id: "qt21",
              type: "multiple-choice",
              question: "El relé es un componente electrónico que se activa cuando:",
              options: [
                "La bobina recibe corriente",
                "Se calienta",
                "Se desconecta la batería",
                "Baja la resistencia"
              ],
              correctAnswer: "La bobina recibe corriente",
              explanation: "El relé funciona mediante un electroimán (bobina) que al recibir corriente atrae un contacto conmutador."
            }
          ]
        },
        {
          id: "2-tec-2",
          level: 2,
          title: "Circuitos integrados: CI 555",
          description: "Temporizador, oscilador y generador.",
          xp: 30,
          questions: [
            {
              id: "qt22",
              type: "multiple-choice",
              question: "El CI 555 se puede usar como:",
              options: [
                "Todas las anteriores",
                "Temporizador",
                "Oscilador",
                "Generador de pulsos"
              ],
              correctAnswer: "Todas las anteriores",
              explanation: "El CI 555 es un circuito integrado versátil que puede funcionar como temporizador, oscilador o generador de pulsos según su configuración."
            }
          ]
        },
        {
          id: "2-tec-3",
          level: 3,
          title: "Capacitores: almacenamiento de energía",
          description: "Función principal del capacitor.",
          xp: 35,
          questions: [
            {
              id: "qt23",
              type: "multiple-choice",
              question: "¿Cuál es la función principal de un capacitor?",
              options: [
                "Almacenar energía eléctrica",
                "Generar corriente",
                "Aumentar la resistencia",
                "Accionar motores"
              ],
              correctAnswer: "Almacenar energía eléctrica",
              explanation: "Los capacitores almacenan energía en forma de campo eléctrico entre sus placas y la liberan cuando el circuito lo requiere."
            }
          ]
        },
        {
          id: "2-tec-4",
          level: 4,
          title: "Ley de Watt",
          description: "Relación entre potencia, voltaje y corriente.",
          xp: 40,
          questions: [
            {
              id: "qt24",
              type: "multiple-choice",
              question: "¿Qué relaciona la Ley de Watt?",
              options: [
                "Potencia, voltaje y corriente, creada por James Watt",
                "Una ley sobre temperatura creada por Alessandro Volta",
                "Una ley de movimiento creada por Watt",
                "Voltaje y resistencia únicamente"
              ],
              correctAnswer: "Potencia, voltaje y corriente, creada por James Watt",
              explanation: "La Ley de Watt establece que $P = V \\times I$, donde P es potencia en watts, V es voltaje y I es corriente."
            }
          ]
        },
        {
          id: "2-tec-5",
          level: 5,
          title: "Programación por bloques",
          description: "Instrucciones conectadas visualmente.",
          xp: 50,
          questions: [
            {
              id: "qt25",
              type: "multiple-choice",
              question: "Los bloques en la programación visual, ¿para qué se usan?",
              options: [
                "Representan instrucciones conectadas para crear algoritmos",
                "Apagar circuitos",
                "Reiniciar la PC o notebooks",
                "Medir magnitudes"
              ],
              correctAnswer: "Representan instrucciones conectadas para crear algoritmos",
              explanation: "La programación por bloques une visualmente instrucciones como piezas de rompecabezas para crear algoritmos sin escribir código textual."
            }
          ]
        }
      ]
    }
  ]
},
{
  year: 3,
  title: "3er año - ciclo básico",
  subtitle: "Integración y aplicación técnica",
  subjects: [
    {
      id: "m-3-dibujo",
      name: "Dibujo Técnico",
      description: "Normas IRAM, cortes y acotaciones.",
      color: "from-blue-500 to-indigo-600",
      iconName: "PencilRuler",
      lessons: [
        {
          id: "3-dib-1",
          level: 1,
          title: "Norma IRAM 4503",
          description: "Escritura técnica.",
          xp: 25,
          questions: [
            {
              id: "qd31",
              type: "multiple-choice",
              question: "¿Qué establece la norma IRAM 4503 y cuál es su objetivo?",
              options: [
                "Establece el trazado a regla y apoyo de palabras...",
                "Establece las pautas para el trazado a mano alzada de caras...",
                "Establece las pautas para el trazado a mano alzada de letras, números y símbolos en dibujo técnico. Su objetivo es garantizar la máxima legibilidad, uniformidad y facilitar la reproducción de los planos.",
                "Establece las pautas para el trazado a mano alzada de letras... edificios."
              ],
              correctAnswer: "Establece las pautas para el trazado a mano alzada de letras, números y símbolos en dibujo técnico. Su objetivo es garantizar la máxima legibilidad, uniformidad y facilitar la reproducción de los planos.",
              explanation: "La norma IRAM 4503 regula la caligrafía o escritura técnica."
            }
          ]
        },
        {
          id: "3-dib-2",
          level: 2,
          title: "Norma IRAM 4504",
          description: "Formatos y rótulos.",
          xp: 30,
          questions: [
            {
              id: "qd32",
              type: "multiple-choice",
              question: "¿Qué es la norma IRAM 4504?",
              options: [
                "Es la norma que regula los formatos, márgenes y rótulos...",
                "Es la norma que regula los trazados, líneas y tamaños en el dibujo técnico en Argentina...",
                "Es la norma que averigua e investiga...",
                "Es la ley que regula formatos, márgenes y rótulos... tamaño A3"
              ],
              correctAnswer: "Es la norma que regula los trazados, líneas y tamaños en el dibujo técnico en Argentina...",
              explanation: "Contiene la información técnica correcta sobre la norma que regula los formatos."
            }
          ]
        },
        {
          id: "3-dib-3",
          level: 3,
          title: "Perspectivas",
          description: "Isométrica vs Caballera.",
          xp: 35,
          questions: [
            {
              id: "qd33",
              type: "multiple-choice",
              question: "¿Cual es la diferencia entre perspectiva isométrica y caballera?",
              options: [
                "La perspectiva caballera deforma todas las caras por igual...",
                "La perspectiva isométrica mantiene una cara sin deformación...",
                "La perspectiva isométrica deforma todas las caras del objeto por igual, mientras que la perspectiva caballera mantiene una cara intacta y solo altera la profundidad.",
                "Ambas perspectivas mantienen las caras intactas..."
              ],
              correctAnswer: "La perspectiva isométrica deforma todas las caras del objeto por igual, mientras que la perspectiva caballera mantiene una cara intacta y solo altera la profundidad.",
              explanation: "La perspectiva isométrica altera todas las caras por igual."
            }
          ]
        },
        {
          id: "3-dib-4",
          level: 4,
          title: "Norma IRAM 4507",
          description: "Cortes y secciones.",
          xp: 40,
          questions: [
            {
              id: "qd34",
              type: "multiple-choice",
              question: "¿Cuál es el objetivo principal de los cortes y secciones establecido por la norma IRAM 4507?",
              options: [
                "Excluir por completo las líneas invisibles...",
                "Detallar únicamente las vistas exteriores...",
                "Unificar los criterios de fabricación...",
                "Eliminar ficticiamente partes de una pieza para clarificar su geometría interior y facilitar su acotación."
              ],
              correctAnswer: "Eliminar ficticiamente partes de una pieza para clarificar su geometría interior y facilitar su acotación.",
              explanation: "Cuando una pieza tiene formas complejas en su interior, usar un corte clarifica su geometría."
            }
          ]
        },
        {
          id: "3-dib-5",
          level: 5,
          title: "Norma IRAM 4513",
          description: "Acotaciones.",
          xp: 50,
          questions: [
            {
              id: "qd35",
              type: "multiple-choice",
              question: "¿Cuál es la función principal de la norma IRAM 4513 en el dibujo tecnológico?",
              options: [
                "Establecer los códigos de programación...",
                "Unificar los criterios para plasmar las dimensiones y medidas exactas de un objeto en planos.",
                "Diseñar la geometría interior...",
                "Regular los procedimientos para la fabricación..."
              ],
              correctAnswer: "Unificar los criterios para plasmar las dimensiones y medidas exactas de un objeto en planos.",
              explanation: "La norma IRAM 4513 regula la indicación de cotas y tolerancias."
            }
          ]
        }
      ]
    },
    {
      id: "m-3-taller",
      name: "Taller Laboratorio",
      description: "Multímetro, Ohm, y fuentes de alimentación.",
      color: "from-amber-500 to-orange-600",
      iconName: "Wrench",
      lessons: [
        {
          id: "3-tal-1",
          level: 1,
          title: "Uso del multímetro",
          description: "Medición de magnitudes.",
          xp: 25,
          questions: [
            {
              id: "qt31",
              type: "multiple-choice",
              question: "¿Cuál es la función principal del tester (multímetro)?",
              options: [
                "Cortar cables",
                "Medir magnitudes eléctricas",
                "Generar electricidad",
                "Soldar componentes"
              ],
              correctAnswer: "Medir magnitudes eléctricas",
              explanation: "El tester sirve para medir tensión, corriente y resistencia."
            }
          ]
        },
        {
          id: "3-tal-2",
          level: 2,
          title: "Ley de Ohm",
          description: "Ecuación fundamental.",
          xp: 30,
          questions: [
            {
              id: "qt32",
              type: "multiple-choice",
              question: "¿Cuál es la fórmula correcta de la Ley de Ohm?",
              options: [
                "P = V · R",
                "I = V + R",
                "R = V · I",
                "V = I · R"
              ],
              correctAnswer: "V = I · R",
              explanation: "La Ley de Ohm establece que el voltaje es igual a la corriente multiplicada por la resistencia."
            }
          ]
        },
        {
          id: "3-tal-3",
          level: 3,
          title: "Circuitos en paralelo",
          description: "Tensión en derivaciones.",
          xp: 35,
          questions: [
            {
              id: "qt33",
              type: "multiple-choice",
              question: "En un circuito paralelo la tensión:",
              options: [
                "Es distinta en cada rama",
                "Es igual en todas las ramas",
                "Desaparece",
                "Es cero"
              ],
              correctAnswer: "Es igual en todas las ramas",
              explanation: "En un circuito paralelo todos los componentes están conectados a la misma fuente."
            }
          ]
        },
        {
          id: "3-tal-4",
          level: 4,
          title: "Fuentes de alimentación",
          description: "Conversión de corriente.",
          xp: 40,
          questions: [
            {
              id: "qt34",
              type: "multiple-choice",
              question: "Una fuente de alimentación se utiliza para convertir:",
              options: [
                "Corriente continua en alterna",
                "Calor en electricidad",
                "Corriente alterna en continua",
                "Luz en sonido"
              ],
              correctAnswer: "Corriente alterna en continua",
              explanation: "Transforma CA en CC para los circuitos electrónicos."
            }
          ]
        },
        {
          id: "3-tal-5",
          level: 5,
          title: "Algoritmos",
          description: "Conceptos de programación.",
          xp: 50,
          questions: [
            {
              id: "qt35",
              type: "multiple-choice",
              question: "Un algoritmo es:",
              options: [
                "Una secuencia de pasos para resolver un problema",
                "Un componente eléctrico",
                "Un sensor del robot",
                "Un tipo de circuito eléctrico"
              ],
              correctAnswer: "Una secuencia de pasos para resolver un problema",
              explanation: "En programación, un algoritmo es una lista ordenada de pasos."
            }
          ]
        }
      ]
    },
    {
      id: "m-3-tecno",
      name: "Tecnología",
      description: "Seguridad eléctrica, análisis de producto y simulación.",
      color: "from-purple-500 to-pink-600",
      iconName: "Cpu",
      lessons: [
        {
          id: "3-tec-1",
          level: 1,
          title: "Seguridad eléctrica",
          description: "Precauciones iniciales.",
          xp: 25,
          questions: [
            {
              id: "qtec31",
              type: "multiple-choice",
              question: "¿Cuál es la medida más importante antes de trabajar en un circuito eléctrico?",
              options: [
                "Tocar los cables para comprobar si hay corriente.",
                "Cortar la alimentación eléctrica y revisar las herramientas.",
                "Trabajar rápido para terminar antes.",
                "Usar cualquier herramienta aunque esté dañada."
              ],
              correctAnswer: "Cortar la alimentación eléctrica y revisar las herramientas.",
              explanation: "Antes de trabajar se debe cortar la corriente para evitar accidentes."
            }
          ]
        },
        {
          id: "3-tec-2",
          level: 2,
          title: "Análisis de producto",
          description: "Objetivos del desmontaje.",
          xp: 30,
          questions: [
            {
              id: "qtec32",
              type: "multiple-choice",
              question: "¿Cuál es el objetivo principal de desmontar y analizar un producto tecnológico?",
              options: [
                "Romper el producto para ver sus piezas.",
                "Comprender cómo funciona, identificar componentes y analizar su fabricación.",
                "Cambiar el diseño del producto.",
                "Solamente conocer la marca del producto."
              ],
              correctAnswer: "Comprender cómo funciona, identificar componentes y analizar su fabricación.",
              explanation: "Permite entender el funcionamiento interno de un sistema."
            }
          ]
        },
        {
          id: "3-tec-3",
          level: 3,
          title: "Proyecto tecnológico",
          description: "Etapas de un proyecto.",
          xp: 35,
          questions: [
            {
              id: "qtec33",
              type: "multiple-choice",
              question: "¿Qué etapas debe tener un proyecto tecnológico bien realizado?",
              options: [
                "Construcción solamente.",
                "Diseño y decoración.",
                "Planificación, diseño, construcción, prueba y presentación.",
                "Compra de materiales únicamente."
              ],
              correctAnswer: "Planificación, diseño, construcción, prueba y presentación.",
              explanation: "Un proyecto necesita organización y planificación a través de varias etapas."
            }
          ]
        },
        {
          id: "3-tec-4",
          level: 4,
          title: "Simulación y programación",
          description: "Herramientas de software.",
          xp: 40,
          questions: [
            {
              id: "qtec34",
              type: "multiple-choice",
              question: "¿Para qué sirven Proteus y Arduino en electrónica?",
              options: [
                "Para dibujar circuitos sin utilidad práctica.",
                "Para jugar y diseñar imágenes.",
                "Para simular, programar y probar circuitos electrónicos.",
                "Para reemplazar completamente los componentes electrónicos."
              ],
              correctAnswer: "Para simular, programar y probar circuitos electrónicos.",
              explanation: "Proteus permite simular circuitos y Arduino permite programarlos."
            }
          ]
        }
      ]
    },
    {
      id: "m-3-mate",
      name: "Matemática",
      description: "Porcentajes, plano cartesiano, Pitágoras y funciones.",
      color: "from-emerald-500 to-teal-600",
      iconName: "Calculator",
      lessons: [
        {
          id: "3-mat-1",
          level: 1,
          title: "Proporcionalidad",
          description: "Cálculo de porcentajes.",
          xp: 25,
          questions: [
            {
              id: "qm31",
              type: "multiple-choice",
              question: "Si un producto cuesta $1000 y aumenta un 20%, ¿cuál es el nuevo precio?",
              options: [
                "$1300",
                "$1500",
                "$1100",
                "$1200"
              ],
              correctAnswer: "$1200",
              explanation: "El 20% de 1000 es 200. Entonces: 1000 + 200 = 1200."
            }
          ]
        },
        {
          id: "3-mat-2",
          level: 2,
          title: "Plano cartesiano",
          description: "Ubicación de puntos.",
          xp: 30,
          questions: [
            {
              id: "qm32",
              type: "multiple-choice",
              question: "El punto (3, -2) se encuentra en el:",
              options: [
                "Primer cuadrante",
                "Segundo cuadrante",
                "Cuarto cuadrante",
                "Tercer cuadrante"
              ],
              correctAnswer: "Cuarto cuadrante",
              explanation: "x positiva y negativa corresponde al cuarto cuadrante."
            }
          ]
        },
        {
          id: "3-mat-3",
          level: 3,
          title: "Teorema de Pitágoras",
          description: "Triángulos rectángulos.",
          xp: 35,
          questions: [
            {
              id: "qm33",
              type: "multiple-choice",
              question: "Si en un triángulo rectángulo los catetos miden 3 y 4, la hipotenusa mide:",
              options: [
                "6",
                "7",
                "5",
                "8"
              ],
              correctAnswer: "5",
              explanation: "Teorema de Pitágoras: h² = 3² + 4² = 25 -> h = 5."
            }
          ]
        },
        {
          id: "3-mat-4",
          level: 4,
          title: "Ecuación de la recta",
          description: "Ordenada al origen.",
          xp: 40,
          questions: [
            {
              id: "qm34",
              type: "multiple-choice",
              question: "La ecuación de una recta es y = 2x + 1. ¿Cuál es su ordenada al origen?",
              options: [
                "-1",
                "1",
                "0",
                "2"
              ],
              correctAnswer: "1",
              explanation: "En la ecuación y = mx + b, el valor b es 1."
            }
          ]
        },
        {
          id: "3-mat-5",
          level: 5,
          title: "Notación científica",
          description: "Expresión de números.",
          xp: 50,
          questions: [
            {
              id: "qm35",
              type: "multiple-choice",
              question: "¿Cuál es la notación científica de 3000?",
              options: [
                "3 × 10³",
                "30 × 10³",
                "0,3 × 10³",
                "3 × 10²"
              ],
              correctAnswer: "3 × 10³",
              explanation: "3000 = 3 × 1000 = 3 × 10³."
            }
          ]
        }
      ]
    }
  ]
},
{
  year: 4,
  title: "4to año - ciclo orientado",
  subtitle: "Especialización y desarrollo",
  subjects: [
    {
      id: "m-4-digital",
      name: "Electrónica Digital",
      description: "Compuertas lógicas y Karnaugh.",
      color: "from-blue-500 to-indigo-600",
      iconName: "Cpu",
      lessons: [
        {
          id: "4-dig-1",
          level: 1,
          title: "Tablas de verdad y compuertas",
          description: "Identificación de compuertas lógicas.",
          xp: 25,
          questions: [
            {
              id: "qdi41",
              type: "multiple-choice",
              question: "Observá la siguiente tabla de verdad: A=0,B=0→0; A=0,B=1→1; A=1,B=0→1; A=1,B=1→1. ¿Qué compuerta representa?",
              options: [
                "OR",
                "AND",
                "NAND",
                "XOR"
              ],
              correctAnswer: "OR",
              explanation: "La compuerta OR da salida 1 cuando al menos una entrada es 1. Solo da 0 cuando ambas entradas son 0."
            }
          ]
        },
        {
          id: "4-dig-2",
          level: 2,
          title: "Mapas de Karnaugh",
          description: "Simplificación de funciones lógicas.",
          xp: 30,
          questions: [
            {
              id: "qdi42",
              type: "multiple-choice",
              question: "¿Para qué sirve un mapa de Karnaugh?",
              options: [
                "Simplificar funciones lógicas",
                "Convertir números binarios a decimales",
                "Sumar señales eléctricas",
                "Amplificar voltaje"
              ],
              correctAnswer: "Simplificar funciones lógicas",
              explanation: "Permite reducir la cantidad de compuertas necesarias en un circuito agrupando combinaciones de valores iguales, logrando circuitos más simples y económicos."
            }
          ]
        },
        {
          id: "4-dig-3",
          level: 3,
          title: "Álgebra de Boole",
          description: "Comportamiento lógico de variables binarias.",
          xp: 35,
          questions: [
            {
              id: "qdi43",
              type: "multiple-choice",
              question: "¿Qué estudia el Álgebra de Boole?",
              options: [
                "El comportamiento lógico de variables binarias",
                "Circuitos eléctricos de potencia",
                "Operaciones matemáticas con números complejos",
                "El movimiento de electrones"
              ],
              correctAnswer: "El comportamiento lógico de variables binarias",
              explanation: "Se utiliza para analizar y diseñar circuitos digitales mediante operaciones lógicas como AND, OR y NOT. Es la base matemática de la electrónica digital."
            }
          ]
        },
        {
          id: "4-dig-4",
          level: 4,
          title: "Compuertas lógicas y nivel lógico",
          description: "Aplicación de compuertas y estados.",
          xp: 40,
          questions: [
            {
              id: "qdi44",
              type: "multiple-choice",
              question: "¿Para qué se utilizan las compuertas lógicas?",
              options: [
                "Para realizar operaciones lógicas en circuitos digitales",
                "Para almacenar energía",
                "Para aumentar corriente eléctrica",
                "Para medir tensión"
              ],
              correctAnswer: "Para realizar operaciones lógicas en circuitos digitales",
              explanation: "Las compuertas lógicas procesan señales binarias de entrada y generan una salida según una operación lógica determinada."
            },
            {
              id: "qdi44b",
              type: "multiple-choice",
              question: "¿Qué representa un '1' lógico en electrónica digital?",
              options: [
                "Un estado alto o activado",
                "Ausencia de señal",
                "Estado indefinido",
                "Circuito desconectado"
              ],
              correctAnswer: "Un estado alto o activado",
              explanation: "El '1' lógico representa normalmente la presencia de tensión o un nivel alto de voltaje. Indica que una señal está activada."
            }
          ]
        },
        {
          id: "4-dig-5",
          level: 5,
          title: "Evaluación de digitales I",
          description: "Compuertas y simplificación.",
          xp: 50,
          questions: [
            {
              id: "qdi45",
              type: "multiple-choice",
              question: "¿Qué compuerta tiene la forma de una AND con un círculo en la salida (inversión)?",
              options: [
                "NAND",
                "NOR",
                "NOT",
                "XOR"
              ],
              correctAnswer: "NAND",
              explanation: "La compuerta NAND se reconoce porque tiene la forma de una AND y un pequeño círculo en la salida que representa la inversión lógica."
            }
          ]
        }
      ]
    },
    {
      id: "m-4-electro",
      name: "Electrotecnia I",
      description: "Leyes de Kirchhoff, potencia y capacitores.",
      color: "from-amber-500 to-orange-600",
      iconName: "Zap",
      lessons: [
        {
          id: "4-ele-1",
          level: 1,
          title: "Ley de Ohm",
          description: "Tensión, corriente y resistencia.",
          xp: 25,
          questions: [
            {
              id: "q41",
              type: "multiple-choice",
              question: "¿Cuál es la ley que relaciona tensión, corriente y resistencia?",
              options: [
                "Ley de Ohm",
                "Ley de Kirchhoff",
                "Ley de Faraday",
                "Ley de Joule"
              ],
              correctAnswer: "Ley de Ohm",
              explanation: "La Ley de Ohm establece que $V = I \\times R$, relacionando voltaje, intensidad de corriente y resistencia."
            }
          ]
        },
        {
          id: "4-ele-2",
          level: 2,
          title: "Medición de potencia eléctrica",
          description: "El vatímetro.",
          xp: 30,
          questions: [
            {
              id: "q42",
              type: "multiple-choice",
              question: "¿Qué instrumento se utiliza para medir potencia eléctrica?",
              options: [
                "Vatímetro",
                "Voltímetro",
                "Amperímetro",
                "Capacitor"
              ],
              correctAnswer: "Vatímetro",
              explanation: "El vatímetro es el instrumento diseñado para medir potencia eléctrica activa en watts (W)."
            }
          ]
        },
        {
          id: "4-ele-3",
          level: 3,
          title: "Leyes de Kirchhoff",
          description: "Nodos y mallas.",
          xp: 35,
          questions: [
            {
              id: "q43",
              type: "multiple-choice",
              question: "¿Qué establece una de las leyes de Kirchhoff en un nodo?",
              options: [
                "La suma de corrientes que entran es igual a la suma que salen",
                "La suma de voltajes es siempre cero",
                "La resistencia total es la suma de todas",
                "La corriente se divide por igual"
              ],
              correctAnswer: "La suma de corrientes que entran es igual a la suma que salen",
              explanation: "La primera ley de Kirchhoff (Ley de Nodos) establece que la suma de las corrientes que entran a un nodo es igual a la suma de las corrientes que salen."
            }
          ]
        },
        {
          id: "4-ele-4",
          level: 4,
          title: "Capacitores e inducción",
          description: "Almacenamiento de energía y campos.",
          xp: 40,
          questions: [
            {
              id: "q44",
              type: "multiple-choice",
              question: "¿Qué componente almacena energía en forma de campo eléctrico?",
              options: [
                "Capacitor",
                "Resistor",
                "Bobina",
                "Transformador"
              ],
              correctAnswer: "Capacitor",
              explanation: "Los capacitores almacenan energía electrostática en forma de campo eléctrico entre sus placas."
            },
            {
              id: "q44b",
              type: "multiple-choice",
              question: "¿Cuál de las siguientes leyes explica la inducción electromagnética?",
              options: [
                "Leyes de Faraday y Lenz",
                "Ley de Ohm",
                "Ley de Coulomb",
                "Ley de Joule"
              ],
              correctAnswer: "Leyes de Faraday y Lenz",
              explanation: "Faraday descubrió que un campo magnético variable induce una corriente; Lenz determinó el sentido de esa corriente inducida."
            }
          ]
        },
        {
          id: "4-ele-5",
          level: 5,
          title: "Evaluación de electrotecnia I",
          description: "Leyes fundamentales de la electricidad.",
          xp: 50,
          questions: [
            {
              id: "q45",
              type: "multiple-choice",
              question: "Si por un resistor de 10 $\\Omega$ circulan 2 A, ¿cuál es la potencia disipada?",
              options: [
                "40 W",
                "20 W",
                "10 W",
                "5 W"
              ],
              correctAnswer: "40 W",
              explanation: "$P = I^2 \\times R = 2^2 \\times 10 = 4 \\times 10 = 40$ W."
            }
          ]
        }
      ]
    },
    {
      id: "m-4-analog",
      name: "Electrónica Analógica I",
      description: "Semiconductores, diodos, transistores.",
      color: "from-purple-500 to-pink-600",
      iconName: "Wrench",
      lessons: [
        {
          id: "4-ana-1",
          level: 1,
          title: "El multímetro digital",
          description: "Medición de tensión, corriente y resistencia.",
          xp: 25,
          questions: [
            {
              id: "qa41",
              type: "multiple-choice",
              question: "¿Qué instrumento se utiliza para medir tensión, corriente y resistencia eléctrica?",
              options: [
                "Multímetro",
                "Osciloscopio",
                "Generador de funciones",
                "Transformador"
              ],
              correctAnswer: "Multímetro",
              explanation: "El multímetro permite medir distintas magnitudes eléctricas como tensión, corriente y resistencia en un circuito."
            }
          ]
        },
        {
          id: "4-ana-2",
          level: 2,
          title: "El diodo semiconductor",
          description: "Polarización y conducción.",
          xp: 30,
          questions: [
            {
              id: "qa42",
              type: "multiple-choice",
              question: "¿Cuál es la función principal de un diodo?",
              options: [
                "Permitir el paso de corriente en un solo sentido",
                "Amplificar señales",
                "Almacenar energía",
                "Medir tensión"
              ],
              correctAnswer: "Permitir el paso de corriente en un solo sentido",
              explanation: "El diodo conduce corriente cuando está polarizado correctamente (directa) y bloquea el paso en sentido contrario.",
              image: "4to_ano_q2.png"
            },
            {
              id: "qa42b",
              type: "multiple-choice",
              question: "¿Para qué se utiliza comúnmente un diodo Zener?",
              options: [
                "Regular tensión (mantener voltaje constante)",
                "Generar sonido",
                "Aumentar corriente",
                "Encender motores"
              ],
              correctAnswer: "Regular tensión (mantener voltaje constante)",
              explanation: "El diodo Zener se utiliza como regulador de voltaje manteniendo una tensión estable en el circuito cuando se polariza en inversa."
            }
          ]
        },
        {
          id: "4-ana-3",
          level: 3,
          title: "Transistores BJT",
          description: "PNP y NPN.",
          xp: 35,
          questions: [
            {
              id: "qa43",
              type: "multiple-choice",
              question: "¿Qué tipos principales de transistor BJT existen?",
              options: [
                "PNP y NPN",
                "AC y DC",
                "Serie y paralelo",
                "Digital y analógico"
              ],
              correctAnswer: "PNP y NPN",
              explanation: "Los transistores BJT se clasifican principalmente en PNP y NPN según la disposición de sus materiales semiconductores."
            }
          ]
        },
        {
          id: "4-ana-4",
          level: 4,
          title: "Amplificación de señales",
          description: "El transistor como amplificador.",
          xp: 40,
          questions: [
            {
              id: "qa44",
              type: "multiple-choice",
              question: "¿Qué componente se utiliza para amplificar señales eléctricas?",
              options: [
                "Transistor",
                "Resistor",
                "Capacitor",
                "Fusible"
              ],
              correctAnswer: "Transistor",
              explanation: "El transistor puede funcionar como amplificador, aumentando la intensidad de una señal eléctrica en un circuito."
            }
          ]
        },
        {
          id: "4-ana-5",
          level: 5,
          title: "Evaluación de analógica I",
          description: "Semiconductores y componentes.",
          xp: 50,
          questions: [
            {
              id: "qa45",
              type: "multiple-choice",
              question: "¿Cuál es la caída de tensión típica de un diodo de silicio polarizado en directa?",
              options: [
                "0.7 V",
                "0.3 V",
                "1.5 V",
                "5 V"
              ],
              correctAnswer: "0.7 V",
              explanation: "Los diodos de silicio tienen una barrera de potencial de aproximadamente 0.7 V a temperatura ambiente cuando conducen en directa."
            }
          ]
        }
      ]
    },
    {
      id: "m-4-info",
      name: "Informática",
      description: "Programación en C++, sistemas digitales.",
      color: "from-emerald-500 to-teal-600",
      iconName: "Monitor",
      lessons: [
        {
          id: "4-inf-1",
          level: 1,
          title: "Memoria RAM y CPU",
          description: "Componentes fundamentales de una PC.",
          xp: 25,
          questions: [
            {
              id: "qi41",
              type: "multiple-choice",
              question: "¿Cuál es la función principal de la memoria RAM?",
              options: [
                "Almacenar datos y programas temporalmente mientras se usan",
                "Guardar archivos permanentes",
                "Ejecutar operaciones matemáticas",
                "Controlar dispositivos externos"
              ],
              correctAnswer: "Almacenar datos y programas temporalmente mientras se usan",
              explanation: "La memoria RAM guarda información de manera temporal para que el procesador pueda acceder rápidamente mientras la computadora está funcionando."
            },
            {
              id: "qi41b",
              type: "multiple-choice",
              question: "¿Cuál es la función principal del procesador (CPU) en una computadora?",
              options: [
                "Ejecutar instrucciones y procesar datos",
                "Almacenar archivos permanentemente",
                "Mostrar imágenes en pantalla",
                "Conectar dispositivos externos"
              ],
              correctAnswer: "Ejecutar instrucciones y procesar datos",
              explanation: "El procesador es el componente encargado de realizar cálculos y ejecutar las instrucciones necesarias para el funcionamiento de la computadora."
            }
          ]
        },
        {
          id: "4-inf-2",
          level: 2,
          title: "Diagramas de flujo",
          description: "Simbología de algoritmos.",
          xp: 30,
          questions: [
            {
              id: "qi42",
              type: "multiple-choice",
              question: "¿Para qué se utilizan los símbolos y flechas en un diagrama de flujo?",
              options: [
                "Para representar el paso a paso del algoritmo",
                "Para decorar el algoritmo",
                "Para guardar información en la memoria",
                "Para reiniciar el algoritmo"
              ],
              correctAnswer: "Para representar el paso a paso del algoritmo",
              explanation: "Para hacer un diagrama de flujo se usan símbolos y flechas mostrando el paso a paso de un algoritmo."
            }
          ]
        },
        {
          id: "4-inf-3",
          level: 3,
          title: "Lenguaje C: sintaxis básica",
          description: "Punto y coma y estructura.",
          xp: 35,
          questions: [
            {
              id: "qi43",
              type: "multiple-choice",
              question: "¿Qué símbolo se usa para finalizar una instrucción en lenguaje C?",
              options: [
                ";",
                ".",
                ":",
                ","
              ],
              correctAnswer: ";",
              explanation: "En C, cada instrucción debe terminar con punto y coma (;) para indicar el final de la línea de código."
            }
          ]
        },
        {
          id: "4-inf-4",
          level: 4,
          title: "Estructuras de repetición: bucles",
          description: "Repetir instrucciones varias veces.",
          xp: 40,
          questions: [
            {
              id: "qi44",
              type: "multiple-choice",
              question: "¿Qué estructura se utiliza para repetir instrucciones varias veces en un programa?",
              options: [
                "Bucle",
                "Variable",
                "Clase",
                "Librería"
              ],
              correctAnswer: "Bucle",
              explanation: "Un bucle permite ejecutar varias veces un bloque de instrucciones mientras se cumpla una condición determinada."
            }
          ]
        },
        {
          id: "4-inf-5",
          level: 5,
          title: "Evaluación de informática I",
          description: "Conceptos de hardware y algoritmos.",
          xp: 50,
          questions: [
            {
              id: "qi45",
              type: "multiple-choice",
              question: "¿Qué tipo de dato usarías en C para almacenar un valor lógico de verdadero o falso?",
              options: [
                "int",
                "float",
                "char",
                "double"
              ],
              correctAnswer: "int",
              explanation: "En C no existe el tipo bool nativo; se usa int (0 = falso, cualquier otro valor = verdadero)."
            }
          ]
        }
      ]
    }
  ]
},
{
  year: 5,
  title: "5to año - especialización",
  subtitle: "Análisis avanzado y proyectos",
  subjects: [
    {
      id: "m-5-electro",
      name: "Electrónica Analógica II",
      description: "Transistores FET, Op-Amps, osciladores y filtros.",
      color: "from-amber-500 to-orange-600",
      iconName: "Wrench",
      lessons: [
        {
          id: "5-ele-1",
          level: 1,
          title: "Diferencia FET y BJT",
          description: "Tipos de transistores.",
          xp: 25,
          questions: [
            {
              id: "qe51",
              type: "multiple-choice",
              question: "¿Cuál es la principal diferencia operativa entre un Transistor de Efecto de Campo (FET) y un Transistor de Unión Bipolar (BJT)?",
              options: [
                "El FET se controla por corriente de base.",
                "El FET es un dispositivo controlado por voltaje (tensión en el Gate).",
                "El BJT tiene una impedancia de entrada mucho más alta que el FET.",
                "El FET sólo puede conducir en una dirección de la corriente."
              ],
              correctAnswer: "El FET es un dispositivo controlado por voltaje (tensión en el Gate).",
              explanation: "A diferencia de los BJT que dependen de la corriente de base, los FET utilizan un campo eléctrico creado por el voltaje en el Gate para controlar la corriente."
            }
          ]
        },
        {
          id: "5-ele-2",
          level: 2,
          title: "Amplificador operacional ideal",
          description: "Impedancias.",
          xp: 30,
          questions: [
            {
              id: "qe52",
              type: "multiple-choice",
              question: "En un Amplificador Operacional (Op-Amp) ideal, ¿cómo se definen la impedancia de entrada y la impedancia de salida?",
              image: "5to_ano_q2.png",
              options: [
                "Entrada baja y salida alta.",
                "Entrada cero y salida infinita.",
                "Impedancia de entrada infinita e impedancia de salida cero.",
                "Ambas son de 50 ohms."
              ],
              correctAnswer: "Impedancia de entrada infinita e impedancia de salida cero.",
              explanation: "Un Op-Amp ideal busca no cargar a la fuente de señal y poder entregar toda su tensión a la carga."
            }
          ]
        },
        {
          id: "5-ele-3",
          level: 3,
          title: "Amplificador inversor",
          description: "Ganancia de voltaje.",
          xp: 35,
          questions: [
            {
              id: "qe53",
              type: "multiple-choice",
              question: "Para un amplificador inversor con una resistencia de realimentación (Rf) de 100 kΩ y una resistencia de entrada (Ri) de 10 kΩ, ¿cuál es la ganancia de voltaje (Av)?",
              options: [
                "10",
                "-10",
                "11",
                "-0.1"
              ],
              correctAnswer: "-10",
              explanation: "La ganancia del amplificador inversor es -(Rf/Ri) = -(100k/10k) = -10."
            }
          ]
        },
        {
          id: "5-ele-4",
          level: 4,
          title: "Osciladores",
          description: "Criterio de Barkhausen.",
          xp: 40,
          questions: [
            {
              id: "qe54",
              type: "multiple-choice",
              question: "¿Cuál de los siguientes es un requisito indispensable para que un circuito se considere un Oscilador según el criterio de Barkhausen?",
              options: [
                "Que la ganancia de lazo sea exactamente cero.",
                "Que no tenga realimentación.",
                "Que el desfase total alrededor del lazo sea de 0° (o 360°) y la ganancia de lazo sea 1.",
                "Que utilice solo resistencias y capacitores pasivos sin fuente de energía."
              ],
              correctAnswer: "Que el desfase total alrededor del lazo sea de 0° (o 360°) y la ganancia de lazo sea 1.",
              explanation: "Para mantener oscilaciones, la señal que regresa a la entrada debe estar en fase y compensar pérdidas."
            }
          ]
        },
        {
          id: "5-ele-5",
          level: 5,
          title: "Filtros activos",
          description: "Ventajas.",
          xp: 50,
          questions: [
            {
              id: "qe55",
              type: "multiple-choice",
              question: "¿Cuál es la ventaja fundamental de un filtro activo frente a un filtro pasivo?",
              image: "5to_ano_q5.png",
              options: [
                "No requiere alimentación externa.",
                "Puede proporcionar ganancia y evita que la carga afecte la respuesta del filtro.",
                "Solo utiliza inductores de gran tamaño.",
                "Es más sencillo de construir porque no usa Amplificadores Operacionales."
              ],
              correctAnswer: "Puede proporcionar ganancia y evita que la carga afecte la respuesta del filtro.",
              explanation: "Los filtros activos utilizan componentes que permiten amplificar la señal y ofrecen aislamiento."
            }
          ]
        }
      ]
    },
    {
      id: "m-5-electrotecnia",
      name: "Electrotecnia II",
      description: "Líneas de distribución, acometidas y planos.",
      color: "from-blue-500 to-indigo-600",
      iconName: "PencilRuler",
      lessons: [
        {
          id: "5-et-1",
          level: 1,
          title: "Líneas de distribución",
          description: "Marco Legal.",
          xp: 25,
          questions: [
            {
              id: "qet51",
              type: "multiple-choice",
              question: "En el eje de Líneas de Distribución (Unidad II), ¿cuál es el marco legal principal que rige las instalaciones eléctricas en baja tensión?",
              options: [
                "La Ley de Ohm y Kirchhoff.",
                "La Ley de Seguridad Eléctrica 10281.",
                "El criterio de Barkhausen.",
                "La norma ISO 9001."
              ],
              correctAnswer: "La Ley de Seguridad Eléctrica 10281.",
              explanation: "La Ley 10281 es la normativa fundamental que rige las instalaciones eléctricas domiciliarias."
            }
          ]
        },
        {
          id: "5-et-2",
          level: 2,
          title: "Acometida domiciliaria",
          description: "Componentes mínimos.",
          xp: 30,
          questions: [
            {
              id: "qet52",
              type: "multiple-choice",
              question: "¿Qué componentes técnicos mínimos debe contener una Acometida Domiciliaria?",
              options: [
                "Solo un transformador de 220/12V.",
                "Elementos de conexión a la red, medidor y las protecciones correspondientes.",
                "Un amplificador de instrumentación y filtros activos.",
                "Únicamente el cable de puesta a tierra."
              ],
              correctAnswer: "Elementos de conexión a la red, medidor y las protecciones correspondientes.",
              explanation: "La acometida incluye el cálculo de conductores y los elementos de protección necesarios."
            }
          ]
        },
        {
          id: "5-et-3",
          level: 3,
          title: "Planos eléctricos",
          description: "Simbología.",
          xp: 35,
          questions: [
            {
              id: "qet53",
              type: "multiple-choice",
              question: "En la representación de planos eléctricos, ¿qué norma técnica se sigue para asegurar que la simbología sea universalmente comprendida?",
              options: [
                "Normas de dibujo artístico.",
                "Simbología Eléctrica Normalizada (vinculada a reglamentaciones y normas en BT).",
                "No se sigue ninguna norma, el diseño es libre.",
                "Solo las especificaciones del fabricante del motor."
              ],
              correctAnswer: "Simbología Eléctrica Normalizada (vinculada a reglamentaciones y normas en BT).",
              explanation: "El reconocimiento de la Simbología Eléctrica es central para interpretar planos."
            }
          ]
        },
        {
          id: "5-et-4",
          level: 4,
          title: "Protección diferencial",
          description: "Seguridad contra fugas.",
          xp: 40,
          questions: [
            {
              id: "qet54",
              type: "multiple-choice",
              question: "¿Qué dispositivo de protección es obligatorio según las normas de seguridad para proteger a las personas contra fugas de corriente a tierra?",
              options: [
                "Interruptor termomagnético.",
                "Fusible de alta capacidad.",
                "Interruptor diferencial (Disyuntor).",
                "Voltímetro de panel."
              ],
              correctAnswer: "Interruptor diferencial (Disyuntor).",
              explanation: "El interruptor diferencial detecta la diferencia de corriente entre fase y neutro, protegiendo la vida."
            }
          ]
        },
        {
          id: "5-et-5",
          level: 5,
          title: "Transformadores",
          description: "Relación de transformación.",
          xp: 50,
          questions: [
            {
              id: "qet55",
              type: "multiple-choice",
              question: "En un transformador monofásico de 220V/12V, si el bobinado primario tiene 1100 vueltas, ¿cuántas vueltas debe tener aproximadamente el secundario?",
              options: [
                "1100 vueltas.",
                "220 vueltas.",
                "60 vueltas.",
                "12 vueltas."
              ],
              correctAnswer: "60 vueltas.",
              explanation: "N2 = N1 * (V2/V1) = 1100 * (12/220) = 60 vueltas."
            }
          ]
        }
      ]
    },
    {
      id: "m-5-info",
      name: "Informática",
      description: "Lógica digital, compuertas XOR y memorias.",
      color: "from-purple-500 to-pink-600",
      iconName: "Cpu",
      lessons: [
        {
          id: "5-inf-1",
          level: 1,
          title: "Compuertas lógicas",
          description: "Operación XOR.",
          xp: 25,
          questions: [
            {
              id: "qi51",
              type: "multiple-choice",
              question: "En el álgebra de Boole, ¿cuál es la operación lógica que produce una salida de nivel alto (1) únicamente cuando sus entradas son diferentes entre sí?",
              options: [
                "Operación OR",
                "Operación NAND",
                "Operación XOR (OR Exclusiva)",
                "Operación NXOR"
              ],
              correctAnswer: "Operación XOR (OR Exclusiva)",
              explanation: "La operación XOR da un resultado verdadero solo cuando las entradas son distintas."
            }
          ]
        },
        {
          id: "5-inf-2",
          level: 2,
          title: "Sistemas embebidos",
          description: "Microcontroladores.",
          xp: 30,
          questions: [
            {
              id: "qi52",
              type: "multiple-choice",
              question: "¿Qué es un microcontrolador?",
              options: [
                "Una memoria RAM gigante.",
                "Una computadora completa en un solo chip (CPU, memoria y periféricos).",
                "Un dispositivo solo para emitir luz.",
                "Un tipo de resistor variable."
              ],
              correctAnswer: "Una computadora completa en un solo chip (CPU, memoria y periféricos).",
              explanation: "Un microcontrolador es un circuito integrado programable que contiene todos los componentes de un computador."
            }
          ]
        },
        {
          id: "5-inf-3",
          level: 3,
          title: "Lenguajes de programación",
          description: "C y C++.",
          xp: 35,
          questions: [
            {
              id: "qi53",
              type: "multiple-choice",
              question: "¿Para qué se utiliza comúnmente el lenguaje C/C++ en electrónica?",
              options: [
                "Para hacer dibujos artísticos.",
                "Para programar páginas web.",
                "Para programar microcontroladores y sistemas embebidos.",
                "Para editar videos."
              ],
              correctAnswer: "Para programar microcontroladores y sistemas embebidos.",
              explanation: "C y C++ son lenguajes de bajo nivel muy utilizados para programar hardware directamente."
            }
          ]
        },
        {
          id: "5-inf-4",
          level: 4,
          title: "Memorias",
          description: "Tipos de memoria.",
          xp: 40,
          questions: [
            {
              id: "qi54",
              type: "multiple-choice",
              question: "¿Qué diferencia principal hay entre una memoria RAM y una ROM?",
              options: [
                "La RAM es de solo lectura.",
                "La ROM es volátil y pierde los datos al apagar.",
                "La RAM es volátil (pierde datos al apagar) y la ROM es no volátil.",
                "Ambas son iguales."
              ],
              correctAnswer: "La RAM es volátil (pierde datos al apagar) y la ROM es no volátil.",
              explanation: "La RAM necesita energía constante para mantener los datos, la ROM los retiene permanentemente."
            }
          ]
        },
        {
          id: "5-inf-5",
          level: 5,
          title: "Protocolos de comunicación",
          description: "I2C y SPI.",
          xp: 50,
          questions: [
            {
              id: "qi55",
              type: "multiple-choice",
              question: "¿Qué son I2C y SPI en el contexto de microcontroladores?",
              options: [
                "Protocolos de comunicación serial para conectar componentes.",
                "Tipos de baterías.",
                "Marcas de microprocesadores.",
                "Herramientas de soldadura."
              ],
              correctAnswer: "Protocolos de comunicación serial para conectar componentes.",
              explanation: "Son buses de comunicación serial ampliamente usados para transferir datos entre circuitos integrados."
            }
          ]
        }
      ]
    },
    {
      id: "m-5-mate",
      name: "Matemática",
      description: "Estadística, funciones cuadráticas y trigonometría.",
      color: "from-emerald-500 to-teal-600",
      iconName: "Calculator",
      lessons: [
        {
          id: "5-mat-1",
          level: 1,
          title: "Estadística básica",
          description: "Medidas de tendencia.",
          xp: 25,
          questions: [
            {
              id: "qm51",
              type: "multiple-choice",
              question: "¿Qué es el promedio (media) de un conjunto de datos?",
              options: [
                "El valor que más se repite.",
                "La suma de todos los valores dividida por la cantidad de valores.",
                "El valor que está en el medio ordenando de menor a mayor.",
                "El valor máximo."
              ],
              correctAnswer: "La suma de todos los valores dividida por la cantidad de valores.",
              explanation: "La media aritmética se calcula sumando todos los datos y dividiendo por la cantidad total de datos."
            }
          ]
        },
        {
          id: "5-mat-2",
          level: 2,
          title: "Funciones cuadráticas",
          description: "Parábolas.",
          xp: 30,
          questions: [
            {
              id: "qm52",
              type: "multiple-choice",
              question: "¿Qué forma geométrica describe la gráfica de una función cuadrática (ej. y = x²)?",
              options: [
                "Línea recta.",
                "Círculo.",
                "Parábola.",
                "Onda senoidal."
              ],
              correctAnswer: "Parábola.",
              explanation: "Toda función cuadrática tiene como gráfica una curva llamada parábola."
            }
          ]
        },
        {
          id: "5-mat-3",
          level: 3,
          title: "Trigonometría avanzada",
          description: "Seno y Coseno.",
          xp: 35,
          questions: [
            {
              id: "qm53",
              type: "multiple-choice",
              question: "En un triángulo rectángulo, ¿cómo se calcula el Seno de un ángulo agudo?",
              options: [
                "Cateto opuesto / Hipotenusa.",
                "Cateto adyacente / Hipotenusa.",
                "Cateto opuesto / Cateto adyacente.",
                "Hipotenusa / Cateto opuesto."
              ],
              correctAnswer: "Cateto opuesto / Hipotenusa.",
              explanation: "Por definición, el seno de un ángulo en un triángulo rectángulo es la razón entre el cateto opuesto y la hipotenusa."
            }
          ]
        },
        {
          id: "5-mat-4",
          level: 4,
          title: "Logaritmos",
          description: "Definición.",
          xp: 40,
          questions: [
            {
              id: "qm54",
              type: "multiple-choice",
              question: "Si log₁₀(100) = 2, esto significa que:",
              options: [
                "10 * 2 = 100",
                "10 / 2 = 100",
                "10² = 100",
                "100² = 10"
              ],
              correctAnswer: "10² = 100",
              explanation: "El logaritmo busca el exponente al que hay que elevar la base para obtener el argumento."
            }
          ]
        },
        {
          id: "5-mat-5",
          level: 5,
          title: "Sistemas de ecuaciones",
          description: "Soluciones.",
          xp: 50,
          questions: [
            {
              id: "qm55",
              type: "multiple-choice",
              question: "Un sistema de dos ecuaciones lineales con dos incógnitas puede tener:",
              options: [
                "Siempre una única solución.",
                "Ninguna solución, una solución o infinitas soluciones.",
                "Solo infinitas soluciones.",
                "Siempre dos soluciones exactas."
              ],
              correctAnswer: "Ninguna solución, una solución o infinitas soluciones.",
              explanation: "Las rectas pueden ser paralelas (0 soluciones), secantes (1 solución) o coincidentes (infinitas)."
            }
          ]
        }
      ]
    }
  ]
},
{
  year: 6,
  title: "6to año - profesionalización",
  subtitle: "Proyectos y prácticas",
  subjects: [
    {
      id: "m-6-teleco",
      name: "Telecomunicaciones",
      description: "Redes complejas, microondas y sistemas satelitales.",
      color: "from-blue-500 to-indigo-600",
      iconName: "Wifi",
      lessons: [
        {
          id: "6-tel-1",
          level: 1,
          title: "Longitud de onda y frecuencia",
          description: "Relación entre $\\lambda$, c y f.",
          xp: 25,
          questions: [
            {
              id: "qt61",
              type: "multiple-choice",
              question: "¿Qué es la longitud de onda ($\\lambda$) en una señal de telecomunicaciones?",
              options: [
                "La distancia entre dos crestas consecutivas de la onda ($\\lambda = c / f$)",
                "La altura máxima de la onda",
                "El tiempo que tarda un ciclo",
                "La potencia de la señal"
              ],
              correctAnswer: "La distancia entre dos crestas consecutivas de la onda ($\\lambda = c / f$)",
              explanation: "La longitud de onda es la distancia física entre dos puntos equivalentes de una onda, calculada como $\\lambda = c / f$, donde c es la velocidad de la luz y f la frecuencia."
            }
          ]
        },
        {
          id: "6-tel-2",
          level: 2,
          title: "Ruido térmico y SNR",
          description: "Relación señal/ruido en receptores.",
          xp: 30,
          questions: [
            {
              id: "qt62",
              type: "multiple-choice",
              question: "¿Qué es el ruido térmico (ruido blanco) y cómo afecta a la relación señal/ruido (SNR)?",
              options: [
                "Es el ruido generado por la agitación molecular; a mayor temperatura, menor SNR",
                "Es el ruido de las antenas; no afecta al SNR",
                "Es la interferencia de radio FM; mejora el SNR",
                "Es el ruido de las fuentes conmutadas; duplica la SNR"
              ],
              correctAnswer: "Es el ruido generado por la agitación molecular; a mayor temperatura, menor SNR",
              explanation: "El ruido térmico es producido por la agitación aleatoria de los electrones. Cuanto mayor es la temperatura, más ruido y peor relación señal/ruido."
            }
          ]
        },
        {
          id: "6-tel-3",
          level: 3,
          title: "Modulación AM y BLU/SSB",
          description: "Índice de modulación y banda lateral única.",
          xp: 35,
          questions: [
            {
              id: "qt63",
              type: "multiple-choice",
              question: "En modulación AM, ¿qué ocurre si el índice de modulación supera el 100% (sobremodulación)?",
              options: [
                "Se produce distorsión por sobremodulación (la envolvente se corta)",
                "La señal se amplifica al doble",
                "La portadora desaparece",
                "Aumenta la frecuencia"
              ],
              correctAnswer: "Se produce distorsión por sobremodulación (la envolvente se corta)",
              explanation: "Cuando el índice de modulación supera el 100%, la envolvente de la señal AM se distorsiona, generando armónicos no deseados."
            },
            {
              id: "qt63b",
              type: "multiple-choice",
              question: "¿Qué ventaja tiene la Banda Lateral Única (BLU/SSB) frente a AM convencional?",
              options: [
                "Menor ancho de banda y mayor eficiencia de potencia",
                "Mayor calidad de sonido estéreo",
                "No necesita antena",
                "Funciona sin electricidad"
              ],
              correctAnswer: "Menor ancho de banda y mayor eficiencia de potencia",
              explanation: "BLU/SSB transmite solo una banda lateral, ocupando la mitad del espectro y concentrando toda la potencia en la información útil."
            }
          ]
        },
        {
          id: "6-tel-4",
          level: 4,
          title: "Receptor superheterodino y FM",
          description: "Principio de funcionamiento y pre-énfasis.",
          xp: 40,
          questions: [
            {
              id: "qt64",
              type: "multiple-choice",
              question: "Explica el principio del Receptor Superheterodino. ¿Qué rol cumple el oscilador local?",
              options: [
                "Genera una frecuencia que se mezcla con la señal recibida para convertirla a una Frecuencia Intermedia (FI) fija",
                "Amplifica el audio directamente",
                "Sintoniza las estaciones manualmente",
                "Apaga el receptor cuando no hay señal"
              ],
              correctAnswer: "Genera una frecuencia que se mezcla con la señal recibida para convertirla a una Frecuencia Intermedia (FI) fija",
              explanation: "El oscilador local genera una frecuencia que, al mezclarse con la señal recibida, produce una Frecuencia Intermedia fija que es más fácil de amplificar y filtrar."
            },
            {
              id: "qt64b",
              type: "multiple-choice",
              question: "¿Para qué se utilizan las redes de pre-énfasis en FM y de-énfasis en el receptor?",
              options: [
                "Para mejorar la relación señal/ruido amplificando las frecuencias altas antes de transmitir",
                "Para eliminar los graves",
                "Para aumentar la potencia de salida",
                "Para reducir el tamaño de la antena"
              ],
              correctAnswer: "Para mejorar la relación señal/ruido amplificando las frecuencias altas antes de transmitir",
              explanation: "El pre-énfasis amplifica las frecuencias altas en el transmisor y el de-énfasis las atenúa en el receptor, mejorando la relación señal/ruido."
            }
          ]
        },
        {
          id: "6-tel-5",
          level: 5,
          title: "Evaluación de telecomunicaciones I",
          description: "Antenas, detector de envuelta y figura de ruido.",
          xp: 50,
          questions: [
            {
              id: "qt65",
              type: "multiple-choice",
              question: "¿De qué depende la longitud física ideal de una antena dipolo de media onda ($\\lambda/2$)?",
              options: [
                "De la frecuencia de operación ($L = c / 2f$)",
                "Del color del aislante",
                "Del material del mástil",
                "De la potencia del transmisor"
              ],
              correctAnswer: "De la frecuencia de operación ($L = c / 2f$)",
              explanation: "La longitud de una antena dipolo de media onda es $L = \\lambda/2 = c / (2f)$. A mayor frecuencia, más corta la antena."
            }
          ]
        }
      ]
    },
    {
      id: "m-6-instal",
      name: "Instalaciones Eléctricas",
      description: "Planos, tableros y protecciones.",
      color: "from-amber-500 to-orange-600",
      iconName: "Zap",
      lessons: [
        {
          id: "6-ins-1",
          level: 1,
          title: "Protección térmica vs magnética",
          description: "Interruptor termomagnético.",
          xp: 25,
          questions: [
            {
              id: "qis61",
              type: "multiple-choice",
              question: "¿Qué diferencia hay entre la protección térmica y la magnética dentro de un interruptor termomagnético?",
              options: [
                "Térmica protege contra sobrecargas lentas; magnética contra cortocircuitos rápidos",
                "Térmica protege contra cortocircuitos; magnética contra sobrecargas",
                "Ambas protegen contra lo mismo",
                "Térmica desconecta instantáneamente; magnética es lenta"
              ],
              correctAnswer: "Térmica protege contra sobrecargas lentas; magnética contra cortocircuitos rápidos",
              explanation: "La protección térmica usa un bimetal que se calienta lentamente con sobrecargas. La magnética usa una bobina que reacciona instantáneamente ante cortocircuitos."
            },
            {
              id: "qis61b",
              type: "multiple-choice",
              question: "¿Cómo funciona un interruptor diferencial y por qué es vital para la seguridad?",
              options: [
                "Compara la corriente de fase y neutro; desconecta si hay diferencia (fuga a tierra)",
                "Mide la temperatura del cable",
                "Regula el voltaje de la red",
                "Indica el consumo eléctrico"
              ],
              correctAnswer: "Compara la corriente de fase y neutro; desconecta si hay diferencia (fuga a tierra)",
              explanation: "El interruptor diferencial (DISYUNTOR) compara la corriente que entra por fase con la que vuelve por neutro. Si hay diferencia, significa que hay fuga a tierra y desconecta."
            }
          ]
        },
        {
          id: "6-ins-2",
          level: 2,
          title: "Enclavamientos y relés de protección",
          description: "Seguridad en circuitos de mando.",
          xp: 30,
          questions: [
            {
              id: "qis62",
              type: "multiple-choice",
              question: "Al diseñar la inversión de giro de un motor trifásico mediante contactores, ¿por qué es obligatorio hacer un 'enclavamiento eléctrico'?",
              options: [
                "Para impedir que ambos contactores se activen simultáneamente (cortocircuito entre fases)",
                "Para ahorrar energía",
                "Para que el motor gire más rápido",
                "Para reducir el ruido"
              ],
              correctAnswer: "Para impedir que ambos contactores se activen simultáneamente (cortocircuito entre fases)",
              explanation: "El enclavamiento eléctrico usa contactos NC cruzados que impiden que los dos contactores de inversión se cierren al mismo tiempo, evitando un cortocircuito."
            },
            {
              id: "qis62b",
              type: "multiple-choice",
              question: "¿Qué daño evita un Relé de Falta de Fase en un motor trifásico?",
              options: [
                "El sobrecalentamiento y destrucción del bobinado al funcionar con solo dos fases",
                "El exceso de velocidad",
                "La vibración excesiva",
                "El ruido eléctrico"
              ],
              correctAnswer: "El sobrecalentamiento y destrucción del bobinado al funcionar con solo dos fases",
              explanation: "Si falta una fase, el motor sigue girando pero con sobrecorriente que quema los bobinados. El relé de falta de fase desconecta antes de que ocurra el daño."
            }
          ]
        },
        {
          id: "6-ins-3",
          level: 3,
          title: "Arrancadores y conductores",
          description: "Soft Starter y normativas eléctricas.",
          xp: 35,
          questions: [
            {
              id: "qis63",
              type: "multiple-choice",
              question: "¿Qué ventaja ofrece un Arrancador Suave (Soft Starter) frente a un arranque directo?",
              options: [
                "Reduce el pico de corriente de arranque y evita golpes mecánicos",
                "Duplica la velocidad del motor",
                "Elimina la necesidad de contactores",
                "Funciona sin cableado"
              ],
              correctAnswer: "Reduce el pico de corriente de arranque y evita golpes mecánicos",
              explanation: "El Soft Starter incrementa la tensión gradualmente, evitando los picos de corriente y los golpes mecánicos del arranque directo.",
              image: "6to_ano_q3.png"
            },
            {
              id: "qis63b",
              type: "multiple-choice",
              question: "¿Para qué se utilizan los ábacos y tablas de conductores según normativas eléctricas?",
              options: [
                "Para dimensionar correctamente la sección del cable según corriente y distancia",
                "Para decorar los planos",
                "Para medir la temperatura ambiente",
                "Para calcular el peso del cable"
              ],
              correctAnswer: "Para dimensionar correctamente la sección del cable según corriente y distancia",
              explanation: "Las tablas de conductores (basadas en normas IRAM) indican la sección mínima de cable necesaria para una corriente y longitud dadas, evitando sobrecalentamientos."
            }
          ]
        },
        {
          id: "6-ins-4",
          level: 4,
          title: "Automatismos y PLC",
          description: "Lógica de contactos NC/NA en Ladder.",
          xp: 40,
          questions: [
            {
              id: "qis64",
              type: "multiple-choice",
              question: "En automatismos por PLC (Ladder), ¿qué diferencia hay entre usar un contacto NA y NC en una parada de emergencia?",
              options: [
                "NC (Normal Cerrado) es más seguro porque si se corta el cable, el circuito se abre y detiene la máquina",
                "NA siempre es más seguro",
                "No hay diferencia",
                "NC se usa solo para motores chicos"
              ],
              correctAnswer: "NC (Normal Cerrado) es más seguro porque si se corta el cable, el circuito se abre y detiene la máquina",
              explanation: "Las paradas de emergencia usan contactos NC por seguridad: si el cable se corta, el circuito se abre y la máquina se detiene (falla segura)."
            }
          ]
        },
        {
          id: "6-ins-5",
          level: 5,
          title: "Evaluación de instalaciones I",
          description: "Energía solar y CADE SIMU.",
          xp: 50,
          questions: [
            {
              id: "qis65",
              type: "multiple-choice",
              question: "¿Qué diferencia fundamental existe entre un sistema solar fotovoltaico Off-Grid y On-Grid?",
              options: [
                "Off-Grid usa baterías y no está conectado a la red; On-Grid inyecta excedentes a la red eléctrica",
                "Off-Grid es más caro; On-Grid es más barato",
                "Off-Grid usa paneles azules; On-Grid usa paneles negros",
                "No hay diferencia"
              ],
              correctAnswer: "Off-Grid usa baterías y no está conectado a la red; On-Grid inyecta excedentes a la red eléctrica",
              explanation: "Off-Grid es autónomo con baterías. On-Grid está conectado a la red y puede vender excedentes según la Ley de Generación Distribuida."
            }
          ]
        }
      ]
    },
    {
      id: "m-6-digital3",
      name: "Electrónica Digital III",
      description: "Microcontroladores y memorias.",
      color: "from-purple-500 to-pink-600",
      iconName: "Cpu",
      lessons: [
        {
          id: "6-dig3-1",
          level: 1,
          title: "Registros TRIS y memoria en microcontroladores",
          description: "Configuración de direcciones de datos.",
          xp: 25,
          questions: [
            {
              id: "qdg61",
              type: "multiple-choice",
              question: "¿Qué función cumplen los registros de configuración de dirección de datos (como TRIS en micros PIC)?",
              options: [
                "Configuran cada pin como entrada o salida digital",
                "Almacenan el programa principal",
                "Generan la frecuencia de reloj",
                "Controlan la comunicación USB"
              ],
              correctAnswer: "Configuran cada pin como entrada o salida digital",
              explanation: "El registro TRIS determina si cada pin del microcontrolador funciona como entrada (1) o como salida (0)."
            },
            {
              id: "qdg61b",
              type: "multiple-choice",
              question: "¿Qué diferencia hay entre la memoria Flash y la EEPROM en un microcontrolador?",
              options: [
                "Flash almacena el programa (no volátil); EEPROM guarda datos que se modifican en ejecución",
                "Flash es volátil; EEPROM no",
                "Ambas almacenan lo mismo",
                "Flash es más lenta que EEPROM"
              ],
              correctAnswer: "Flash almacena el programa (no volátil); EEPROM guarda datos que se modifican en ejecución",
              explanation: "La memoria Flash guarda el firmware del microcontrolador. La EEPROM permite leer/escribir datos variables que deben conservarse al apagar."
            }
          ]
        },
        {
          id: "6-dig3-2",
          level: 2,
          title: "USART: comunicación serie",
          description: "Modo síncrono vs asíncrono.",
          xp: 30,
          questions: [
            {
              id: "qdg62",
              type: "multiple-choice",
              question: "En el módulo USART, ¿cuál es la diferencia clave entre modo Síncrono y Asíncrono?",
              options: [
                "Síncrono usa una línea de reloj compartida; Asíncrono no necesita reloj (usa baud rate)",
                "Síncrono es más lento",
                "Asíncrono necesita más cables",
                "No hay diferencia"
              ],
              correctAnswer: "Síncrono usa una línea de reloj compartida; Asíncrono no necesita reloj (usa baud rate)",
              explanation: "En modo síncrono, el maestro genera el reloj. En asíncrono, ambos dispositivos deben estar configurados a la misma velocidad (baud rate)."
            }
          ]
        },
        {
          id: "6-dig3-3",
          level: 3,
          title: "PWM y ADC",
          description: "Modulación por ancho de pulso y conversión analógica.",
          xp: 35,
          questions: [
            {
              id: "qdg63",
              type: "multiple-choice",
              question: "¿Cómo funciona la modulación PWM para simular una salida analógica usando un pin digital?",
              options: [
                "Conmutando muy rápido entre 0 y 1; el promedio depende del ciclo de trabajo (duty cycle)",
                "Variando el voltaje máximo",
                "Usando una resistencia variable",
                "Conectando múltiples pines en paralelo"
              ],
              correctAnswer: "Conmutando muy rápido entre 0 y 1; el promedio depende del ciclo de trabajo (duty cycle)",
              explanation: "PWM conmuta el pin entre HIGH y LOW a alta frecuencia. El valor promedio depende del duty cycle: 50% da 2.5V, 100% da 5V."
            },
            {
              id: "qdg63b",
              type: "multiple-choice",
              question: "En un ADC de 10 bits, ¿cuántos niveles de cuantificación tiene y cómo se calcula el paso?",
              options: [
                "1024 niveles; paso = V_ref / 1024",
                "256 niveles; paso = V_ref / 256",
                "10 niveles; paso = V_ref / 10",
                "1000 niveles; paso = V_ref / 1000"
              ],
              correctAnswer: "1024 niveles; paso = V_ref / 1024",
              explanation: "Un ADC de 10 bits tiene $2^{10} = 1024$ niveles. El paso de cuantificación es $V_{ref} / 1024$ volts por división."
            }
          ]
        },
        {
          id: "6-dig3-4",
          level: 4,
          title: "Programación C/C++ vs assembler",
          description: "Ventajas del alto nivel.",
          xp: 40,
          questions: [
            {
              id: "qdg64",
              type: "multiple-choice",
              question: "¿Qué ventajas tiene programar microcontroladores en C/C++ comparado con Assembler?",
              options: [
                "Mayor portabilidad, legibilidad y productividad; el compilador optimiza el código máquina",
                "Es más rápido siempre",
                "Ocupa menos memoria",
                "No necesita compilador"
              ],
              correctAnswer: "Mayor portabilidad, legibilidad y productividad; el compilador optimiza el código máquina",
              explanation: "C/C++ permite escribir código más legible y portable entre distintos microcontroladores, delegando la optimización al compilador."
            }
          ]
        },
        {
          id: "6-dig3-5",
          level: 5,
          title: "Evaluación de digitales III",
          description: "Analizador lógico, CCP y registro W.",
          xp: 50,
          questions: [
            {
              id: "qdg65",
              type: "multiple-choice",
              question: "¿Para qué sirve un Analizador Lógico y en qué situaciones es indispensable?",
              options: [
                "Captura señales digitales en múltiples canales para analizar protocolos serie (I2C, SPI, UART)",
                "Mide voltajes analógicos de alta precisión",
                "Genera señales de audio",
                "Solda componentes SMD"
              ],
              correctAnswer: "Captura señales digitales en múltiples canales para analizar protocolos serie (I2C, SPI, UART)",
              explanation: "El analizador lógico captura simultáneamente muchas señales digitales, ideal para depurar buses de comunicación donde un osciloscopio no basta."
            }
          ]
        }
      ]
    },
    {
      id: "m-6-industrial",
      name: "Electrónica Industrial",
      description: "Control de potencia y automatización.",
      color: "from-emerald-500 to-teal-600",
      iconName: "Cog",
      lessons: [
        {
          id: "6-ind-1",
          level: 1,
          title: "Diodo de potencia vs SCR",
          description: "Tiristores y conmutación.",
          xp: 25,
          questions: [
            {
              id: "qin61",
              type: "multiple-choice",
              question: "¿Cuál es la principal diferencia operativa entre un diodo común de potencia y un Tiristor (SCR)?",
              options: [
                "El SCR necesita un pulso en el Gate para activarse; el diodo conduce cuando está polarizado en directa",
                "El diodo necesita Gate; el SCR no",
                "Ambos funcionan igual",
                "El SCR solo conduce en CA"
              ],
              correctAnswer: "El SCR necesita un pulso en el Gate para activarse; el diodo conduce cuando está polarizado en directa",
              explanation: "El diodo conduce automáticamente en directa. El SCR requiere un pulso de disparo en el Gate y una vez activado sigue conduciendo hasta que la corriente principal se anule."
            },
            {
              id: "qin61b",
              type: "multiple-choice",
              question: "¿Por qué se daña un transistor si no se coloca un diodo de carrera libre en paralelo a una bobina?",
              options: [
                "La bobina genera un pico de tensión inversa al desconectarse que puede superar la tensión máxima del transistor",
                "La bobina explota",
                "El transistor se sobrecalienta por la corriente continua",
                "El diodo evita que la bobina se queme"
              ],
              correctAnswer: "La bobina genera un pico de tensión inversa al desconectarse que puede superar la tensión máxima del transistor",
              explanation: "Al cortar la corriente de una bobina, el campo magnético colapsa generando un pico de alta tensión (Ley de Lenz). El diodo flyback recircula esa energía protegiendo el transistor."
            }
          ]
        },
        {
          id: "6-ind-2",
          level: 2,
          title: "Rectificadores controlados y fuentes SMPS",
          description: "Ángulo de disparo y fuentes conmutadas.",
          xp: 30,
          questions: [
            {
              id: "qin62",
              type: "multiple-choice",
              question: "En un rectificador controlado por tiristores, ¿qué es el 'ángulo de disparo' ($\\alpha$) y cómo modifica la tensión media?",
              options: [
                "Es el retardo en la activación del SCR dentro del ciclo; a mayor $\\alpha$, menor tensión media",
                "Es la frecuencia de conmutación; no afecta la tensión",
                "Es el voltaje de alimentación",
                "Es la corriente de puerta"
              ],
              correctAnswer: "Es el retardo en la activación del SCR dentro del ciclo; a mayor $\\alpha$, menor tensión media",
              explanation: "El ángulo de disparo $\\alpha$ es el tiempo que se espera antes de activar el SCR. Cuanto más se retrasa el disparo, menor es la tensión media entregada a la carga."
            },
            {
              id: "qin62b",
              type: "multiple-choice",
              question: "¿Cuál es la ventaja fundamental de una Fuente Conmutada (SMPS) frente a una lineal?",
              options: [
                "Mayor eficiencia (menos pérdidas) y menor peso/volumen",
                "Es más silenciosa",
                "Genera menos ruido electromagnético",
                "Es más simple de construir"
              ],
              correctAnswer: "Mayor eficiencia (menos pérdidas) y menor peso/volumen",
              explanation: "Las SMPS conmutan a alta frecuencia, lo que permite transformadores más pequeños y menor disipación de calor, alcanzando eficiencias del 85-95%."
            }
          ]
        },
        {
          id: "6-ind-3",
          level: 3,
          title: "Topología flyback y VSI",
          description: "Fuentes conmutadas Flyback e inversores.",
          xp: 35,
          questions: [
            {
              id: "qin63",
              type: "multiple-choice",
              question: "En una fuente Flyback, ¿cuándo se almacena la energía y cuándo se entrega a la carga?",
              options: [
                "Se almacena cuando el transistor conduce (en el primario); se entrega cuando el transistor corta (al secundario)",
                "Se almacena al cortar; se entrega al conducir",
                "Siempre está entregando energía",
                "Almacena en el secundario y entrega en el primario"
              ],
              correctAnswer: "Se almacena cuando el transistor conduce (en el primario); se entrega cuando el transistor corta (al secundario)",
              explanation: "En Flyback, cuando el MOSFET conduce, la corriente circula por el primario almacenando energía. Al cortar, el campo colapsa y la energía se transfiere al secundario."
            },
            {
              id: "qin63b",
              type: "multiple-choice",
              question: "¿Qué es un Inversor de Fuente de Tensión (VSI) y para qué se usa en la industria?",
              options: [
                "Convierte CC en CA variable para controlar motores o inyectar energía a la red",
                "Convierte CA en CC para fuentes de alimentación",
                "Mide la velocidad del motor",
                "Protege contra cortocircuitos"
              ],
              correctAnswer: "Convierte CC en CA variable para controlar motores o inyectar energía a la red",
              explanation: "Un VSI convierte corriente continua en alterna con frecuencia y voltaje variables, usado en variadores de velocidad (VFD) y sistemas solares fotovoltaicos."
            }
          ]
        },
        {
          id: "6-ind-4",
          level: 4,
          title: "SVPWM y transistores IGBT",
          description: "Modulación vectorial y semiconductores híbridos.",
          xp: 40,
          questions: [
            {
              id: "qin64",
              type: "multiple-choice",
              question: "¿Qué es un IGBT y por qué combina las mejores características del MOSFET y BJT?",
              options: [
                "Entrada aislada por voltaje (MOSFET) con alta capacidad de corriente de salida (BJT)",
                "Es un diodo de alta potencia",
                "Es un capacitor variable",
                "Es un relé de estado sólido"
              ],
              correctAnswer: "Entrada aislada por voltaje (MOSFET) con alta capacidad de corriente de salida (BJT)",
              explanation: "El IGBT tiene la alta impedancia de entrada del MOSFET (control por voltaje) y la baja caída de saturación del BJT (alta corriente)."
            }
          ]
        },
        {
          id: "6-ind-5",
          level: 5,
          title: "Evaluación de electrónica industrial I",
          description: "Resistencia térmica y circuitos Snubber.",
          xp: 50,
          questions: [
            {
              id: "qin65",
              type: "multiple-choice",
              question: "En las hojas de datos de componentes de potencia, ¿qué representa la resistencia térmica juntura-carcasa ($R_{\\theta JC}$)?",
              options: [
                "La oposición al flujo de calor entre el chip semiconductor y la carcasa del componente",
                "La resistencia eléctrica del componente",
                "La temperatura máxima de operación",
                "La capacidad de corriente"
              ],
              correctAnswer: "La oposición al flujo de calor entre el chip semiconductor y la carcasa del componente",
              explanation: "$R_{\\theta JC}$ indica cuántos grados Celsius se eleva la juntura por cada watt disipado, permitiendo calcular el disipador térmico necesario."
            }
          ]
        }
      ]
    }
  ]
},
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
            id: "7-ins-2", level: 2, title: "Programación en ladder", description: "Contactos NA, NC y bobinas de salida.", xp: 30,
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
            id: "7-ana-2", level: 2, title: "Transformada de laplace", description: "Paso del dominio del tiempo 't' a la frecuencia compleja 's'.", xp: 30,
            questions: [{ id: "qam72", type: "multiple-choice", question: "¿Qué enorme simplificación nos brinda la Transformada de Laplace al analizar circuitos eléctricos y control?", options: ["Convierte ecuaciones diferenciales complejas del tiempo en ecuaciones algebraicas sencillas (multiplicar o dividir por 's')", "Elimina las resistencias del circuito", "Hacer que el voltaje sea infinito", "Enfriar los transistores"], correctAnswer: "Convierte ecuaciones diferenciales complejas del tiempo en ecuaciones algebraicas sencillas (multiplicar o dividir por 's')", explanation: "Laplace convierte las derivadas en multiplicaciones por 's' y las integrales en divisiones por 's'." }]
          },
          {
            id: "7-ana-3", level: 3, title: "Función de transferencia (g_s)", description: "Relación entre Salida y Entrada en el plano 's'.", xp: 35,
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
