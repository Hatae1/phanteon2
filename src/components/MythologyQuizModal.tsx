import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, HelpCircle, Award, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';
import { QUIZ_QUESTIONS_KO, QUIZ_QUESTIONS_EN } from '../data/translations';

interface MythologyQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MythologyQuizModal: React.FC<MythologyQuizModalProps> = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const questions = language === 'en' ? QUIZ_QUESTIONS_EN : QUIZ_QUESTIONS_KO;
  const currentQ = questions[currentIndex] || questions[0];

  const handleSelectOption = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);

    if (index === currentQ.correctIndex) {
      setScore(prev => prev + 1);
      soundFx.playSelect();
    } else {
      soundFx.playClick();
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      soundFx.playClick();
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
      soundFx.playSelect();
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
    soundFx.playClick();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border-2 border-purple-500/50 bg-slate-950 p-5 sm:p-6 shadow-[0_0_50px_rgba(168,85,247,0.3)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-purple-400" />
              <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                {t.quizTitle}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-800 hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="py-4 space-y-4">
            {!isFinished ? (
              <>
                {/* Progress Bar */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{t.quizQuestionProgress(currentIndex + 1, questions.length)}</span>
                  <span className="text-purple-300 font-bold">{t.quizCurrentScore(score)}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                  />
                </div>

                {/* Question Box */}
                <div className="rounded-xl border border-purple-500/20 bg-slate-900/80 p-4">
                  <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {currentQ.question}
                  </h4>
                </div>

                {/* Options */}
                <div className="space-y-2">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === currentQ.correctIndex;
                    const isAnswered = selectedAnswer !== null;

                    let btnStyle = 'border-slate-800 bg-slate-900/80 text-slate-200 hover:border-purple-400';
                    if (isAnswered) {
                      if (isCorrect) {
                        btnStyle = 'border-emerald-500 bg-emerald-950/40 text-emerald-200 font-bold';
                      } else if (isSelected) {
                        btnStyle = 'border-red-500 bg-red-950/40 text-red-200';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        disabled={isAnswered}
                        onClick={() => handleSelectOption(idx)}
                        className={`w-full text-left rounded-xl border p-3 text-xs sm:text-sm font-medium transition flex items-center justify-between cursor-pointer disabled:cursor-default ${btnStyle}`}
                      >
                        <span>{idx + 1}. {opt}</span>
                        {isAnswered && isCorrect && <CheckCircle2 size={16} className="text-emerald-400" />}
                        {isAnswered && isSelected && !isCorrect && <XCircle size={16} className="text-red-400" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {selectedAnswer !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-3 text-xs text-purple-200 leading-relaxed"
                  >
                    <span className="font-bold text-purple-300">{t.quizExplanationPrefix}</span>
                    {currentQ.explanation}
                  </motion.div>
                )}

                {/* Next Button */}
                {selectedAnswer !== null && (
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleNext}
                      className="rounded-xl bg-purple-600 px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-purple-500 transition cursor-pointer"
                    >
                      {currentIndex < questions.length - 1 ? t.quizBtnNext : t.quizBtnResult}
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* Quiz Finished Screen */
              <div className="text-center py-6 space-y-4">
                <div className="flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-purple-600/20 flex items-center justify-center ring-2 ring-purple-400">
                    <Award className="h-10 w-10 text-purple-300" />
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white font-serif">{t.quizCompletedTitle}</h4>
                  <p className="text-sm text-purple-300 mt-1">
                    {t.quizScoreSummary(questions.length, score)}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-900 p-4 border border-purple-500/30 text-xs text-slate-300 leading-relaxed">
                  {score === 5
                    ? t.quizPerfect
                    : score >= 3
                    ? t.quizGood
                    : t.quizTryAgain}
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleRestart}
                    className="flex items-center gap-1.5 rounded-xl border border-purple-500/40 bg-slate-900 px-4 py-2 text-xs font-bold text-purple-200 hover:bg-purple-900/40 cursor-pointer"
                  >
                    <RotateCcw size={14} /> {t.quizBtnRetry}
                  </button>
                  <button
                    onClick={onClose}
                    className="rounded-xl bg-purple-600 px-5 py-2 text-xs font-bold text-white hover:bg-purple-500 cursor-pointer"
                  >
                    {t.quizBtnBack}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

