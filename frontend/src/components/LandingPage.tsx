import React from 'react';
import { ArrowRight, Cpu, ShieldCheck, Trophy, Sparkles, Zap, Flame, CheckCircle } from 'lucide-react';
import { MASCOT_INFO, SCHOOL_INFO } from '../data/curriculumData';
import { APP_ASSETS } from '../data/appAssets';
import { soundEffects } from '../utils/sound';
import { AuroraBackground } from './AuroraBackground';

interface LandingPageProps {
  onStart: () => void;
  onLogin: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart, onLogin }) => {
  return (
    <div className="min-h-screen text-slate-100 flex flex-col selection:bg-[#58cc02] selection:text-slate-950 font-sans relative overflow-hidden">

      {/* Animated Aurora Background */}
      <AuroraBackground intensity="high" />

      {/* Top Banner with Liquid Glass */}
      <header className="border-b border-white/10 liquid-glass-strong sticky top-0 z-50 px-6 py-4 shadow-2xl relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-2xl shadow-xl shadow-emerald-500/40 border border-emerald-300/50 animate-pulse-glow">
              <img src={APP_ASSETS.brand.logo} alt="APP-BALSE-QUIZ" className="w-full h-full rounded-2xl object-cover" />
            </div>
            <div>
              <span className="font-black text-2xl tracking-wider bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
                IPET 66
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400/80 block -mt-1">
                TecnoLingo
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundEffects.playClick();
                onLogin();
              }}
              className="text-sm font-black text-slate-200 hover:text-white px-5 py-2.5 rounded-2xl hover:bg-white/10 transition-all liquid-glass border border-white/10"
            >
              Ya tengo cuenta
            </button>
            <button
              onClick={() => {
                soundEffects.playClick();
                onStart();
              }}
              className="btn-3d-navy text-white font-black px-6 py-3 rounded-2xl text-xs uppercase tracking-wider shadow-xl shadow-blue-900/40"
            >
              Empezar
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Year Selector */}
      <section className="relative overflow-hidden pt-16 pb-24 px-6 lg:pt-24 lg:pb-32 z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass-navy text-blue-200 text-xs font-black uppercase tracking-widest mb-8 shadow-xl">
              <Sparkles className="w-4 h-4 text-cyan-300 animate-spin" />
              Plataforma Oficial de {SCHOOL_INFO.name}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-8 leading-[1.05] drop-shadow-2xl">
              Domina la técnica <span className="bg-gradient-to-r from-[#7db5ff] via-[#1cb0f6] to-[#c9e6ff] bg-clip-text text-transparent animate-pulse">jugando</span>.
            </h1>

            <p className="text-xl text-slate-300 font-bold mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-lg">
              Aprende todas las materias del IPET 66 desde 1ro hasta 7mo año con nuestra nueva metodología interactiva. Supera desafíos, compite con tus compañeros y domina el taller técnico.
            </p>

            {/* Trayectoria Académica Timeline */}
            <div className="liquid-glass-strong rounded-3xl p-6 mb-8 max-w-2xl mx-auto lg:mx-0 shadow-2xl border border-white/15">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Ruta Académica</div>
                  <div className="text-xl font-black text-white drop-shadow-md">7 Años de Especialización</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map((year) => (
                  <div key={year} className="flex-1 flex flex-col items-center gap-2.5 relative group">
                    <div className={`w-full h-2.5 rounded-full ${year <= 3 ? 'bg-amber-400' : year <= 5 ? 'bg-blue-400' : 'bg-purple-400'
                      } shadow-md opacity-90 transition-transform group-hover:scale-y-150`} />
                    <span className="text-sm font-black text-white drop-shadow-md">{year}º</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest px-2">
                <span className="text-amber-400/90">Ciclo Básico</span>
                <span className="text-blue-400/90">Superior</span>
                <span className="text-purple-400/90">Avanzado</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onStart();
                }}
                className="w-full sm:w-auto btn-3d-navy text-white font-black px-12 py-6 rounded-3xl text-base uppercase tracking-wider flex items-center justify-center gap-3 shadow-2xl shadow-blue-900/50"
              >
                <span>¡Comenzar ahora!</span>
                <ArrowRight className="w-6 h-6 font-black" />
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  onLogin();
                }}
                className="w-full sm:w-auto btn-google-premium px-10 py-5 rounded-3xl text-base flex items-center justify-center gap-3.5"
              >
                <svg className="w-6 h-6 shrink-0 drop-shadow-sm" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="tracking-wide">Google Sign-In</span>
              </button>
            </div>

            <div className="liquid-glass-strong rounded-3xl p-4 mb-8 max-w-2xl mx-auto lg:mx-0 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl liquid-glass-navy flex items-center justify-center shadow-lg border border-white/10">
                  <Cpu className="w-6 h-6 text-cyan-300" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black text-white">Aprendizaje técnico gamificado para IPET 66</div>
                  <div className="text-xs text-slate-300 font-bold">Lecciones, ligas, tienda, logros y progreso por año en una sola app.</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="liquid-glass-strong p-5 rounded-3xl border border-white/15 text-center shadow-xl">
                <div className="text-3xl font-black text-white mb-1">7</div>
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Años Bloqueables</div>
              </div>
              <div className="liquid-glass-strong p-5 rounded-3xl border border-white/15 text-center shadow-xl">
                <div className="text-3xl font-black text-emerald-400 mb-1">100%</div>
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Gratis sin anuncios</div>
              </div>
              <div className="liquid-glass-strong p-5 rounded-3xl border border-white/15 text-center shadow-xl">
                <div className="text-3xl font-black text-amber-400 mb-1">PWA</div>
                <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">App Instalable</div>
              </div>
            </div>

          </div>

          {/* Mascot Illustration with Liquid Glass */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 opacity-30 blur-3xl animate-pulse" />
              <div className="relative liquid-glass-strong rounded-3xl p-10 shadow-2xl text-center border border-white/20 overflow-hidden">
                <div className="absolute inset-0 glass-shimmer" />
                <div className="relative z-10">
                  <div className="w-36 h-36 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-7xl shadow-2xl shadow-emerald-500/50 animate-bounce-subtle mb-8 border-4 border-emerald-300/50">
                    <img src={APP_ASSETS.mascot.happy} alt={MASCOT_INFO.name} className="w-full h-full rounded-3xl object-cover" />
                  </div>
                  <div className="inline-block px-4 py-1.5 rounded-full liquid-glass-emerald text-emerald-300 text-xs font-black uppercase tracking-widest mb-3 shadow-lg">
                    {MASCOT_INFO.role}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3 drop-shadow-lg">¡Hola, soy Testi!</h3>
                  <p className="text-sm text-slate-300 italic mb-8 leading-relaxed font-bold">
                    "{MASCOT_INFO.description}"
                  </p>
                  <div className="liquid-glass p-5 rounded-2xl border border-white/10 text-left shadow-inner">
                    <div className="text-xs font-black text-emerald-400 uppercase tracking-wide mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 fill-emerald-400" />
                      Consejo de Taller
                    </div>
                    <p className="text-sm text-slate-200 font-bold leading-snug">
                      "{MASCOT_INFO.quotes[0]}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Curriculum Breakdown with Liquid Glass Cards */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
              Un sendero para cada ciclo
            </h2>
            <p className="text-xl text-slate-300 font-bold">
              IPET 66 TecnoLingo está dividido en 7 años. Cada año está bloqueado hasta que apruebes el anterior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Ciclo Basico */}
            <div className="liquid-glass-strong rounded-3xl p-8 border border-white/15 hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-2xl group hover:scale-105 duration-300">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 text-white flex items-center justify-center font-black text-2xl mb-8 shadow-xl shadow-amber-500/40 border-2 border-amber-300/50">
                  1º - 3º
                </div>
                <h3 className="text-3xl font-black text-white mb-3">Ciclo Básico</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-bold">
                  Los primeros pasos en la técnica. Normas de seguridad, manejo de herramientas de banco y expresión gráfica IRAM.
                </p>
                <ul className="space-y-4 text-sm text-slate-200 font-bold mb-8">
                  <li className="flex items-center gap-3 text-emerald-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Matemática General</span>
                  </li>
                  <li className="flex items-center gap-3 text-emerald-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Taller de Ajuste, Hojalatería y Soldadura</span>
                  </li>
                  <li className="flex items-center gap-3 text-emerald-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Tecnología de los Materiales</span>
                  </li>
                  <li className="flex items-center gap-3 text-emerald-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Dibujo Técnico y Normas IRAM</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 text-xs text-slate-400 font-black uppercase tracking-widest">
                Fundamentos Técnicos
              </div>
            </div>

            {/* 4to a 5to */}
            <div className="liquid-glass-strong rounded-3xl p-8 border border-blue-500/50 hover:border-blue-400 transition-all flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-blue-500/20 group hover:scale-105 duration-300">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-slate-950 font-black text-[10px] uppercase tracking-widest px-5 py-2 rounded-bl-2xl shadow-xl">
                Especialidad
              </div>
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-500 text-white flex items-center justify-center font-black text-2xl mb-8 shadow-xl shadow-blue-500/40 border-2 border-blue-300/50">
                  4º - 5º
                </div>
                <h3 className="text-3xl font-black text-white mb-3">Ciclo Superior</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-bold">
                  Inmersión en los circuitos y la lógica computacional. Cálculos de mallas de Kirchhoff, programación en C++ y electrónica.
                </p>
                <ul className="space-y-4 text-sm text-slate-200 font-bold mb-8">
                  <li className="flex items-center gap-3 text-blue-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Electrotecnia I y II</span>
                  </li>
                  <li className="flex items-center gap-3 text-blue-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Informática I y II (C++)</span>
                  </li>
                  <li className="flex items-center gap-3 text-blue-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Electrónica Analógica I y II</span>
                  </li>
                  <li className="flex items-center gap-3 text-blue-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Electrónica Digital I y II</span>
                  </li>
                  <li className="flex items-center gap-3 text-blue-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Matemática Avanzada</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 text-xs text-slate-400 font-black uppercase tracking-widest">
                Desarrollo Tecnológico
              </div>
            </div>

            {/* 6to a 7mo */}
            <div className="liquid-glass-strong rounded-3xl p-8 border border-white/15 hover:border-purple-500/50 transition-all flex flex-col justify-between shadow-2xl group hover:scale-105 duration-300">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white flex items-center justify-center font-black text-2xl mb-8 shadow-xl shadow-purple-500/40 border-2 border-purple-300/50">
                  6º - 7º
                </div>
                <h3 className="text-3xl font-black text-white mb-3">Superior Avanzado</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-bold">
                  Prácticas profesionalizantes y control industrial. Automatización con PLC, variadores de velocidad e IoT en la nube.
                </p>
                <ul className="space-y-4 text-sm text-slate-200 font-bold mb-8">
                  <li className="flex items-center gap-3 text-purple-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Telecomunicaciones I y II (IoT)</span>
                  </li>
                  <li className="flex items-center gap-3 text-purple-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Electrónica Industrial I y II (VFD)</span>
                  </li>
                  <li className="flex items-center gap-3 text-purple-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Instalaciones Industriales I y II (PLC)</span>
                  </li>
                  <li className="flex items-center gap-3 text-purple-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Digitales III (Microcontroladores)</span>
                  </li>
                  <li className="flex items-center gap-3 text-purple-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Análisis Matemático (Laplace)</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-white/10 text-xs text-slate-400 font-black uppercase tracking-widest">
                Prácticas Profesionales
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Gamification Features with Liquid Glass */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-3">¿Cómo funciona?</div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
              Metodología Interactiva de Alto Rendimiento
            </h2>
            <p className="text-xl text-slate-300 font-bold">
              Aprender conceptos técnicos ya no es aburrido. Cada acierto consecutivo multiplica tu combo y tu XP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="liquid-glass-strong p-8 rounded-3xl border border-white/15 text-center shadow-2xl group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/40 border-2 border-orange-300/50">
                <Flame className="w-8 h-8 fill-white" />
              </div>
              <h4 className="font-black text-xl text-white mb-3">Combo de Aciertos</h4>
              <p className="text-sm text-slate-400 font-bold">Encadena respuestas correctas sin fallar para encender tu racha y ganar bonificaciones de XP.</p>
            </div>

            <div className="liquid-glass-strong p-8 rounded-3xl border border-white/15 text-center shadow-2xl group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center mx-auto mb-6 shadow-xl shadow-rose-500/40 border-2 border-rose-300/50">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="font-black text-xl text-white mb-3">Vidas de Taller</h4>
              <p className="text-sm text-slate-400 font-bold">Tienes 5 corazones. Si fallas una pregunta de cálculo o seguridad, pierdes uno. ¡Recárgalos practicando!</p>
            </div>

            <div className="liquid-glass-strong p-8 rounded-3xl border border-white/15 text-center shadow-2xl group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-500 text-white flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/40 border-2 border-amber-300/50">
                <Trophy className="w-8 h-8" />
              </div>
              <h4 className="font-black text-xl text-white mb-3">Ligas en Vivo</h4>
              <p className="text-sm text-slate-400 font-bold">Compite semanalmente con tus compañeros de IPET 66 para ascender a las ligas de Plata y Oro.</p>
            </div>

            <div className="liquid-glass-strong p-8 rounded-3xl border border-white/15 text-center shadow-2xl group hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-500 text-white flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-500/40 border-2 border-blue-300/50">
                <Cpu className="w-8 h-8" />
              </div>
              <h4 className="font-black text-xl text-white mb-3">Ejercicios Reales</h4>
              <p className="text-sm text-slate-400 font-bold">Preguntas de opción múltiple, emparejamiento de pines y completar fórmulas eléctricas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Liquid Glass */}
      <footer className="mt-auto liquid-glass-strong border-t border-white/10 py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="font-black text-2xl text-white mb-1 drop-shadow-lg">IPET 66 TecnoLingo</div>
            <div className="text-xs text-slate-400 font-bold">Creado para la comunidad de la Escuela Técnica IPET 66, Córdoba. Diseño Liquid Glass iOS 26.</div>
          </div>
          <button
            onClick={() => {
              soundEffects.playClick();
              onStart();
            }}
            className="btn-3d-navy text-white font-black px-10 py-4 rounded-2xl text-sm uppercase tracking-wider shadow-xl shadow-blue-900/40"
          >
            Crear mi cuenta
          </button>
        </div>
      </footer>

    </div>
  );
};
