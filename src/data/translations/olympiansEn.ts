import { CharacterLocalization } from './localizationHelpers';

export const olympiansEn: Record<string, CharacterLocalization> = {
  zeus: {
    title: 'Lord of Olympus · King of the Gods & Lord of Thunder',
    domain: 'Sky, Lightning, Thunder, Law, Order, Hospitality (Xenia)',
    domainDetail: 'Supreme ruler of Mount Olympus and father of gods and men who upholds cosmic justice',
    quote: 'The thunderbolt unleashed from my fingertips shall shake the heavens and the earth.',
    symbols: ['Thunderbolt (Keraunos)', 'Aegis (Divine Shield)', 'Golden Royal Scepter', 'Oak Tree'],
    animals: ['Golden Eagle (Aetos Dios)', 'White Bull', 'Swan'],
    plants: ['Sacred Oak', 'Wild Olive'],
    lore: {
      summary: 'Zeus is the youngest son of Cronus and Rhea. Overthrowing his tyrannical father, he led the Olympian gods to victory in both the Titanomachy and Gigantomachy, becoming the supreme sovereign of the universe.',
      birthAndOrigin: 'Fearing a prophecy that one of his offspring would overthrow him, Cronus swallowed each child whole upon birth. To save the newborn Zeus, his mother Rhea wrapped a stone in swaddling clothes as a decoy and hid baby Zeus in the Dictaean Cave on Crete, where he was nurtured by the sacred goat Amalthea and guarded by the shield-clashing Curetes.',
      majorStories: [
        {
          title: 'The Titanomachy (Ten-Year War of the Titans)',
          period: 'Dawn of Mythology',
          content: 'Upon reaching adulthood with the aid of Metis, Zeus administered an emetic potion to Cronus, forcing him to disgorge his swallowed siblings. Allied with the elder Cyclopes—who forged his mighty thunderbolt—and the hundred-handed Hecatoncheires, Zeus cast the Titans into the abyssal Tartarus and established the Olympian reign.',
          highlight: 'Restructuring of cosmic order and the dawn of the Olympian Golden Era'
        },
        {
          title: 'Duel Against Typhon, Father of All Monsters',
          period: 'Primordial Era',
          content: 'When Mother Gaia birthed Typhon—a monstrous serpentine giant of catastrophic fury—to destroy Olympus, the other gods fled in terror to Egypt. Zeus stood his ground alone, engaging Typhon in cosmic combat across mountains and seas before pinning the colossus beneath Mount Etna with a hundred lightning bolts.',
          highlight: 'The definitive battle proving the supreme authority of the King of Olympus'
        },
        {
          title: 'The Trojan War and the Golden Scales of Destiny',
          period: 'Heroic Age',
          content: 'Throughout the Trojan War, Zeus maintained supreme cosmic balance, weighing the fates of Achaean and Trojan champions upon his golden scales (Keres). Even amidst bitter clashes among the deities, he ensured the decrees of destiny were executed.',
          highlight: 'Execution of universal providence above the passions of gods and mortals'
        }
      ],
      romanDifferences: 'In Roman mythology, Jupiter (or Jove) was venerated less as an emotional sky deity and far more as the solemn, unyielding protector of the Roman State, embodiment of law (Lex), and divine sponsor of imperial treaties.',
      etymologyAndLegacy: 'The name Zeus shares Proto-Indo-European roots (*Dyeus) meaning "sky" or "daylight". The planet Jupiter, words like "jovial", and day names across Romance languages (such as French Jeudi) directly descend from his cult.',
      famousArtwork: [
        {
          title: 'Statue of Zeus at Olympia (Phidias - Ancient Seven Wonder)',
          artist: 'Phidias',
          period: 'Classical Antiquity (c. 435 BC)',
          location: 'Sanctuary of Olympia, Greece',
          description: 'A 13-meter chryselephantine (gold and ivory) colossus seated upon an ebony throne, widely revered as the artistic zenith of antiquity.'
        },
        {
          title: 'Jupiter and Thetis',
          artist: 'Jean-Auguste-Dominique Ingres',
          period: 'Neoclassicism (1811)',
          location: 'Musée Granet, Aix-en-Provence',
          description: 'Depicts the sea nymph Thetis suppliantly kneeling before the monolithic, seated Jupiter on Olympus, begging for Achilles’ glory in the Trojan War.'
        }
      ]
    },
    skills: [
      {
        name: 'Thunderbolt of Keraunos',
        typeName: 'Ultimate Power',
        description: 'Unleashes the primordial divine lightning forged by the Cyclopes, annihilating targets and shattering the celestial dome.',
        cooldown: '30s'
      },
      {
        name: 'Divine Olympian Mandate',
        typeName: 'Sovereign Authority',
        description: 'Radiates the indisputable majesty of the celestial king, suppressing enemy powers and inspiring Olympian allies.',
        cooldown: '15s'
      },
      {
        name: 'Aegis Storm Barrier',
        typeName: 'Passive Protection',
        description: 'Wraps the bearer in an electrified lightning aura that repels lethal strikes and wards off corrupting malevolence.'
      }
    ],
    trivia: [
      'Zeus was known for his numerous earthly disguises—including a golden shower (for Danaë), a swan (for Leda), and a white bull (for Europa)—to bypass Hera’s watchful gaze.',
      'His sacred tree is the oak, and his most ancient oracle at Dodona interpreted his divine decrees through the whispering rustle of oak leaves.'
    ]
  },

  poseidon: {
    title: 'Ruler of the Oceans · Earth-Shaker & Sovereign of the Seas',
    domain: 'Seas, Oceans, Storms, Earthquakes, Horses, Tsunamis',
    domainDetail: 'Second eldest son of Cronus who commands all ocean abysses and causes violent earth tremors',
    quote: 'When my trident strikes the ocean floor, the continents themselves tremble.',
    symbols: ['Trident (Triaina)', 'Golden Sea Chariot', 'Seashell Crown', 'Dolphin Scepter'],
    animals: ['Hippocampus (Sea Horse)', 'Stallion', 'Dolphin', 'Giant Bull'],
    plants: ['Seaweed', 'Pine Tree', 'Wild Celery'],
    lore: {
      summary: 'Poseidon drew lots with Zeus and Hades after the overthrow of the Titans, receiving dominion over all oceans, rivers, and underwater kingdoms. He is celebrated as the creator of horses and the bringer of earthquakes.',
      birthAndOrigin: 'Swallowed by Cronus at birth, he was later regurgitated alongside his siblings. The Telchines of Rhodes and the elder Cyclopes forged his three-pronged trident, which held power over the seismic forces of land and sea.',
      majorStories: [
        {
          title: 'Contest with Athena for the Patronage of Athens',
          period: 'Archaic Era',
          content: 'Poseidon struck the Acropolis rock with his trident, bringing forth a saltwater spring and promising naval dominance. Athena planted the first olive tree, offering peace, agriculture, and wisdom. The citizens chose Athena, sparking Poseidon’s brief flood of the Thriasian plain.',
          highlight: 'The historic mythological debate between martial sea conquest and enlightened civil order'
        },
        {
          title: 'Building the Walls of Troy and the Sea Monster',
          period: 'Heroic Age',
          content: 'Punished by Zeus for an Olympian conspiracy, Poseidon and Apollo were bound to serve King Laomedon of Troy for a year, constructing its impenetrable stone walls. When Laomedon refused their wages, Poseidon summoned a colossal sea beast (Cetus) to ravage the Trojan shores.',
          highlight: 'The divine curse that sealed the eventual doom of Troy'
        },
        {
          title: 'The Wrath Against Odysseus in the Odyssey',
          period: 'Homeric Epics',
          content: 'After Odysseus blinded Poseidon’s cyclopean son Polyphemus, the sea god pursued the hero with relentless tempests and shipwrecks across ten agonizing years, preventing his return home to Ithaca.',
          highlight: 'Homer’s prime portrayal of the inexorable, untamable savagery of the open sea'
        }
      ],
      romanDifferences: 'In Roman religion, Neptune was originally a minor freshwater deity before adopting the maritime grandeur of Poseidon following Roman contact with Hellenic seafaring cultures.',
      etymologyAndLegacy: 'The planet Neptune bears his Roman name. His trident remains the premier international emblem of naval forces, submarine fleets, and marine research institutes worldwide.',
      famousArtwork: [
        {
          title: 'Artemision Bronze (Poseidon or Zeus)',
          artist: 'Attributed to Calamis',
          period: 'Early Classical (c. 460 BC)',
          location: 'National Archaeological Museum, Athens',
          description: 'A magnificent life-sized bronze sculpture depicting the god poised to hurl either a trident or a thunderbolt with consummate athletic grace.'
        },
        {
          title: 'Neptune and Amphitrite',
          artist: 'Jan Gossaert (Mabuse)',
          period: 'Northern Renaissance (1516)',
          location: 'Gemäldegalerie, Berlin',
          description: 'A grand depiction of the marine king and his nereid queen within a monumental classical peristyle.'
        }
      ]
    },
    skills: [
      {
        name: 'Wrath of the Earth-Shaker',
        typeName: 'Ultimate Power',
        description: 'Drives the trident into the earth, triggering apocalyptic tectonic quakes and towering tidal waves that submerge the battlefield.',
        cooldown: '32s'
      },
      {
        name: 'Maelstrom Surge',
        typeName: 'Oceanic Domain',
        description: 'Conjures a swirling vortex of high-pressure abyssal seawater that pulls and traps all surrounding foes.',
        cooldown: '16s'
      },
      {
        name: 'Lord of the Tides',
        typeName: 'Passive Authority',
        description: 'Imbues water-based strikes with relentless force and grants unimpeded swiftness through all elemental hazards.'
      }
    ],
    trivia: [
      'Poseidon is venerated as the father of winged Pegasus (born from Medusa) and the creator of earthly horses.',
      'Sailors in antiquity would sacrifice white stallions into ocean waves to appease his turbulent temperament.'
    ]
  },

  hades: {
    title: 'Lord of the Underworld · King of the Dead & Lord of Hidden Wealth',
    domain: 'The Underworld (Tartarus, Elysium, Asphodel), Riches of the Earth, Minerals, Sacred Oaths',
    domainDetail: 'The eldest son of Cronus who rules the subterranean realms with solemn, impartial justice',
    quote: 'All mortal souls must walk across the river of forgetfulness to my throne at last.',
    symbols: ['Helm of Darkness (Kynee)', 'Bident (Two-Pronged Spear)', 'Keys of the Underworld', 'Pomegranate'],
    animals: ['Cerberus (Three-Headed Hound)', 'Black Stallions', 'Screech Owl'],
    plants: ['Asphodel', 'Cypress Tree', 'White Poplar'],
    lore: {
      summary: 'Hades received stewardship of the subterranean unseen world. Contrary to modern misconceptions, ancient Greeks viewed Hades not as an evil devil, but as an impartial, stern judge who ensured the immutable finality of mortality.',
      birthAndOrigin: 'The firstborn son of Cronus swallowed into darkness. During the Titanomachy, the elder Cyclopes crafted the Cap of Invisibility (Kynee) for him, allowing him to sneak into the Titan camp and disarm their divine armory.',
      majorStories: [
        {
          title: 'The Abduction of Persephone and the Four Pomegranate Seeds',
          period: 'Archaic Era',
          content: 'Struck by Eros’s arrow, Hades took Persephone beneath the earth with Zeus’s secret permission. When her mother Demeter’s despair brought endless winter, Zeus brokered an accord: because Persephone tasted four subterranean pomegranate seeds, she spends winter with Hades as Queen of the Underworld and returns each spring.',
          highlight: 'The classical myth explaining the changing of four seasons and the Eleusinian Mysteries'
        },
        {
          title: 'The Orpheus and Eurydice Accord',
          period: 'Heroic Age',
          content: 'Moved to tears by the sublime lamentations of Orpheus’s lyre, Hades and Persephone granted the musician permission to lead Eurydice back to the mortal world, on the sole condition that he never look back until reaching the sunlight.',
          highlight: 'The rare display of divine mercy tempered by the unforgiving law of mortal doubt'
        },
        {
          title: 'The Punishment of Sisyphus and Pirithous',
          period: 'Heroic Age',
          content: 'When King Sisyphus attempted to cheat death by chaining Thanatos, Hades devised his eternal punishment: rolling a giant boulder up a hill. When Theseus and Pirithous invaded to abduct Persephone, Hades trapped them in the Chair of Forgetfulness.',
          highlight: 'The eternal guardian of universal cosmic order and the inviolability of death'
        }
      ],
      romanDifferences: 'In Rome, he was worshipped as Pluto (Dis Pater, "Father of Riches"), highlighting his role as the master of underground gold, silver, and agricultural abundance.',
      etymologyAndLegacy: 'The term "plutocracy" (rule by the wealthy) derives from his Roman epithet Pluto. The dwarf planet Pluto bears his name.',
      famousArtwork: [
        {
          title: 'Pluto and Proserpina',
          artist: 'Gian Lorenzo Bernini',
          period: 'Baroque (1621–1622)',
          location: 'Galleria Borghese, Rome',
          description: 'A tour de force of marble virtuosity capturing the exact instant Pluto seizes Proserpina, the stone yielding under his fingers like supple flesh.'
        }
      ]
    },
    skills: [
      {
        name: 'Curse of the Stygian Abyss',
        typeName: 'Ultimate Power',
        description: 'Opens a fissure directly into Tartarus, releasing spectral wraiths that paralyze mortal spirits and sap divine vigor.',
        cooldown: '35s'
      },
      {
        name: 'Shadows of the Kynee',
        typeName: 'Invisibility Veil',
        description: 'Donning the Helm of Darkness, Hades slips entirely out of sight and material plane, bypassing all enemy defenses.',
        cooldown: '18s'
      },
      {
        name: 'Sovereign of the Dead',
        typeName: 'Passive Rule',
        description: 'Commands complete authority over defeated entities; enemies slain near Hades strengthen his defensive ward.'
      }
    ],
    trivia: [
      'Greeks rarely spoke Hades’ name aloud out of superstitious reverence, preferring euphemisms such as Plouton ("The Wealthy") or Eubuleus ("Good Counselor").',
      'Cerberus guarded the iron gates of his kingdom, welcoming all souls arriving, but permitting none to depart.'
    ]
  },

  hera: {
    title: 'Queen of Olympus · Supreme Protector of Marriage, Women & Family',
    domain: 'Marriage, Family, Fidelity, Queenhood, Heavens, Childbirth',
    domainDetail: 'Empress of Mount Olympus and legitimate wife of Zeus who fiercely defends matrimonial sanctity',
    quote: 'The golden diadem of Olympus rests upon my brow, and no oath shall be broken without reckoning.',
    symbols: ['Golden Diadem (Crown)', 'Lotus Scepter', 'Pomegranate', 'Peacock Feather'],
    animals: ['Peacock (Argus Eyes)', 'Cuckoo', 'Heifer (Sacred Cow)', 'Lion'],
    plants: ['Pomegranate', 'Willow Tree', 'Water Lily'],
    lore: {
      summary: 'Hera is the undisputed Queen of Mount Olympus. As the guardian of legitimate marriage and family order, she waged an unrelenting crusade against Zeus’s endless extramarital trysts and punished his illegitimate offspring.',
      birthAndOrigin: 'Born to Cronus and Rhea, she was swallowed and later liberated by Zeus. Zeus courted her by transforming into a shivering, rain-soaked cuckoo bird; when Hera took pity and held the bird to her breast, he resumed his divine form and pledged marriage.',
      majorStories: [
        {
          title: 'The Twelve Labors Imposed upon Heracles',
          period: 'Heroic Age',
          content: 'Enraged by the birth of Zeus’s illegitimate son Heracles, Hera afflicted the hero with madness, which led him to his tragic deeds. In atonement, he was compelled to perform the legendary Twelve Labors, throughout which Hera repeatedly tested him.',
          highlight: 'The foundational myth establishing Heracles’s enduring fame through hardship'
        },
        {
          title: 'The Eyes of Hundred-Eyed Argus Panoptes',
          period: 'Archaic Era',
          content: 'When Zeus transformed his lover Io into a white heifer, Hera assigned the hundred-eyed giant Argus to watch her. After Hermes slew the sleeping giant, Hera placed all hundred eyes onto the tail of her sacred bird, the peacock.',
          highlight: 'The origin of the iridescent peacock feather emblem of divine vigilance'
        },
        {
          title: 'The Judgment of Paris and the Fall of Troy',
          period: 'Trojan Cycle',
          content: 'When the Trojan prince Paris awarded the golden Apple of Discord to Aphrodite over Hera and Athena, Hera threw her entire divine might behind the Achaean armies to assure the ultimate destruction of Troy.',
          highlight: 'The celestial wrath of wounded royal dignity steering human history'
        }
      ],
      romanDifferences: 'In Rome, Juno was the revered protector of the Roman state, honored alongside Jupiter and Minerva in the supreme Capitoline Triad.',
      etymologyAndLegacy: 'The month of June is named in honor of Juno, making June weddings a revered European tradition symbolizing blessed matrimonial harmony.',
      famousArtwork: [
        {
          title: 'The Origin of the Milky Way',
          artist: 'Peter Paul Rubens',
          period: 'Baroque (1636–1638)',
          location: 'Museo del Prado, Madrid',
          description: 'Depicts infant Heracles suckling Hera’s milk while she sleeps; as she pulls away, droplets of divine milk stream across the cosmos to form the Milky Way.'
        }
      ]
    },
    skills: [
      {
        name: 'Queen’s Retribution',
        typeName: 'Ultimate Power',
        description: 'Channels the wrath of wounded matrimonial honor, summoning celestial storms that blind and stagger all oath-breakers.',
        cooldown: '30s'
      },
      {
        name: 'Vigilance of Argus',
        typeName: 'All-Seeing Ward',
        description: 'Deploys the hundred eyes of Argus to illuminate the entire battlefield, completely removing stealth and concealment.',
        cooldown: '15s'
      },
      {
        name: 'Imperial Majesty',
        typeName: 'Passive Crown',
        description: 'Imposes supreme royal intimidation, steadily reducing the offensive power and attack tempo of nearby foes.'
      }
    ],
    trivia: [
      'Every year, Hera bathed in the sacred spring of Kanathos in Nauplia to symbolically renew her purity and divine sovereignty.',
      'Despite her fierce fury against paramours, Hera was celebrated across Greece as the gentle protector of expectant mothers and lawful households.'
    ]
  },

  athena: {
    title: 'Goddess of Wisdom · Patron of Strategic Warfare, Handicrafts & Reason',
    domain: 'Wisdom, Strategic Warfare, Reason, Law, Handicrafts (Weaving), Civic Justice',
    domainDetail: 'Zeus’s favorite daughter who sprang fully armed from his brow; patroness of heroes and philosophers',
    quote: 'True victory is won not by mindless bloodshed, but by calculated strategy and steadfast reason.',
    symbols: ['Aegis with Medusa Gorgoneion', 'War Spear', 'Crested Corinthian Helmet', 'Distaff'],
    animals: ['Owl of Athena (Glaux)', 'Sacred Serpent'],
    plants: ['Olive Tree'],
    lore: {
      summary: 'Athena embodies tactical brilliance, enlightened statecraft, and intellectual mastery. Unlike Ares, who revels in savage carnage, Athena champions disciplined defensive tactics, courage under fire, and civil order.',
      birthAndOrigin: 'Zeus swallowed the pregnant Titaness Metis (Wisdom) to prevent a prophecy. Later, seized by an agonizing headache, Zeus had Hephaestus split his skull with an adamantine axe, whereupon Athena leaped forth in full golden armor with a triumphant battle cry.',
      majorStories: [
        {
          title: 'Goddess of the Acropolis and the Contest for Athens',
          period: 'Archaic Era',
          content: 'Facing Poseidon for the patronage of Attica, Athena planted the first olive tree—providing oil, wood, and nourishment. King Cecrops and the assembly judged her gift vastly superior to Poseidon’s saltwater spring, naming their glorious city Athens.',
          highlight: 'The historic mythological tribute to civilization, olive cultivation, and enlightened governance'
        },
        {
          title: 'Guidance of Perseus and the Severed Head of Medusa',
          period: 'Heroic Age',
          content: 'Athena bestowed her polished bronze shield to Perseus, instructing him to view Medusa only through its reflection to evade petrification. In gratitude, Perseus offered Medusa’s head, which Athena set upon her Aegis to terrify all adversaries.',
          highlight: 'The archetype of the divine mentor empowering heroic mortal ingenuity'
        },
        {
          title: 'Weaving Contest Against Arachne',
          period: 'Archaic Era',
          content: 'When the mortal weaver Arachne boasted her skill exceeded the gods and wove a tapestry exposing divine scandals, Athena shredded the blasphemy. When Arachne attempted suicide from despair, Athena turned her into the first spider to weave forever.',
          highlight: 'The moral cautionary tale against mortal hubris (Hybris)'
        }
      ],
      romanDifferences: 'In Roman religion, Minerva was deeply venerated as the patroness of artisans, schools, physicians, and engineers.',
      etymologyAndLegacy: 'The Greek capital Athens, the concept of academies, and the owl emblem on modern Euro coins directly honor her memory.',
      famousArtwork: [
        {
          title: 'Athena Parthenos (Colossal Chryselephantine Statue)',
          artist: 'Phidias',
          period: 'Classical Antiquity (438 BC)',
          location: 'The Parthenon, Athens',
          description: 'A 12-meter masterpiece of gold and ivory holding Nike (Victory) in her palm, commanding the inner sanctum of the Parthenon.'
        },
        {
          title: 'Pallas and the Centaur',
          artist: 'Sandro Botticelli',
          period: 'Early Renaissance (c. 1482)',
          location: 'Uffizi Gallery, Florence',
          description: 'Allegorical portrayal of Athena (Divine Reason) gently taming a raging Centaur (Animal Passion) by holding his forelock.'
        }
      ]
    },
    skills: [
      {
        name: 'Gorgon Aegis Retribution',
        typeName: 'Ultimate Power',
        description: 'Blazons the visage of Medusa upon the Aegis, petrifying nearby enemies and reflecting incoming hostile strikes.',
        cooldown: '28s'
      },
      {
        name: 'Spear of Tactical Supremacy',
        typeName: 'Active Strategy',
        description: 'Drives a precision thrust through the enemy’s weakest armor joint, neutralizing protective barriers.',
        cooldown: '12s'
      },
      {
        name: 'Intellect of Metis',
        typeName: 'Passive Mind',
        description: 'Constantly predicts enemy movement trajectories, increasing defensive block rate and party critical chance.'
      }
    ],
    trivia: [
      'Athena was born without a mortal childhood, emerging as a fully grown warrior-intellectual directly from the divine mind of Zeus.',
      'She stood as the constant guardian of greatest epic heroes: Odysseus, Heracles, Perseus, and Achilles.'
    ]
  },

  apollo: {
    title: 'God of the Sun · Lord of Prophecy, Music, Healing & Archery',
    domain: 'Sun, Light, Prophecy (Delphic Oracle), Music, Poetry, Archery, Healing & Plagues',
    domainDetail: 'Twin brother of Artemis; master of the golden lyre and archery who sheds golden illumination over all mysteries',
    quote: 'Know thyself, and let the golden light of truth dispel every lurking shadow.',
    symbols: ['Golden Bow & Silver Arrows', 'Golden Lyre (Kithara)', 'Laurel Wreath', 'Tripod of Delphi'],
    animals: ['Raven (Corvus)', 'Dolphin (Delphinios)', 'Swan', 'Wolf'],
    plants: ['Laurel Tree', 'Palm Tree', 'Sunflower'],
    lore: {
      summary: 'Apollo embodies harmony, truth, and enlightenment. As the god of prophecy through the Oracle at Delphi, he communicated the inscrutable will of Zeus to mortals, while governing both healing medicine and sudden arrows of pestilence.',
      birthAndOrigin: 'Born on the floating island of Delos to Zeus and the Titaness Leto alongside his twin sister Artemis. Hera had forbidden any solid ground from welcoming Leto, so Poseidon anchored Delos with four subterranean pillars to allow the divine twins’ birth.',
      majorStories: [
        {
          title: 'Slaying of the Python and Founding of Delphi',
          period: 'Dawn of Mythology',
          content: 'Just four days after birth, Apollo traversed Mount Parnassus armed with golden arrows to slay the monstrous serpent Python that had hunted his mother. Over the beast’s fissure, he established the Oracle of Delphi, appointing the Pythia priestesses.',
          highlight: 'The triumph of luminous intellect over chthonic darkness and the founding of the sacred center of Greece (Omphalos)'
        },
        {
          title: 'Tragedy of Daphne and the Sacred Laurel',
          period: 'Archaic Era',
          content: 'Mocked by Apollo for his small bow, Eros struck Apollo with a golden arrow of burning love and the nymph Daphne with a lead arrow of revulsion. Fleeing Apollo’s relentless pursuit, Daphne prayed to her river god father and transformed into a laurel tree, which Apollo made his eternal emblem.',
          highlight: 'The classical archetype of unrequited divine passion and the origins of the laurel crown of poets'
        },
        {
          title: 'Musical Duel Against Marsyas',
          period: 'Archaic Era',
          content: 'The satyr Marsyas challenged Apollo to a musical contest with Athena’s discarded flute against Apollo’s lyre. Apollo won when he played his instrument upside down while singing—a feat the wind flute could not mimic—and flayed Marsyas for his hubris.',
          highlight: 'The ancient debate elevating stringed harmony and vocal philosophy above wild, ecstatic wind music'
        }
      ],
      romanDifferences: 'Unlike other Olympian deities, Apollo was adopted directly into Roman religion under his original Greek name, celebrated as the personal patron god of Emperor Augustus.',
      etymologyAndLegacy: 'The Apollo Space Program that carried humanity to the Moon was named after him. The Delphic maxim "Know Thyself" remains the bedrock of Western philosophical inquiry.',
      famousArtwork: [
        {
          title: 'Apollo Belvedere',
          artist: 'Attributed to Leochares',
          period: 'Hellenistic (c. 330 BC)',
          location: 'Pio-Clementino Museum, Vatican City',
          description: 'Hailed for centuries as the absolute aesthetic ideal of male physical perfection, depicting Apollo just after loosing an arrow.'
        },
        {
          title: 'Apollo and Daphne',
          artist: 'Gian Lorenzo Bernini',
          period: 'Baroque (1622–1625)',
          location: 'Galleria Borghese, Rome',
          description: 'A breathtaking marble sculpture capturing the exact transition of Daphne’s toes taking root in the earth and her fingers sprouting laurel leaves.'
        }
      ]
    },
    skills: [
      {
        name: 'Solar Flare of Delphi',
        typeName: 'Ultimate Power',
        description: 'Looses a beam of concentrated solar brilliance from his golden bow, piercing all targets in a linear path with searing radiance.',
        cooldown: '26s'
      },
      {
        name: 'Hymn of the Golden Lyre',
        typeName: 'Divine Melody',
        description: 'Strikes the golden chords to heal surrounding allies, purging all poisons, curses, and negative debuffs.',
        cooldown: '14s'
      },
      {
        name: 'Delphic Prophecy Vision',
        typeName: 'Passive Clairvoyance',
        description: 'Foresees incoming enemy critical strikes, preemptively adjusting party evasion and precision accuracy.'
      }
    ],
    trivia: [
      'Apollo served a year of mortal labor as a herdsman for King Admetus of Pherae to atone for slaying the Cyclopes.',
      'His son Asclepius became the legendary god of medicine, whose serpent-entwined staff remains the international symbol of medicine today.'
    ]
  },

  artemis: {
    title: 'Goddess of the Hunt · Guardian of the Wilderness, Moon & Maidens',
    domain: 'Wilderness, Hunt, Moon, Wild Animals, Chastity, Childbirth, Archery',
    domainDetail: 'Twin sister of Apollo; unyielding protector of the forests and young girls who roams the mountains under the silvery moon',
    quote: 'Step into my untamed wilderness with reverence, for my silver arrows never miss their mark.',
    symbols: ['Silver Bow & Quiver', 'Crescent Moon Tiara', 'Hunting Spear', 'Silver Torch'],
    animals: ['Ceryneian Hind (Golden Horns)', 'Hunting Hound', 'Bear', 'Stag'],
    plants: ['Cypress', 'Amalthea Walnut', 'Artemisia (Wormwood)'],
    lore: {
      summary: 'Artemis is the fierce and independent mistress of the wild mountains and forests (Potnia Theron). Pledging eternal virginity to Zeus as a young child, she protects the delicate balance of nature and punishes mortal arrogance with swift vengeance.',
      birthAndOrigin: 'Born on Delos slightly before Apollo, she astonishingly assisted her mother Leto in delivering her twin brother Apollo immediately after birth, earning her ancient veneration as a protector of childbirth despite her maidenhood.',
      majorStories: [
        {
          title: 'Punishment of the Hunter Actaeon',
          period: 'Archaic Era',
          content: 'While hunting in the woods, young hunter Actaeon accidentally stumbled upon Artemis bathing in a secluded mountain grotto. Offended by the violation of her sanctity, Artemis splashed water upon his face, transforming him into a stag who was promptly torn apart by his own hunting hounds.',
          highlight: 'The severe mythological enforcement of sacred wilderness taboos and mortal boundaries'
        },
        {
          title: 'The Calydonian Boar Hunt',
          period: 'Heroic Age',
          content: 'When King Oeneus of Calydon neglected Artemis in his harvest sacrifices, she released a colossal wild boar to devastate his realm. The greatest champions of Greece assembled to hunt the beast, with the huntress Atalanta drawing first blood with an arrow.',
          highlight: 'One of the grandest assembled heroic gatherings in Greek epic lore'
        },
        {
          title: 'Sacrifice of Iphigenia at Aulis',
          period: 'Trojan Cycle',
          content: 'When Agamemnon boasted he was a better hunter than Artemis and killed a sacred stag, Artemis calmed the winds, trapping the Greek fleet at Aulis. When Agamemnon was forced to sacrifice his daughter Iphigenia, Artemis took pity, replaced the maiden with a deer, and transported her to Tauris as high priestess.',
          highlight: 'Divine mercy superseding barbaric human sacrifice in classical Greek conscience'
        }
      ],
      romanDifferences: 'In Roman religion, Diana was worshipped in the sacred grove of Nemi, celebrated as a patron of outcasts, runaway slaves, and women.',
      etymologyAndLegacy: 'NASA’s current lunar exploration program returning humanity to the Moon is named the "Artemis Program", standing as the twin sister to Apollo.',
      famousArtwork: [
        {
          title: 'Diana of Versailles (Artemis with a Hind)',
          artist: 'Attributed to Leochares',
          period: 'Roman Marble Copy of Greek Original (c. 325 BC)',
          location: 'Musée du Louvre, Paris',
          description: 'A world-famous dynamic sculpture depicting Artemis reaching for an arrow from her quiver while walking alongside a leaping stag.'
        }
      ]
    },
    skills: [
      {
        name: 'Moonlight Arrow of the Hunt',
        typeName: 'Ultimate Power',
        description: 'Fires a volley of silvery lunar arrows into the night sky, raining unerring piercing damage across all marked adversaries.',
        cooldown: '25s'
      },
      {
        name: 'Beast Trap of the Wilderness',
        typeName: 'Trap & Snare',
        description: 'Plants enchanted thorns and spirit snares on the terrain, immobilizing targets and exposing their weak points.',
        cooldown: '13s'
      },
      {
        name: 'Grace of the Untamed Forest',
        typeName: 'Passive Agility',
        description: 'Grants continuous movement speed bonuses and immunity to slows when maneuvering through rugged wilderness.',
      }
    ],
    trivia: [
      'The Temple of Artemis at Ephesus was one of the Seven Wonders of the Ancient World, renowned for its hundreds of marble columns.',
      'Her company consisted exclusively of maiden nymphs who took vows of chastity and hunted together across the Greek highlands.'
    ]
  },

  ares: {
    title: 'God of War · Lord of Bloodshed, Battle Frenzy & Physical Valor',
    domain: 'Warfare, Physical Combat, Bloodshed, Violence, Soldierly Valor',
    domainDetail: 'Son of Zeus and Hera; embodies the brutal physical frenzy and savage slaughter of open battlefield combat',
    quote: 'Let the shields shatter and the earth drink the crimson blood of the fallen!',
    symbols: ['Bronze Spear', 'Bloodstained Shield', 'Flaming Torch', 'Battle Helmet'],
    animals: ['Vulture', 'Venomous Serpent', 'War Hound', 'Barn Owl'],
    plants: ['Deadly Nightshade', 'Dogwood'],
    lore: {
      summary: 'Ares represents the raw, chaotic brutality of armed conflict. While Athena personifies measured tactics and philosophical warfare, Ares relishes the intoxicating clash of bronze, screaming combatants, and the berserker frenzy of battle.',
      birthAndOrigin: 'The only legitimate son born to Zeus and Hera who held a major martial domain. Zeus frequently expressed disdain for Ares’s bloodthirsty temperament, once declaring he was the most hateful of all gods on Olympus.',
      majorStories: [
        {
          title: 'The Secret Passion with Aphrodite and the Golden Net',
          period: 'Archaic Era',
          content: 'Ares engaged in a passionate, illicit affair with Aphrodite, wife of Hephaestus. Warned by Helios, Hephaestus forged an unbreakable, invisible net of bronze over the marital bed, ensnaring the lovers in flagrante and inviting all Olympian gods to witness their humiliation.',
          highlight: 'The legendary mythological allegorical pairing of Love and War'
        },
        {
          title: 'Wounding by Diomedes in the Trojan War',
          period: 'Trojan Cycle',
          content: 'Fighting on the side of Troy, Ares entered the mortal fray. Guided by Athena, the Achaean hero Diomedes hurled his spear directly into Ares’s belly; Ares roared with the fury of ten thousand men and fled back to Mount Olympus to complain to Zeus.',
          highlight: 'Homer’s famous portrayal of mortal heroism overcoming brute divine fury through divine wisdom'
        },
        {
          title: 'The Trial of the Areopagus',
          period: 'Archaic Era',
          content: 'When Halirrhothius, a son of Poseidon, attempted to violate Ares’s daughter Alcippe on the slopes of the Acropolis, Ares slew him on the spot. Poseidon demanded a trial, and the gods gathered upon the hill—henceforth named the Areopagus (Hill of Ares)—to formally acquit Ares.',
          highlight: 'The legendary mythic establishment of the first court of criminal justice in human history'
        }
      ],
      romanDifferences: 'In Rome, Mars was venerated with vastly greater honor than Ares in Greece, revered as the biological father of Romulus and Remus and the legendary ancestor of the entire Roman people.',
      etymologyAndLegacy: 'The planet Mars, the month of March, and martial arts all draw their names from Mars/Ares.',
      famousArtwork: [
        {
          title: 'Mars and Venus',
          artist: 'Sandro Botticelli',
          period: 'Early Renaissance (c. 1485)',
          location: 'National Gallery, London',
          description: 'Depicts Mars sleeping exhausted after passion while playful satyrs play with his heavy war lance and armor, symbolizing Love conquering War.'
        }
      ]
    },
    skills: [
      {
        name: 'Bloodthirsty Berserker Frenzy',
        typeName: 'Ultimate Power',
        description: 'Surrenders completely to battle madness, drastically boosting physical attack damage and armor penetration for a limited duration.',
        cooldown: '30s'
      },
      {
        name: 'Rend of the Bronze Spear',
        typeName: 'Physical Strike',
        description: 'Drives a vicious thrust that ruptures enemy defenses, inflicting a stacking bleed effect over time.',
        cooldown: '10s'
      },
      {
        name: 'Aura of Phobos and Deimos',
        typeName: 'Passive Dread',
        description: 'Surrounds the warrior with the terror of his sons Panic and Fear, reducing the morale and defense of nearby enemies.'
      }
    ],
    trivia: [
      'Ares was accompanied into combat by his twin sons Phobos (Panic) and Deimos (Dread), as well as Eris (Discord) and Enyo (Destruction).',
      'The Amazons, a legendary nation of fierce female warriors, claimed direct descent from Ares.'
    ]
  },

  aphrodite: {
    title: 'Goddess of Love · Sovereign of Beauty, Passion & Procreation',
    domain: 'Love, Physical Beauty, Passion, Desire, Fertility, Sea-Voyages',
    domainDetail: 'Born from sea-foam; possesses irresistible charm that captivates both immortal gods and mortal men alike',
    quote: 'Neither the mightiest king nor the proudest god can resist the sweet enchantment of my golden girdle.',
    symbols: ['Golden Cestus (Enchanted Girdle)', 'Mirror of Beauty', 'Sea Scallop Shell', 'Golden Apple'],
    animals: ['White Dove', 'Swan', 'Sparrow', 'Dolphin'],
    plants: ['Red Rose', 'Myrtle', 'Anemone', 'Pomegranate'],
    lore: {
      summary: 'Aphrodite is the primordial patroness of romantic passion and aesthetic elegance. Her unearthly allure held sway over the entire pantheon, with even Zeus powerless to escape her captivating enchantments.',
      birthAndOrigin: 'According to Hesiod, when Cronus castrated Uranus and cast his parts into the ocean, sea-foam (aphros) gathered around them, and from the waves near Cyprus emerged Aphrodite in peerless, radiant beauty upon a giant scallop shell.',
      majorStories: [
        {
          title: 'The Judgment of Paris and the Golden Apple',
          period: 'Dawn of the Trojan War',
          content: 'Eris rolled the golden apple marked "To the Fairest" among Hera, Athena, and Aphrodite. Brought before Paris of Troy, Aphrodite promised him the love of Helen, the most beautiful woman on earth. Paris awarded her the apple, sparking the Trojan War.',
          highlight: 'The fateful myth of divine vanity that catalyzed the fall of bronze age kingdoms'
        },
        {
          title: 'Love and Grief for Adonis',
          period: 'Archaic Era',
          content: 'Aphrodite fell deeply in love with the mortal youth Adonis. Warned against dangerous beasts, Adonis was tragically gored by a wild boar sent by a jealous Ares. In her grief, Aphrodite caused crimson anemone flowers to bloom wherever his blood touched the earth.',
          highlight: 'The classical Mediterranean myth of the dying and resurrecting god of vegetation'
        },
        {
          title: 'The Marriage to Hephaestus and Passion with Ares',
          period: 'Olympian Era',
          content: 'To prevent war among the gods for her hand, Zeus married Aphrodite to the disabled blacksmith Hephaestus. Unhappy in the match, Aphrodite found her heart drawn to the handsome god of war Ares, an affair immortalized in poetry.',
          highlight: 'The mythic reflection on arranged marriages versus untamable romantic passion'
        }
      ],
      romanDifferences: 'In Rome, Venus was celebrated as Venus Genetrix—the ancestral mother of the Roman people through her mortal son Aeneas, ancestor of Julius Caesar.',
      etymologyAndLegacy: 'The planet Venus, the word "aphrodisiac", and the universal symbol for female (♀, stylized as her handheld mirror) honor her.',
      famousArtwork: [
        {
          title: 'The Birth of Venus',
          artist: 'Sandro Botticelli',
          period: 'Early Renaissance (c. 1484–1486)',
          location: 'Uffizi Gallery, Florence',
          description: 'The iconic masterpiece depicting the newly born goddess standing upon a giant scallop shell as Zephyr blows her gently ashore while roses rain down.'
        },
        {
          title: 'Venus de Milo (Aphrodite of Melos)',
          artist: 'Attributed to Alexandros of Antioch',
          period: 'Hellenistic (c. 130–100 BC)',
          location: 'Musée du Louvre, Paris',
          description: 'A celebrated classical marble sculpture renowned for its harmonious grace and mysterious, lost arms.'
        }
      ]
    },
    skills: [
      {
        name: 'Allure of the Golden Cestus',
        typeName: 'Ultimate Power',
        description: 'Unleashes an irresistible wave of divine enchantment that charms surrounding enemies, forcing them to cease combat and fight each other.',
        cooldown: '30s'
      },
      {
        name: 'Blessing of Cyprian Grace',
        typeName: 'Heart Shield',
        description: 'Envelops an allied hero in a radiant rosy barrier that absorbs heavy damage and regenerates health over time.',
        cooldown: '15s'
      },
      {
        name: 'Sovereignty of Desire',
        typeName: 'Passive Fascination',
        description: 'Enemies targeting Aphrodite suffer reduced attack speed and significant hit rate penalties.'
      }
    ],
    trivia: [
      'Aphrodite wore an embroidered magical belt called the Cestus, which contained all sweet desires, flirtations, and irresistible passions.',
      'Her son Eros (Cupid) carried twin arrows: golden tipped with dove feathers to kindle burning love, and lead tipped with owl feathers to breed revulsion.'
    ]
  },

  hephaestus: {
    title: 'God of the Forge · Divine Craftsman of Fire, Metallurgy & Inventions',
    domain: 'Blacksmithing, Metallurgy, Volcanic Fire, Architecture, Automated Inventions',
    domainDetail: 'The divine artisan who crafts the celestial palaces, weapons of the gods, and mechanical wonders upon Olympus',
    quote: 'Upon the glowing iron and beneath the rhythmic strike of my hammer, divine miracles are born.',
    symbols: ['Blacksmith Hammer', 'Anvil', 'Tongs', 'Volcanic Fire'],
    animals: ['Donkey (Riding Steed)', 'Crane', 'Dog'],
    plants: ['Fennel (Prometheus’s Fire Staff)', 'Pomegranate'],
    lore: {
      summary: 'Hephaestus is the master craftsman of Mount Olympus. Overcoming physical disability and rejection from his parents, his unmatched genius produced the impenetrable armor of Achilles, the thunderbolts of Zeus, and the celestial thrones of the gods.',
      birthAndOrigin: 'Born to Hera. Disgusted by his frail legs at birth, Hera cast him from the summit of Mount Olympus. Falling for an entire day into the Aegean Sea, he was rescued and raised by the sea nymphs Thetis and Eurynome in an underwater cavern where he mastered metalworking.',
      majorStories: [
        {
          title: 'The Golden Throne and Reconciliation with Hera',
          period: 'Early Olympian Era',
          content: 'Hephaestus sent Hera a magnificent golden throne with invisible mechanical snares. When she sat, she was hopelessly bound. Only after Dionysus got Hephaestus pleasantly intoxicated and brought him back on a donkey did he release her and claim his rightful palace on Olympus.',
          highlight: 'The triumph of artisanal brilliance over divine prejudice'
        },
        {
          title: 'Forging the Divine Armor of Achilles',
          period: 'Trojan Cycle',
          content: 'When Hector stripped the armor from Patroclus’s corpse, Thetis pleaded with Hephaestus for her son Achilles. In a single night, Hephaestus forged a celestial cuirass and the legendary Shield of Achilles, upon which he embossed the entire cosmos, human society, and the stars.',
          highlight: 'The finest ekphrasis (poetic description of artwork) in world literature'
        },
        {
          title: 'Creation of Pandora and Automated Golden Automata',
          period: 'Archaic Era',
          content: 'Commissioned by Zeus to punish mankind for Prometheus’s theft of fire, Hephaestus molded Pandora from clay. In his volcanic forges, he also created self-propelled tripods and automated golden handmaidens capable of speech, reason, and movement.',
          highlight: 'The earliest visionary anticipation of robotics and artificial intelligence in human folklore'
        }
      ],
      romanDifferences: 'In Rome, Vulcan was feared primarily as the destructive force of consuming wildfires and volcanic fury, propitiated during the Vulcanalia festival.',
      etymologyAndLegacy: 'The word "volcano" directly originates from his Roman name Vulcan. His archetype inspires blacksmith guilds and engineers across human history.',
      famousArtwork: [
        {
          title: 'The Forge of Vulcan',
          artist: 'Diego Velázquez',
          period: 'Baroque (1630)',
          location: 'Museo del Prado, Madrid',
          description: 'Depicts Apollo visiting Vulcan’s subterranean smithy to reveal the affair of Venus and Mars, capturing the blacksmith’s stunned betrayal.'
        }
      ]
    },
    skills: [
      {
        name: 'Wrath of the Etna Volcano',
        typeName: 'Ultimate Power',
        description: 'Strikes the anvil with catastrophic force, rupturing the earth to unleash magma fountains and molten slag across the area.',
        cooldown: '30s'
      },
      {
        name: 'Divine Tempering Ward',
        typeName: 'Armor Enhancement',
        description: 'Tempers the armor of all allies with celestial metallurgy, granting massive physical defense and fire damage reflection.',
        cooldown: '16s'
      },
      {
        name: 'Genius of the Smithy',
        typeName: 'Passive Crafting',
        description: 'Constantly repairs damaged equipment, granting durability shields and bonus piercing damage to basic attacks.'
      }
    ],
    trivia: [
      'Hephaestus created Talos, a giant bronze automaton that patrolled the shores of Crete three times a day to fend off invaders.',
      'His subterranean workshops were believed to be located beneath Mount Etna in Sicily, where the Cyclopes assisted him at the anvils.'
    ]
  },

  hermes: {
    title: 'Herald of the Gods · Guide of Souls, Patron of Travelers, Thieves & Merchants',
    domain: 'Messages, Travel, Commerce, Eloquence, Thieves, Athletics, Soul Guidance (Psychopomp)',
    domainDetail: 'Son of Zeus and Maia; fleet-footed messenger who crosses effortlessly between Olympus, the mortal world, and the Underworld',
    quote: 'No boundary can hold my winged sandals, and no secret escapes my quick wit.',
    symbols: ['Caduceus (Herald’s Staff)', 'Talaria (Winged Sandals)', 'Petasos (Winged Hat)', 'Coin Pouch'],
    animals: ['Tortoise', 'Rooster', 'Ram', 'Hare'],
    plants: ['Crocus (Saffron)', 'Wild Celery', 'Almond Tree'],
    lore: {
      summary: 'Hermes is the quick-witted, clever diplomat of Olympus. Endowed with boundless curiosity and unmatched speed, he serves as the official herald of Zeus and guides departed souls safely to the gates of Hades.',
      birthAndOrigin: 'Born to Zeus and the Pleiad nymph Maia in a cave on Mount Cyllene in Arcadia at dawn. By midday, baby Hermes climbed out of his cradle, discovered a tortoise shell, strung sheep gut across it, and invented the first musical lyre.',
      majorStories: [
        {
          title: 'The Theft of Apollo’s Cattle and the Invention of the Lyre',
          period: 'Dawn of Mythology',
          content: 'On the very evening of his birth, Hermes stole 50 sacred cattle from Apollo, tying wicker sandals backwards to their hooves to disguise their tracks. Brought before Zeus by an infuriated Apollo, Hermes charmingly gifted him the tortoise lyre, securing Apollo’s eternal friendship.',
          highlight: 'The defining Greek trickster myth celebrating wit, inventiveness, and diplomatic charm'
        },
        {
          title: 'Slaying of the Hundred-Eyed Giant Argus Panoptes',
          period: 'Archaic Era',
          content: 'Sent by Zeus to rescue Io from Hera’s hundred-eyed sentinel Argus, Hermes disguised himself as a shepherd, played sweet melodies on his pan flute, and told soothing tales until all hundred eyes fell asleep, whereupon he slew the giant.',
          highlight: 'Earning his enduring mythological title Hermes Argeiphontes ("Slayer of Argus")'
        },
        {
          title: 'Guiding King Priam into the Achaean Camp',
          period: 'Trojan Cycle',
          content: 'During the Trojan War, Hermes rendered elderly King Priam invisible to Greek guards, guiding him safely across enemy lines directly into Achilles’ tent to ransom the body of his slain son Hector.',
          highlight: 'The sacred role of the divine herald protecting diplomatic emissaries and mourners'
        }
      ],
      romanDifferences: 'In Roman religion, Mercury was associated primarily with commerce, financial profit, trade routes, and swift delivery of goods.',
      etymologyAndLegacy: 'The planet Mercury, the element mercury (quicksilver), and words like "mercantile" and "hermetic" stem directly from his name.',
      famousArtwork: [
        {
          title: 'Hermes and the Infant Dionysus',
          artist: 'Praxiteles',
          period: 'Late Classical (c. 340 BC)',
          location: 'Archaeological Museum of Olympia, Greece',
          description: 'A celebrated masterpiece of classical sculpture showing Hermes pausing on his journey, tenderly holding the baby god Dionysus.'
        },
        {
          title: 'Flying Mercury (Mercurio Volante)',
          artist: 'Giambologna',
          period: 'Late Renaissance / Mannerism (1580)',
          location: 'Bargello Museum, Florence',
          description: 'A breathtaking bronze statue balancing on a single breath of wind blown by a zephyr, depicting absolute weightless speed.'
        }
      ]
    },
    skills: [
      {
        name: 'Flash of the Talaria Wings',
        typeName: 'Ultimate Power',
        description: 'Teleports instantly across the battlefield with supersonic speed, striking every target in a blinding zig-zag flurry.',
        cooldown: '24s'
      },
      {
        name: 'Slumber of the Caduceus',
        typeName: 'Herald’s Stasis',
        description: 'Waves the twin-serpent caduceus to put all designated enemies into deep magical slumber, resetting their ability charges.',
        cooldown: '14s'
      },
      {
        name: 'Master of the Crossroads',
        typeName: 'Passive Mobility',
        description: 'Permanently increases movement speed, dodge probability, and grants complete immunity to terrain slow traps.'
      }
    ],
    trivia: [
      'Hermes is the only Olympian deity with the divine authority to freely enter and exit the Underworld without needing permission from Hades.',
      'His caduceus staff—two serpents entwined around a winged rod—was originally a golden herald’s olive branch wrapped with ribbon.'
    ]
  },

  dionysus: {
    title: 'God of Wine · Sovereign of Ecstasy, Theater, Festivity & Madness',
    domain: 'Wine, Grape Harvest, Ecstasy, Ritual Madness, Theater, Rebirth',
    domainDetail: 'Son of Zeus and the mortal princess Semele; twice-born god who teaches the liberation of mortal spirits through wine and tragedy',
    quote: 'Cast away all sorrow and false pride; celebrate the divine madness that frees the soul!',
    symbols: ['Thyrsus (Pinecone Staff)', 'Kantharos (Wine Goblet)', 'Grape Clusters', 'Ivy Wreath'],
    animals: ['Panther', 'Tiger', 'Leopard', 'Bull', 'Dolphin'],
    plants: ['Grapevine', 'Ivy', 'Pine Tree', 'Fig'],
    lore: {
      summary: 'Dionysus represents liberation from rigid societal norms through joyful festivity and ritual ecstasy. As the patron god of tragic drama and comedy, his festivals in Athens laid the historic foundations of world theater.',
      birthAndOrigin: 'Semele was tricked by Hera into begging Zeus to reveal himself in his full celestial glory, burning her to ashes. Zeus saved the unborn six-month fetus, sewed it into his own thigh, and birthed Dionysus three months later—making him the "Twice-Born" god.',
      majorStories: [
        {
          title: 'The Bacchae and the Hubris of King Pentheus',
          period: 'Archaic Era',
          content: 'King Pentheus of Thebes banned Dionysus’s worship, deeming the ecstatic rites scandalous. Disguised as a mortal priest, Dionysus caused divine madness to fall upon Theban women. Pentheus went to spy on their rites in the woods and was torn limb from limb by his own mother Agave.',
          highlight: 'Euripides’ immortal tragic masterpiece exploring the danger of repressing human emotional nature'
        },
        {
          title: 'The Tyrrhenian Pirates and Dolphin Metamorphosis',
          period: 'Archaic Era',
          content: 'Tyrrhenian pirates kidnapped young Dionysus, believing him to be a rich prince. When ropes fell off his hands and vines choked the mast while a phantom lion roared on deck, the terrified crew jumped overboard into the sea and transformed into dolphins.',
          highlight: 'The classical mythological origin of dolphins as friends to humankind'
        },
        {
          title: 'Rescue of Ariadne on Naxos',
          period: 'Heroic Age',
          content: 'Abandoned by Theseus on the lonely island of Naxos, the Cretan princess Ariadne wept in despair. Dionysus arrived with his triumphant procession of panthers and satyrs, made her his immortal divine queen, and tossed her golden crown into the heavens as the Corona Borealis constellation.',
          highlight: 'One of the most touching romances in classical mythology'
        }
      ],
      romanDifferences: 'In Rome, he was worshipped as Bacchus and Liber Pater. The nocturnal Bacchanalia rituals grew so intensely popular that the Roman Senate passed emergency decrees in 186 BC to regulate them.',
      etymologyAndLegacy: 'The Dionysiaca festivals produced ancient Athenian drama, giving birth to tragedy and theater. The word "dionysian" contrasts with "apollonian" in Friedrich Nietzsche’s philosophy.',
      famousArtwork: [
        {
          title: 'Bacchus',
          artist: 'Caravaggio',
          period: 'Baroque (c. 1595)',
          location: 'Uffizi Gallery, Florence',
          description: 'A realistic masterwork depicting a languid young Bacchus crowned with grape leaves, offering a bowl of red wine with provocative charm.'
        },
        {
          title: 'Bacchus and Ariadne',
          artist: 'Titian',
          period: 'High Renaissance (1520–1523)',
          location: 'National Gallery, London',
          description: 'A dynamic, color-saturated masterpiece capturing the exact split second Dionysus leaps from his leopard-drawn chariot to save Ariadne.'
        }
      ]
    },
    skills: [
      {
        name: 'Dionysian Ecstatic Frenzy',
        typeName: 'Ultimate Power',
        description: 'Floods the battlefield with sweet intoxicating vapor, throwing all enemies into uncontrollable confusion and madness.',
        cooldown: '28s'
      },
      {
        name: 'Strike of the Thyrsus',
        typeName: 'Plant Growth',
        description: 'Strikes the ground with the pinecone staff, causing wild grapevines and ivy to burst forth and strangle hostile targets.',
        cooldown: '12s'
      },
      {
        name: 'Liberation of the Twice-Born',
        typeName: 'Passive Rebirth',
        description: 'Upon taking fatal damage, Dionysus temporarily enters an invincible revelry state, restoring a large portion of health.'
      }
    ],
    trivia: [
      'Dionysus was the only Olympian god born of a mortal mother who was elevated to a full seat upon the Twelve Olympian thrones.',
      'His maenad followers carried thyrsoi—staffs wrapped in ivy and tipped with a pinecone—which could miraculously draw honey and wine from rocks.'
    ]
  },

  demeter: {
    title: 'Goddess of the Harvest · Sovereign of Agriculture, Grain & Sacred Earth',
    domain: 'Agriculture, Grain, Sacred Earth, Fertility, Seasons, Motherly Love',
    domainDetail: 'Daughter of Cronus and mother of Persephone; her grief brings winter and her joy brings the golden summer harvest',
    quote: 'Until my beloved child walks upon the green earth again, not a single seed shall sprout from the soil.',
    symbols: ['Sheaf of Golden Wheat', 'Cornucopia (Horn of Plenty)', 'Blazing Torch', 'Scythe'],
    animals: ['Winged Serpent (Chariot)', 'Pig (Symbol of Soil)', 'Gecko'],
    plants: ['Wheat', 'Barley', 'Poppy', 'Cornflower'],
    lore: {
      summary: 'Demeter sustains mortal existence through the gift of agricultural civilization. When her daughter Persephone was abducted to the Underworld, Demeter’s monumental grief demonstrated that even the supreme gods must answer to the power of the earth.',
      birthAndOrigin: 'Born to Cronus and Rhea, swallowed into his belly and freed by Zeus. Demeter taught humanity how to plow fields, sow grain, and bake bread, elevating human society from savage nomadic foraging into settled civilization.',
      majorStories: [
        {
          title: 'The Great Famine and the Eleusinian Mysteries',
          period: 'Archaic Era',
          content: 'Desolate over the abduction of Persephone, Demeter roamed the earth for nine days with blazing torches. In her grief, crops withered and all green life ceased. Alarmed that humanity would starve, Zeus was forced to intervene, establishing the division of seasons.',
          highlight: 'The sacred founding legend of the Eleusinian Mysteries, antiquity’s most revered spiritual initiation'
        },
        {
          title: 'Teaching Triptolemus the Gift of Agriculture',
          period: 'Heroic Age',
          content: 'Welcomed with hospitality at Eleusis by King Celeus, Demeter rewarded his son Triptolemus by presenting him with wheat seeds and a winged serpent chariot, commissioning him to fly across the world teaching all peoples how to farm.',
          highlight: 'The civilizing mission of agriculture spreading across the ancient Mediterranean'
        },
        {
          title: 'Punishment of King Erysichthon with Insatiable Hunger',
          period: 'Archaic Era',
          content: 'When arrogant King Erysichthon felled Demeter’s sacred oak grove despite warnings, she cursed him with Limos (Starvation). No matter how much he gorged, his hunger grew fiercer, until he sold all his wealth and eventually devoured his own limbs.',
          highlight: 'An ancient environmental warning against the reckless desecration of sacred nature'
        }
      ],
      romanDifferences: 'In Roman religion, Ceres was closely aligned with plebeian rights and grain distribution (Annona), deeply beloved by the common working people.',
      etymologyAndLegacy: 'The modern word "cereal" originates from her Roman name Ceres. The first discovered asteroid was named Ceres in her honor.',
      famousArtwork: [
        {
          title: 'Ceres (Demeter of Cnidus)',
          artist: 'Attributed to Leochares',
          period: 'Classical Antiquity (c. 350 BC)',
          location: 'British Museum, London',
          description: 'A moving seated marble statue capturing a maternal face imbued with deep solemnity, gentle wisdom, and quiet sorrow.'
        }
      ]
    },
    skills: [
      {
        name: 'Wrath of the Barren Earth',
        typeName: 'Ultimate Power',
        description: 'Saps all moisture and life energy from the ground, desiccating and withering enemies while draining their vitality.',
        cooldown: '32s'
      },
      {
        name: 'Golden Harvest Bounty',
        typeName: 'Bountiful Blessing',
        description: 'Summons sheaves of golden wheat around allies, granting massive continuous health regeneration and debuff cleansing.',
        cooldown: '16s'
      },
      {
        name: 'Eternal Mother Earth',
        typeName: 'Passive Vitality',
        description: 'Draws endless sustenance from the soil, increasing maximum health pool and providing automatic damage shields.'
      }
    ],
    trivia: [
      'The poppy flower was sacred to Demeter, as its soothing properties were said to offer her gentle slumber during her grief for Persephone.',
      'Initiates in the Eleusinian Mysteries drank a sacred beverage called Kykeon (made of barley and pennyroyal) in reenactment of Demeter’s fast.'
    ]
  },

  hestia: {
    title: 'Goddess of the Hearth · Guardian of Sacred Fire, Home & Sanctuary',
    domain: 'Hearth, Sacred Flame, Home, Domestic Peace, Sanctuary, Hospitality',
    domainDetail: 'Firstborn child of Cronus and Rhea; gentle virgin keeper of the eternal flame that burns in every home and temple',
    quote: 'Where the sacred hearth flame burns bright, peace and sanctuary shall never fade.',
    symbols: ['Eternal Hearth Fire', 'Brazier (Fire Altar)', 'Kettle', 'Veil of Modesty'],
    animals: ['Donkey (Sacred Companion)', 'Pig (Household Offering)'],
    plants: ['Sweet Chaste Tree (Agnus Castus)', 'Oak Firewood'],
    lore: {
      summary: 'Hestia is the gentle guardian of familial harmony and civic peace. Remaining aloof from the jealousies and petty squabbles of Mount Olympus, she received the first and finest portion of every public sacrifice across Greece.',
      birthAndOrigin: 'The very first child born to Cronus and Rhea and the first swallowed into darkness, she was also the last to be disgorged, earning her the dual title of both eldest and youngest child of the Titans.',
      majorStories: [
        {
          title: 'The Sacred Vow of Eternal Maidenhood',
          period: 'Early Olympian Era',
          content: 'Both Poseidon and Apollo eagerly sought her hand in marriage. To avoid discord among the gods, Hestia placed her hand upon the head of Zeus and swore an unbreakable oath to remain a virgin, dedicating her entire existence to tending the eternal flame.',
          highlight: 'The sublime choice of domestic peace and universal devotion above marital possession'
        },
        {
          title: 'The First and Final Offering of Every Temple',
          period: 'Archaic Era',
          content: 'In gratitude for her selfless stewardship, Zeus granted Hestia the highest domestic honor: in every Greek polis (city-state), the central prytaneion kept her perpetual fire burning, and every prayer and feast began with an offering to Hestia.',
          highlight: 'The Greek proverb "Start with Hestia", meaning to begin every endeavor with reverence'
        },
        {
          title: 'Cession of the Olympian Throne to Dionysus',
          period: 'Classical Transition',
          content: 'In later mythological traditions, when Dionysus was welcomed to Mount Olympus to join the Twelve Gods, Hestia quietly ceded her golden council seat to him without conflict, content to tend the central hearth fire on the palace floor.',
          highlight: 'The absolute embodiment of selfless modesty, humility, and peaceful equilibrium'
        }
      ],
      romanDifferences: 'In Rome, Vesta was the supreme spiritual patroness of the empire. The Vestal Virgins, chosen from noble families, guarded her sacred flame in the Roman Forum under vow of chastity.',
      etymologyAndLegacy: 'The word "hearth" and domestic words in Romance languages trace their spiritual roots to Vesta and Hestia.',
      famousArtwork: [
        {
          title: 'Vesta (The Giustiniani Hestia)',
          artist: 'Unknown Classical Master',
          period: 'Classical Antiquity (c. 470 BC)',
          location: 'Torlonia Collection, Rome',
          description: 'A dignified marble statue representing Hestia clothed in severe, elegant drapery with a head veil, radiating serene domestic majesty.'
        }
      ]
    },
    skills: [
      {
        name: 'Sanctuary of the Eternal Flame',
        typeName: 'Ultimate Power',
        description: 'Ignites a radiant ring of perpetual hearth fire around allies, rendering them completely immune to crowd control and lethal blows.',
        cooldown: '35s'
      },
      {
        name: 'Warmth of the Home Hearth',
        typeName: 'Protective Aura',
        description: 'Dispels cold, curses, and fear, continuously shielding allies and restoring stamina.',
        cooldown: '15s'
      },
      {
        name: 'First and Final Offering',
        typeName: 'Passive Inviolability',
        description: 'Grants high resistance to elemental damage and ensures initial party ability casts have reduced cooldowns.'
      }
    ],
    trivia: [
      'Whenever Greek colonists sailed to establish a new city across the Mediterranean, they carried coals from Hestia’s public hearth to kindle the fire of their new home.',
      'Unlike other deities who had elaborate, drama-filled myths, Hestia was honored through quiet, steadfast rituals of daily life.'
    ]
  }
};
