import React, { useState } from 'react';
import { 
  X, Sparkles, User, Calendar, Target, Lock, 
  Unlock, LogIn, UserPlus, ChevronRight, Check
} from 'lucide-react';
import { CURRICULUM_DATA, MASCOT_INFO } from '../../data/curriculumData';
import { soundEffects } from '../../utils/sound';
import { AvatarBadge, AVATAR_OPTIONS } from '../ui/AvatarSystem';
import { AuroraBackground } from '../layout/AuroraBackground';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (name: string, year: number, avatar: string, goal: number, unlockedYear: number) => void;
  initialMode: 'register' | 'login';
  savedName?: string;
  savedAvatar?: string;
  savedYear?: number;
}

const GOALS = [
  { xp: 20, label: 'Relajado', description: '20 XP / día', emoji: '☕', color: 'from-sky-500 to-blue-500' },
  { xp: 50, label: 'Normal', description: '50 XP / día', emoji: '📚', color: 'from-emerald-500 to-teal-500' },
  { xp: 100, label: 'Intenso', description: '100 XP / día', emoji: '⚡', color: 'from-orange-500 to-amber-500' },
  { xp: 150, label: 'Olímpico', description: '150 XP / día', emoji: '🏆', color: 'from-purple-500 to-pink-500' },
];

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onComplete,
  initialMode,
  savedName = '',
  savedAvatar = '🧑‍🎓',
  savedYear = 1
}) => {
  const [mode, setMode] = useState<'register' | 'login'>(initialMode);
  const [step, setStep] = useState(1); // 1: Año, 2: Avatar, 3: Meta (solo register)
  const [name, setName] = useState(savedName);
  const [selectedYear, setSelectedYear] = useState<number>(savedYear || 1);
  const [selectedAvatarId, setSelectedAvatarId] = useState('freshman');
  const [selectedGoal, setSelectedGoal] = useState<number>(50);
  const [unlockAll, setUnlockAll] = useState(false);

  if (!isOpen) return null;

  const selectedAvatar = AVATAR_OPTIONS.find(a => a.id === selectedAvatarId) || AVATAR_OPTIONS[0];

  const handleSubmit = () => {
    if (!name.trim()) return;
    soundEffects.playVictory();
    const unlocked = unlockAll ? 7 : selectedYear;
    onComplete(name.trim(), selectedYear, selectedAvatar.emoji, selectedGoal, unlocked);
  };

  const handleGoogleSignIn = () => {
    soundEffects.playVictory();
    const mockNames = ['Mateo Técnico', 'Valentina IPET', 'Lucas del Taller', 'Camila 66'];
    const randomName = mockNames[Math.floor(Math.random() * mockNames.length)];
    const unlocked = unlockAll ? 7 : selectedYear;
    onComplete(randomName, selectedYear, selectedAvatar.emoji, selectedGoal, unlocked);
  };

  const nextStep = () => {
    if (step === 1 && name.trim()) {
      setStep(2);
      soundEffects.playClick();
    } else if (step === 2) {
      setStep(3);
      soundEffects.playClick();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      soundEffects.playClick();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <AuroraBackground intensity="medium" />
      
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl z-10" onClick={onClose} />

      <div className="relative z-20 liquid-glass-strong border border-white/15 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl">
        
        {/* Header con efecto glass */}
        <div className="liquid-glass px-6 py-5 border-b border-white/10 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${selectedAvatar.gradient} flex items-center justify-center text-xl shadow-lg border ${selectedAvatar.borderColor}`}>
              {MASCOT_INFO.avatar}
            </div>
            <div>
              <div className="font-black text-base text-white tracking-tight">
                {mode === 'register' ? 'Crear Perfil IPET 66' : 'Ingreso al Taller'}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                {mode === 'register' ? `Paso ${step} de 3` : 'Inicio de sesión'}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all liquid-glass border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto relative">
          
          {/* Progress Bar (solo register) */}
          {mode === 'register' && (
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1 h-2 rounded-full overflow-hidden bg-slate-800 border border-slate-700">
                  <div
                    className={`h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 ${
                      step >= s ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Step 1: Nombre + Año (Login: todo junto) */}
          {(step === 1 || mode === 'login') && (
            <div className="space-y-5 animate-in slide-in-from-right-4 duration-300">
              
              {/* Nombre */}
              <div>
                <label className="flex items-center gap-2 text-xs font-black text-slate-300 uppercase tracking-widest mb-2">
                  <User className="w-4 h-4 text-emerald-400" />
                  Tu Apodo de Taller
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Mateo Técnico"
                  className="w-full liquid-glass border border-white/10 rounded-2xl px-4 py-3.5 text-white font-black text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 transition-all shadow-inner"
                />
              </div>

              {/* Selector de Año con iconos consistentes */}
              <div>
                <label className="flex items-center gap-2 text-xs font-black text-slate-300 uppercase tracking-widest mb-2">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  Año que cursas actualmente
                </label>
                <div className="grid grid-cols-7 gap-2">
                  {CURRICULUM_DATA.map((c) => (
                    <button
                      type="button"
                      key={c.year}
                      onClick={() => {
                        soundEffects.playClick();
                        setSelectedYear(c.year);
                      }}
                      className={`relative p-3 rounded-2xl border transition-all ${
                        selectedYear === c.year
                          ? 'bg-gradient-to-tr from-emerald-500 to-teal-400 border-emerald-300 shadow-xl shadow-emerald-500/30 scale-105'
                          : 'liquid-glass border-white/10 text-slate-300 hover:border-white/30 hover:scale-105'
                      }`}
                    >
                      <div className={`text-base font-black ${selectedYear === c.year ? 'text-white' : 'text-white'}`}>
                        {c.year}º
                      </div>
                      <div className={`text-[8px] font-bold ${selectedYear === c.year ? 'text-white/80' : 'text-slate-400'} uppercase tracking-wider`}>
                        {c.year <= 3 ? 'Básico' : 'Sup.'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggle Examen Libre */}
              <div className="liquid-glass p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-3 flex-1">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    unlockAll 
                      ? 'bg-gradient-to-tr from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30' 
                      : 'bg-slate-800 border border-slate-700'
                  }`}>
                    {unlockAll ? (
                      <Unlock className="w-5 h-5 text-white" />
                    ) : (
                      <Lock className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                  <div>
                    <div className="font-black text-sm text-white">Pase Libre Total</div>
                    <div className="text-[11px] text-slate-400 font-bold">Desbloquea del 1º al 7º año (Examen Libre)</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    soundEffects.playClick();
                    setUnlockAll(!unlockAll);
                  }}
                  className={`w-14 h-7 rounded-full transition-all relative p-0.5 border ${
                    unlockAll ? 'bg-emerald-500 border-emerald-400' : 'bg-slate-800 border-slate-700'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full bg-white shadow-md transition-transform ${
                    unlockAll ? 'translate-x-7' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              {/* Botón Siguiente (Login) o Continuar (Register) */}
              {mode === 'login' ? (
                <div className="space-y-3.5 pt-2">
                  {savedName && (
                    <button
                      type="button"
                      onClick={() => {
                        soundEffects.playVictory();
                        onComplete(savedName, savedYear, savedAvatar, 50, unlockAll ? 7 : savedYear);
                      }}
                      className="w-full liquid-glass-emerald border border-emerald-400/50 text-white font-black py-3.5 px-4 rounded-2xl text-sm shadow-xl flex items-center justify-between hover:scale-[1.02] active:scale-95 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-900/80 flex items-center justify-center text-lg shadow-md border border-emerald-500/30">
                          {savedAvatar}
                        </div>
                        <div className="text-left">
                          <div className="text-xs text-emerald-300 font-extrabold uppercase tracking-wider">Cuenta Guardada</div>
                          <div className="text-sm font-black text-white truncate max-w-[180px]">{savedName}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-emerald-500 text-slate-950 text-xs font-black px-3 py-1.5 rounded-xl shadow group-hover:bg-white transition-colors">
                        <span>Entrar</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!name.trim()}
                    className="w-full btn-3d-green text-white font-black py-4 rounded-2xl text-sm uppercase tracking-wider shadow-xl shadow-emerald-500/40 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <LogIn className="w-5 h-5" />
                    <span>Entrar con Apodo</span>
                  </button>

                  <div className="flex items-center gap-3 py-1">
                    <div className="flex-1 h-px bg-white/10" />
                    <span className="text-xs font-black text-slate-500 uppercase tracking-widest">o</span>
                    <div className="flex-1 h-px bg-white/10" />
                  </div>

                  <button
                    onClick={handleGoogleSignIn}
                    type="button"
                    className="w-full btn-google-premium py-3.5 px-6 flex items-center justify-center gap-3"
                  >
                    <svg className="w-5 h-5 shrink-0 drop-shadow-sm" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <span className="tracking-wide">Continuar con Google</span>
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!name.trim()}
                  className="w-full btn-3d-green text-white font-black py-4 rounded-2xl text-sm uppercase tracking-wider shadow-xl shadow-emerald-500/40 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Continuar</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}

              {/* Mensaje de Voltio */}
              <div className="liquid-glass p-4 rounded-2xl border border-emerald-500/30 flex items-start gap-3 shadow-inner">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-xl shrink-0 shadow-md">
                  {MASCOT_INFO.avatar}
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-black text-emerald-400 uppercase tracking-widest mb-1">
                    {MASCOT_INFO.name} dice:
                  </div>
                  <p className="text-xs text-slate-200 font-bold leading-snug">
                    {mode === 'register' 
                      ? '¡Bienvenido al taller! Elige el año que cursas para que desbloquee tus materias previas.'
                      : '¡Qué bueno verte de regreso! Ingresa tu apodo y año para continuar con tu combo de aciertos.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Avatar Selection (solo register) */}
          {step === 2 && mode === 'register' && (
            <div className="space-y-5 animate-in slide-in-from-right-4 duration-300">
              <div className="text-center">
                <h3 className="text-xl font-black text-white mb-1">Elige tu Identidad IPET</h3>
                <p className="text-xs text-slate-400 font-bold">10 avatares temáticos del taller técnico</p>
              </div>

              <div className="grid grid-cols-5 gap-3">
                {AVATAR_OPTIONS.map((avatar) => (
                  <button
                    key={avatar.id}
                    type="button"
                    onClick={() => {
                      soundEffects.playClick();
                      setSelectedAvatarId(avatar.id);
                    }}
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <AvatarBadge 
                      avatar={avatar} 
                      size="md" 
                      selected={selectedAvatarId === avatar.id} 
                    />
                    <span className={`text-[9px] font-black uppercase tracking-wide text-center leading-tight ${
                      selectedAvatarId === avatar.id ? 'text-emerald-400' : 'text-slate-500'
                    }`}>
                      {avatar.name}
                    </span>
                  </button>
                ))}
              </div>

              <div className="liquid-glass p-4 rounded-2xl border border-white/10 flex items-center gap-3 shadow-inner">
                <AvatarBadge avatar={selectedAvatar} size="lg" showRing />
                <div>
                  <div className="font-black text-white">{selectedAvatar.name}</div>
                  <div className="text-xs text-slate-300 font-bold">{selectedAvatar.description}</div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/3 btn-3d-gray text-slate-200 font-black py-3.5 rounded-2xl text-xs uppercase tracking-wider"
                >
                  Atrás
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="flex-1 btn-3d-green text-white font-black py-3.5 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Meta diaria (solo register) */}
          {step === 3 && mode === 'register' && (
            <div className="space-y-5 animate-in slide-in-from-right-4 duration-300">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="w-6 h-6 text-amber-400" />
                  <h3 className="text-xl font-black text-white">Meta Diaria de XP</h3>
                </div>
                <p className="text-xs text-slate-400 font-bold">¿Cuánto tiempo quieres dedicarle al taller cada día?</p>
              </div>

              <div className="space-y-2.5">
                {GOALS.map((g) => (
                  <button
                    type="button"
                    key={g.xp}
                    onClick={() => {
                      soundEffects.playClick();
                      setSelectedGoal(g.xp);
                    }}
                    className={`w-full p-4 rounded-2xl flex items-center gap-4 transition-all border ${
                      selectedGoal === g.xp
                        ? 'liquid-glass-emerald border-emerald-400/50 scale-[1.02] shadow-xl shadow-emerald-500/20'
                        : 'liquid-glass border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${g.color} flex items-center justify-center text-2xl shadow-lg shrink-0`}>
                      {g.emoji}
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-black text-white text-sm">{g.label}</div>
                      <div className="text-xs text-slate-400 font-bold">{g.description}</div>
                    </div>
                    {selectedGoal === g.xp && (
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-md">
                        <Check className="w-4 h-4 text-white" strokeWidth={4} />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={prevStep}
                  className="w-1/3 btn-3d-gray text-slate-200 font-black py-3.5 rounded-2xl text-xs uppercase tracking-wider"
                >
                  Atrás
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex-1 btn-3d-green text-white font-black py-3.5 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Crear Perfil</span>
                </button>
              </div>
            </div>
          )}

          {/* Toggle de modo */}
          {mode === 'register' && step === 1 && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setMode('login');
                }}
                className="text-xs font-black text-slate-400 hover:text-white transition-colors underline underline-offset-4"
              >
                ¿Ya tienes una cuenta? Inicia sesión
              </button>
            </div>
          )}

          {mode === 'login' && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => {
                  soundEffects.playClick();
                  setMode('register');
                }}
                className="text-xs font-black text-slate-400 hover:text-white transition-colors underline underline-offset-4"
              >
                ¿Eres nuevo estudiante? Registra tu perfil
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
