import React from 'react';
import { MythologicalItem } from '../types';
import { ItemCard } from './ItemCard';
import { Sparkles, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ItemGridProps {
  items: MythologicalItem[];
  onSelectItem: (item: MythologicalItem) => void;
  onResetFilters: () => void;
}

export const ItemGrid: React.FC<ItemGridProps> = ({
  items,
  onSelectItem,
  onResetFilters,
}) => {
  const { t } = useLanguage();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/60 p-12 text-center">
        <Sparkles className="h-12 w-12 text-amber-400/50 mb-3" />
        <h3 className="text-lg font-bold text-slate-200">
          {t.noMatchingItems}
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          {t.noMatchingItemsDesc}
        </p>
        <button
          onClick={onResetFilters}
          className="mt-4 flex items-center gap-2 rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-amber-500/20 transition cursor-pointer"
        >
          <RotateCcw size={15} />
          <span>{t.btnResetFilter}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
        {items.map(item => (
          <ItemCard
            key={item.id}
            item={item}
            onClick={() => onSelectItem(item)}
          />
        ))}
      </div>
    </div>
  );
};

