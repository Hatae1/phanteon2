import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Network, Crown, ArrowDown, ChevronRight, Flame, Baby, Heart, Shield, Sparkles } from 'lucide-react';
import { MythologicalCharacter } from '../types';
import { getCharacterById } from '../data/characters';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface FamilyTreeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCharacter: (character: MythologicalCharacter) => void;
}

type TreeTab = 'all' | 'affairs' | 'zeus';

export const FamilyTreeModal: React.FC<FamilyTreeModalProps> = ({
  isOpen,
  onClose,
  onSelectCharacter,
}) => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<TreeTab>('all');

  if (!isOpen) return null;

  const isEn = language === 'en';

  const renderGodChip = (
    id: string,
    customLabel?: string,
    badge?: string,
    badgeColor?: 'amber' | 'purple' | 'emerald' | 'cyan',
    customLabelEn?: string,
    badgeEn?: string
  ) => {
    const char = getCharacterById(id);
    const displayLabel = isEn ? (customLabelEn || char?.nameEn || id) : (customLabel || char?.nameKo || id);
    const displayBadge = isEn ? (badgeEn || badge) : badge;

    if (!char) {
      return (
        <div className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs sm:text-sm text-slate-200">
          <span className="font-semibold">{displayLabel}</span>
          {displayBadge && (
            <span className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded font-semibold">
              {displayBadge}
            </span>
          )}
        </div>
      );
    }

    const badgeClasses = {
      amber: 'bg-amber-500/25 text-amber-300 border-amber-500/40',
      purple: 'bg-purple-500/25 text-purple-300 border-purple-500/40',
      emerald: 'bg-emerald-500/25 text-emerald-300 border-emerald-500/40',
      cyan: 'bg-cyan-500/25 text-cyan-300 border-cyan-500/40',
    };

    return (
      <button
        key={id}
        onClick={() => {
          soundFx.playSelect();
          onClose();
          onSelectCharacter(char);
        }}
        className="group flex items-center gap-2.5 rounded-xl border border-amber-500/30 bg-slate-900/90 px-3.5 py-2 text-sm text-amber-200 transition hover:bg-amber-500/20 hover:border-amber-400 hover:scale-[1.03] cursor-pointer shadow-md"
      >
        <img
          src={char.avatarUrl}
          alt={isEn ? char.nameEn : char.nameKo}
          referrerPolicy="no-referrer"
          className="h-8 w-7 rounded-lg object-cover border border-amber-400/80 shrink-0"
        />
        <div className="text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-white text-sm leading-none group-hover:text-amber-200">
              {displayLabel}
            </span>
            {displayBadge && (
              <span className={`text-[10px] px-1.5 py-0.5 rounded border font-bold ${badgeColor ? badgeClasses[badgeColor] : 'bg-slate-800 text-slate-300'}`}>
                {displayBadge}
              </span>
            )}
          </div>
          <div className="text-xs text-amber-300/90 font-medium mt-0.5">
            {isEn ? char.romanNameEn : char.romanNameKo.split(' ')[0]}
          </div>
        </div>
        <ChevronRight size={15} className="text-amber-400/80 ml-auto shrink-0 group-hover:translate-x-0.5 transition" />
      </button>
    );
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
          className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border-2 border-cyan-500/50 bg-slate-950 p-4 sm:p-6 shadow-[0_0_50px_rgba(6,182,212,0.3)]"
        >
          {/* Header */}
          <div className="shrink-0 flex flex-col sm:flex-row sm:items-center justify-between border-b border-cyan-500/20 pb-3 gap-2">
            <div className="flex items-center gap-2">
              <Network className="h-6 w-6 text-cyan-400 shrink-0" />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                  {t.lineageModalTitle}
                </h3>
                <p className="text-[11px] text-slate-400">
                  {t.lineageModalSubtitle}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="self-end sm:self-auto rounded-full p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tab Filter Switcher */}
          <div className="shrink-0 flex items-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 border-b border-slate-800/80 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition cursor-pointer shrink-0 ${
                activeTab === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Crown size={13} />
              <span className="sm:hidden">{isEn ? 'All Lineage' : '전체 계보'}</span>
              <span className="hidden sm:inline">{t.lineageTabAll}</span>
            </button>

            <button
              onClick={() => setActiveTab('affairs')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition cursor-pointer shrink-0 ${
                activeTab === 'affairs'
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-sm'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Flame size={13} className="text-purple-400" />
              <span className="sm:hidden">{isEn ? 'Affairs' : '외도 & 서자 계보'}</span>
              <span className="hidden sm:inline">{t.lineageTabAffairs}</span>
            </button>

            <button
              onClick={() => setActiveTab('zeus')}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition cursor-pointer shrink-0 ${
                activeTab === 'zeus'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Baby size={13} className="text-amber-400" />
              <span className="sm:hidden">{isEn ? 'Zeus Dynasty' : '제우스 자녀'}</span>
              <span className="hidden sm:inline">{t.lineageTabZeus}</span>
            </button>
          </div>

          {/* Tree Structure */}
          <div className="flex-1 min-h-0 overflow-y-auto py-4 space-y-6 pr-1">
            {/* TAB 1: ALL PANTHEON LINEAGE */}
            {activeTab === 'all' && (
              <div className="space-y-6">
                {/* Level 1: Primordial */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    {t.lineageProtogenoi}
                  </span>
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    <span className="rounded-lg bg-slate-800 px-3 py-1 text-xs text-slate-300 border border-slate-700">
                      {isEn ? 'Uranus (Sky)' : '우라노스 (하늘의 신)'}
                    </span>
                    <span className="text-slate-500 text-xs">×</span>
                    <span className="rounded-lg bg-slate-800 px-3 py-1 text-xs text-slate-300 border border-slate-700">
                      {isEn ? 'Gaia (Earth)' : '가이아 (대지의 여신)'}
                    </span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="text-amber-500/50" size={18} />
                </div>

                {/* Level 2: Titans */}
                <div className="rounded-xl border border-amber-500/20 bg-slate-900/80 p-4 text-center space-y-3">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                    {t.lineageTitans}
                  </span>
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    {renderGodChip('cronus', '크로노스 (시간/티탄의 왕)', undefined, undefined, 'Cronus (King of Titans)')}
                    <span className="text-amber-500 text-xs">×</span>
                    <span className="rounded-lg bg-slate-800 px-3 py-1 text-xs text-slate-300 border border-slate-700">
                      {isEn ? 'Rhea (Titan of Earth)' : '레아 (대지의 티탄)'}
                    </span>
                    <span className="text-slate-600">|</span>
                    {renderGodChip('prometheus', '프로메테우스', undefined, undefined, 'Prometheus')}
                    {renderGodChip('atlas', '아틀라스', undefined, undefined, 'Atlas')}
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="text-amber-500/50" size={18} />
                </div>

                {/* Level 3: 1st Gen Olympians */}
                <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 space-y-3">
                  <div className="text-center">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest flex items-center justify-center gap-1">
                      <Crown size={12} /> {t.lineageOlympiansGen1}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                    {renderGodChip('zeus', '제우스 (신들의 왕)', undefined, undefined, 'Zeus (King of Gods)')}
                    {renderGodChip('poseidon', '포세이돈 (바다)', undefined, undefined, 'Poseidon (Sea)')}
                    {renderGodChip('hades', '하데스 (명계)', undefined, undefined, 'Hades (Underworld)')}
                    {renderGodChip('hera', '헤라 (가정/여왕)', undefined, undefined, 'Hera (Queen of Gods)')}
                    {renderGodChip('demeter', '데메테르 (곡물)', undefined, undefined, 'Demeter (Harvest)')}
                    {renderGodChip('persephone', '페르세포네', undefined, undefined, 'Persephone')}
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="text-amber-500/50" size={18} />
                </div>

                {/* Level 4: 2nd Gen Olympians */}
                <div className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-4 space-y-3">
                  <div className="text-center">
                    <span className="text-[11px] font-bold text-purple-300 uppercase tracking-widest">
                      {t.lineageOlympiansGen2}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                    {renderGodChip('athena', '아테나', '메티스 소생', 'cyan', 'Athena', 'Born of Metis')}
                    {renderGodChip('apollo', '아폴론', '서자 (레토)', 'amber', 'Apollo', 'Son of Leto')}
                    {renderGodChip('artemis', '아르테미스', '서자 (레토)', 'amber', 'Artemis', 'Daughter of Leto')}
                    {renderGodChip('ares', '아레스', '정실 (헤라)', 'emerald', 'Ares', 'Legitimate (Hera)')}
                    {renderGodChip('aphrodite', '아프로디테', '원초 탄생', 'cyan', 'Aphrodite', 'Primordial Sea')}
                    {renderGodChip('hephaestus', '헤파이토스', '정실 (헤라)', 'emerald', 'Hephaestus', 'Legitimate (Hera)')}
                    {renderGodChip('hermes', '헤르메스', '서자 (마이아)', 'amber', 'Hermes', 'Son of Maia')}
                  </div>
                  <div className="flex justify-center pt-1 gap-2 flex-wrap">
                    {renderGodChip('dionysus', '디오니소스', '서자 (세멜레)', 'amber', 'Dionysus', 'Son of Semele')}
                    {renderGodChip('eros', '에로스', '아레스·아프로디테 불륜', 'purple', 'Eros', 'Ares & Aphrodite')}
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="text-amber-500/50" size={18} />
                </div>

                {/* Level 5: Heroes */}
                <div className="rounded-xl border border-cyan-500/30 bg-slate-900/80 p-4 space-y-3">
                  <div className="text-center">
                    <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-widest">
                      {t.lineageHeroesMonsters}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    {renderGodChip('heracles', '헤라클레스 (제우스 서자)', '반신/영웅', 'amber', 'Heracles', 'Demigod / Hero')}
                    {renderGodChip('perseus', '페르세우스 (제우스 서자)', '반신/영웅', 'amber', 'Perseus', 'Demigod / Hero')}
                    {renderGodChip('theseus', '테세우스 (포세이돈 서자)', '반신/영웅', 'amber', 'Theseus', 'Demigod / Hero')}
                    {renderGodChip('achilles', '아킬레우스 (테티스의 아들)', '반신/영웅', 'cyan', 'Achilles', 'Hero of Troy')}
                    {renderGodChip('odysseus', '오디세우스 (이타카 왕)', '영웅', 'cyan', 'Odysseus', 'King of Ithaca')}
                    {renderGodChip('medusa', '메두사 (포세이돈의 밀회 상대)', '고르고', 'purple', 'Medusa', 'Gorgon')}
                    {renderGodChip('cerberus', '케르베로스', '명계 괴수', 'cyan', 'Cerberus', 'Hound of Hades')}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: AFFAIRS & ILLEGITIMATE CHILDREN LINEAGE */}
            {activeTab === 'affairs' && (
              <div className="space-y-6">
                <div className="bg-purple-950/25 border border-purple-500/30 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
                    <Flame size={16} className="text-purple-400" />
                    <span>{t.lineageAffairsTitle}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {t.lineageAffairsDesc}
                  </p>
                </div>

                {/* 1. Zeus Affair Network */}
                <div className="rounded-xl border border-amber-500/30 bg-slate-900/90 p-4 space-y-4">
                  <div className="flex items-center justify-between border-b border-amber-500/20 pb-2">
                    <div className="flex items-center gap-2">
                      <Crown size={15} className="text-amber-400" />
                      <h4 className="font-bold text-sm text-amber-200">
                        {isEn ? '⚡ Zeus: Legitimate Offspring vs. Extramarital Affairs' : '⚡ 제우스(Zeus)의 정실 vs 불륜/외도 서자 계통'}
                      </h4>
                    </div>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                      {isEn ? 'King of Gods' : '최다 외도 신'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Legitimate branch */}
                    <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/15 p-3 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300">
                        <Heart size={13} /> {isEn ? 'Legitimate (Queen Hera)' : '정실(헤라 여신과의 혼인 소생)'}
                      </div>
                      <div className="text-xs text-slate-300">
                        {isEn ? 'Zeus × ' : '제우스 × '}
                        <span className="text-pink-300 font-semibold">{isEn ? 'Hera (Queen & Wife)' : '헤라 (정식 아내)'}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {renderGodChip('ares', '아레스 (전쟁의 신)', '정실', 'emerald', 'Ares (God of War)', 'Legitimate')}
                        {renderGodChip('hephaestus', '헤파이토스 (대장간)', '정실', 'emerald', 'Hephaestus (Forge)', 'Legitimate')}
                        <div className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 border border-slate-700">
                          {isEn ? 'Hebe (Youth)' : '헤베 (청춘의 여신)'}
                        </div>
                      </div>
                    </div>

                    {/* Affair Highlights */}
                    <div className="rounded-lg border border-purple-500/30 bg-purple-950/15 p-3 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-purple-300">
                        <Flame size={13} /> {isEn ? 'Famous Affairs & Disguises' : '대표적인 외도 상대 & 변신술'}
                      </div>
                      <ul className="text-xs text-slate-300 space-y-1.5">
                        {isEn ? (
                          <>
                            <li>• <span className="text-amber-300 font-semibold">Danaë:</span> Shower of golden rain ➔ <span className="text-cyan-300">Perseus</span> born</li>
                            <li>• <span className="text-amber-300 font-semibold">Alcmene:</span> Disguised as husband Amphitryon ➔ <span className="text-cyan-300">Heracles</span> born</li>
                            <li>• <span className="text-amber-300 font-semibold">Leto:</span> Fled as quail/wolf ➔ <span className="text-cyan-300">Apollo & Artemis</span> born</li>
                            <li>• <span className="text-amber-300 font-semibold">Semele:</span> Struck by lightning epiphany ➔ <span className="text-cyan-300">Dionysus</span> born</li>
                            <li>• <span className="text-amber-300 font-semibold">Europa:</span> Gentle white bull ➔ <span className="text-cyan-300">King Minos</span> born</li>
                            <li>• <span className="text-amber-300 font-semibold">Leda:</span> Radiant swan ➔ <span className="text-cyan-300">Helen & Pollux</span></li>
                          </>
                        ) : (
                          <>
                            <li>• <span className="text-amber-300 font-semibold">다나에:</span> 황금비로 변신하여 침투 ➔ <span className="text-cyan-300">페르세우스</span> 탄생</li>
                            <li>• <span className="text-amber-300 font-semibold">알크메네:</span> 남편 암피트리온으로 둔갑 ➔ <span className="text-cyan-300">헤라클레스</span> 탄생</li>
                            <li>• <span className="text-amber-300 font-semibold">레토:</span> 늑대/메추라기 밀회 ➔ <span className="text-cyan-300">아폴론 & 아르테미스</span> 탄생</li>
                            <li>• <span className="text-amber-300 font-semibold">세멜레:</span> 번개 본모습 노출 ➔ <span className="text-cyan-300">디오니소스</span> 탄생</li>
                            <li>• <span className="text-amber-300 font-semibold">에우로페:</span> 온순한 백색 황소로 유혹 ➔ <span className="text-cyan-300">미노스 왕</span> 탄생</li>
                            <li>• <span className="text-amber-300 font-semibold">레다:</span> 아름다운 백조로 변신 ➔ <span className="text-cyan-300">헬레네 & 폴리데우케스</span></li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Zeus Children Grid */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-bold text-amber-300">
                      {isEn ? 'Major Offspring of Zeus (Click to View):' : '외도로 탄생한 제우스의 주요 서자들 (Click to View):'}
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                      {renderGodChip('apollo', '아폴론', '서자 (레토 소생)', 'amber', 'Apollo', 'Son of Leto')}
                      {renderGodChip('artemis', '아르테미스', '서자 (레토 소생)', 'amber', 'Artemis', 'Daughter of Leto')}
                      {renderGodChip('hermes', '헤르메스', '서자 (마이아 소생)', 'amber', 'Hermes', 'Son of Maia')}
                      {renderGodChip('dionysus', '디오니소스', '서자 (세멜레 소생)', 'amber', 'Dionysus', 'Son of Semele')}
                      {renderGodChip('heracles', '헤라클레스', '서자 (알크메네 소생)', 'amber', 'Heracles', 'Son of Alcmene')}
                      {renderGodChip('perseus', '페르세우스', '서자 (다나에 소생)', 'amber', 'Perseus', 'Son of Danaë')}
                    </div>
                  </div>
                </div>

                {/* 2. Poseidon Affair Network */}
                <div className="rounded-xl border border-cyan-500/30 bg-slate-900/90 p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2">
                    <div className="flex items-center gap-2">
                      <Shield size={15} className="text-cyan-400" />
                      <h4 className="font-bold text-sm text-cyan-200">
                        {isEn ? '🔱 Poseidon: Consorts & Mythic Offspring' : '🔱 포세이돈(Poseidon)의 외도 & 서자 계통'}
                      </h4>
                    </div>
                    <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
                      {isEn ? 'God of the Sea' : '바다의 신'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="rounded-lg border border-slate-700 bg-slate-800/60 p-3 space-y-1.5">
                      <span className="text-xs font-bold text-pink-300">{isEn ? 'Wife Amphitrite' : '정실 암피트리테'}</span>
                      <p className="text-xs text-slate-300">
                        {isEn ? 'Formal marriage with Queen Amphitrite of the Seas' : '바다의 여왕 암피트리테와 정식 혼인'}
                      </p>
                      <div className="text-xs font-medium text-emerald-300 bg-emerald-950/30 px-2 py-1 rounded border border-emerald-500/20">
                        {isEn ? 'Child: Triton (Merman Prince)' : '자녀: 트리톤 (인어 왕자)'}
                      </div>
                    </div>

                    <div className="rounded-lg border border-purple-500/30 bg-purple-950/20 p-3 space-y-1.5">
                      <span className="text-xs font-bold text-purple-300">{isEn ? 'Liason with Medusa' : '메두사(고르고)와의 밀회'}</span>
                      <p className="text-xs text-slate-300">
                        {isEn ? 'Secret union in Athena’s temple, cursed into a Gorgon' : '아테나 신전에서의 비밀 결합으로 아테나의 저주를 받음'}
                      </p>
                      <div className="text-xs font-medium text-purple-300 bg-purple-900/30 px-2 py-1 rounded border border-purple-500/20">
                        {isEn ? 'Offspring: Pegasus & Chrysaor' : '자녀: 페가수스, 크리사오르'}
                      </div>
                    </div>

                    <div className="rounded-lg border border-amber-500/30 bg-amber-950/20 p-3 space-y-1.5">
                      <span className="text-xs font-bold text-amber-300">{isEn ? 'Union with Princess Aethra' : '아이트라 공주와의 결합'}</span>
                      <p className="text-xs text-slate-300">
                        {isEn ? 'Fathered the legendary hero who conquered the Minotaur' : '트로이젠 공주 아이트라와 동침하여 미노타우로스를 처단한 영웅 탄생'}
                      </p>
                      <div className="flex items-center gap-1.5 pt-1">
                        {renderGodChip('theseus', '테세우스', '신성 서자', 'amber', 'Theseus', 'Divine Demigod')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Ares & Aphrodite Affair Network */}
                <div className="rounded-xl border border-pink-500/30 bg-slate-900/90 p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-pink-500/20 pb-2">
                    <div className="flex items-center gap-2">
                      <Heart size={15} className="text-pink-400" />
                      <h4 className="font-bold text-sm text-pink-200">
                        {isEn ? '⚔️ Ares & Aphrodite: Olympus’ Greatest Scandal' : '⚔️ 아레스 & 아프로디테의 올림포스 최대 불륜 스캔들'}
                      </h4>
                    </div>
                    <span className="text-[10px] bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded border border-pink-500/30">
                      {isEn ? 'Forbidden Romance' : '금지된 사랑'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                      {isEn ? (
                        <>
                          <p>
                            Aphrodite was wedded to <span className="text-amber-300 font-semibold">Hephaestus</span>, yet the goddess maintained a passionate affair with <span className="text-red-300 font-semibold">Ares</span>, god of war.
                          </p>
                          <p>
                            Hephaestus crafted an invisible bronze net, trapped them in bed, and summoned all Olympians to witness their embarrassment.
                          </p>
                        </>
                      ) : (
                        <>
                          <p>
                            아프로디테의 정식 남편은 절름발이 대장장이 신 <span className="text-amber-300 font-semibold">헤파이토스</span>였으나, 아름다운 여신은 전쟁의 신 <span className="text-red-300 font-semibold">아레스</span>와 지속적인 밀회를 가졌습니다.
                          </p>
                          <p>
                            헤파이토스는 눈에 보이지 않는 청동 그물을 침대에 설치해 둘을 현장에서 포획하고 모든 올림포스 신들을 불러 공개 망신을 주었습니다.
                          </p>
                        </>
                      )}
                    </div>

                    <div className="rounded-lg border border-pink-500/20 bg-pink-950/20 p-3 space-y-2">
                      <span className="text-xs font-bold text-pink-300">
                        {isEn ? 'Children Born from their Love:' : '불륜으로 탄생한 자녀들:'}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {renderGodChip('eros', '에로스 (사랑의 신)', '불륜 자녀', 'purple', 'Eros (God of Love)', 'Offspring')}
                        <div className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 border border-slate-700">
                          {isEn ? 'Phobos (God of Fear)' : '포보스 (공포의 신)'}
                        </div>
                        <div className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 border border-slate-700">
                          {isEn ? 'Deimos (God of Dread)' : '데이모스 (패닉의 신)'}
                        </div>
                        <div className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 border border-slate-700">
                          {isEn ? 'Harmonia (Harmony)' : '하르모니아 (조화의 여신)'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: ZEUS DYNASTY SPECIFIC */}
            {activeTab === 'zeus' && (
              <div className="space-y-5">
                <div className="bg-amber-950/25 border border-amber-500/30 rounded-xl p-4 space-y-2 text-center">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    {isEn ? '⚡ The Comprehensive Zeus Dynasty' : '⚡ 제우스 대가계도 (The Comprehensive Zeus Dynasty)'}
                  </span>
                  <p className="text-xs text-slate-300 max-w-2xl mx-auto">
                    {isEn
                      ? 'Zeus bonded with goddesses, mortals, nymphs, and titans, siring over half of the Olympian 12 gods and numerous legendary heroes.'
                      : '제우스는 신과 인간, 님프와 티탄 등 수많은 상대와 인연을 맺어 그리스 신화의 올림포스 12신 중 절반 이상과 주요 영웅들을 탄생시켰습니다.'}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Mother & Children breakdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {/* Leto */}
                    <div className="rounded-xl border border-amber-500/20 bg-slate-900/80 p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-300">{isEn ? 'Leto (Titaness)' : '레토 (티탄)'}</span>
                        <span className="text-[10px] bg-purple-900/40 text-purple-300 px-1.5 py-0.2 rounded border border-purple-500/30">
                          {isEn ? 'Affair' : '외도'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {isEn ? 'Gave birth to divine twins on Delos island' : '헤라의 질투로 델로스 섬에서 쌍둥이 신 출산'}
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {renderGodChip('apollo', '아폴론 (태양/예술)', '서자', 'amber', 'Apollo (Sun & Prophecy)', 'Son')}
                        {renderGodChip('artemis', '아르테미스 (달/사냥)', '서자', 'amber', 'Artemis (Hunt & Moon)', 'Daughter')}
                      </div>
                    </div>

                    {/* Semele */}
                    <div className="rounded-xl border border-amber-500/20 bg-slate-900/80 p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-300">{isEn ? 'Semele (Theban Princess)' : '세멜레 (테베 공주)'}</span>
                        <span className="text-[10px] bg-purple-900/40 text-purple-300 px-1.5 py-0.2 rounded border border-purple-500/30">
                          {isEn ? 'Mortal Union' : '인간과의 외도'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {isEn ? 'Reborn from Zeus’s divine thigh into godhood' : '제우스 허벅지에서 다시 태어난 주신'}
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {renderGodChip('dionysus', '디오니소스 (포도주/축제)', '서자', 'amber', 'Dionysus (Wine & Festivity)', 'Son')}
                      </div>
                    </div>

                    {/* Maia */}
                    <div className="rounded-xl border border-amber-500/20 bg-slate-900/80 p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-300">{isEn ? 'Maia (Pleiades Nymph)' : '마이아 (플레이아데스)'}</span>
                        <span className="text-[10px] bg-purple-900/40 text-purple-300 px-1.5 py-0.2 rounded border border-purple-500/30">
                          {isEn ? 'Affair' : '외도'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {isEn ? 'Born in a cave on Mount Cyllene at dawn' : '킬레네 산 동굴에서 태어난 전령의 신'}
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {renderGodChip('hermes', '헤르메스 (전령/도둑)', '서자', 'amber', 'Hermes (Messenger & Travel)', 'Son')}
                      </div>
                    </div>

                    {/* Alcmene */}
                    <div className="rounded-xl border border-amber-500/20 bg-slate-900/80 p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-300">{isEn ? 'Alcmene (Mortal Queen)' : '알크메네 (인간 왕비)'}</span>
                        <span className="text-[10px] bg-purple-900/40 text-purple-300 px-1.5 py-0.2 rounded border border-purple-500/30">
                          {isEn ? 'Shapeshifting' : '변신술 유혹'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {isEn ? 'The greatest hero who conquered the 12 Labors' : '헤라의 저주로 12과업을 수행한 최고 영웅'}
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {renderGodChip('heracles', '헤라클레스 (신성 영웅)', '서자/반신', 'amber', 'Heracles (Divine Hero)', 'Demigod Son')}
                      </div>
                    </div>

                    {/* Danae */}
                    <div className="rounded-xl border border-amber-500/20 bg-slate-900/80 p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-300">{isEn ? 'Danaë (Argive Princess)' : '다나에 (아르고스 공주)'}</span>
                        <span className="text-[10px] bg-purple-900/40 text-purple-300 px-1.5 py-0.2 rounded border border-purple-500/30">
                          {isEn ? 'Golden Rain' : '황금비 침투'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {isEn ? 'Slayer of Medusa and founder of Mycenae' : '메두사를 참수한 전설의 영웅'}
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {renderGodChip('perseus', '페르세우스 (영웅)', '서자/반신', 'amber', 'Perseus (Gorgon Slayer)', 'Demigod Son')}
                      </div>
                    </div>

                    {/* Metis */}
                    <div className="rounded-xl border border-amber-500/20 bg-slate-900/80 p-3.5 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-amber-300">{isEn ? 'Metis (Titaness of Wisdom)' : '메티스 (지혜의 티탄)'}</span>
                        <span className="text-[10px] bg-cyan-900/40 text-cyan-300 px-1.5 py-0.2 rounded border border-cyan-500/30">
                          {isEn ? 'First Wife' : '첫 번째 아내'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {isEn ? 'Sprang fully armored from Zeus’s head' : '제우스 이마를 쪼개고 완전무장하여 탄생'}
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {renderGodChip('athena', '아테나 (지혜/전쟁)', '직계', 'cyan', 'Athena (Wisdom & War)', 'Daughter')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};


