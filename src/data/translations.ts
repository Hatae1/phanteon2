export type Language = 'ko' | 'en';

export interface TranslationDictionary {
  // Navigation & Header
  appTitle: string;
  appTitleHighlight: string;
  appSubtitle: string;
  pantheonBadge: string;
  navCompare: string;
  navCompareShort: string;
  navFamilyTree: string;
  navFamilyTreeShort: string;
  navQuiz: string;
  navQuizShort: string;
  navShare: string;
  navShareCopied: string;
  soundOn: string;
  soundOff: string;
  languageSelect: string;

  // Intro Banner
  bannerBadge: string;
  bannerSubBadge: string;
  bannerTitle: string;
  bannerDesc: string;
  btnClash: string;
  btnQuiz: string;

  // Tabs
  tabCharacters: string;
  tabItems: string;

  // Character Filter Bar
  searchCharPlaceholder: string;
  catAll: string;
  catOlympian: string;
  catUnderworld: string;
  catTitan: string;
  catDemigod: string;
  catHero: string;
  catMonster: string;
  catSacredBeast: string;
  
  roleAll: string;
  roleWarrior: string;
  roleArcher: string;
  roleGuardian: string;
  roleMage: string;
  roleSupport: string;
  filterClass: string;

  sortLabel: string;
  sortDefault: string;
  sortStars: string;
  sortPower: string;
  sortWisdom: string;
  sortAgility: string;
  sortDefense: string;
  sortName: string;
  totalCharactersCount: (count: number) => string;

  // Item Filter Bar
  searchItemPlaceholder: string;
  itemCatAll: string;
  itemCatWeapon: string;
  itemCatFootwear: string;
  itemCatAccessory: string;
  itemCatArmor: string;
  itemCatRelic: string;
  
  itemSortDefault: string;
  itemSortStars: string;
  itemSortAttack: string;
  itemSortDefense: string;
  itemSortDivinity: string;
  itemSortName: string;
  totalItemsCount: (count: number) => string;

  // Card Labels
  cardOwner: string;
  cardCreator: string;
  viewDetails: string;
  noResultsTitleChar: string;
  noResultsDescChar: string;
  noResultsTitleItem: string;
  noResultsDescItem: string;
  noMatchingCharacters: string;
  noMatchingCharactersDesc: string;
  noMatchingItems: string;
  noMatchingItemsDesc: string;
  btnResetFilter: string;

  // Rarity & Tiers
  rarityMythic: string;
  rarityLegendary: string;
  rarityEpic: string;

  // Character Detail Modal
  tabLore: string;
  tabSkills: string;
  tabRelations: string;
  tabArtwork: string;
  tabTrivia: string;
  sectionBirthOrigin: string;
  sectionMajorStories: string;
  sectionRomanDiff: string;
  sectionEtymology: string;
  sectionKeySymbols: string;
  sectionCreatures: string;
  sectionSacredFlora: string;
  sectionCombatStats: string;
  sectionDivineSkills: string;
  sectionRelationships: string;
  btnSelectForClash: string;
  btnClose: string;
  viewLinkedItem: string;

  // Item Detail Modal
  itemTabOverview: string;
  itemTabAbilities: string;
  itemTabStories: string;
  itemTabLegacy: string;
  itemTabZoom: string;
  itemSpecOwner: string;
  itemSpecCreator: string;
  itemSpecCategory: string;
  itemSpecSubtype: string;
  itemSpecRating: string;
  btnEnlargeArt: string;
  zoomIn: string;
  zoomOut: string;
  zoomReset: string;
  viewLinkedCharacter: string;

  // Stats Labels
  statPower: string;
  statDefense: string;
  statWisdom: string;
  statAgility: string;
  statAuthority: string;
  statLeadership: string;
  statAttack: string;
  statMystery: string;
  statDivinity: string;

  // Stat Comparison Modal
  compareTitle: string;
  compareSubtitle: string;
  compareModalTitle: string;
  compareFighter1: string;
  compareFighter2: string;
  compareTotalStats: (score: number) => string;
  compareStatBreakdown: string;
  compareSimulating: string;
  compareBtnSimulate: string;
  selectFighterA: string;
  selectFighterB: string;
  totalCombatScore: string;
  btnSimulateBattle: string;
  simulating: string;
  versus: string;

