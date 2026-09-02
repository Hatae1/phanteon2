import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Shield, Zap, Sparkles, Flame, Eye, Droplets, Sun, Moon, Sword } from 'lucide-react';
import { MythologicalCharacter } from '../types';
import { RoleIcon } from './RoleIcon';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface CharacterCardProps {
  character: MythologicalCharacter;
  onClick: (character: MythologicalCharacter) => void;
  index: number;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick, index }) => {
  const { language, getCharName, getCharRomanName, t } = useLanguage();
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    soundFx.playSelect();
    onClick(character);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFx.playHover();
  };

  const displayName = getCharName(character);
  const displayRoman = getCharRomanName(character);

  const getCategoryLabel = () => {
    switch (character.category) {
      case 'olympian': return t.catOlympian;
      case 'underworld': return t.catUnderworld;
      case 'titan': return t.catTitan;
      case 'demigod': return t.catDemigod;
      case 'hero': return t.catHero;
      case 'monster': return t.catMonster;
      case 'sacred_beast': return t.catSacredBeast;
      default: return character.categoryName;
    }
  };

  // Get distinct domain icon
  const getDomainIcon = () => {
    switch (character.id) {
      case 'zeus': return <Zap size={48} className="text-amber-400" />;
      case 'poseidon': return <Droplets size={48} className="text-cyan-400" />;
      case 'hades': return <Eye size={48} className="text-purple-400" />;
      case 'athena': return <Shield size={48} className="text-blue-400" />;
      case 'apollo': return <Sun size={48} className="text-yellow-400" />;
      case 'artemis': return <Moon size={48} className="text-emerald-400" />;
      case 'ares': return <Flame size={48} className="text-red-500" />;
      case 'heracles': return <Sword size={48} className="text-amber-500" />;
      default: return <Sparkles size={48} className="text-amber-300" />;
    }
  };

  return (
    <motion.div
      id={`character-card-${character.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.5) }}
      whileHover={{ scale: 1.05, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className="group relative cursor-pointer select-none rounded-lg p-[3px] transition-shadow duration-300"
      style={{
        background: 'linear-gradient(135deg, #F59E0B 0%, #78350F 50%, #FBBF24 100%)',
        boxShadow: isHovered
          ? '0 0 20px rgba(245, 158, 11, 0.6), 0 8px 24px rgba(0, 0, 0, 0.8)'
          : '0 4px 12px rgba(0, 0, 0, 0.6)',
      }}
    >
      {/* Inner Card Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[6px] bg-slate-950">
        {/* Character Portrait */}
        {!imageError ? (
          <img
            src={character.avatarUrl}
            alt={displayName}
            onError={() => setImageError(true)}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center p-4 text-center"
            style={{
              background: `radial-gradient(circle at center, ${character.accentColor}33 0%, #090d16 80%)`,
            }}
          >
            <div className="mb-2 opacity-90 drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]">
              {getDomainIcon()}
            </div>
            <div className="font-serif text-sm text-amber-200/80">{character.nameGreek}</div>
            <div className="text-xs text-slate-400">{displayRoman}</div>
          </div>
        )}

        {/* Dynamic Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Shimmer Light Sweep Effect on Hover */}
        {isHovered && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 0.75, ease: 'easeInOut' }}
            className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-transparent via-amber-300/30 to-transparent transform -skew-x-12"
          />
        )}

        {/* Top-Left Class/Role Badge */}
        <div className="absolute left-1.5 top-1.5 z-10">
          <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-slate-900/90 shadow-md ring-2 ring-amber-400/90 backdrop-blur-sm group-hover:ring-amber-300">
            <RoleIcon role={character.role} size={15} className="text-amber-300 drop-shadow" />
          </div>
        </div>

        {/* Top-Right Domain Pill Badge */}
        <div className="absolute right-1.5 top-1.5 z-10">
          <span className="inline-block rounded bg-black/65 px-1.5 py-0.5 text-[10px] font-medium tracking-tight text-amber-200/90 backdrop-blur-sm border border-amber-500/30">
            {getCategoryLabel()}
          </span>
        </div>

        {/* Bottom Details Section */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center justify-end pb-1 pt-6 px-1">
          {/* Character Name in Bold */}
          <div className="w-full text-center px-1">
            <span className="text-sm md:text-base font-extrabold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] truncate block">
              {displayName}
            </span>
            <div className="text-xs font-semibold text-amber-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] truncate mt-0.5">
              {language === 'en' ? character.nameGreek : displayRoman.split(' ')[0]}
            </div>
          </div>

          {/* Tiered Star Rating Row (Differentiated 6 / 5 / 4 stars) */}
          <div className="mt-0.5 flex items-center justify-center gap-0.5" title={`${character.starRating} Stars`}>
            {Array.from({ length: 6 }).map((_, i) => {
              const isFilled = i < character.starRating;
              return (
                <Star
                  key={i}
                  size={10}
                  className={
                    isFilled
                      ? "fill-amber-400 text-amber-500 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                      : "fill-slate-800/80 text-slate-700/60"
                  }
                />
              );
            })}
          </div>
        </div>

        {/* Inner Corner Golden Accents */}
        <div className="absolute left-0.5 top-0.5 h-1.5 w-1.5 border-l border-t border-amber-300 pointer-events-none" />
        <div className="absolute right-0.5 top-0.5 h-1.5 w-1.5 border-r border-t border-amber-300 pointer-events-none" />
        <div className="absolute bottom-0.5 left-0.5 h-1.5 w-1.5 border-b border-l border-amber-300 pointer-events-none" />
        <div className="absolute bottom-0.5 right-0.5 h-1.5 w-1.5 border-b border-r border-amber-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};
