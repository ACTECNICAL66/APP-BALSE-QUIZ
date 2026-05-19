import React from 'react';
import { Sparkles, Cpu, Wrench, Lightbulb, CheckCircle2, MessageSquare, ArrowUpRight, Zap } from 'lucide-react';
import { AI_TUTOR_TIPS, MASCOT_INFO } from '../../data/curriculumData';

export const AdvisorView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 pb-24 md:pb-12 space-y-10 animate-in fade-in duration-200">
      
      {/* Advisor Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="space-y-2 text-center sm:text-left z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 backdrop-blur text-purple-200 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span>Innovación Didáctica IPET 66</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Consejero Técnico IA</h1>
          <p className="text-sm font-medium opacity-90 max-w-md leading-relaxed">
            Sugerencias pedagógicas, nuevos métodos de evaluación y propuestas de mejora continua para profesores y alumnos.
          </p>
        </div>

        <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-6xl shadow-inner z-10 shrink-0">
          🤖
        </div>
      </div>

      {/* Mascot Message Box */}
      <div className="bg-slate-800 border border-slate-700 rounded-3xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-5xl shrink-0 shadow-lg shadow-emerald-500/20">
          {MASCOT_INFO.avatar}
        </div>
        <div className="space-y-2 text-center sm:text-left">
          <div className="text-xs font-black text-emerald-400 uppercase tracking-widest">El Análisis de Voltio</div>
          <h3 className="text-xl font-extrabold text-white">¿En qué se puede mejorar o qué conceptos faltan aclarar?</h3>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Esta PWA sienta las bases perfectas para gamificar la escuela técnica. Para llevarla al siguiente nivel en el ciclo superior de IPET 66, hemos identificado cuatro áreas clave de expansión:
          </p>
        </div>
      </div>

      {/* 4 Improvement Areas Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
            <Cpu className="w-6 h-6" />
          </div>
          <h4 className="font-extrabold text-lg text-white">1. Simuladores Interactivos</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Integrar un multímetro virtual donde el alumno deba arrastrar las puntas de prueba para medir voltaje o resistencia en un circuito simulado.
          </p>
        </div>

        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3">
          <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
            <Wrench className="w-6 h-6" />
          </div>
          <h4 className="font-extrabold text-lg text-white">2. Duelos de Taller (1v1)</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Un modo arena donde dos estudiantes resuelven cálculos de engranajes o lectura de calibre en tiempo real. El más veloz y preciso gana las tuercas doradas.
          </p>
        </div>

        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-extrabold text-lg text-white">3. Validación de Taller Físico</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Los profesores pueden escanear un código QR desde la app del alumno para acreditar que completó satisfactoriamente una práctica de soldadura o torno.
          </p>
        </div>

        <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-3">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h4 className="font-extrabold text-lg text-white">4. Módulos de PLC y Robótica</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            Para 7mo año, incorporar bloques de arrastrar y soltar (tipo Scratch/Ladder) para programar rutinas de automatización industrial.
          </p>
        </div>

      </div>

      {/* Didactic Tips Section */}
      <div className="space-y-4 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400 fill-amber-400" />
          <h3 className="text-xl font-black text-white">Sugerencias Metodológicas para Docentes</h3>
        </div>

        <div className="space-y-4">
          {AI_TUTOR_TIPS.map((tip, idx) => (
            <div key={idx} className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-5 flex items-start gap-4">
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

      {/* PWA Feedback Notice */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6 text-center space-y-3">
        <MessageSquare className="w-8 h-8 text-emerald-400 mx-auto" />
        <h4 className="text-lg font-black text-white">¿Eres docente o directivo de IPET 66?</h4>
        <p className="text-xs text-slate-300 max-w-lg mx-auto">
          Esta plataforma gamificada está diseñada con arquitectura modular. Se pueden agregar nuevos cuestionarios de materias específicas editando los archivos de datos en tiempo real.
        </p>
        <button
          onClick={() => alert("Función de exportación de reportes docentes en desarrollo.")}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-700 text-slate-200 font-bold text-xs hover:bg-slate-600 transition-colors"
        >
          <span>Exportar Planilla de Alumnos</span>
          <ArrowUpRight className="w-4 h-4 text-emerald-400" />
        </button>
      </div>

    </div>
  );
};
