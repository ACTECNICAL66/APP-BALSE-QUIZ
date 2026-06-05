import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User } from 'lucide-react';
import { APP_ASSETS } from '../data/appAssets';
import { MASCOT_INFO } from '../data/curriculumData';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const greetings = [
  "¡Hola! Soy Voltio, el asistente virtual de IPET 66. Preguntame sobre el plan de estudios, los años, las materias o cómo funciona la app.",
  "¡Bienvenido! Puedo ayudarte con información sobre TecnoLingo. ¿Sobre qué curso o materia querés saber?",
  "¡Hola! ¿Necesitás ayuda con algún tema técnico o querés conocer más sobre la app y sus funciones?",
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();

  if (lower.match(/^(hola|buenas|hey|buen[ads])/)) {
    return "¡Hola! Soy Voltio, tu asistente técnico. Preguntame sobre las materias, los años, o cómo funciona la app.";
  }

  if (lower.includes('qué es') || lower.includes('que es') || lower.includes('tecnoling') || lower.includes('app') || lower.includes('esto')) {
    return "TecnoLingo es una PWA educativa gamificada del IPET 66. Tiene 7 años de currícula técnica con 28 materias, 139 lecciones y más de 150 preguntas. Incluye experiencia (XP), tuercas doradas, combo racha, corazones y una tienda de objetos.";
  }

  if (lower.includes('año') || lower.includes('curso') || lower.includes('años')) {
    return "La app tiene 7 años: 1° Taller Básico, 2° Dibujo y Materiales, 3° Mecánica y Electricidad, 4° Electrotecnia y Electrónica, 5° Sistemas Digitales, 6° Telecomunicaciones e Industrial, 7° Automatización y Control. Cada año tiene 4 materias con 5 niveles.";
  }

  if (lower.includes('pregunta') || lower.includes('ejercicio') || lower.includes('quiz') || lower.includes('lección') || lower.includes('leccion')) {
    return "Hay 4 tipos de preguntas: opción múltiple, verdadero/falso, emparejamiento y completar espacios. Cada lección tiene 1 a 3 preguntas. Al responder bien sumás XP y mantenés el combo. Si fallás, perdés un corazón.";
  }

  if (lower.includes('corazón') || lower.includes('corazones') || lower.includes('vidas') || lower.includes('heart')) {
    return "Comenzás con 5 corazones. Cada respuesta incorrecta consume uno. Si llegás a 0, perdés la lección. Podés recargar corazones en la Tienda por 50 tuercas doradas. El timer de 3 minutos está visible pero la recarga automática aún no está activa.";
  }

  if (lower.includes('tuerca') || lower.includes('gema') || lower.includes('moneda') || lower.includes('shop') || lower.includes('tienda') || lower.includes('compr')) {
    return "Las tuercas doradas son la moneda de la app. Ganás 15 por lección completada. En la Tienda podés comprar: recarga de corazones (50), escudo de racha (150), marco dorado (300) e insignia tester (500).";
  }

  if (lower.includes('xp') || lower.includes('experiencia') || lower.includes('punt')) {
    return "Ganás XP por cada respuesta correcta. Con combo de 3 o más aciertos consecutivos ganás +5 XP extra por respuesta. Completar una lección te da entre 25 y 50 XP base.";
  }

  if (lower.includes('combo') || lower.includes('racha') || lower.includes('streak')) {
    return "El combo aumenta con cada respuesta correcta consecutiva. Si fallás, el combo se reinicia. Con combo de 3 o más, cada acierto da +5 XP extra. Podés comprar un Escudo de Racha en la Tienda por 150 tuercas para protegerlo una vez.";
  }

  if (lower.includes('docente') || lower.includes('profesor') || lower.includes('maestr') || lower.includes('aula')) {
    return "Los docentes pueden usar la app como herramienta complementaria. El plan de estudios está en archivos de datos editables. Se pueden agregar nuevos cuestionarios por materia sin tocar el código principal. La sección Consejero IA tiene sugerencias metodológicas para el aula.";
  }

  if (lower.includes('materia') || lower.includes('asignatura') || lower.includes('taller')) {
    return "Cada año tiene 4 materias técnicas. Por ejemplo: Taller (soldadura, herramientas), Dibujo Técnico (normas, proyecciones), Matemática (números primos, transformadas), Electricidad (Ley de Ohm, Kirchhoff), Electrónica (amplificadores, compuertas), Informática (C++, microcontroladores), y más para los años superiores.";
  }

  if (lower.includes('desbloqu') || lower.includes('bloque') || lower.includes('pase libre') || lower.includes('unlock') || lower.includes('acceso')) {
    return "Los años se desbloquean secuencialmente: completá el nivel 5 de un año para desbloquear el siguiente. También existe el 'Pase libre total' durante el registro que desbloquea todos los años. Ideal para examen libre o repaso general.";
  }

  if (lower.includes('logro') || lower.includes('logros') || lower.includes('achievement') || lower.includes('insignia') || lower.includes('medalla')) {
    return "Hay 5 logros: Primera lección, 10 lecciones, 25 lecciones, 50 lecciones y 100 lecciones. También hay objetos cosméticos como el Marco Dorado (300 tuercas) y la Insignia Tester (500 tuercas) que se ven en tu perfil.";
  }

  if (lower.includes('voltio') || lower.includes('mascota') || lower.includes('robot')) {
    return "¡Soy yo! Voltio, la mascota oficial del IPET 66. Soy un pequeño robot de taller con engranajes, circuitos y mucho corazón. Tengo 11 poses diferentes: alegre, pensativo, cansado, programando, midiendo, y más. Mi frase favorita: 'La ley de Ohm es como el café de la mañana: fundamental y necesaria.'";
  }

  if (lower.includes('liga') || lower.includes('leaderboard') || lower.includes('ranking') || lower.includes('tabla') || lower.includes('posiciones')) {
    return "La liga muestra 28 alumnos distribuidos en los 7 años. Hay filtros por año y un podio con los 3 primeros. Tu posición se calcula según las tuercas doradas acumuladas.";
  }

  if (lower.includes('perfil') || lower.includes('avatar') || lower.includes('personaje') || lower.includes('mascot')) {
    return "En tu perfil podés ver tus estadísticas: combo actual, combo máximo, lecciones completadas y lecciones perfectas. También mostrás tu avatar, logros desbloqueados y los objetos cosméticos que hayas comprado en la tienda.";
  }

  if (lower.includes('sonido') || lower.includes('audio') || lower.includes('música') || lower.includes('musica') || lower.includes('efecto')) {
    return "La app tiene efectos de sonido para acciones como responder correctamente, fallar, subir de nivel y completar lecciones. Se activan automáticamente al interactuar.";
  }

  if (lower.includes('chip') || lower.includes('chiplabs')) {
    return "ChipLabs 66 es un recurso externo recomendado con herramientas, elementos y utilidades del área técnica. Podés acceder desde la tarjeta destacada en esta misma página o escaneando el código QR.";
  }

  return "No entendí bien tu consulta. Podés preguntarme sobre: los años y materias, cómo funcionan los corazones y el combo, la tienda de tuercas doradas, los logros, cómo desbloquear contenido, el perfil, Voltio, o los efectos de sonido. ¡Decime qué te interesa!";
}

