import React from 'react';
import { MythologicalCharacter } from '../types';
import { CharacterCard } from './CharacterCard';
import { Sparkles, SearchX } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroGridProps {
  characters: MythologicalCharacter[];
  onSelectCharacter: (character: MythologicalCharacter) => void;
  onResetFilters?: () => void;
}

export const HeroGrid: React.FC<HeroGridProps> = ({
  characters,
  onSelectCharacter,
  onResetFilters,
}) => {
  const { t } = useLanguage();

  if (characters.length === 0) {
    return (
      <div className="flex min-h-[360px] w-full flex-col items-center justify-center rounded-2xl border border-amber-500/20 bg-slate-950/60 p-8 text-center backdrop-blur-sm">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 ring-2 ring-amber-500/30">
          <SearchX className="h-8 w-8 text-amber-400/80" />
        </div>
        <h3 className="mt-4 text-base md:text-lg font-bold text-white">{t.noMatchingCharacters}</h3>
        <p className="mt-1 text-xs md:text-sm text-slate-400 max-w-md">
          {t.noMatchingCharactersDesc}
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="mt-4 rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-amber-400 cursor-pointer shadow-md"
          >
            {t.btnResetFilter}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* 5-Column Roster Grid (Matching Screenshot Layout) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4.5">
        {characters.map((char, index) => (
          <CharacterCard
            key={char.id}
            character={char}
            onClick={onSelectCharacter}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

