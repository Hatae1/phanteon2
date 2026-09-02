import React, { useState } from 'react';
import { Swords, Network, HelpCircle, Volume2, VolumeX, Globe, Share2, Check } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenCompare: () => void;
  onOpenFamilyTree: () => void;
  onOpenQuiz: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCompare,
  onOpenFamilyTree,
  onOpenQuiz,
  soundEnabled,
  onToggleSound,
}) => {
  const { language, setLanguage, toggleLanguage, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    soundFx.playClick();
    const shareUrl = window.location.href;
    const shareData = {
      title: `${t.appTitle} ${t.appTitleHighlight}`,
      text: t.appSubtitle,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // User canceled or fallback to clipboard
      }
    }

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // fallback
      }
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-amber-500/30 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex flex-col sm:flex-row max-w-7xl items-start sm:items-center justify-between px-3 py-2.5 sm:px-6 sm:py-3 lg:px-8 gap-2 sm:gap-4">
        {/* Left: Brand Icon & Title */}
        <div className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-2.5 sm:gap-3">
          <div className="flex items-center gap-2.5">
            <img
              src="/favicon.svg"
              alt="Pantheon Codex Icon"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg shadow-md border border-amber-500/40 p-1 bg-gradient-to-b from-slate-900 to-slate-950 shrink-0 hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-base sm:text-lg md:text-xl font-bold tracking-tight text-white drop-shadow">
                  {t.appTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">{t.appTitleHighlight}</span>
                </h1>
                <span className="hidden sm:inline-block rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-400 border border-amber-500/30">
                  {t.pantheonBadge}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium tracking-wider text-slate-400 uppercase">
                {t.appSubtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Right / Bottom on Mobile: Interactive Navigation Modals & Controls */}
        <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-1.5 sm:gap-2 overflow-x-auto pb-0.5 sm:pb-0">
          {/* Compare Button */}
          <button
            id="nav-compare-button"
            onClick={() => {
              soundFx.playClick();
              onOpenCompare();
            }}
            className="flex flex-1 sm:flex-initial items-center justify-center gap-1 sm:gap-1.5 rounded-lg border border-amber-500/40 bg-slate-900/90 px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-amber-200 transition hover:bg-amber-500/20 hover:border-amber-400 cursor-pointer shadow-sm shrink-0 whitespace-nowrap active:scale-95"
            title={t.navCompare}
          >
            <Swords size={13} className="text-amber-400 shrink-0" />
            <span className="sm:hidden">{t.navCompareShort}</span>
            <span className="hidden sm:inline">{t.navCompare}</span>
          </button>

          {/* Family Tree / Hierarchy Button */}
          <button
            id="nav-familytree-button"
            onClick={() => {
              soundFx.playClick();
              onOpenFamilyTree();
            }}
            className="flex flex-1 sm:flex-initial items-center justify-center gap-1 sm:gap-1.5 rounded-lg border border-slate-700 bg-slate-900/90 px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white cursor-pointer shrink-0 whitespace-nowrap active:scale-95"
            title={t.navFamilyTree}
          >
            <Network size={13} className="text-cyan-400 shrink-0" />
            <span className="sm:hidden">{t.navFamilyTreeShort}</span>
            <span className="hidden sm:inline">{t.navFamilyTree}</span>
          </button>

          {/* Quiz Button */}
          <button
            id="nav-quiz-button"
            onClick={() => {
              soundFx.playClick();
              onOpenQuiz();
            }}
            className="flex flex-1 sm:flex-initial items-center justify-center gap-1 sm:gap-1.5 rounded-lg border border-slate-700 bg-slate-900/90 px-2 sm:px-3 py-1.5 text-[11px] sm:text-xs font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white cursor-pointer shrink-0 whitespace-nowrap active:scale-95"
            title={t.navQuiz}
          >
            <HelpCircle size={13} className="text-purple-400 shrink-0" />
            <span className="sm:hidden">{t.navQuizShort}</span>
            <span className="hidden sm:inline">{t.navQuiz}</span>
          </button>

          {/* URL Share Button */}
          <button
            id="nav-share-button"
            onClick={handleShare}
            className={`flex items-center justify-center gap-1 sm:gap-1.5 rounded-lg border px-2 sm:px-2.5 py-1.5 text-[11px] sm:text-xs font-medium transition cursor-pointer shrink-0 whitespace-nowrap active:scale-95 ${
              copied
                ? 'border-emerald-500/60 bg-emerald-950/70 text-emerald-300'
                : 'border-slate-700 bg-slate-900/90 text-slate-200 hover:bg-slate-800 hover:text-white'
            }`}
            title={copied ? t.navShareCopied : t.navShare}
          >
            {copied ? (
              <Check size={13} className="text-emerald-400 shrink-0" />
            ) : (
              <Share2 size={13} className="text-amber-400 shrink-0" />
            )}
            <span className="hidden sm:inline">{copied ? t.navShareCopied : t.navShare}</span>
          </button>

          {/* Language Switcher Selector (KO / EN) */}
          <div
            id="nav-language-selector"
            className="flex items-center rounded-lg border border-amber-500/30 bg-slate-900 p-0.5 shrink-0"
            title={t.languageSelect}
          >
            <button
              onClick={() => {
                if (language !== 'ko') {
                  soundFx.playClick();
                  setLanguage('ko');
                }
              }}
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-[11px] sm:text-xs font-bold transition cursor-pointer ${
                language === 'ko'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>🇰🇷</span>
              <span>KO</span>
            </button>
            <button
              onClick={() => {
                if (language !== 'en') {
                  soundFx.playClick();
                  setLanguage('en');
                }
              }}
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-[11px] sm:text-xs font-bold transition cursor-pointer ${
                language === 'en'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>🇺🇸</span>
              <span>EN</span>
            </button>
          </div>

          {/* Audio Sound FX Toggle */}
          <button
            id="nav-audio-toggle"
            onClick={onToggleSound}
            className={`flex h-7 sm:h-8 w-7 sm:w-8 shrink-0 items-center justify-center rounded-lg border transition cursor-pointer active:scale-95 ${
              soundEnabled
                ? 'border-amber-500/50 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20'
                : 'border-slate-800 bg-slate-900 text-slate-500 hover:text-slate-300'
            }`}
            title={soundEnabled ? t.soundOn : t.soundOff}
          >
            {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </button>
        </div>
      </div>
    </header>
  );
};

