const sharp = require('sharp');
const fs = require('fs');

const width = 1024;
const height = 1024;

// Complex, beautiful SVG depicting the legendary Bow of Odysseus in Ithaca Palace
const svgContent = `
<svg width="${width}" height="${height}" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Gradients -->
    <radialGradient id="bgGlow" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#3d2212" stop-opacity="1" />
      <stop offset="40%" stop-color="#1e120c" stop-opacity="1" />
      <stop offset="80%" stop-color="#0d0806" stop-opacity="1" />
      <stop offset="100%" stop-color="#050302" stop-opacity="1" />
    </radialGradient>

    <radialGradient id="divineLight" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#ffd56b" stop-opacity="0.6" />
      <stop offset="30%" stop-color="#d97706" stop-opacity="0.3" />
      <stop offset="70%" stop-color="#b45309" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <linearGradient id="bowHornGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#451a03" />
      <stop offset="25%" stop-color="#1c1917" />
      <stop offset="50%" stop-color="#0c0a09" />
      <stop offset="75%" stop-color="#1c1917" />
      <stop offset="100%" stop-color="#451a03" />
    </linearGradient>

    <linearGradient id="goldFiligree" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="30%" stop-color="#eab308" />
      <stop offset="70%" stop-color="#ca8a04" />
      <stop offset="100%" stop-color="#854d0e" />
    </linearGradient>

    <linearGradient id="stringGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="50%" stop-color="#fef08a" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>

    <linearGradient id="arrowShaft" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#78350f" />
      <stop offset="50%" stop-color="#92400e" />
      <stop offset="100%" stop-color="#451a03" />
    </linearGradient>

    <linearGradient id="bronzeHead" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef3c7" />
      <stop offset="40%" stop-color="#d97706" />
      <stop offset="80%" stop-color="#92400e" />
      <stop offset="100%" stop-color="#451a03" />
    </linearGradient>

    <linearGradient id="pillarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#181310" />
      <stop offset="30%" stop-color="#2d221c" />
      <stop offset="50%" stop-color="#3d2f26" />
      <stop offset="70%" stop-color="#2d221c" />
      <stop offset="100%" stop-color="#120e0b" />
    </linearGradient>

    <linearGradient id="tableGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3b2d24" />
      <stop offset="30%" stop-color="#241a14" />
      <stop offset="100%" stop-color="#0f0b08" />
    </linearGradient>

    <filter id="glowEffect" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="blur1" />
      <feGaussianBlur stdDeviation="15" result="blur2" />
      <feMerge>
        <feMergeNode in="blur2" />
        <feMergeNode in="blur1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id="laserGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <pattern id="greekKey" width="40" height="20" patternUnits="userSpaceOnUse">
      <path d="M0,10 L15,10 L15,3 L25,3 L25,17 L10,17 L10,7 L5,7 L5,13 L20,13 L20,7 L35,7 L35,17 L40,17" fill="none" stroke="#d97706" stroke-width="1.5" opacity="0.6" />
    </pattern>
  </defs>

  <!-- Background Canvas -->
  <rect width="1024" height="1024" fill="url(#bgGlow)" />

  <!-- Distant Ithaca Palace Classical Pillars -->
  <!-- Left Pillars -->
  <rect x="60" y="80" width="70" height="600" fill="url(#pillarGrad)" />
  <rect x="50" y="70" width="90" height="20" fill="url(#goldFiligree)" opacity="0.3" />
  <rect x="50" y="670" width="90" height="20" fill="url(#pillarGrad)" />

  <rect x="170" y="100" width="55" height="580" fill="url(#pillarGrad)" opacity="0.7" />
  <rect x="162" y="92" width="71" height="16" fill="url(#goldFiligree)" opacity="0.2" />

  <!-- Right Pillars -->
  <rect x="894" y="80" width="70" height="600" fill="url(#pillarGrad)" />
  <rect x="884" y="70" width="90" height="20" fill="url(#goldFiligree)" opacity="0.3" />
  <rect x="884" y="670" width="90" height="20" fill="url(#pillarGrad)" />

  <rect x="799" y="100" width="55" height="580" fill="url(#pillarGrad)" opacity="0.7" />
  <rect x="791" y="92" width="71" height="16" fill="url(#goldFiligree)" opacity="0.2" />

  <!-- Atmospheric Hall Archway & Night Sky / Torches -->
  <path d="M 130,220 Q 512,110 894,220 L 894,80 L 130,80 Z" fill="#080504" opacity="0.85" />
  <circle cx="270" cy="380" r="8" fill="#f59e0b" filter="url(#glowEffect)" opacity="0.8" />
  <circle cx="754" cy="380" r="8" fill="#f59e0b" filter="url(#glowEffect)" opacity="0.8" />

  <!-- 12 Axe Rings (The Trial of the Axes in Odyssey) in Perspective Alignment -->
  <g opacity="0.45">
    <!-- Trail Beam of the Hero Arrow passing through the 12 axe heads -->
    <line x1="200" y1="410" x2="824" y2="410" stroke="#fde047" stroke-width="2" stroke-dasharray="6,4" filter="url(#laserGlow)" opacity="0.7" />
    
    <!-- 12 Axes -->
    ${Array.from({ length: 12 }).map((_, i) => {
      const x = 240 + i * 48;
      const y = 410;
      return `
        <!-- Axe ${i + 1} -->
        <line x1="${x}" y1="${y - 45}" x2="${x}" y2="${y + 55}" stroke="#78350f" stroke-width="3.5" />
        <path d="M ${x - 14},${y - 30} Q ${x},${y - 40} ${x + 14},${y - 30} L ${x + 10},${y - 12} Q ${x},${y - 18} ${x - 10},${y - 12} Z" fill="url(#bronzeHead)" />
        <circle cx="${x}" cy="${y}" r="8" fill="none" stroke="#fde047" stroke-width="2" filter="url(#laserGlow)" />
      `;
    }).join('')}
  </g>

  <!-- Central Aura & Divine Glow -->
  <circle cx="512" cy="460" r="380" fill="url(#divineLight)" />

  <!-- Marble Table / Stone Altar Pedestal in Foreground -->
  <polygon points="120,720 904,720 980,940 44,940" fill="url(#tableGrad)" />
  <rect x="120" y="715" width="784" height="15" fill="url(#goldFiligree)" opacity="0.8" />
  
  <!-- Greek Key Pattern Border on Altar -->
  <rect x="120" y="730" width="784" height="24" fill="url(#greekKey)" />
  <line x1="44" y1="940" x2="980" y2="940" stroke="#d97706" stroke-width="3" opacity="0.7" />

  <!-- Quiver of Ithaca on the Left Side of Altar -->
  <g transform="translate(180, 500) rotate(-18)">
    <!-- Leather / Gold Quiver Body -->
    <path d="M 40,60 L 95,50 L 80,320 L 35,310 Z" fill="#2d1a0e" stroke="url(#goldFiligree)" stroke-width="3" />
    <path d="M 40,60 L 95,50 L 92,90 L 37,100 Z" fill="url(#goldFiligree)" />
    <path d="M 37,170 L 90,160 L 88,190 L 36,200 Z" fill="url(#goldFiligree)" />
    
    <!-- Arrows protruding from Quiver -->
    <!-- Arrow 1 -->
    <line x1="50" y1="55" x2="25" y2="-70" stroke="url(#arrowShaft)" stroke-width="5" />
    <polygon points="25,-70 20,-50 30,-50" fill="url(#bronzeHead)" />
    <!-- Feathers -->
    <polygon points="25,-30 10,-10 25,-15" fill="#fef08a" opacity="0.9" />
    <polygon points="25,-30 40,-10 25,-15" fill="#ca8a04" opacity="0.9" />

    <!-- Arrow 2 -->
    <line x1="68" y1="52" x2="58" y2="-90" stroke="url(#arrowShaft)" stroke-width="5" />
    <polygon points="58,-90 52,-70 64,-70" fill="url(#bronzeHead)" />
    <polygon points="58,-50 43,-30 58,-35" fill="#fef08a" opacity="0.9" />
    <polygon points="58,-50 73,-30 58,-35" fill="#ca8a04" opacity="0.9" />

    <!-- Arrow 3 -->
    <line x1="82" y1="50" x2="88" y2="-75" stroke="url(#arrowShaft)" stroke-width="5" />
    <polygon points="88,-75 82,-55 94,-55" fill="url(#bronzeHead)" />
    <polygon points="88,-35 73,-15 88,-20" fill="#fef08a" opacity="0.9" />
    <polygon points="88,-35 103,-15 88,-20" fill="#ca8a04" opacity="0.9" />
  </g>

  <!-- ======================================================== -->
  <!-- THE LEGENDARY BOW OF ODYSSEUS (Epic Recurve Composition) -->
  <!-- ======================================================== -->
  <g id="TheGreatBow" transform="translate(0, 0)">
    
    <!-- Golden Divine Energy Field / Shimmer behind Bow -->
    <path d="M 230,220 C 340,320 370,550 450,680 C 512,710 560,710 620,680 C 700,550 730,320 840,220" 
          fill="none" stroke="#f59e0b" stroke-width="32" filter="url(#glowEffect)" opacity="0.3" />
    
    <path d="M 230,220 C 340,320 370,550 450,680 C 512,710 560,710 620,680 C 700,550 730,320 840,220" 
          fill="none" stroke="#fef08a" stroke-width="14" filter="url(#glowEffect)" opacity="0.5" />

    <!-- Bow Limb Shadow -->
    <path d="M 235,225 C 345,325 375,555 455,685 C 512,715 560,715 625,685 C 705,555 735,325 845,225" 
          fill="none" stroke="#000000" stroke-width="26" opacity="0.6" stroke-linecap="round" />

    <!-- Main Solid Bow Body (Black Horn & Hardened Ash Wood) -->
    <path d="M 230,220 C 340,320 370,550 450,680 C 512,710 560,710 620,680 C 700,550 730,320 840,220" 
          fill="none" stroke="url(#bowHornGrad)" stroke-width="22" stroke-linecap="round" />

    <!-- Outer Gold Reinforced Layer -->
    <path d="M 230,220 C 340,320 370,550 450,680 C 512,710 560,710 620,680 C 700,550 730,320 840,220" 
          fill="none" stroke="url(#goldFiligree)" stroke-width="6" stroke-linecap="round" />

    <!-- Intricate Gold Bands & Runic Rings along the Limbs -->
    <!-- Left Limb Rings -->
    <g fill="url(#goldFiligree)">
      <!-- Tip 1 -->
      <circle cx="230" cy="220" r="14" fill="url(#goldFiligree)" filter="url(#laserGlow)" />
      <polygon points="230,220 215,200 240,205" fill="url(#bronzeHead)" />
      
      <!-- Filigree bands -->
      <rect x="290" y="270" width="18" height="12" rx="4" transform="rotate(35 290 270)" fill="url(#goldFiligree)" />
      <rect x="345" y="345" width="22" height="14" rx="4" transform="rotate(50 345 345)" fill="url(#goldFiligree)" />
      <rect x="390" y="445" width="24" height="14" rx="4" transform="rotate(65 390 445)" fill="url(#goldFiligree)" />
      <rect x="425" y="555" width="26" height="16" rx="4" transform="rotate(78 425 555)" fill="url(#goldFiligree)" />
    </g>

    <!-- Right Limb Rings -->
    <g fill="url(#goldFiligree)">
      <!-- Tip 2 -->
      <circle cx="840" cy="220" r="14" fill="url(#goldFiligree)" filter="url(#laserGlow)" />
      <polygon points="840,220 855,200 830,205" fill="url(#bronzeHead)" />

      <!-- Filigree bands -->
      <rect x="780" y="270" width="18" height="12" rx="4" transform="rotate(-35 780 270)" fill="url(#goldFiligree)" />
      <rect x="725" y="345" width="22" height="14" rx="4" transform="rotate(-50 725 345)" fill="url(#goldFiligree)" />
      <rect x="680" y="445" width="24" height="14" rx="4" transform="rotate(-65 680 445)" fill="url(#goldFiligree)" />
      <rect x="645" y="555" width="26" height="16" rx="4" transform="rotate(-78 645 555)" fill="url(#goldFiligree)" />
    </g>

    <!-- Central Hero Grip (Leather wrapped with Gold Royal Seal of Ithaca) -->
    <g transform="translate(535, 695) rotate(0)">
      <rect x="-45" y="-18" width="90" height="36" rx="8" fill="#1c1917" stroke="url(#goldFiligree)" stroke-width="4" />
      <line x1="-30" y1="-18" x2="-30" y2="18" stroke="#ca8a04" stroke-width="3" />
      <line x1="-15" y1="-18" x2="-15" y2="18" stroke="#ca8a04" stroke-width="3" />
      <line x1="0" y1="-18" x2="0" y2="18" stroke="#ca8a04" stroke-width="3" />
      <line x1="15" y1="-18" x2="15" y2="18" stroke="#ca8a04" stroke-width="3" />
      <line x1="30" y1="-18" x2="30" y2="18" stroke="#ca8a04" stroke-width="3" />

      <!-- Ithaca Royal Eagle Crest Emblem -->
      <circle cx="0" cy="0" r="15" fill="url(#goldFiligree)" filter="url(#laserGlow)" />
      <polygon points="0,-10 -8,5 8,5" fill="#451a03" />
    </g>

    <!-- The Taut Ethereal Divine Bowstring -->
    <!-- Glow aura -->
    <line x1="230" y1="220" x2="840" y2="220" stroke="#f59e0b" stroke-width="8" filter="url(#glowEffect)" opacity="0.6" />
    <line x1="230" y1="220" x2="840" y2="220" stroke="#ffffff" stroke-width="3" filter="url(#laserGlow)" />

    <!-- Bowstring Center Nocking Point -->
    <circle cx="535" cy="220" r="6" fill="#fef08a" filter="url(#glowEffect)" />
    <line x1="535" y1="210" x2="535" y2="230" stroke="#eab308" stroke-width="4" />

    <!-- A Hero's Arrow Knocked & Ready to Pierce the 12 Axes -->
    <g transform="translate(535, 220)">
      <!-- Arrow shaft going through center -->
      <line x1="0" y1="0" x2="0" y2="250" stroke="url(#arrowShaft)" stroke-width="6" />
      <!-- Golden Inlay line -->
      <line x1="0" y1="0" x2="0" y2="250" stroke="#fde047" stroke-width="1.5" filter="url(#laserGlow)" />
      
      <!-- Arrow Head (Pointing Up / Straight at the Trial) -->
      <polygon points="0,-35 -14,0 14,0" fill="url(#bronzeHead)" stroke="#fde047" stroke-width="2" filter="url(#laserGlow)" />
      <line x1="0" y1="-35" x2="0" y2="0" stroke="#fff" stroke-width="2" />

      <!-- Arrow Fletching (Eagle Feathers) -->
      <polygon points="0,200 -24,240 -3,235" fill="url(#goldFiligree)" opacity="0.9" />
      <polygon points="0,200 24,240 3,235" fill="url(#goldFiligree)" opacity="0.9" />
      <polygon points="0,220 -20,255 -2,250" fill="#fef08a" opacity="0.95" />
      <polygon points="0,220 20,255 2,250" fill="#fef08a" opacity="0.95" />
    </g>

    <!-- Divine Sparkles & Floating Mythic Dust Motes -->
    <circle cx="535" cy="180" r="3.5" fill="#ffffff" filter="url(#glowEffect)" />
    <circle cx="420" cy="220" r="2.5" fill="#fef08a" filter="url(#glowEffect)" />
    <circle cx="650" cy="220" r="2.5" fill="#fef08a" filter="url(#glowEffect)" />
    <circle cx="340" cy="380" r="3" fill="#fde047" filter="url(#glowEffect)" />
    <circle cx="730" cy="380" r="3" fill="#fde047" filter="url(#glowEffect)" />
    <circle cx="535" cy="580" r="4" fill="#fbbf24" filter="url(#glowEffect)" />
    <circle cx="490" cy="670" r="3" fill="#f59e0b" filter="url(#glowEffect)" />
    <circle cx="580" cy="670" r="3" fill="#f59e0b" filter="url(#glowEffect)" />
  </g>

  <!-- Dramatic Vignette Lighting at Borders -->
  <rect width="1024" height="1024" fill="none" stroke="#000000" stroke-width="40" opacity="0.8" />
  
  <!-- Outer Ornate Gold Framing Accent -->
  <rect x="25" y="25" width="974" height="974" fill="none" stroke="url(#goldFiligree)" stroke-width="3" opacity="0.8" />
  <rect x="35" y="35" width="954" height="954" fill="none" stroke="#d97706" stroke-width="1" opacity="0.5" />
  
  <!-- Corner Accents -->
  <polygon points="25,25 65,25 25,65" fill="url(#goldFiligree)" opacity="0.9" />
  <polygon points="999,25 959,25 999,65" fill="url(#goldFiligree)" opacity="0.9" />
  <polygon points="25,999 65,999 25,959" fill="url(#goldFiligree)" opacity="0.9" />
  <polygon points="999,999 959,999 999,959" fill="url(#goldFiligree)" opacity="0.9" />
</svg>
`;

async function renderArt() {
  const targetFile = 'src/assets/images/odysseus_bow_mythic_art.jpg';
  await sharp(Buffer.from(svgContent))
    .jpeg({ quality: 95 })
    .toFile(targetFile);

  console.log('Successfully created odysseus_bow_mythic_art.jpg -> Size:', fs.statSync(targetFile).size);
}

renderArt().catch(console.error);