  // Family Tree Modal
  treeTitle: string;
  treeSubtitle: string;
  treeTabAll: string;
  treeTabZeus: string;
  treeTabAffairs: string;
  lineageModalTitle: string;
  lineageModalSubtitle: string;
  lineageTabAll: string;
  lineageTabAffairs: string;
  lineageTabZeus: string;
  lineageProtogenoi: string;
  lineageTitans: string;
  lineageOlympiansGen1: string;
  lineageOlympiansGen2: string;
  lineageHeroesMonsters: string;
  lineageAffairsTitle: string;
  lineageAffairsDesc: string;
  genPrimordial: string;
  genTitans: string;
  genOlympians: string;
  genHeroes: string;

  // Quiz Modal
  quizTitle: string;
  quizSubtitle: string;
  questionProgress: (curr: number, total: number) => string;
  quizQuestionProgress: (curr: number, total: number) => string;
  quizCurrentScore: (score: number) => string;
  quizExplanationPrefix: string;
  quizBtnNext: string;
  quizBtnResult: string;
  quizCompletedTitle: string;
  quizScoreSummary: (total: number, score: number) => string;
  quizPerfect: string;
  quizGood: string;
  quizTryAgain: string;
  quizBtnRetry: string;
  quizBtnBack: string;
  btnSubmit: string;
  btnNext: string;
  btnRestart: string;
  quizFinishedTitle: string;
  quizScoreText: (score: number, total: number) => string;

