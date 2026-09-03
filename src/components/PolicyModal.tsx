import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, FileText, Info, Mail, AlertTriangle, CheckCircle, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { soundFx } from '../utils/audio';

export type PolicyTab = 'privacy' | 'terms' | 'about' | 'contact' | 'copyright';

interface PolicyModalProps {
  isOpen: boolean;
  initialTab?: PolicyTab;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose,
}) => {
  const { language } = useLanguage();
  const isEn = language === 'en';
  const [activeTab, setActiveTab] = useState<PolicyTab>(initialTab);

  // Sync initial tab when changed
  React.useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
    mailtoUrl: string;
    webGmailUrl: string;
  } | null>(null);

  const buildMailtoUrl = (name: string, email: string, subject: string, message: string) => {
    const targetEmail = 'twyj21123@gmail.com';
    const emailSubject = `[신화 대도감 문의] ${subject || '웹사이트 방문자 문의'}`;
    const emailBody = `안녕하세요, 판테온 신화 대도감 운영자님.\n\n` +
      `• 보낸 사람: ${name || '익명 방문자'}\n` +
      `• 회신받을 이메일: ${email || '미입력'}\n\n` +
      `• 문의 내용:\n${message}\n\n` +
      `----------------------------------------\n` +
      `발송 일시: ${new Date().toLocaleString()}\n` +
      `발송 경로: 그리스 로마 신화 판테온 & 성물 도감 (Contact Us)`;

    return `mailto:${targetEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const buildGmailWebUrl = (name: string, email: string, subject: string, message: string) => {
    const targetEmail = 'twyj21123@gmail.com';
    const emailSubject = `[신화 대도감 문의] ${subject || '웹사이트 방문자 문의'}`;
    const emailBody = `안녕하세요, 판테온 신화 대도감 운영자님.\n\n` +
      `• 보낸 사람: ${name || '익명 방문자'}\n` +
      `• 회신받을 이메일: ${email || '미입력'}\n\n` +
      `• 문의 내용:\n${message}\n\n` +
      `----------------------------------------\n` +
      `발송 일시: ${new Date().toLocaleString()}\n` +
      `발송 경로: 그리스 로마 신화 판테온 & 성물 도감 (Contact Us)`;

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.play('click');

    const mailto = buildMailtoUrl(contactName, contactEmail, contactSubject, contactMessage);
    const webGmail = buildGmailWebUrl(contactName, contactEmail, contactSubject, contactMessage);

    setSubmittedData({
      name: contactName,
      email: contactEmail,
      subject: contactSubject,
      message: contactMessage,
      mailtoUrl: mailto,
      webGmailUrl: webGmail,
    });

    setIsSubmitted(true);

    // Automatically trigger mailto prompt
    try {
      window.location.href = mailto;
    } catch {
      // Fallback
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-amber-500/30 bg-slate-900 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden text-slate-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-amber-500/20 bg-slate-950/90 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-amber-200">
                  {isEn ? 'Pantheon Legal & Information Center' : '판테온 정책 및 사이트 안내 센터'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isEn
                    ? 'Privacy Policy, Terms of Service, About, and Contact'
                    : '개인정보처리방침, 이용약관, 사이트 소개 및 문의 안내'}
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                soundFx.play('click');
                onClose();
              }}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-slate-800 bg-slate-950/50 px-3 overflow-x-auto no-scrollbar">
            <button
              onClick={() => {
                soundFx.play('tab');
                setActiveTab('privacy');
                setIsSubmitted(false);
              }}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs sm:text-sm font-semibold transition whitespace-nowrap cursor-pointer ${
                activeTab === 'privacy'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <ShieldCheck size={16} />
              <span>{isEn ? 'Privacy Policy' : '개인정보처리방침'}</span>
            </button>

            <button
              onClick={() => {
                soundFx.play('tab');
                setActiveTab('terms');
                setIsSubmitted(false);
              }}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs sm:text-sm font-semibold transition whitespace-nowrap cursor-pointer ${
                activeTab === 'terms'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <FileText size={16} />
              <span>{isEn ? 'Terms of Service' : '이용약관'}</span>
            </button>

            <button
              onClick={() => {
                soundFx.play('tab');
                setActiveTab('about');
                setIsSubmitted(false);
              }}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs sm:text-sm font-semibold transition whitespace-nowrap cursor-pointer ${
                activeTab === 'about'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <Info size={16} />
              <span>{isEn ? 'About Us' : '사이트 소개'}</span>
            </button>

            <button
              onClick={() => {
                soundFx.play('tab');
                setActiveTab('copyright');
                setIsSubmitted(false);
              }}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs sm:text-sm font-semibold transition whitespace-nowrap cursor-pointer ${
                activeTab === 'copyright'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <AlertTriangle size={16} />
              <span>{isEn ? 'Copyright & Sources' : '저작권 및 출처'}</span>
            </button>

            <button
              onClick={() => {
                soundFx.play('tab');
                setActiveTab('contact');
              }}
              className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs sm:text-sm font-semibold transition whitespace-nowrap cursor-pointer ${
                activeTab === 'contact'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30'
              }`}
            >
              <Mail size={16} />
              <span>{isEn ? 'Contact Us' : '문의하기'}</span>
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 text-slate-300 text-sm leading-relaxed">
            {/* 1. Privacy Policy */}
            {activeTab === 'privacy' && (
              <div className="space-y-5">
                <div className="border-b border-slate-800 pb-3">
                  <h4 className="text-lg font-bold text-amber-300 font-serif">
                    {isEn ? 'Privacy Policy' : '개인정보처리방침'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {isEn ? 'Effective Date: September 1, 2026' : '시행 일자: 2026년 9월 1일'}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-slate-100 mb-1">
                      {isEn ? '1. Introduction & Overview' : '1. 총칙 및 수집 목적'}
                    </h5>
                    <p>
                      {isEn
                        ? 'Greek & Roman Mythology Pantheon ("the Service") is dedicated to protecting user privacy. This Privacy Policy details how we handle information when you access and use our interactive mythological encyclopedia.'
                        : '그리스 로마 신화 판테온 도감("서비스")은 이용자의 개인정보 보호를 최우선으로 생각합니다. 본 방침은 이용자가 백과사전 서비스를 이용할 때 정보가 어떻게 취급되는지 투명하게 설명합니다.'}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-950/60 p-4 border border-amber-500/20 space-y-2">
                    <h5 className="font-bold text-amber-300">
                      {isEn ? '2. Cookies & Advertising (Google AdSense Policy Compliance)' : '2. 쿠키(Cookie) 및 광고 게재 정책 (Google AdSense 규정 준수)'}
                    </h5>
                    <p className="text-xs sm:text-sm">
                      {isEn ? (
                        <>
                          • <strong>Third-Party Advertising:</strong> We use Google AdSense to serve advertisements when you visit our website. Google, as a third-party vendor, uses cookies to serve ads on this site.<br />
                          • <strong>DART Cookie:</strong> Google’s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.<br />
                          • <strong>User Opt-Out:</strong> Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className="text-amber-400 underline">Google Ads Settings</a> or through <a href="https://www.aboutads.info" target="_blank" rel="noreferrer" className="text-amber-400 underline">aboutads.info</a>.
                        </>
                      ) : (
                        <>
                          • <strong>서드파티 광고 안내:</strong> 본 사이트는 서비스 운영과 양질의 무료 신화 콘텐츠 제공을 위해 구글(Google AdSense) 등의 서드파티 광고 프로그램을 사용합니다.<br />
                          • <strong>쿠키(Cookie) 및 DART 쿠키:</strong> 구글은 쿠키를 사용하여 이용자의 본 사이트 및 인터넷 상의 다른 사이트 방문 기록을 바탕으로 맞춤형 광고를 제공할 수 있습니다.<br />
                          • <strong>맞춤 광고 거부(Opt-Out):</strong> 이용자는 <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className="text-amber-400 underline">구글 광고 설정 페이지</a> 또는 <a href="https://www.aboutads.info" target="_blank" rel="noreferrer" className="text-amber-400 underline">aboutads.info</a>를 방문하여 맞춤형 광고용 쿠키 사용을 언제든지 비활성화할 수 있습니다.
                        </>
                      )}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-100 mb-1">
                      {isEn ? '3. Local Storage Data (Non-Personal Preferences)' : '3. 로컬 스토리지 데이터 (비개인 식별 설정)'}
                    </h5>
                    <p>
                      {isEn
                        ? 'We do not collect names, phone numbers, or passwords without explicit consent. Our app utilizes browser LocalStorage solely to remember non-personal user preferences such as your language selection (KO/EN) and sound effects on/off state.'
                        : '본 서비스는 이용자의 성명, 전화번호, 비밀번호 등 민감한 개인식별정보를 강제로 수집하지 않습니다. 브라우저의 로컬 저장소(LocalStorage)는 오직 이용자의 언어 선택(한국어/영어) 및 효과음 켜짐/꺼짐 상태와 같은 편의 설정을 유지하는 용도로만 사용됩니다.'}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-100 mb-1">
                      {isEn ? '4. Web Server Log & Analytics' : '4. 접속 로그 및 분석 정보'}
                    </h5>
                    <p>
                      {isEn
                        ? 'Like standard web platforms, our servers may automatically record standard technical log data (IP address, browser type, referral URLs, access timestamps) to analyze traffic patterns, monitor DDoS attacks, and improve application performance.'
                        : '일반적인 웹사이트 운영 환경과 마찬가지로, 트래픽 분석 및 악의적인 비정상 접속(DDoS 등) 방지를 위해 IP 주소, 브라우저 종류, 접속 시간 등의 기본적인 웹서버 로그가 수집 및 보호될 수 있습니다.'}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-100 mb-1">
                      {isEn ? '5. Contact for Privacy Inquiries' : '5. 개인정보 관련 문의 및 담당자'}
                    </h5>
                    <p>
                      {isEn ? (
                        <>
                          If you have questions about this privacy policy, please contact us via email at <strong className="text-amber-300">twyj21123@gmail.com</strong>.
                        </>
                      ) : (
                        <>
                          개인정보 처리 및 정책과 관련하여 문의사항이나 권리 행사가 필요하신 경우 운영자 이메일(<strong className="text-amber-300">twyj21123@gmail.com</strong>)로 연락해 주시면 신속하게 조치해 드립니다.
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Terms of Service */}
            {activeTab === 'terms' && (
              <div className="space-y-5">
                <div className="border-b border-slate-800 pb-3">
                  <h4 className="text-lg font-bold text-amber-300 font-serif">
                    {isEn ? 'Terms of Service' : '서비스 이용약관'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {isEn ? 'Last Updated: September 1, 2026' : '최종 개정일: 2026년 9월 1일'}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-slate-100 mb-1">
                      {isEn ? '1. Purpose of the Service' : '1. 서비스의 목적'}
                    </h5>
                    <p>
                      {isEn
                        ? 'This website provides educational, historical, and mythological encyclopedic information regarding classical Greek and Roman mythology, deities, heroes, monsters, and legendary relics for public research, cultural education, and appreciation.'
                        : '본 사이트는 고대 그리스 및 로마 신화에 등장하는 신, 영웅, 괴물 및 신화적 성물에 대한 인문학적·신화학적 정보를 체계적으로 정리하여 대중의 문화적 교양 증진과 교육 연구를 목적으로 제공되는 디지털 백과사전입니다.'}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-100 mb-1">
                      {isEn ? '2. User Conduct & Obligations' : '2. 이용자의 권리 및 의무'}
                    </h5>
                    <p>
                      {isEn
                        ? 'Users agree not to engage in unauthorized crawling, scraping, disruption of server infrastructure, or misuse of the platform. The content is for personal, non-commercial, and educational reference.'
                        : '이용자는 본 사이트의 정상적인 운영을 방해하거나 비인가된 대량 스크래핑을 시도해서는 안 되며, 제공되는 신화 해설 콘텐츠를 비상업적·교육적 목적으로 자유롭게 열람하고 활용할 수 있습니다.'}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-100 mb-1">
                      {isEn ? '3. Disclaimer of Mythological Variations' : '3. 신화 전승의 다양성에 대한 면책 고지'}
                    </h5>
                    <p>
                      {isEn
                        ? 'Greek and Roman myths have varied significantly across ancient poets (Homer, Hesiod, Ovid, Apollodorus, Virgil). While our editorial team strives for academic precision, variations in genealogies and story accounts represent inherent historical diversity rather than factual absolutes.'
                        : '그리스 로마 신화는 고대 시인(호메로스, 헤시오도스, 오비디우스, 아폴로도로스, 베르길리우스 등)과 전승 시기 및 지역에 따라 다수의 이본(異本)이 존재합니다. 본 사이트는 널리 인정받는 정설과 주요 문헌을 충실히 반영하되, 특정 판본과의 차이에 대해 절대적 역사적 사실성을 보증하지는 않습니다.'}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-100 mb-1">
                      {isEn ? '4. Intellectual Property & Fair Use' : '4. 지적재산권 및 저작권'}
                    </h5>
                    <p>
                      {isEn
                        ? 'All curated textual lore, UI components, interactive charts, and application design are protected by copyright. Classical artworks displayed are credited to their historical masters and remain in the Public Domain.'
                        : '본 사이트의 독창적인 텍스트 해설, UI 레이아웃, 대화형 시뮬레이션 및 시스템 설계는 저작권의 보호를 받습니다. 인용된 고전 회화 및 조각품은 퍼블릭 도메인(Public Domain)에 속하는 인류 공동의 문화유산입니다.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. About Us */}
            {activeTab === 'about' && (
              <div className="space-y-5">
                <div className="border-b border-slate-800 pb-3">
                  <h4 className="text-lg font-bold text-amber-300 font-serif">
                    {isEn ? 'About Pantheon Encyclopedia' : '그리스 로마 신화 대백과 소개'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {isEn ? 'The Premier Interactive Digital Codex' : '체계적인 신화학 데이터와 예술이 결합된 인터랙티브 아카이브'}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-xl bg-slate-950/70 p-4 border border-amber-500/25">
                    <h5 className="font-bold text-amber-300 mb-2">
                      {isEn ? '🏛️ Editorial Vision & Mission' : '🏛️ 편찬 비전 및 편찬 목적'}
                    </h5>
                    <p className="text-xs sm:text-sm leading-relaxed">
                      {isEn
                        ? 'Our mission is to bring timeless classical mythology to life through modern web technology. By cross-referencing primary texts such as Hesiod’s Theogony, Homer’s Iliad and Odyssey, and Ovid’s Metamorphoses, we provide an accessible, beautifully visual, and academically sound digital museum for students, writers, and mythology enthusiasts worldwide.'
                        : '수천 년 동안 서양 문명과 철학, 문학과 예술의 모태가 되어온 그리스 로마 신화를 현대 디지털 기술로 집대성했습니다. 헤시오도스의 《신통기(Theogony)》, 호메로스의 《일리아스》와 《오디세이아》, 오비디우스의 《변신 이야기(Metamorphoses)》를 교차 고증하여, 고대의 신성한 설화를 누구나 직관적이고 흥미롭게 탐구할 수 있는 디지털 뮤지엄을 지향합니다.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="rounded-xl bg-slate-950/50 p-4 border border-slate-800">
                      <h6 className="font-bold text-slate-200 mb-1 flex items-center gap-1.5">
                        <span className="text-amber-400">⚡</span> {isEn ? 'Comprehensive Character Codex' : '철저한 인물별 데이터 구축'}
                      </h6>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {isEn
                          ? 'Detailed analysis of Olympians, Underworld deities, Titans, Demigods, and Mythic beasts, complete with 6 divine stat attributes, symbols, and genealogies.'
                          : '올림포스 12주신부터 명계의 신, 티탄, 영웅, 신화 속 괴물에 이르기까지 6대 신성 능력치, 상징물, 출생 설화 및 계보를 망라하였습니다.'}
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-950/50 p-4 border border-slate-800">
                      <h6 className="font-bold text-slate-200 mb-1 flex items-center gap-1.5">
                        <span className="text-amber-400">🛡️</span> {isEn ? 'Sacred Relic & Weapon Vault' : '전설 속 무구 & 성물 백과'}
                      </h6>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {isEn
                          ? 'A curated encyclopedia of legendary artifacts: Zeus’s Keraunos, Hades’s Helm of Darkness, Hermes’s Caduceus, Apollo’s Bow, and more with high-definition artwork.'
                          : '제우스의 벼락 케라우노스, 아테나의 아이기스, 하데스의 은신 투구 등 신화 속 전설적 보구의 제작 기원, 소유주, 고유 권능과 고화질 일러스트를 제공합니다.'}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-950/50 p-4 border border-slate-800">
                    <h6 className="font-bold text-slate-200 mb-1">
                      {isEn ? 'Interactive Features' : '인터랙티브 탐구 도구'}
                    </h6>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {isEn
                        ? 'Featuring a genealogical family tree viewer, dynamic 1-on-1 divine stat comparison simulator, and a comprehensive educational quiz with historical commentary.'
                        : '천지창조 카오스부터 시작하는 신화 계보도(Family Tree), 신들의 전력을 1:1로 비교 분석하는 능력치 대결 시뮬레이터, 그리고 학술 해설이 포함된 신화 퀴즈를 제공합니다.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Copyright & Sources */}
            {activeTab === 'copyright' && (
              <div className="space-y-5">
                <div className="border-b border-slate-800 pb-3">
                  <h4 className="text-lg font-bold text-amber-300 font-serif">
                    {isEn ? 'Copyright, Artwork & Source Attribution' : '저작권, 고전 예술품 및 문헌 출처 안내'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {isEn ? 'Academic citations and public domain compliance' : '학술 인용 문헌 및 퍼블릭 도메인 명화 안내'}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-bold text-slate-100 mb-1">
                      {isEn ? '1. Primary Classical Texts' : '1. 기본 신화 문헌 (Primary Classical Texts)'}
                    </h5>
                    <ul className="text-xs sm:text-sm list-disc list-inside space-y-1 text-slate-300">
                      {isEn ? (
                        <>
                          <li><strong>Hesiod:</strong> <em>Theogony</em>, <em>Works and Days</em></li>
                          <li><strong>Homer:</strong> <em>Iliad</em>, <em>Odyssey</em></li>
                          <li><strong>Ovid:</strong> <em>Metamorphoses</em></li>
                          <li><strong>Apollodorus:</strong> <em>Bibliotheca (Library of Greek Mythology)</em></li>
                          <li><strong>Virgil:</strong> <em>Aeneid</em></li>
                        </>
                      ) : (
                        <>
                          <li><strong>Hesiod (헤시오도스):</strong> <em>Theogony (신통기)</em>, <em>Works and Days (일과 날)</em></li>
                          <li><strong>Homer (호메로스):</strong> <em>Iliad (일리아스)</em>, <em>Odyssey (오디세이아)</em></li>
                          <li><strong>Ovid (오비디우스):</strong> <em>Metamorphoses (변신 이야기)</em></li>
                          <li><strong>Apollodorus (아폴로도로스):</strong> <em>Bibliotheca (신화집)</em></li>
                          <li><strong>Virgil (베르길리우스):</strong> <em>Aeneid (아이네이스)</em></li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-100 mb-1">
                      {isEn ? '2. Classical Fine Art & Sculptures (Public Domain)' : '2. 고전 명화 및 조각품 (Public Domain)'}
                    </h5>
                    <p className="text-xs sm:text-sm">
                      {isEn
                        ? 'Masterpieces referenced in our encyclopedia (works by Sandro Botticelli, Caravaggio, Peter Paul Rubens, Gian Lorenzo Bernini, Jacques-Louis David, Diego Velázquez) are in the Public Domain due to copyright expiration (author lifetime + 70 to 100+ years). They are displayed for educational critique, cultural commentary, and public appreciation.'
                        : '본 백과사전에 인용된 고전 미술품(보티첼리, 카라바조, 루벤스, 베르니니, 자크 루이 다비드, 벨라스케스 등의 명작)은 저작권 보호 기간이 만료되어 전 세계적으로 인류 공동의 자산(Public Domain)으로 공개된 예술품들입니다. 교육 연구 및 문화적 감상을 목적으로 정당하게 전시 및 인용되고 있습니다.'}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-bold text-slate-100 mb-1">
                      {isEn ? '3. Museum Attributions' : '3. 주요 소장 미술관 안내'}
                    </h5>
                    <p className="text-xs text-slate-400">
                      {isEn ? (
                        <>
                          • Musée du Louvre, Paris<br />
                          • Museo del Prado, Madrid<br />
                          • The Metropolitan Museum of Art, New York<br />
                          • Galleria degli Uffizi, Florence<br />
                          • Galleria Borghese, Rome
                        </>
                      ) : (
                        <>
                          • Musée du Louvre, Paris (프랑스 루브르 박물관)<br />
                          • Museo del Prado, Madrid (스페인 프라도 미술관)<br />
                          • The Metropolitan Museum of Art, New York (미국 메트로폴리탄 미술관)<br />
                          • Galleria degli Uffizi, Florence (이탈리아 우피치 미술관)<br />
                          • Galleria Borghese, Rome (이탈리아 보르게세 미술관)
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Contact Us */}
            {activeTab === 'contact' && (
              <div className="space-y-5">
                <div className="border-b border-slate-800 pb-3">
                  <h4 className="text-lg font-bold text-amber-300 font-serif">
                    {isEn ? 'Contact the Editorial Team' : '운영자 문의 및 피드백 (Contact Us)'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {isEn
                      ? 'Inquiries, editorial feedback, academic consultation, and bug reports'
                      : '신화 고증 자문, 오류 제보, 제휴 및 기타 서비스 문의'}
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="rounded-xl bg-emerald-950/40 border border-emerald-500/40 p-6 text-center space-y-4">
                    <CheckCircle className="mx-auto h-12 w-12 text-emerald-400" />
                    <div>
                      <h5 className="text-lg font-bold text-emerald-300">
                        {isEn ? 'Email Dispatch Triggered' : '이메일 발송 창이 호출되었습니다'}
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mt-1">
                        {isEn
                          ? 'Your default mail client should have opened with the pre-filled template. If it didn’t open automatically, choose an option below to send directly:'
                          : '기본 메일 프로그램(Gmail, 스마트폰 메일 앱 등)에 작성하신 내용이 자동으로 채워져 열립니다. 만약 자동으로 열리지 않았다면 아래 버튼을 클릭해 주세요:'}
                      </p>
                    </div>

                    {/* Pre-filled Message Summary Box */}
                    {submittedData && (
                      <div className="text-left rounded-lg bg-slate-950/80 border border-slate-800 p-3.5 max-w-lg mx-auto text-xs space-y-1.5 font-mono">
                        <div className="text-amber-300">
                          <span className="text-slate-400">{isEn ? 'To:' : '받는사람:'}</span> twyj21123@gmail.com
                        </div>
                        <div className="text-slate-200">
                          <span className="text-slate-400">{isEn ? 'Subject:' : '제목:'}</span> {isEn ? '[Mythology Inquiry] ' : '[신화 대도감 문의] '}{submittedData.subject}
                        </div>
                        <div className="text-slate-300 line-clamp-3 pt-1 border-t border-slate-800 text-[11px]">
                          {submittedData.message}
                        </div>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      {submittedData && (
                        <>
                          <a
                            href={submittedData.mailtoUrl}
                            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition cursor-pointer flex items-center gap-1.5"
                          >
                            <Mail size={14} />
                            <span>{isEn ? 'Open Mail App Again' : '기본 메일 앱으로 열기'}</span>
                          </a>
                          <a
                            href={submittedData.webGmailUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg bg-red-600/90 hover:bg-red-500 text-white font-bold text-xs transition cursor-pointer flex items-center gap-1.5"
                          >
                            <span>{isEn ? 'Open in Gmail Web' : '웹 Gmail에서 바로 보내기'}</span>
                          </a>
                        </>
                      )}

                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition cursor-pointer"
                      >
                        {isEn ? 'Write Another Message' : '새 문의 작성하기'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Contact Info Box */}
                    <div className="rounded-xl bg-slate-950/70 p-5 border border-amber-500/20 space-y-4">
                      <h5 className="font-bold text-amber-300 text-sm flex items-center gap-2">
                        <Mail size={16} /> {isEn ? 'Direct Contact' : '직접 연락처'}
                      </h5>

                      <div className="space-y-3 text-xs">
                        <div>
                          <span className="text-slate-400 block mb-0.5">{isEn ? 'Official Email' : '공식 문의 이메일'}</span>
                          <a
                            href="mailto:twyj21123@gmail.com"
                            className="text-amber-300 hover:underline font-mono font-bold text-sm"
                          >
                            twyj21123@gmail.com
                          </a>
                        </div>

                        <div>
                          <span className="text-slate-400 block mb-0.5">{isEn ? 'Response Time' : '답변 소요 시간'}</span>
                          <span className="text-slate-200">
                            {isEn ? 'Within 24–48 hours (Mon–Fri)' : '평일 기준 24~48시간 이내'}
                          </span>
                        </div>

                        <div>
                          <span className="text-slate-400 block mb-0.5">{isEn ? 'Topics Welcomed' : '접수 가능한 문의 유형'}</span>
                          <ul className="list-disc list-inside space-y-0.5 text-slate-300">
                            <li>{isEn ? 'Typo & text corrections' : '신화 텍스트 오류 및 오탈자 제보'}</li>
                            <li>{isEn ? 'New myth requests' : '추가 희망 인물 및 성물 요청'}</li>
                            <li>{isEn ? 'Copyright / attribution queries' : '저작권 및 출처 표기 문의'}</li>
                            <li>{isEn ? 'Partnership & education' : '교육 및 학술 협업 제휴'}</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleContactSubmit} className="md:col-span-2 space-y-3.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            {isEn ? 'Your Name' : '이름 / 닉네임'} *
                          </label>
                          <input
                            type="text"
                            required
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            placeholder={isEn ? 'e.g. John Doe' : '예: 홍길동'}
                            className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            {isEn ? 'Your Email' : '답변받으실 이메일'} *
                          </label>
                          <input
                            type="email"
                            required
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          {isEn ? 'Subject' : '문의 제목'} *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactSubject}
                          onChange={(e) => setContactSubject(e.target.value)}
                          placeholder={isEn ? 'Brief summary of your inquiry' : '문의 제목을 입력해 주세요'}
                          className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          {isEn ? 'Message' : '문의 내용'} *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          placeholder={isEn ? 'Please describe your thoughts or question...' : '궁금하신 점이나 제보하실 내용을 상세히 적어주세요...'}
                          className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none resize-none"
                        />
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs transition cursor-pointer shadow-lg hover:shadow-amber-500/20"
                        >
                          <Send size={14} />
                          <span>{isEn ? 'Submit Message' : '문의 보내기'}</span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer of modal */}
          <div className="border-t border-slate-800 bg-slate-950/80 px-5 py-3 flex items-center justify-between text-xs text-slate-400">
            <span>© 2026 Greek & Roman Mythology Pantheon Encyclopedia. All rights reserved.</span>
            <button
              onClick={onClose}
              className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition cursor-pointer"
            >
              {isEn ? 'Close Window' : '창 닫기'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
