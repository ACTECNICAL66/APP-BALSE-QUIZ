import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Send, Sparkles, Bot, User } from 'lucide-react';
import { APP_ASSETS } from '../data/recursosApp';
import { MASCOT_INFO } from '../data/datosCurriculares';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';
const MODEL = import.meta.env.VITE_AI_MODEL || 'gemma-4-31b-it';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

if (!API_KEY) {
  console.warn('ChatIA: VITE_GEMINI_API_KEY no está configurada');
}

const SYSTEM_PROMPT = `Sos Volti, la mascota oficial del IPET 66. Sos un robot de taller amigable y entusiasta que ayuda a estudiantes y docentes con la app TecnoLingo.

La app:
- 7 años de currícula técnica, 28 materias, 139 lecciones.
- Tipos de preguntas: opción múltiple, verdadero/falso, emparejamiento, completar.
- Moneda: tuercas doradas. Se ganan 15 por lección.
- Tienda: recarga de corazones (50 tuercas), escudo de racha (150), marco dorado (300), insignia tester (500).
- XP por respuestas correctas; combo de racha da +5 XP extra desde 3 aciertos.
- Corazones: 5 iniciales, se pierde uno al fallar.
- 5 logros: primera lección, 10, 25, 50 y 100 lecciones completadas.
- Liga con 28 alumnos ficticios filtrable por año.
- Perfil con estadísticas, avatar y objetos cosméticos.
- Pase libre para desbloquear todos los años.
- 11 poses de Volti: alegre, pensativo, cansado, programando, midiendo, etc.
- Consejero IA con sugerencias metodológicas y recursos como ChipLabs 66.

Reglas:
- Respondé SIEMPRE en español, de forma breve, clara y entusiasta.
- No digas "según", "de acuerdo a", "en los archivos", "en los documentos" ni menciones de dónde sacás la información. Respondé directamente.
- Usá notación LaTeX ($$...$$ para ecuaciones en bloque, $...$ para fórmulas inline) cuando necesites expresar fórmulas matemáticas o eléctricas.`;

function renderLatex(text: string): (string | { html: string; display: boolean })[] {
  const parts: (string | { html: string; display: boolean })[] = [];
  const regex = /\$\$([\s\S]+?)\$\$|\$([^\s$][^$]*?[^\s$])\$/g;
  let lastIdx = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIdx) parts.push(text.slice(lastIdx, match.index));
    const expr = match[1] || match[2];
    const display = !!match[1];
    try {
      parts.push({ html: katex.renderToString(expr, { throwOnError: false, displayMode: display }), display });
    } catch {
      parts.push(text.slice(match.index, match.index + match[0].length));
    }
    lastIdx = regex.lastIndex;
  }
  if (lastIdx < text.length) parts.push(text.slice(lastIdx));
  return parts;
}

const LatexContent: React.FC<{ text: string }> = ({ text }) => {
  const parts = useMemo(() => renderLatex(text), [text]);
  return <>{parts.map((part, i) => typeof part === 'string' ? <span key={i}>{part}</span> : <span key={i} dangerouslySetInnerHTML={{ __html: part.html }} className={part.display ? 'block my-2 text-center' : 'inline'} />)}</>;
};

const greetings = [
  "¡Hola! Soy Volti, el asistente virtual del IPET 66. Preguntame sobre el plan de estudios, las materias o cómo funciona la app.",
  "¡Bienvenido! Puedo ayudarte con información de TecnoLingo. ¿Sobre qué materia o año querés saber?",
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
    const chatHistory = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));
    chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(API_URL, {
        signal: controller.signal,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: chatHistory,
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          generationConfig: { maxOutputTokens: 512, temperature: 0.7 },
        }),
      });

      clearTimeout(timeout);

      if (!res.ok) throw new Error(`API error: ${res.status}`);

      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No pude procesar tu consulta. ¿Podés repetirla?';
    } catch (err) {
      clearTimeout(timeout);
      console.error('ChatIA error:', err);
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
              <LatexContent text={msg.content} />
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
