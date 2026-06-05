import React, { useEffect, useState } from 'react';
import { Sparkles, Flame, Award, Zap } from 'lucide-react';
import { soundEffects } from '../utils/sonido';
import { triggerConfetti } from '../utils/confeti';
import { AuroraBackground } from './FondoAurora';
import { AVATAR_OPTIONS } from './SistemaAvatar';

interface OnboardingSuccessProps {
  userName: string;
  userAvatar: string;
  currentYear: number;
  onComplete: () => void;
}

export const OnboardingSuccess: React.FC<OnboardingSuccessProps> = ({
  userName,
  userAvatar,
  currentYear,
  onComplete
}) => {
  const [stage, setStage] = useState(0);

  const avatar = AVATAR_OPTIONS.find(a => a.emoji === userAvatar) || AVATAR_OPTIONS[0];

  useEffect(() => {
    soundEffects.playVictory();
    
    const timer1 = setTimeout(() => setStage(1), 200);
    const timer2 = setTimeout(() => setStage(2), 800);
    const timer3 = setTimeout(() => setStage(3), 1400);
    const timer4 = setTimeout(() => {
      triggerConfetti();
    }, 1800);
    const timer5 = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 overflow-hidden">
      <AuroraBackground intensity="high" />
      
      <div className="relative z-10 max-w-md w-full mx-4 text-center space-y-8 animate-in zoom-in-95 duration-500">
        
        {/* Avatar con efecto de entrada */}
        <div className={`relative mx-auto transition-all duration-700 ${
          stage >= 1 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}>
          <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 opacity-40 blur-3xl animate-pulse" />
          <div className={`relative w-40 h-40 mx-auto rounded-3xl bg-gradient-to-tr ${avatar.gradient} flex items-center justify-center shadow-2xl border-4 ${avatar.borderColor} animate-bounce-subtle`}>
            <img src={avatar.image} alt={avatar.name} className="w-full h-full object-cover rounded-[22px]" />
          </div>
          
          {stage >= 2 && (
            <>
              <Sparkles className="absolute -top-4 -left-4 w-10 h-10 text-amber-400 animate-spin" />
              <Sparkles className="absolute -bottom-4 -right-4 w-8 h-8 text-emerald-400 animate-spin" />
              <Zap className="absolute top-0 right-0 w-8 h-8 text-yellow-400 fill-yellow-400 animate-pulse" />
            </>
          )}
        </div>

        {/* Mensaje de Bienvenida */}
        <div className={`space-y-3 transition-all duration-700 ${
          stage >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-emerald text-emerald-300 text-xs font-black uppercase tracking-widest shadow-lg">
            <Award className="w-4 h-4" />
            <span>Bienvenido al IPET 66</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-2xl">
            ¡Hola, {userName}!
          </h1>
          
          <p className="text-lg text-slate-300 font-bold">
            Estás listo para dominar <span className="text-emerald-400">{currentYear}º Año</span>
          </p>
        </div>

        {/* Stats Rápidas */}
        <div className={`grid grid-cols-3 gap-3 transition-all duration-700 delay-200 ${
          stage >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="liquid-glass-strong rounded-2xl p-3 border border-white/10">
            <Flame className="w-6 h-6 text-orange-400 mx-auto mb-1 fill-orange-400" />
            <div className="text-xs font-black text-white">x0</div>
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Combo</div>
          </div>
          <div className="liquid-glass-strong rounded-2xl p-3 border border-white/10">
            <Sparkles className="w-6 h-6 text-amber-400 mx-auto mb-1" />
            <div className="text-xs font-black text-white">150</div>
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Tuercas</div>
          </div>
          <div className="liquid-glass-strong rounded-2xl p-3 border border-white/10">
            <Zap className="w-6 h-6 text-rose-500 mx-auto mb-1 fill-rose-500" />
            <div className="text-xs font-black text-white">5</div>
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Vidas</div>
          </div>
        </div>

        {/* Loading bar para entrar a la app */}
        <div className={`space-y-2 transition-all duration-500 delay-500 ${
          stage >= 3 ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="text-xs font-black text-slate-400 uppercase tracking-widest">
            Preparando tu taller...
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full transition-all duration-1000"
              style={{ width: stage >= 3 ? '100%' : '0%' }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};
