import React, { useState } from 'react';
import { 
  X, Sparkles, Mail, Lock, Unlock, Eye, EyeOff,
  LogIn, UserPlus, ChevronRight, User, AlertCircle
} from 'lucide-react';
import { CURRICULUM_DATA, MASCOT_INFO } from '../data/datosCurriculares';
import { soundEffects } from '../utils/sonido';
import { AvatarBadge, AVATAR_OPTIONS } from './SistemaAvatar';
import { AuroraBackground } from './FondoAurora';
import { APP_ASSETS } from '../data/recursosApp';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (name: string, year: number, avatar: string, goal: number, unlockedYear: number) => void;
  initialMode: 'register' | 'login';
  savedName?: string;
  savedAvatar?: string;
  savedYear?: number;
}

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
  // Register: step 1 = cuenta, step 2 = año, step 3 = avatar
  const [step, setStep] = useState(1);

  // Form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(savedName);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number>(savedYear || 1);
  const [selectedAvatarId, setSelectedAvatarId] = useState('capi');
  const [unlockAll, setUnlockAll] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const selectedAvatar = AVATAR_OPTIONS.find(a => a.id === selectedAvatarId) || AVATAR_OPTIONS[0];

  const validateEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleLoginSubmit = () => {
    setError('');
    if (!email.trim() || !password.trim()) {
      setError('Completa todos los campos para continuar.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Ingresa un correo electrónico válido.');
      return;
    }
    if (password.length < 4) {
      setError('La contraseña debe tener al menos 4 caracteres.');
      return;
    }
    // Simulate login — store credentials locally
    const storedEmail = localStorage.getItem('ipet66_email');
    const storedPass = localStorage.getItem('ipet66_pass');
    if (storedEmail && storedPass) {
      if (email !== storedEmail || password !== storedPass) {
        setError('Correo o contraseña incorrectos. Verifica tus datos.');
        return;
      }
    }
    // If no stored account, treat as new auto-register
    localStorage.setItem('ipet66_email', email);
    localStorage.setItem('ipet66_pass', password);
    soundEffects.playVictory();
    const unlocked = unlockAll ? 7 : (savedYear || 1);
    const displayName = savedName || email.split('@')[0];
    onComplete(displayName, savedYear || 1, savedAvatar, 50, unlocked);
  };

  const handleRegisterStep1 = () => {
    setError('');
    if (!email.trim() || !password.trim() || !name.trim()) {
      setError('Completa todos los campos para continuar.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Ingresa un correo electrónico válido.');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (name.trim().length < 2) {
      setError('Tu nombre debe tener al menos 2 caracteres.');
      return;
    }
    setStep(2);
    soundEffects.playClick();
  };

  const handleRegisterStep2 = () => {
    setStep(3);
    soundEffects.playClick();
  };

  const handleRegisterFinish = () => {
    // Save credentials
    localStorage.setItem('ipet66_email', email);
    localStorage.setItem('ipet66_pass', password);
    soundEffects.playVictory();
    const unlocked = unlockAll ? 7 : selectedYear;
    onComplete(name.trim(), selectedYear, selectedAvatar.emoji, 50, unlocked);
  };

  const handleGoogleSignIn = () => {
    soundEffects.playVictory();
    const mockNames = ['Mateo Técnico', 'Valentina IPET', 'Lucas del Taller', 'Camila 66', 'Sofía Circuito', 'Benjamín Robot', 'Isabella Innovación'];
    const randomName = mockNames[Math.floor(Math.random() * mockNames.length)];
    const unlocked = unlockAll ? 7 : selectedYear;
    onComplete(randomName, selectedYear, selectedAvatar.emoji, 50, unlocked);
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setError('');
      soundEffects.playClick();
    }
  };

  const totalSteps = mode === 'register' ? 3 : 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <AuroraBackground intensity="medium" />
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl z-10" onClick={onClose} />

      <div className="relative z-20 liquid-glass-strong border border-white/15 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="liquid-glass px-6 py-5 border-b border-white/10 flex items-center justify-between relative">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl overflow-hidden shadow-lg border border-white/20">
              <img src={APP_ASSETS.mascot.default} alt={MASCOT_INFO.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-black text-base text-white tracking-tight">
                {mode === 'register' ? 'Crear cuenta' : 'Iniciar sesión'}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                {mode === 'register' ? `Paso ${step} de ${totalSteps}` : 'APP-BALSE-QUIZ • IPET 66'}
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

        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto relative">
          
          {/* Progress Bar (register only) */}
          {mode === 'register' && (
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex-1 h-2 rounded-full overflow-hidden bg-slate-800 border border-slate-700">
                  <div className={`h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 ${step >= s ? 'w-full' : 'w-0'}`} />
                </div>
              ))}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-bold animate-in slide-in-from-top-2 duration-200">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* =================== LOGIN MODE =================== */}
          {mode === 'login' && (
            <div className="space-y-5 animate-in slide-in-from-right-4 duration-300">
              
              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-xs font-black text-slate-300 uppercase tracking-widest mb-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder="tu.correo@ipet66.edu.ar"
                  className="w-full liquid-glass border border-white/10 rounded-2xl px-4 py-3.5 text-white font-bold text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-inner"
                />
              </div>

              {/* Password */}
              <div>
                <label className="flex items-center gap-2 text-xs font-black text-slate-300 uppercase tracking-widest mb-2">
                  <Lock className="w-4 h-4 text-cyan-400" />
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(''); }}
                    placeholder="••••••••"
                    className="w-full liquid-glass border border-white/10 rounded-2xl px-4 py-3.5 pr-12 text-white font-bold text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-inner"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-xl text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Login button */}
              <button
                type="button"
                onClick={handleLoginSubmit}
                className="w-full btn-3d-navy text-white font-black py-4 rounded-2xl text-sm uppercase tracking-wider shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2"
              >
                <LogIn className="w-5 h-5" />
                <span>Iniciar Sesión</span>
              </button>

              <div className="flex items-center gap-3 py-1">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">o</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Google Sign-In */}
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

              {/* Mascot tip */}
              <div className="liquid-glass p-4 rounded-2xl border border-white/10 flex items-start gap-3 shadow-inner">
                <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 shadow-md">
                  <img src={APP_ASSETS.mascot.thinking} alt={MASCOT_INFO.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-black text-cyan-400 uppercase tracking-widest mb-1">{MASCOT_INFO.name} dice:</div>
                  <p className="text-xs text-slate-200 font-bold leading-snug">
                    ¡Qué bueno verte de regreso! Ingresa tu correo y contraseña para continuar con tu progreso.
                  </p>
                </div>
              </div>

              {/* Switch to register */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => { soundEffects.playClick(); setMode('register'); setStep(1); setError(''); }}
                  className="text-xs font-black text-slate-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  ¿No tienes cuenta? Regístrate
                </button>
              </div>
            </div>
          )}

          {/* =================== REGISTER STEP 1: Cuenta =================== */}
          {mode === 'register' && step === 1 && (
            <div className="space-y-5 animate-in slide-in-from-right-4 duration-300">

              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-xs font-black text-slate-300 uppercase tracking-widest mb-2">
                  <User className="w-4 h-4 text-cyan-400" />
                  Nombre o apodo
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setError(''); }}
                  placeholder="Ej: Mateo Técnico"
                  className="w-full liquid-glass border border-white/10 rounded-2xl px-4 py-3.5 text-white font-bold text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-inner"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-xs font-black text-slate-300 uppercase tracking-widest mb-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(''); }}
                  placeholder="tu.correo@ipet66.edu.ar"
                  className="w-full liquid-glass border border-white/10 rounded-2xl px-4 py-3.5 text-white font-bold text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-inner"
                />
              </div>

              {/* Password */}
              <div>
                <label className="flex items-center gap-2 text-xs font-black text-slate-300 uppercase tracking-widest mb-2">
                  <Lock className="w-4 h-4 text-cyan-400" />
                  Contraseña (mín. 6 caracteres)
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(''); }}
                    placeholder="••••••••"
                    className="w-full liquid-glass border border-white/10 rounded-2xl px-4 py-3.5 pr-12 text-white font-bold text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-inner"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-xl text-slate-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleRegisterStep1}
                className="w-full btn-3d-navy text-white font-black py-4 rounded-2xl text-sm uppercase tracking-wider shadow-xl shadow-blue-900/40 flex items-center justify-center gap-2"
              >
                <span>Siguiente</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 py-1">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest">o</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Google */}
              <button onClick={handleGoogleSignIn} type="button" className="w-full btn-google-premium py-3.5 px-6 flex items-center justify-center gap-3">
                <svg className="w-5 h-5 shrink-0 drop-shadow-sm" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="tracking-wide">Registrarse con Google</span>
              </button>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => { soundEffects.playClick(); setMode('login'); setStep(1); setError(''); }}
                  className="text-xs font-black text-slate-400 hover:text-white transition-colors underline underline-offset-4"
                >
                  ¿Ya tienes una cuenta? Inicia sesión
                </button>
              </div>
            </div>
          )}

          {/* =================== REGISTER STEP 2: Año =================== */}
          {mode === 'register' && step === 2 && (
            <div className="space-y-5 animate-in slide-in-from-right-4 duration-300">

              <div className="text-center">
                <h3 className="text-xl font-black text-white mb-1">¿En qué año estás?</h3>
                <p className="text-xs text-slate-400 font-bold">Selecciona tu año actual en el IPET 66</p>
              </div>

              <div className="grid grid-cols-7 gap-2.5">
                {CURRICULUM_DATA.map((c) => (
                  <button
                    type="button"
                    key={c.year}
                    onClick={() => { soundEffects.playClick(); setSelectedYear(c.year); }}
                    className={`relative p-3.5 rounded-2xl border transition-all flex flex-col items-center gap-1 ${
                      selectedYear === c.year
                        ? 'bg-gradient-to-tr from-blue-600 to-cyan-500 border-blue-300/80 shadow-xl shadow-blue-900/30 scale-105 text-white'
                        : 'liquid-glass border-white/10 text-slate-300 hover:border-white/30 hover:scale-105'
                    }`}
                  >
                    <div className="text-lg font-black">{c.year}º</div>
                    <div className={`text-[8px] font-bold uppercase tracking-wider ${selectedYear === c.year ? 'text-white/80' : 'text-slate-500'}`}>
                      {c.year <= 3 ? 'Bás.' : c.year <= 5 ? 'Sup.' : 'Avz.'}
                    </div>
                  </button>
                ))}
              </div>

              {/* Toggle Examen Libre */}
              <div className="liquid-glass p-4 rounded-2xl border border-white/10 flex items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-3 flex-1">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                    unlockAll ? 'bg-gradient-to-tr from-amber-500 to-orange-500 shadow-lg shadow-amber-500/30' : 'bg-slate-800 border border-slate-700'
                  }`}>
                    {unlockAll ? <Unlock className="w-5 h-5 text-white" /> : <Lock className="w-5 h-5 text-slate-400" />}
                  </div>
                  <div>
                    <div className="font-black text-sm text-white">Pase libre total</div>
                    <div className="text-[11px] text-slate-400 font-bold">Desbloquea del 1º al 7º año</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => { soundEffects.playClick(); setUnlockAll(!unlockAll); }}
                  className={`w-14 h-7 rounded-full transition-all relative p-0.5 border ${unlockAll ? 'bg-emerald-500 border-emerald-400' : 'bg-slate-800 border-slate-700'}`}
                >
                  <div className={`w-6 h-6 rounded-full bg-white shadow-md transition-transform ${unlockAll ? 'translate-x-7' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Mascot tip */}
              <div className="liquid-glass p-4 rounded-2xl border border-white/10 flex items-start gap-3 shadow-inner">
                <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 shadow-md">
                  <img src={APP_ASSETS.mascot.thinking} alt={MASCOT_INFO.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-black text-cyan-400 uppercase tracking-widest mb-1">{MASCOT_INFO.name} dice:</div>
                  <p className="text-xs text-slate-200 font-bold leading-snug">
                    Elige el año que cursas para desbloquear las materias previas automáticamente. Con el Pase Libre accedes a todo.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={prevStep} className="w-1/3 btn-3d-gray text-slate-200 font-black py-3.5 rounded-2xl text-xs uppercase tracking-wider">
                  Atrás
                </button>
                <button type="button" onClick={handleRegisterStep2} className="flex-1 btn-3d-navy text-white font-black py-3.5 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-blue-900/30">
                  <span>Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* =================== REGISTER STEP 3: Avatar =================== */}
          {mode === 'register' && step === 3 && (
            <div className="space-y-5 animate-in slide-in-from-right-4 duration-300">
              <div className="text-center">
                <h3 className="text-xl font-black text-white mb-1">Elige tu identidad</h3>
                <p className="text-xs text-slate-400 font-bold">Selecciona un avatar para tu perfil</p>
              </div>

              <div className="grid grid-cols-5 gap-3">
                {AVATAR_OPTIONS.map((avatar) => (
                  <button
                    key={avatar.id}
                    type="button"
                    onClick={() => { soundEffects.playClick(); setSelectedAvatarId(avatar.id); }}
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <AvatarBadge avatar={avatar} size="md" selected={selectedAvatarId === avatar.id} />
                    <span className={`text-[9px] font-black uppercase tracking-wide text-center leading-tight ${
                      selectedAvatarId === avatar.id ? 'text-cyan-400' : 'text-slate-500'
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
                <button type="button" onClick={prevStep} className="w-1/3 btn-3d-gray text-slate-200 font-black py-3.5 rounded-2xl text-xs uppercase tracking-wider">
                  Atrás
                </button>
                <button
                  type="button"
                  onClick={handleRegisterFinish}
                  className="flex-1 btn-3d-navy text-white font-black py-3.5 rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-blue-900/30"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Crear cuenta</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