export const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: greetings[Math.floor(Math.random() * greetings.length)] }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || isTyping) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: getResponse(text) }]);
      setIsTyping(false);
    }, 800 + Math.random() * 1200);
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-3xl overflow-hidden shadow-xl flex flex-col h-[500px]">
      <div className="bg-gradient-to-r from-purple-600/40 to-indigo-600/40 border-b border-slate-700 px-5 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-lg shrink-0 shadow-lg shadow-emerald-500/20 overflow-hidden">
          <img src={APP_ASSETS.mascot.thinking} alt={MASCOT_INFO.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-white text-sm">Voltio</span>
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span className="text-[11px] text-slate-400 font-medium">Asistente virtual IPET 66</span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center text-xs ${
              msg.role === 'user'
                ? 'bg-blue-500/20 text-blue-400'
                : 'bg-emerald-500/20 text-emerald-400'
            }`}>
              {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
              msg.role === 'user'
                ? 'bg-blue-600/30 text-blue-50 rounded-tr-md'
                : 'bg-slate-700/60 text-slate-200 rounded-tl-md'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="bg-slate-700/60 px-4 py-3 rounded-2xl rounded-tl-md">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-slate-700 p-3 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Preguntale a Voltio..."
          className="flex-1 bg-slate-900/60 border border-slate-600 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 font-medium outline-none focus:border-emerald-500/50 transition-colors"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isTyping}
          className="bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 disabled:text-slate-500 text-white px-4 py-2.5 rounded-xl transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
