import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { FilterBar } from './components/FilterBar';
import { HeroGrid } from './components/HeroGrid';
import { CharacterDetailModal } from './components/CharacterDetailModal';
import { StatComparisonModal } from './components/StatComparisonModal';
import { MythologyQuizModal } from './components/MythologyQuizModal';
import { FamilyTreeModal } from './components/FamilyTreeModal';
import { ItemFilterBar } from './components/ItemFilterBar';
import { ItemGrid } from './components/ItemGrid';
import { ItemDetailModal } from './components/ItemDetailModal';
import { MythologyGuideSection } from './components/MythologyGuideSection';
import { Footer } from './components/Footer';
import { PolicyModal, PolicyTab } from './components/PolicyModal';
import { allCharacters, filterCharacters } from './data/characters';
import { allMythologicalItems, filterItems } from './data/mythologicalItems';
import {
  MythologicalCharacter,
  CharacterCategory,
  CharacterRole,
  SortOption,
  MythologicalItem,
  ItemCategory,
  ItemSortOption,
} from './types';
import { soundFx } from './utils/audio';
import { Sparkles, Crown, Swords, BookOpen, ShieldCheck, Zap, User } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { language, t } = useLanguage();

  // Main View Tab: Characters vs Items
  const [mainViewTab, setMainViewTab] = useState<'characters' | 'items'>('characters');

  // Character States
  const [selectedCharacter, setSelectedCharacter] = useState<MythologicalCharacter | null>(null);
  const [category, setCategory] = useState<CharacterCategory>('all');
  const [role, setRole] = useState<CharacterRole | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  // Item States
  const [selectedItem, setSelectedItem] = useState<MythologicalItem | null>(null);
  const [itemCategory, setItemCategory] = useState<ItemCategory>('all');
  const [itemSearchQuery, setItemSearchQuery] = useState('');
  const [itemSortBy, setItemSortBy] = useState<ItemSortOption>('default');

  // Modals
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [compareFighterA, setCompareFighterA] = useState<MythologicalCharacter | undefined>(undefined);
  const [compareFighterB, setCompareFighterB] = useState<MythologicalCharacter | undefined>(undefined);
  const [isFamilyTreeOpen, setIsFamilyTreeOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [policyTab, setPolicyTab] = useState<PolicyTab>('privacy');
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Sound toggle
  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    soundFx.setEnabled(nextVal);
    if (nextVal) {
      soundFx.playClick();
    }
  };

  // Filtered & Sorted Characters
  const displayedCharacters = useMemo(() => {
    const filtered = filterCharacters(allCharacters, category, role, searchQuery);

    if (sortBy === 'default') {
      return filtered;
    }

    return [...filtered].sort((a, b) => {
      if (sortBy === 'stars') return b.starRating - a.starRating;
      if (sortBy === 'power') return b.stats.power - a.stats.power;
      if (sortBy === 'wisdom') return b.stats.wisdom - a.stats.wisdom;
      if (sortBy === 'agility') return b.stats.agility - a.stats.agility;
      if (sortBy === 'defense') return b.stats.defense - a.stats.defense;
      if (sortBy === 'name') {
        if (language === 'en') {
          return (a.nameEn || a.nameKo).localeCompare(b.nameEn || b.nameKo);
        }
        return a.nameKo.localeCompare(b.nameKo, 'ko');
      }
      return 0;
    });
  }, [category, role, searchQuery, sortBy, language]);

  // Filtered & Sorted Items
  const displayedItems = useMemo(() => {
    const filtered = filterItems(allMythologicalItems, itemCategory, itemSearchQuery);

    if (itemSortBy === 'default') {
      return filtered;
    }

    return [...filtered].sort((a, b) => {
      if (itemSortBy === 'stars') return b.starRating - a.starRating;
      if (itemSortBy === 'attack') return b.stats.attack - a.stats.attack;
      if (itemSortBy === 'defense') return b.stats.defense - a.stats.defense;
      if (itemSortBy === 'divinity') return b.stats.divinity - a.stats.divinity;
      if (itemSortBy === 'name') {
        if (language === 'en') {
          return (a.nameEn || a.nameKo).localeCompare(b.nameEn || b.nameKo);
        }
        return a.nameKo.localeCompare(b.nameKo, 'ko');
      }
      return 0;
    });
  }, [itemCategory, itemSearchQuery, itemSortBy, language]);

  // Open Compare from Detail
  const handleOpenCompareWith = (character: MythologicalCharacter) => {
    setCompareFighterA(character);
    // pick second character that is not the same
    const other = allCharacters.find(c => c.id !== character.id);
    setCompareFighterB(other);
    setSelectedCharacter(null);
    setIsCompareOpen(true);
  };

  // Select Character by ID (e.g. from Item detail owner/creator link)
  const handleSelectCharacterById = (characterId: string) => {
    const found = allCharacters.find(c => c.id === characterId);
    if (found) {
      setSelectedCharacter(found);
      setSelectedItem(null);
    }
  };

  // Select Item by ID (e.g. from Character detail symbol/weapon link)
  const handleOpenItemById = (itemId: string) => {
    const found = allMythologicalItems.find(i => i.id === itemId);
    if (found) {
      setSelectedItem(found);
      setSelectedCharacter(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* Mystical Olympus Constellation & Starfield Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)),
                              radial-gradient(1.5px 1.5px at 40px 70px, #fbbf24, rgba(0,0,0,0)),
                              radial-gradient(1px 1px at 90px 40px, #e2e8f0, rgba(0,0,0,0)),
                              radial-gradient(2px 2px at 160px 120px, #38bdf8, rgba(0,0,0,0))`,
            backgroundSize: '250px 250px',
          }}
        />
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* Main App Container */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Navigation Bar */}
        <Navbar
          onOpenCompare={() => {
            setCompareFighterA(undefined);
            setCompareFighterB(undefined);
            setIsCompareOpen(true);
          }}
          onOpenFamilyTree={() => setIsFamilyTreeOpen(true)}
          onOpenQuiz={() => setIsQuizOpen(true)}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
        />

        {/* Hero Roster Introduction & Quick Stats */}
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8 space-y-6">
          {/* Subtle Mythological Intro Banner */}
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-amber-950/40 p-5 md:p-6 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[11px] font-bold text-amber-300 border border-amber-500/40">
                    <Crown size={12} /> {t.bannerBadge}
                  </span>
                  <span className="text-xs text-slate-400">{t.bannerSubBadge}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-serif">
                  {t.bannerTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {t.bannerDesc}
                </p>
              </div>

              {/* Quick Feature Badges */}
              <div className="flex items-center gap-2 flex-wrap md:flex-nowrap">
                <button
                  onClick={() => setIsCompareOpen(true)}
                  className="flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-slate-950/80 px-3.5 py-2 text-xs font-semibold text-amber-200 hover:bg-amber-500/20 transition cursor-pointer shadow"
                >
                  <Swords size={14} className="text-amber-400" />
                  <span>{t.btnClash}</span>
                </button>
                <button
                  onClick={() => setIsQuizOpen(true)}
                  className="flex items-center gap-1.5 rounded-xl border border-purple-500/40 bg-slate-950/80 px-3.5 py-2 text-xs font-semibold text-purple-200 hover:bg-purple-500/20 transition cursor-pointer shadow"
                >
                  <BookOpen size={14} className="text-purple-400" />
                  <span>{t.btnQuiz}</span>
                </button>
              </div>
            </div>
          </div>

          {/* MAIN ENCYCLOPEDIA SWITCHER TABS (인물 도감 vs 성물 & 아이템 도감) */}
          <div className="flex items-center justify-center p-1 rounded-2xl bg-slate-900/90 border border-amber-500/30 max-w-xl mx-auto shadow-xl">
            <button
              id="main-tab-characters"
              onClick={() => {
                soundFx.playClick();
                setMainViewTab('characters');
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm sm:text-base font-extrabold transition-all duration-200 cursor-pointer ${
                mainViewTab === 'characters'
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <User size={18} />
              <span>{t.tabCharacters} ({allCharacters.length})</span>
            </button>

            <button
              id="main-tab-items"
              onClick={() => {
                soundFx.playClick();
                setMainViewTab('items');
              }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm sm:text-base font-extrabold transition-all duration-200 cursor-pointer ${
                mainViewTab === 'items'
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Zap size={18} />
              <span>{t.tabItems} ({allMythologicalItems.length})</span>
            </button>
          </div>

          {/* TAB 1: CHARACTERS VIEW */}
          {mainViewTab === 'characters' && (
            <div className="space-y-6">
              {/* Filter and Search Bar */}
              <FilterBar
                category={category}
                onCategoryChange={setCategory}
                role={role}
                onRoleChange={setRole}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortBy={sortBy}
                onSortChange={setSortBy}
                totalCount={displayedCharacters.length}
              />

              {/* 5-Column Character Roster */}
              <HeroGrid
                characters={displayedCharacters}
                onSelectCharacter={char => setSelectedCharacter(char)}
                onResetFilters={() => {
                  setCategory('all');
                  setRole('all');
                  setSearchQuery('');
                  setSortBy('default');
                }}
              />
            </div>
          )}

          {/* TAB 2: MYTHOLOGICAL ITEMS VIEW */}
          {mainViewTab === 'items' && (
            <div className="space-y-6">
              {/* Item Filter Bar */}
              <ItemFilterBar
                category={itemCategory}
                onCategoryChange={setItemCategory}
                searchQuery={itemSearchQuery}
                onSearchChange={setItemSearchQuery}
                sortBy={itemSortBy}
                onSortChange={setItemSortBy}
                totalCount={displayedItems.length}
              />

              {/* Item Card Grid */}
              <ItemGrid
                items={displayedItems}
                onSelectItem={item => setSelectedItem(item)}
                onResetFilters={() => {
                  setItemCategory('all');
                  setItemSearchQuery('');
                  setItemSortBy('default');
                }}
              />
            </div>
          )}

          {/* Academic Mythology Guide Section (Crawler & AdSense Content Rich Section) */}
          <MythologyGuideSection />
        </main>

        {/* AdSense Compliant Multi-Column Footer */}
        <Footer
          onOpenPolicy={(tab) => {
            setPolicyTab(tab);
            setIsPolicyOpen(true);
          }}
          onSelectMainTab={(tab) => setMainViewTab(tab)}
          onOpenCompare={() => setIsCompareOpen(true)}
          onOpenFamilyTree={() => setIsFamilyTreeOpen(true)}
          onOpenQuiz={() => setIsQuizOpen(true)}
        />
      </div>

      {/* Policy & Legal Information Modal (Privacy Policy, Terms, About, Contact) */}
      <PolicyModal
        isOpen={isPolicyOpen}
        initialTab={policyTab}
        onClose={() => setIsPolicyOpen(false)}
      />

      {/* Character Detail Modal (신화적 배경 이야기 상세 페이지) */}
      <CharacterDetailModal
        character={selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
        onSelectRelatedCharacter={char => setSelectedCharacter(char)}
        onOpenCompareWith={handleOpenCompareWith}
        onOpenItemDetail={handleOpenItemById}
      />

      {/* Item Detail Modal (신화 성물 & 아이템 상세 페이지) */}
      <ItemDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onSelectCharacter={handleSelectCharacterById}
      />

      {/* Stat Comparison Modal (신들의 대결 & 능력치 비교) */}
      <StatComparisonModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        initialCharacterA={compareFighterA}
        initialCharacterB={compareFighterB}
      />

      {/* Family Tree Modal (신화 계보도) */}
      <FamilyTreeModal
        isOpen={isFamilyTreeOpen}
        onClose={() => setIsFamilyTreeOpen(false)}
        onSelectCharacter={char => setSelectedCharacter(char)}
      />

      {/* Mythology Quiz Modal (신화 퀴즈) */}
      <MythologyQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />
    </div>
  );
}