  // Footer
  footerTitle: string;
  footerLoreSources: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  ko: {
    appTitle: '그리스 로마 신화',
    appTitleHighlight: '판테온 도감',
    appSubtitle: 'Mythologia Graeco-Romana · 캐릭터 카드 & 신화 대사전',
    pantheonBadge: 'PANTHEON',
    navCompare: '신들의 대결 / 비교',
    navCompareShort: '대결 / 비교',
    navFamilyTree: '신화 계보도',
    navFamilyTreeShort: '계보도',
    navQuiz: '신화 퀴즈',
    navQuizShort: '퀴즈',
    navShare: '공유하기',
    navShareCopied: '링크 복사 완료!',
    soundOn: '효과음 끄기',
    soundOff: '효과음 켜기',
    languageSelect: '언어 변경 (Language)',

    bannerBadge: '올림포스 판테온 대백과',
    bannerSubBadge: '| 신화 인물 & 성물 도감',
    bannerTitle: '그리스 로마 신화 인물 & 신화 성물(아이템) 도감',
    bannerDesc: '원하는 신, 영웅 또는 무기·성물 카드를 클릭하면 탄생 비화, 고유 권능 스킬, 제작 배경과 소유주, 명화 해설, 신화 관계도 등 상세한 전설을 탐색할 수 있습니다.',
    btnClash: '신들의 대결',
    btnQuiz: '신화 퀴즈',

    tabCharacters: '신화 인물 도감',
    tabItems: '신화 아이템 도감',

    searchCharPlaceholder: '신/영웅 이름, 오디세이, 트로이 목마, 권능 검색...',
    catAll: '전체 도감',
    catOlympian: '올림포스 12신',
    catUnderworld: '명계의 신',
    catTitan: '티탄 신족',
    catDemigod: '반신',
    catHero: '영웅',
    catMonster: '괴물',
    catSacredBeast: '신수',

    roleAll: '모든 클래스',
    roleWarrior: '전사 (Warrior)',
    roleArcher: '원거리 (Archer)',
    roleGuardian: '수호자 (Guardian)',
    roleMage: '권능/마법 (Mage)',
    roleSupport: '보조/생명 (Support)',
    filterClass: '클래스:',

    sortLabel: '정렬:',
    sortDefault: '기본 신화 순서',
    sortStars: '별 등급 높은 순 (★)',
    sortPower: '신성력 / 파괴력 순',
    sortWisdom: '지혜 / 지략 순',
    sortAgility: '신속 / 기동력 순',
    sortDefense: '방어 / 불멸성 순',
    sortName: '이름 가나다순',
    totalCharactersCount: (count: number) => `총 ${count}위`,

    searchItemPlaceholder: '성물명, 오디세이, 트로이 목마, 소유자 검색...',
    itemCatAll: '전체 성물',
    itemCatWeapon: '신화 무기',
    itemCatFootwear: '신화 신발',
    itemCatAccessory: '장신구 & 보구',
    itemCatArmor: '방어구 & 투구',
    itemCatRelic: '신화 성물 & 유물',

    itemSortDefault: '기본 신화 순서',
    itemSortStars: '별 등급 높은 순 (★)',
    itemSortAttack: '공격력/파괴력 높은 순',
    itemSortDefense: '방어력/내구도 높은 순',
    itemSortDivinity: '신성력/기적 높은 순',
    itemSortName: '이름 가나다순 (ㄱ-ㅎ)',
    totalItemsCount: (count: number) => `총 ${count}점의 성물`,

    cardOwner: '소유자',
    cardCreator: '제작자',
    viewDetails: '상세 보기',
    noResultsTitleChar: '일치하는 신화 속 인물이 없습니다',
    noResultsDescChar: '검색어 철자를 확인하시거나 필터 옵션을 변경해보세요. 그리스식 이름, 로마식 이름, 권능 등으로 검색할 수 있습니다.',
    noResultsTitleItem: '조건에 일치하는 신화 아이템이 없습니다.',
    noResultsDescItem: '검색어 철자를 확인하거나 필터 조건을 초기화해 보세요.',
    noMatchingCharacters: '일치하는 신화 속 인물이 없습니다',
    noMatchingCharactersDesc: '검색어 철자를 확인하시거나 필터 옵션을 변경해보세요. 그리스식 이름, 로마식 이름, 권능 등으로 검색할 수 있습니다.',
    noMatchingItems: '조건에 일치하는 신화 아이템이 없습니다.',
    noMatchingItemsDesc: '검색어 철자를 확인하거나 필터 조건을 초기화해 보세요.',
    btnResetFilter: '필터 초기화',

    rarityMythic: '신화급',
    rarityLegendary: '전설급',
    rarityEpic: '영웅급',

    tabLore: '신화 개요 & 기원',
    tabSkills: '권능 & 능력치',
    tabRelations: '신화 관계도',
    tabArtwork: '명화 갤러리',
    tabTrivia: '신화 트리비아',
    sectionBirthOrigin: '탄생 비화 및 기원',
    sectionMajorStories: '주요 신화 대서사',
    sectionRomanDiff: '로마 신화와의 차이점',
    sectionEtymology: '어원 및 현대적 유산',
    sectionKeySymbols: '주요 상징물',
    sectionCreatures: '상징 동물 / 환수',
    sectionSacredFlora: '상징 식물 / 영초',
    sectionCombatStats: '전투 능력치',
    sectionDivineSkills: '고유 권능 스킬',
    sectionRelationships: '가계도 및 복잡한 관계망',
    btnSelectForClash: '대결 상대로 지정',
    btnClose: '닫기',
    viewLinkedItem: '관련 성물 도감 보기',

    itemTabOverview: '성물 개요 & 기원',
    itemTabAbilities: '보구 권능 & 능력치',
    itemTabStories: '활약 신화 에피소드',
    itemTabLegacy: '현대적 계승 & 상징',
    itemTabZoom: '고화질 일러스트 뷰어',
    itemSpecOwner: '주요 소유자',
    itemSpecCreator: '전설의 제작자',
    itemSpecCategory: '성물 분류',
    itemSpecSubtype: '세부 유형',
    itemSpecRating: '신화적 위상',
    btnEnlargeArt: '🔍 그림 크게 보기 (고화질 줌)',
    zoomIn: '확대 (+)',
    zoomOut: '축소 (-)',
    zoomReset: '초기화',
    viewLinkedCharacter: '소유자/제작자 인물 도감 보기',

    statPower: '신성력 / 파괴력',
    statDefense: '방어력 / 불멸성',
    statWisdom: '지혜 / 지략',
    statAgility: '신속 / 기동력',
    statAuthority: '권능 / 영역 지배력',
    statLeadership: '통솔력 / 위엄',
    statAttack: '공격력 / 파괴력',
    statMystery: '신비도 / 주술력',
    statDivinity: '신성력 / 기적',

    compareTitle: '올림포스 대결 & 능력치 비교',
    compareSubtitle: '두 신 또는 영웅을 선택하여 능력치와 신화적 권능을 정밀 비교하고 모의 대결을 펼쳐보세요.',
    compareModalTitle: '신들의 대결 · 능력치 비교 분석',
    compareFighter1: '도전자 1',
    compareFighter2: '도전자 2',
    compareTotalStats: (score: number) => `총합 능력치: ${score} / 600`,
    compareStatBreakdown: '세부 능력치 비교 (Stat Breakdown)',
    compareSimulating: '격돌 중...',
    compareBtnSimulate: '⚔️ 신화적 모의 결전 시뮬레이션',
    selectFighterA: '챔피언 1 선택',
    selectFighterB: '챔피언 2 선택',
    totalCombatScore: '능력치 총합',
    btnSimulateBattle: '⚔️ 모의 대결 시작!',
    simulating: '전투 시뮬레이션 중...',
    versus: 'VS',

    treeTitle: '그리스 로마 신화 판테온 계보도',
    treeSubtitle: '태초의 카오스에서 시작하여 티탄, 올림포스 12신, 그리고 영웅들로 이어지는 거대한 신화 계보',
    treeTabAll: '전체 판테온 계보',
    treeTabZeus: "제우스의 직계 가계",
    treeTabAffairs: '밀회 & 사생아 계보',
    lineageModalTitle: '그리스 신화 계보도 & 족보 (Pantheon Lineage)',
    lineageModalSubtitle: '정통 올림포스 계보부터 제우스·포세이돈의 불륜(외도)과 서자/반신 대영웅 탄생도까지 한눈에 파악하세요.',
    lineageTabAll: '전체 올림포스 계보 (All Pantheon)',
    lineageTabAffairs: '불륜 & 외도 / 서자 계보도 (Affairs & Illegitimate)',
    lineageTabZeus: '제우스 중심 자녀 & 외도 계통도 (Zeus Dynasty)',
    lineageProtogenoi: '태초의 원초신 (Protogenoi)',
    lineageTitans: '티탄 12신족 (Titans)',
    lineageOlympiansGen1: '올림포스 1세대 6주신 (크로노스와 레아의 직계 자녀들)',
    lineageOlympiansGen2: '올림포스 2세대 주신들 (제우스의 자녀들 및 아프로디테)',
    lineageHeroesMonsters: '신화 속 전설의 대영웅 및 서자/괴물 계보',
    lineageAffairsTitle: '그리스 신화 불륜 & 외도 계보 (The Affair & Illegitimate Offspring Map)',
    lineageAffairsDesc: '그리스 신화의 수많은 신들과 영웅들은 주신들의 다양한 변신술과 외도로 인해 태어났습니다. 정식 혼인 관계(정실)와 대비되는 비밀 밀회, 변신 형태, 그리고 그로 인해 탄생한 서자들을 확인하세요.',
    genPrimordial: '1세대 : 태초의 신들 (Primordials)',
    genTitans: '2세대 : 티탄 신족 (Titans)',
    genOlympians: '3세대 : 올림포스 12신 (Olympians)',
    genHeroes: '4세대 : 영웅 및 반신반인 (Heroes & Demigods)',

    quizTitle: '델포이 신전 · 그리스 로마 신화 퀴즈',
    quizSubtitle: '올림포스 신들과 신화적 성물에 관한 상식을 테스트해보세요!',
    questionProgress: (curr: number, total: number) => `문제 ${curr} / ${total}`,
    quizQuestionProgress: (curr: number, total: number) => `문제 ${curr} / ${total}`,
    quizCurrentScore: (score: number) => `현재 점수: ${score}점`,
    quizExplanationPrefix: '💡 해설: ',
    quizBtnNext: '다음 문제 ➔',
    quizBtnResult: '결과 확인하기 🏆',
    quizCompletedTitle: '퀴즈 완료!',
    quizScoreSummary: (total: number, score: number) => `총 ${total}문제 중 ${score}문제를 맞히셨습니다.`,
    quizPerfect: '🎉 대단합니다! 올림포스 최고 지혜의 신 아테나에 버금가는 신화 마스터이십니다!',
    quizGood: '👏 훌륭합니다! 그리스 로마 신화에 대한 높은 교양과 지식을 갖추고 계십니다.',
    quizTryAgain: '📖 수고하셨습니다! 판테온 도감의 상세 신화 페이지를 읽고 다시 도전해보세요!',
    quizBtnRetry: '다시 풀기',
    quizBtnBack: '도감으로 돌아가기',
    btnSubmit: '정답 확인',
    btnNext: '다음 문제',
    btnRestart: '퀴즈 다시 풀기',
    quizFinishedTitle: '신화 퀴즈 완료!',
    quizScoreText: (score: number, total: number) => `${total}문제 중 ${score}문제를 맞히셨습니다!`,

    footerTitle: '그리스 로마 신화 판테온 & 성물 도감 · Olympus & Classical Lore Encyclopedia',
    footerLoreSources: '호메로스의 《일리아스》, 《오디세이아》 및 헤시오도스의 《신통기》, 오비디우스의 《변신 이야기》 기반',
  },

