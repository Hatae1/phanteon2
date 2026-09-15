import React, { useState, useMemo, useEffect, useRef } from 'react';
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
import { CrawlerContent } from './components/CrawlerContent';
import { allCharacters, filterCharacters } from './data/characters';
import { allMythologicalItems, filterItems } from './data/mythologicalItems';
import { AppModalEntry } from './types/modal';
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

  // Character Filter States
  const [category, setCategory] = useState<CharacterCategory>('all');
  const [role, setRole] = useState<CharacterRole | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('default');

  // Item Filter States
  const [itemCategory, setItemCategory] = useState<ItemCategory>('all');
  const [itemSearchQuery, setItemSearchQuery] = useState('');
  const [itemSortBy, setItemSortBy] = useState<ItemSortOption>('default');

  // Unified Modal History & Navigation Stack
  const [modalStack, setModalStack] = useState<AppModalEntry[]>([]);
  const modalStackRef = useRef<AppModalEntry[]>([]);
  modalStackRef.current = modalStack;
  const ignorePopstateRef = useRef<number>(0);

  // Active character modal in stack
  const selectedCharacter = useMemo(() => {
    for (let i = modalStack.length - 1; i >= 0; i--) {
      if (modalStack[i].type === 'character') {
        return (modalStack[i] as { type: 'character'; character: MythologicalCharacter }).character;
      }
    }
    return null;
  }, [modalStack]);

  // Active item modal in stack
  const selectedItem = useMemo(() => {
    for (let i = modalStack.length - 1; i >= 0; i--) {
      if (modalStack[i].type === 'item') {
        return (modalStack[i] as { type: 'item'; item: MythologicalItem }).item;
      }
    }
    return null;
  }, [modalStack]);

  // Is item high-res zoom lightbox currently open on top of the item modal
  const isItemZoomOpen = useMemo(() => {
    const top = modalStack[modalStack.length - 1];
    return top?.type === 'itemZoom';
  }, [modalStack]);

  // Active compare modal in stack
  const compareEntry = useMemo(() => {
    for (let i = modalStack.length - 1; i >= 0; i--) {
      if (modalStack[i].type === 'compare') {
        return modalStack[i] as { type: 'compare'; fighterA?: MythologicalCharacter; fighterB?: MythologicalCharacter };
      }
    }
    return null;
  }, [modalStack]);
  const isCompareOpen = Boolean(compareEntry);
  const compareFighterA = compareEntry?.fighterA;
  const compareFighterB = compareEntry?.fighterB;

  // Family tree modal in stack
  const isFamilyTreeOpen = useMemo(() => {
    return modalStack.some(m => m.type === 'familyTree');
  }, [modalStack]);

  // Quiz modal in stack
  const isQuizOpen = useMemo(() => {
    return modalStack.some(m => m.type === 'quiz');
  }, [modalStack]);

  // Policy modal in stack
  const policyEntry = useMemo(() => {
    for (let i = modalStack.length - 1; i >= 0; i--) {
      if (modalStack[i].type === 'policy') {
        return modalStack[i] as { type: 'policy'; tab: PolicyTab };
      }
    }
    return null;
  }, [modalStack]);
  const isPolicyOpen = Boolean(policyEntry);
  const policyTab = policyEntry?.tab ?? 'privacy';

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

  // Modal Opener Functions with Browser History Push & Clean URL Deep Linking
  const openCharacter = (character: MythologicalCharacter) => {
    soundFx.playClick();
    const url = new URL(window.location.href);
    url.searchParams.set('character', character.id);
    window.history.pushState({ modal: 'character', id: character.id }, '', url.toString());
    setModalStack(prev => [...prev, { type: 'character', character }]);
  };

  const openItem = (item: MythologicalItem) => {
    soundFx.playClick();
    const url = new URL(window.location.href);
    url.searchParams.set('item', item.id);
    window.history.pushState({ modal: 'item', id: item.id }, '', url.toString());
    setModalStack(prev => [...prev, { type: 'item', item }]);
  };

  const openItemZoom = (item: MythologicalItem) => {
    soundFx.playClick();
    window.history.pushState({ modal: 'itemZoom', id: item.id }, '');
    setModalStack(prev => [...prev, { type: 'itemZoom', item }]);
  };

  const openCompare = (fighterA?: MythologicalCharacter, fighterB?: MythologicalCharacter) => {
    soundFx.playClick();
    const url = new URL(window.location.href);
    url.searchParams.set('action', 'compare');
    window.history.pushState({ modal: 'compare' }, '', url.toString());
    setModalStack(prev => [...prev, { type: 'compare', fighterA, fighterB }]);
  };

  const openFamilyTree = () => {
    soundFx.playClick();
    const url = new URL(window.location.href);
    url.searchParams.set('action', 'familytree');
    window.history.pushState({ modal: 'familyTree' }, '', url.toString());
    setModalStack(prev => [...prev, { type: 'familyTree' }]);
  };

  const openQuiz = () => {
    soundFx.playClick();
    const url = new URL(window.location.href);
    url.searchParams.set('action', 'quiz');
    window.history.pushState({ modal: 'quiz' }, '', url.toString());
    setModalStack(prev => [...prev, { type: 'quiz' }]);
  };

  const openPolicy = (tab: PolicyTab) => {
    soundFx.playClick();
    const url = new URL(window.location.href);
    url.searchParams.set('policy', tab);
    window.history.pushState({ modal: 'policy', tab }, '', url.toString());
    setModalStack(prev => [...prev, { type: 'policy', tab }]);
  };

  // Close the active top-most modal and clean URL
  const closeTopModal = (isFromBrowserBack = false) => {
    if (modalStackRef.current.length === 0) return;

    if (!isFromBrowserBack) {
      ignorePopstateRef.current += 1;
      window.history.back();
    }
    setModalStack(prev => {
      const next = prev.slice(0, -1);
      // Clean query parameters from URL if all modals are closed
      if (next.length === 0) {
        try {
          const url = new URL(window.location.href);
          url.searchParams.delete('character');
          url.searchParams.delete('item');
          url.searchParams.delete('action');
          url.searchParams.delete('policy');
          window.history.replaceState({}, '', url.pathname + (url.search ? url.search : ''));
        } catch {
          // ignore
        }
      }
      return next;
    });
  };

  // Browser Back Button & Escape Key Handling
  useEffect(() => {
    const handlePopstate = () => {
      if (ignorePopstateRef.current > 0) {
        ignorePopstateRef.current -= 1;
        return;
      }

      if (modalStackRef.current.length > 0) {
        // Closed via browser/mobile back button - do not call history.back()
        closeTopModal(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalStackRef.current.length > 0) {
        closeTopModal(false);
      }
    };

    window.addEventListener('popstate', handlePopstate);
    window.addEventListener('keydown', handleKeyDown);

    // Support AdSense crawler deep-linking, PWA shortcuts & direct URL query routes on startup
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const tabParam = searchParams.get('tab');
      if (tabParam === 'items') {
        setMainViewTab('items');
      } else if (tabParam === 'characters') {
        setMainViewTab('characters');
      }

      const catParam = searchParams.get('category');
      if (catParam) {
        setCategory(catParam as CharacterCategory);
      }

      // Direct Character Deep Linking for SEO / AdSense
      const charParam = searchParams.get('character') || searchParams.get('id');
      if (charParam) {
        const foundChar = allCharacters.find(c => c.id === charParam);
        if (foundChar) {
          setModalStack(prev => [...prev, { type: 'character', character: foundChar }]);
        }
      }

      // Direct Item Deep Linking for SEO / AdSense
      const itemParam = searchParams.get('item');
      if (itemParam) {
        const foundItem = allMythologicalItems.find(i => i.id === itemParam);
        if (foundItem) {
          setModalStack(prev => [...prev, { type: 'item', item: foundItem }]);
        }
      }

      // Direct Policy Page Deep Linking
      const policyParam = searchParams.get('policy') as PolicyTab | null;
      if (policyParam && ['privacy', 'terms', 'about', 'contact', 'copyright'].includes(policyParam)) {
        setModalStack(prev => [...prev, { type: 'policy', tab: policyParam }]);
      }

      const actionParam = searchParams.get('action');
      if (actionParam === 'quiz') {
        openQuiz();
      } else if (actionParam === 'familytree' || actionParam === 'familyTree') {
        openFamilyTree();
      } else if (actionParam === 'compare') {
        openCompare();
      }
    } catch {
      // Ignore if URL query parsing fails
    }

    return () => {
      window.removeEventListener('popstate', handlePopstate);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lock background body scroll when any modal is open
  useEffect(() => {
    if (modalStack.length > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalStack.length]);

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
    const other = allCharacters.find(c => c.id !== character.id);
    openCompare(character, other);
  };

  // Select Character by ID (e.g. from Item detail owner/creator link)
  const handleSelectCharacterById = (characterId: string) => {
    const found = allCharacters.find(c => c.id === characterId);
    if (found) {
      openCharacter(found);
    }
  };

  // Select Item by ID (e.g. from Character detail symbol/weapon link)
  const handleOpenItemById = (itemId: string) => {
    const found = allMythologicalItems.find(i => i.id === itemId);
    if (found) {
      openItem(found);
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
          onOpenCompare={() => openCompare()}
          onOpenFamilyTree={() => openFamilyTree()}
          onOpenQuiz={() => openQuiz()}
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
                  onClick={() => openCompare()}
                  className="flex items-center gap-1.5 rounded-xl border border-amber-500/40 bg-slate-950/80 px-3.5 py-2 text-xs font-semibold text-amber-200 hover:bg-amber-500/20 transition cursor-pointer shadow"
                >
                  <Swords size={14} className="text-amber-400" />
                  <span>{t.btnClash}</span>
                </button>
                <button
                  onClick={() => openQuiz()}
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
                onSelectCharacter={char => openCharacter(char)}
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
                onSelectItem={item => openItem(item)}
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

          {/* Full Scholarly Directory & Preloaded Index for Search Engine Bots & AdSense Crawlers */}
          <CrawlerContent
            onSelectCharacter={handleSelectCharacterById}
            onSelectItem={handleOpenItemById}
            onOpenPolicy={openPolicy}
          />
        </main>

        {/* AdSense Compliant Multi-Column Footer */}
        <Footer
          onOpenPolicy={(tab) => openPolicy(tab)}
          onSelectMainTab={(tab) => setMainViewTab(tab)}
          onOpenCompare={() => openCompare()}
          onOpenFamilyTree={() => openFamilyTree()}
          onOpenQuiz={() => openQuiz()}
        />
      </div>

      {/* Policy & Legal Information Modal (Privacy Policy, Terms, About, Contact) */}
      <PolicyModal
        isOpen={isPolicyOpen}
        initialTab={policyTab}
        onClose={() => closeTopModal(false)}
      />

      {/* Character Detail Modal (신화적 배경 이야기 상세 페이지) */}
      <CharacterDetailModal
        character={selectedCharacter}
        onClose={() => closeTopModal(false)}
        onSelectRelatedCharacter={char => openCharacter(char)}
        onOpenCompareWith={handleOpenCompareWith}
        onOpenItemDetail={handleOpenItemById}
      />

      {/* Item Detail Modal (신화 성물 & 아이템 상세 페이지) */}
      <ItemDetailModal
        item={selectedItem}
        isZoomOpen={isItemZoomOpen}
        onOpenZoom={() => {
          if (selectedItem) openItemZoom(selectedItem);
        }}
        onCloseZoom={() => closeTopModal(false)}
        onClose={() => closeTopModal(false)}
        onSelectCharacter={handleSelectCharacterById}
      />

      {/* Stat Comparison Modal (신들의 대결 & 능력치 비교) */}
      <StatComparisonModal
        isOpen={isCompareOpen}
        onClose={() => closeTopModal(false)}
        initialCharacterA={compareFighterA}
        initialCharacterB={compareFighterB}
      />

      {/* Family Tree Modal (신화 계보도) */}
      <FamilyTreeModal
        isOpen={isFamilyTreeOpen}
        onClose={() => closeTopModal(false)}
        onSelectCharacter={char => openCharacter(char)}
      />

      {/* Mythology Quiz Modal (신화 퀴즈) */}
      <MythologyQuizModal
        isOpen={isQuizOpen}
        onClose={() => closeTopModal(false)}
      />
    </div>
  );
}
