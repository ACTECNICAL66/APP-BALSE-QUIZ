import React, { useState } from 'react';
import { 
  Wrench, PencilRuler, Calculator, Cpu, Zap, Box, Cog, Flame, 
  Layers, BatteryCharging, Terminal, Activity, Binary, Code, 
  Radio, ShieldCheck, Server, TrendingUp, Wifi, Settings, 
  Lock, Check, Star, Play, Sparkles, AlertTriangle, Crown, Gem
} from 'lucide-react';
import { CURRICULUM_DATA, SubjectUnit, Lesson } from '../data/datosCurriculares';
import { soundEffects } from '../utils/sonido';

interface LearnViewProps {
  currentYear: number;
  unlockedYear: number;
  completedLessons: string[];
  onStartLesson: (lesson: Lesson, subjectName: string) => void;
  onUnlockAllYears: () => void;
}

const getSubjectIcon = (iconName: string) => {
  switch (iconName) {
    case 'Wrench': return Wrench;
    case 'PencilRuler': return PencilRuler;
    case 'Calculator': return Calculator;
    case 'Cpu': return Cpu;
    case 'Zap': return Zap;
    case 'Box': return Box;
    case 'Cog': return Cog;
    case 'Flame': return Flame;
    case 'Layers': return Layers;
    case 'BatteryCharging': return BatteryCharging;
    case 'Terminal': return Terminal;
    case 'Activity': return Activity;
    case 'Binary': return Binary;
    case 'Code': return Code;
    case 'Radio': return Radio;
    case 'ShieldCheck': return ShieldCheck;
    case 'Server': return Server;
    case 'TrendingUp': return TrendingUp;
    case 'Wifi': return Wifi;
    case 'Settings': return Settings;
    default: return Wrench;
  }
};

