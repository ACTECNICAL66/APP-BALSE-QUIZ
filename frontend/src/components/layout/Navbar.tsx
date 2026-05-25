import React, { useState, useEffect } from 'react';
import { Flame, Gem, Heart, ChevronDown, Sparkles, AlertCircle, Lock, Bot } from 'lucide-react';
import { soundEffects } from '../../utils/sound';
import { CURRICULUM_DATA } from '../../data/curriculumData';

import { AVATAR_OPTIONS } from '../ui/AvatarSystem';

interface NavbarProps {
  currentYear: number;
  setCurrentYear: (year: number) => void;
  unlockedYear: number;
  comboStreak: number;
  gems: number;
  hearts: number;
  maxHearts: number;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenShop: () => void;
  onOpenProfile: () => void;
  userAvatar?: string;
  userName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentYear,
  setCurrentYear,
  unlockedYear,
  comboStreak,
  gems,
  hearts,
  maxHearts,
  activeTab,
  setActiveTab,
  onOpenShop,
  onOpenProfile,
  userAvatar = '🧑‍🎓',
  userName = 'Tú'
}) => {
  const currentAvatarObj = AVATAR_OPTIONS.find(a => a.emoji === userAvatar) || AVATAR_OPTIONS[0];
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const [heartTimer, setHeartTimer] = useState(180);

  useEffect(() => {
    if (hearts >= maxHearts) return;
    const interval = setInterval(() => {
      setHeartTimer((prev) => (prev <= 1 ? 180 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [hearts, maxHearts]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const currentCurriculum = CURRICULUM_DATA.find((c) => c.year === currentYear);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/85 liquid-glass border-b border-slate-800/80 px-4 py-3 sm:px-6 transition-all shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Brand & Year Selector */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('learn')}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform border border-emerald-400/40">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block text-left">
              <span className="font-extrabold text-xl tracking-wider bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent block">
                IPET 66
              </span>
              <span className="text-[10px] text-emerald-400/80 font-black uppercase tracking-widest block -mt-1">
                TecnoLingo
              </span>
            </div>
          </button>

          <div className="relative">
            <button
              onClick={() => {
                soundEffects.playClick();
                setShowYearDropdown(!showYearDropdown);
              }}
              className="flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded-2xl text-sm font-black border border-slate-700 shadow-inner transition-all"
            >
              <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 px-2 py-0.5 rounded-xl text-xs font-black shadow-sm">
                {currentYear}º AÑO
              </span>
              <span className="hidden md:inline text-xs text-slate-300 font-bold truncate max-w-[160px]">
                {currentCurriculum ? currentCurriculum.title.split(' - ')[1] : ''}
              </span>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${showYearDropdown ? 'rotate-180' : ''}`} />
            </button>

            {/* Year Dropdown */}
            {showYearDropdown && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setShowYearDropdown(false)} />
                <div className="absolute left-0 top-full mt-2 w-80 bg-slate-900/95 liquid-glass rounded-3xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200 border border-slate-700/80 shadow-2xl">
                  <div className="text-[11px] font-black text-slate-400 px-3 py-1.5 uppercase tracking-widest flex items-center justify-between">
                    <span>Años de Estudio IPET 66</span>
                    <span className="text-emerald-400">Progreso Secuencial</span>
                  </div>
                  <div className="space-y-1.5 max-h-80 overflow-y-auto pr-1 mt-2">
                    {CURRICULUM_DATA.map((curr) => {
                      const isLocked = curr.year > unlockedYear;
                      const isSelected = curr.year === currentYear;

                      return (
                        <button
                          key={curr.year}
                          disabled={isLocked}
                          onClick={() => {
                            soundEffects.playClick();
                            setCurrentYear(curr.year);
                            setShowYearDropdown(false);
                            setActiveTab('learn');
                          }}
                          className={`w-full flex items-center gap-3.5 p-3 rounded-2xl transition-all text-left ${
                            isSelected
                              ? 'bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 font-black shadow-lg shadow-emerald-500/10'
                              : isLocked
                              ? 'opacity-40 bg-slate-800/40 border border-transparent text-slate-500 cursor-not-allowed'
                              : 'hover:bg-slate-800/80 text-slate-200 border border-slate-800'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shrink-0 border ${
                            isSelected ? 'bg-emerald-500 text-slate-950 border-emerald-400' : isLocked ? 'bg-slate-800 text-slate-600 border-slate-700' : 'bg-slate-800 text-slate-300 border-slate-700'
                          }`}>
                            {isLocked ? <Lock className="w-4 h-4" /> : `${curr.year}º`}
                          </div>
                          <div className="flex-1 truncate">
                            <div className="font-black text-sm text-white flex items-center gap-2">
                              <span>{curr.title}</span>
                              {isLocked && <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-rose-400 font-extrabold uppercase">Bloqueado</span>}
                            </div>
                            <div className="text-xs text-slate-400 line-clamp-1">{curr.subtitle}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right: Combo Streak, Gems, Hearts & Profile */}
        <div className="flex items-center gap-2 sm:gap-4 font-black text-sm">
          
          {/* Combo Streak */}
          <div className="relative group">
            <button 
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border transition-all ${
                comboStreak > 0
                  ? 'bg-orange-500/15 border-orange-500/40 text-orange-400 scale-105 shadow-md shadow-orange-500/10'
                  : 'bg-slate-800/80 border-slate-700/80 text-slate-400 hover:bg-slate-800'
              }`}
              title="Combo de Aciertos Seguidos"
            >
              <Flame className={`w-5 h-5 ${comboStreak > 0 ? 'text-orange-500 fill-orange-500 animate-bounce-subtle' : 'text-slate-500'}`} />
              <span className="font-black text-base">{comboStreak}</span>
            </button>
            <div className="absolute right-0 top-full mt-2 w-48 bg-slate-900/95 liquid-glass rounded-2xl p-2 z-50 hidden group-hover:block text-xs text-center border border-slate-700/80 shadow-2xl">
              <div className="font-extrabold text-orange-400">Combo de Aciertos</div>
              <div className="text-slate-300 text-[11px] mt-1">Ganas más XP al encadenar respuestas correctas.</div>
            </div>
          </div>

          {/* Gems / Tuercas Doradas */}
          <button 
            onClick={onOpenShop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/80 rounded-2xl border border-amber-500/30 text-amber-400 hover:bg-slate-800 transition-all shadow-inner"
            title="Tuercas doradas (Gemas para la tienda)"
          >
            <Gem className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span className="font-black text-base">{gems}</span>
          </button>

          {/* Hearts */}
          <div className="relative group">
            <button 
              onClick={onOpenShop}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border transition-all shadow-inner ${
                hearts === 0 
                  ? 'bg-rose-500/20 border-rose-500/60 text-rose-400 animate-pulse' 
                  : 'bg-slate-800/80 border-rose-500/30 text-rose-400 hover:bg-slate-800'
              }`}
              title="Corazones disponibles"
            >
              <Heart className={`w-5 h-5 text-rose-500 ${hearts > 0 ? 'fill-rose-500' : ''}`} />
              <span className="font-black text-base">{hearts}</span>
            </button>

            {/* Heart tooltip with timer */}
            {hearts < maxHearts && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-slate-900/95 liquid-glass rounded-2xl border border-slate-700/80 shadow-2xl p-3 z-50 hidden group-hover:block text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2 font-black text-rose-400 mb-1">
                  <AlertCircle className="w-4 h-4" />
                  Corazones en recarga
                </div>
                <div>Próximo corazón en: <span className="font-mono font-black text-white">{formatTime(heartTimer)}</span></div>
                <div className="mt-2 text-slate-400 text-[11px]">Visita la tienda para recargar al instante con tus tuercas doradas.</div>
              </div>
            )}
          </div>

          {/* IA / Advisor Button */}
          <button
            onClick={() => setActiveTab('advisor')}
            className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-500/40 text-purple-300 hover:border-purple-400 rounded-2xl transition-all shadow-md shadow-purple-500/10"
            title="Consejos y Metodologías IPET 66"
          >
            <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
            <span className="text-xs font-black">Consejero IA</span>
          </button>

          {/* User Profile */}
          <button
            onClick={onOpenProfile}
            className={`flex items-center gap-2 px-2.5 py-1.5 rounded-2xl liquid-glass border border-white/10 hover:border-white/30 transition-all ${
              activeTab === 'profile' ? 'ring-2 ring-emerald-400 shadow-lg shadow-emerald-500/20' : ''
            }`}
            title={`Perfil de ${userName}`}
          >
            <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${currentAvatarObj.gradient} flex items-center justify-center text-base shadow-md border ${currentAvatarObj.borderColor}`}>
              <span className="drop-shadow">{userAvatar}</span>
            </div>
            <span className="hidden sm:inline text-xs font-black text-white truncate max-w-[100px]">{userName}</span>
          </button>

        </div>

      </div>
    </header>
  );
};
