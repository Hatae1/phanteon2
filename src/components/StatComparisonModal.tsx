import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Swords, Crown, Shield, BookOpen, Sparkles, Flame, Award, Trophy, Star } from 'lucide-react';
import { MythologicalCharacter } from '../types';
import { allCharacters } from '../data/characters';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface StatComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCharacterA?: MythologicalCharacter;
  initialCharacterB?: MythologicalCharacter;
}

export const StatComparisonModal: React.FC<StatComparisonModalProps> = ({
  isOpen,
  onClose,
  initialCharacterA,
  initialCharacterB,
}) => {
  const { language, getCharName, t } = useLanguage();
  const [charAId, setCharAId] = useState<string>(initialCharacterA?.id || allCharacters[0].id);
  const [charBId, setCharBId] = useState<string>(
    initialCharacterB?.id || allCharacters[1].id
  );
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResult, setSimulationResult] = useState<string | null>(null);

  if (!isOpen) return null;

  const charA = allCharacters.find(c => c.id === charAId) || allCharacters[0];
  const charB = allCharacters.find(c => c.id === charBId) || allCharacters[1];

  const nameA = getCharName(charA);
  const nameB = getCharName(charB);
  const titleA = language === 'en' ? (charA.titleEn || charA.title) : charA.title;
  const titleB = language === 'en' ? (charB.titleEn || charB.title) : charB.title;

  const statMetrics = [
    { key: 'power', label: t.statPower, icon: Flame, color: 'text-red-400' },
    { key: 'defense', label: t.statDefense, icon: Shield, color: 'text-blue-400' },
    { key: 'wisdom', label: t.statWisdom, icon: BookOpen, color: 'text-purple-400' },
    { key: 'agility', label: t.statAgility, icon: Sparkles, color: 'text-emerald-400' },
    { key: 'authority', label: t.statAuthority, icon: Crown, color: 'text-amber-400' },
    { key: 'leadership', label: t.statLeadership, icon: Award, color: 'text-pink-400' },
  ] as const;

  const totalScoreA = Object.values(charA.stats).reduce((a, b) => a + b, 0);
  const totalScoreB = Object.values(charB.stats).reduce((a, b) => a + b, 0);

  const handleSimulateBattle = () => {
    setIsSimulating(true);
    setSimulationResult(null);
    soundFx.playThunder();

    setTimeout(() => {
      let winnerText = '';
      if (totalScoreA > totalScoreB) {
        if (language === 'en') {
          winnerText = `Victory for [${nameA}]! The divine authority and total power (${totalScoreA}) of ${titleA} overwhelmed ${nameB} (${totalScoreB})!`;
        } else {
          winnerText = `[${charA.nameKo}]의 승리! ${charA.title}의 신화적 권능과 총합 능력치(${totalScoreA}점)가 ${charB.nameKo}(${totalScoreB}점)의 방어선을 압도했습니다.`;
        }
      } else if (totalScoreB > totalScoreA) {
        if (language === 'en') {
          winnerText = `Victory for [${nameB}]! The fierce fury and total power (${totalScoreB}) of ${titleB} defeated ${nameA} (${totalScoreA})!`;
        } else {
          winnerText = `[${charB.nameKo}]의 승리! ${charB.title}의 맹렬한 기세와 총합 능력치(${totalScoreB}점)가 ${charA.nameKo}(${totalScoreA}점)를 꺾고 승리를 거두었습니다.`;
        }
      } else {
        if (language === 'en') {
          winnerText = `Draw! The supreme powers of both figures collided with equal might, shaking Olympus to its core.`;
        } else {
          winnerText = `무승부! 두 신의 권능이 한 치의 양보도 없이 팽팽하게 맞서 천지가 진동하는 무승부를 기록했습니다.`;
        }
      }
      setSimulationResult(winnerText);
      setIsSimulating(false);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
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
          className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border-2 border-amber-500/50 bg-slate-950 p-4 sm:p-6 shadow-[0_0_50px_rgba(245,158,11,0.3)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
            <div className="flex items-center gap-2">
              <Swords className="h-6 w-6 text-amber-400" />
              <h3 className="text-lg font-bold text-white font-serif">{t.compareModalTitle}</h3>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto py-4 space-y-6">
            {/* Top Selector Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Fighter A */}
              <div className="rounded-xl border border-amber-500/30 bg-slate-900/80 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">{t.compareFighter1}</span>
                  <select
                    value={charAId}
                    onChange={e => {
                      soundFx.playClick();
                      setCharAId(e.target.value);
                      setSimulationResult(null);
                    }}
                    className="rounded bg-slate-950 border border-amber-500/30 px-2 py-1 text-xs text-white cursor-pointer"
                  >
                    {allCharacters.map(c => (
                      <option key={c.id} value={c.id}>
                        {getCharName(c)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={charA.avatarUrl}
                    alt={nameA}
                    referrerPolicy="no-referrer"
                    className="h-16 w-14 rounded-lg object-cover border border-amber-400"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-white">{nameA}</h4>
                      <div className="flex items-center gap-0.5 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/30">
                        <Star size={10} className="fill-amber-400 text-amber-400" />
                        <span className="text-[10px] font-bold text-amber-300">{charA.starRating}★</span>
                      </div>
                    </div>
                    <p className="text-xs text-amber-300">{titleA}</p>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {t.compareTotalStats(totalScoreA)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Fighter B */}
              <div className="rounded-xl border border-cyan-500/30 bg-slate-900/80 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400">{t.compareFighter2}</span>
                  <select
                    value={charBId}
                    onChange={e => {
                      soundFx.playClick();
                      setCharBId(e.target.value);
                      setSimulationResult(null);
                    }}
                    className="rounded bg-slate-950 border border-cyan-500/30 px-2 py-1 text-xs text-white cursor-pointer"
                  >
                    {allCharacters.map(c => (
                      <option key={c.id} value={c.id}>
                        {getCharName(c)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={charB.avatarUrl}
                    alt={nameB}
                    referrerPolicy="no-referrer"
                    className="h-16 w-14 rounded-lg object-cover border border-cyan-400"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-white">{nameB}</h4>
                      <div className="flex items-center gap-0.5 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/30">
                        <Star size={10} className="fill-cyan-400 text-cyan-400" />
                        <span className="text-[10px] font-bold text-cyan-300">{charB.starRating}★</span>
                      </div>
                    </div>
                    <p className="text-xs text-cyan-300">{titleB}</p>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {t.compareTotalStats(totalScoreB)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Metric Comparisons */}
            <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">
                {t.compareStatBreakdown}
              </h4>

              <div className="space-y-3 pt-2">
                {statMetrics.map(stat => {
                  const valA = charA.stats[stat.key];
                  const valB = charB.stats[stat.key];
                  const diff = valA - valB;

                  return (
                    <div key={stat.key} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className={`font-bold ${diff > 0 ? 'text-amber-400' : 'text-slate-400'}`}>
                          {valA}
                        </span>
                        <span className="text-slate-300 flex items-center gap-1">
                          <stat.icon size={13} className={stat.color} /> {stat.label}
                        </span>
                        <span className={`font-bold ${diff < 0 ? 'text-cyan-400' : 'text-slate-400'}`}>
                          {valB}
                        </span>
                      </div>

                      {/* Opposing Progress Bar */}
                      <div className="grid grid-cols-2 gap-1 h-2 rounded-full overflow-hidden bg-slate-800">
                        {/* Left Side (Char A) */}
                        <div className="flex justify-end">
                          <div
                            className="h-full rounded-l-full bg-amber-500"
                            style={{ width: `${valA}%` }}
                          />
                        </div>
                        {/* Right Side (Char B) */}
                        <div className="flex justify-start">
                          <div
                            className="h-full rounded-r-full bg-cyan-400"
                            style={{ width: `${valB}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Battle Simulation Action */}
            <div className="text-center space-y-3">
              <button
                id="btn-simulate-battle"
                disabled={isSimulating}
                onClick={handleSimulateBattle}
                className="rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-6 py-2.5 text-xs sm:text-sm font-extrabold text-slate-950 shadow-lg transition hover:scale-105 cursor-pointer disabled:opacity-50"
              >
                {isSimulating ? t.compareSimulating : t.compareBtnSimulate}
              </button>

              {simulationResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-xs sm:text-sm text-amber-200 font-medium leading-relaxed"
                >
                  <Trophy className="mx-auto mb-1.5 h-6 w-6 text-amber-400" />
                  {simulationResult}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