export const LearnView: React.FC<LearnViewProps> = ({
  currentYear,
  unlockedYear,
  completedLessons,
  onStartLesson,
  onUnlockAllYears
}) => {
  const currentCurriculum = CURRICULUM_DATA.find((c) => c.year === currentYear);
  const [selectedLessonInfo, setSelectedLessonInfo] = useState<{ lesson: Lesson; subjectName: string; isLocked: boolean; isYearLocked: boolean } | null>(null);

  if (!currentCurriculum) return null;

  const isCurrentYearLocked = currentYear > unlockedYear;

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 pb-24 md:pb-12 space-y-12">
      
      {/* Year Banner con Progreso Global */}
      <div className="liquid-glass-card rounded-3xl p-8 shadow-2xl relative overflow-hidden border border-slate-700/80">
        <div className="absolute top-0 right-0 translate-x-6 -translate-y-6 w-36 h-36 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-black uppercase tracking-widest shadow-sm">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Plan de estudios IPET 66</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white">{currentCurriculum.title}</h1>
              <p className="text-sm text-slate-300 font-bold">{currentCurriculum.subtitle}</p>
            </div>
            
            {!isCurrentYearLocked && (
              <div className="liquid-glass-emerald rounded-2xl p-3 px-4 border border-emerald-400/40 text-center shadow-lg">
                <div className="text-3xl font-black text-white">
                  {completedLessons.filter(l => currentCurriculum.subjects.some(s => s.lessons.some(les => les.id === l))).length}
                  <span className="text-lg text-emerald-300">/{currentCurriculum.subjects.length * 5}</span>
                </div>
                <div className="text-[10px] font-black text-emerald-300 uppercase tracking-widest">Niveles superados</div>
              </div>
            )}
          </div>

          {/* Progress Bar Global */}
          {!isCurrentYearLocked && (
            <div className="space-y-1">
              <div className="h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800 shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full transition-all duration-700 shadow-md"
                  style={{ 
                    width: `${((completedLessons.filter(l => currentCurriculum.subjects.some(s => s.lessons.some(les => les.id === l))).length) / (currentCurriculum.subjects.length * 5)) * 100}%` 
                  }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-black text-slate-400 uppercase tracking-widest">
                <span>{currentCurriculum.subjects.filter(s => s.lessons.every(l => completedLessons.includes(l.id))).length} / {currentCurriculum.subjects.length} Materias dominadas</span>
                <span className="inline-flex items-center gap-1"><Crown className="w-3.5 h-3.5 text-amber-400" /> {Math.round((completedLessons.filter(l => currentCurriculum.subjects.some(s => s.lessons.some(les => les.id === l))).length / (currentCurriculum.subjects.length * 5)) * 100)}%</span>
              </div>
            </div>
          )}

          {isCurrentYearLocked && (
            <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-500/40 text-rose-300 px-4 py-2 rounded-2xl text-xs font-black shadow-md">
              <Lock className="w-4 h-4" />
              <span>Año bloqueado. Aprueba las materias del año anterior para acceder.</span>
            </div>
          )}
        </div>
      </div>

      {/* Unlock All Banner (If locked) */}
      {isCurrentYearLocked && (
        <div className="bg-slate-800/90 liquid-glass rounded-3xl p-6 border border-amber-500/40 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-2xl shrink-0">
              🔓
            </div>
            <div>
              <div className="font-black text-base text-white">¿Eres estudiante de este año o examen libre?</div>
              <div className="text-xs text-slate-300">Desbloquea instantáneamente todos los años de la currícula.</div>
            </div>
          </div>
          <button
            onClick={() => {
              soundEffects.playVictory();
              onUnlockAllYears();
            }}
            className="btn-3d-yellow text-slate-950 font-black px-6 py-3 rounded-2xl text-xs uppercase tracking-wider shrink-0"
          >
            Activar pase libre
          </button>
        </div>
      )}

      {/* Subject Units (Each with exactly 5 levels) */}
      {currentCurriculum.subjects.map((unit: SubjectUnit, unitIndex: number) => {
        const Icon = getSubjectIcon(unit.iconName);

        return (
          <div key={unit.id} className={`space-y-6 transition-opacity ${isCurrentYearLocked ? 'opacity-50 pointer-events-none' : ''}`}>
            
            {/* Unit Header Banner with Progress */}
            <div className={`rounded-3xl bg-gradient-to-r ${unit.color} p-6 text-white shadow-2xl relative overflow-hidden flex items-center justify-between gap-4 border border-white/20 backdrop-blur-md`}>
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-black/15 skew-x-12 pointer-events-none" />
              <div className="z-10 space-y-2 flex-1">
                <div className="text-xs font-black uppercase tracking-widest text-white/90 flex items-center gap-1.5">
                  <span>Módulo {unitIndex + 1}</span>
                  <span>•</span>
                  <span>5 niveles</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">{unit.name}</h2>
                <p className="text-xs sm:text-sm font-bold text-white/90 max-w-md line-clamp-2">{unit.description}</p>
                
                {/* Progress Bar per Subject */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex-1 h-2.5 bg-black/30 rounded-full overflow-hidden border border-white/20">
                    <div
                      className="h-full bg-white rounded-full transition-all duration-500 shadow-lg"
                      style={{ width: `${(unit.lessons.filter(l => completedLessons.includes(l.id)).length / 5) * 100}%` }}
                    />
                  </div>
                  <div className="text-xs font-black text-white/95 shrink-0">
                    <span className="inline-flex items-center gap-1">{unit.lessons.filter(l => completedLessons.includes(l.id)).length} / 5 <Crown className="w-3.5 h-3.5" /></span>
                  </div>
                </div>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-black/20 backdrop-blur-md flex items-center justify-center text-3xl z-10 shrink-0 shadow-inner border border-white/20">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* 5 Stepping Stones Path */}
            <div className="relative py-8 flex flex-col items-center gap-14">
              
              {/* Connecting vertical trunk line */}
              <div className="absolute top-0 bottom-0 w-4 bg-slate-800/80 border-x border-slate-700/80 rounded-full -z-10 shadow-inner" />

              {unit.lessons.map((lesson: Lesson, lessonIndex: number) => {
                const isCompleted = completedLessons.includes(lesson.id);
                // In this model, unlock the first lesson or if previous is completed
                const prevLesson = unit.lessons[lessonIndex - 1];
                const isLevelLocked = lessonIndex > 0 && !completedLessons.includes(prevLesson.id);

                // Zigzag offset
                const offsetClass = lessonIndex % 2 === 0 ? '-translate-x-14 sm:-translate-x-20' : 'translate-x-14 sm:translate-x-20';

                return (
                  <div key={lesson.id} className={`relative flex flex-col items-center ${offsetClass}`}>
                    
                    {/* Shadow / Glow Base */}
                    <div className={`absolute -inset-3 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity ${
                      isCompleted ? 'bg-emerald-500' : isLevelLocked ? 'bg-slate-700' : 'bg-amber-500'
                    }`} />

                    {/* 3D Circular Button */}
                    <button
                      disabled={isCurrentYearLocked}
                      onClick={() => {
                        soundEffects.playClick();
                        setSelectedLessonInfo({ lesson, subjectName: unit.name, isLocked: isLevelLocked, isYearLocked: isCurrentYearLocked });
                      }}
                      className={`relative group focus:outline-none transition-transform duration-100 active:scale-95`}
                    >
                      <div className={`w-22 h-22 sm:w-24 sm:h-24 rounded-full flex items-center justify-center border-[5px] transition-all shadow-2xl relative z-10 ${
                        isCompleted
                          ? 'bg-[#58cc02] border-[#58a700] text-white shadow-emerald-500/30'
                          : isLevelLocked
                          ? 'bg-slate-800 border-slate-700 text-slate-500 shadow-slate-900/50 opacity-80 cursor-not-allowed'
                          : 'bg-[#ffc800] border-[#cc9f00] text-slate-950 shadow-amber-500/30 animate-bounce-subtle'
                      }`}>
                        {isCompleted ? (
                          <Check className="w-10 h-10 font-black stroke-[3.5]" />
                        ) : isLevelLocked ? (
                          <Lock className="w-8 h-8 stroke-[2.5]" />
                        ) : (
                          <Star className="w-10 h-10 fill-slate-950 text-slate-950" />
                        )}
                      </div>

                      {/* Crown / Star Badge */}
                      {isCompleted && (
                        <div className="absolute -top-2 -right-2 w-9 h-9 bg-amber-400 rounded-full border-2 border-slate-950 flex items-center justify-center text-sm font-black text-slate-950 shadow-lg z-20">
                          <Crown className="w-5 h-5 fill-slate-950 text-slate-950" />
                        </div>
                      )}
                    </button>

                    {/* Level Label */}
                    <div className="mt-3 text-center bg-slate-900/95 liquid-glass border border-slate-700/80 px-3.5 py-1.5 rounded-2xl shadow-xl max-w-[180px] sm:max-w-[220px]">
                      <div className="text-xs font-black text-white truncate">Nivel {lesson.level}: {lesson.title}</div>
                      <div className="text-[10px] text-emerald-400 font-extrabold">+{lesson.xp} XP</div>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        );
      })}

      {/* Lesson Details Modal / Popover */}
      {selectedLessonInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 liquid-glass border border-slate-700/80 rounded-3xl max-w-sm w-full p-6 text-center space-y-6 shadow-2xl relative">
            
            <div className="w-18 h-18 rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white mx-auto shadow-lg shadow-emerald-500/30 border border-emerald-400/40">
              <Star className="w-9 h-9 fill-slate-950 text-slate-950" />
            </div>

            <div>
              <div className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-1">
                {selectedLessonInfo.subjectName} • Nivel {selectedLessonInfo.lesson.level}
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                {selectedLessonInfo.lesson.title}
              </h3>
              <p className="text-sm text-slate-300 font-medium">
                {selectedLessonInfo.lesson.description}
              </p>
            </div>

            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/80 flex items-center justify-between shadow-inner">
              <span className="text-xs font-black text-slate-400 uppercase">Recompensa estimada</span>
              <span className="text-sm font-black text-amber-400 flex items-center gap-1">
                <Gem className="w-4 h-4 fill-amber-400 text-amber-400" /> +15 | <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> +{selectedLessonInfo.lesson.xp} XP
              </span>
            </div>

            {selectedLessonInfo.isLocked && (
              <div className="bg-rose-500/20 border border-rose-500/40 rounded-2xl p-3 text-xs text-rose-300 font-black flex items-center justify-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Nivel bloqueado. Completa el nivel anterior para desbloquear.</span>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setSelectedLessonInfo(null);
                }}
                className="w-1/2 btn-3d-gray text-slate-200 font-black py-3 rounded-2xl text-sm uppercase tracking-wider"
              >
                Cerrar
              </button>
              
              <button
                onClick={() => {
                  soundEffects.playClick();
                  if (!selectedLessonInfo.isLocked && !selectedLessonInfo.isYearLocked) {
                    onStartLesson(selectedLessonInfo.lesson, selectedLessonInfo.subjectName);
                    setSelectedLessonInfo(null);
                  }
                }}
                disabled={selectedLessonInfo.isLocked || selectedLessonInfo.isYearLocked}
                className={`w-1/2 font-black py-3 rounded-2xl text-sm uppercase tracking-wider flex items-center justify-center gap-1.5 ${
                  selectedLessonInfo.isLocked || selectedLessonInfo.isYearLocked
                    ? 'bg-slate-800 text-slate-600 cursor-not-allowed border-none'
                    : 'btn-3d-green text-white shadow-lg shadow-emerald-500/30'
                }`}
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Iniciar</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
