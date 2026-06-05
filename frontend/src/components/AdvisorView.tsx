import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Zap, QrCode, Globe, Boxes, Database, FileText, Heart, Trophy, Users, BookOpen, Cloud, MessageCircle } from 'lucide-react';
import QRCode from 'react-qr-code';
import { AI_TUTOR_TIPS, MASCOT_INFO } from '../data/curriculumData';
import { APP_ASSETS } from '../data/appAssets';
import { AIChat } from './AIChat';

const CHIPLABS_URL = 'https://chiplabs66.pages.dev/';

export const AdvisorView: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  const handleOpenChipLabs = () => {
    window.open(CHIPLABS_URL, '_blank', 'noopener,noreferrer');
  };

  const handleCopyChipLabs = async () => {
    try {
      await navigator.clipboard.writeText(CHIPLABS_URL);
      alert('Enlace copiado al portapapeles.');
    } catch {
      alert(CHIPLABS_URL);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 pb-24 md:pb-12 space-y-10 animate-in fade-in duration-200 font-sans">
      
      {/* Advisor Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10">
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="space-y-2 text-center sm:text-left z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 backdrop-blur text-purple-200 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span>Innovación didáctica IPET 66</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Consejero técnico IA</h1>
          <p className="text-sm font-medium opacity-90 max-w-md leading-relaxed">
            Sugerencias pedagógicas, recursos externos y propuestas de mejora continua para docentes y alumnos.
          </p>
        </div>

        <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-6xl shadow-inner z-10 shrink-0">
          <img src={APP_ASSETS.mascot.workshop} alt={MASCOT_INFO.name} className="w-full h-full rounded-3xl object-cover" />
        </div>
      </div>

      {/* Mascot Message Box */}
      <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-5xl shrink-0 shadow-lg shadow-emerald-500/20">
          <img src={APP_ASSETS.mascot.thinking} alt={MASCOT_INFO.name} className="w-full h-full rounded-2xl object-cover" />
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <div className="text-xs font-black text-emerald-400 uppercase tracking-widest">El análisis de Volti</div>
          <h3 className="text-xl font-extrabold text-white">¿En qué se puede mejorar o qué conceptos faltan aclarar?</h3>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Esta PWA sienta las bases perfectas para modernizar la educación técnica del IPET 66. También es ideal conectar la app con recursos externos de consulta rápida para el taller y el aula.
          </p>
        </div>
      </div>

      {/* ChipLabs Featured Card */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-blue-600/20 to-indigo-700/25 border border-cyan-400/30 shadow-[0_20px_60px_-20px_rgba(29,78,216,0.6)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(125,211,252,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.22),transparent_35%)] pointer-events-none" />
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-6 items-center">
          {/* Left content */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/40 backdrop-blur border border-cyan-300/20 text-cyan-200 text-xs font-black uppercase tracking-widest">
              <Boxes className="w-4 h-4 text-cyan-300" />
              <span>Recurso técnico recomendado</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                ChipLabs 66
              </h2>
              <p className="text-slate-200 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
                Un espacio ideal de apoyo para tener a mano herramientas, elementos, utilidades y mucho más del área técnica. Esta misma página puede servir como complemento directo de APP-BALSE-QUIZ para prácticas, consultas rápidas y recursos de taller.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-200">
              <div className="px-3 py-1.5 rounded-xl bg-slate-950/35 border border-white/10 inline-flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-300" />
                <span>Herramientas técnicas</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-slate-950/35 border border-white/10 inline-flex items-center gap-2">
                <QrCode className="w-4 h-4 text-cyan-300" />
                <span>Acceso rápido por QR</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-slate-950/35 border border-white/10 inline-flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-300 fill-cyan-300" />
                <span>Complemento del taller</span>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-950/40 border border-white/10 px-4 py-3 break-all text-cyan-100 font-black text-sm shadow-inner">
              {CHIPLABS_URL}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleOpenChipLabs}
                className="btn-3d-blue text-white font-black px-6 py-3.5 rounded-2xl text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-blue-950/30"
              >
                <span>Abrir ChipLabs 66</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleCopyChipLabs}
                className="bg-slate-950/40 border border-white/10 hover:border-cyan-300/30 text-slate-100 font-black px-6 py-3.5 rounded-2xl text-sm uppercase tracking-wider transition-all"
              >
                Copiar enlace
              </button>
            </div>
          </div>

          {/* Right QR block */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px] rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/15 p-5 shadow-2xl">
              <div className="rounded-[1.5rem] bg-white p-5 shadow-xl">
                <QRCode
                  value={CHIPLABS_URL}
                  size={220}
                  bgColor="#FFFFFF"
                  fgColor="#07111f"
                  style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                />
              </div>
              <div className="pt-4 text-center space-y-1">
                <div className="text-xs font-black text-cyan-200 uppercase tracking-[0.25em]">Escanea y entra</div>
                <div className="text-sm font-bold text-white">ChipLabs 66</div>
                <div className="text-[11px] text-slate-300 font-medium">Herramientas, elementos y recursos del área técnica.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl font-black text-white">Chat con Volti</h3>
          </div>
          <button
            onClick={() => setShowChat(!showChat)}
            className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider"
          >
            {showChat ? 'Cerrar' : 'Abrir chat'}
          </button>
        </div>
        {showChat && <AIChat />}
      </div>

      {/* Improvement Areas Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <Database className="w-6 h-6" />
          </div>
          <h4 className="font-extrabold text-lg text-white">1. Ampliar banco de preguntas</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Actualmente hay 155 preguntas en 139 lecciones. Se pueden agregar más preguntas por lección y nuevas materias al plan de estudios existente.
          </p>
        </div>

        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <h4 className="font-extrabold text-lg text-white">2. Preguntas de desarrollo</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Hoy hay opción múltiple, verdadero/falso y emparejamiento. Agregar preguntas con respuesta escrita para evaluar definiciones técnicas y conceptos complejos.
          </p>
        </div>

        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>
          <h4 className="font-extrabold text-lg text-white">3. Recarga automática de corazones</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            El contador de 3 minutos está visible pero no recupera corazones automáticamente. Implementar la regeneración en segundo plano para mejorar la experiencia.
          </p>
        </div>

        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
            <Trophy className="w-6 h-6" />
          </div>
          <h4 className="font-extrabold text-lg text-white">4. Más logros y recompensas</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Actualmente hay 5 logros y 4 objetos en la tienda. Se pueden añadir nuevos desafíos semanales, recompensas desbloqueables y cosméticos.
          </p>
        </div>

        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h4 className="font-extrabold text-lg text-white">5. Liga multidispositivo</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            La tabla de posiciones muestra 28 alumnos ficticios. Conectar entre dispositivos para competencia real entre compañeros del mismo curso en tiempo real.
          </p>
        </div>

        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <h4 className="font-extrabold text-lg text-white">6. Más lecciones por materia</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Cada materia tiene 5 lecciones con 1 a 3 preguntas. Expandir con más lecciones y niveles de dificultad para profundizar cada tema técnico.
          </p>
        </div>

      {/* Didactic Tips Section */}
      <div className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
          <h3 className="text-xl font-black text-white">Sugerencias metodológicas</h3>
        </div>

        <div className="space-y-4">
          {AI_TUTOR_TIPS.map((tip, idx) => (
            <div key={idx} className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-5 flex items-start gap-4 shadow-lg">
              <div className="w-8 h-8 rounded-xl bg-slate-700 flex items-center justify-center font-black text-sm text-emerald-400 shrink-0">
                0{idx + 1}
              </div>
              <div>
                <h5 className="font-bold text-white text-base mb-1">{tip.title}</h5>
                <p className="text-sm text-slate-300 leading-relaxed">{tip.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