  en: {
    appTitle: 'Greek & Roman Mythology',
    appTitleHighlight: 'Pantheon & Relics',
    appSubtitle: 'Mythologia Graeco-Romana · Character Cards & Divine Relics Lore',
    pantheonBadge: 'PANTHEON',
    navCompare: 'Gods Clash / Compare',
    navCompareShort: 'Clash',
    navFamilyTree: 'Mythic Genealogy',
    navFamilyTreeShort: 'Genealogy',
    navQuiz: 'Mythology Quiz',
    navQuizShort: 'Quiz',
    navShare: 'Share',
    navShareCopied: 'Link Copied!',
    soundOn: 'Mute Sound FX',
    soundOff: 'Enable Sound FX',
    languageSelect: 'Select Language',

    bannerBadge: 'Olympus Pantheon Encyclopedia',
    bannerSubBadge: '| Deities, Heroes & Divine Relics',
    bannerTitle: 'Greek & Roman Mythological Characters & Sacred Artifacts',
    bannerDesc: 'Click any deity, hero, or legendary artifact card to explore origin lore, signature powers, legendary smiths, classical fine art, and mythological relationships.',
    btnClash: 'Gods Clash',
    btnQuiz: 'Mythology Quiz',

    tabCharacters: 'Mythological Characters',
    tabItems: 'Divine Relics & Items',

    searchCharPlaceholder: 'Search deities, heroes, Odyssey, Trojan Horse, symbols...',
    catAll: 'All Characters',
    catOlympian: 'Olympian 12 Gods',
    catUnderworld: 'Underworld Gods',
    catTitan: 'Titans & Giants',
    catDemigod: 'Demigods',
    catHero: 'Heroes',
    catMonster: 'Monsters',
    catSacredBeast: 'Sacred Beasts',

    roleAll: 'All Classes',
    roleWarrior: 'Warrior',
    roleArcher: 'Archer',
    roleGuardian: 'Guardian',
    roleMage: 'Mage / Power',
    roleSupport: 'Support / Life',
    filterClass: 'Class:',

    sortLabel: 'Sort:',
    sortDefault: 'Mythological Order',
    sortStars: 'Highest Star Rating (★)',
    sortPower: 'Highest Power / Might',
    sortWisdom: 'Highest Wisdom',
    sortAgility: 'Highest Agility',
    sortDefense: 'Highest Defense',
    sortName: 'Name (A-Z)',
    totalCharactersCount: (count: number) => `Showing ${count} deities & heroes`,

    searchItemPlaceholder: 'Search relics, Odyssey, Trojan Horse, owners, smiths...',
    itemCatAll: 'All Relics',
    itemCatWeapon: 'Mythic Weapons',
    itemCatFootwear: 'Mythic Footwear',
    itemCatAccessory: 'Accessories & Regalia',
    itemCatArmor: 'Armor & Helms',
    itemCatRelic: 'Divine Relics & Artifacts',

    itemSortDefault: 'Mythological Order',
    itemSortStars: 'Highest Star Rating (★)',
    itemSortAttack: 'Highest Attack / Might',
    itemSortDefense: 'Highest Defense / Durability',
    itemSortDivinity: 'Highest Divinity / Miracle',
    itemSortName: 'Name (A-Z)',
    totalItemsCount: (count: number) => `Showing ${count} mythic relics`,

    cardOwner: 'Owner',
    cardCreator: 'Crafted by',
    viewDetails: 'View Lore',
    noResultsTitleChar: 'No matching deities or heroes found',
    noResultsDescChar: 'Please check your spelling or adjust your filters. You can search by Greek name, Roman name, domain, or symbols.',
    noResultsTitleItem: 'No matching mythic relics found.',
    noResultsDescItem: 'Please check your spelling or reset the filter options.',
    noMatchingCharacters: 'No matching deities or heroes found',
    noMatchingCharactersDesc: 'Please check your spelling or adjust your filters. You can search by Greek name, Roman name, domain, or symbols.',
    noMatchingItems: 'No matching mythic relics found.',
    noMatchingItemsDesc: 'Please check your spelling or reset the filter options.',
    btnResetFilter: 'Reset Filters',

    rarityMythic: 'Mythic',
    rarityLegendary: 'Legendary',
    rarityEpic: 'Epic',

    tabLore: 'Overview & Lore',
    tabSkills: 'Powers & Stats',
    tabRelations: 'Genealogy & Lineage',
    tabArtwork: 'Classical Fine Art',
    tabTrivia: 'Mythic Trivia',
    sectionBirthOrigin: 'Birth & Origin Lore',
    sectionMajorStories: 'Major Mythological Epics',
    sectionRomanDiff: 'Differences in Roman Mythology',
    sectionEtymology: 'Etymology & Modern Legacy',
    sectionKeySymbols: 'Sacred Symbols & Regalia',
    sectionCreatures: 'Sacred Animals & Beasts',
    sectionSacredFlora: 'Sacred Plants & Flora',
    sectionCombatStats: 'Combat & Divine Stats',
    sectionDivineSkills: 'Signature Divine Abilities',
    sectionRelationships: 'Lineage & Complex Relationships',
    btnSelectForClash: 'Select for Clash',
    btnClose: 'Close',
    viewLinkedItem: 'View Linked Relic',

    itemTabOverview: 'Relic Overview & Lore',
    itemTabAbilities: 'Divine Powers & Stats',
    itemTabStories: 'Epic Mythological Deeds',
    itemTabLegacy: 'Modern Cultural Legacy',
    itemTabZoom: 'HD Artwork Viewer',
    itemSpecOwner: 'Primary Owner',
    itemSpecCreator: 'Legendary Smith',
    itemSpecCategory: 'Relic Category',
    itemSpecSubtype: 'Item Subtype',
    itemSpecRating: 'Mythological Status',
    btnEnlargeArt: '🔍 Enlarge Artwork (HD Zoom)',
    zoomIn: 'Zoom In (+)',
    zoomOut: 'Zoom Out (-)',
    zoomReset: 'Reset',
    viewLinkedCharacter: 'View Owner / Smith Lore',

    statPower: 'Divine Power / Might',
    statDefense: 'Defense & Immortality',
    statWisdom: 'Wisdom & Foresight',
    statAgility: 'Agility & Speed',
    statAuthority: 'Divine Authority & Domain',
    statLeadership: 'Leadership & Majesty',
    statAttack: 'Attack / Destructive Might',
    statMystery: 'Mystery & Arcane Power',
    statDivinity: 'Divinity & Miracles',

    compareTitle: 'Olympian Arena & Stat Comparison',
    compareSubtitle: 'Select two deities or heroes to compare their divine attributes and simulate a mythological clash.',
    compareModalTitle: 'Gods Clash · Divine Stat Comparison',
    compareFighter1: 'Challenger 1',
    compareFighter2: 'Challenger 2',
    compareTotalStats: (score: number) => `Total Stat Power: ${score} / 600`,
    compareStatBreakdown: 'Attribute Breakdown',
    compareSimulating: 'Clashing...',
    compareBtnSimulate: '⚔️ Simulate Mythic Clash',
    selectFighterA: 'Select Champion 1',
    selectFighterB: 'Select Champion 2',
    totalCombatScore: 'Total Stat Score',
    btnSimulateBattle: '⚔️ Simulate Clash!',
    simulating: 'Simulating Divine Clash...',
    versus: 'VS',

    treeTitle: 'Olympus & Greek Pantheon Genealogy',
    treeSubtitle: 'From primordial Chaos through the Titans and 12 Olympians to the legendary demigods and heroes.',
    treeTabAll: 'Complete Pantheon Lineage',
    treeTabZeus: "Zeus's Direct Lineage",
    treeTabAffairs: 'Scandals & Offspring',
    lineageModalTitle: 'Greek Pantheon Lineage & Genealogy Tree',
    lineageModalSubtitle: 'Explore the lineages from primordial Chaos through the Olympians to demigod heroes and scandalous affairs.',
    lineageTabAll: 'All Pantheon Lineage',
    lineageTabAffairs: 'Affairs & Illegitimate Offspring',
    lineageTabZeus: 'Zeus Dynasty & Lineage',
    lineageProtogenoi: 'Primordial Deities (Protogenoi)',
    lineageTitans: 'The 12 Titans',
    lineageOlympiansGen1: '1st Generation Olympians (Children of Cronus & Rhea)',
    lineageOlympiansGen2: '2nd Generation Olympians (Children of Zeus & Aphrodite)',
    lineageHeroesMonsters: 'Epic Heroes, Demigods & Mythic Beasts',
    lineageAffairsTitle: 'The Affair & Illegitimate Offspring Map',
    lineageAffairsDesc: 'Numerous deities and heroes in Greek mythology were born through shape-shifting and secret liasons. Compare legitimate marriages with secret amours, disguises, and heroic offspring.',
    genPrimordial: 'Generation 1 : Primordial Deities',
    genTitans: 'Generation 2 : Titans & Elders',
    genOlympians: 'Generation 3 : The 12 Olympians',
    genHeroes: 'Generation 4 : Heroes & Demigods',

    quizTitle: 'Temple of Delphi · Greek Mythology Quiz',
    quizSubtitle: 'Test your knowledge of the Olympian gods, epic heroes, and legendary relics!',
    questionProgress: (curr: number, total: number) => `Question ${curr} of ${total}`,
    quizQuestionProgress: (curr: number, total: number) => `Question ${curr} of ${total}`,
    quizCurrentScore: (score: number) => `Current Score: ${score}`,
    quizExplanationPrefix: '💡 Lore: ',
    quizBtnNext: 'Next Question ➔',
    quizBtnResult: 'View Results 🏆',
    quizCompletedTitle: 'Quiz Finished!',
    quizScoreSummary: (total: number, score: number) => `You answered ${score} out of ${total} questions correctly!`,
    quizPerfect: '🎉 Astounding! You possess wisdom rivaling Athena herself, a true Mythic Scholar!',
    quizGood: '👏 Great job! You have profound knowledge of classical mythology.',
    quizTryAgain: '📖 Good effort! Explore the pantheon lore cards and challenge the oracle again!',
    quizBtnRetry: 'Try Again',
    quizBtnBack: 'Back to Encyclopedia',
    btnSubmit: 'Check Answer',
    btnNext: 'Next Question',
    btnRestart: 'Restart Quiz',
    quizFinishedTitle: 'Quiz Completed!',
    quizScoreText: (score: number, total: number) => `You scored ${score} out of ${total} correctly!`,

    footerTitle: 'Greek & Roman Mythology Pantheon & Relics Encyclopedia',
    footerLoreSources: "Based on Homer's Iliad & Odyssey, Hesiod's Theogony, and Ovid's Metamorphoses",
  },
};

