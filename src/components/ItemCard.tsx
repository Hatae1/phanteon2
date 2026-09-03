import React from 'react';
import { MythologicalItem } from '../types';
import { soundFx } from '../utils/audio';
import { Star, User, Hammer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedItem } from '../data/translations';

interface ItemCardProps {
  item: MythologicalItem;
  onClick: () => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item: rawItem, onClick }) => {
  const { language, getItemName, t } = useLanguage();
  const isEn = language === 'en';
  const item = getLocalizedItem(rawItem, isEn);

  const getCategoryBadgeColor = (cat: string) => {
    switch (cat) {
      case 'weapon':
        return 'bg-red-500/20 text-red-300 border-red-500/40';
      case 'footwear':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'accessory':
        return 'bg-pink-500/20 text-pink-300 border-pink-500/40';
      case 'armor':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'relic':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'weapon': return t.itemCatWeapon;
      case 'footwear': return t.itemCatFootwear;
      case 'accessory': return t.itemCatAccessory;
      case 'armor': return t.itemCatArmor;
      case 'relic': return t.itemCatRelic;
      default: return item.categoryName;
    }
  };

  const displayName = isEn ? item.nameEn : item.nameKo;
  const subName = isEn ? item.nameGreek : item.nameEn;

  return (
    <div
      id={`item-card-${item.id}`}
      onMouseEnter={() => {
        soundFx.playHover();
      }}
      onClick={() => {
        soundFx.playSelect();
        onClick();
      }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/80 hover:shadow-[0_8px_30px_rgba(245,158,11,0.25)] cursor-pointer backdrop-blur-sm"
      style={{
        boxShadow: `0 4px 20px -2px ${item.glowColor || 'rgba(0,0,0,0.5)'}`,
      }}
    >
      {/* Top Banner & Image Section */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-950 border border-slate-800/80 group-hover:border-amber-400/40 transition">
        <img
          src={item.imageUrl}
          alt={displayName}
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Top Badges: Category & Stars */}
        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between">
          <span
            className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold border backdrop-blur-md ${getCategoryBadgeColor(
              item.category
            )}`}
          >
            {getCategoryLabel(item.category)}
          </span>
          <div className="flex items-center gap-0.5 rounded-full bg-slate-950/80 px-2 py-0.5 border border-amber-500/40">
            {Array.from({ length: item.starRating }).map((_, i) => (
              <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Bottom Greek name tag */}
        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between text-xs">
          <span className="text-[11px] font-medium text-amber-300/90 drop-shadow">
            {item.subType}
          </span>
          <span className="font-serif italic text-[11px] text-slate-300 drop-shadow">
            {item.nameGreek}
          </span>
        </div>
      </div>

      {/* Card Info Section */}
      <div className="mt-3.5 space-y-2.5">
        <div>
          <h3 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
            {displayName}
          </h3>
          <p className={`text-xs truncate mt-0.5 ${isEn ? 'text-amber-300/85 font-serif italic' : 'text-slate-400 font-medium'}`}>
            {subName}
          </p>
        </div>

        {/* Summary */}
        <p className="text-xs text-slate-200 leading-relaxed font-normal line-clamp-2">
          {item.summary}
        </p>

        {/* Owner & Creator Tag */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
          <div className="flex items-center gap-1 truncate max-w-[50%]">
            <User size={12} className="text-amber-400 shrink-0" />
            <span className="truncate">{item.owner.split(' ')[0]}</span>
          </div>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-1 truncate max-w-[50%]">
            <Hammer size={12} className="text-amber-400 shrink-0" />
            <span className="truncate">{item.creator.split(' ')[0]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

