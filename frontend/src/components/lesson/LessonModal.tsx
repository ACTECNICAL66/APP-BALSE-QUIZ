import React, { useState, useEffect } from 'react';
import { X, Heart, Check, AlertTriangle, ArrowRight, Sparkles, Zap, Award, Flame } from 'lucide-react';
import { Lesson, Question, MASCOT_INFO } from '../../data/curriculumData';
import { soundEffects } from '../../utils/sound';
import { triggerConfetti } from '../../utils/confetti';

interface LessonModalProps {
  lesson: Lesson | null;
  subjectName: string;
  hearts: number;
  comboStreak: number;
  hasStreakFreeze: boolean;
  onClose: () => void;
  onCompleteLesson: (xp: number, passed: boolean, finalCombo: number) => void;
  onLoseHeart: () => void;
  onRefillHearts: () => void;
  onConsumeFreeze: () => void;
}

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  subjectName,
  hearts,
  comboStreak,
  hasStreakFreeze,
  onClose,
  onCompleteLesson,
  onLoseHeart,
  onRefillHearts,
  onConsumeFreeze
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | boolean | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<{ left: string; right: string }[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [showNoHeartsModal, setShowNoHeartsModal] = useState(false);
  const [isLessonFinished, setIsLessonFinished] = useState(false);

  // Live combo streak tracking inside lesson
  const [liveCombo, setLiveCombo] = useState<number>(comboStreak);
  const [xpBonus, setXpBonus] = useState<number>(0);

  useEffect(() => {
    if (lesson) {
      setCurrentIndex(0);
      setSelectedOption(null);
      setMatchedPairs([]);
      setSelectedLeft(null);
      setSelectedRight(null);
      setIsChecked(false);
      setIsCorrect(false);
      setIsLessonFinished(false);
      setLiveCombo(comboStreak);
      setXpBonus(0);
    }
  }, [lesson, comboStreak]);

  if (!lesson) return null;

  const currentQuestion: Question = lesson.questions[currentIndex];
  const progressPercent = ((currentIndex) / lesson.questions.length) * 100;

  const handleCheck = () => {
    if (isChecked) {
      // Proceed to next question or finish
      if (currentIndex + 1 < lesson.questions.length) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedOption(null);
        setMatchedPairs([]);
        setSelectedLeft(null);
        setSelectedRight(null);
        setIsChecked(false);
        setIsCorrect(false);
      } else {
        // Finish lesson
        soundEffects.playVictory();
        triggerConfetti();
        setIsLessonFinished(true);
      }
      return;
    }

    // Verify correct answer
    let correct = false;

    if (currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'fill-blanks') {
      correct = selectedOption === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === 'true-false') {
      correct = selectedOption === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === 'match-pairs') {
      correct = matchedPairs.length === (currentQuestion.pairs?.length || 0);
    }

    setIsCorrect(correct);
    setIsChecked(true);

    if (correct) {
      soundEffects.playCorrect();
      setLiveCombo((prev) => {
        const nextCombo = prev + 1;
        // Add bonus XP for streaks
        if (nextCombo >= 3) {
          setXpBonus((b) => b + 5);
        }
        return nextCombo;
      });
    } else {
      soundEffects.playIncorrect();
      // Handle freeze shield
      if (hasStreakFreeze) {
        alert("¡Escudo Anti-Fallo activado! Tu combo de aciertos se mantiene intacto.");
        onConsumeFreeze();
      } else {
        setLiveCombo(0); // Combo breaks
      }

      if (hearts > 1) {
        onLoseHeart();
      } else {
        onLoseHeart();
        setShowNoHeartsModal(true);
      }
    }
  };

  const handlePairSelection = (item: string, side: 'left' | 'right') => {
    if (side === 'left') {
      setSelectedLeft(item);
      if (selectedRight) {
        verifyPair(item, selectedRight);
      }
    } else {
      setSelectedRight(item);
      if (selectedLeft) {
        verifyPair(selectedLeft, item);
      }
    }
  };

  const verifyPair = (left: string, right: string) => {
    const validPair = currentQuestion.pairs?.find((p) => p.left === left && p.right === right);
    if (validPair) {
      soundEffects.playClick();
      setMatchedPairs((prev) => [...prev, { left, right }]);
      setSelectedLeft(null);
      setSelectedRight(null);
    } else {
      soundEffects.playIncorrect();
      setSelectedLeft(null);
      setSelectedRight(null);
    }
  };

  const isCheckDisabled = !isChecked && (
    (currentQuestion.type === 'multiple-choice' && selectedOption === null) ||
    (currentQuestion.type === 'fill-blanks' && selectedOption === null) ||
    (currentQuestion.type === 'true-false' && selectedOption === null) ||
    (currentQuestion.type === 'match-pairs' && matchedPairs.length < (currentQuestion.pairs?.length || 0))
  );

  const totalEarnedXp = lesson.xp + xpBonus;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col animate-in fade-in duration-200 overflow-hidden font-sans">
      
      {/* Top Header */}
      <header className="px-6 py-4 bg-slate-900/90 liquid-glass border-b border-slate-800 flex items-center justify-between gap-6 max-w-4xl mx-auto w-full shrink-0 shadow-lg">
        <button
          onClick={() => {
            soundEffects.playClick();
            setShowExitConfirm(true);
          }}
          className="p-2.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors shadow-inner"
          title="Salir de la actividad"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Progress bar */}
        <div className="flex-1 max-w-lg bg-slate-950 h-5 rounded-full overflow-hidden p-1 shadow-inner border border-slate-800">
          <div
            className="bg-[#58cc02] h-full rounded-full transition-all duration-300 shadow-md"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Live Combo Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/20 border border-orange-500/40 rounded-2xl font-black text-orange-400 text-sm shadow-md">
            <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-bounce-subtle" />
            <span>{liveCombo}</span>
          </div>

          {/* Hearts indicator */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-500/20 border border-rose-500/40 rounded-2xl font-black text-rose-400 text-sm shadow-md">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <span>{hearts}</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-6 py-8 max-w-3xl mx-auto w-full flex flex-col justify-between">
        
        {/* Finished Screen */}
        {isLessonFinished ? (
          <div className="my-auto text-center space-y-8 animate-in zoom-in-95 duration-300">
            <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-7xl shadow-2xl shadow-emerald-500/40 border border-emerald-300/40">
              👑
            </div>
            <div className="space-y-2">
              <div className="text-xs font-black text-emerald-400 uppercase tracking-widest">
                ¡Nivel {lesson.level} Superado con Éxito!
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                ¡Dominaste la lección de {subjectName}!
              </h2>
            </div>
            
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="bg-slate-900 liquid-glass border border-slate-700/80 rounded-3xl p-4 text-center shadow-xl">
                <div className="text-xs font-bold text-slate-400 uppercase mb-1">XP Total</div>
                <div className="text-2xl font-black text-amber-400 flex items-center justify-center gap-1">
                  <Award className="w-6 h-6" />
                  <span>+{totalEarnedXp}</span>
                </div>
              </div>

              <div className="bg-slate-900 liquid-glass border border-slate-700/80 rounded-3xl p-4 text-center shadow-xl">
                <div className="text-xs font-bold text-slate-400 uppercase mb-1">Combo</div>
                <div className="text-2xl font-black text-orange-400 flex items-center justify-center gap-1">
                  <Flame className="w-6 h-6 fill-orange-500 text-orange-500" />
                  <span>{liveCombo}</span>
                </div>
              </div>

              <div className="bg-slate-900 liquid-glass border border-slate-700/80 rounded-3xl p-4 text-center shadow-xl">
                <div className="text-xs font-bold text-slate-400 uppercase mb-1">Precisión</div>
                <div className="text-2xl font-black text-emerald-400">100%</div>
              </div>
            </div>

            <button
              onClick={() => onCompleteLesson(totalEarnedXp, true, liveCombo)}
              className="w-full max-w-sm mx-auto btn-3d-green text-white font-black py-4 rounded-2xl text-base uppercase tracking-wider shadow-2xl shadow-emerald-500/30 block"
            >
              Continuar
            </button>
          </div>
        ) : (
          /* Active Question */
          <div className="space-y-8 my-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 text-slate-300 text-xs font-black uppercase tracking-wider border border-slate-700 shadow-sm">
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Pregunta {currentIndex + 1} de {lesson.questions.length}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white leading-snug">
              {currentQuestion.question}
            </h2>

            {/* Multiple Choice & Fill in the Blanks */}
            {(currentQuestion.type === 'multiple-choice' || currentQuestion.type === 'fill-blanks') && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQuestion.options?.map((option) => {
                  const isSelected = selectedOption === option;
                  return (
                    <button
                      key={option}
                      disabled={isChecked}
                      onClick={() => {
                        soundEffects.playClick();
                        setSelectedOption(option);
                      }}
                      className={`p-5 rounded-2xl border-2 text-left font-black text-base transition-all flex items-center justify-between shadow-md ${
                        isSelected
                          ? 'bg-emerald-500/20 border-[#58cc02] text-emerald-300 shadow-lg shadow-emerald-500/10'
                          : 'bg-slate-900/80 border-slate-700/80 hover:border-slate-600 text-slate-200'
                      }`}
                    >
                      <span>{option}</span>
                      {isSelected && <Check className="w-5 h-5 text-emerald-400 shrink-0 stroke-[3]" />}
                    </button>
                  );
                })}
              </div>
            )}

            {/* True / False */}
            {currentQuestion.type === 'true-false' && (
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <button
                  disabled={isChecked}
                  onClick={() => {
                    soundEffects.playClick();
                    setSelectedOption(true);
                  }}
                  className={`p-6 rounded-2xl border-2 text-center font-black text-lg transition-all shadow-md ${
                    selectedOption === true
                      ? 'bg-emerald-500/20 border-[#58cc02] text-emerald-300 shadow-lg shadow-emerald-500/10'
                      : 'bg-slate-900/80 border-slate-700/80 hover:border-slate-600 text-slate-200'
                  }`}
                >
                  VERDADERO
                </button>
                <button
                  disabled={isChecked}
                  onClick={() => {
                    soundEffects.playClick();
                    setSelectedOption(false);
                  }}
                  className={`p-6 rounded-2xl border-2 text-center font-black text-lg transition-all shadow-md ${
                    selectedOption === false
                      ? 'bg-rose-500/20 border-[#ff4b4b] text-rose-300 shadow-lg shadow-rose-500/10'
                      : 'bg-slate-900/80 border-slate-700/80 hover:border-slate-600 text-slate-200'
                  }`}
                >
                  FALSO
                </button>
              </div>
            )}

            {/* Match Pairs */}
            {currentQuestion.type === 'match-pairs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Left side */}
                <div className="space-y-3">
                  <div className="text-xs font-black text-slate-400 uppercase tracking-wider px-2">Concepto / Pin</div>
                  {currentQuestion.pairs?.map((pair) => {
                    const isMatched = matchedPairs.some((p) => p.left === pair.left);
                    const isSelected = selectedLeft === pair.left;
                    return (
                      <button
                        key={pair.left}
                        disabled={isChecked || isMatched}
                        onClick={() => handlePairSelection(pair.left, 'left')}
                        className={`w-full p-4 rounded-2xl border-2 font-black text-sm text-left transition-all shadow-md ${
                          isMatched
                            ? 'bg-slate-950 border-emerald-500/50 text-emerald-400 opacity-40 cursor-default'
                            : isSelected
                            ? 'bg-emerald-500/20 border-[#58cc02] text-emerald-300'
                            : 'bg-slate-900/80 border-slate-700 hover:bg-slate-700 text-slate-200'
                        }`}
                      >
                        {pair.left} {isMatched && '✅'}
                      </button>
                    );
                  })}
                </div>

                {/* Right side */}
                <div className="space-y-3">
                  <div className="text-xs font-black text-slate-400 uppercase tracking-wider px-2">Definición / Función</div>
                  {currentQuestion.pairs?.map((pair) => {
                    const isMatched = matchedPairs.some((p) => p.right === pair.right);
                    const isSelected = selectedRight === pair.right;
                    return (
                      <button
                        key={pair.right}
                        disabled={isChecked || isMatched}
                        onClick={() => handlePairSelection(pair.right, 'right')}
                        className={`w-full p-4 rounded-2xl border-2 font-black text-sm text-left transition-all shadow-md ${
                          isMatched
                            ? 'bg-slate-950 border-emerald-500/50 text-emerald-400 opacity-40 cursor-default'
                            : isSelected
                            ? 'bg-emerald-500/20 border-[#58cc02] text-emerald-300'
                            : 'bg-slate-900/80 border-slate-700 hover:bg-slate-700 text-slate-200'
                        }`}
                      >
                        {pair.right} {isMatched && '✅'}
                      </button>
                    );
                  })}
                </div>

              </div>
            )}

          </div>
        )}

      </main>

      {/* Bottom Footer Action Bar */}
      {!isLessonFinished && (
        <footer className={`border-t p-6 shrink-0 transition-colors duration-150 shadow-2xl ${
          isChecked 
            ? isCorrect 
              ? 'bg-[#153a12] border-[#2e6d28]' 
              : 'bg-[#4b1414] border-[#8a2525]'
            : 'bg-slate-900/90 liquid-glass border-slate-800'
        }`}>
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Feedback Message */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
              {isChecked ? (
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-lg ${
                    isCorrect ? 'bg-[#58cc02] text-slate-950' : 'bg-[#ff4b4b] text-white'
                  }`}>
                    {MASCOT_INFO.avatar}
                  </div>
                  <div>
                    <div className={`font-black text-xl ${isCorrect ? 'text-emerald-300' : 'text-rose-300'}`}>
                      {isCorrect ? '¡Correcto! Combo +1 🔥' : 'Respuesta incorrecta'}
                    </div>
                    <p className="text-xs text-slate-200 font-bold max-w-md mt-1 leading-relaxed">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-sm font-black text-slate-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Elige la opción correcta para verificar tu conocimiento.</span>
                </div>
              )}
            </div>

            {/* Check / Next Button */}
            <button
              disabled={isCheckDisabled}
              onClick={handleCheck}
              className={`w-full sm:w-auto font-black px-10 py-4 rounded-2xl text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                isChecked
                  ? isCorrect
                    ? 'btn-3d-green text-white shadow-xl shadow-emerald-500/30'
                    : 'btn-3d-red text-white shadow-xl shadow-rose-500/30'
                  : isCheckDisabled
                  ? 'bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed'
                  : 'btn-3d-blue text-white shadow-xl shadow-blue-500/30'
              }`}
            >
              <span>{isChecked ? 'Continuar' : 'Comprobar'}</span>
              <ArrowRight className="w-5 h-5 font-black" />
            </button>

          </div>
        </footer>
      )}

      {/* Exit Confirm Modal */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 liquid-glass border border-slate-700/80 rounded-3xl max-w-sm w-full p-6 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto border border-rose-500/40">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-2">¿Seguro que quieres salir?</h3>
              <p className="text-sm text-slate-300">Si sales ahora, perderás todo el progreso de este nivel y tu medidor de combo de aciertos regresará a cero.</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowExitConfirm(false)}
                className="w-1/2 btn-3d-gray text-slate-200 font-black py-3 rounded-2xl text-xs uppercase tracking-wider"
              >
                Quedarme
              </button>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onClose();
                }}
                className="w-1/2 btn-3d-red text-white font-black py-3 rounded-2xl text-xs uppercase tracking-wider"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* No Hearts Modal */}
      {showNoHeartsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 liquid-glass border border-slate-700/80 rounded-3xl max-w-sm w-full p-6 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-[#ff4b4b] flex items-center justify-center text-white mx-auto text-4xl shadow-lg shadow-rose-500/40 animate-pulse border border-rose-400/40">
              💔
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-2">¡Te quedaste sin corazones!</h3>
              <p className="text-sm text-slate-300">
                En IPET 66 la seguridad es primero. Puedes recargar tus corazones en la tienda usando tus tuercas doradas.
              </p>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => {
                  soundEffects.playVictory();
                  onRefillHearts();
                  setShowNoHeartsModal(false);
                }}
                className="w-full btn-3d-green text-white font-black py-4 rounded-2xl text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/30"
              >
                Recargar 5 ❤️ con Tuercas
              </button>
              <button
                onClick={() => {
                  soundEffects.playClick();
                  onClose();
                }}
                className="w-full btn-3d-gray text-slate-300 font-black py-3 rounded-2xl text-xs uppercase tracking-wider"
              >
                Volver al menú
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
