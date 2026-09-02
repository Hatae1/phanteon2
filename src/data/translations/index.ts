import { MythologicalCharacter, MythologicalItem } from '../../types';
import { CharacterLocalization, ItemLocalization } from './localizationHelpers';
import { olympiansEn } from './olympiansEn';
import { underworldTitansEn } from './underworldTitansEn';
import { heroesMonstersEn } from './heroesMonstersEn';
import { itemsEn } from './itemsEn';

export const allCharacterTranslationsEn: Record<string, CharacterLocalization> = {
  ...olympiansEn,
  ...underworldTitansEn,
  ...heroesMonstersEn,
};

export const allItemTranslationsEn: Record<string, ItemLocalization> = itemsEn;

/**
 * Returns a localized character object. If isEn is true and English data is available,
 * it overlays the English fields while keeping the original IDs, numbers, images, and audio intact.
 */
export function getLocalizedCharacter(character: MythologicalCharacter, isEn: boolean): MythologicalCharacter {
  if (!isEn) return character;

  const translation = allCharacterTranslationsEn[character.id];
  if (!translation) return character;

  return {
    ...character,
    title: translation.title || character.title,
    domain: translation.domain || character.domain,
    domainDetail: translation.domainDetail || character.domainDetail,
    quote: translation.quote || character.quote,
    symbols: translation.symbols && translation.symbols.length > 0 ? translation.symbols : character.symbols,
    animals: translation.animals && translation.animals.length > 0 ? translation.animals : character.animals,
    plants: translation.plants && translation.plants.length > 0 ? translation.plants : character.plants,
    lore: {
      ...character.lore,
      summary: translation.lore?.summary || character.lore.summary,
      birthAndOrigin: translation.lore?.birthAndOrigin || character.lore.birthAndOrigin,
      majorStories: translation.lore?.majorStories && translation.lore.majorStories.length > 0 
        ? translation.lore.majorStories 
        : character.lore.majorStories,
      romanDifferences: translation.lore?.romanDifferences || character.lore.romanDifferences,
      etymologyAndLegacy: translation.lore?.etymologyAndLegacy || character.lore.etymologyAndLegacy,
      famousArtwork: translation.lore?.famousArtwork && translation.lore.famousArtwork.length > 0
        ? translation.lore.famousArtwork
        : character.lore.famousArtwork,
    },
    skills: translation.skills && translation.skills.length > 0
      ? character.skills.map((origSkill, idx) => {
          const trans = translation.skills?.[idx];
          if (!trans) return origSkill;
          return {
            ...origSkill,
            name: trans.name,
            typeName: trans.typeName || origSkill.typeName,
            description: trans.description,
            cooldown: trans.cooldown || origSkill.cooldown,
          };
        })
      : character.skills,
    trivia: translation.trivia && translation.trivia.length > 0 ? translation.trivia : character.trivia,
  };
}

/**
 * Returns a localized mythological item object. If isEn is true and English data is available,
 * it overlays the English text fields.
 */
export function getLocalizedItem(item: MythologicalItem, isEn: boolean): MythologicalItem {
  if (!isEn) return item;

  const translation = allItemTranslationsEn[item.id];
  if (!translation) return item;

  return {
    ...item,
    subType: translation.subType || item.subType,
    owner: translation.owner || item.owner,
    creator: translation.creator || item.creator,
    summary: translation.summary || item.summary,
    originAndLore: translation.originAndLore || item.originAndLore,
    abilities: translation.abilities && translation.abilities.length > 0
      ? translation.abilities.map((ab, idx) => ({
          ...item.abilities[idx],
          name: ab.name,
          typeName: ab.typeName || item.abilities[idx]?.typeName || '',
          description: ab.description,
        }))
      : item.abilities,
    majorStories: translation.majorStories && translation.majorStories.length > 0
      ? translation.majorStories
      : item.majorStories,
    modernLegacy: translation.modernLegacy || item.modernLegacy,
  };
}
