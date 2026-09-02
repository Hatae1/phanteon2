import React, { useState } from 'react';
import { BookOpen, Sparkles, Shield, ChevronDown, ChevronUp, Feather, Compass, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { soundFx } from '../utils/audio';

export const MythologyGuideSection: React.FC = () => {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    soundFx.play('click');
    setActiveAccordion(prev => (prev === index ? null : index));
  };

  const articles = [
    {
      id: 'creation-pantheon',
      title: isEn
        ? 'The Cosmological Genesis: From Chaos to the Olympian Order'
        : '카오스(Chaos)에서 올림포스 질서까지: 신화적 우주 창조론',
      subtitle: isEn
        ? 'Hesiod’s Theogony and the generational shift of divine sovereignty'
        : '헤시오도스의 《신통기》와 신족의 3대 세대교체 이야기',
      icon: Compass,
      content: isEn ? (
        <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <p>
            In ancient Greek mythology, the universe originated not from deliberate creation by a solitary craftsman, but through self-evolving cosmic primordial deities emerging from <strong>Chaos (the Infinite Void)</strong>. From this primordial void arose <strong>Gaia (Mother Earth)</strong>, <strong>Tartarus (the Abyss)</strong>, and <strong>Eros (Desire and Generation)</strong>, which sparked the perpetual cycle of life and cosmological order.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
            <div className="rounded-xl bg-slate-950/70 p-3.5 border border-slate-800">
              <h5 className="font-bold text-amber-300 text-xs mb-1">1st Gen: Primordial (Protogenoi)</h5>
              <p className="text-[12px] text-slate-400">
                Uranus (Sky) and Gaia (Earth) formed the fundamental fabric of reality, producing the Titans, Cyclopes, and Hecatoncheires.
              </p>
            </div>
            <div className="rounded-xl bg-slate-950/70 p-3.5 border border-slate-800">
              <h5 className="font-bold text-amber-300 text-xs mb-1">2nd Gen: Titan Dynasty</h5>
              <p className="text-[12px] text-slate-400">
                Led by Cronus (Time/Harvest) and Rhea, the twelve elder Titans governed the golden age prior to the devastating Titanomachy.
              </p>
            </div>
            <div className="rounded-xl bg-slate-950/70 p-3.5 border border-slate-800">
              <h5 className="font-bold text-amber-300 text-xs mb-1">3rd Gen: Olympian Pantheon</h5>
              <p className="text-[12px] text-slate-400">
                Zeus, Poseidon, and Hades triumphed over Cronus, establishing divine sovereignty centered on cloud-crowned Mount Olympus.
              </p>
            </div>
          </div>
          <p>
            The transition of power was characterized by catastrophic cosmological struggles: the ten-year war known as the <strong>Titanomachy</strong>, and the terrifying rebellion of <strong>Typhon</strong>. By freeing the Elder Cyclopes who forged the divine weapons—Zeus’s Thunderbolts, Poseidon’s Trident, and Hades’s Helm of Darkness—the Olympians cemented the enduring paradigm of Olympian supremacy.
          </p>
        </div>
      ) : (
        <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <p>
            그리스 신화의 우주는 한 명의 절대자에 의한 일방적 창조가 아닌, 형태 없는 무한한 심연인 <strong>카오스(Chaos)</strong>로부터 자발적으로 태동했습니다. 카오스 이후 대지의 모신 <strong>가이아(Gaia)</strong>, 암흑의 나락 <strong>타르타로스(Tartaros)</strong>, 그리고 모든 생명을 이끄는 결합의 원동력인 <strong>에로스(Eros)</strong>가 출현하며 우주의 삼라만상이 형태를 갖추기 시작했습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3">
            <div className="rounded-xl bg-slate-950/70 p-3.5 border border-slate-800">
              <h5 className="font-bold text-amber-300 text-xs mb-1">제1세대: 태초의 원초신 (Protogenoi)</h5>
              <p className="text-[12px] text-slate-400">
                하늘의 신 우라노스와 대지의 신 가이아가 결합하여 12명의 티탄 신족과 외눈 거인 키클롭스, 백수거인 헤카톤케이레스를 탄생시켰습니다.
              </p>
            </div>
            <div className="rounded-xl bg-slate-950/70 p-3.5 border border-slate-800">
              <h5 className="font-bold text-amber-300 text-xs mb-1">제2세대: 티탄 신족 (Titans)</h5>
              <p className="text-[12px] text-slate-400">
                아버지 우라노스를 거세하고 패권을 장악한 크로노스와 레아를 중심으로 티탄의 황금시대가 열렸으나, 자식을 삼키는 폭정으로 파멸의 길을 걷습니다.
              </p>
            </div>
            <div className="rounded-xl bg-slate-950/70 p-3.5 border border-slate-800">
              <h5 className="font-bold text-amber-300 text-xs mb-1">제3세대: 올림포스 12주신 (Olympians)</h5>
              <p className="text-[12px] text-slate-400">
                어머니 레아의 기지로 살아남은 제우스가 형제들을 구출하고, 10년의 신들의 전쟁(티타노마키아) 끝에 마침내 올림포스 판테온을 확립했습니다.
              </p>
            </div>
          </div>
          <p>
            이 세대교체의 중심에는 지하 타르타로스에 갇혀 있던 외눈 거인 키클롭스 삼형제가 제우스에게 만들어 바친 <strong>벼락(케라우노스)</strong>, 포세이돈의 <strong>삼지창(트리아이나)</strong>, 하데스의 <strong>은신 투구(퀴네에)</strong>라는 3대 신성 무기가 결정적인 기여를 했습니다.
          </p>
        </div>
      ),
    },
    {
      id: 'olympian-symbolism',
      title: isEn
        ? 'Symbolism & Dual Nature of the Twelve Olympians'
        : '올림포스 12주신의 이중적 상징성과 인간관',
      subtitle: isEn
        ? 'How ancient Greeks anthropomorphized nature, war, wisdom, and fate'
        : '자연 현상, 전쟁, 지혜, 사랑의 양면성을 의인화한 인문학적 신관',
      icon: Award,
      content: isEn ? (
        <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <p>
            Unlike the deities of many ancient civilizations that personified terrifying unapproachable monoliths, Greek mythology is renowned for its <strong>profoundly humanistic and anthropomorphic theology</strong>. The gods of Olympus experienced jealousy, passion, vengeance, empathy, and artistic inspiration, embodying both the magnificent and turbulent aspects of human existence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
            <div className="rounded-xl bg-slate-950/70 p-3.5 border border-slate-800">
              <h5 className="font-bold text-amber-300 text-xs mb-1">War: Ares vs. Athena</h5>
              <p className="text-[12px] text-slate-400">
                Ares embodies the blind frenzy, bloodshed, and destructive fury of the battlefield, while Athena reflects tactical intellect, strategic discipline, and defensive civic preservation.
              </p>
            </div>
            <div className="rounded-xl bg-slate-950/70 p-3.5 border border-slate-800">
              <h5 className="font-bold text-amber-300 text-xs mb-1">Love: Aphrodite Ourania vs. Pandemos</h5>
              <p className="text-[12px] text-slate-400">
                Classical philosophers such as Plato categorized Aphrodite into spiritual love (Ourania) and sensual earthly desire (Pandemos), illuminating the multifaceted nature of human intimacy.
              </p>
            </div>
          </div>
          <p>
            By worshipping deities with psychological complexity, ancient Greek citizens could explore their own inner moral tensions, philosophical dilemmas, and civic virtues in drama festivals, Olympic athletic games, and philosophical dialogues.
          </p>
        </div>
      ) : (
        <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <p>
            고대 근동의 다른 신화들이 범접할 수 없는 초월적이고 절대적인 신을 묘사했던 것과 달리, 그리스 신화의 가장 두드러진 특징은 <strong>철저히 인간 중심적(인본주의적)인 신관</strong>입니다. 올림포스의 신들은 불사의 육체와 초자연적 권능을 가졌을 뿐, 시기, 분노, 질투, 연민, 열정 등 인간과 똑같은 감정의 소용돌이를 겪습니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-3">
            <div className="rounded-xl bg-slate-950/70 p-3.5 border border-slate-800">
              <h5 className="font-bold text-amber-300 text-xs mb-1">전쟁의 양면성: 아레스 vs 아테나</h5>
              <p className="text-[12px] text-slate-400">
                아레스는 피비린내 나는 살육, 맹목적인 분노, 파괴적 충동을 상징하는 반면, 아테나는 정당한 방어, 전술적 지략, 이성과 시민 사회의 수호를 대변합니다.
              </p>
            </div>
            <div className="rounded-xl bg-slate-950/70 p-3.5 border border-slate-800">
              <h5 className="font-bold text-amber-300 text-xs mb-1">예술과 질서: 아폴론 vs 디오니소스</h5>
              <p className="text-[12px] text-slate-400">
                아폴론이 태양, 수학적 비례, 명쾌한 조화와 시(詩)를 상징한다면, 디오니소스는 포도주, 도취, 축제, 잠재의식의 카타르시스를 상징하며 인간 정신의 균형을 완성합니다.
              </p>
            </div>
          </div>
          <p>
            신들의 이러한 불완전함과 감정의 격돌은 고대 비극 시인(아이스킬로스, 소포클레스, 에우리피데스)들에게 끝없는 문학적 영감을 제공하였으며, 오늘날까지 서구 문학 및 심리학(오이디푸스 콤플렉스, 나르시시즘 등)의 근간을 형성하고 있습니다.
          </p>
        </div>
      ),
    },
    {
      id: 'sacred-relics',
      title: isEn
        ? 'Relics & Sacred Artifacts: Instruments of Divine Destiny'
        : '신화 속 무구와 성물: 운명을 바꾼 기적의 보구들',
      subtitle: isEn
        ? 'From Hephaestus’s subterranean forges to legendary hero quests'
        : '대장장이 신 헤파이토스의 야금술과 영웅들의 시련을 이끈 신성한 유산',
      icon: Shield,
      content: isEn ? (
        <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <p>
            In heroic epics, mortal heroes rarely triumphed through brute strength alone. Divine patrons bestowed upon them crafted relics with distinct metaphysical attributes, transforming impossible tasks into foundational legends:
          </p>
          <ul className="space-y-2 list-none my-3">
            <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
              <Sparkles size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs">Perseus & the Multi-Relic Arsenal:</strong>
                <span className="text-[12px] text-slate-400 block">
                  Perseus defeated Medusa by combining Athena’s mirror shield (preventing petrification), Hades’s helm of darkness (stealth), and Hermes’s adamantine Harpe sickle.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
              <Sparkles size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs">Theseus & Ariadne’s Golden Thread:</strong>
                <span className="text-[12px] text-slate-400 block">
                  A deceptively humble relic that allowed the Athenian prince to navigate Daedalus’s mathematically impossible Labyrinth and slay the Minotaur.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
              <Sparkles size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs">Achilles & the Cosmic Shield:</strong>
                <span className="text-[12px] text-slate-400 block">
                  Forged by Hephaestus in Book 18 of Homer’s Iliad, this shield depicted the entire cosmos—sun, moon, stars, peacetime weddings, and besieged cities—symbolizing human life in its entirety.
                </span>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <p>
            신화 속에서 영웅들의 위대한 과업은 단순한 완력만으로 달성되지 않았습니다. 신들의 대장장이 <strong>헤파이토스(Hephaestus)</strong>나 올림포스의 수호신들이 하사한 신성한 성물과 무구들이 운명의 고비마다 결정적인 기적으로 작용했습니다.
          </p>
          <ul className="space-y-2 list-none my-3">
            <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
              <Sparkles size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs">페르세우스의 성물 연합:</strong>
                <span className="text-[12px] text-slate-400 block">
                  메두사의 석화 시선을 피하게 해준 아테나의 청동 거울 방패, 완벽한 은신을 선사한 하데스의 퀴네에 투구, 그리고 날개 달린 샌들 탈라리아의 조화로 괴수를 토벌했습니다.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
              <Sparkles size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs">테세우스와 아리아드네의 실타래:</strong>
                <span className="text-[12px] text-slate-400 block">
                  다이달로스가 설계한 탈출 불가능한 미궁 라비린토스를 풀어내고 미노타우로스를 처단한 후 무사히 생환하게 해준 지혜와 사랑의 성물입니다.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80">
              <Sparkles size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white text-xs">아킬레우스의 천체 방패 (Cosmic Shield):</strong>
                <span className="text-[12px] text-slate-400 block">
                  호메로스의 《일리아스》 제18권에서 헤파이토스가 아킬레우스를 위해 벼려낸 방패로, 대지와 하늘, 태양과 달, 평화로운 농촌의 결혼식과 전쟁 중인 도시 등 온 우주의 축소판이 정교하게 새겨져 있습니다.
                </span>
              </div>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'greek-vs-roman',
      title: isEn
        ? 'Greek vs. Roman Mythology: Continuity & Cultural Synthesis'
        : '그리스 신화와 로마 신화의 비교 및 문화적 계승',
      subtitle: isEn
        ? 'Syncretism, renaming, and the transformation from poetry to statecraft'
        : '그리스의 철학적 서정시가 로마 제국의 국가적 질서와 결합한 과정',
      icon: Feather,
      content: isEn ? (
        <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <p>
            When Rome conquered Greece militarily in the 2nd century BCE, Greek culture conquered Rome intellectually and artistically—a phenomenon the Roman poet Horace famously described: <em>"Captive Greece took captive her rude conqueror."</em>
          </p>
          <div className="rounded-xl bg-slate-950/70 p-4 border border-slate-800 space-y-2 my-2 text-xs">
            <h5 className="font-bold text-amber-300">Key Syncretic Equivalences:</h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-300">
              <div>• Zeus → <strong>Jupiter</strong></div>
              <div>• Hera → <strong>Juno</strong></div>
              <div>• Poseidon → <strong>Neptune</strong></div>
              <div>• Hades → <strong>Pluto / Dis</strong></div>
              <div>• Athena → <strong>Minerva</strong></div>
              <div>• Ares → <strong>Mars</strong></div>
              <div>• Aphrodite → <strong>Venus</strong></div>
              <div>• Hermes → <strong>Mercury</strong></div>
            </div>
          </div>
          <p>
            However, Roman religion was not mere copying. The Romans emphasized <strong>Pietas (civic duty and loyalty)</strong>, organization, and law. For instance, while Ares was often viewed as a reckless nuisance by Greek polis-dwellers, his Roman counterpart <strong>Mars</strong> was revered as the father of Romulus and Remus and the sacred patron ancestor of the Roman Empire itself.
          </p>
        </div>
      ) : (
        <div className="space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <p>
            기원전 2세기 로마가 군사적으로 그리스를 정복했을 때, 문화적으로는 오히려 그리스 문명이 로마를 매료시켰습니다. 로마 시인 호라티우스가 <em>"정복당한 그리스가 사나운 정복자를 정복했다"</em>고 술회했듯, 로마인들은 그리스의 풍부한 신화와 문학을 자국의 토착 신앙과 결합시켰습니다.
          </p>
          <div className="rounded-xl bg-slate-950/70 p-4 border border-slate-800 space-y-2 my-2 text-xs">
            <h5 className="font-bold text-amber-300">주요 그리스-로마 신 대응표:</h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-300">
              <div>• 제우스 → <strong>유피테르 (주피터)</strong></div>
              <div>• 헤라 → <strong>유노 (주노)</strong></div>
              <div>• 포세이돈 → <strong>넵투누스 (넵튠)</strong></div>
              <div>• 하데스 → <strong>플루토 (플루토)</strong></div>
              <div>• 아테나 → <strong>미네르바</strong></div>
              <div>• 아레스 → <strong>마르스</strong></div>
              <div>• 아프로디테 → <strong>베누스 (비너스)</strong></div>
              <div>• 헤르메스 → <strong>메르쿠리우스 (머큐리)</strong></div>
            </div>
          </div>
          <p>
            하지만 단순한 모방에 그치지 않고, 로마는 특유의 실용주의와 제국적 질서(Pax Romana), 그리고 <strong>피에타스(Pietas, 조국과 신에 대한 경건한 헌신)</strong>를 신화에 주입했습니다. 대표적으로 그리스에서 난폭한 파괴자로 경원시되었던 아레스는 로마에서 건국자 로물루스의 아버지인 <strong>마르스(Mars)</strong>로 격상되어 국가의 최고 수호신으로 추앙받았습니다.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      id="mythology-guide-editorial"
      className="mt-14 mb-8 rounded-3xl border border-amber-500/25 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-950 p-5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md"
      aria-labelledby="guide-heading"
    >
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wider uppercase">
          <BookOpen size={14} />
          <span>{isEn ? 'Classical Mythology Academic Archive' : '그리스 로마 신화 학술 연구 아카이브'}</span>
        </div>
        <h2 id="guide-heading" className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-serif tracking-tight">
          {isEn ? 'Mythological Compendium & Cultural Overview' : '신화 세계관 총람 및 고전 인문학 해설'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {isEn
            ? 'Explore comprehensive academic essays on the Olympian cosmology, theological evolution, divine weaponry, and the lasting intellectual heritage of the classical Greco-Roman world.'
            : '고대 그리스·로마 문명이 인류에게 남긴 불멸의 우주론, 올림포스 신들의 이중적 상징 체계, 운명을 바꾼 기적의 성물과 문화적 계승 과정을 상세히 탐색해 보세요.'}
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {articles.map((article, index) => {
          const isOpen = activeAccordion === index;
          const Icon = article.icon;
          return (
            <article
              key={article.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'border-amber-500/50 bg-slate-900/90 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                  : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900/50'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer transition focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`p-2.5 rounded-xl border transition ${
                      isOpen
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                        : 'bg-slate-800/60 border-slate-700 text-slate-400'
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-serif text-slate-100 group-hover:text-amber-200 transition">
                      {article.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">{article.subtitle}</p>
                  </div>
                </div>

                <div className="p-1.5 rounded-lg bg-slate-800/60 text-slate-400 shrink-0">
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 animate-in fade-in duration-300">
                  {article.content}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Quote / Editorial Attribution footer inside guide */}
      <div className="mt-8 pt-6 border-t border-slate-800/80 text-center max-w-2xl mx-auto">
        <blockquote className="italic text-xs sm:text-sm text-slate-400 font-serif">
          {isEn
            ? '"Sing in me, Muse, and through me tell the story of that man skilled in all ways of contending..."'
            : '“뮤즈여, 온갖 고난을 겪으며 방랑한 지혜로운 영웅의 이야기를 제 입을 통해 노래하소서…”'}
        </blockquote>
        <span className="text-[11px] text-amber-400/90 font-semibold block mt-1">
          — {isEn ? 'Homer, The Odyssey (Book I)' : '호메로스, 《오디세이아》 제1권'}
        </span>
      </div>
    </section>
  );
};
