import { CharacterLocalization } from './localizationHelpers';

export const underworldTitansEn: Record<string, CharacterLocalization> = {
  persephone: {
    title: 'Queen of the Underworld · Maiden of Spring & Sovereign of the Dead',
    domain: 'Spring Flowers, Vegetation, Rebirth, Underworld Sovereign, Queen of the Dead',
    domainDetail: 'Daughter of Zeus and Demeter; she reigns beside Hades in the Underworld in winter and brings blooming life to earth in spring',
    quote: 'I wear the crown of the dead upon my brow, yet with every springtime step, flowers bloom anew from the earth.',
    symbols: ['Pomegranate Seeds', 'Torch of Eleusis', 'Crown of Asphodel', 'Sheaf of Grain'],
    animals: ['Screech Owl', 'Bat', 'Black Ram'],
    plants: ['Pomegranate', 'Asphodel', 'Narcissus', 'Red Poppy'],
    lore: {
      summary: 'Persephone holds a dual identity in Greek mythology: she is Kore, the innocent maiden of springtime blossoms, and the dreaded, formidable Queen of the Underworld who holds court over departed souls.',
      birthAndOrigin: 'Bred of Zeus and Demeter, she grew up surrounded by nymphs in fields of blooming flowers. While gathering fragrant narcissus blossoms on the plain of Nysa, the earth cleaved open and Hades carried her into the subterranean realm.',
      majorStories: [
        {
          title: 'The Pomegranate of the Underworld and the Four Seasons',
          period: 'Archaic Era',
          content: 'Fasting in the underworld, Persephone finally accepted four (or six) sweet seeds of a pomegranate offered by Hades. Because eating subterranean food bound one to the dead, Zeus decreed that she must spend one-third of the year with Hades as Queen, returning to the surface each spring.',
          highlight: 'The classical mythological explanation for the agricultural cycle of death and rebirth'
        },
        {
          title: 'Meeting with Psyche and the Box of Divine Beauty',
          period: 'Heroic Age',
          content: 'When the mortal maiden Psyche was tasked by Aphrodite to retrieve a drop of divine beauty from the underworld, Persephone took pity on her devotion to Eros and granted a portion of her enchanted beauty in a sealed casket.',
          highlight: 'The rare mercy of the Queen of the Dead aiding true love'
        },
        {
          title: 'The Eleusinian Mysteries of Immortality',
          period: 'Archaic Era',
          content: 'The reunion of Persephone with her mother Demeter formed the spiritual core of the Eleusinian Mysteries, offering initiates the promise that mortal death was merely a transition into a joyful afterlife in Elysium.',
          highlight: 'The most sacred esoteric religious tradition of the classical Greco-Roman world'
        }
      ],
      romanDifferences: 'In Roman religion, Proserpina was associated with the germination of seeds in agriculture and received major chthonic veneration.',
      etymologyAndLegacy: 'The name Persephone may mean "Bringer of Destruction" or "Threshing of Grain". Her dual archetype symbolizes cycles of transformation and renewal in psychology.',
      famousArtwork: [
        {
          title: 'The Return of Persephone',
          artist: 'Frederic Leighton',
          period: 'Victorian Classicism (1891)',
          location: 'Leeds Art Gallery, UK',
          description: 'A radiant painting capturing the dramatic embrace between Demeter on the surface and Persephone ascending from the subterranean shadows led by Hermes.'
        }
      ]
    },
    skills: [
      {
        name: 'Bloom of the Dual Realm',
        typeName: 'Ultimate Power',
        description: 'Summons vibrant springtime flowers that heal allies while subterranean asphodel vines drag down and wither enemy champions.',
        cooldown: '30s'
      },
      {
        name: 'Pomegranate Seal',
        typeName: 'Chthonic Curse',
        description: 'Inscribes an underworld seal on an enemy, preventing all healing effects and transferring their vitality to Persephone.',
        cooldown: '15s'
      },
      {
        name: 'Queen of the Two Worlds',
        typeName: 'Passive Cycle',
        description: 'Alternates between Spring Mode (high regeneration and speed) and Winter Mode (high defense and damage reflection).',
      }
    ],
    trivia: [
      'Greeks often referred to her reverently as Kore ("The Maiden") or Despoina ("The Mistress") to avoid calling upon the dread Queen of the Dead directly.',
      'Unlike modern pop adaptations portraying her as a helpless prisoner, classical myths depict Persephone as ruling the Underworld with formidable authority equal to Hades.'
    ]
  },

  cronus: {
    title: 'King of the Titans · Master of the Scythe & Father of Time',
    domain: 'Time (Chronos), Harvest, Agriculture, Destiny, Tyrannical Rule',
    domainDetail: 'Youngest Titan son of Uranus and Gaia who castrated his father to reign over the mythical Golden Age before being overthrown by Zeus',
    quote: 'Destiny is an unyielding wheel; what I took with the scythe, my children shall wrest with thunder.',
    symbols: ['Adamantine Harpe (Scythe)', 'Hourglass of Time', 'Swaddling Decoy Stone', 'Sickle'],
    animals: ['Raven', 'Serpent of Eternity (Ouroboros)'],
    plants: ['Barley', 'Pomegranate', 'Cypress'],
    lore: {
      summary: 'Cronus was the sovereign ruler of the universe during the Titan era. Prompted by his mother Gaia, he overthrew the sky god Uranus with an adamantine sickle, ushering in the Golden Age, yet was haunted by prophecy until his youngest son Zeus cast him into Tartarus.',
      birthAndOrigin: 'Born of Uranus (Sky) and Gaia (Earth). When Uranus imprisoned his monster offspring in the depths of Gaia, Gaia forged a jagged adamantine scythe and recruited Cronus, who ambushed and castrated Uranus as he descended upon the earth.',
      majorStories: [
        {
          title: 'The Overthrow of Uranus and the Golden Age',
          period: 'Primordial Era',
          content: 'Ascending the cosmic throne alongside his sister-wife Rhea, Cronus ruled over mankind’s legendary Golden Age—a time free from disease, hard labor, war, and aging, where the earth gave fruit spontaneously.',
          highlight: 'The primeval human myth of an innocent, blissful paradisiacal origin'
        },
        {
          title: 'Swallowing His Children and the Omphalos Stone',
          period: 'Titan Era',
          content: 'Forewarned by Uranus and Gaia that he was fated to be overthrown by his own son, Cronus devoured Hestia, Demeter, Hera, Hades, and Poseidon as each was born. Rhea tricked him by handing him a swaddled stone (the Omphalos), enabling Zeus to survive.',
          highlight: 'The terrifying mythological allegory of Time devouring its own creations'
        },
        {
          title: 'Defeat in the Titanomachy and Tartarus Exile',
          period: 'Dawn of Olympian Era',
          content: 'After ten years of cosmic war between Titans and Olympians, Zeus liberated the Cyclopes and cast Cronus and the Titans into the bronze-walled abyss of Tartarus, ending the reign of the Titans.',
          highlight: 'The monumental succession of generations marking the establishment of civilized divine order'
        }
      ],
      romanDifferences: 'In Roman religion, Saturn was beloved as an agricultural benefactor. The festival of Saturnalia was celebrated with masters serving slaves and widespread feasting.',
      etymologyAndLegacy: 'The root "chron-" (chronology, chronic) derives from association with Chronos (Time). The planet Saturn and the day Saturday bear his Roman name.',
      famousArtwork: [
        {
          title: 'Saturn Devouring His Son',
          artist: 'Francisco Goya',
          period: 'Romanticism / Black Paintings (1819–1823)',
          location: 'Museo del Prado, Madrid',
          description: 'A harrowing, nightmarish psychological vision of Cronus in visceral madness tearing into the flesh of his offspring.'
        }
      ]
    },
    skills: [
      {
        name: 'Scythe of the Chronos Singularity',
        typeName: 'Ultimate Power',
        description: 'Swings the massive adamantine scythe to tear the fabric of spacetime, freezing all surrounding adversaries in temporal stasis.',
        cooldown: '35s'
      },
      {
        name: 'Decay of the Golden Age',
        typeName: 'Temporal Withering',
        description: 'Accelerates the aging of enemy weapons and armor, reducing their attack speed and causing stacking decay damage.',
        cooldown: '16s'
      },
      {
        name: 'Devourer of Destiny',
        typeName: 'Passive Timelessness',
        description: 'Immune to all slow and stasis debuffs; converts incoming critical damage into temporal energy that restores health.'
      }
    ],
    trivia: [
      'The Omphalos stone that Cronus swallowed and later regurgitated was displayed at the sanctuary of Delphi as the physical center of the earth.',
      'In Orphic tradition, Zeus eventually released Cronus from Tartarus and appointed him king of the Blessed Isles (Elysium).'
    ]
  },

  prometheus: {
    title: 'Titan of Forethought · Benefactor of Humanity & Giver of Fire',
    domain: 'Forethought, Fire, Humanity, Civilization, Sacrifice, Rebellion',
    domainDetail: 'Wise Titan who molded the first humans from clay and defied the tyranny of Zeus by stealing sacred fire from Olympus',
    quote: 'Though the eagle tear at my flesh for ten thousand years, the light of reason gifted to mankind shall never be quenched.',
    symbols: ['Fennel Stalk of Fire', 'Unbreakable Chains', 'Clay Human Figurine', 'Promethean Torch'],
    animals: ['Caucasian Eagle (Tormentor)', 'Sacred Bull'],
    plants: ['Giant Fennel (Narthex)', 'Cypress'],
    lore: {
      summary: 'Prometheus is the ultimate rebel-hero of Greek mythology. Choosing foresight over brute force, he stood as the champion of suffering mortals against the callous sovereignty of the Olympian gods, endowing humanity with fire, science, and the arts.',
      birthAndOrigin: 'Son of the Titan Iapetus and the Oceanid Clymene. Unlike his brothers Atlas and Epimetheus, Prometheus possessed gift of future sight and sided with Zeus during the Titanomachy, knowing the Titans were doomed.',
      majorStories: [
        {
          title: 'The Theft of Celestial Fire in a Fennel Stalk',
          period: 'Archaic Era',
          content: 'When Zeus withheld fire to keep mortals shivering and helpless, Prometheus ascended Olympus in secret, touched a hollow giant fennel stalk to the Sun Chariot of Helios, and carried the glowing ember down to humanity, igniting civilization.',
          highlight: 'The supreme mythic allegory for the birth of human technology, science, and philosophical enlightenment'
        },
        {
          title: 'The Trick at Mecone (The Division of Sacrifices)',
          period: 'Archaic Era',
          content: 'At Mecone, Prometheus butchered an ox and divided it: wrapping delicious meat beneath unappealing stomach skin, and wrapping dry bones under glistening fat. Zeus chose the fat-covered bones, establishing the tradition where mortals kept the meat and burned bones to the gods.',
          highlight: 'The cunning intellect of the trickster defending mortal welfare'
        },
        {
          title: 'Torture on Mount Caucasus and Liberation by Heracles',
          period: 'Heroic Age',
          content: 'Zeus chained Prometheus to a desolate peak in the Caucasus Mountains, where a giant eagle pecked out his liver every day, only for it to regenerate by night. Centuries later, Heracles shot the eagle with an arrow and freed the Titan with Zeus’s blessing.',
          highlight: 'The archetype of the suffering savior and the triumph of heroic endurance'
        }
      ],
      romanDifferences: 'In Rome, Prometheus was revered by stoic philosophers like Seneca as the supreme ideal of intellectual endurance against despotic authority.',
      etymologyAndLegacy: 'His name means "Forethought" (in contrast to his brother Epimetheus, "Afterthought"). The adjective "promethean" signifies courageous defiance and inventive genius.',
      famousArtwork: [
        {
          title: 'Prometheus Bound',
          artist: 'Peter Paul Rubens',
          period: 'Baroque (1611–1618)',
          location: 'Philadelphia Museum of Art, USA',
          description: 'A masterpiece of muscular tension and visceral drama depicting Prometheus writhing in chains while the colossal eagle attacks his side.'
        }
      ]
    },
    skills: [
      {
        name: 'Spark of Promethean Fire',
        typeName: 'Ultimate Power',
        description: 'Ignites the primordial spark of celestial intellect in all allies, granting massive skill haste, damage amplification, and burning basic attacks.',
        cooldown: '30s'
      },
      {
        name: 'Foresight of Destiny',
        typeName: 'Tactical Ward',
        description: 'Foresees the next hostile burst ability, generating an impenetrable barrier for the most vulnerable party member.',
        cooldown: '14s'
      },
      {
        name: 'Titan’s Unbroken Will',
        typeName: 'Passive Tenacity',
        description: 'Cannot be controlled by stun, silence, or immobilize for more than 1 second; permanently increases team tenacity.',
      }
    ],
    trivia: [
      'Mary Shelley’s immortal gothic novel Frankenstein was originally subtitled "The Modern Prometheus".',
      'Even after being released, Prometheus wore a ring forged from a link of his Caucasus chains set with a mountain stone, fulfilling Zeus’s decree that he remain symbolically bound.'
    ]
  },

  atlas: {
    title: 'Titan of Endurance · Bearer of the Celestial Heavens',
    domain: 'Endurance, Astronomy, Heavens, Mountain Peaks, Strength',
    domainDetail: 'Brother of Prometheus; condemned by Zeus to stand at the western edge of the world holding the celestial sphere upon his shoulders',
    quote: 'The weight of the starry vault bears down upon my spine, yet I shall not yield an inch.',
    symbols: ['Celestial Celestial Sphere', 'Heavy Iron Pillar', 'Granite Mountains', 'Star Map'],
    animals: ['Mountain Ram', 'Golden Bull'],
    plants: ['Alpine Fir', 'Cedar'],
    lore: {
      summary: 'Atlas personifies colossal physical fortitude and perseverance. As general of the Titan armies in the Titanomachy, his sheer strength made him the greatest threat to Olympus, resulting in the eternal sentence of holding the sky aloft.',
      birthAndOrigin: 'Son of the Titan Iapetus and brother of Prometheus. While Prometheus counseled cunning, Atlas trusted in brute Titan might, leading the frontline charges of the Titans.',
      majorStories: [
        {
          title: 'The Eternal Sentence of Bearing the Heavens',
          period: 'Dawn of Olympian Era',
          content: 'After the defeat of the Titans, while his kin were cast into Tartarus, Zeus singled out Atlas for a special fate: stationed at the western limits of the world (near the Garden of the Hesperides) to hold the celestial dome aloft to prevent heaven and earth from colliding.',
          highlight: 'The mythological embodiment of cosmic architectural stability'
        },
        {
          title: 'Heracles and the Eleventh Labor (Apples of the Hesperides)',
          period: 'Heroic Age',
          content: 'Heracles offered to hold the sky while Atlas retrieved the Golden Apples from his daughters, the Hesperides. Returning with the apples, Atlas proposed delivering them himself, intending to leave Heracles holding the heavens forever. Heracles outwitted him, asking Atlas to hold the sky for a moment to pad his shoulders, and promptly walked away.',
          highlight: 'The legendary battle of wits between colossal physical titan power and mortal hero intellect'
        },
        {
          title: 'Petrification by Perseus into the Atlas Mountains',
          period: 'Heroic Age',
          content: 'When Perseus returned with Medusa’s severed head and asked Atlas for shelter, Atlas remembered a prophecy of a son of Zeus stealing his apples and rudely rebuffed him. Perseus unveiled the Gorgon’s gaze, turning Atlas into the vast stone Atlas Mountain range in North Africa.',
          highlight: 'The mythological origin of the Atlas Mountains supporting the clouds'
        }
      ],
      romanDifferences: 'Roman scholars celebrated Atlas as the legendary inventor of astronomy and celestial navigation.',
      etymologyAndLegacy: 'The Atlantic Ocean, collections of geographic maps ("atlas"), and the topmost vertebra supporting the human skull (atlas bone) are named after him.',
      famousArtwork: [
        {
          title: 'Farnese Atlas',
          artist: 'Roman Sculptor after Hellenistic Original',
          period: '2nd Century AD (c. 150 AD)',
          location: 'National Archaeological Museum, Naples',
          description: 'The oldest surviving pictorial representation of Western constellations, depicting Atlas kneeling under the colossal celestial globe.'
        }
      ]
    },
    skills: [
      {
        name: 'Cataclysmic Pillar of the Sky',
        typeName: 'Ultimate Power',
        description: 'Slams the celestial weight of the heavens into the earth, crushing all enemies in a wide radius and stunning them for 3 seconds.',
        cooldown: '32s'
      },
      {
        name: 'Granite Mountain Guard',
        typeName: 'Absolute Taunt',
        description: 'Hardens skin into solid granite, forcing all nearby enemies to attack Atlas while absorbing 80% of all incoming damage.',
        cooldown: '16s'
      },
      {
        name: 'Unshakable Celestial Bearer',
        typeName: 'Passive Bulk',
        description: 'Cannot be knocked airborne or displaced; converts maximum health into bonus physical armor and magic resistance.'
      }
    ],
    trivia: [
      'Atlas was the father of the Hesperides (nymphs of the sunset), the Pleiades (seven stars), and the Hyades (rain stars).',
      'The legendary island kingdom of Atlantis mentioned in Plato’s dialogues was named after Atlas, who was honored as its first mythical king.'
    ]
  },

  cerberus: {
    title: 'Hound of Hades · Three-Headed Guardian of the Underworld Gates',
    domain: 'Guardianship, Underworld Gates, Detection of the Living, Tartarus Ward',
    domainDetail: 'Offspring of Typhon and Echidna; three-headed beast with a serpent’s tail who guards the iron gates of Hades',
    quote: 'Welcome, all silent shades of the dead; but let no living soul dare cross the threshold of my gates.',
    symbols: ['Iron Collar & Chains', 'Three Snarling Heads', 'Serpent Tail', 'Stygian River Stone'],
    animals: ['Black Molossian Dog', 'Viper', 'Jackal'],
    plants: ['Aconite (Wolfsbane / Monkshood)'],
    lore: {
      summary: 'Cerberus is the ferocious sentinel of the Underworld. Stationed on the shores of the river Styx, he gently welcomes the incoming spirits of the deceased, but tears apart any shade attempting to escape and devours any living intruder who tries to trespass.',
      birthAndOrigin: 'Bred from the union of the primordial giant Typhon and the serpent-woman Echidna, brother to the Hydra and the Chimera.',
      majorStories: [
        {
          title: 'The Twelfth Labor of Heracles: Capture of Cerberus',
          period: 'Heroic Age',
          content: 'For his final and most terrifying labor, Eurystheus commanded Heracles to bring Cerberus alive to the mortal world. Hades agreed on one condition: Heracles must subdue the hound using only bare hands and no weapons. Heracles wrestled the beast into submission and paraded it before Eurystheus.',
          highlight: 'The climactic summit of Heracles’s mortal deeds conquering death itself'
        },
        {
          title: 'Lulled by Orpheus’s Sublime Lyre Chords',
          period: 'Heroic Age',
          content: 'Descending into the underworld to rescue Eurydice, the master bard Orpheus strummed such exquisite, mournful melodies upon his golden lyre that Cerberus’s three fierce heads closed their eyes and fell into peaceful slumber.',
          highlight: 'The classic triumph of sublime art and musical harmony over monstrous primal violence'
        },
        {
          title: 'The Honey Cake of the Sibyl in the Aeneid',
          period: 'Trojan Cycle',
          content: 'When the Trojan hero Aeneas was guided into the Underworld by the Cumaean Sibyl, she tossed a honeyed wheat cake steeped in sleep-inducing poppies to Cerberus. The hound devoured it with all three mouths and fell into deep slumber, allowing them safe passage.',
          highlight: 'The origin of the English idiom "a sop to Cerberus" (a bribe to silence an obstacle)'
        }
      ],
      romanDifferences: 'In Virgil and Ovid, Cerberus was described with venomous vipers bristling along his spine and saliva so toxic that wherever it dripped upon the earth, deadly wolfsbane (aconite) sprouted.',
      etymologyAndLegacy: 'The name Cerberus may derive from Proto-Indo-European *kerberos, meaning "spotted". In cybersecurity, the Kerberos network authentication protocol is named in honor of the three-headed guardian.',
      famousArtwork: [
        {
          title: 'Heracles and Cerberus',
          artist: 'Attributed to the Diosphos Painter',
          period: 'Attic Black-Figure Vase (c. 500 BC)',
          location: 'Musée du Louvre, Paris',
          description: 'A dynamic archaic vase painting depicting Heracles leading the chained, twin- or three-headed hound past the columns of Hades.'
        }
      ]
    },
    skills: [
      {
        name: 'Three-Headed Stygian Howl',
        typeName: 'Ultimate Power',
        description: 'Unleashes a terrifying unison roar from all three heads, terrifying all nearby enemies and inflicting armor shred.',
        cooldown: '28s'
      },
      {
        name: 'Venomous Serpent Tail Strike',
        typeName: 'Poison Lash',
        description: 'Whips the viper tail across enemies, injecting lethal Tartarean venom that deals heavy damage over time.',
        cooldown: '12s'
      },
      {
        name: 'Gatekeeper’s Vigilance',
        typeName: 'Passive Scent',
        description: 'Cannot be ambushed from stealth; automatically reveals invisible units and increases damage against low-health targets.',
      }
    ],
    trivia: [
      'In ancient Greece, mourners placed a honey cake alongside a coin in the tomb of the deceased so the soul could safely bribe Cerberus at the gates.',
      'J.K. Rowling’s Fluffy in Harry Potter—a three-headed guard dog that falls asleep to music—is directly modeled after Cerberus.'
    ]
  },

  hecate: {
    title: 'Goddess of Witchcraft · Mistress of Magic, Crossroads, Necromancy & the Moon',
    domain: 'Witchcraft, Sorcery, Magic, Crossroads, Ghosts, Necromancy, Dark Moon',
    domainDetail: 'Titaness daughter of Perses and Asteria; sovereign lady of magic who holds torches at the threshold between worlds',
    quote: 'At the triple crossroads under the dark of the moon, all unseen spirits answer my call.',
    symbols: ['Twin Blazing Torches', 'Keys of the Cosmos', 'Triple Visage (Trivia)', 'Dagger of Magic'],
    animals: ['Black Dog', 'Polecat', 'Toad', 'Screech Owl'],
    plants: ['Aconite', 'Mandrake', 'Belladonna', 'Yew Tree'],
    lore: {
      summary: 'Hecate is the ancient and enigmatic goddess of witchcraft and nocturnal sorcery. Revered by Zeus above many other Titans, she holds keys to the gates between heaven, earth, and the Underworld, guiding travelers through spiritual and physical crossroads.',
      birthAndOrigin: 'Daughter of the Titans Perses and Asteria. Zeus honored her with dominion over heaven, fertile earth, and the barren sea, making her one of the few Titans to retain full honors under Olympian rule.',
      majorStories: [
        {
          title: 'Guiding Demeter with Torches in the Underworld',
          period: 'Archaic Era',
          content: 'When Demeter sought Persephone in the darkest depths of the underworld, Hecate lit the pitch-black tunnels with her twin torches. After Persephone became Queen, Hecate remained her most trusted companion and ministering minister.',
          highlight: 'The benevolent guide illuminating the darkest psychological and spiritual abysses'
        },
        {
          title: 'Slaying the Giant Clytius in the Gigantomachy',
          period: 'Dawn of Olympian Era',
          content: 'Fighting on the side of the gods in the great Gigantomachy against the giants, Hecate attacked the giant Clytius with her flaming torches, setting him ablaze until Heracles finished him with an arrow.',
          highlight: 'The fierce, warlike aspect of the mystical goddess defending cosmic order'
        },
        {
          title: 'Patroness of Medea’s Sorcery',
          period: 'Heroic Age',
          content: 'The Colchian princess and sorceress Medea was high priestess of Hecate, invoking her sacred herbs, potions, and nocturnal spells to help Jason overcome the fire-breathing bulls and sleepless dragon.',
          highlight: 'The primary divine patroness of witchcraft and herbal alchemy in Western literature'
        }
      ],
      romanDifferences: 'In Rome, she was worshipped as Trivia ("Goddess of the Three Ways"), with shrines placed at three-way road intersections where offerings of food (Hecate’s Suppers) were left at the new moon.',
      etymologyAndLegacy: 'Her name means "Worker from Afar" (Hekatos). She influenced Shakespeare’s Macbeth, and the Triple Goddess archetype in modern Wicca draws heavily from her.',
      famousArtwork: [
        {
          title: 'Hecate (The Night of Enitharmon’s Joy)',
          artist: 'William Blake',
          period: 'Romanticism (1795)',
          location: 'Tate Britain, London',
          description: 'A mystical, dreamlike color print showing Hecate seated between fantastical underworld beasts beneath the midnight sky.'
        }
      ]
    },
    skills: [
      {
        name: 'Hex of the Triple Crossroads',
        typeName: 'Ultimate Power',
        description: 'Summons three spectral incarnations of Hecate to surround the battlefield, casting mass confusion, silence, and dark magic explosions.',
        cooldown: '30s'
      },
      {
        name: 'Torches of the Stygian Veil',
        typeName: 'Curse Flame',
        description: 'Hurls spectral ghost fire that reveals hidden enemies, suppresses magic resistance, and inflicts burning soul damage.',
        cooldown: '14s'
      },
      {
        name: 'Mistress of Necromancy',
        typeName: 'Passive Sorcery',
        description: 'Whenever an enemy unit is slain on the field, Hecate converts their soul into a protective barrier and replenishes mana.',
      }
    ],
    trivia: [
      'At crossroads in Greece, statues of Hecate were carved with three bodies or three faces looking in all three directions at once (Hekate Triformis).',
      'The howling of neighborhood dogs in the night was believed by the Greeks to announce the unseen passing of Hecate and her ghostly train.'
    ]
  },

  nyx: {
    title: 'Primordial Goddess of Night · Shadow of the Cosmos & Mother of Mystery',
    domain: 'Night, Darkness, Cosmic Shadows, Sleep, Dreams, Fate',
    domainDetail: 'Primordial deity born directly from Chaos; ancient sovereign whose power and mystery even Zeus feared to cross',
    quote: 'Before the sun shone and the stars were set in motion, I wrapped the newborn universe in my starry black mantle.',
    symbols: ['Black Star-Spangled Mantle', 'Crescent Moon Veil', 'Poppy Seeds', 'Inverted Torch'],
    animals: ['Owl', 'Bat', 'Black Mare'],
    plants: ['Night-Blooming Jasmine', 'Opium Poppy', 'Cypress'],
    lore: {
      summary: 'Nyx is one of the most ancient primordial entities in Greek cosmology. Born from primeval Chaos, she drives her shadowy chariot across the sky each evening, pulling a veil of dark star-studded mist over the world.',
      birthAndOrigin: 'Born of Chaos at the beginning of time alongside Erebus (Darkness), Gaia (Earth), and Tartarus. She birthed Hemera (Day), Aether (Light), and without a consort birthed Thanatos (Death), Hypnos (Sleep), Nemesis (Retribution), and the Fates (Moirai).',
      majorStories: [
        {
          title: 'The Haven of Hypnos and the Awe of Zeus',
          period: 'Homeric Epics',
          content: 'When Hera persuaded Hypnos to put Zeus to sleep so she could harass Heracles, Zeus awoke in thunderous fury and pursued Hypnos across the cosmos. Hypnos fled into the subterranean cave of his mother Nyx. Zeus halted at the threshold and held his wrath, fearing to anger the ancient Night.',
          highlight: 'The singular Homeric episode demonstrating that even the King of Olympus bowed before Nyx’s authority'
        },
        {
          title: 'The Cosmic Crossing with Hemera (Day)',
          period: 'Primordial Era',
          content: 'Hesiod described in the Theogony that Nyx and her daughter Hemera inhabit the same subterranean bronze palace, but never meet inside: as one steps over the bronze threshold to journey across the world, the other enters to rest.',
          highlight: 'The sublime mythological personification of the perpetual cycle of day and night'
        },
        {
          title: 'Mother of the Fates and Cosmic Inevitability',
          period: 'Cosmological Dawn',
          content: 'Nyx birthed the three Moirai (Clotho, Lachesis, and Atropos)—the weavers of fate whose decrees not even the immortal gods can alter—solidifying her position as the mother of cosmic destiny.',
          highlight: 'The philosophic roots of destiny and cosmic justice residing in primordial shadow'
        }
      ],
      romanDifferences: 'In Roman religion, Nox was depicted with dark wings and a crown of stars, riding a two-horse chariot across the night sky.',
      etymologyAndLegacy: 'The word "nocturnal" and night roots across Indo-European languages share lineage with Nyx/Nox. The moons of Pluto (Nix) and asteroids bear her name.',
      famousArtwork: [
        {
          title: 'Night (La Nuit)',
          artist: 'Henri Fantin-Latour',
          period: 'Symbolism (1897)',
          location: 'Musée d’Orsay, Paris',
          description: 'A poetic canvas depicting the winged goddess of night gracefully floating through dark ether, scattering stars from her flowing draperies.'
        }
      ]
    },
    skills: [
      {
        name: 'Mantle of Cosmic Midnight',
        typeName: 'Ultimate Power',
        description: 'Shrouds the entire battlefield in impenetrable cosmic darkness, blinding all enemies and reducing their vision to zero for 4 seconds.',
        cooldown: '34s'
      },
      {
        name: 'Veil of Erebus',
        typeName: 'Shadow Stealth',
        description: 'Envelops an ally in deep shadow, granting invisibility, immunity to targeted abilities, and bonus critical strike damage.',
        cooldown: '16s'
      },
      {
        name: 'Primordial Majesty',
        typeName: 'Passive Dread',
        description: 'Emits an aura of primeval authority; nearby enemies suffer reduced energy recovery and increased ability cooldowns.',
      }
    ],
    trivia: [
      'In Orphic creation hymns, Nyx is considered the first of all beings, who laid the cosmic silver egg from which Phanes (Eros/Light) hatched.',
      'Her subterranean dwelling in Tartarus was said to be wrapped in three thick layers of perpetual midnight.'
    ]
  },

  thanatos: {
    title: 'God of Peaceful Death · The Inevitable Reaper of Mortal Souls',
    domain: 'Peaceful Death, Mortality, Soul Reaping, Inevitability, Destiny',
    domainDetail: 'Son of Nyx and twin brother of Hypnos; personification of gentle, peaceful death who carries souls gently to the Underworld',
    quote: 'Against my touch, neither king nor beggar holds sway; mortality is the one true equalizing law.',
    symbols: ['Inverted Extinguished Torch', 'Black Feather Wings', 'Sheathed Sword', 'Butterfly of the Soul'],
    animals: ['Raven', 'Vulture', 'Black Ram'],
    plants: ['Poppy', 'Cypress'],
    lore: {
      summary: 'Thanatos represents peaceful, natural mortality, in contrast to his sisters the Keres who personify violent death on the battlefield. Armed with black wings, he clips a lock of hair from the dying to dedicate them to Hades.',
      birthAndOrigin: 'Born of Nyx (Night) without a father, twin brother to Hypnos (Sleep). They dwell side by side in the subterranean chambers of Tartarus.',
      majorStories: [
        {
          title: 'The Deceit and Chaining of King Sisyphus',
          period: 'Heroic Age',
          content: 'Sent by Zeus to take the wily King Sisyphus of Corinth, Thanatos was outsmarted: Sisyphus asked him to demonstrate how his bronze handcuffs functioned and snapped them onto Thanatos. With death chained in a closet, no mortal on earth could die, throwing warfare into chaos until Ares freed him.',
          highlight: 'The famous Greek myth exploring what happens when the natural balance of mortality is broken'
        },
        {
          title: 'The Wrestling Match with Heracles for Alcestis',
          period: 'Heroic Age',
          content: 'When Queen Alcestis sacrificed her life to die in place of her husband King Admetus, Thanatos arrived to claim her. Heracles hid by her tomb, ambushed Thanatos, and wrestled the god of death with bare hands until Thanatos yielded and restored Alcestis to life.',
          highlight: 'Euripides’ celebrated tragedy depicting heroic physical valor challenging death'
        },
        {
          title: 'Carrying the Body of Sarpedon with Hypnos',
          period: 'Trojan Cycle',
          content: 'When Zeus’s beloved mortal son Sarpedon was slain by Patroclus, Zeus commanded Apollo to cleanse the corpse, and sent the twin gods Sleep (Hypnos) and Death (Thanatos) to carry him safely back to his homeland of Lycia for honorable burial.',
          highlight: 'Homer’s touching poetic depiction of Death and Sleep as gentle fraternal escorts'
        }
      ],
      romanDifferences: 'In Rome, Mors (or Letus) was portrayed in darker, more skeletal terms, resembling the later medieval Grim Reaper figure.',
      etymologyAndLegacy: 'The term "thanatology" (the scientific study of death and dying) and "euthanasia" (gentle death) derive directly from Thanatos.',
      famousArtwork: [
        {
          title: 'Euphronios Krater (Death and Sleep carrying Sarpedon)',
          artist: 'Euphronios (Painter) and Euxitheos (Potter)',
          period: 'Attic Red-Figure Vase (c. 515 BC)',
          location: 'National Archaeological Museum of Cerveteri, Italy',
          description: 'One of the most famous Greek ceramic vases in history, showing winged Thanatos and Hypnos lifting the fallen hero Sarpedon with reverent care.'
        }
      ]
    },
    skills: [
      {
        name: 'The Inevitable Scythe of Mortality',
        typeName: 'Ultimate Power',
        description: 'Strikes an enemy with the absolute decree of death; instantly executes targets whose health has fallen below 20%.',
        cooldown: '32s'
      },
      {
        name: 'Severing of the Mortal Thread',
        typeName: 'Soul Clip',
        description: 'Clips the spiritual vitality of a target, dealing true damage and preventing resurrection or death-prevention effects for 5 seconds.',
        cooldown: '14s'
      },
      {
        name: 'Twin of Slumber',
        typeName: 'Passive Inevitability',
        description: 'Attacks deal bonus damage against immobilized or sleeping targets, ignoring 30% of enemy armor.',
      }
    ],
    trivia: [
      'Unlike modern pop depictions of death with a bone scythe, classical Greeks depicted Thanatos as an athletic, beautiful winged youth carrying an inverted torch.',
      'His twin brother Hypnos (Sleep) was considered his gentler mirror image, showing how ancient Greeks saw sleep as a temporary preview of death.'
    ]
  },

  hypnos: {
    title: 'God of Sleep · Master of Dreams, Slumber & Sweet Rest',
    domain: 'Sleep, Dreams, Drowsiness, Rest, Subconscious, Hypnosis',
    domainDetail: 'Twin brother of Thanatos; gentle god who pours sweet forgetfulness and restful slumber over all living creatures from his horn',
    quote: 'Close your weary eyelids; let the river of forgetfulness wash away the sorrows of waking life.',
    symbols: ['Poppy Horn of Sleep', 'Inverted Branch of Lethe', 'Butterfly Wings at Temples', 'Dream Scepter'],
    animals: ['Nightjar', 'Bat', 'Dormouse'],
    plants: ['Opium Poppy', 'Mandrake', 'Valerian'],
    lore: {
      summary: 'Hypnos brings peaceful repose, sweet dreams, and restoration to weary gods and mortals alike. Residing in a soundless subterranean grotto where the river Lethe whispers, he wields a horn filled with slumber-inducing poppy nectar.',
      birthAndOrigin: 'Born of Nyx (Night), twin brother to Thanatos. He lives in an enchanted subterranean cavern in the Underworld where the sun never shines and poppies bloom in perpetual silence.',
      majorStories: [
        {
          title: 'Putting Zeus to Sleep in the Trojan War',
          period: 'Trojan Cycle',
          content: 'Hera bribed Hypnos with the promise of marrying the radiant Grace Pasithea if he would lull Zeus to sleep upon Mount Ida. When Zeus succumbed to slumber, Poseidon rallied the Greek armies and turned the tide of the Trojan War.',
          highlight: 'The episode proving that not even the King of the Gods can resist the power of sleep'
        },
        {
          title: 'The Dream Messenger Morpheus and King Ceyx',
          period: 'Archaic Era',
          content: 'When King Ceyx perished in a shipwreck, Hera requested Iris to fly to Hypnos’s cave to send a dream to Queen Alcyone. Hypnos dispatched his son Morpheus, who assumed Ceyx’s spectral form to inform the queen of his fate with gentle sorrow.',
          highlight: 'Ovid’s poignant romance of devoted love and the origin of the kingfisher (halcyon) bird'
        },
        {
          title: 'The Cavern of Perpetual Silence by the River Lethe',
          period: 'Mythological Geography',
          content: 'In Ovid’s Metamorphoses, Hypnos’s cave has no doors to avoid squeaking hinges, no roosters or barking dogs. Only the gentle murmuring of the River of Forgetfulness (Lethe) flows past his bed, surrounded by thousands of dreaming poppies.',
          highlight: 'Antiquity’s most evocative poetic description of deep, soothing rest and tranquility'
        }
      ],
      romanDifferences: 'In Roman religion, Somnus was depicted as a winged youth or weary old man carrying a horn of poppy seeds.',
      etymologyAndLegacy: 'The word "hypnosis", "hypnotic", and medical sleep treatments trace directly to Hypnos. His son Morpheus gave his name to the analgesic morphine.',
      famousArtwork: [
        {
          title: 'Bronze Head of Hypnos',
          artist: 'Attributed to Praxiteles’ School',
          period: 'Hellenistic (c. 350–300 BC)',
          location: 'British Museum, London',
          description: 'A serene bronze head with a delicate nightjar wing sprouting from his right temple, capturing the tranquil beauty of peaceful slumber.'
        }
      ]
    },
    skills: [
      {
        name: 'Deluge of the River Lethe',
        typeName: 'Ultimate Power',
        description: 'Releases a dense mist of sleep-inducing poppy nectar, putting all enemies in a wide radius into deep slumber for 4 seconds.',
        cooldown: '30s'
      },
      {
        name: 'Drowsy Touch of the Poppy Horn',
        typeName: 'Slumber Strike',
        description: 'Taps an enemy with the poppy horn, instantly reducing their attack speed and movement speed by 60% before causing sleep.',
        cooldown: '12s'
      },
      {
        name: 'Sweet Rejuvenation',
        typeName: 'Passive Rest',
        description: 'Sleeping allies or allies out of combat regenerate health and mana at an accelerated rate.',
      }
    ],
    trivia: [
      'Hypnos was the father of the Oneiroi (Dreams): Morpheus (human dreams), Phobetor/Icelos (beast dreams), and Phantasos (inanimate object dreams).',
      'The expression "in the arms of Morpheus" means to be sound asleep.'
    ]
  },

  charon: {
    title: 'Ferryman of the Dead · Steersman of the River Acheron & Styx',
    domain: 'Ferrying Souls, River Styx, River Acheron, Obol Coins, Underworld Passage',
    domainDetail: 'Gloomy, ancient boatman of Hades who conveys the souls of the deceased across the subterranean waters in his skiff',
    quote: 'Place the bronze coin under your tongue; without payment, you shall wander these misty shores for a hundred years.',
    symbols: ['Ferry Oar (Punt Pole)', 'Battered Wooden Skiff', 'Obol Coin (Charon’s Obol)', 'Lantern of the Styx'],
    animals: ['Crow', 'Frog of the Styx'],
    plants: ['Asphodel', 'Black Willow'],
    lore: {
      summary: 'Charon is the solemn, unyielding ferryman of the Underworld. Poling his creaking wooden skiff across the gloomy waters of the Acheron and Styx, he accepts only the souls of those who received proper funeral rites and were buried with an obol coin.',
      birthAndOrigin: 'Son of Erebus (Darkness) and Nyx (Night), born at the dawn of creation to navigate the misty subterranean rivers.',
      majorStories: [
        {
          title: 'The Golden Bough of Aeneas',
          period: 'Trojan Cycle / Virgil’s Aeneid',
          content: 'When Aeneas sought to enter the underworld alive, Charon refused to ferry a mortal. But when the Cumaean Sibyl revealed the sacred Golden Bough of Proserpina hidden in her cloak, Charon bowed in awe and cleared space on his wooden skiff.',
          highlight: 'The legendary literary symbol of divine permission to cross the boundary of death'
        },
        {
          title: 'Heracles’s Intimidation for Cerberus',
          period: 'Heroic Age',
          content: 'Descending for his twelfth labor, Heracles did not bother with coins or pleasantries: he glared at Charon with such terrifying heroic fury that the ferryman hurried to transport him across. For allowing a living warrior through without permission, Hades chained Charon for a full year.',
          highlight: 'The rare clash where mortal demigod might overpowered underworld protocol'
        },
        {
          title: 'The One Hundred Years of the Unburied',
          period: 'Archaic Era',
          content: 'According to Greek belief, any soul whose body remained unburied or who lacked an obol coin was pushed away by Charon’s oar, forced to wander the bleak shores of the river Acheron as a restless ghost for one hundred agonizing years.',
          highlight: 'The profound cultural significance Greeks placed on sacred funeral rites'
        }
      ],
      romanDifferences: 'In Virgil and Dante, Charon was depicted with fiery glowing eyes and an irascible, harsh temper, striking lingering souls with his heavy oar.',
      etymologyAndLegacy: 'The largest moon of Pluto is named Charon. In modern astronomy, the Pluto-Charon system forms a unique binary planetary pair.',
      famousArtwork: [
        {
          title: 'Crossing the River Styx (Charon’s Crossing)',
          artist: 'Joachim Patinir',
          period: 'Northern Renaissance (c. 1520–1524)',
          location: 'Museo del Prado, Madrid',
          description: 'A famous panoramic landscape depicting Charon steering his boat between the angelic green meadows of Paradise and the burning fires of Hell.'
        }
      ]
    },
    skills: [
      {
        name: 'Maelstrom of the River Styx',
        typeName: 'Ultimate Power',
        description: 'Summons the murky waters of the Styx to crash across the battlefield, pulling enemies into a vortex and dealing true soul damage.',
        cooldown: '32s'
      },
      {
        name: 'Strike of the Ferry Oar',
        typeName: 'Heavy Knockback',
        description: 'Swings the heavy wooden oar, knocking enemies back a great distance and stunning them if they collide with terrain.',
        cooldown: '12s'
      },
      {
        name: 'Toll of the Obol',
        typeName: 'Passive Gold Bounty',
        description: 'Defeating enemy champions grants bonus team gold and summons a temporary spectral ghost to fight for Charon.',
      }
    ],
    trivia: [
      'The ancient Greek custom of placing an obol coin inside the mouth or over the eyes of the deceased was specifically called "Charon’s Obol".',
      'The name Charon is likely derived from an ironic poetic euphemism charopos ("of fierce, gleaming gaze").'
    ]
  }
};
