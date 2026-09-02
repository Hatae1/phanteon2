import { MythologicalCharacter, MythologicalItem } from '../types';
import { PolicyTab } from '../components/PolicyModal';

export type AppModalEntry =
  | { type: 'character'; character: MythologicalCharacter }
  | { type: 'item'; item: MythologicalItem }
  | { type: 'itemZoom'; item: MythologicalItem }
  | { type: 'compare'; fighterA?: MythologicalCharacter; fighterB?: MythologicalCharacter }
  | { type: 'familyTree' }
  | { type: 'quiz' }
  | { type: 'policy'; tab: PolicyTab };
