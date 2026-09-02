import React from 'react';
import { ShieldCheck, Mail, BookOpen, Compass, Award, ExternalLink, HelpCircle, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { PolicyTab } from './PolicyModal';
import { soundFx } from '../utils/audio';

interface FooterProps {
  onOpenPolicy: (tab: PolicyTab) => void;
  onSelectMainTab: (tab: 'characters' | 'items') => void;
  onOpenCompare: () => void;
  onOpenFamilyTree: () => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPolicy,
  onSelectMainTab,
  onOpenCompare,
  onOpenFamilyTree,
  onOpenQuiz,
}) => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const handleOpenPolicyTab = (tab: PolicyTab) => {
    soundFx.play('click');
    onOpenPolicy(tab);
  };

  return (
    <footer className="border-t border-amber-500/20 bg-slate-950/95 text-slate-400 text-xs mt-16 backdrop-blur-md">
      {/* Top Footer Section: Multi-column link layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand & Purpose */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="font-serif font-bold text-base text-slate-100 tracking-wide">
                {isEn ? 'Pantheon Codex' : '판테온 신화 대도감'}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {isEn
                ? 'An interactive digital encyclopedia dedicated to the preservation, exploration, and artistic appreciation of classical Greek and Roman mythology.'
                : '고대 그리스·로마 문명의 위대한 신화, 올림포스 12주신, 영웅과 전설 속 신성 무구를 체계적으로 정리한 고품격 인터랙티브 디지털 백과사전입니다.'}
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-amber-300 font-mono">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                {isEn ? 'Public Domain & Educational' : '공공도메인 명화 & 학술 목적'}
              </span>
            </div>
          </div>

          {/* Column 2: Codex Exploration Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-slate-200 text-sm tracking-wider uppercase">
              {isEn ? 'Codex Navigation' : '도감 바로가기'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => {
                    soundFx.play('click');
                    onSelectMainTab('characters');
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span>
                  <span>{isEn ? 'Mythological Characters & Deities' : '신화 인물 및 12주신 도감'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.play('click');
                    onSelectMainTab('items');
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  className="hover:text-amber-300 transition text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span>
                  <span>{isEn ? 'Sacred Relics & Divine Weapons' : '전설의 성물 & 신성 무기 도감'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.play('click');
                    onOpenFamilyTree();
                  }}
                  className="hover:text-amber-300 transition text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span>
                  <span>{isEn ? 'Cosmological Family Tree' : '카오스 ~ 올림포스 신화 계보도'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.play('click');
                    onOpenCompare();
                  }}
                  className="hover:text-amber-300 transition text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span>
                  <span>{isEn ? 'Divine Power Comparison' : '신들의 대결 / 능력치 비교 분석'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    soundFx.play('click');
                    onOpenQuiz();
                  }}
                  className="hover:text-amber-300 transition text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span>
                  <span>{isEn ? 'Mythology Knowledge Quiz' : '그리스 로마 신화 지식 퀴즈'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Policies & AdSense Legal Center */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-slate-200 text-sm tracking-wider uppercase">
              {isEn ? 'Legal & Policies' : '정책 및 이용 안내'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleOpenPolicyTab('privacy')}
                  className="hover:text-amber-300 transition text-left cursor-pointer flex items-center gap-1.5 text-amber-200/90 font-medium"
                >
                  <span className="text-amber-400">›</span>
                  <span>{isEn ? 'Privacy Policy (개인정보처리방침)' : '개인정보처리방침 (Privacy Policy)'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenPolicyTab('terms')}
                  className="hover:text-amber-300 transition text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span>
                  <span>{isEn ? 'Terms of Service (이용약관)' : '이용약관 (Terms of Service)'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenPolicyTab('about')}
                  className="hover:text-amber-300 transition text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span>
                  <span>{isEn ? 'About Us (사이트 소개)' : '사이트 소개 (About Us)'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenPolicyTab('copyright')}
                  className="hover:text-amber-300 transition text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span>
                  <span>{isEn ? 'Copyright & Source Credits' : '저작권 및 명화 출처 안내'}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOpenPolicyTab('contact')}
                  className="hover:text-amber-300 transition text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-amber-500">›</span>
                  <span>{isEn ? 'Contact Us (문의하기)' : '문의하기 및 피드백 (Contact)'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & AdSense Compliance Note */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-slate-200 text-sm tracking-wider uppercase">
              {isEn ? 'Editorial Office' : '운영국 및 연락처'}
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p>
                {isEn
                  ? 'Have questions, corrections, or suggestions? Reach out to our editorial team:'
                  : '신화 고증 오탈자 제보, 제휴 및 의견은 언제든지 문의해 주세요:'}
              </p>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="block text-[11px] text-slate-400 mb-0.5">{isEn ? 'Inquiry Email' : '공식 문의 이메일'}</span>
                <a
                  href="mailto:twyj21123@gmail.com"
                  className="text-amber-300 hover:underline font-mono font-bold text-xs flex items-center gap-1"
                >
                  <Mail size={13} />
                  <span>twyj21123@gmail.com</span>
                </a>
              </div>
              <p className="text-[11px] text-slate-400 leading-tight">
                {isEn
                  ? 'This site strictly complies with Google AdSense Program Policies and Webmaster Guidelines.'
                  : '본 사이트는 구글 애드센스 프로그램 정책 및 웹마스터 가이드라인을 엄격히 준수합니다.'}
              </p>
            </div>
          </div>
        </div>

        {/* Academic Citations Banner */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <BookOpen size={14} className="text-amber-400 shrink-0" />
            <span>
              {isEn
                ? 'Academic Sources: Hesiod (Theogony), Homer (Iliad & Odyssey), Ovid (Metamorphoses), Apollodorus (Bibliotheca).'
                : '신화학 학술 고증 문헌: 헤시오도스 《신통기》, 호메로스 《일리아스·오디세이아》, 오비디우스 《변신 이야기》, 아폴로도로스 《신화집》.'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => handleOpenPolicyTab('privacy')}
              className="hover:text-slate-300 cursor-pointer underline"
            >
              {isEn ? 'Privacy' : '개인정보처리'}
            </button>
            <span>•</span>
            <button
              onClick={() => handleOpenPolicyTab('terms')}
              className="hover:text-slate-300 cursor-pointer underline"
            >
              {isEn ? 'Terms' : '이용약관'}
            </button>
            <span>•</span>
            <button
              onClick={() => handleOpenPolicyTab('contact')}
              className="hover:text-slate-300 cursor-pointer underline"
            >
              {isEn ? 'Contact' : '문의'}
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-4 text-center text-[11px] text-slate-400">
          <p>© 2026 Greek & Roman Mythology Pantheon & Sacred Relic Codex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
