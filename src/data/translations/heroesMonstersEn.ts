import { CharacterLocalization } from './localizationHelpers';

export const heroesMonstersEn: Record<string, CharacterLocalization> = {
  heracles: {
    title: 'The Greatest of Heroes · Champion of the Twelve Labors & God of Strength',
    domain: 'Supreme Strength, Heroism, Endurance, Athleticism, Twelve Labors, Apotheosis',
    domainDetail: 'Demigod son of Zeus and mortal Alcmene; the quintessential hero of Greece who overcame impossible trials to achieve immortality',
    quote: 'No labor is too arduous, and no monster too fierce, for the spirit that refuses to bend.',
    symbols: ['Nemean Lion Pelt', 'Olive Wood Club', 'Hydra-Poisoned Bow', 'Golden Apple of the Hesperides'],
    animals: ['Nemean Lion', 'Ceryneian Hind', 'Erymanthian Boar'],
    plants: ['White Poplar', 'Wild Olive'],
    lore: {
      summary: 'Heracles is the supreme heroic figure in classical mythology. Renowned for supernatural physical strength and unwavering resilience, he conquered the legendary Twelve Labors and achieved divine apotheosis upon Mount Olympus.',
      birthAndOrigin: 'Zeus disguised himself as General Amphitryon to visit the noblewoman Alcmene, prolonging the night to three times its length. When Heracles was an infant in his cradle, Hera sent two colossal venomous serpents to murder him; baby Heracles cheerfully strangled both with his bare infant hands.',
      majorStories: [
        {
          title: 'The Twelve Labors of Heracles',
          period: 'Heroic Age',
          content: 'Driven temporarily mad by Hera, Heracles sought purification from the Delphic Oracle, which bound him to King Eurystheus of Mycenae. For twelve years he conquered the Nemean Lion, the multi-headed Lernaean Hydra, the Augean Stables, the Apples of the Hesperides, and captured Cerberus from Hades.',
          highlight: 'The definitive hero’s journey embodying human endurance against fate'
        },
        {
          title: 'The Rescue of Prometheus from Mount Caucasus',
          period: 'Heroic Age',
          content: 'En route to the Garden of the Hesperides, Heracles climbed Mount Caucasus, shot the giant eagle with an arrow, and smashed the adamantine chains binding the Titan Prometheus, earning eternal gratitude and wisdom.',
          highlight: 'The mortal champion liberating the divine benefactor of mankind'
        },
        {
          title: 'The Funeral Pyre on Mount Oeta and Apotheosis',
          period: 'Heroic Climax',
          content: 'Deceived by the dying centaur Nessus, Heracles’s wife Deianira sent him a tunic smeared with Hydra blood. As the venom consumed his mortal flesh, Heracles built his funeral pyre on Mount Oeta. Zeus hurled a thunderbolt, carrying Heracles’s divine immortal soul to Olympus to marry the goddess of youth, Hebe.',
          highlight: 'The transcendence of mortality into divine godhood (Apotheosis)'
        }
      ],
      romanDifferences: 'In Rome, Hercules was venerated by merchants and soldiers at the Ara Maxima, celebrated as a patron of good fortune, victory, and commercial fidelity.',
      etymologyAndLegacy: 'The adjective "herculean" describes tasks requiring superhuman strength or perseverance. The Pillars of Hercules mark the Strait of Gibraltar.',
      famousArtwork: [
        {
          title: 'Farnese Hercules',
          artist: 'Glykon of Athens after Lysippos',
          period: 'Hellenistic / Roman Marble Copy (c. 216 AD)',
          location: 'National Archaeological Museum, Naples',
          description: 'A world-famous colossal marble depicting Hercules resting weary upon his club draped in the lion pelt, secretly holding the apples of the Hesperides behind his back.'
        }
      ]
    },
    skills: [
      {
        name: 'The Twelve Labors Reckoning',
        typeName: 'Ultimate Power',
        description: 'Channels the concentrated might of all twelve conquered trials, delivering a devastating club smash that shatters armor and sends shockwaves.',
        cooldown: '30s'
      },
      {
        name: 'Arrow of the Lernaean Hydra',
        typeName: 'Poison Shot',
        description: 'Looses an arrow dipped in lethal Hydra bile, dealing armor-ignoring toxic damage that prevents all healing.',
        cooldown: '12s'
      },
      {
        name: 'Invulnerability of the Nemean Lion',
        typeName: 'Passive Armor',
        description: 'The golden pelt renders Heracles immune to basic physical armor penetration and reflects 20% of incoming physical damage.',
      }
    ],
    trivia: [
      'The name Heracles ironically means "Glory of Hera" (Hera-kleos), as Apollo’s oracle declared his immortal fame would arise from enduring Hera’s trials.',
      'He wrestled the sea god Nereus, the giant Antaeus, and even the god of death Thanatos to rescue Queen Alcestis.'
    ]
  },

  perseus: {
    title: 'Slayer of Medusa · Founder of Mycenae & Rescuer of Andromeda',
    domain: 'Monster Slaying, Demigod Heroism, Divine Gifts, Airborne Combat, Mycenae',
    domainDetail: 'Son of Zeus and Danaë; cunning hero who decapitated the Gorgon Medusa using Athena’s mirrored shield and rescued Princess Andromeda',
    quote: 'Look not into the monster’s eyes, but strike true by the mirror of wisdom.',
    symbols: ['Severed Head of Medusa (Gorgoneion)', 'Harpe (Curved Sickle-Sword)', 'Mirrored Bronze Shield', 'Winged Sandals'],
    animals: ['Pegasus (Winged Steed)', 'Sea Monster (Cetus)'],
    plants: ['Coral (Born of Medusa’s Blood)', 'Wild Thyme'],
    lore: {
      summary: 'Perseus is one of the earliest and most celebrated demigod champions. Armed with divine gifts from Athena, Hermes, and the nymphs, he accomplished the perilous quest to slay Medusa and founded the royal house of Mycenae.',
      birthAndOrigin: 'King Acrisius of Argos locked his daughter Danaë in a subterranean bronze tower to prevent a prophecy that her son would kill him. Zeus visited Danaë as a golden shower of light, conceiving Perseus. Acrisius cast mother and baby into the sea in a wooden chest, but they washed safely ashore on Seriphos.',
      majorStories: [
        {
          title: 'The Slaying of the Gorgon Medusa',
          period: 'Heroic Age',
          content: 'Tasked by King Polydectes to retrieve the head of Medusa, Perseus received Hermes’ winged sandals and sickle, the Cap of Invisibility, and Athena’s mirrored shield. Tracking the Gorgons to their lair, he watched Medusa’s reflection to avoid petrification and severed her head while she slept.',
          highlight: 'The masterclass of tactical cunning and divine cooperation in heroic myth'
        },
        {
          title: 'The Rescue of Princess Andromeda',
          period: 'Heroic Age',
          content: 'Flying across the coast of Ethiopia, Perseus spotted Princess Andromeda chained to a coastal rock as a sacrifice to the sea monster Cetus. Flying down on his winged sandals, Perseus slew the beast with his harpe (or unveiled Medusa’s head) and took Andromeda as his beloved wife.',
          highlight: 'The archetypal mythological fairy tale of the knight rescuing the maiden from the dragon'
        },
        {
          title: 'The Prophecy Fulfilled at Larissa',
          period: 'Heroic Age',
          content: 'Years later during athletic funeral games at Larissa, Perseus threw a heavy discus. A sudden gust of wind altered its course, striking an old spectator in the crowd who proved to be his grandfather King Acrisius, inexorably fulfilling the ancient oracle.',
          highlight: 'The unavoidable tragic power of Greek destiny over human precautions'
        }
      ],
      romanDifferences: 'Roman poets praised Perseus as a model of filial devotion (pietas) toward his mother Danaë and loyal love toward Andromeda.',
      etymologyAndLegacy: 'The northern sky constellations of Perseus, Andromeda, Cassiopeia, Cepheus, and Pegasus all derive from his myth.',
      famousArtwork: [
        {
          title: 'Perseus with the Head of Medusa',
          artist: 'Benvenuto Cellini',
          period: 'Late Renaissance / Mannerism (1545–1554)',
          location: 'Loggia dei Lanzi, Florence',
          description: 'A triumphant bronze statue depicting Perseus standing proudly upon the severed body of Medusa, holding her serpentine head high.'
        }
      ]
    },
    skills: [
      {
        name: 'Gaze of the Severed Medusa',
        typeName: 'Ultimate Power',
        description: 'Unveils the severed head of Medusa, turning all enemies facing Perseus to solid stone for 3.5 seconds.',
        cooldown: '30s'
      },
      {
        name: 'Strike of the Adamantine Harpe',
        typeName: 'Execute Slash',
        description: 'Dashes forward with supersonic winged speed, slashing an enemy with the curved sickle-sword for heavy critical damage.',
        cooldown: '11s'
      },
      {
        name: 'Reflection of the Aegis Shield',
        typeName: 'Passive Mirror',
        description: 'Reflects 25% of incoming spell damage back to attackers and grants immunity to petrification and blind effects.',
      }
    ],
    trivia: [
      'From the severed neck of Medusa sprang two beings: the winged horse Pegasus and the golden warrior Chrysaor.',
      'Perseus was the great-grandfather of Heracles, linking the two greatest heroic legends of Greece.'
    ]
  },

  achilles: {
    title: 'Hero of the Iliad · The Invulnerable Champion of the Trojan War',
    domain: 'Martial Glory (Kleos), Insuperable Combat, Speed, Wrath, Fate of Mortality',
    domainDetail: 'Son of Peleus and the sea nymph Thetis; greatest warrior of the Achaean host whose rage defines Homer’s Iliad',
    quote: 'Better a brief and glorious life that echoes through eternity than a long and forgotten old age.',
    symbols: ['Shield of Achilles', 'Pelion Ash Spear', 'Golden Armor of Hephaestus', 'Chariot of Immortal Steeds'],
    animals: ['Immortal Steeds (Xanthus and Balius)', 'War Hound', 'Lion'],
    plants: ['Pelion Ash', 'Achillea (Yarrow Flower)'],
    lore: {
      summary: 'Achilles is the peerless warrior of antiquity. Invulnerable everywhere except his heel, he chose a short, blazing life crowned with immortal glory (kleos aphthiton) over a long, quiet existence.',
      birthAndOrigin: 'Born to King Peleus and the Nereid Thetis. Thetis dipped infant Achilles into the Stygian waters of the Underworld to grant him invulnerability, holding him by the heel—which remained his sole mortal vulnerability.',
      majorStories: [
        {
          title: 'The Wrath of Achilles in Homer’s Iliad',
          period: 'Trojan War',
          content: 'Insulted by King Agamemnon who seized his prize Briseis, Achilles withdrew from combat. Without their champion, the Greek armies suffered catastrophic defeats on the beachheads until the Trojan prince Hector killed Achilles’ beloved companion Patroclus.',
          highlight: 'The opening theme of European literature: "Sing, goddess, the rage of Achilles"'
        },
        {
          title: 'The Duel with Hector and King Priam’s Ransom',
          period: 'Trojan War',
          content: 'Re-entering the fray clad in divine armor forged by Hephaestus, Achilles routed the Trojan army, slew Hector in single combat, and dragged his corpse around Troy’s walls. Moved to tears when elderly King Priam kissed his hands in supplication, Achilles relented and returned the body.',
          highlight: 'Homer’s sublime meditation on grief, empathy, and shared human mortality'
        },
        {
          title: 'The Fatal Arrow of Paris at the Scaean Gate',
          period: 'Fall of Troy',
          content: 'Storming the walls of Troy, Achilles was struck down when Paris loosed an arrow guided by the god Apollo directly into his unprotected heel, fulfilling his mother’s prophecy of a short but eternally glorious life.',
          highlight: 'The origin of the universal metaphor "Achilles’ heel"'
        }
      ],
      romanDifferences: 'Roman authors like Virgil viewed Achilles through Trojan sympathies as a terrifying and merciless force of nature.',
      etymologyAndLegacy: 'The Achilles tendon in anatomy and the healing herb Achillea millefolium (used to dress warrior wounds) are named in his honor.',
      famousArtwork: [
        {
          title: 'Achilles Lamenting the Death of Patroclus',
          artist: 'Gavin Hamilton',
          period: 'Neoclassicism (1760–1763)',
          location: 'National Gallery of Scotland, Edinburgh',
          description: 'A somber, monumental neoclassical composition capturing the inconsolable warrior weeping over the fallen Patroclus.'
        }
      ]
    },
    skills: [
      {
        name: 'Wrath of the Pelion Champion',
        typeName: 'Ultimate Power',
        description: 'Enters a blazing berserker state for 6 seconds, becoming entirely immune to all damage and crowd control while gaining 50% attack speed.',
        cooldown: '35s'
      },
      {
        name: 'Pelion Ash Spear Thrust',
        typeName: 'Heavy Piercing',
        description: 'Drives his ash spear through the frontline, dealing massive physical damage that ignores 50% of enemy armor.',
        cooldown: '10s'
      },
      {
        name: 'Stygian Blessing',
        typeName: 'Passive Invulnerability',
        description: 'Immune to all damage from the front and sides; takes 150% critical damage if struck directly in the back of the heel.',
      }
    ],
    trivia: [
      'Trained on Mount Pelion by the wise Centaur Chiron, Achilles was raised on the marrow of bears and wild boars to build iron fortitude.',
      'In the Odyssey, when Odysseus meets Achilles in the Underworld, Achilles admits: "I would rather be a day-laborer to a poor peasant than king over all the departed dead."'
    ]
  },

  odysseus: {
    title: 'Master of Cunning · King of Ithaca & Architect of the Trojan Horse',
    domain: 'Cunning, Strategy, Eloquence, Perseverance, Navigation, Odyssey',
    domainDetail: 'King of Ithaca; legendary strategist beloved by Athena who devised the Trojan Horse and survived ten years of wandering at sea',
    quote: 'My greatest weapon is neither spear nor bow, but the relentless mind that outlasts every storm.',
    symbols: ['Trojan Wooden Horse', 'Great Bow of Odysseus', 'Sailor’s Oar', 'Pilos (Traveler’s Cap)'],
    animals: ['Faithful Hound Argos', 'Boar'],
    plants: ['Olive Tree (Bedpost of Ithaca)', 'Moly (Herb of Hermes)'],
    lore: {
      summary: 'Odysseus is the quintessential hero of human intellect and endurance. Surviving sirens, cyclopes, sorceresses, and shipwrecks through sheer wit and tactical resourcefulness, he returned to reclaim his throne and faithful queen Penelope.',
      birthAndOrigin: 'Son of King Laertes and Anticlea of Ithaca. He married Penelope, daughter of Icarius, and carved their matrimonial bed directly from the living trunk of a deep-rooted olive tree.',
      majorStories: [
        {
          title: 'The Stratagem of the Trojan Horse',
          period: 'Trojan War',
          content: 'After ten agonizing years of stalemate, Odysseus conceived the decisive gambit: constructing a colossal wooden horse concealing elite Achaean warriors inside, while the fleet feigned retreat. Brought into Troy as an offering to Athena, the warriors emerged by night to open the gates.',
          highlight: 'The most famous military deception in world literary history'
        },
        {
          title: 'Blinding the Cyclops Polyphemus',
          period: 'Homeric Odyssey',
          content: 'Trapped in the cavern of the man-eating cyclops Polyphemus, Odysseus intoxicated the giant with strong wine and claimed his name was "Nobody" (Outis). After blinding the giant with a heated wooden stake, Polyphemus roared to his brothers that "Nobody is killing me!", allowing Odysseus’s men to escape under the bellies of sheep.',
          highlight: 'The masterstroke of verbal and tactical cunning outwitting monstrous brute strength'
        },
        {
          title: 'Slaying the Suitors with the Great Bow',
          period: 'Homeric Climax',
          content: 'Returning to Ithaca in rags disguised as an elderly beggar, Odysseus bided his time while arrogant suitors devoured his estate. In Penelope’s archery contest, he alone strung the mighty bow, shot an arrow cleanly through twelve axe rings, and cleansed his palace.',
          highlight: 'The triumphant restoration of justice, household fidelity, and rightful kingship'
        }
      ],
      romanDifferences: 'In Roman literature, Ulysses was viewed critically by Virgil as a deceitful, ruthless trickster who destroyed Troy through dishonorable deceit.',
      etymologyAndLegacy: 'The word "odyssey" has become the universal synonym for a long, transformative spiritual or physical quest.',
      famousArtwork: [
        {
          title: 'Ulysses Deriding Polyphemus',
          artist: 'J.M.W. Turner',
          period: 'Romanticism (1829)',
          location: 'National Gallery, London',
          description: 'A glorious, sunrise-soaked seascape showing Odysseus’s ship sailing away while the shadowy silhouette of the blinded giant groans upon the mountain.'
        }
      ]
    },
    skills: [
      {
        name: 'The Twelve Axe Bow Shot',
        typeName: 'Ultimate Power',
        description: 'Draws the great horn bow with legendary precision, firing an arrow that pierces through all targets in a line, stunning them and dealing fatal critical damage.',
        cooldown: '28s'
      },
      {
        name: 'Deception of the Trojan Stratagem',
        typeName: 'Tactical Feint',
        description: 'Creates a decoy illusion of himself, cleansing all crowd control and gaining complete invisibility for 4 seconds.',
        cooldown: '14s'
      },
      {
        name: 'Favored by Athena',
        typeName: 'Passive Resourcefulness',
        description: 'Reduces all trap and crowd control durations by 50%; gains bonus evasion and ability haste under low health.',
      }
    ],
    trivia: [
      'His faithful hunting hound Argos waited twenty years for Odysseus’s return, wagged his tail upon recognizing his disguised master, and died in peace.',
      'He had his sailors tie him securely to the mast while plugging their ears with beeswax so he could hear the enchanting, madness-inducing song of the Sirens without drowning.'
    ]
  },

  medusa: {
    title: 'The Petrefying Gorgon · Tragic Serpent-Haired Priestess',
    domain: 'Petrification, Curses, Tragic Vengeance, Serpent Hair, Apotropaic Ward',
    domainDetail: 'Once a beautiful maiden of Athens; cursed by Athena into a serpent-haired Gorgon whose direct gaze turns living flesh to stone',
    quote: 'Look upon me, mortal; let your beating heart freeze into cold, unyielding stone.',
    symbols: ['Severed Gorgon Mask (Gorgoneion)', 'Crown of Living Vipers', 'Stone Statues', 'Bronze Scales'],
    animals: ['Venomous Vipers', 'Coral', 'Pegasus (Son)'],
    plants: ['Nightshade', 'Stone Moss'],
    lore: {
      summary: 'Medusa is one of the most poignant figures of myth. Originally an innocent maiden dedicated to Athena, she suffered terrible injustice and was cursed into a terrifying monster whose tragic gaze petrifies all living things.',
      birthAndOrigin: 'In Ovid’s Metamorphoses, Medusa was born a mortal maiden of radiant beauty, especially renowned for her flowing hair, and served as priestess in Athena’s temple.',
      majorStories: [
        {
          title: 'The Curse of the Virgin Goddess',
          period: 'Archaic Era',
          content: 'When Poseidon violated Medusa inside Athena’s sanctuary, Athena took wrathful offense at the desecration of her altar. Athena transformed Medusa’s glorious locks into writhing, venomous serpents and cursed her gaze so that anyone who looked into her eyes turned instantly to cold granite.',
          highlight: 'Ovid’s tragic retelling of victim-blaming and monstrous transformation'
        },
        {
          title: 'The Severed Head and the Birth of Pegasus',
          period: 'Heroic Age',
          content: 'Hunted by Perseus who used a mirrored shield, Medusa was decapitated in her sleep. As her head was severed, from her blood sprang the winged steed Pegasus and the warrior Chrysaor, carrying the legacy of her divine lineage.',
          highlight: 'The miraculous birth of beauty and heroism out of monstrous death'
        },
        {
          title: 'The Apotropaic Shield of Athena (Gorgoneion)',
          period: 'Heroic Age',
          content: 'Perseus gifted Medusa’s severed head to Athena, who affixed the Gorgoneion to her divine Aegis. Her ferocious visage became the supreme apotropaic symbol in Greece, carved on town walls and armor to ward off evil.',
          highlight: 'The ultimate inversion from cursed monster into sacred celestial protector'
        }
      ],
      romanDifferences: 'Roman art embraced the Rondanini Medusa tradition, depicting her not as a hideous beast, but as an ethereal, sorrowful sleeping maiden of tragic beauty.',
      etymologyAndLegacy: 'The name Medusa means "Guardian" or "Protectress" (Medo). Her visage is famously featured as the luxury emblem of the Versace fashion house.',
      famousArtwork: [
        {
          title: 'Medusa (Head of Medusa)',
          artist: 'Caravaggio',
          period: 'Baroque (c. 1597)',
          location: 'Uffizi Gallery, Florence',
          description: 'A terrifying circular parade shield painting capturing Medusa’s severed head in the exact shock of realizing her decapitation, blood spurting from her neck.'
        },
        {
          title: 'Medusa with the Head of Perseus (Modern Sculpture)',
          artist: 'Luciano Garbati',
          period: 'Contemporary Sculpture (2008)',
          location: 'Collect Pond Park, New York',
          description: 'A subversive, feminist reinterpretation depicting Medusa calmly holding the severed head of Perseus, reclaiming agency against victimhood.'
        }
      ]
    },
    skills: [
      {
        name: 'The Fatal Petrefying Gaze',
        typeName: 'Ultimate Power',
        description: 'Opens her terrifying eyes, instantly petrifying all enemies caught in her frontal field of view for 3.5 seconds and dealing heavy magic damage.',
        cooldown: '30s'
      },
      {
        name: 'Serpent Hair Venom Spray',
        typeName: 'Poison Breath',
        description: 'The living vipers spit acidic venom in a cone, blinding enemies and reducing their movement speed by 50%.',
        cooldown: '12s'
      },
      {
        name: 'Apotropaic Terror',
        typeName: 'Passive Retaliation',
        description: 'When struck by enemy melee attacks, Medusa reflects 15% of the damage and slows the attacker’s attack speed.',
      }
    ],
    trivia: [
      'In early archaic Greek pottery, Medusa was painted with wild tusks, a lolling tongue, and beard, but Hellenistic art transformed her into a tragic, breathtaking beauty.',
      'According to myth, coral in the Mediterranean Sea was created when Perseus set Medusa’s dripping head face-down upon fresh seaweed by the beach.'
    ]
  },

  theseus: {
    title: 'Hero of Athens · Conqueror of the Cretan Labyrinth & the Minotaur',
    domain: 'Monster Slaying, Labyrinth Navigation, Athenian Kingship, Justice, Democratic Order',
    domainDetail: 'King of Athens; brave champion who unraveled Daedalus’s labyrinth with Ariadne’s thread and slew the man-eating Minotaur',
    quote: 'No labyrinth is inescapable when courage guides your steps and truth holds the thread.',
    symbols: ['Ariadne’s Clew of Thread', 'Bronze Double Axe (Labrys)', 'Black and White Sails', 'Club of Periphetes'],
    animals: ['Cretan Bull', 'Marathonian Bull'],
    plants: ['Olive', 'White Poplar'],
    lore: {
      summary: 'Theseus is the legendary founding hero of Athens, serving as the intellectual counterpart to Heracles’s raw Peloponnesian might. Slaying bandits along the Isthmus and conquering the Minotaur in Crete, he unified Attica into a civilized commonwealth.',
      birthAndOrigin: 'Son of Princess Aethra of Troezen, with dual paternity attributed to both King Aegeus of Athens and the god Poseidon. Aegeus hid his sandals and golden sword under a massive boulder, instructing Aethra that when Theseus grew strong enough to lift the stone, he should journey to Athens.',
      majorStories: [
        {
          title: 'The Six Labors of the Isthmus Highway',
          period: 'Heroic Age',
          content: 'Refusing the safe sea voyage, Theseus walked the bandit-infested land road to Athens, slaying notorious tyrants with their own cruel methods: smashing club-wielding Periphetes, bending pine trees against Sinis, tossing Sciron to his giant turtle, and fitting the torturer Procrustes to his own bed.',
          highlight: 'The classical archetype of righteous retributive justice purifying civilization'
        },
        {
          title: 'The Labyrinth of Crete and the Minotaur',
          period: 'Heroic Age',
          content: 'To stop the tribute of fourteen Athenian youths to the Minotaur, Theseus volunteered. Assisted by Princess Ariadne, who gave him a ball of thread to retrace his path and a sword, he navigated the maze, beat the beast to death, and led the youths to freedom.',
          highlight: 'The historic myth symbolizing the liberation of mainland Greece from Minoan maritime domination'
        },
        {
          title: 'The Tragedy of the Black Sails',
          period: 'Heroic Age',
          content: 'Theseus forgot his promise to hoist white sails if he survived. Seeing the black sails approach the Athenian coast, King Aegeus leaped from the cliffs into the sea in despair, giving the Aegean Sea its enduring name.',
          highlight: 'The classical tragic cost of mortal triumph clouded by human forgetfulness'
        }
      ],
      romanDifferences: 'Plutarch wrote a famous parallel biography comparing Theseus to Romulus, founder of Rome, praising his democratic wisdom and statecraft.',
      etymologyAndLegacy: 'The philosophic thought experiment "Ship of Theseus" (concerning identity over time as parts are replaced) stems from the vessel preserved by Athens.',
      famousArtwork: [
        {
          title: 'Theseus and the Minotaur',
          artist: 'Antonio Canova',
          period: 'Neoclassicism (1781–1783)',
          location: 'Victoria and Albert Museum, London',
          description: 'A serene neoclassical sculpture showing Theseus seated calmly atop the defeated monster’s body, symbolizing Reason conquering Bestiality.'
        }
      ]
    },
    skills: [
      {
        name: 'Wrath of the Labrys Axe',
        typeName: 'Ultimate Power',
        description: 'Swings the heavy Cretan double-axe, sundering the earth and dealing massive true damage that cleaves through all surrounding foes.',
        cooldown: '28s'
      },
      {
        name: 'Thread of Ariadne',
        typeName: 'Labyrinth Ward',
        description: 'Deploys an illuminated golden thread that cleanses team movement impairments and increases party sprint speed by 40%.',
        cooldown: '14s'
      },
      {
        name: 'Slayer of the Isthmus',
        typeName: 'Passive Justice',
        description: 'Deals 20% bonus damage against elite monsters and boss enemies; gains stacking armor for each foe in combat radius.',
      }
    ],
    trivia: [
      'Theseus instituted the synoikismos—the political unification of disparate Attica villages into the single city-state of Athens.',
      'He journeyed with Heracles against the Amazons and participated in the legendary hunt for the Calydonian Boar.'
    ]
  },

  eros: {
    title: 'God of Passionate Love · Sovereign of Desire & Winged Archer of Hearts',
    domain: 'Love, Passionate Desire, Fertility, Romance, Spiritual Union',
    domainDetail: 'Son of Aphrodite and Ares (or primordial entity); winged archer whose golden and lead arrows dictate the passions of gods and men',
    quote: 'Even the mighty thunder of Zeus bows silent before the sting of my golden shaft.',
    symbols: ['Golden Bow & Quiver', 'Twin Arrows (Gold & Lead)', 'Flaming Torch of Love', 'Wings of Amour'],
    animals: ['White Dove', 'Hare', 'Dolphin'],
    plants: ['Red Rose', 'Myrtle'],
    lore: {
      summary: 'Eros is the god of passionate, irresistible attraction. Operating both as an ancient cosmic force that binds the universe together and as a mischievous winged archer, his arrows held absolute sway over immortal gods and mortal monarchs.',
      birthAndOrigin: 'In Hesiod, Eros is one of the original primordial gods born directly from Chaos. In later classical myth, he is the mischievous winged son of Aphrodite and Ares.',
      majorStories: [
        {
          title: 'The Romance of Cupid and Psyche',
          period: 'Heroic Age / Apuleius',
          content: 'Jealous of mortal princess Psyche’s beauty, Aphrodite commanded Eros to make her love a wretch. Instead, Eros fell deeply in love with her. Visiting her only in nocturnal darkness, he fled when she lit a lamp out of doubt. After Psyche endured impossible labors set by Aphrodite, Zeus granted her immortality and blessed their eternal marriage.',
          highlight: 'The profound allegorical myth of the human soul (Psyche) achieving divine bliss through tested love (Eros)'
        },
        {
          title: 'The Curse of Apollo and Daphne',
          period: 'Archaic Era',
          content: 'When Apollo mocked Eros’s small bow, Eros struck Apollo with a gold-tipped arrow of obsessive passion and the nymph Daphne with a lead-tipped arrow of utter revulsion, demonstrating that even the god of prophecy could not escape love’s agony.',
          highlight: 'The poetic demonstration of love’s omnipotence over reason'
        }
      ],
      romanDifferences: 'In Rome, Cupid (or Amor) was widely popularized as the chubby winged cherub holding a bow, inspiring Valentine’s Day folklore across the globe.',
      etymologyAndLegacy: 'The word "erotic", "cupidity", and universal romantic symbology of heart-piercing arrows descend directly from him.',
      famousArtwork: [
        {
          title: 'Psyche Revived by Cupid’s Kiss',
          artist: 'Antonio Canova',
          period: 'Neoclassicism (1787–1793)',
          location: 'Musée du Louvre, Paris',
          description: 'A celebrated marble masterpiece capturing the tender, winged god gently lifting the awakened Psyche into a delicate embrace.'
        }
      ]
    },
    skills: [
      {
        name: 'Arrow of the Golden Flame',
        typeName: 'Ultimate Power',
        description: 'Shoots a piercing golden heart arrow that charms an enemy champion, forcing them to fight alongside your team for 4 seconds.',
        cooldown: '32s'
      },
      {
        name: 'Lead Shaft of Aversion',
        typeName: 'Disengage Shot',
        description: 'Fires a heavy lead arrow that repels and silences an approaching target, preventing them from casting abilities.',
        cooldown: '12s'
      },
      {
        name: 'Wings of Amour',
        typeName: 'Passive Grace',
        description: 'Soars above terrain obstacles; increases party critical strike rate and grants slow immunity.',
      }
    ],
    trivia: [
      'The child born to Cupid and Psyche was Voluptas (Pleasure / Bliss), symbolizing the true outcome of love united with the soul.',
      'Plato’s philosophical dialogue Symposium is entirely dedicated to an intellectual inquiry into the multifaceted nature of Eros.'
    ]
  },

  jason: {
    title: 'Leader of the Argonauts · Seeker of the Golden Fleece',
    domain: 'Exploration, Seafaring, Heroic Leadership, Golden Fleece, Colchis',
    domainDetail: 'Leader of the legendary crew of the ship Argo; assembled the greatest heroes of Greece to retrieve the Golden Fleece',
    quote: 'Across uncharted oceans and past clashing rocks, the Argo shall sail to glory.',
    symbols: ['Golden Fleece (Chrysomallos)', 'Ship Argo', 'Chiron’s Wooden Staff', 'One Sandal'],
    animals: ['Sleepless Dragon of Colchis', 'Fire-Breathing Bulls (Khalkotauroi)'],
    plants: ['Colchian Crocus', 'Sacred Dodona Oak (Argo Mast)'],
    lore: {
      summary: 'Jason was the daring captain who assembled the Argonauts—including Heracles, Orpheus, and Atalanta—on the ship Argo. With the aid of the sorceress Medea, he overcame the fire-breathing bronze bulls and retrieved the Golden Fleece.',
      birthAndOrigin: 'Raised by the wise Centaur Chiron on Mount Pelion after King Pelias usurped the throne of Iolcus. Arriving in Iolcus wearing only one sandal (having lost one helping Hera across a muddy river), he struck terror into Pelias, who had been warned of a one-sandaled traveler.',
      majorStories: [
        {
          title: 'The Voyage of the Argo and the Clashing Rocks',
          period: 'Heroic Age',
          content: 'Building the fifty-oared Argo with a speaking beam cut from the sacred oak of Dodona, Jason sailed across uncharted seas. Releasing a dove to test the Symplegades (Clashing Rocks), the Argo slipped through just as the crags snapped shut, anchoring them forever.',
          highlight: 'The great myth of maritime bravery expanding ancient horizons'
        },
        {
          title: 'Conquering the Trials of King Aeetes',
          period: 'Heroic Age',
          content: 'To win the Fleece, Jason had to yoke two bronze-hoofed, fire-breathing bulls, plow a field, and sow dragon’s teeth that sprang into armed warriors. With Medea’s magical protective ointment and advice to toss a stone among the warriors, he conquered the trial.',
          highlight: 'The partnership of warrior courage and esoteric arcane knowledge'
        },
        {
          title: 'The Tragedy of Corinth and the Fall of Jason',
          period: 'Heroic Climax',
          content: 'Years later in Corinth, Jason abandoned Medea to contract a royal marriage with Princess Glauce. Medea’s fiery vengeance destroyed the royal house, leaving Jason broken and solitary, until the rotting stern of the beached Argo fell and crushed him in his old age.',
          highlight: 'Euripides’ devastating masterpiece Medea exploring the consequences of broken vows'
        }
      ],
      romanDifferences: 'Valerius Flaccus composed the epic Argonautica in Latin during the Flavian era, emphasizing Jason’s stoic endurance as a leader.',
      etymologyAndLegacy: 'The name Jason (Iason) means "Healer". The constellation Argo Navis (now divided into Carina, Puppis, and Vela) commemorated his ship.',
      famousArtwork: [
        {
          title: 'Jason with the Golden Fleece',
          artist: 'Bertel Thorvaldsen',
          period: 'Neoclassicism (1803)',
          location: 'Thorvaldsens Museum, Copenhagen',
          description: 'A monument of neoclassical sculpture showing Jason standing tall in athletic poise, proudly carrying the ram’s golden fleece draped over his forearm.'
        }
      ]
    },
    skills: [
      {
        name: 'Rally of the Argonaut Crew',
        typeName: 'Ultimate Power',
        description: 'Blows the conch of the Argo, summoning spectral illusions of the greatest Greek heroes to charge the enemy line.',
        cooldown: '30s'
      },
      {
        name: 'Radiance of the Golden Fleece',
        typeName: 'Aegis Barrier',
        description: 'Unfurls the enchanted fleece, shielding all nearby allies and converting 30% of incoming damage into healing.',
        cooldown: '15s'
      },
      {
        name: 'Captain of the Unknown',
        typeName: 'Passive Rally',
        description: 'Provides nearby allies with bonus movement speed, resistance to water hazards, and elevated critical chance.',
      }
    ],
    trivia: [
      'The prow of the ship Argo was fitted with a piece of sacred oak from Zeus’s oracle at Dodona that could miraculously speak human words to warn the crew.',
      'The crew included Heracles, Castor and Pollux, Orpheus, Peleus (father of Achilles), and the huntress Atalanta.'
    ]
  },

  medea: {
    title: 'Sorceress of Colchis · High Priestess of Hecate & Dragon Maiden',
    domain: 'High Sorcery, Herbal Potions, Dragon Flight, Vengeance, Necromancy',
    domainDetail: 'Princess of Colchis and granddaughter of Helios; formidable sorceress whose esoteric arts conquered the Golden Fleece',
    quote: 'My magic can stay the courses of rivers, put dragons to sleep, and burn deceitful kings to cinder.',
    symbols: ['Winged Dragon Chariot', 'Cauldron of Rejuvenation', 'Enchanted Golden Circlet', 'Dagger of Hecate'],
    animals: ['Winged Serpents', 'Colchian Dragon'],
    plants: ['Colchian Crocus', 'Aconite', 'Black Hellebore'],
    lore: {
      summary: 'Medea is one of the most powerful and complex female figures in world literature. A high priestess of Hecate possessing deep alchemical knowledge, she defied her kingdom for love, only to unleash devastating vengeance when betrayed.',
      birthAndOrigin: 'Daughter of King Aeetes of Colchis and the Oceanid Idyia, granddaughter of the sun titan Helios, and niece of the enchantress Circe.',
      majorStories: [
        {
          title: 'Subduing the Sleepless Colchian Dragon',
          period: 'Heroic Age',
          content: 'When Jason faced the sleepless dragon guarding the Golden Fleece, Medea sang hypnotic incantations and sprinkled enchanted herbs into the beast’s eyes, putting the ancient monster into deep slumber so Jason could seize the treasure.',
          highlight: 'The triumphant application of sorcery over insurmountable mythological beasts'
        },
        {
          title: 'The Rejuvenation of Aeson and Trick on Pelias',
          period: 'Heroic Age',
          content: 'Medea brewed a bubbling cauldron of magical herbs, drained elderly Aeson’s veins, and refilled them, restoring him to youthful vigor. Tricking the daughters of wicked Pelias into believing she would do the same for their father, she led them to slay him, avenging Jason’s family.',
          highlight: 'The folklore theme of the cauldron of youth and deadly alchemical deception'
        },
        {
          title: 'The Poisoned Robe and Flight to Athens',
          period: 'Heroic Climax',
          content: 'Betrayed by Jason in Corinth, Medea sent Princess Glauce a wedding robe steeped in golden venom that burst into unquenchable flame upon contact. Slaying her own sons to deny Jason any legacy, she departed Corinth on a chariot drawn by winged dragons sent by Helios.',
          highlight: 'Euripides’ immortal portrait of incandescent fury and tragic defiance'
        }
      ],
      romanDifferences: 'Seneca the Younger wrote a famously dark Roman tragedy of Medea, depicting her as the ultimate cosmic force of untamed passion defying stoic reason.',
      etymologyAndLegacy: 'The name Medea connects with the root *med- meaning "to counsel" or "to heal" (medicine). She remains an enduring icon in modern dramatic literature.',
      famousArtwork: [
        {
          title: 'Medea (Furious Medea)',
          artist: 'Eugène Delacroix',
          period: 'Romanticism (1862)',
          location: 'Musée du Louvre, Paris',
          description: 'A masterpiece of psychological intensity capturing the wild-eyed sorceress clutching a dagger with her children in a shadowed mountain cave.'
        }
      ]
    },
    skills: [
      {
        name: 'Inferno of the Poisoned Robe',
        typeName: 'Ultimate Power',
        description: 'Engulfs target enemy in unquenchable alchemical dragon fire, dealing continuous true damage that spreads to surrounding foes.',
        cooldown: '30s'
      },
      {
        name: 'Hex of the Sleepless Serpent',
        typeName: 'Stasis Mist',
        description: 'Releases a cloud of purple herbal vapor, putting all enemies caught in its radius into magical stasis for 3 seconds.',
        cooldown: '14s'
      },
      {
        name: 'Dragon Chariot of Helios',
        typeName: 'Passive Flight',
        description: 'Takes flight upon taking heavy damage, gaining a temporary shield, bonus magic penetration, and escaping hostile ground traps.',
      }
    ],
    trivia: [
      'Medea later sought sanctuary in Athens where she married King Aegeus and gave birth to Medus, legendary ancestor of the Medes.',
      'According to Pindar and Apollonius, in the afterlife Medea became the immortal divine bride of Achilles in the Elysian Fields.'
    ]
  },

  orpheus: {
    title: 'The Master Bard · Musician Whose Lyre Moved Beasts and the Underworld',
    domain: 'Music, Poetry, Lyre, Orphism, Mysticism, Underworld Descent',
    domainDetail: 'Son of the Muse Calliope; divine musician whose golden melodies could tame wild beasts, bend rivers, and weep stones',
    quote: 'Even the cold stone gates of Hades soften and weep when the chords of true love are struck.',
    symbols: ['Golden Seven-String Lyre', 'Laurel Garland', 'Hellenic Chlamys', 'Plectrum'],
    animals: ['Nightingale', 'Tamed Lion', 'Swan'],
    plants: ['Oak (Danced to His Tune)', 'Willow', 'Asphodel'],
    lore: {
      summary: 'Orpheus is the legendary founder of poetry and music in Greece. His musical genius held such transcendent power that savage beasts sat docile at his feet and rocks wept, making him the only mortal whose art moved the Lord of the Underworld.',
      birthAndOrigin: 'Son of the Thracian king Oeagrus (or Apollo) and Calliope, the Muse of epic poetry. Apollo gifted him a seven-string golden lyre, to which Orpheus added two strings to honor the nine Muses.',
      majorStories: [
        {
          title: 'Silencing the Sirens on the Argo',
          period: 'Heroic Age',
          content: 'When the ship Argo sailed past the Sirens’ treacherous island, Orpheus took up his golden lyre and sang with such celestial harmony that his voice completely drowned out the Sirens’ deadly call, saving the entire crew from shipwreck.',
          highlight: 'The triumph of sublime spiritual music over seductive primal destruction'
        },
        {
          title: 'Descent into the Underworld for Eurydice',
          period: 'Heroic Age',
          content: 'When his beloved wife Eurydice died of a viper bite, Orpheus descended into the Underworld. His mournful lyre made Cerberus sleep, stopped the wheel of Ixion, and moved Hades and Persephone to tears. They allowed Eurydice to follow him back, on condition he not look back until reaching sunlight.',
          highlight: 'One of the most famous and heartbreaking romantic tragedies in world literature'
        },
        {
          title: 'The Fatal Backward Glance and Death in Thrace',
          period: 'Heroic Climax',
          content: 'Just steps before the sunlight, seized by love and anxiety, Orpheus turned his head. Eurydice was pulled back into the shadows forever. Grieving in Thrace, he was torn apart by frenzied Maenads; his severed head floated down the river Hebrus, still singing of Eurydice.',
          highlight: 'The archetype of the immortal voice of art surviving bodily destruction'
        }
      ],
      romanDifferences: 'Virgil’s Georgics and Ovid’s Metamorphoses cemented the definitive poetic versions of the Orpheus myth for European literature.',
      etymologyAndLegacy: 'The mystical mystery religion of "Orphism" reshaped Greek philosophy. His story inspired Claudio Monteverdi’s L’Orfeo, the first great operatic masterpiece.',
      famousArtwork: [
        {
          title: 'Orpheus and Eurydice',
          artist: 'Jean-Baptiste-Camille Corot',
          period: 'Romanticism (1861)',
          location: 'Museum of Fine Arts, Houston, USA',
          description: 'A luminous, misty landscape showing Orpheus gently holding Eurydice’s hand as he leads her through the shadowy Underworld groves.'
        }
      ]
    },
    skills: [
      {
        name: 'Hymn of Stygian Lament',
        typeName: 'Ultimate Power',
        description: 'Strikes the golden lyre with overwhelming beauty, putting all nearby enemies into a pacified trance where they cannot attack.',
        cooldown: '30s'
      },
      {
        name: 'Harmonic Melody of the Muses',
        typeName: 'Inspirational Chord',
        description: 'Plays an uplifting melody that heals all nearby allies and boosts their ability power and attack damage by 25%.',
        cooldown: '14s'
      },
      {
        name: 'Resonance of Calliope',
        typeName: 'Passive Harmony',
        description: 'Basic attacks send musical soundwaves that bounce between enemies, dealing magic damage and slowing their movement speed.',
      }
    ],
    trivia: [
      'After his death, Apollo placed Orpheus’s golden lyre in the night sky as the constellation Lyra.',
      'His severed head and lyre washed ashore on the island of Lesbos, which became the historic center of ancient Greek lyric poetry.'
    ]
  },

  bellerophon: {
    title: 'Rider of Pegasus · Slayer of the Chimera & Tragic Challenger of the Heavens',
    domain: 'Aerial Combat, Monster Slaying, Pegasus, Mount Olympus, Hubris',
    domainDetail: 'Hero who bridled the winged horse Pegasus with Athena’s golden bridle and slew the fire-breathing Chimera',
    quote: 'Upon the wings of Pegasus, no monster of earth or sky could match our soaring stride.',
    symbols: ['Golden Bridle of Athena', 'Lead-Tipped Spear', 'Pegasus Wings', 'Chimera Trophy'],
    animals: ['Winged Horse Pegasus', 'Chimera'],
    plants: ['Wild Thyme', 'Laurel'],
    lore: {
      summary: 'Bellerophon was the magnificent hero who captured and tamed the immortal winged horse Pegasus. After slaying the terrifying fire-breathing Chimera, he was seized by pride and attempted to fly to Mount Olympus, suffering a tragic fall.',
      birthAndOrigin: 'Son of King Glaucus of Corinth (or the god Poseidon) and Eurynome. Exiled for an accidental killing, he took refuge with King Proetus of Tiryns.',
      majorStories: [
        {
          title: 'Bridling Pegasus at the Pirene Fountain',
          period: 'Heroic Age',
          content: 'Athena appeared to Bellerophon in a dream, giving him a magnificent golden bridle. Awakening, he found Pegasus drinking at the Pirene fountain in Corinth, slipped the bridle over the divine steed’s neck, and took to the skies.',
          highlight: 'The harmonious union of human ambition and divine celestial power'
        },
        {
          title: 'Slaying of the Fire-Breathing Chimera',
          period: 'Heroic Age',
          content: 'Tasked by King Iobates of Lycia to destroy the monstrous Chimera, Bellerophon attacked from the air on Pegasus. He drove a lead-tipped spear into the beast’s fiery throat; the monster’s own breath melted the lead, suffocating it from within.',
          highlight: 'The classic victory of ingenious tactical planning over impossible monstrous fury'
        },
        {
          title: 'The Hubris of Flying to Olympus and the Gadfly',
          period: 'Heroic Climax',
          content: 'Drunk with glory, Bellerophon believed he belonged among the gods and urged Pegasus toward the summit of Mount Olympus. Angered by his hubris, Zeus sent a tiny gadfly to sting Pegasus under the tail. The bucking horse threw Bellerophon back to earth, leaving him crippled and wandering alone.',
          highlight: 'The quintessential Greek moral tragedy warning against mortal arrogance (Hybris)'
        }
      ],
      romanDifferences: 'Roman poets frequently cited Bellerophon as a cautionary mirror alongside Icarus and Phaethon against exceeding mortal limits.',
      etymologyAndLegacy: 'The constellation Pegasus honors the winged steed, while Bellerophon’s name was given to the first detected extrasolar planet (51 Pegasi b).',
      famousArtwork: [
        {
          title: 'Bellerophon Mounted on Pegasus Slaying the Chimera',
          artist: 'Attributed to the Chimera Painter',
          period: 'Corinthian Black-Figure Plate (c. 575 BC)',
          location: 'Archaeological Museum of Corinth, Greece',
          description: 'A celebrated archaic composition showing the airborne rider on Pegasus thrusting his spear down into the tripartite monster.'
        }
      ]
    },
    skills: [
      {
        name: 'Airborne Dive of Pegasus',
        typeName: 'Ultimate Power',
        description: 'Soars into the clouds on Pegasus and dives into the ground, creating a crater shockwave that stuns and crushes enemies.',
        cooldown: '30s'
      },
      {
        name: 'Molten Lead Spear Thrust',
        typeName: 'Anti-Beast Strike',
        description: 'Drives a lead-weighted lance into an enemy’s core, dealing heavy physical damage and applying a lethal molten burn.',
        cooldown: '12s'
      },
      {
        name: 'Skyward Ascendance',
        typeName: 'Passive Flight',
        description: 'Moves freely across impassable cliffs and structures; basic attacks gain bonus range and critical damage from high ground.',
      }
    ],
    trivia: [
      'After throwing Bellerophon, Pegasus continued flying up to Olympus, where Zeus welcomed the divine horse to carry his lightning bolts.',
      'The expression "Bellerophontic letters" refers to a message carrying orders for the bearer’s own execution.'
    ]
  },

  daedalus: {
    title: 'The Master Artisan · Architect of the Labyrinth & Pioneer of Flight',
    domain: 'Invention, Architecture, Labyrinth, Mechanical Ingenuity, Aviation',
    domainDetail: 'Descendant of Athena; Athens’ most brilliant craftsman who built the Cretan Labyrinth and fabricated wings of wax and feathers',
    quote: 'True mastery lies in balancing human daring with the immutable laws of nature.',
    symbols: ['Wings of Wax and Feathers', 'Compass and Plumb Line', 'Labyrinth Blueprint', 'Bronze Saw'],
    animals: ['Partridge (Perdix)', 'Bee (Honeycomb of Daedalus)'],
    plants: ['Cypress', 'Pine (Resin for Wax)'],
    lore: {
      summary: 'Daedalus is the supreme visionary engineer of Greek legend. Creator of lifelike statues that seemed to breathe, the intricate Cretan Labyrinth, and the first artificial wings of flight, his genius transformed human craft while enduring profound personal grief.',
      birthAndOrigin: 'Born of the royal house of Erechtheus in Athens, praised as the finest architect and inventor in the Mediterranean world.',
      majorStories: [
        {
          title: 'Building the Labyrinth of Knossos',
          period: 'Heroic Age',
          content: 'Commissioned by King Minos of Crete to imprison the Minotaur, Daedalus designed a maze so hopelessly intricate with winding corridors that he himself could barely find the exit.',
          highlight: 'The masterwork of architectural ingenuity and the symbol of psychological complexity'
        },
        {
          title: 'The Wings of Feathers and Wax',
          period: 'Heroic Age',
          content: 'Imprisoned in a high tower by Minos after aiding Ariadne, Daedalus studied the flight of birds. Gathering feathers and binding them with linen and beeswax, he fabricated two pairs of wings for himself and his son Icarus, warning him to fly neither too close to the sun nor too near the sea.',
          highlight: 'Humanity’s first mythical triumph over gravity and the realization of flight'
        },
        {
          title: 'The Riddle of the Spiral Conch Shell',
          period: 'Heroic Age',
          content: 'Hiding in Sicily under King Cocalus, Daedalus was tracked by Minos, who posed a challenge: thread a spiral conch shell from end to end. Daedalus tied a silk gossamer thread to an ant, coated the tip of the shell with honey, and let the ant pull the thread through, proving his identity.',
          highlight: 'The triumph of pure scientific and geometric intellect solving impossible puzzles'
        }
      ],
      romanDifferences: 'Ovid detailed Daedalus’s tragedy in the Metamorphoses with deep paternal empathy, portraying him as a brilliant mind broken by filial sorrow.',
      etymologyAndLegacy: 'The adjective "daedalian" means intricately crafted or ingenious. The Daedalus crater on the dark side of the Moon bears his name.',
      famousArtwork: [
        {
          title: 'Daedalus and Icarus',
          artist: 'Anthony van Dyck',
          period: 'Baroque (c. 1615–1625)',
          location: 'Art Gallery of Ontario, Toronto',
          description: 'A deeply moving composition showing the wise, aged father tenderly tying the feathered wings onto the shoulders of his youthful son.'
        }
      ]
    },
    skills: [
      {
        name: 'Deployment of the Kinetic Labyrinth',
        typeName: 'Ultimate Power',
        description: 'Constructs a maze of stone barriers and shifting walls around target area, trapping enemies and blocking all projectiles for 5 seconds.',
        cooldown: '32s'
      },
      {
        name: 'Aeronautical Glide Wings',
        typeName: 'Tactical Glide',
        description: 'Takes flight on feathered wings, boosting movement speed by 60% and dropping caltrops and blinding smoke along the path.',
        cooldown: '14s'
      },
      {
        name: 'Pioneer of Mechanical Wonders',
        typeName: 'Passive Engineering',
        description: 'Allies near Daedalus gain increased equipment stats and shield efficiency; automatically repairs allied defensive structures.',
      }
    ],
    trivia: [
      'Daedalus is credited with inventing the carpenter’s axe, the plumb line, the drill, and the first glue.',
      'His statues were so remarkably lifelike with open eyes and parted legs that people tied them with ropes to keep them from walking away.'
    ]
  },

  icarus: {
    title: 'The Reckless Aviator · He Who Soared Too Close to the Sun',
    domain: 'Audacity, Aviation, Tragic Ambition, Freedom, Mortal Hubris',
    domainDetail: 'Son of Daedalus; young youth whose intoxicating joy of flight carried him too close to the sun, melting his wax wings',
    quote: 'Better to touch the golden light of the sun for a single heartbeat than to dwell forever in cold shadow.',
    symbols: ['Melted Wax Feathers', 'Golden Sunbeams', 'Icarian Sea Waters', 'Sunburnt Wings'],
    animals: ['Seagull', 'Falcon'],
    plants: ['Seaweed', 'Poppy'],
    lore: {
      summary: 'Icarus symbolizes the intoxicating passion of youth and the tragic consequences of overweening ambition. Gifted with artificial wings by his father, his desire to touch the heavens resulted in his fall into the Icarian Sea.',
      birthAndOrigin: 'Son of the master craftsman Daedalus and Naucrate, a palace maiden of King Minos of Crete.',
      majorStories: [
        {
          title: 'The Father’s Warning and the Flight from Crete',
          period: 'Heroic Age',
          content: 'Strapping the wax-and-feather wings to his son, Daedalus solemnly commanded: "Fly the middle course, Icarus; if you fly too low, the ocean brine will weigh down your feathers; if you fly too high, the sun’s fire will melt the wax."',
          highlight: 'The timeless counsel of the Golden Mean (moderation) between extremes'
        },
        {
          title: 'The Flight Toward the Sun and the Fatal Fall',
          period: 'Heroic Age',
          content: 'Exhilarated by the miraculous sensation of flight, Icarus forgot his father’s warning and soared higher and higher toward the blazing sun. The intense heat softened and melted the beeswax; the feathers scattered into the wind, and Icarus fell into the sea.',
          highlight: 'The definitive classical tragedy of youthful passion and ambition outrunning wisdom'
        },
        {
          title: 'The Mourning of Daedalus and the Icarian Sea',
          period: 'Heroic Climax',
          content: 'Daedalus searched the waves, finding only floating feathers. He buried his son’s body on a nearby island, naming it Icaria and the surrounding waters the Icarian Sea, and hung his wings in Apollo’s temple, vowing never to fly again.',
          highlight: 'The heartbreaking price of technological overreach paid in human grief'
        }
      ],
      romanDifferences: 'Ovid’s Metamorphoses captured the psychological thrill of the boy tasting godlike flight before his sudden plummet into the azure waves.',
      etymologyAndLegacy: 'The phrase "flying too close to the sun" is an international idiom for dangerous ambition. Asteroid 1566 Icarus bears his name.',
      famousArtwork: [
        {
          title: 'Landscape with the Fall of Icarus',
          artist: 'Pieter Bruegel the Elder (Attributed)',
          period: 'Northern Renaissance (c. 1560)',
          location: 'Royal Museums of Fine Arts of Belgium, Brussels',
          description: 'A celebrated masterpiece showing a farmer plowing his field while two tiny white legs splash unnoticed into the sea in the corner, capturing the world’s indifference to private tragedy.'
        },
        {
          title: 'The Fall of Icarus',
          artist: 'Henri Matisse',
          period: 'Modernism / Cut-outs (1947)',
          location: 'Centre Pompidou, Paris',
          description: 'An iconic silhouette of a black figure falling through deep royal blue sky studded with bursting golden stars, with a pulsing red heart.'
        }
      ]
    },
    skills: [
      {
        name: 'Solar Overdrive Ascent',
        typeName: 'Ultimate Power',
        description: 'Flies straight toward the heavens, bathing the battlefield in blinding solar radiance before crashing down as a burning comet.',
        cooldown: '28s'
      },
      {
        name: 'Feather Gale Burst',
        typeName: 'Wind Dash',
        description: 'Beats his wings forcefully to dash in any direction, knocking back approaching enemies and creating a slipstream for allies.',
        cooldown: '10s'
      },
      {
        name: 'Intoxication of Flight',
        typeName: 'Passive Momentum',
        description: 'Gains stacking attack speed and movement speed the longer he remains continuously in motion; takes bonus damage from fire.',
      }
    ],
    trivia: [
      'W.H. Auden’s famous poem "Musée des Beaux Arts" was inspired by Bruegel’s painting of Icarus falling while ordinary life goes on.',
      'The island of Icaria in Greece, where Daedalus buried his son, is renowned today as one of the world’s famous Blue Zones for human longevity.'
    ]
  },

  pan: {
    title: 'God of the Wild · Sovereign of Shepherds, Flutes & Panic',
    domain: 'Wild Nature, Pastures, Flocks, Shepherds, Pan Flute (Syrinx), Forest Panic',
    domainDetail: 'Satyr-like god with horns and goat legs; spirit of rustic mountains whose terrifying shout sparks irrational "panic"',
    quote: 'In the whispering pines and silent hills, beware the wild scream that drives men mad.',
    symbols: ['Syrinx (Pan Pipes / Seven-Reed Flute)', 'Shepherd’s Crook', 'Pinecone Garland', 'Goat Horns'],
    animals: ['Goat', 'Ram', 'Wild Boar'],
    plants: ['Pine Tree', 'Water Reed', 'Wild Thyme'],
    lore: {
      summary: 'Pan is the primal god of wild forests, rustic pastures, and untamed nature. Roaming the rugged mountains of Arcadia with his nymph companions, his sudden shrieking war cry had the supernatural power to incite blind, irrational "panic" in armies.',
      birthAndOrigin: 'Son of Hermes and the nymph Penelopeia (or Dryope). Born with goat horns, a beard, and cloven hooves, his nurse fled in terror, but Hermes wrapped the cheerful baby in a hare skin and carried him to Olympus, where all the gods rejoiced.',
      majorStories: [
        {
          title: 'The Origin of the Syrinx (Pan Flute)',
          period: 'Archaic Era',
          content: 'Pursuing the chaste nymph Syrinx through the woods, Pan chased her to the river Ladon. Syrinx prayed to river nymphs and transformed into hollow river reeds. Sighing in disappointment, Pan heard the sweet music made by the wind through the reeds, cut them into unequal lengths, and invented the pan flute.',
          highlight: 'The classical Mediterranean myth of rural melody born of longing'
        },
        {
          title: 'The Battle of Marathon and the Gift of Panic',
          period: 'Classical History (490 BC)',
          content: 'Before the Battle of Marathon, the Athenian runner Philippides met Pan in the mountains. Pan promised to help Athens if they honored him. In the battle, Pan cast irrational terror ("panic") over the massive Persian army, prompting the grateful Athenians to establish a cave shrine on the Acropolis.',
          highlight: 'The historical convergence of rustic myth and Greek military triumph'
        },
        {
          title: 'The Death of the Great God Pan',
          period: 'Plutarch / Roman Era',
          content: 'Plutarch recorded that during the reign of Tiberius, a sailor named Thamus heard a divine voice calling across the sea: "When you reach Palodes, announce that the Great God Pan is dead!" When Thamus cried the news, a great wailing arose from the shores.',
          highlight: 'The poignant symbolic end of the pagan natural world and the dawn of a new era'
        }
      ],
      romanDifferences: 'In Rome, he was identified with Faunus and Lupercus, celebrated in the ancient wild festival of Lupercalia in February.',
      etymologyAndLegacy: 'The word "panic" (panikon deima, "terror of Pan") and the pan flute directly carry his name.',
      famousArtwork: [
        {
          title: 'Pan and Syrinx',
          artist: 'Peter Paul Rubens and Jan Brueghel the Elder',
          period: 'Baroque (c. 1617–1619)',
          location: 'Museum of Fine Arts, Kassel, Germany',
          description: 'A lush landscape showing Pan reaching eagerly through marsh reeds to catch the nymph Syrinx just as she transforms.'
        }
      ]
    },
    skills: [
      {
        name: 'The Great Panic Shout',
        typeName: 'Ultimate Power',
        description: 'Unleashes a terrifying primeval roar across the battlefield, inflicting mass terror and forcing all enemies to flee blindly for 3 seconds.',
        cooldown: '30s'
      },
      {
        name: 'Melody of the Syrinx Pipes',
        typeName: 'Pastoral Harmony',
        description: 'Plays a soothing rustic tune that charms surrounding beasts and cleanses allies of fear and confusion.',
        cooldown: '12s'
      },
      {
        name: 'Spirit of the Arcadian Wild',
        typeName: 'Passive Agile Leaping',
        description: 'Moves with cloven-hoof agility over terrain; gains bonus health regeneration and dodge chance while in brush or forests.',
      }
    ],
    trivia: [
      'The ancient Greeks believed that waking Pan during his afternoon siesta in the woods would provoke his terrifying wrath.',
      'Pan was famously the only Greek deity whose physical death was explicitly announced in ancient literature.'
    ]
  },

  chimera: {
    title: 'The Triple-Beast of Lycia · Fire-Breathing Abomination',
    domain: 'Fire-Breathing, Hybrid Monstrosity, Lycian Devastation, Terror',
    domainDetail: 'Offspring of Typhon and Echidna; monstrous beast with the head of a lion, body of a goat, and tail of a venomous serpent',
    quote: 'From three jaws I breathe ash, venom, and roaring doom; no mortal shield can withstand my flame.',
    symbols: ['Lion’s Flaming Jaw', 'Goat’s Midsection Head', 'Serpent’s Venomous Tail', 'Lycian Ash'],
    animals: ['Lion', 'Goat', 'Viper'],
    plants: ['Charred Sulfur Thistle'],
    lore: {
      summary: 'The Chimera is the legendary hybrid terror of Lycia. Breathed forth by primordial monsters, this terrifying creature scorched farmland and slaughtered armies with torrents of volcanic fire until slain by Bellerophon atop Pegasus.',
      birthAndOrigin: 'Born to the serpentine giant Typhon and Echidna, sister to Cerberus, the Lernaean Hydra, and the Sphinx.',
      majorStories: [
        {
          title: 'The Devastation of the Kingdom of Lycia',
          period: 'Heroic Age',
          content: 'Dwelling in a volcanic gorge in Lycia, the Chimera ravaged villages, burnt olive groves, and reduced cattle herds to cinders with blasts of fiery sulfur from its three mouths.',
          highlight: 'The mythological personification of dangerous volcanic gas vents and wildfire'
        },
        {
          title: 'The Aerial Duel with Bellerophon and Pegasus',
          period: 'Heroic Age',
          content: 'King Iobates sent Bellerophon on a suicide mission to slay the beast. Soaring safely out of range on Pegasus, Bellerophon dropped a block of lead into the Chimera’s open, roaring mouth; the beast’s own white-hot fire melted the lead, choking and killing it from within.',
          highlight: 'The classic victory of ingenious tactical planning over impossible monstrous fury'
        }
      ],
      romanDifferences: 'Virgil placed the spectral form of the Chimera at the iron gates of the Underworld in the Aeneid.',
      etymologyAndLegacy: 'The word "chimera" (or "chimerical") in modern language refers to an impossible illusion, and in genetics to an organism containing tissues of diverse genetic origins.',
      famousArtwork: [
        {
          title: 'Chimera of Arezzo',
          artist: 'Etruscan Bronze Master',
          period: 'Classical Antiquity / Etruscan (c. 400 BC)',
          location: 'National Archaeological Museum, Florence',
          description: 'One of the most famous surviving bronze sculptures from antiquity, depicting the coiled, roaring lion with a snarling goat head erupting from its back and serpent tail.'
        }
      ]
    },
    skills: [
      {
        name: 'Triple Hellfire Torrent',
        typeName: 'Ultimate Power',
        description: 'Unleashes a sweeping cone of concentrated volcanic fire from the lion’s jaw, incinerating everything and leaving burning magma pools.',
        cooldown: '28s'
      },
      {
        name: 'Stygian Serpent Tail Whip',
        typeName: 'Poison Strike',
        description: 'Strikes behind with the viper tail, poisoning and stunning any enemy attempting to flank the monster.',
        cooldown: '11s'
      },
      {
        name: 'Hybrid Resilience',
        typeName: 'Passive Ferocity',
        description: 'Immune to all burn and fire damage; gains bonus attack speed as health declines.',
      }
    ],
    trivia: [
      'Mount Chimaera in ancient Lycia (modern Yanartaş in Turkey) is an actual geothermal site where dozens of natural methane vents burn perpetually from the rocks.',
      'Homer described the Chimera in Book 6 of the Iliad as: "lion in front, serpent behind, and in the middle a goat, breathing out a terrible flame of bright fire."'
    ]
  },

  minotaur: {
    title: 'The Beast of the Labyrinth · Asterion the Bull of Minos',
    domain: 'Labyrinth, Bestial Fury, Man-Eating, Cretan Dominion, Mazes',
    domainDetail: 'Offspring of Queen Pasiphaë and the Cretan Bull; ferocious bull-headed monster imprisoned within Daedalus’s labyrinth',
    quote: 'Step into my winding darkness; none who hear the echoes of my hooves shall ever see the sky again.',
    symbols: ['Labyrinth Corridors', 'Bovine Horns', 'Shattered Human Bones', 'Labrys Axe'],
    animals: ['White Bull', 'Vulture'],
    plants: ['Subterranean Fungus'],
    lore: {
      summary: 'The Minotaur (Asterion) is the tragic and terrifying monster of the Cretan Labyrinth. The product of divine punishment inflicted upon King Minos, he was kept confined in Daedalus’s twisting maze and fed on Athenian youths until slain by Theseus.',
      birthAndOrigin: 'When King Minos refused to sacrifice a magnificent white bull sent by Poseidon, the sea god cursed Minos’s queen Pasiphaë with an unnatural passion for the beast. Daedalus built a hollow wooden heifer for her, resulting in the birth of the bull-headed child Asterion.',
      majorStories: [
        {
          title: 'The Tribute of Fourteen Athenian Youths',
          period: 'Heroic Age',
          content: 'After defeating Athens in war, King Minos demanded a horrifying tribute every nine years: seven young men and seven maidens sent unarmed into the Labyrinth to be hunted down and devoured by the Minotaur.',
          highlight: 'The dark mythological symbol of imperial tyranny and human sacrifice'
        },
        {
          title: 'Theseus and the Cleansing of the Labyrinth',
          period: 'Heroic Age',
          content: 'Arriving with the tribute, Prince Theseus entered the maze with Ariadne’s thread. Deep in the heart of the labyrinth, Theseus confronted the sleeping monster, wrestled him to the ground, and battered him to death with his bare fists or sword.',
          highlight: 'The triumph of human intellect and heroic valor ending an era of terror'
        }
      ],
      romanDifferences: 'Ovid explored the psychological horror of the hybrid monster in the Metamorphoses, highlighting the tragedy of a creature born between human consciousness and bestial hunger.',
      etymologyAndLegacy: 'The name Minotaur literally means "Bull of Minos" (Minos-Tauros). His real name was Asterion ("Starry One"). He remains a seminal archetype of the beast within human nature in modern fantasy literature.',
      famousArtwork: [
        {
          title: 'Minotauromachy',
          artist: 'Pablo Picasso',
          period: 'Modernism / Surrealism (1935)',
          location: 'Museum of Modern Art, New York',
          description: 'A celebrated etching showing the colossal, tragic Minotaur confronting an innocent little girl holding a candle and flowers, exploring themes of violence and innocence.'
        }
      ]
    },
    skills: [
      {
        name: 'Labyrinth Trample Charge',
        typeName: 'Ultimate Power',
        description: 'Charges forward with unstoppable force, knocking airborne and crushing all enemies in his path against walls for massive physical damage.',
        cooldown: '26s'
      },
      {
        name: 'Primal Horn Gore',
        typeName: 'Brutal Gore',
        description: 'Gores a target with heavy horns, inflicting armor shatter and bleeding damage over time.',
        cooldown: '10s'
      },
      {
        name: 'Lord of the Maze',
        typeName: 'Passive Dominance',
        description: 'Cannot be slowed or trapped; gains bonus movement speed and true sight within enclosed terrain and narrow pathways.',
      }
    ],
    trivia: [
      'Archaeological excavations of the Palace of Knossos in Crete revealed endless multi-story rooms, winding corridors, and bull-leaping frescoes that inspired the original Labyrinth myth.',
      'Dante placed the Minotaur in the Seventh Circle of the Inferno as the guardian of the violent.'
    ]
  },

  sphinx: {
    title: 'Riddler of Thebes · Winged Lioness of Prophecy & Ruin',
    domain: 'Riddles, Enigmas, Prophecy, Catastrophe, Winged Guardianship',
    domainDetail: 'Daughter of Typhon and Echidna; creature with the head of a woman, body of a lion, and wings of an eagle who strangled all who failed her riddle',
    quote: 'Answer my riddle and live; speak in error and your bones shall join the dust of my mountain.',
    symbols: ['The Riddle of the Three Ages of Man', 'Eagle Wings', 'Lion’s Claws', 'Theban Crag'],
    animals: ['Lion', 'Golden Eagle', 'Serpent'],
    plants: ['Mountain Sage', 'Cypress'],
    lore: {
      summary: 'The Sphinx is the deadly intellectual guardian of Mount Phicium outside Thebes. Perched upon a jagged cliff, she posed a profound riddle to every traveler, strangling and devouring all who failed until Oedipus solved her enigma.',
      birthAndOrigin: 'Bred of Typhon and Echidna (or the Chimera and Orthrus), sent by Hera to punish the city of Thebes for the crimes of King Laius.',
      majorStories: [
        {
          title: 'The Reign of Terror over Thebes',
          period: 'Heroic Age',
          content: 'Blocking the mountain pass into Thebes, the Sphinx stopped every traveler with her riddle: "What walks on four legs in the morning, two legs at noon, and three legs in the evening?" Countless noblemen and citizens failed and were devoured.',
          highlight: 'The mythological embodiment of intellectual catastrophe and deadly riddle contests'
        },
        {
          title: 'Oedipus and the Solution of Man',
          period: 'Heroic Age',
          content: 'Oedipus met the beast and answered without hesitation: "Man. As an infant he crawls on all fours; in prime of life he walks on two legs; in old age he leans on a cane as a third leg." Shamed and defeated by the correct answer, the Sphinx leaped to her death from the cliffs.',
          highlight: 'Sophocles’ foundational tragedy of human intellect answering the riddle of existence'
        }
      ],
      romanDifferences: 'While the Egyptian Sphinx was primarily a male protective guardian of temples, the Greek Sphinx was always a winged, female monster of riddles and doom.',
      etymologyAndLegacy: 'The name Sphinx derives from the Greek verb sphingo ("to squeeze" or "to strangle"), which also gave the medical term "sphincter".',
      famousArtwork: [
        {
          title: 'Oedipus and the Sphinx',
          artist: 'Jean-Auguste-Dominique Ingres',
          period: 'Neoclassicism (1808)',
          location: 'Musée du Louvre, Paris',
          description: 'A celebrated painting showing the athletic Oedipus leaning forward in thoughtful contemplation inside the monster’s cave littered with human bones.'
        },
        {
          title: 'Oedipus and the Sphinx (Symbolist)',
          artist: 'Gustave Moreau',
          period: 'Symbolism (1864)',
          location: 'Metropolitan Museum of Art, New York',
          description: 'A tense, hypnotic masterpiece where the feline Sphinx clings directly onto Oedipus’s chest, their intense gazes locked in a battle of wills.'
        }
      ]
    },
    skills: [
      {
        name: 'The Inescapable Fatal Riddle',
        typeName: 'Ultimate Power',
        description: 'Imposes the Sphinx’s enigma on all nearby enemies, silencing their abilities and dealing massive damage if they attempt to move or cast.',
        cooldown: '30s'
      },
      {
        name: 'Razor Wing Gale',
        typeName: 'Wind Slash',
        description: 'Beats her eagle wings to unleash a flurry of razor feathers that pierce enemy armor and blind targets for 2 seconds.',
        cooldown: '12s'
      },
      {
        name: 'Intellectual Dominance',
        typeName: 'Passive Enigma',
        description: 'Takes 30% reduced damage from abilities and reflects 20% of magical debuffs back onto attackers.',
      }
    ],
    trivia: [
      'In Greek dialect, she was also called Phix, and the mountain she haunted was Mount Phicion.',
      'Her defeat by Oedipus won him the crown of Thebes and the hand of Queen Jocasta, unknowingly triggering his tragic fate.'
    ]
  },

  hector: {
    title: 'The Tamer of Horses · Supreme Champion & Shield of Troy',
    domain: 'Patriotism, Chivalry, Martial Duty, Family Devotion, Defense of Troy',
    domainDetail: 'Eldest prince of Troy and son of King Priam; beloved commander who fought with chivalrous honor to defend his city and family',
    quote: 'One omen is best: to fight bravely for one’s fatherland.',
    symbols: ['Gleaming Bronze Helmet with Horsehair Crest', 'Trojan Wall Spear', 'Golden Armor of Priam', 'Chariot of Troy'],
    animals: ['War Steed (Galathe, Podargos)', 'Lion'],
    plants: ['Trojan Oak', 'Wild Olive'],
    lore: {
      summary: 'Hector is celebrated in Homer’s Iliad as the quintessential noble warrior. Unlike Achilles who fought for personal glory, Hector fought out of selfless duty to protect his aged parents, his beloved wife Andromache, his infant son Astyanax, and his doomed city.',
      birthAndOrigin: 'Firstborn son of King Priam and Queen Hecuba of Troy, supreme general of the combined Trojan and allied armies.',
      majorStories: [
        {
          title: 'The Farewell to Andromache and Astyanax',
          period: 'Trojan War / Book 6 of Iliad',
          content: 'Meeting his wife Andromache at the Scaean Gate before battle, his baby son Astyanax wept in terror at his father’s gleaming bronze helmet with its nodding horsehair crest. Hector took off his helmet, laughed with tender tears, kissed his child, and prayed to Zeus for his son’s future glory.',
          highlight: 'The most deeply moving and human family scene in ancient epic literature'
        },
        {
          title: 'Breaching the Achaean Ramparts and Burning the Ships',
          period: 'Trojan War',
          content: 'Leading the Trojan charge, Hector lifted a boulder that two men could barely hoist and shattered the Greek gates, personally leaping among the Greek ships with a torch to set them blazing.',
          highlight: 'The summit of Trojan military fortunes driving the Greeks to the brink of annihilation'
        },
        {
          title: 'The Final Duel with Achilles before the Scaean Gate',
          period: 'Trojan War',
          content: 'Standing alone outside the walls of Troy to face the wrath of Achilles, Hector conquered his fear and fought with desperate honor. Slain by Achilles’ spear, his dying wish was for his body to be returned to his parents for honorable burial.',
          highlight: 'Homer’s heartbreaking portrait of noble mortal courage confronting inexorable doom'
        }
      ],
      romanDifferences: 'In Roman tradition through the Aeneid, Hector was venerated as the supreme ancestral hero whose fallen mantle was carried to Italy by Aeneas.',
      etymologyAndLegacy: 'The name Hector means "Holder" or "Steadfast Defender" (from ekhein). In the Middle Ages, he was honored as one of the Nine Worthies (chivalrous champions of history).',
      famousArtwork: [
        {
          title: 'Andromache Mourning Hector',
          artist: 'Jacques-Louis David',
          period: 'Neoclassicism (1783)',
          location: 'Musée du Louvre, Paris',
          description: 'A poignant composition showing Andromache weeping over the armored corpse of Hector while comforting her frightened young son.'
        }
      ]
    },
    skills: [
      {
        name: 'The Unyielding Wall of Troy',
        typeName: 'Ultimate Power',
        description: 'Plants his massive shield in the earth, generating a defensive bastion that absorbs 70% of all incoming damage for all allies behind him.',
        cooldown: '30s'
      },
      {
        name: 'Horsehair Crest Spear Thrust',
        typeName: 'Chivalric Strike',
        description: 'Executes a noble spear thrust that knocks back enemies and taunts them to attack Hector for 2.5 seconds.',
        cooldown: '12s'
      },
      {
        name: 'Shield of the Fatherland',
        typeName: 'Passive Duty',
        description: 'Gains 10% bonus armor and magic resistance for every nearby allied champion; immune to fear and panic debuffs.',
      }
    ],
    trivia: [
      'The Iliad concludes not with the fall of Troy or the death of Achilles, but with the line: "Thus they held the funeral rites for horse-taming Hector."',
      'Hector’s horsehair crest on his bronze helmet was so dazzling that ancient soldiers called him Korythaiolos ("Hector of the Shining Helm").'
    ]
  },

  paris: {
    title: 'Prince of Troy · The Archer of Destiny & Judge of the Golden Apple',
    domain: 'Archery, Physical Beauty, Judgment of Paris, Helen’s Love, Destiny of Troy',
    domainDetail: 'Younger prince of Troy; handsome archer whose fateful choice in the Judgment of Paris ignited the ten-year Trojan War',
    quote: 'Let kingdoms fall and armies clash; for the love of Helen, I would challenge the world.',
    symbols: ['Golden Apple of Discord', 'Horn Bow of Apollo', 'Phrygian Cap', 'Leopard Skin'],
    animals: ['Golden Apple', 'Leopard', 'Dove'],
    plants: ['Apple', 'Laurel'],
    lore: {
      summary: 'Paris (Alexander) is the fateful prince whose romantic passions changed the course of history. Awarding the golden apple to Aphrodite in exchange for the love of Helen, he carried her away to Troy, sparking the greatest war of antiquity.',
      birthAndOrigin: 'Second son of King Priam and Queen Hecuba. When Hecuba dreamed she birthed a burning torch that set all Troy ablaze, prophets warned that the child would destroy the city. Abandoned on Mount Ida, he was suckled by a bear and raised by shepherds.',
      majorStories: [
        {
          title: 'The Judgment of Paris on Mount Ida',
          period: 'Dawn of the Trojan War',
          content: 'Chosen by Zeus to judge the beauty contest between Hera (who offered dominion over Asia), Athena (who offered wisdom and victory in war), and Aphrodite (who offered the love of Helen, the most beautiful woman on earth), Paris awarded the Golden Apple to Aphrodite.',
          highlight: 'The legendary decision prioritizing romantic passion above political empire and military renown'
        },
        {
          title: 'The Abduction of Helen from Sparta',
          period: 'Dawn of the Trojan War',
          content: 'Visiting Sparta as an honored guest of King Menelaus, Paris violated the sacred laws of hospitality (Xenia) by eloping with Helen, carrying her and royal treasures across the Aegean to Troy.',
          highlight: 'The fateful catalyst assembling a thousand Greek ships against Troy'
        },
        {
          title: 'The Slaying of Achilles with the Guided Arrow',
          period: 'Fall of Troy',
          content: 'During the storming of the Scaean Gate, Paris notched an arrow in his bow. Guided by Apollo, the shaft struck Achilles directly in his vulnerable heel, bringing down the greatest champion of the Achaean host.',
          highlight: 'The fulfillment of the fateful oracle deciding the doom of heroes'
        }
      ],
      romanDifferences: 'Roman writers viewed Paris with mixed feelings: as the tragic romantic hero who loved Helen, but whose reckless passion doomed his noble brother Hector.',
      etymologyAndLegacy: 'The Judgment of Paris is one of the most frequently depicted scenes in Western painting, inspiring Botticelli, Rubens, Cranach, and Renoir.',
      famousArtwork: [
        {
          title: 'The Judgment of Paris',
          artist: 'Peter Paul Rubens',
          period: 'Baroque (c. 1636)',
          location: 'National Gallery, London',
          description: 'A celebrated painting showing the youthful shepherd Paris sitting beneath a tree, extending the golden apple toward Aphrodite while Hermes looks on.'
        }
      ]
    },
    skills: [
      {
        name: 'Apollo’s Guided Fatal Arrow',
        typeName: 'Ultimate Power',
        description: 'Fires a sniper arrow guided by divine light that seeks the lowest-health enemy anywhere on the map, dealing massive execution damage.',
        cooldown: '32s'
      },
      {
        name: 'Aphrodite’s Cloud Veil',
        typeName: 'Escape Mist',
        description: 'Summons a pink cloud of divine mist, tele-transporting Paris a short distance backward while blinding nearby enemies.',
        cooldown: '12s'
      },
      {
        name: 'Golden Apple’s Blessing',
        typeName: 'Passive Allure',
        description: 'Increases critical strike chance and grants bonus movement speed when moving away from hostile combatants.',
      }
    ],
    trivia: [
      'In athletic contests at Troy, Paris entered in disguise as a shepherd and defeated all of Priam’s noble sons, leading to his joyous royal recognition.',
      'He carried a recurve composite bow tipped with horn and wore a spotted leopard skin draped across his shoulders into battle.'
    ]
  },

  helen: {
    title: 'Helen of Troy · The Face That Launched a Thousand Ships',
    domain: 'Peerless Beauty, Divine Allure, Matrimonial Destiny, Spartan Royalty, Troy',
    domainDetail: 'Daughter of Zeus and Queen Leda; the most beautiful woman in the world whose abduction launched a thousand Greek warships to Troy',
    quote: 'Was this the face that launched a thousand ships, and burnt the topless towers of Ilium?',
    symbols: ['Golden Mirror of Sparta', 'Crown of White Lilies', 'Swan Feather', 'Embroidered Trojan Tapestry'],
    animals: ['White Swan (Zeus)', 'Dove'],
    plants: ['Lily', 'Lotus', 'Myrtle'],
    lore: {
      summary: 'Helen of Troy is the immortal archetype of peerless feminine beauty in world literature. Daughter of Zeus born from a swan’s egg, her radiant charm drew all the princes of Greece to swear the Oath of Tyndareus, an alliance that laid siege to Troy for ten years.',
      birthAndOrigin: 'Zeus transformed into a majestic white swan to visit Queen Leda of Sparta. Helen hatched from a divine swan egg, endowed with transcendent, unearthly beauty that surpassed all mortal women.',
      majorStories: [
        {
          title: 'The Oath of Tyndareus and the Suitors of Helen',
          period: 'Archaic Era',
          content: 'Every king and hero in Greece sought her hand. Fearing war among them, Odysseus devised the Oath of Tyndareus: all suitors swore to defend whoever was chosen as Helen’s husband. Menelaus was chosen, binding all Greece to his defense.',
          highlight: 'The legendary diplomatic pact that assembled the Pan-Hellenic coalition for the Trojan War'
        },
        {
          title: 'The View from the Scaean Gate (Teichoscopia)',
          period: 'Trojan War / Book 3 of Iliad',
          content: 'Standing upon the walls of Troy beside elderly King Priam, Helen identified the Greek champions below. The Trojan elders, watching her approach, murmured in awe: "Small blame that Trojans and Achaeans should suffer long years of agony for such a woman."',
          highlight: 'Homer’s sublime artistic demonstration of beauty that disarms all blame and war weariness'
        },
        {
          title: 'Return to Sparta with Menelaus',
          period: 'Post-War Odyssey',
          content: 'After the fall of Troy, Menelaus raised his sword to kill her for her betrayal, but the moment he beheld her radiant face, his sword dropped from his hands. Reconciled, she returned to rule Sparta as queen in peace and honor.',
          highlight: 'The absolute power of transcendent beauty overcoming wrath and vengeance'
        }
      ],
      romanDifferences: 'Virgil depicted Helen in the Aeneid as hiding in fear during the sack of Troy, while Ovid portrayed her as a passionate, complex woman in his Heroides.',
      etymologyAndLegacy: 'Christopher Marlowe immortalized her in Doctor Faustus: "Was this the face that launched a thousand ships?" The name Helen means "Torch" or "Shining Light".',
      famousArtwork: [
        {
          title: 'Helen of Troy',
          artist: 'Evelyn De Morgan',
          period: 'Pre-Raphaelite (1898)',
          location: 'De Morgan Collection, London',
          description: 'A luminous painting depicting Helen standing in golden robes before the sea, holding a mirror that reflects the fiery sunset over Troy.'
        },
        {
          title: 'The Abduction of Helen',
          artist: 'Guido Reni',
          period: 'Baroque (1631)',
          location: 'Musée du Louvre, Paris',
          description: 'A refined classical masterpiece showing Paris gallantly leading the elegant Helen by the hand toward waiting ships.'
        }
      ]
    },
    skills: [
      {
        name: 'The Face That Launched a Thousand Ships',
        typeName: 'Ultimate Power',
        description: 'Reveals her breathtaking divine countenance, fascinating all enemies in a large radius and disarming them from attacking for 4 seconds.',
        cooldown: '32s'
      },
      {
        name: 'The Oath of Tyndareus',
        typeName: 'Sacred Alliance',
        description: 'Binds an allied champion with a sacred oath; whenever Helen is attacked, the sworn ally absorbs the damage and gains bonus attack power.',
        cooldown: '14s'
      },
      {
        name: 'Radiance of the Divine Swan',
        typeName: 'Passive Beauty',
        description: 'Nearby enemies suffer reduced attack speed and increased ability cooldowns when targeting Helen or her sworn champion.',
      }
    ],
    trivia: [
      'According to Greek myth, Helen was abducted once before by Theseus when she was just a young girl, but rescued by her twin brothers Castor and Pollux.',
      'In the Odyssey, Helen serves a magical herbal potion called Nepenthe ("banisher of sorrow") in wine to soothe Telemachus’s tears for his lost father.'
    ]
  }
};
