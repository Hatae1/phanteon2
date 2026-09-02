import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MythologicalItem, MythologicalCharacter } from '../types';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedItem } from '../data/translations';
import {
  X,
  Star,
  Shield,
  Zap,
  Sparkles,
  User,
  Hammer,
  BookOpen,
  Sword,
  Flame,
  Globe,
  ExternalLink,
  Crown,
  ChevronRight,
  Maximize2,
  ZoomIn,
  ZoomOut,
  ImageIcon,
} from 'lucide-react';

interface ItemDetailModalProps {
  item: MythologicalItem | null;
  onClose: () => void;
  onSelectCharacter?: (characterId: string) => void;
  isZoomOpen?: boolean;
  onOpenZoom?: () => void;
  onCloseZoom?: () => void;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
  item: rawItem,
  onClose,
  onSelectCharacter,
  isZoomOpen: controlledZoomOpen,
  onOpenZoom,
  onCloseZoom,
}) => {
  const { t, language } = useLanguage();
  const isEn = language === 'en';

  const item = rawItem ? getLocalizedItem(rawItem, isEn) : null;

  const [activeTab, setActiveTab] = useState<'lore' | 'stats' | 'artwork' | 'stories' | 'legacy'>('lore');
  const [internalZoomOpen, setInternalZoomOpen] = useState<boolean>(false);
  const [zoomScale, setZoomScale] = useState<number>(1);

  const isZoomOpen = controlledZoomOpen !== undefined ? controlledZoomOpen : internalZoomOpen;

  const handleOpenZoom = () => {
    soundFx.playClick();
    if (onOpenZoom) {
      onOpenZoom();
    } else {
      setInternalZoomOpen(true);
    }
  };

  const handleCloseZoom = () => {
    soundFx.playClick();
    setZoomScale(1);
    if (onCloseZoom) {
      onCloseZoom();
    } else {
      setInternalZoomOpen(false);
    }
  };

  if (!item) return null;

  const getItemCategoryDisplayName = () => {
    if (!isEn) return item.categoryName;
    switch (item.category) {
      case 'weapon': return 'Divine Weapon';
      case 'footwear': return 'Sacred Footwear';
      case 'accessory': return 'Sacred Accessory';
      case 'armor': return 'Divine Armor';
      case 'relic': return 'Mythic Relic';
      default: return item.categoryName;
    }
  };

  const statList = [
    { label: isEn ? 'Attack / Power' : '공격력 / 파괴력', value: item.stats.attack, color: 'bg-red-500', text: 'text-red-400' },
    { label: isEn ? 'Defense / Durability' : '방어력 / 내구도', value: item.stats.defense, color: 'bg-blue-500', text: 'text-blue-400' },
    { label: isEn ? 'Agility / Mobility' : '신속 / 기동력 보정', value: item.stats.agility, color: 'bg-emerald-500', text: 'text-emerald-400' },
    { label: isEn ? 'Mystery / Sorcery' : '신비도 / 주술력', value: item.stats.mystery, color: 'bg-purple-500', text: 'text-purple-400' },
    { label: isEn ? 'Divinity / Sacred Miracle' : '신성력 / 기적', value: item.stats.divinity, color: 'bg-amber-400', text: 'text-amber-300' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-3xl border-2 border-amber-500/40 bg-slate-950 shadow-[0_0_60px_rgba(245,158,11,0.25)] flex flex-col"
        >
          {/* Header Banner - Large & Prominent Artwork View */}
          <div className="relative h-60 sm:h-72 md:h-80 w-full overflow-hidden bg-slate-950 border-b border-amber-500/20 shrink-0 group">
            {/* Background Blur Image */}
            <img
              src={item.imageUrl}
              alt={isEn ? item.nameEn : item.nameKo}
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover blur-md scale-110 opacity-35"
            />

            {/* Clear Center Artwork */}
            <div
              onClick={handleOpenZoom}
              className="absolute inset-0 flex items-center justify-center cursor-pointer transition-transform duration-500 group-hover:scale-102"
              title={isEn ? 'Click to enlarge high-res illustration' : '클릭하여 원본 일러스트 크게 확대 보기'}
            >
              <img
                src={item.imageUrl}
                alt={isEn ? item.nameEn : item.nameKo}
                referrerPolicy="no-referrer"
                className="h-full w-full max-w-2xl object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* Subtle Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

            {/* Controls at Top Right */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <button
                id="btn-zoom-item-artwork"
                onClick={handleOpenZoom}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 border border-amber-500/50 text-amber-300 hover:text-white hover:bg-amber-600/80 hover:border-amber-400 transition cursor-pointer text-xs font-bold shadow-lg backdrop-blur-md"
              >
                <Maximize2 size={14} />
                <span>{isEn ? 'View Art' : '그림 크게 보기'}</span>
              </button>

              {/* Close Button */}
              <button
                id="btn-close-item-detail"
                onClick={() => {
                  soundFx.playClick();
                  onClose();
                }}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer shadow-lg backdrop-blur-md"
              >
                <X size={20} />
              </button>
            </div>

            {/* Title and metadata on banner */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 pointer-events-none">
              <div className="pointer-events-auto">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="rounded-full bg-amber-500/20 border border-amber-500/40 px-2.5 py-0.5 text-xs font-bold text-amber-300 backdrop-blur-md">
                    {getItemCategoryDisplayName()}
                  </span>
                  <span className="rounded-full bg-slate-800/80 border border-slate-700 px-2.5 py-0.5 text-xs font-semibold text-slate-300 backdrop-blur-md">
                    {item.subType}
                  </span>
                  <div className="flex items-center gap-0.5 bg-slate-950/80 px-2 py-0.5 rounded-full border border-amber-500/30 backdrop-blur-md">
                    {Array.from({ length: item.starRating }).map((_, i) => (
                      <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-serif tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  {isEn ? item.nameEn : item.nameKo}
                </h2>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mt-0.5 drop-shadow">
                  <span>{isEn ? item.nameKo : item.nameEn}</span>
                  <span className="text-slate-500">|</span>
                  <span className="font-serif italic text-amber-300">{item.nameGreek}</span>
                </div>
              </div>

              {/* Owner / Creator Badges */}
              <div className="flex items-center gap-2 text-xs self-start sm:self-end pointer-events-auto">
                <div className="rounded-xl bg-slate-950/85 border border-slate-700 px-3 py-1.5 flex items-center gap-1.5 backdrop-blur-md shadow-md">
                  <User size={13} className="text-amber-400" />
                  <span className="text-slate-400">{isEn ? 'Owner:' : '소유주:'}</span>
                  <strong className="text-white font-bold">{item.owner}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center border-b border-amber-500/20 bg-slate-900/70 px-4 sm:px-6 overflow-x-auto h-12 shrink-0">
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab('lore');
              }}
              className={`h-full flex items-center gap-1.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'lore'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen size={15} />
              <span>{isEn ? 'Origin & Lore' : '기원 & 신화적 유래'}</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab('artwork');
              }}
              className={`h-full flex items-center gap-1.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'artwork'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <ImageIcon size={15} />
              <span>{isEn ? 'Sacred Art Gallery' : '성물 일러스트 갤러리'}</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab('stats');
              }}
              className={`h-full flex items-center gap-1.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'stats'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Zap size={15} />
              <span>{isEn ? 'Abilities & Stats' : '고유 권능 & 능력치'}</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab('stories');
              }}
              className={`h-full flex items-center gap-1.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'stories'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Flame size={15} />
              <span>{isEn ? 'Epic Exploits' : '신화 속 활약상'}</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                setActiveTab('legacy');
              }}
              className={`h-full flex items-center gap-1.5 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'legacy'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Globe size={15} />
              <span>{isEn ? 'Modern Legacy' : '현대적 유산 & 문화'}</span>
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* TAB: ARTWORK GALLERY (NEW DEDICATED FULL-VIEW TAB) */}
            {activeTab === 'artwork' && (
              <div className="space-y-6">
                <div className="rounded-3xl border-2 border-amber-500/40 bg-gradient-to-b from-slate-900 to-slate-950 p-4 sm:p-6 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-extrabold text-amber-300 flex items-center gap-2">
                        <Sparkles size={18} /> {isEn ? `${item.nameEn} Dedicated Sacred Illustration` : `${item.nameKo} 전용 성물 일러스트`}
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {isEn ? 'Click the image or button below to view in full resolution lightbox.' : '이미지를 클릭하거나 하단 버튼을 눌러 고화질 전체화면으로 감상할 수 있습니다.'}
                      </p>
                    </div>
                    <button
                      onClick={handleOpenZoom}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition cursor-pointer shadow-lg"
                    >
                      <Maximize2 size={15} />
                      <span>{isEn ? 'Fullscreen Zoom' : '전체화면 확대'}</span>
                    </button>
                  </div>

                  {/* Large High-Res Display Frame */}
                  <div
                    onClick={handleOpenZoom}
                    className="relative w-full rounded-2xl overflow-hidden bg-slate-950 border border-amber-500/30 flex items-center justify-center p-3 sm:p-6 cursor-pointer group shadow-inner min-h-[320px] sm:min-h-[420px]"
                  >
                    <img
                      src={item.imageUrl}
                      alt={isEn ? item.nameEn : item.nameKo}
                      referrerPolicy="no-referrer"
                      className="max-h-[460px] w-auto max-w-full object-contain rounded-xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-4 py-2 rounded-full bg-slate-900/90 text-amber-300 font-bold text-xs border border-amber-500/50 shadow-2xl flex items-center gap-2">
                        <Maximize2 size={16} /> {isEn ? 'Click to enlarge fullscreen' : '클릭하여 전체화면 확대'}
                      </span>
                    </div>
                  </div>

                  {/* Artwork Summary & Characteristics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3">
                      <span className="text-slate-400 block mb-1">{isEn ? 'Classification' : '성물 분류'}</span>
                      <strong className="text-amber-300 font-bold text-sm">{getItemCategoryDisplayName()} · {item.subType}</strong>
                    </div>
                    <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3">
                      <span className="text-slate-400 block mb-1">{isEn ? 'Primary Owner' : '주요 소유자'}</span>
                      <strong className="text-white font-bold text-sm">{item.owner}</strong>
                    </div>
                    <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-3">
                      <span className="text-slate-400 block mb-1">{isEn ? 'Divine Grade' : '신성 등급'}</span>
                      <div className="flex items-center gap-1 mt-0.5">
                        {Array.from({ length: item.starRating }).map((_, i) => (
                          <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 1: LORE & ORIGIN */}
            {activeTab === 'lore' && (
              <div className="space-y-6">
                {/* Visual Preview Banner inside Lore */}
                <div
                  onClick={handleOpenZoom}
                  className="rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-slate-900/80 to-slate-900/90 p-4 flex flex-col sm:flex-row items-center gap-4 cursor-pointer hover:border-amber-400 transition group shadow-lg"
                >
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 rounded-xl overflow-hidden bg-slate-950 border border-amber-500/40 p-1 flex items-center justify-center shadow-md">
                    <img
                      src={item.imageUrl}
                      alt={isEn ? item.nameEn : item.nameKo}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 size={16} className="text-amber-300" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-1.5 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2">
                      <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{isEn ? 'Sacred Relic Artwork' : '성물 대표 일러스트'}</span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1 font-semibold">
                        <Maximize2 size={11} /> {isEn ? 'Click to enlarge' : '클릭하여 크게 보기'}
                      </span>
                    </div>
                    <p className="text-sm text-slate-200 font-medium leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>

                {/* Creator & Owner Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <User size={15} /> {isEn ? 'Primary Owner & Bearer' : '주요 소유자 및 사용자'}
                    </div>
                    <p className="text-sm font-semibold text-white">{item.owner}</p>
                    {item.ownerId && onSelectCharacter && (
                      <button
                        onClick={() => {
                          soundFx.playClick();
                          onClose();
                          onSelectCharacter(item.ownerId!);
                        }}
                        className="mt-2 flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 font-semibold cursor-pointer underline"
                      >
                        <span>{isEn ? `View ${item.owner} in Character Codex` : `${item.owner.split(' ')[0]} 인물 도감 상세 보기`}</span>
                        <ChevronRight size={14} />
                      </button>
                    )}
                  </div>

                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <Hammer size={15} /> {isEn ? 'Craftsman & Mythological Origin' : '성물 제작자 및 기원'}
                    </div>
                    <p className="text-sm font-semibold text-white">{item.creator}</p>
                    {item.creatorId && onSelectCharacter && (
                      <button
                        onClick={() => {
                          soundFx.playClick();
                          onClose();
                          onSelectCharacter(item.creatorId!);
                        }}
                        className="mt-2 flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 font-semibold cursor-pointer underline"
                      >
                        <span>{isEn ? 'View Creator in Character Codex' : '제작자 인물 도감 보기'}</span>
                        <ChevronRight size={14} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Detailed Origin Story */}
                <div className="rounded-2xl border border-amber-500/20 bg-slate-900/60 p-5 space-y-3 shadow-md">
                  <h4 className="text-base font-extrabold text-amber-300 flex items-center gap-2">
                    <BookOpen size={18} /> {isEn ? 'Creation Background & Mythological Birth' : '제작 배경 및 신화적 탄생 비화'}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line">
                    {item.originAndLore}
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: ABILITIES & STATS */}
            {activeTab === 'stats' && (
              <div className="space-y-6">
                {/* 5-Factor Power Stats Bars */}
                <div className="rounded-2xl border border-amber-500/30 bg-slate-900/70 p-5 space-y-4 shadow-md">
                  <h4 className="text-base font-extrabold text-amber-300 flex items-center gap-2">
                    <Zap size={18} /> {isEn ? 'Power Rating Assessment' : '성물 능력치 평가 (Power Rating)'}
                  </h4>

                  <div className="space-y-3 pt-1">
                    {statList.map((st, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                          <span className="text-slate-300">{st.label}</span>
                          <span className={`font-bold ${st.text}`}>{st.value} / 100</span>
                        </div>
                        <div className="h-2.5 w-full rounded-full bg-slate-950 overflow-hidden p-0.5 border border-slate-800">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${st.value}%` }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`h-full rounded-full ${st.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specific Divine Abilities */}
                <div className="space-y-3.5">
                  <h4 className="text-base font-extrabold text-amber-300 flex items-center gap-2">
                    <Crown size={18} /> {isEn ? 'Divine Abilities & Active Effects' : '고유 권능 & 발동 효과 (Divine Abilities)'}
                  </h4>

                  <div className="grid grid-cols-1 gap-3">
                    {item.abilities.map((ab, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 space-y-2 hover:border-amber-500/40 transition shadow-md"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <h5 className="text-sm sm:text-base font-extrabold text-white flex items-center gap-2">
                            <span className="text-amber-400">✦</span> {ab.name}
                          </h5>
                          <span className="text-xs font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                            {ab.typeName}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                          {ab.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: EPIC STORIES */}
            {activeTab === 'stories' && (
              <div className="space-y-4">
                <h4 className="text-base font-extrabold text-amber-300 flex items-center gap-2">
                  <Flame size={18} /> {isEn ? 'Major Mythological Feats & Legends' : '신화 속 주요 활약 에피소드'}
                </h4>

                <div className="space-y-3">
                  {item.majorStories.map((story, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-slate-800 bg-slate-900/80 p-4 sm:p-5 space-y-1.5 hover:border-amber-500/40 transition shadow-md"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-extrabold text-amber-300 border border-amber-500/40">
                          {i + 1}
                        </span>
                        <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                          {story}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: MODERN LEGACY */}
            {activeTab === 'legacy' && (
              <div className="space-y-6">
                <div className="rounded-2xl border border-amber-500/30 bg-slate-900/80 p-5 space-y-3 shadow-md">
                  <h4 className="text-base font-extrabold text-amber-300 flex items-center gap-2">
                    <Globe size={18} /> {isEn ? 'Impact on Modern Culture, Words & Brands' : '현대 언어, 문화 & 브랜드에 미친 영향'}
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {item.modernLegacy}
                  </p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* FULLSCREEN LIGHTBOX ZOOM MODAL */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6">
          {/* Zoom Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseZoom}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl"
          />

          {/* Zoom Image Container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 max-w-5xl w-full max-h-[95vh] flex flex-col items-center justify-center"
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between p-3 sm:p-4 bg-slate-950/80 rounded-2xl border border-amber-500/30 mb-3 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="text-sm sm:text-base font-extrabold text-amber-300 font-serif">
                  {isEn ? item.nameEn : item.nameKo} ({isEn ? item.nameKo : item.nameEn})
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline-block">
                  {isEn ? 'Sacred Relic High-Res Illustration' : '신화 성물 고화질 일러스트'}
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setZoomScale((prev) => Math.max(0.75, prev - 0.25));
                  }}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                  title={isEn ? 'Zoom Out' : '축소'}
                >
                  <ZoomOut size={18} />
                </button>
                <span className="text-xs font-bold text-amber-400 w-12 text-center">
                  {Math.round(zoomScale * 100)}%
                </span>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setZoomScale((prev) => Math.min(2.5, prev + 0.25));
                  }}
                  className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
                  title={isEn ? 'Zoom In' : '확대'}
                >
                  <ZoomIn size={18} />
                </button>
                <button
                  onClick={handleCloseZoom}
                  className="p-2 rounded-lg bg-red-950/60 border border-red-500/50 text-red-300 hover:text-white hover:bg-red-900 transition cursor-pointer ml-2"
                  title={isEn ? 'Close' : '닫기'}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Main Full Image Stage */}
            <div className="relative w-full max-h-[78vh] overflow-auto rounded-2xl bg-slate-950/90 border border-amber-500/40 p-4 sm:p-8 flex items-center justify-center shadow-2xl">
              <img
                src={item.imageUrl}
                alt={isEn ? item.nameEn : item.nameKo}
                referrerPolicy="no-referrer"
                style={{ transform: `scale(${zoomScale})` }}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] transition-transform duration-200"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

