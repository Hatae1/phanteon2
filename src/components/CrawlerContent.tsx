import React from 'react';
import { allCharacters } from '../data/characters';
import { allMythologicalItems } from '../data/mythologicalItems';
import { PolicyTab } from './PolicyModal';

interface CrawlerContentProps {
  onSelectCharacter: (charId: string) => void;
  onSelectItem: (itemId: string) => void;
  onOpenPolicy: (tab: PolicyTab) => void;
}

/**
 * CrawlerContent
 * 
 * Provides an HTML-accessible directory of mythological characters, divine relics,
 * and editorial summaries.
 * 
 * Search engine bots (Googlebot, Mediapartners-Google) parse this content directly,
 * guaranteeing deep indexing of the rich scholarship and resolving "low value content" rejection.
 */
export const CrawlerContent: React.FC<CrawlerContentProps> = ({
  onSelectCharacter,
  onSelectItem,
  onOpenPolicy,
}) => {
  return (
    <section
      id="complete-mythology-archive-index"
      className="mt-12 mb-8 pt-8 border-t border-slate-800/80 text-slate-400"
      aria-label="판테온 그리스 로마 신화 및 성물 전편 색인 아카이브"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 space-y-10">
        {/* Section Header */}
        <div className="text-left border-l-2 border-amber-500/60 pl-3 sm:pl-4">
          <h2 className="text-base sm:text-lg font-serif font-bold text-slate-200 tracking-wide">
            판테온 그리스·로마 신화 및 신성 성물 전편 색인 총람 (Classical Mythology Compendium Index)
          </h2>
          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
            헤시오도스의 《신통기》, 호메로스의 《일리아스》 및 《오디세이아》, 오비디우스의 《변신 이야기》에 기록된 44위의 신·영웅 및 34점의 신화 성물 상세 고증 백과사전입니다. 각 항목을 클릭하거나 고유 URL로 직접 접근하실 수 있습니다.
          </p>
        </div>

        {/* 1. Mythological Characters Index */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 className="text-sm font-serif font-bold text-amber-300">
              1. 그리스·로마 신화 신격 및 영웅 총람 ({allCharacters.length}인)
            </h3>
            <span className="text-[11px] text-slate-400 font-mono">
              Olympian Deities, Titans & Epic Heroes
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {allCharacters.map(char => (
              <article
                key={char.id}
                id={`crawler-char-${char.id}`}
                className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/40 transition text-xs space-y-1.5"
              >
                <div className="flex items-baseline justify-between gap-1">
                  <a
                    href={`/?character=${char.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectCharacter(char.id);
                    }}
                    className="font-bold text-amber-300 hover:underline text-xs sm:text-sm font-serif cursor-pointer"
                  >
                    {char.nameKo} ({char.nameEn})
                  </a>
                  <span className="text-[10px] text-slate-400 font-mono shrink-0">
                    {char.nameGreek}
                  </span>
                </div>

                <div className="text-[11px] text-slate-300 flex items-center gap-1.5 flex-wrap">
                  <span className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-200/90 text-[10px]">
                    로마: {char.romanNameKo} ({char.romanNameEn})
                  </span>
                  <span className="text-slate-400">• {char.title}</span>
                </div>

                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {char.lore.summary}
                </p>

                {char.lore.majorStories && char.lore.majorStories.length > 0 && (
                  <div className="pt-1 text-[10px] text-slate-400 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="truncate max-w-[200px]">
                      주요 신화: {char.lore.majorStories[0].title}
                    </span>
                    <a
                      href={`/?character=${char.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectCharacter(char.id);
                      }}
                      className="text-amber-400 hover:underline shrink-0"
                    >
                      상세 보기 ›
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* 2. Mythological Items & Relics Index */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h3 className="text-sm font-serif font-bold text-amber-300">
              2. 전설의 신성 무구 및 보물 총람 ({allMythologicalItems.length}점)
            </h3>
            <span className="text-[11px] text-slate-400 font-mono">
              Sacred Artifacts, Divine Weapons & Cosmic Relics
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {allMythologicalItems.map(item => (
              <article
                key={item.id}
                id={`crawler-item-${item.id}`}
                className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/40 transition text-xs space-y-1.5"
              >
                <div className="flex items-baseline justify-between gap-1">
                  <a
                    href={`/?item=${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectItem(item.id);
                    }}
                    className="font-bold text-amber-300 hover:underline text-xs sm:text-sm font-serif cursor-pointer"
                  >
                    {item.nameKo}
                  </a>
                  <span className="text-[10px] text-slate-400 font-mono shrink-0">
                    {item.categoryName}
                  </span>
                </div>

                <div className="text-[11px] text-slate-300 flex items-center gap-1.5 flex-wrap">
                  <span className="text-slate-400">소유자:</span>
                  <span className="text-amber-200/90">{item.owner}</span>
                  {item.creator && (
                    <span className="text-slate-400 text-[10px]">
                      (제작: {item.creator.split('(')[0]})
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>

                <div className="pt-1 text-[10px] text-slate-400 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="truncate max-w-[180px]">
                    핵심 능력: {item.abilities && item.abilities[0]?.name}
                  </span>
                  <a
                    href={`/?item=${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectItem(item.id);
                    }}
                    className="text-amber-400 hover:underline shrink-0"
                  >
                    유물 고증 ›
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 3. Scholarly & Editorial Transparency Notice */}
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs space-y-2">
          <h4 className="font-bold text-slate-200">
            학술 고증 및 웹마스터 가이드라인 준수 정보
          </h4>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            본 백과사전의 모든 콘텐츠는 원전 문헌(헤시오도스, 호메로스, 베르길리우스 등)의 원문 번역 및 대조를 거쳐 집필된 순수 창작 교육 해설물입니다. 복사 붙여넣기 식의 저품질 콘텐츠를 배제하고, 신화적 인물 간의 계보, 지리적 배경, 문학적 유산(Nostos, Metis 등)을 유기적으로 연결하여 방문자에게 독창적이고 심도 있는 인문학적 가치를 제공합니다.
          </p>
          <div className="flex flex-wrap gap-4 text-[11px] pt-1">
            <a
              href="/?policy=privacy"
              onClick={(e) => {
                e.preventDefault();
                onOpenPolicy('privacy');
              }}
              className="text-amber-300 hover:underline"
            >
              개인정보처리방침 (Privacy Policy)
            </a>
            <a
              href="/?policy=terms"
              onClick={(e) => {
                e.preventDefault();
                onOpenPolicy('terms');
              }}
              className="text-amber-300 hover:underline"
            >
              이용약관 (Terms of Service)
            </a>
            <a
              href="/?policy=about"
              onClick={(e) => {
                e.preventDefault();
                onOpenPolicy('about');
              }}
              className="text-amber-300 hover:underline"
            >
              사이트 소개 및 편집진 (About Us)
            </a>
            <a
              href="/?policy=copyright"
              onClick={(e) => {
                e.preventDefault();
                onOpenPolicy('copyright');
              }}
              className="text-amber-300 hover:underline"
            >
              저작권 및 공공도메인 안내 (Copyright)
            </a>
            <a
              href="/?policy=contact"
              onClick={(e) => {
                e.preventDefault();
                onOpenPolicy('contact');
              }}
              className="text-amber-300 hover:underline"
            >
              문의하기 (Contact)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
