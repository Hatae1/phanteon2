import React from 'react';
import { ItemCategory, ItemSortOption } from '../types';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';
import {
  Search,
  X,
  Sparkles,
  ArrowUpDown,
  Swords,
  Footprints,
  Crown,
  Shield,
  Gem,
} from 'lucide-react';

interface ItemFilterBarProps {
  category: ItemCategory;
  onCategoryChange: (category: ItemCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: ItemSortOption;
  onSortChange: (sortBy: ItemSortOption) => void;
  totalCount: number;
}

export const ItemFilterBar: React.FC<ItemFilterBarProps> = ({
  category,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
}) => {
  const { t } = useLanguage();

  const itemCategories: { id: ItemCategory; label: string }[] = [
    { id: 'all', label: t.itemCatAll },
    { id: 'weapon', label: t.itemCatWeapon },
    { id: 'footwear', label: t.itemCatFootwear },
    { id: 'accessory', label: t.itemCatAccessory },
    { id: 'armor', label: t.itemCatArmor },
    { id: 'relic', label: t.itemCatRelic },
  ];

  const getCategoryIcon = (id: ItemCategory) => {
    switch (id) {
      case 'weapon':
        return <Swords size={14} className="shrink-0" />;
      case 'footwear':
        return <Footprints size={14} className="shrink-0" />;
      case 'accessory':
        return <Crown size={14} className="shrink-0" />;
      case 'armor':
        return <Shield size={14} className="shrink-0" />;
      case 'relic':
        return <Gem size={14} className="shrink-0" />;
      default:
        return <Sparkles size={14} className="shrink-0" />;
    }
  };

  return (
    <div className="w-full space-y-4 rounded-xl border border-amber-500/20 bg-slate-950/70 p-4 backdrop-blur-md shadow-2xl">
      {/* Top Row: Item Category Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-500/15 pb-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {itemCategories.map(cat => {
            const isActive = category === cat.id;
            return (
              <button
                key={cat.id}
                id={`item-category-tab-${cat.id}`}
                onClick={() => {
                  soundFx.playClick();
                  onCategoryChange(cat.id);
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-amber-100 bg-gradient-to-r from-amber-600/80 to-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.4)] border border-amber-300/60'
                    : 'text-slate-300 hover:text-amber-200 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Item Count Indicator */}
        <div className="flex items-center gap-1.5 text-xs md:text-sm text-amber-300/80 font-medium whitespace-nowrap shrink-0">
          <Sparkles size={15} className="text-amber-400 shrink-0" />
          <span><strong className="text-amber-200 font-bold">{t.totalItemsCount(totalCount)}</strong></span>
        </div>
      </div>

      {/* Bottom Row: Search & Sort Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative w-full sm:w-80 shrink-0">
          <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400/70" />
          <input
            id="item-search-input"
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder={t.searchItemPlaceholder}
            className="w-full rounded-lg border border-amber-500/30 bg-slate-900/90 pl-9 pr-8 py-2 text-xs md:text-sm text-slate-100 placeholder-slate-500 transition focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center gap-1.5 bg-slate-900 border border-amber-500/30 rounded-lg px-3 py-1.5 text-xs md:text-sm whitespace-nowrap self-end sm:self-auto shrink-0">
          <ArrowUpDown size={14} className="text-amber-400 shrink-0" />
          <span className="text-slate-400 text-xs mr-1 hidden sm:inline">{t.sortLabel}</span>
          <select
            id="item-sort-select"
            value={sortBy}
            onChange={e => {
              soundFx.playClick();
              onSortChange(e.target.value as ItemSortOption);
            }}
            className="bg-transparent text-slate-200 text-xs md:text-sm focus:outline-none cursor-pointer whitespace-nowrap"
          >
            <option value="default" className="bg-slate-900 text-slate-200">{t.itemSortDefault}</option>
            <option value="stars" className="bg-slate-900 text-slate-200">{t.itemSortStars}</option>
            <option value="attack" className="bg-slate-900 text-slate-200">{t.itemSortAttack}</option>
            <option value="defense" className="bg-slate-900 text-slate-200">{t.itemSortDefense}</option>
            <option value="divinity" className="bg-slate-900 text-slate-200">{t.itemSortDivinity}</option>
            <option value="name" className="bg-slate-900 text-slate-200">{t.itemSortName}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

