import { MajorStory, Artwork } from '../../types';

export interface CharacterLocalization {
  title?: string;
  domain?: string;
  domainDetail?: string;
  quote?: string;
  symbols?: string[];
  animals?: string[];
  plants?: string[];
  lore?: {
    summary?: string;
    birthAndOrigin?: string;
    majorStories?: MajorStory[];
    romanDifferences?: string;
    etymologyAndLegacy?: string;
    famousArtwork?: Artwork[];
  };
  skills?: Array<{
    name: string;
    typeName?: string;
    description: string;
    cooldown?: string;
  }>;
  trivia?: string[];
}

export interface ItemLocalization {
  subType?: string;
  owner?: string;
  creator?: string;
  summary?: string;
  originAndLore?: string;
  abilities?: Array<{
    name: string;
    typeName?: string;
    description: string;
  }>;
  majorStories?: string[];
  modernLegacy?: string;
}
