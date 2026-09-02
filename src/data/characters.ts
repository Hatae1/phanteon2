import { MythologicalCharacter, CharacterCategory, CharacterRole } from '../types';
import { olympians } from './olympians';
import { underworldAndTitans } from './underworldAndTitans';
import { heroesAndMonsters } from './heroesAndMonsters';

export const allCharacters: MythologicalCharacter[] = [
  ...olympians,
  ...underworldAndTitans,
  ...heroesAndMonsters,
];

export const getCharacterById = (id: string): MythologicalCharacter | undefined => {
  return allCharacters.find(char => char.id === id);
};

export const filterCharacters = (
  characters: MythologicalCharacter[],
  category: CharacterCategory,
  role: CharacterRole | 'all',
  searchQuery: string
): MythologicalCharacter[] => {
  return characters.filter(char => {
    // Category match
    if (category !== 'all') {
      if (char.category !== category) return false;
    }

    // Role match
    if (role !== 'all' && char.role !== role) {
      return false;
    }

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchNameKo = char.nameKo.toLowerCase().includes(q);
      const matchNameEn = char.nameEn.toLowerCase().includes(q);
      const matchNameGreek = char.nameGreek.toLowerCase().includes(q);
      const matchRomanKo = char.romanNameKo.toLowerCase().includes(q);
      const matchRomanEn = char.romanNameEn.toLowerCase().includes(q);
      const matchDomain = char.domain.toLowerCase().includes(q);
      const matchTitle = char.title.toLowerCase().includes(q);
      const matchSymbols = char.symbols.some(s => s.toLowerCase().includes(q));

      if (!matchNameKo && !matchNameEn && !matchNameGreek && !matchRomanKo && !matchRomanEn && !matchDomain && !matchTitle && !matchSymbols) {
        return false;
      }
    }

    return true;
  });
};
