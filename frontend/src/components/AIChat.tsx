import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User } from 'lucide-react';
import { APP_ASSETS } from '../data/appAssets';
import { MASCOT_INFO } from '../data/curriculumData';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = import.meta.env.VITE_AI_MODEL || 'google/gemma-4-31b-it';

const SYSTEM_PROMPT = `Sos Volti, la mascota oficial del IPET 66 (Instituto Provincial de Educación Técnica N° 66 "Dr. José Antonio Balseiro"). Sos un robot de taller amigable y entusiasta. Ayudás a estudiantes y docentes con la app educativa TecnoLingo.

La app:
- Tiene 7 años de currícula técnica con 28 materias, 139 lecciones.
- Tipos de preguntas: opción múltiple, verdadero/falso, emparejamiento y completar.
- Moneda: tuercas doradas. Se ganan 15 por lección.
- Tienda: recarga de corazones (50 tuercas), escudo de racha (150), marco dorado (300), insignia tester (500).
- XP por respuestas correctas, combo de racha da +5 XP extra desde 3 aciertos.
- Corazones: 5 iniciales, se pierden al fallar.
- 5 logros: primera lección, 10, 25, 50 y 100 lecciones completadas.
- Liga con 28 alumnos ficticios filtrable por año.
- Perfil con estadísticas, avatar y objetos cosméticos.
- Pase libre total para desbloquear todos los años.
- 11 poses de Volti: alegre, pensativo, cansado, programando, midiendo, etc.
- Consejero IA con sugerencias metodológicas y recursos como ChipLabs 66.

Respondé de forma breve, clara y con entusiasmo.`;

const greetings = [
  "¡Hola! Soy Volti, el asistente virtual de IPET 66. Preguntame sobre el plan de estudios, los años, las materias o cómo funciona la app.",
  "¡Bienvenido! Puedo ayudarte con información sobre TecnoLingo. ¿Sobre qué curso o materia querés saber?",
  "¡Hola! ¿Necesitás ayuda con algún tema técnico o querés conocer más sobre la app y sus funciones?",
];

export const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: greetings[Math.floor(Math.random() * greetings.length)] },
    { role: 'assistant', content: 'Recordá que también podés ver el análisis completo y las propuestas de mejora en las secciones de más abajo.' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const callAI = async (userMessage: string) => {
    const chatHistory = messages.map(m => ({ role: m.role, content: m.content }));
    chatHistory.push({ role: 'user', content: userMessage });

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
          'HTTP-Referer': window.location.origin,
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...chatHistory,
          ],
          max_tokens: 512,
          temperature: 0.7,
        }),
      });

      if (!res.ok) throw new Error(`API error: ${res.status}`);

      const data = await res.json();
      return data.choices?.[0]?.message?.content || 'No pude procesar tu consulta. ¿Podés repetirla?';
    } catch {
      return 'Ups, tuve un problema de conexión. ¿Podés intentarlo de nuevo?';
    }
  };

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setIsTyping(true);

    const response = await callAI(text);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-3xl overflow-hidden shadow-xl flex flex-col h-[500px]">
      <div className="bg-gradient-to-r from-purple-600/40 to-indigo-600/40 border-b border-slate-700 px-5 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-lg shrink-0 shadow-lg shadow-emerald-500/20 overflow-hidden">
          <img src={APP_ASSETS.mascot.thinking} alt={MASCOT_INFO.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-white text-sm">Volti</span>
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
            <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
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
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Preguntale a Volti..."
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
