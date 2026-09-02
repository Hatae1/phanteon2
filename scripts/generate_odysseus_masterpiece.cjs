const sharp = require('sharp');
const fs = require('fs');

async function createMasterpieceOdysseusBow() {
  console.log('Generating high-end matching concept art for Bow of Odysseus...');

  // 1. Create a rich base composition using layered textures and deep lighting
  // We can blend Apollo bow / weapon lighting highlights and dark horn textures to match the exact visual style
  const apolloBase = await sharp('src/assets/images/apollo_golden_bow_arrow_1788221662492.jpg')
    .resize(1024, 1024)
    .modulate({
      brightness: 0.65,
      saturation: 0.85,
      hue: -25 // Shifts warm gold towards deeper antique bronze and dark mythic tone
    })
    .blur(8)
    .toBuffer();

  // 2. High-precision SVG weapon rendering with volumetric shading, realistic gradients, and intricate Greek engraving
  const weaponSvg = `
  <svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Deep Atmospheric Vignette -->
      <radialGradient id="epicCenterGlow" cx="50%" cy="46%" r="58%">
        <stop offset="0%" stop-color="#ffb703" stop-opacity="0.45" />
        <stop offset="25%" stop-color="#fb8500" stop-opacity="0.28" />
        <stop offset="55%" stop-color="#7f1d1d" stop-opacity="0.15" />
        <stop offset="85%" stop-color="#000000" stop-opacity="0.75" />
        <stop offset="100%" stop-color="#000000" stop-opacity="0.95" />
      </radialGradient>

      <!-- Black Ram Horn Gradient with 3D Specular Lighting -->
      <linearGradient id="hornLimb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#451a03" />
        <stop offset="15%" stop-color="#1c1917" />
        <stop offset="35%" stop-color="#0c0a09" />
        <stop offset="48%" stop-color="#2e1a11" />
        <stop offset="52%" stop-color="#452718" />
        <stop offset="65%" stop-color="#120c09" />
        <stop offset="85%" stop-color="#1c1917" />
        <stop offset="100%" stop-color="#451a03" />
      </linearGradient>

      <!-- Gleaming Polished Gold Inlay -->
      <linearGradient id="goldEngraving" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fffbeb" />
        <stop offset="20%" stop-color="#fef08a" />
        <stop offset="45%" stop-color="#f59e0b" />
        <stop offset="70%" stop-color="#d97706" />
        <stop offset="90%" stop-color="#b45309" />
        <stop offset="100%" stop-color="#78350f" />
      </linearGradient>

      <!-- Specular Highlight for Metal & Horn -->
      <linearGradient id="specularGlint" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
        <stop offset="40%" stop-color="#fef08a" stop-opacity="0.6" />
        <stop offset="100%" stop-color="#d97706" stop-opacity="0" />
      </linearGradient>

      <!-- Bronze Blade & Sockets -->
      <linearGradient id="ancientBronze" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fde68a" />
        <stop offset="30%" stop-color="#d97706" />
        <stop offset="60%" stop-color="#92400e" />
        <stop offset="100%" stop-color="#451a03" />
      </linearGradient>

      <!-- Glowing Divine String -->
      <linearGradient id="divineString" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="25%" stop-color="#fef08a" />
        <stop offset="50%" stop-color="#ffffff" />
        <stop offset="75%" stop-color="#fef08a" />
        <stop offset="100%" stop-color="#ffffff" />
      </linearGradient>

      <!-- Bloom / Glow Filters -->
      <filter id="bloomEffect" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="8" result="blur1" />
        <feGaussianBlur stdDeviation="20" result="blur2" />
        <feMerge>
          <feMergeNode in="blur2" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="particleGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#000000" flood-opacity="0.9" />
      </filter>
    </defs>

    <!-- Master Vignette Atmosphere -->
    <rect width="1024" height="1024" fill="url(#epicCenterGlow)" />

    <!-- 12 Axe Ring Sockets Trial Alignment (Distant Golden Silhouette) -->
    <g opacity="0.55" transform="translate(0, -60)">
      <!-- Golden Line of Path -->
      <line x1="140" y1="420" x2="884" y2="420" stroke="#fde047" stroke-width="2.5" stroke-dasharray="10,6" filter="url(#particleGlow)" opacity="0.8" />
      
      <!-- 12 Bronze Axes in Symmetrical Alignment -->
      ${Array.from({ length: 12 }).map((_, i) => {
        const x = 165 + i * 59;
        return `
          <!-- Axe ${i + 1} -->
          <line x1="${x}" y1="360" x2="${x}" y2="490" stroke="#78350f" stroke-width="3" opacity="0.7" />
          <path d="M ${x - 14},385 Q ${x},375 ${x + 14},385 L ${x + 10},405 Q ${x},395 ${x - 10},405 Z" fill="url(#ancientBronze)" opacity="0.85" />
          <!-- The Ring Socket for Arrow -->
          <circle cx="${x}" cy="420" r="13" fill="#0c0a09" stroke="url(#goldEngraving)" stroke-width="2.5" filter="url(#particleGlow)" />
          <circle cx="${x}" cy="420" r="7" fill="#1c1917" stroke="#fde047" stroke-width="1.5" />
        `;
      }).join('')}
    </g>

    <!-- Foreground Altar Pedestal with Volumetric Shadow -->
    <polygon points="80,720 944,720 1024,960 0,960" fill="#140f0c" />
    <line x1="80" y1="720" x2="944" y2="720" stroke="url(#goldEngraving)" stroke-width="6" opacity="0.7" />
    <line x1="90" y1="728" x2="934" y2="728" stroke="#ca8a04" stroke-width="2" opacity="0.5" />

    <!-- Quiver of Master Crafted Arrows on Left Side -->
    <g transform="translate(170, 520) rotate(-22)" filter="url(#dropShadow)">
      <!-- Quiver Body -->
      <path d="M 30,70 L 95,55 L 75,340 L 20,330 Z" fill="#2d170b" stroke="url(#goldEngraving)" stroke-width="3" />
      <path d="M 28,120 L 90,105 L 87,140 L 26,155 Z" fill="url(#goldEngraving)" opacity="0.8" />
      <path d="M 23,220 L 82,205 L 79,240 L 21,255 Z" fill="url(#goldEngraving)" opacity="0.8" />

      <!-- Arrows in Quiver -->
      <line x1="45" y1="65" x2="15" y2="-80" stroke="#78350f" stroke-width="6" />
      <polygon points="15,-80 8,-55 22,-55" fill="url(#ancientBronze)" stroke="#fde047" stroke-width="1.5" />
      <polygon points="15,-35 0,-15 15,-20" fill="url(#goldEngraving)" />
      <polygon points="15,-35 30,-15 15,-20" fill="#fef08a" />

      <line x1="65" y1="60" x2="55" y2="-105" stroke="#78350f" stroke-width="6" />
      <polygon points="55,-105 48,-80 62,-80" fill="url(#ancientBronze)" stroke="#fde047" stroke-width="1.5" />
      <polygon points="55,-55 40,-35 55,-40" fill="url(#goldEngraving)" />
      <polygon points="55,-55 70,-35 55,-40" fill="#fef08a" />

      <line x1="82" y1="58" x2="90" y2="-85" stroke="#78350f" stroke-width="6" />
      <polygon points="90,-85 83,-60 97,-60" fill="url(#ancientBronze)" stroke="#fde047" stroke-width="1.5" />
      <polygon points="90,-40 75,-20 90,-25" fill="url(#goldEngraving)" />
      <polygon points="90,-40 105,-20 90,-25" fill="#fef08a" />
    </g>

    <!-- ======================================================== -->
    <!-- THE GREAT RECURVE WAR BOW OF ODYSSEUS (HERO CENTERPIECE) -->
    <!-- ======================================================== -->
    <g id="TheLegendaryBow" filter="url(#dropShadow)" transform="translate(0, 20)">
      
      <!-- Intense God-Ray / Ambient Flame behind the Bow -->
      <path d="M 170,270 C 290,390 350,620 440,700 C 512,730 560,730 620,700 C 710,620 770,390 890,270" 
            fill="none" stroke="#f59e0b" stroke-width="36" filter="url(#bloomEffect)" opacity="0.35" />

      <path d="M 170,270 C 290,390 350,620 440,700 C 512,730 560,730 620,700 C 710,620 770,390 890,270" 
            fill="none" stroke="#fef08a" stroke-width="16" filter="url(#bloomEffect)" opacity="0.55" />

      <!-- Deep Ambient Occlusion / Shadow of Bow Body -->
      <path d="M 174,276 C 294,396 354,626 444,706 C 512,736 560,736 624,706 C 714,626 774,396 894,276" 
            fill="none" stroke="#000000" stroke-width="32" opacity="0.9" stroke-linecap="round" />

      <!-- Heavy Black Horn & Composite Core Body -->
      <path d="M 170,270 C 290,390 350,620 440,700 C 512,730 560,730 620,700 C 710,620 770,390 890,270" 
            fill="none" stroke="url(#hornLimb)" stroke-width="26" stroke-linecap="round" />

      <!-- Top Specular Highlight Edge on Bow Curve -->
      <path d="M 170,266 C 290,386 350,616 440,696 C 512,726 560,726 620,696 C 710,616 770,386 890,266" 
            fill="none" stroke="url(#specularGlint)" stroke-width="4.5" stroke-linecap="round" opacity="0.8" />

      <!-- Inlaid Gold Filigree Spine & Runic Channel -->
      <path d="M 170,270 C 290,390 350,620 440,700 C 512,730 560,730 620,700 C 710,620 770,390 890,270" 
            fill="none" stroke="url(#goldEngraving)" stroke-width="7" stroke-linecap="round" />

      <!-- Left Limb Inlaid Gold Rings & Runic Ferrules -->
      <g fill="url(#goldEngraving)">
        <!-- Top Left Nock / Tip -->
        <circle cx="170" cy="270" r="16" fill="url(#goldEngraving)" filter="url(#particleGlow)" />
        <polygon points="170,270 145,245 180,252" fill="url(#ancientBronze)" stroke="#fde047" stroke-width="1.5" />
        
        <!-- Ornate Gold Bands -->
        <rect x="235" y="330" width="18" height="15" rx="3" transform="rotate(38 235 330)" fill="url(#goldEngraving)" stroke="#fde047" stroke-width="1.5" />
        <rect x="295" y="415" width="22" height="16" rx="3" transform="rotate(52 295 415)" fill="url(#goldEngraving)" stroke="#fde047" stroke-width="1.5" />
        <rect x="355" y="515" width="25" height="18" rx="3" transform="rotate(66 355 515)" fill="url(#goldEngraving)" stroke="#fde047" stroke-width="1.5" />
        <rect x="410" y="620" width="28" height="20" rx="3" transform="rotate(80 410 620)" fill="url(#goldEngraving)" stroke="#fde047" stroke-width="1.5" />
      </g>

      <!-- Right Limb Inlaid Gold Rings & Runic Ferrules -->
      <g fill="url(#goldEngraving)">
        <!-- Top Right Nock / Tip -->
        <circle cx="890" cy="270" r="16" fill="url(#goldEngraving)" filter="url(#particleGlow)" />
        <polygon points="890,270 915,245 880,252" fill="url(#ancientBronze)" stroke="#fde047" stroke-width="1.5" />

        <!-- Ornate Gold Bands -->
        <rect x="825" y="330" width="18" height="15" rx="3" transform="rotate(-38 825 330)" fill="url(#goldEngraving)" stroke="#fde047" stroke-width="1.5" />
        <rect x="765" y="415" width="22" height="16" rx="3" transform="rotate(-52 765 415)" fill="url(#goldEngraving)" stroke="#fde047" stroke-width="1.5" />
        <rect x="705" y="515" width="25" height="18" rx="3" transform="rotate(-66 705 515)" fill="url(#goldEngraving)" stroke="#fde047" stroke-width="1.5" />
        <rect x="650" y="620" width="28" height="20" rx="3" transform="rotate(-80 650 620)" fill="url(#goldEngraving)" stroke="#fde047" stroke-width="1.5" />
      </g>

      <!-- Royal Handle Grip (Reinforced Ox-Hide & Gold Wire Wrapping) -->
      <g transform="translate(530, 715)">
        <rect x="-55" y="-20" width="110" height="40" rx="8" fill="#140d09" stroke="url(#goldEngraving)" stroke-width="4" />
        <line x1="-36" y1="-20" x2="-36" y2="20" stroke="#ca8a04" stroke-width="3.5" />
        <line x1="-18" y1="-20" x2="-18" y2="20" stroke="#ca8a04" stroke-width="3.5" />
        <line x1="0" y1="-20" x2="0" y2="20" stroke="#fde047" stroke-width="4.5" />
        <line x1="18" y1="-20" x2="18" y2="20" stroke="#ca8a04" stroke-width="3.5" />
        <line x1="36" y1="-20" x2="36" y2="20" stroke="#ca8a04" stroke-width="3.5" />

        <!-- Ithaca Royal Medallion Emblem -->
        <circle cx="0" cy="0" r="18" fill="url(#goldEngraving)" filter="url(#particleGlow)" />
        <circle cx="0" cy="0" r="12" fill="#2d1508" stroke="#fff" stroke-width="1.5" />
        <polygon points="0,-8 -7,5 7,5" fill="url(#goldEngraving)" />
      </g>

      <!-- The Taut Divine Golden Bowstring -->
      <line x1="170" y1="270" x2="890" y2="270" stroke="#f59e0b" stroke-width="8" filter="url(#bloomEffect)" opacity="0.65" />
      <line x1="170" y1="270" x2="890" y2="270" stroke="url(#divineString)" stroke-width="3.5" filter="url(#particleGlow)" />
      <circle cx="530" cy="270" r="7" fill="#ffffff" filter="url(#particleGlow)" />

      <!-- The Hero's Arrow Nocked on the String -->
      <g transform="translate(530, 270)">
        <!-- Arrow Shaft -->
        <line x1="0" y1="0" x2="0" y2="280" stroke="#5a2e17" stroke-width="7" />
        <line x1="0" y1="0" x2="0" y2="280" stroke="#fde047" stroke-width="2" filter="url(#particleGlow)" />

        <!-- Piercing Bronze Arrowhead -->
        <polygon points="0,-45 -16,0 16,0" fill="url(#ancientBronze)" stroke="#fde047" stroke-width="2.5" filter="url(#particleGlow)" />
        <line x1="0" y1="-45" x2="0" y2="0" stroke="#ffffff" stroke-width="2.5" />

        <!-- Eagle Feathers Fletching -->
        <polygon points="0,210 -26,260 -3,250" fill="url(#goldEngraving)" opacity="0.95" />
        <polygon points="0,210 26,260 3,250" fill="url(#goldEngraving)" opacity="0.95" />
        <polygon points="0,230 -20,275 -2,268" fill="#ffffff" opacity="0.95" />
        <polygon points="0,230 20,275 2,268" fill="#ffffff" opacity="0.95" />
      </g>

      <!-- Divine Energy Particles & Embers Floating in Palace Air -->
      <circle cx="530" cy="210" r="4.5" fill="#ffffff" filter="url(#bloomEffect)" />
      <circle cx="360" cy="270" r="3.5" fill="#fde047" filter="url(#bloomEffect)" />
      <circle cx="700" cy="270" r="3.5" fill="#fde047" filter="url(#bloomEffect)" />
      <circle cx="280" cy="420" r="4" fill="#f59e0b" filter="url(#bloomEffect)" />
      <circle cx="780" cy="420" r="4" fill="#f59e0b" filter="url(#bloomEffect)" />
      <circle cx="470" cy="670" r="4.5" fill="#fbbf24" filter="url(#bloomEffect)" />
      <circle cx="590" cy="670" r="4.5" fill="#fbbf24" filter="url(#bloomEffect)" />
      <circle cx="530" cy="520" r="3.5" fill="#ffd166" filter="url(#bloomEffect)" />
      <circle cx="410" cy="500" r="2.5" fill="#ffffff" filter="url(#bloomEffect)" />
      <circle cx="650" cy="500" r="2.5" fill="#ffffff" filter="url(#bloomEffect)" />
    </g>

    <!-- Outer Cinematic Vignette Edge -->
    <rect width="1024" height="1024" fill="none" stroke="#040201" stroke-width="40" opacity="0.85" />
  </svg>
  `;

  // Render SVG to high-resolution layer
  const renderedWeapon = await sharp(Buffer.from(weaponSvg))
    .png()
    .toBuffer();

  // Blend with subtle underlying atmospheric depth from Apollo base
  const finalImage = await sharp(apolloBase)
    .composite([
      { input: renderedWeapon, blend: 'over' }
    ])
    .modulate({
      brightness: 1.06,
      saturation: 1.15
    })
    .sharpen({ sigma: 1.2, m1: 1.2, m2: 0.8 })
    .jpeg({ quality: 96 })
    .toBuffer();

  const paths = [
    'src/assets/images/odysseus_bow_axes_mythic.jpg',
    'src/assets/images/odysseus_bow_mythic_art.jpg',
    'src/assets/images/bow_of_odysseus_master.jpg'
  ];

  for (const p of paths) {
    await sharp(finalImage).toFile(p);
    console.log('Saved ->', p, fs.statSync(p).size, 'bytes');
  }

  console.log('Masterpiece creation complete!');
}

createMasterpieceOdysseusBow().catch(console.error);
