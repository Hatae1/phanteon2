import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Star,
  BookOpen,
  Zap,
  Network,
  Palette,
  Sparkles,
  Shield,
  Clock,
  ExternalLink,
  ChevronRight,
  Flame,
  Award,
  Crown,
  Heart,
  Baby,
  AlertCircle
} from 'lucide-react';
import { MythologicalCharacter } from '../types';
import { RoleIcon, getRoleLabel } from './RoleIcon';
import { getCharacterById } from '../data/characters';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedCharacter } from '../data/translations';
import {
  getLocalizedRelation,
  getLocalizedEntityName,
  getLocalizedDisguise,
  getLocalizedAffairDetail,
} from '../data/translations/relationshipTranslations';

interface CharacterDetailModalProps {
  character: MythologicalCharacter | null;
  onClose: () => void;
  onSelectRelatedCharacter: (character: MythologicalCharacter) => void;
  onOpenCompareWith: (character: MythologicalCharacter) => void;
  onOpenItemDetail?: (itemId: string) => void;
}

type TabType = 'lore' | 'stats' | 'relations' | 'arts';

export const CharacterDetailModal: React.FC<CharacterDetailModalProps> = ({
  character: rawCharacter,
  onClose,
  onSelectRelatedCharacter,
  onOpenCompareWith,
  onOpenItemDetail,
}) => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const character = rawCharacter ? getLocalizedCharacter(rawCharacter, isEn) : null;

  const [activeTab, setActiveTab] = useState<TabType>('lore');
  const [avatarError, setAvatarError] = useState(false);
  const [bannerError, setBannerError] = useState(false);

  // Reset tab and image errors when character changes
  useEffect(() => {
    if (character) {
      setActiveTab('lore');
      setAvatarError(false);
      setBannerError(false);
    }
  }, [character?.id]);

  if (!character) return null;

  const getCategoryDisplayName = () => {
    if (!isEn) return character.categoryName;
    switch (character.category) {
      case 'olympian': return 'Olympian (12 Gods)';
      case 'underworld': return 'Underworld Deity';
      case 'titan': return 'Titan Deity';
      case 'demigod': return 'Demigod';
      case 'hero': return 'Hero';
      case 'monster': return 'Mythic Monster';
      case 'sacred_beast': return 'Sacred Beast';
      default: return character.categoryName;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border-2 border-amber-500/50 bg-slate-950 shadow-[0_0_50px_rgba(245,158,11,0.25)]"
        >
          {/* Close Button */}
          <button
            id="close-character-detail-modal"
            onClick={onClose}
            className="absolute right-3.5 top-3.5 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900/80 text-slate-300 ring-1 ring-amber-500/40 backdrop-blur-md transition hover:bg-amber-500 hover:text-slate-950 cursor-pointer shadow-lg"
          >
            <X size={20} />
          </button>

          {/* Top Hero Banner Section */}
          <div className="relative shrink-0 w-full overflow-hidden bg-slate-900 min-h-[160px]">
            {!bannerError && character.bannerUrl ? (
              <img
                src={character.bannerUrl}
                alt={isEn ? character.nameEn : character.nameKo}
                onError={() => setBannerError(true)}
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover opacity-40 filter brightness-90 scale-105 transition-transform duration-700 hover:scale-100"
              />
            ) : (
              <div 
                className="absolute inset-0 opacity-30" 
                style={{ background: `radial-gradient(ellipse at top, ${character.accentColor} 0%, transparent 70%)` }} 
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />

            {/* Banner Content */}
            <div className="relative z-10 p-4 sm:p-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-5">
                {/* Character Portrait Card - Enlarged & Enhanced */}
                <div className="relative h-28 w-22 sm:h-36 sm:w-28 md:h-44 md:w-34 shrink-0 overflow-hidden rounded-xl border-2 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)] bg-slate-900 group">
                  {!avatarError && character.avatarUrl ? (
                    <img
                      src={character.avatarUrl}
                      alt={isEn ? character.nameEn : character.nameKo}
                      onError={() => setAvatarError(true)}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div 
                      className="flex h-full w-full flex-col items-center justify-center p-2 text-center"
                      style={{ background: `radial-gradient(circle, ${character.accentColor}44 0%, #090d16 80%)` }}
                    >
                      <Sparkles size={24} className="text-amber-300 mb-1" />
                      <span className="text-xs font-serif text-amber-200">{character.nameGreek}</span>
                    </div>
                  )}
                  <div className="absolute left-2 top-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black/85 ring-1.5 ring-amber-400 shadow-md">
                      <RoleIcon role={character.role} size={13} className="text-amber-300" />
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-1.5 text-center">
                    <span className="text-[10px] font-bold text-amber-300 font-serif tracking-wider uppercase">
                      {character.nameEn}
                    </span>
                  </div>
                </div>

                {/* Name and Titles */}
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                    <span className="rounded-md bg-amber-500/25 px-2.5 py-0.5 text-xs font-bold text-amber-300 border border-amber-500/50 shadow-sm">
                      {getCategoryDisplayName()}
                    </span>
                    <span className="rounded-md bg-slate-800/90 px-2.5 py-0.5 text-xs font-medium text-slate-300 border border-slate-700">
                      {getRoleLabel(character.role, language)}
                    </span>
                    <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-0.5 rounded-md border border-amber-500/30 shadow-inner">
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 6 }).map((_, i) => {
                          const isFilled = i < character.starRating;
                          return (
                            <Star
                              key={i}
                              size={12}
                              className={
                                isFilled
                                  ? "fill-amber-400 text-amber-400 drop-shadow-[0_0_4px_rgba(245,158,11,0.5)]"
                                  : "fill-slate-800 text-slate-700"
                              }
                            />
                          );
                        })}
                      </div>
                      <span className="text-[11px] font-bold text-amber-300 font-mono">
                        {character.starRating}{isEn ? ' Stars' : '성'}
                      </span>
                    </div>
                  </div>

                  <div className="mt-1.5 flex items-baseline justify-center sm:justify-start gap-2 flex-wrap">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide font-serif drop-shadow-md">
                      {isEn ? character.nameEn : character.nameKo}
                    </h2>
                    <span className="font-serif text-sm sm:text-base md:text-lg text-amber-300/90 font-medium">
                      {character.nameGreek} {!isEn && `(${character.nameEn})`}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="text-slate-400">{isEn ? 'Roman Name:' : '로마명:'}</span>
                    <strong className="text-amber-200 font-serif tracking-wide">
                      {isEn ? character.romanNameEn : `${character.romanNameKo} (${character.romanNameEn})`}
                    </strong>
                  </div>

                  <p className="mt-1 text-xs sm:text-sm text-amber-200/90 font-medium max-w-xl line-clamp-2">
                    {isEn ? (character.titleEn || character.title) : character.title}
                  </p>
                </div>
              </div>

              {/* Compare Quick Button */}
              <div className="flex items-center justify-center sm:justify-end gap-2 shrink-0">
                <button
                  id="detail-compare-action-btn"
                  onClick={() => {
                    soundFx.playClick();
                    onOpenCompareWith(character);
                  }}
                  className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 px-3.5 py-2 text-xs sm:text-sm font-bold text-slate-950 shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105 cursor-pointer"
                >
                  <Crown size={14} />
                  <span>{isEn ? 'Compare Divine Stats' : '이 신과 능력치 비교하기'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quote Bar - Fixed Height & Padding */}
          <div className="shrink-0 min-h-[40px] border-y border-amber-500/20 bg-amber-500/5 px-4 sm:px-6 py-2.5 text-xs sm:text-sm italic text-amber-200/90 flex items-center gap-2">
            <Sparkles size={14} className="text-amber-400 shrink-0" />
            <span className="truncate">"{character.quote}"</span>
          </div>

          {/* Navigation Tabs - Fixed Height & Padding */}
          <div className="shrink-0 h-12 flex items-center border-b border-amber-500/20 bg-slate-900/90 px-3 sm:px-6 overflow-x-auto">
            <button
              id="tab-detail-lore"
              onClick={() => {
                soundFx.playClick();
                setActiveTab('lore');
              }}
              className={`h-full flex items-center gap-1.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'lore'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen size={15} />
              <span>{isEn ? 'Mythological Lore' : '신화 배경 & 주요 전승'}</span>
            </button>

            <button
              id="tab-detail-stats"
              onClick={() => {
                soundFx.playClick();
                setActiveTab('stats');
              }}
              className={`h-full flex items-center gap-1.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'stats'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap size={15} />
              <span>{isEn ? 'Divine Stats & Skills' : '능력치 & 고유 권능'}</span>
            </button>

            <button
              id="tab-detail-relations"
              onClick={() => {
                soundFx.playClick();
                setActiveTab('relations');
              }}
              className={`h-full flex items-center gap-1.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'relations'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Network size={15} />
              <span>{isEn ? 'Genealogy & Relations' : '신화 관계도 & 계보'}</span>
            </button>

            <button
              id="tab-detail-arts"
              onClick={() => {
                soundFx.playClick();
                setActiveTab('arts');
              }}
              className={`h-full flex items-center gap-1.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'arts'
                  ? 'border-amber-400 text-amber-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Palette size={15} />
              <span>{isEn ? 'Artworks & Etymology' : '명화 & 어원 상식'}</span>
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* TAB 1: MYTHOLOGICAL LORE */}
            {activeTab === 'lore' && (
              <div className="space-y-6">
                {/* Summary & Domain Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2 rounded-xl border border-amber-500/20 bg-slate-900/70 p-4 space-y-2">
                    <h4 className="text-sm font-bold text-amber-300 flex items-center gap-1.5">
                      <BookOpen size={16} /> {isEn ? 'Mythological Overview' : '신화적 개요'}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {character.lore.summary}
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-800">
                      <span className="text-xs font-bold text-amber-400">
                        {isEn ? 'Domain & Divine Spheres: ' : '관장 영역 및 권능: '}
                      </span>
                      <span className="text-xs text-slate-300">{character.domainDetail}</span>
                    </div>
                  </div>

                  {/* Symbols & Animals */}
                  <div className="rounded-xl border border-amber-500/20 bg-slate-900/70 p-4 space-y-3">
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-amber-400">
                        {isEn ? 'Sacred Symbols & Regalia' : '신성한 상징물 & 보구 (Symbols)'}
                      </span>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {character.symbols.map((sym, i) => {
                          // Check if symbol matches an item in our encyclopedia
                          const sLower = sym.toLowerCase();
                          let matchedItemId = '';
                          if (sym.includes('벼락') || sLower.includes('thunderbolt') || sLower.includes('keraunos')) matchedItemId = 'keraunos';
                          else if (sym.includes('삼지창') || sLower.includes('trident')) matchedItemId = 'trident';
                          else if (sym.includes('아이기스') || sLower.includes('aegis')) matchedItemId = 'aegis';
                          else if (sym.includes('날개') || sym.includes('샌들') || sym.includes('탈라리아') || sLower.includes('talaria') || sLower.includes('sandal')) matchedItemId = 'talaria';
                          else if (sym.includes('카두케우스') || sym.includes('지팡이') || sym.includes('케리케이온') || sLower.includes('caduceus')) matchedItemId = 'caduceus';
                          else if (sym.includes('투구') || sym.includes('퀴네에') || sLower.includes('helm') || sLower.includes('cap of invisibility')) matchedItemId = 'cap-of-invisibility';
                          else if (sym.includes('케스토스') || sym.includes('허리띠') || sLower.includes('cestus') || sLower.includes('girdle')) matchedItemId = 'cestus';
                          else if (sym.includes('하르페') || sym.includes('낫') || sLower.includes('harpe') || sLower.includes('sickle')) matchedItemId = 'harpe';
                          else if (sym.includes('사자 가죽') || sLower.includes('lion pelt') || sLower.includes('nemean')) matchedItemId = 'nemean-lion-pelt';
                          else if ((sym.includes('태양') && sym.includes('마차')) || sLower.includes('sun chariot') || sLower.includes('chariot')) matchedItemId = 'sun-chariot';

                          if (matchedItemId && onOpenItemDetail) {
                            return (
                              <button
                                key={i}
                                onClick={() => {
                                  soundFx.playClick();
                                  onOpenItemDetail(matchedItemId);
                                }}
                                className="flex items-center gap-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 px-2.5 py-1 text-xs text-amber-200 border border-amber-500/50 font-semibold transition cursor-pointer shadow-sm hover:scale-105"
                                title={isEn ? 'View item details in encyclopedia' : '아이템 도감에서 상세 정보 보기'}
                              >
                                <span>⚡ {sym}</span>
                                <ExternalLink size={11} className="text-amber-400" />
                              </button>
                            );
                          }

                          return (
                            <span key={i} className="rounded-lg bg-amber-500/10 px-2.5 py-1 text-xs text-amber-200 border border-amber-500/30 font-medium">
                              {sym}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <span className="text-xs sm:text-sm font-bold text-amber-400">
                        {isEn ? 'Sacred Animals & Plants' : '상징 동물 & 식물'}
                      </span>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {character.animals.map((an, i) => (
                          <span key={i} className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs text-slate-200 border border-slate-700 font-medium">
                            🐾 {an}
                          </span>
                        ))}
                        {character.plants.map((pl, i) => (
                          <span key={i} className="rounded-lg bg-slate-800 px-2.5 py-1 text-xs text-emerald-300 border border-slate-700 font-medium">
                            🌿 {pl}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Birth & Origin */}
                <div className="rounded-xl border border-amber-500/20 bg-slate-900/60 p-4 sm:p-5 space-y-2.5 shadow-md">
                  <h4 className="text-sm sm:text-base font-extrabold text-amber-300 flex items-center gap-2">
                    <Sparkles size={16} /> {isEn ? 'Birth & Origin Myth' : '탄생 및 기원 신화 (Birth & Origin)'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                    {character.lore.birthAndOrigin}
                  </p>
                </div>

                {/* Major Legends Timeline / Cards */}
                <div className="space-y-3">
                  <h4 className="text-sm sm:text-base font-extrabold text-amber-300 flex items-center gap-2">
                    <Crown size={16} /> {isEn ? 'Major Mythological Tales' : '대표 신화 및 주요 사건 (Major Mythological Tales)'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {character.lore.majorStories.map((story, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 sm:p-5 space-y-2.5 hover:border-amber-500/40 transition shadow-md"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-1.5">
                            <span className="text-amber-400 font-serif">#{i + 1}</span> {story.title}
                          </h5>
                          <span className="text-xs text-amber-300 bg-amber-500/15 px-2.5 py-0.5 rounded border border-amber-500/30 font-medium whitespace-nowrap">
                            {story.period}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {story.content}
                        </p>
                        {story.highlight && (
                          <div className="text-xs text-amber-300 font-medium pt-1 border-t border-slate-800/80">
                            ✦ {story.highlight}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Roman Differences */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-950/30 p-4 sm:p-5 space-y-2 shadow-md">
                  <h4 className="text-sm sm:text-base font-extrabold text-cyan-300 flex items-center gap-2">
                    🏛️ {isEn ? `Differences: Greek vs Roman (${character.nameEn} vs ${character.romanNameEn})` : `그리스 vs 로마 신화의 차이점 (${character.nameKo} vs ${character.romanNameKo})`}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {character.lore.romanDifferences}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: STATS & SKILLS */}
            {activeTab === 'stats' && (
              <div className="space-y-6">
                {/* 6 Core RPG Stats Meters */}
                <div className="rounded-xl border border-amber-500/20 bg-slate-900/70 p-5 space-y-4">
                  <h4 className="text-sm font-bold text-amber-300 flex items-center gap-1.5">
                    <Zap size={16} /> {isEn ? 'Divine Stats Breakdown' : '6대 신성 능력치 (Divine Stats Breakdown)'}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Power */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-300 flex items-center gap-1">
                          <Flame size={13} className="text-red-400" /> {isEn ? 'Power / Destruction' : '신성력 / 파괴력 (Power)'}
                        </span>
                        <span className="text-amber-400 font-bold">{character.stats.power} / 100</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-red-500 to-amber-500 transition-all duration-1000"
                          style={{ width: `${character.stats.power}%` }}
                        />
                      </div>
                    </div>

                    {/* Defense */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-300 flex items-center gap-1">
                          <Shield size={13} className="text-blue-400" /> {isEn ? 'Defense / Immortality' : '방어력 / 불멸성 (Defense)'}
                        </span>
                        <span className="text-amber-400 font-bold">{character.stats.defense} / 100</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000"
                          style={{ width: `${character.stats.defense}%` }}
                        />
                      </div>
                    </div>

                    {/* Wisdom */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-300 flex items-center gap-1">
                          <BookOpen size={13} className="text-purple-400" /> {isEn ? 'Wisdom / Strategy' : '지혜 / 지략 (Wisdom)'}
                        </span>
                        <span className="text-amber-400 font-bold">{character.stats.wisdom} / 100</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-400 transition-all duration-1000"
                          style={{ width: `${character.stats.wisdom}%` }}
                        />
                      </div>
                    </div>

                    {/* Agility */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-300 flex items-center gap-1">
                          <Sparkles size={13} className="text-emerald-400" /> {isEn ? 'Agility / Mobility' : '신속 / 기동력 (Agility)'}
                        </span>
                        <span className="text-amber-400 font-bold">{character.stats.agility} / 100</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-1000"
                          style={{ width: `${character.stats.agility}%` }}
                        />
                      </div>
                    </div>

                    {/* Authority */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-300 flex items-center gap-1">
                          <Crown size={13} className="text-amber-400" /> {isEn ? 'Authority / Domain Command' : '권능 / 영역 지배력 (Authority)'}
                        </span>
                        <span className="text-amber-400 font-bold">{character.stats.authority} / 100</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 transition-all duration-1000"
                          style={{ width: `${character.stats.authority}%` }}
                        />
                      </div>
                    </div>

                    {/* Leadership */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-300 flex items-center gap-1">
                          <Award size={13} className="text-pink-400" /> {isEn ? 'Leadership / Majesty' : '통솔력 / 위엄 (Leadership)'}
                        </span>
                        <span className="text-amber-400 font-bold">{character.stats.leadership} / 100</span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-400 transition-all duration-1000"
                          style={{ width: `${character.stats.leadership}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Signature Skills */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-amber-300 flex items-center gap-1.5">
                    <Zap size={16} /> {isEn ? 'Signature Divine Skills' : '신화적 고유 기술 및 궁극 권능 (Signature Divine Skills)'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {character.skills.map((skill, i) => (
                      <div
                        key={i}
                        className={`rounded-xl border p-4 space-y-2 ${
                          skill.type === 'ultimate'
                            ? 'border-amber-500/60 bg-gradient-to-b from-amber-500/15 to-slate-900 shadow-md'
                            : 'border-slate-800 bg-slate-900/80'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                              skill.type === 'ultimate'
                                ? 'bg-amber-400 text-slate-950'
                                : skill.type === 'active'
                                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                                : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                            }`}
                          >
                            {isEn ? (skill.type === 'ultimate' ? 'Ultimate' : skill.type === 'active' ? 'Active' : 'Passive') : skill.typeName}
                          </span>
                          {skill.cooldown && (
                            <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                              <Clock size={11} /> {skill.cooldown}
                            </span>
                          )}
                        </div>
                        <h5 className="text-sm font-bold text-white">{skill.name}</h5>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trivia Box */}
                <div className="rounded-xl border border-amber-500/30 bg-slate-900/70 p-4 sm:p-5 space-y-3 shadow-md">
                  <h4 className="text-sm sm:text-base font-extrabold text-amber-300 flex items-center gap-2">
                    💡 {isEn ? 'Mythological Facts & Trivia' : '신화 트리비아 & 흥미로운 상식 (Mythological Facts)'}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-200 list-disc list-inside">
                    {character.trivia.map((fact, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 3: RELATIONSHIPS & LINEAGE */}
            {activeTab === 'relations' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 shadow-md">
                  <p className="text-xs sm:text-sm text-slate-200">
                    {isEn ? (
                      <>Genealogical lineage, <span className="text-purple-300 font-bold">affair networks</span>, and <span className="text-amber-300 font-bold">demigod offspring</span> in mythology.</>
                    ) : (
                      <>신화 속 정실 혈통, <span className="text-purple-300 font-bold">외도(불륜) 관계망</span> 및 <span className="text-amber-300 font-bold">서자(혼외자) 계보</span>입니다.</>
                    )}
                  </p>
                  <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700 font-medium whitespace-nowrap shrink-0 ml-2">
                    {isEn ? 'Click name to jump' : '신화 인물 클릭 시 이동'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Parents */}
                  {character.relationships.parents && (
                    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-3">
                      <h4 className="text-sm font-extrabold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                        <Crown size={15} /> {isEn ? 'Parents & Origin' : '부모 (Parents & Origin)'}
                      </h4>
                      <div className="flex flex-col gap-2.5">
                        {character.relationships.parents.map((p, i) => {
                          const targetChar = p.id ? getCharacterById(p.id) : null;
                          const displayName = isEn ? (targetChar ? targetChar.nameEn : getLocalizedEntityName(p.name, true)) : p.name;
                          const displayRelation = getLocalizedRelation(p.relation, isEn);
                          return (
                            <div
                              key={i}
                              className={`flex items-center justify-between rounded-lg p-2.5 text-sm transition border ${
                                p.isAffair
                                  ? 'bg-purple-950/30 border-purple-500/40'
                                  : 'bg-slate-800/80 border-slate-700/70'
                              }`}
                            >
                              <div className="flex items-center gap-2 flex-wrap">
                                <button
                                  disabled={!targetChar}
                                  onClick={() => targetChar && onSelectRelatedCharacter(targetChar)}
                                  className={`text-sm font-bold transition ${
                                    targetChar
                                      ? 'text-amber-300 hover:text-amber-200 underline underline-offset-2 cursor-pointer'
                                      : 'text-slate-100 cursor-default'
                                  }`}
                                >
                                  {displayName}
                                </button>
                                <span className="text-xs text-slate-300 font-medium">({displayRelation})</span>
                                {p.isAffair && (
                                  <span className="text-[11px] bg-purple-500/25 text-purple-200 px-2 py-0.5 rounded border border-purple-500/40 font-semibold">
                                    {isEn ? 'Affair/Secret Union' : '외도/불륜 탄생'}
                                  </span>
                                )}
                              </div>
                              {targetChar && (
                                <button
                                  onClick={() => onSelectRelatedCharacter(targetChar)}
                                  className="text-amber-400/80 hover:text-amber-300 p-1"
                                >
                                  <ChevronRight size={16} />
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Spouse */}
                  {character.relationships.spouse && (
                    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-3">
                      <h4 className="text-sm font-extrabold text-pink-400 uppercase tracking-wider flex items-center gap-2">
                        <Heart size={15} /> {isEn ? 'Spouses' : '정식 배우자 (Spouses)'}
                      </h4>
                      <div className="flex flex-col gap-2.5">
                        {character.relationships.spouse.map((s, i) => {
                          const targetChar = s.id ? getCharacterById(s.id) : null;
                          const displayName = isEn ? (targetChar ? targetChar.nameEn : getLocalizedEntityName(s.name, true)) : s.name;
                          const displayRelation = getLocalizedRelation(s.relation, isEn);
                          return (
                            <div
                              key={i}
                              className="flex items-center justify-between rounded-lg p-2.5 text-sm bg-pink-950/30 border border-pink-500/40"
                            >
                              <div className="flex items-center gap-2 flex-wrap">
                                <button
                                  disabled={!targetChar}
                                  onClick={() => targetChar && onSelectRelatedCharacter(targetChar)}
                                  className={`text-sm font-bold transition ${
                                    targetChar
                                      ? 'text-pink-300 hover:text-pink-200 underline underline-offset-2 cursor-pointer'
                                      : 'text-slate-100 cursor-default'
                                  }`}
                                >
                                  {displayName}
                                </button>
                                <span className="text-xs text-pink-200/80 font-medium">({displayRelation})</span>
                                {s.isLegitimate && (
                                  <span className="text-[11px] bg-emerald-500/25 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40 font-semibold">
                                    {isEn ? 'Legitimate' : '정실 (정식 혼인)'}
                                  </span>
                                )}
                              </div>
                              {targetChar && (
                                <button
                                  onClick={() => onSelectRelatedCharacter(targetChar)}
                                  className="text-pink-400/80 hover:text-pink-300 p-1"
                                >
                                  <ChevronRight size={16} />
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Lovers / Affairs (불륜 & 외도 상대들) */}
                  {character.relationships.lovers && character.relationships.lovers.length > 0 && (
                    <div className="md:col-span-2 rounded-xl border border-purple-500/40 bg-purple-950/25 p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-extrabold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                          <Flame size={16} className="text-purple-400" /> {isEn ? 'Affairs & Lovers' : '외도 & 불륜 연인 (Affairs & Lovers)'}
                        </h4>
                        <span className="text-xs text-purple-300 bg-purple-900/60 px-2.5 py-1 rounded-full border border-purple-500/40 font-medium">
                          {isEn ? `${character.relationships.lovers.length} Affairs Recorded` : `총 ${character.relationships.lovers.length}건의 외도/밀회`}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {character.relationships.lovers.map((l, i) => {
                          const targetChar = l.id ? getCharacterById(l.id) : null;
                          const displayName = isEn ? (targetChar ? targetChar.nameEn : getLocalizedEntityName(l.name, true)) : l.name;
                          const displayRelation = getLocalizedRelation(l.relation, isEn);
                          const displayDisguise = l.disguiseOrMethod ? getLocalizedDisguise(l.disguiseOrMethod, isEn) : null;
                          const displayDetail = l.affairDetail ? getLocalizedAffairDetail(l.affairDetail, isEn) : null;
                          return (
                            <div
                              key={i}
                              className="rounded-lg border border-purple-500/30 bg-slate-900/90 p-3 space-y-2 transition hover:border-purple-500/50 shadow-sm"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <button
                                    disabled={!targetChar}
                                    onClick={() => targetChar && onSelectRelatedCharacter(targetChar)}
                                    className={`text-sm font-bold transition ${
                                      targetChar
                                        ? 'text-purple-200 hover:text-purple-100 underline underline-offset-2 cursor-pointer'
                                        : 'text-slate-100 cursor-default'
                                    }`}
                                  >
                                    {displayName}
                                  </button>
                                  <span className="text-xs text-purple-300/90 font-medium">({displayRelation})</span>
                                </div>
                                {targetChar && (
                                  <button
                                    onClick={() => onSelectRelatedCharacter(targetChar)}
                                    className="text-purple-400 hover:text-purple-200 p-0.5"
                                  >
                                    <ChevronRight size={15} />
                                  </button>
                                )}
                              </div>

                              {displayDisguise && (
                                <div className="flex items-center gap-1.5 text-xs text-amber-200 bg-amber-950/40 px-2.5 py-1 rounded border border-amber-500/30 font-medium">
                                  <span className="text-xs font-bold text-amber-400">{isEn ? 'Disguise:' : '변신술:'}</span>
                                  <span>{displayDisguise}</span>
                                </div>
                              )}

                              {displayDetail && (
                                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-0.5">
                                  {displayDetail}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Illegitimate Children (서자 / 혼외 자녀) */}
                  {character.relationships.illegitimateChildren && character.relationships.illegitimateChildren.length > 0 && (
                    <div className="md:col-span-2 rounded-xl border border-amber-500/40 bg-amber-950/25 p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-extrabold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                          <Baby size={16} className="text-amber-400" /> {isEn ? 'Illegitimate & Demigod Children' : '서자 & 혼외 자녀 (Illegitimate Children)'}
                        </h4>
                        <span className="text-xs text-amber-300 bg-amber-900/60 px-2.5 py-1 rounded-full border border-amber-500/40 font-medium">
                          {isEn ? `${character.relationships.illegitimateChildren.length} Children Recorded` : `총 ${character.relationships.illegitimateChildren.length}명의 서자`}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {character.relationships.illegitimateChildren.map((c, i) => {
                          const targetChar = c.id ? getCharacterById(c.id) : null;
                          const displayName = isEn ? (targetChar ? targetChar.nameEn : getLocalizedEntityName(c.name, true)) : c.name;
                          const displayRelation = getLocalizedRelation(c.relation, isEn);
                          const displayDetail = c.affairDetail ? getLocalizedAffairDetail(c.affairDetail, isEn) : null;
                          return (
                            <div
                              key={i}
                              className="rounded-lg border border-amber-500/30 bg-slate-900/90 p-3 space-y-2 transition hover:border-amber-500/50 shadow-sm"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <button
                                    disabled={!targetChar}
                                    onClick={() => targetChar && onSelectRelatedCharacter(targetChar)}
                                    className={`text-sm font-bold transition ${
                                      targetChar
                                        ? 'text-amber-200 hover:text-amber-100 underline underline-offset-2 cursor-pointer'
                                        : 'text-slate-100 cursor-default'
                                    }`}
                                  >
                                    {displayName}
                                  </button>
                                  <span className="text-xs text-amber-300/90 font-medium">({displayRelation})</span>
                                </div>
                                {targetChar && (
                                  <button
                                    onClick={() => onSelectRelatedCharacter(targetChar)}
                                    className="text-amber-400 hover:text-amber-200 p-0.5"
                                  >
                                    <ChevronRight size={15} />
                                  </button>
                                )}
                              </div>

                              {displayDetail && (
                                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-0.5">
                                  {displayDetail}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Regular Children */}
                  {character.relationships.children && (
                    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-3">
                      <h4 className="text-sm font-extrabold text-cyan-400 uppercase tracking-wider">
                        {isEn ? 'All Offspring' : '주요 자녀 일람 (All Offspring)'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {character.relationships.children.map((c, i) => {
                          const targetChar = c.id ? getCharacterById(c.id) : null;
                          const displayName = isEn ? (targetChar ? targetChar.nameEn : getLocalizedEntityName(c.name, true)) : c.name;
                          const displayRelation = getLocalizedRelation(c.relation, isEn);
                          return (
                            <button
                              key={i}
                              disabled={!targetChar}
                              onClick={() => targetChar && onSelectRelatedCharacter(targetChar)}
                              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                                targetChar
                                  ? 'bg-cyan-500/15 text-cyan-200 border border-cyan-500/40 hover:bg-cyan-500/30 cursor-pointer shadow-sm'
                                  : 'bg-slate-800 text-slate-200 border border-slate-700 cursor-default'
                              }`}
                            >
                              <span>{displayName}</span>
                              {c.isIllegitimate ? (
                                <span className="text-[11px] bg-amber-500/25 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/40 font-bold">
                                  {isEn ? 'Illegitimate' : '서자'}
                                </span>
                              ) : c.isLegitimate ? (
                                <span className="text-[11px] bg-emerald-500/25 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/40 font-bold">
                                  {isEn ? 'Legitimate' : '정실'}
                                </span>
                              ) : null}
                              <span className="text-xs text-slate-300 font-normal">({displayRelation})</span>
                              {targetChar && <ChevronRight size={14} className="text-cyan-400" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Siblings */}
                  {character.relationships.siblings && (
                    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-3">
                      <h4 className="text-sm font-extrabold text-indigo-400 uppercase tracking-wider">
                        {isEn ? 'Siblings' : '형제자매 (Siblings)'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {character.relationships.siblings.map((sb, i) => {
                          const targetChar = sb.id ? getCharacterById(sb.id) : null;
                          const displayName = isEn ? (targetChar ? targetChar.nameEn : getLocalizedEntityName(sb.name, true)) : sb.name;
                          const displayRelation = getLocalizedRelation(sb.relation, isEn);
                          return (
                            <button
                              key={i}
                              disabled={!targetChar}
                              onClick={() => targetChar && onSelectRelatedCharacter(targetChar)}
                              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                                targetChar
                                  ? 'bg-indigo-500/15 text-indigo-200 border border-indigo-500/40 hover:bg-indigo-500/30 cursor-pointer shadow-sm'
                                  : 'bg-slate-800 text-slate-300 border border-slate-700 cursor-default'
                              }`}
                            >
                              <span>{displayName}</span>
                              <span className="text-xs text-slate-300 font-normal">({displayRelation})</span>
                              {targetChar && <ChevronRight size={14} className="text-indigo-400" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Allies */}
                  {character.relationships.allies && (
                    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-3">
                      <h4 className="text-sm font-extrabold text-emerald-400 uppercase tracking-wider">
                        {isEn ? 'Allies & Followers' : '주요 조력자 & 추종자 (Allies)'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {character.relationships.allies.map((al, i) => {
                          const targetChar = al.id ? getCharacterById(al.id) : null;
                          const displayName = isEn ? (targetChar ? targetChar.nameEn : getLocalizedEntityName(al.name, true)) : al.name;
                          const displayRelation = getLocalizedRelation(al.relation, isEn);
                          return (
                            <button
                              key={i}
                              disabled={!targetChar}
                              onClick={() => targetChar && onSelectRelatedCharacter(targetChar)}
                              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                                targetChar
                                  ? 'bg-emerald-500/15 text-emerald-200 border border-emerald-500/40 hover:bg-emerald-500/30 cursor-pointer shadow-sm'
                                  : 'bg-slate-800 text-slate-300 border border-slate-700 cursor-default'
                              }`}
                            >
                              <span>{displayName}</span>
                              <span className="text-xs text-slate-300 font-normal">({displayRelation})</span>
                              {targetChar && <ChevronRight size={14} className="text-emerald-400" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Rivals */}
                  {character.relationships.rivals && (
                    <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 space-y-3">
                      <h4 className="text-sm font-extrabold text-red-400 uppercase tracking-wider">
                        {isEn ? 'Rivals & Nemeses' : '숙적 & 라이벌 (Rivals)'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {character.relationships.rivals.map((rv, i) => {
                          const targetChar = rv.id ? getCharacterById(rv.id) : null;
                          const displayName = isEn ? (targetChar ? targetChar.nameEn : getLocalizedEntityName(rv.name, true)) : rv.name;
                          const displayRelation = getLocalizedRelation(rv.relation, isEn);
                          return (
                            <button
                              key={i}
                              disabled={!targetChar}
                              onClick={() => targetChar && onSelectRelatedCharacter(targetChar)}
                              className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition ${
                                targetChar
                                  ? 'bg-red-500/15 text-red-200 border border-red-500/40 hover:bg-red-500/30 cursor-pointer shadow-sm'
                                  : 'bg-slate-800 text-slate-300 border border-slate-700 cursor-default'
                              }`}
                            >
                              <span>{displayName}</span>
                              <span className="text-xs text-slate-300 font-normal">({displayRelation})</span>
                              {targetChar && <ChevronRight size={14} className="text-red-400" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 4: CLASSICAL ARTWORKS & ETYMOLOGY */}
            {activeTab === 'arts' && (
              <div className="space-y-6">
                {/* Modern Etymology / Legacy */}
                <div className="rounded-xl border border-amber-500/30 bg-slate-900/80 p-5 space-y-3 shadow-md">
                  <h4 className="text-base font-extrabold text-amber-300 flex items-center gap-2">
                    ✨ {isEn ? 'Modern Legacy, Words & Astronomy' : '현대 언어 & 천문학 유산 (Modern Legacy & Etymology)'}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {character.lore.etymologyAndLegacy}
                  </p>
                </div>

                {/* Famous Artworks */}
                <div className="space-y-4">
                  <h4 className="text-base font-extrabold text-amber-300 flex items-center gap-2">
                    <Palette size={18} /> {isEn ? 'Classical Artworks & Sculptures in World Museums' : '세계 유명 미술관 속 고전 명화 & 조각'}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {character.lore.famousArtwork.map((art, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-slate-800 bg-slate-900/90 p-4 sm:p-5 space-y-2.5 hover:border-amber-500/40 transition shadow-md"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="text-sm sm:text-base font-extrabold text-white">{art.title}</h5>
                          <span className="text-xs font-semibold text-amber-300 bg-slate-800 px-2.5 py-1 rounded border border-slate-700 whitespace-nowrap shrink-0">
                            {art.period}
                          </span>
                        </div>
                        <div className="text-xs sm:text-sm text-slate-300 font-medium">
                          <strong className="text-amber-400 font-bold">{isEn ? 'Artist:' : '작가:'}</strong> {art.artist} &nbsp;|&nbsp; <strong className="text-amber-400 font-bold">{isEn ? 'Location:' : '소장:'}</strong> {art.location}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed pt-1">
                          {art.description}
                        </p>
                      </div>
                    ))}
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

