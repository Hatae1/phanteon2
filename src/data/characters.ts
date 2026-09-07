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
  const q = searchQuery.toLowerCase().trim();

  const filtered = characters.filter(char => {
    // Category match
    if (category !== 'all') {
      if (char.category !== category) return false;
    }

    // Role match
    if (role !== 'all' && char.role !== role) {
      return false;
    }

    // Search query match
    if (q) {
      // Direct Name & Title Matches
      const matchNameKo = char.nameKo.toLowerCase().includes(q);
      const matchNameEn = char.nameEn.toLowerCase().includes(q);
      const matchNameGreek = char.nameGreek.toLowerCase().includes(q);
      const matchRomanKo = char.romanNameKo.toLowerCase().includes(q);
      const matchRomanEn = char.romanNameEn.toLowerCase().includes(q);
      const matchDomain = char.domain.toLowerCase().includes(q);
      const matchDomainDetail = char.domainDetail?.toLowerCase().includes(q);
      const matchTitle = char.title.toLowerCase().includes(q);
      const matchSymbols = char.symbols.some(s => s.toLowerCase().includes(q));

      // Deep Lore, Stories & Etymology Matches
      const matchSummary = char.lore.summary.toLowerCase().includes(q);
      const matchOrigin = char.lore.birthAndOrigin.toLowerCase().includes(q);
      const matchLegacy = char.lore.etymologyAndLegacy.toLowerCase().includes(q);
      const matchStories = char.lore.majorStories.some(
        s => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)
      );
      const matchTrivia = char.trivia?.some(t => t.toLowerCase().includes(q));
      const matchSkills = char.skills?.some(
        sk => sk.name.toLowerCase().includes(q) || sk.description.toLowerCase().includes(q)
      );

      // Relationship search (e.g. '페넬로페', '트로이', '이타카')
      const matchRelations = [
        ...(char.relationships.parents || []),
        ...(char.relationships.spouse || []),
        ...(char.relationships.lovers || []),
        ...(char.relationships.children || []),
        ...(char.relationships.illegitimateChildren || []),
        ...(char.relationships.siblings || []),
        ...(char.relationships.allies || []),
        ...(char.relationships.rivals || []),
      ].some(rel => rel.name.toLowerCase().includes(q) || rel.relation.toLowerCase().includes(q));

      // Semantic Synonyms for Popular Movie / Literature Queries (Odyssey / The Odyssey / 오디세이 / 트로이목마)
      const isOdysseyQuery =
        q.includes('오디세이') ||
        q.includes('odyssey') ||
        q.includes('오디세우스') ||
        q.includes('율리시스') ||
        q.includes('ulysses') ||
        q.includes('이타카') ||
        q.includes('ithaca') ||
        q.includes('트로이목마') ||
        q.includes('trojan horse');

      const matchOdysseyKeyRole =
        isOdysseyQuery &&
        (char.id === 'odysseus' ||
          char.id === 'athena' || // Odysseus's divine patron throughout the Odyssey
          char.id === 'poseidon' || // Primary divine antagonist causing the 10-year sea wandering
          char.id === 'hermes' || // Brought holy Moly plant & warned Calypso to release Odysseus
          char.id === 'achilles'); // Foremost comrade met in the Underworld in the Odyssey

      if (
        !matchNameKo &&
        !matchNameEn &&
        !matchNameGreek &&
        !matchRomanKo &&
        !matchRomanEn &&
        !matchDomain &&
        !matchDomainDetail &&
        !matchTitle &&
        !matchSymbols &&
        !matchSummary &&
        !matchOrigin &&
        !matchLegacy &&
        !matchStories &&
        !matchTrivia &&
        !matchSkills &&
        !matchRelations &&
        !matchOdysseyKeyRole
      ) {
        return false;
      }
    }

    return true;
  });

  // If query is specifically looking for Odyssey or Odysseus, rank Odysseus first
  if (q && (q.includes('오디세이') || q.includes('odyssey') || q.includes('오디세우스') || q.includes('율리시스') || q.includes('ulysses'))) {
    return [...filtered].sort((a, b) => {
      if (a.id === 'odysseus') return -1;
      if (b.id === 'odysseus') return 1;
      return 0;
    });
  }

  return filtered;
};
