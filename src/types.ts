export type CharacterCategory = 
  | 'all' 
  | 'olympian' 
  | 'underworld' 
  | 'titan' 
  | 'demigod' 
  | 'hero' 
  | 'monster' 
  | 'sacred_beast';

export type CharacterRole = 'warrior' | 'archer' | 'guardian' | 'mage' | 'support';

export interface CharacterStats {
  power: number;       // 신성력 / 파괴력
  defense: number;     // 방어력 / 불멸성
  wisdom: number;      // 지혜 / 예지력
  agility: number;     // 신속 / 기동력
  authority: number;   // 권능 / 영역 장악력
  leadership: number;  // 통솔력 / 위엄
}

export interface Skill {
  name: string;
  type: 'passive' | 'active' | 'ultimate';
  typeName: string;
  description: string;
  cooldown?: string;
  icon: string;
}

export interface MajorStory {
  title: string;
  period: string;
  content: string;
  highlight?: string;
  moralOrFact?: string;
}

export interface Artwork {
  title: string;
  artist: string;
  period: string;
  location: string;
  description: string;
  imageUrl?: string;
}

export interface CharacterLore {
  summary: string;
  birthAndOrigin: string;
  majorStories: MajorStory[];
  romanDifferences: string;
  etymologyAndLegacy: string;
  famousArtwork: Artwork[];
}

export interface RelationshipEntity {
  id?: string;
  name: string;
  relation: string;
  isAffair?: boolean;          // 불륜 / 외도 / 비밀 연인
  isIllegitimate?: boolean;    // 서자 / 혼외자녀 / 사생아
  isLegitimate?: boolean;      // 정실 출생 / 정식 부부
  disguiseOrMethod?: string;   // 변신/유혹 방식 (황금 소나기, 백조, 황소, 뻐꾸기 등)
  affairDetail?: string;       // 불륜 및 밀회 신화 비화
}

export interface Relationships {
  parents?: RelationshipEntity[];
  spouse?: RelationshipEntity[];
  lovers?: RelationshipEntity[];               // 외도 및 불륜 상대 (비밀 연인)
  illegitimateChildren?: RelationshipEntity[]; // 서자 및 혼외 자녀
  children?: RelationshipEntity[];
  siblings?: RelationshipEntity[];
  allies?: RelationshipEntity[];
  rivals?: RelationshipEntity[];
}

export interface MythologicalCharacter {
  id: string;
  nameKo: string;
  nameEn: string;
  nameGreek: string;
  romanNameKo: string;
  romanNameEn: string;
  title: string;
  titleEn?: string;
  category: CharacterCategory;
  categoryName: string;
  role: CharacterRole;
  roleName: string;
  starRating: number;
  domain: string;
  domainDetail: string;
  avatarUrl: string;
  bannerUrl: string;
  accentColor: string;
  borderGlowColor: string;
  symbols: string[];
  animals: string[];
  plants: string[];
  quote: string;
  stats: CharacterStats;
  skills: Skill[];
  lore: CharacterLore;
  relationships: Relationships;
  trivia: string[];
}

export type SortOption = 'default' | 'stars' | 'power' | 'wisdom' | 'agility' | 'defense' | 'name';

// --- Mythological Items (무기, 신발, 장신구, 방어구, 성물) ---
export type ItemCategory = 'all' | 'weapon' | 'footwear' | 'accessory' | 'armor' | 'relic';

export interface ItemAbility {
  name: string;
  type: 'active' | 'passive' | 'curse' | 'divine';
  typeName: string;
  description: string;
}

export interface ItemPowerStats {
  attack: number;     // 공격력 / 파괴력
  defense: number;    // 방어력 / 내구도
  agility: number;    // 신속 / 기동력 보정
  mystery: number;    // 신비도 / 주술력
  divinity: number;   // 신성력 / 기적
}

export interface MythologicalItem {
  id: string;
  nameKo: string;
  nameEn: string;
  nameGreek: string;
  category: ItemCategory;
  categoryName: string;
  subType: string;       // 예: 투척 무기, 비행 샌들, 마법 허리띠, 보구 방패 등
  owner: string;         // 주요 소유자
  ownerId?: string;      // 캐릭터 ID 링크
  creator: string;       // 제작자 (예: 헤파이토스, 퀴클롭스 등)
  creatorId?: string;    // 제작자 캐릭터 ID 링크
  starRating: number;    // 3 ~ 5
  rarity: 'mythic' | 'legendary' | 'epic';
  imageUrl: string;
  accentColor: string;
  glowColor: string;
  summary: string;
  originAndLore: string;
  stats: ItemPowerStats;
  abilities: ItemAbility[];
  majorStories: string[];
  modernLegacy: string;
}

export type ItemSortOption = 'default' | 'stars' | 'attack' | 'defense' | 'divinity' | 'name';