// Bilingual Quiz Questions
export interface LocalizedQuizQuestion {
  question: { ko: string; en: string };
  options: { ko: string[]; en: string[] };
  correctIndex: number;
  explanation: { ko: string; en: string };
}

export const LOCALIZED_QUIZ_QUESTIONS: LocalizedQuizQuestion[] = [
  {
    question: {
      ko: '제우스의 주요 무기로, 외눈박이 거인 키클롭스가 만들어준 것은 무엇일까요?',
      en: 'What is the primary weapon of Zeus, forged for him by the one-eyed Cyclopes?',
    },
    options: {
      ko: ['삼지창 (트리아이나)', '벼락 (케라우노스)', '아다만트 낫 (하르페)', '아이기스 방패'],
      en: ['Trident (Triaina)', 'Thunderbolt (Keraunos)', 'Adamantine Scythe (Harpe)', 'Aegis Shield'],
    },
    correctIndex: 1,
    explanation: {
      ko: '키클롭스 삼형제가 티타노마키아 전쟁을 앞두고 제우스에게는 벼락을, 포세이돈에게는 삼지창을, 하데스에게는 은신 투구 퀴네에를 만들어 주었습니다.',
      en: 'Before the Titanomachy, the three Cyclopes brothers forged the Thunderbolt for Zeus, the Trident for Poseidon, and the Helm of Invisibility (Kynee) for Hades.',
    },
  },
  {
    question: {
      ko: '다음 중 올림포스 12신과 로마 신화의 이름이 잘못 짝지어진 것은?',
      en: 'Which of the following Olympians is incorrectly paired with their Roman mythology name?',
    },
    options: {
      ko: ['아레스 - 마르스 (Mars)', '아테나 - 미네르바 (Minerva)', '헤르메스 - 불카누스 (Vulcan)', '포세이돈 - 넵투누스 (Neptune)'],
      en: ['Ares - Mars', 'Athena - Minerva', 'Hermes - Vulcan', 'Poseidon - Neptune'],
    },
    correctIndex: 2,
    explanation: {
      ko: '헤르메스의 로마식 이름은 메르쿠리우스(머큐리)이며, 불카누스는 대장장이 신 헤파이토스의 로마식 이름입니다.',
      en: 'The Roman equivalent of Hermes is Mercurius (Mercury). Vulcan is the Roman name for Hephaestus, the god of the forge.',
    },
  },
  {
    question: {
      ko: '지혜의 여신 아테나와 아테네 도시의 수호권을 두고 겨룬 신은 누구일까요?',
      en: 'Which god competed against Athena for the patron rights of the city of Athens?',
    },
    options: {
      ko: ['아레스', '포세이돈', '아폴론', '하데스'],
      en: ['Ares', 'Poseidon', 'Apollo', 'Hades'],
    },
    correctIndex: 1,
    explanation: {
      ko: '포세이돈은 짠물 샘과 명마를, 아테나는 평화와 번영의 상징인 올리브 나무를 선물하여 아테네 시민들은 아테나를 수호신으로 선택했습니다.',
      en: 'Poseidon offered a saltwater spring and warhorses, while Athena gave the sacred olive tree symbolizing peace and prosperity; the citizens chose Athena.',
    },
  },
  {
    question: {
      ko: '메두사를 물리친 영웅 페르세우스가 메두사의 목을 벨 때 도움을 받은 신성한 무구가 아닌 것은?',
      en: 'Which of the following was NOT one of the divine relics gifted to Perseus to slay Medusa?',
    },
    options: {
      ko: ['아테나의 청동 거울 방패', '하데스의 투구 퀴네에', '헤르메스의 날개 달린 샌들', '아폴론의 황금 리라'],
      en: ['Athena’s Bronze Mirror Shield', 'Hades’ Helm of Darkness (Kynee)', 'Hermes’ Winged Sandals (Talaria)', 'Apollo’s Golden Lyre'],
    },
    correctIndex: 3,
    explanation: {
      ko: '페르세우스는 아테나의 거울 방패, 하데스의 은신 투구, 헤르메스의 날개 달린 샌들과 낫 하르페, 요정들의 키비시스 자루를 받았습니다.',
      en: 'Perseus was aided by Athena’s polished shield, Hades’ cap of invisibility, Hermes’ winged sandals and Harpe sickle, and the Nymphs’ kibisis pouch.',
    },
  },
  {
    question: {
      ko: '인류에게 신들의 불을 훔쳐다 준 죄로 코카서스 바위에 묶여 고통받았던 지혜의 티탄은?',
      en: 'Which wise Titan was chained to Mount Caucasus for stealing divine fire and giving it to mankind?',
    },
    options: {
      ko: ['아틀라스', '프로메테우스', '에피메테우스', '크로노스'],
      en: ['Atlas', 'Prometheus', 'Epimetheus', 'Cronus'],
    },
    correctIndex: 1,
    explanation: {
      ko: '프로메테우스는 인간에게 불과 지식을 주어 문명을 열어주었으나 제우스의 노여움을 사 간을 쪼아먹히는 형벌을 받았습니다.',
      en: 'Prometheus bestowed fire and enlightenment onto humanity, incurring Zeus’s wrath and being punished with an eagle daily eating his regenerating liver.',
    },
  },
];

export const QUIZ_QUESTIONS_KO = LOCALIZED_QUIZ_QUESTIONS.map(q => ({
  question: q.question.ko,
  options: q.options.ko,
  correctIndex: q.correctIndex,
  explanation: q.explanation.ko,
}));

export const QUIZ_QUESTIONS_EN = LOCALIZED_QUIZ_QUESTIONS.map(q => ({
  question: q.question.en,
  options: q.options.en,
  correctIndex: q.correctIndex,
  explanation: q.explanation.en,
}));

export * from './translations/index';

