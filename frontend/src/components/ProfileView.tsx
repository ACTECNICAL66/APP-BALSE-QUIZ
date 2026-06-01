import React, { useState } from 'react';
import { Trophy, GraduationCap, Flame, Sparkles, LogOut, AlertTriangle, Target, Zap, Star, Crown, Medal, Award } from 'lucide-react';
import { ACHIEVEMENTS_DATA, SCHOOL_INFO } from '../data/curriculumData';
import { APP_ASSETS } from '../data/appAssets';
import { soundEffects } from '../utils/sound';
import { AVATAR_OPTIONS } from './AvatarSystem';

interface ProfileViewProps {
  userName: string;
  userAvatar: string;
  currentYear: number;
  userXp: number;
  streak: number; // Current combo
  maxCombo: number; // Max historical combo
  perfectLessons: number;
  completedLessonsCount: number;
  hasTesterBadge?: boolean;
  onLogout: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  userName,
  userAvatar,
  currentYear,
  userXp,
  streak,
  maxCombo,
  perfectLessons,
  completedLessonsCount,
  hasTesterBadge = false,
  onLogout
}) => {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const currentAvatarObj = AVATAR_OPTIONS.find(a => a.emoji === userAvatar) || AVATAR_OPTIONS[0];

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 pb-24 md:pb-12 space-y-8 animate-in fade-in duration-200 font-sans">
      
      {/* Profile Header */}
      <div className="liquid-glass-card border border-slate-700/80 rounded-3xl p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left z-10 relative">
          
          <div className="relative shrink-0">
            <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr ${currentAvatarObj.gradient} border-4 ${currentAvatarObj.borderColor} flex items-center justify-center shadow-2xl overflow-hidden`}>
              <img src={currentAvatarObj.image} alt={currentAvatarObj.name} className="w-full h-full object-cover" />
            </div>
            {hasTesterBadge && (
              <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-2xl bg-slate-950 border-2 border-cyan-400/60 shadow-xl overflow-hidden animate-pulse-glow" title="Insignia Tester">
                <img src={APP_ASSETS.badges.tester} alt="Insignia Tester" className="w-full h-full object-contain p-0.5" />
              </div>
            )}
          </div>

          <div className="space-y-2 flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-black uppercase tracking-wider shadow-sm">
              <GraduationCap className="w-4 h-4" />
              <span>Estudiante de {SCHOOL_INFO.name}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-black text-white">{userName || 'Estudiante IPET'}</h1>
            
            <div className="text-sm font-semibold text-slate-300 flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1">
              <span className="bg-slate-900/90 border border-slate-700 px-3 py-1 rounded-xl text-emerald-400 font-black shadow-inner">{currentYear}º Año</span>
              <span>•</span>
              <span className="font-bold">{currentYear <= 3 ? 'Ciclo Básico' : 'Ciclo Superior Especializado'}</span>
            </div>
          </div>

          <button
            onClick={() => {
              soundEffects.playClick();
              setShowLogoutConfirm(true);
            }}
            className="sm:self-start btn-3d-red text-white font-black px-5 py-2.5 rounded-2xl text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-rose-500/20 shrink-0"
            title="Cerrar Sesión o Cambiar Usuario"
          >
            <LogOut className="w-4 h-4" />
            <span>Cerrar Sesión</span>
          </button>

        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        <div className="bg-slate-900/90 liquid-glass border border-slate-700/80 p-4 rounded-3xl text-center shadow-xl flex flex-col justify-between">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto mb-2 font-black text-xl border border-orange-500/30 shadow-inner">
            <Flame className="w-7 h-7 fill-orange-500" />
          </div>
          <div className="text-3xl font-black text-white">{streak}</div>
          <div className="text-[11px] font-black text-orange-400 uppercase tracking-wider mt-1">Combo Actual</div>
        </div>

        <div className="bg-slate-900/90 liquid-glass border border-slate-700/80 p-4 rounded-3xl text-center shadow-xl flex flex-col justify-between">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-2 font-black text-xl border border-amber-500/30 shadow-inner">
            <Zap className="w-7 h-7 text-amber-400 fill-amber-400" />
          </div>
          <div className="text-3xl font-black text-white">{maxCombo}</div>
          <div className="text-[11px] font-black text-amber-400 uppercase tracking-wider mt-1">Mayor Racha</div>
        </div>

        <div className="bg-slate-900/90 liquid-glass border border-slate-700/80 p-4 rounded-3xl text-center shadow-xl flex flex-col justify-between">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2 font-black text-xl border border-emerald-500/30 shadow-inner">
            <Star className="w-7 h-7 text-emerald-400 fill-emerald-400" />
          </div>
          <div className="text-3xl font-black text-white">{completedLessonsCount}</div>
          <div className="text-[11px] font-black text-emerald-400 uppercase tracking-wider mt-1">Niveles Superados</div>
        </div>

        <div className="bg-slate-900/90 liquid-glass border border-slate-700/80 p-4 rounded-3xl text-center shadow-xl flex flex-col justify-between">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-2 font-black text-xl border border-blue-500/30 shadow-inner">
            <Trophy className="w-7 h-7 text-blue-400" />
          </div>
          <div className="text-3xl font-black text-white">{perfectLessons}</div>
          <div className="text-[11px] font-black text-blue-400 uppercase tracking-wider mt-1">Perfectas (100%)</div>
        </div>

      </div>

      {/* Year Highlights / Stats por Materia */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
            <Target className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-2xl font-black text-white">Tu Año Actual: {currentYear}º</h3>
        </div>

        <div className="liquid-glass-strong border border-white/10 rounded-3xl p-5 shadow-xl space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="liquid-glass p-3 rounded-2xl text-center border border-white/10 shadow-inner">
              <div className="text-2xl font-black text-emerald-400 flex justify-center">
                {completedLessonsCount >= 20 ? <Crown className="w-7 h-7 text-emerald-400" /> : completedLessonsCount >= 10 ? <Star className="w-7 h-7 text-emerald-400 fill-emerald-400" /> : <Target className="w-7 h-7 text-emerald-400" />}
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
                {completedLessonsCount >= 20 ? 'Experto' : completedLessonsCount >= 10 ? 'Avanzado' : 'Novato'}
              </div>
            </div>
            <div className="liquid-glass p-3 rounded-2xl text-center border border-white/10 shadow-inner">
              <div className="text-2xl font-black text-amber-400 flex justify-center">
                {maxCombo >= 10 ? <Flame className="w-7 h-7 text-amber-400 fill-amber-400" /> : maxCombo >= 5 ? <Zap className="w-7 h-7 text-amber-400 fill-amber-400" /> : <Target className="w-7 h-7 text-amber-400" />}
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
                {maxCombo >= 10 ? 'Imparable' : maxCombo >= 5 ? 'En Racha' : 'Constancia'}
              </div>
            </div>
            <div className="liquid-glass p-3 rounded-2xl text-center border border-white/10 shadow-inner">
              <div className="text-2xl font-black text-blue-400 flex justify-center">
                {userXp >= 1000 ? <Trophy className="w-7 h-7 text-blue-400" /> : userXp >= 500 ? <Medal className="w-7 h-7 text-blue-400" /> : <Award className="w-7 h-7 text-blue-400" />}
              </div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
                {userXp >= 1000 ? 'Oro' : userXp >= 500 ? 'Plata' : 'Bronce'}
              </div>
            </div>
          </div>

          <div className="bg-slate-950/50 rounded-2xl p-4 border border-white/5 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-black text-slate-300 uppercase tracking-widest">Nivel de Liga</span>
              <span className="font-black text-amber-400">
                {userXp >= 3000 ? 'Oro' : userXp >= 1500 ? 'Plata' : userXp >= 500 ? 'Bronce' : 'Hierro'}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-black text-slate-300 uppercase tracking-widest">Año Académico</span>
              <span className="font-black text-emerald-400">{currentYear}º Año</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="font-black text-slate-300 uppercase tracking-widest">Total de Lecciones</span>
              <span className="font-black text-cyan-400">{completedLessonsCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Insignias Demostrativas (PNG) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5">
          <Award className="w-6 h-6 text-cyan-400" />
          <h3 className="text-2xl font-black text-white">Insignias Demostrativas</h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Tester Badge */}
          <div className={`liquid-glass-strong border rounded-3xl p-4 text-center shadow-xl transition-all ${
            hasTesterBadge ? 'border-cyan-400/50 bg-cyan-500/5' : 'border-slate-800 opacity-60'
          }`}>
            <div className={`w-20 h-20 mx-auto rounded-2xl bg-slate-950 border-2 overflow-hidden flex items-center justify-center mb-3 ${
              hasTesterBadge ? 'border-cyan-400/60 shadow-lg shadow-cyan-500/20' : 'border-slate-700 grayscale'
            }`}>
              <img src={APP_ASSETS.badges.tester} alt="Insignia Tester" className="w-full h-full object-contain p-1" />
            </div>
            <div className="text-sm font-black text-white">Tester</div>
            <div className={`text-[10px] font-black uppercase tracking-widest mt-1 ${
              hasTesterBadge ? 'text-cyan-400' : 'text-slate-500'
            }`}>
              {hasTesterBadge ? 'Obtenida' : 'Bloqueada'}
            </div>
          </div>

          {/* Placeholder badges */}
          {['Próxima', 'Próxima', 'Próxima'].map((label, i) => (
            <div key={i} className="liquid-glass border border-slate-800 rounded-3xl p-4 text-center shadow-xl opacity-50">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-slate-800 border-2 border-dashed border-slate-700 flex items-center justify-center mb-3">
                <Sparkles className="w-8 h-8 text-slate-600" />
              </div>
              <div className="text-sm font-black text-slate-500">???</div>
              <div className="text-[10px] font-black uppercase tracking-widest mt-1 text-slate-600">{label}</div>
            </div>
          ))}
        </div>

        <div className="liquid-glass border border-white/10 rounded-2xl p-4 text-center text-xs font-bold text-slate-300 flex items-center justify-center gap-2 shadow-lg">
          <Award className="w-4 h-4 text-cyan-400" />
          <span>Adquiere la Insignia Tester en la Tienda del Taller para mostrarla en tu perfil y avatar.</span>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-6 h-6 text-purple-400 animate-spin" />
          <h3 className="text-2xl font-black text-white">Logros de IPET 66</h3>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {ACHIEVEMENTS_DATA.map((ach) => {
            let progress = 0;
            if (ach.id === 'first_step') progress = Math.min(completedLessonsCount, 1);
            if (ach.id === 'streak_5') progress = Math.min(maxCombo, 5);
            if (ach.id === 'perfect_lesson') progress = Math.min(perfectLessons, 1);
            if (ach.id === 'xp_500') progress = Math.min(userXp, 500);
            if (ach.id === 'year_master') progress = completedLessonsCount >= 4 ? 1 : 0;

            const isCompleted = progress >= ach.maxProgress;

            return (
              <div
                key={ach.id}
                onClick={() => soundEffects.playClick()}
                className={`bg-slate-900/90 liquid-glass border rounded-3xl p-6 flex items-center justify-between gap-4 transition-all shadow-xl ${
                  isCompleted ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-slate-800'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-inner border ${
                    isCompleted ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' : 'bg-slate-800 text-slate-500 border-slate-700'
                  }`}>
                    {ach.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-white flex items-center gap-2">
                      <span>{ach.title}</span>
                      {isCompleted && <Crown className="w-4 h-4 text-amber-400" />}
                    </h4>
                    <p className="text-xs text-slate-300 font-bold mt-0.5">{ach.description}</p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-base font-black text-white">
                    {progress} / {ach.maxProgress}
                  </div>
                  <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mt-0.5">
                    {isCompleted ? 'Completado' : 'En Progreso'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Logout Confirm Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 font-sans">
          <div className="bg-slate-900 liquid-glass border border-slate-700/80 rounded-3xl max-w-sm w-full p-6 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto border border-rose-500/40 shadow-inner">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-2">¿Quieres cerrar sesión?</h3>
              <p className="text-sm text-slate-300 font-semibold leading-relaxed">
                Podrás registrar un nuevo estudiante o volver a conectarte con Google en cualquier momento. Tu progreso en este navegador se conservará.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="w-1/2 btn-3d-gray text-slate-200 font-black py-3 rounded-2xl text-xs uppercase tracking-wider"
              >
                Quedarme
              </button>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onLogout();
                }}
                className="w-1/2 btn-3d-red text-white font-black py-3 rounded-2xl text-xs uppercase tracking-wider"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
