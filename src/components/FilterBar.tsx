import React from 'react';
import { Search, Sparkles, Filter, X, ArrowUpDown } from 'lucide-react';
import { CharacterCategory, CharacterRole, SortOption } from '../types';
import { RoleIcon, getRoleLabel } from './RoleIcon';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface FilterBarProps {
  category: CharacterCategory;
  onCategoryChange: (category: CharacterCategory) => void;
  role: CharacterRole | 'all';
  onRoleChange: (role: CharacterRole | 'all') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  totalCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  category,
  onCategoryChange,
  role,
  onRoleChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
}) => {
  const { language, t } = useLanguage();

  const CATEGORIES: { id: CharacterCategory; label: string }[] = [
    { id: 'all', label: t.catAll },
    { id: 'olympian', label: t.catOlympian },
    { id: 'underworld', label: t.catUnderworld },
    { id: 'titan', label: t.catTitan },
    { id: 'demigod', label: t.catDemigod },
    { id: 'hero', label: t.catHero },
    { id: 'monster', label: t.catMonster },
    { id: 'sacred_beast', label: t.catSacredBeast },
  ];

  const ROLES: { id: CharacterRole | 'all'; label: string }[] = [
    { id: 'all', label: t.roleAll },
    { id: 'warrior', label: language === 'en' ? 'Warrior' : '전사 (Warrior)' },
    { id: 'archer', label: language === 'en' ? 'Archer' : '원거리 (Archer)' },
    { id: 'guardian', label: language === 'en' ? 'Guardian' : '수호자 (Guardian)' },
    { id: 'mage', label: language === 'en' ? 'Mage' : '권능/마법 (Mage)' },
    { id: 'support', label: language === 'en' ? 'Support' : '보조/생명 (Support)' },
  ];

  return (
    <div className="w-full space-y-4 rounded-xl border border-amber-500/20 bg-slate-950/70 p-4 backdrop-blur-md shadow-2xl">
      {/* Top Row: Category Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-500/15 pb-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {CATEGORIES.map(cat => {
            const isActive = category === cat.id;
            return (
              <button
                key={cat.id}
                id={`category-tab-${cat.id}`}
                onClick={() => {
                  soundFx.playClick();
                  onCategoryChange(cat.id);
                }}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-amber-100 bg-gradient-to-r from-amber-600/80 to-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.4)] border border-amber-300/60'
                    : 'text-slate-300 hover:text-amber-200 hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Character Count Indicator */}
        <div className="flex items-center gap-1.5 text-xs md:text-sm text-amber-300/80 font-medium whitespace-nowrap shrink-0">
          <Sparkles size={15} className="text-amber-400 shrink-0" />
          <span><strong className="text-amber-200 font-bold">{t.totalCharactersCount(totalCount)}</strong></span>
        </div>
      </div>

      {/* Bottom Row: Search, Role Filter, Sort By */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400/70" />
          <input
            id="pantheon-search-input"
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder={t.searchCharPlaceholder}
            className="w-full rounded-lg border border-amber-500/30 bg-slate-900/90 py-2 pl-9 pr-8 text-xs md:text-sm text-slate-100 placeholder-slate-400 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/50"
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

        {/* Controls: Role filter pills & Sort dropdown */}
        <div className="flex items-center gap-2.5 w-full lg:w-auto justify-between lg:justify-end overflow-x-auto pb-1 lg:pb-0">
          {/* Role Filter Chips */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-xs md:text-sm text-slate-300 font-semibold flex items-center gap-1.5 whitespace-nowrap shrink-0 mr-0.5">
              <Filter size={14} className="text-amber-400" /> {t.filterClass}
            </span>
            {ROLES.map(r => {
              const isSelected = role === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => {
                    soundFx.playClick();
                    onRoleChange(r.id);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-700/60'
                  }`}
                >
                  {r.id !== 'all' && <RoleIcon role={r.id} size={14} />}
                  <span>{r.id === 'all' ? (language === 'en' ? 'All' : '전체') : getRoleLabel(r.id, language)}</span>
                </button>
              );
            })}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-1.5 bg-slate-900 border border-amber-500/30 rounded-lg px-3 py-1.5 text-xs md:text-sm whitespace-nowrap shrink-0">
            <ArrowUpDown size={14} className="text-amber-400 shrink-0" />
            <select
              id="pantheon-sort-select"
              value={sortBy}
              onChange={e => {
                soundFx.playClick();
                onSortChange(e.target.value as SortOption);
              }}
              className="bg-transparent text-slate-200 text-xs md:text-sm focus:outline-none cursor-pointer whitespace-nowrap"
            >
              <option value="default" className="bg-slate-900 text-slate-200">{t.sortDefault}</option>
              <option value="stars" className="bg-slate-900 text-slate-200">{t.sortStars}</option>
              <option value="power" className="bg-slate-900 text-slate-200">{t.sortPower}</option>
              <option value="wisdom" className="bg-slate-900 text-slate-200">{t.sortWisdom}</option>
              <option value="agility" className="bg-slate-900 text-slate-200">{t.sortAgility}</option>
              <option value="defense" className="bg-slate-900 text-slate-200">{t.sortDefense}</option>
              <option value="name" className="bg-slate-900 text-slate-200">{t.sortName}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

