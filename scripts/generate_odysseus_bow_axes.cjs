const sharp = require('sharp');
const fs = require('fs');

const width = 1024;
const height = 1024;

// Ultra high-detail SVG featuring Odysseus's Great Recurve Bow and the Double-Bladed Battle Axes (Labrys/Greek Axes) lined up
const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Palace & Mythic Background Gradients -->
    <radialGradient id="bgAmbient" cx="50%" cy="45%" r="70%">
      <stop offset="0%" stop-color="#2a170a" />
      <stop offset="35%" stop-color="#180e06" />
      <stop offset="70%" stop-color="#0c0703" />
      <stop offset="100%" stop-color="#040201" />
    </radialGradient>

    <radialGradient id="sunRayGlow" cx="45%" cy="30%" r="55%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.45" />
      <stop offset="30%" stop-color="#d97706" stop-opacity="0.2" />
      <stop offset="70%" stop-color="#92400e" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Bow Materials -->
    <linearGradient id="blackHorn" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3d271d" />
      <stop offset="20%" stop-color="#1e1511" />
      <stop offset="40%" stop-color="#0f0a08" />
      <stop offset="55%" stop-color="#291a13" />
      <stop offset="70%" stop-color="#0d0806" />
      <stop offset="90%" stop-color="#1e1511" />
      <stop offset="100%" stop-color="#3d271d" />
    </linearGradient>

    <linearGradient id="goldFiligree" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="25%" stop-color="#f59e0b" />
      <stop offset="50%" stop-color="#fbbf24" />
      <stop offset="75%" stop-color="#b45309" />
      <stop offset="100%" stop-color="#78350f" />
    </linearGradient>

    <linearGradient id="brightGold" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fffbeb" />
      <stop offset="40%" stop-color="#fde047" />
      <stop offset="80%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#92400e" />
    </linearGradient>

    <!-- Axe Materials: Bronze & Steel Blade -->
    <linearGradient id="bronzeBlade" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef3c7" />
      <stop offset="20%" stop-color="#d97706" />
      <stop offset="50%" stop-color="#92400e" />
      <stop offset="75%" stop-color="#78350f" />
      <stop offset="100%" stop-color="#451a03" />
    </linearGradient>

    <linearGradient id="steelEdge" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="50%" stop-color="#e2e8f0" />
      <stop offset="100%" stop-color="#94a3b8" />
    </linearGradient>

    <linearGradient id="axeWoodHandle" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#271810" />
      <stop offset="30%" stop-color="#452718" />
      <stop offset="60%" stop-color="#5a3320" />
      <stop offset="85%" stop-color="#361e13" />
      <stop offset="100%" stop-color="#1f120a" />
    </linearGradient>

    <linearGradient id="stoneAltar" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3c2f28" />
      <stop offset="20%" stop-color="#281f1a" />
      <stop offset="60%" stop-color="#191310" />
      <stop offset="100%" stop-color="#0a0705" />
    </linearGradient>

    <!-- Special Glow Filters -->
    <filter id="divineGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="blur1" />
      <feGaussianBlur stdDeviation="16" result="blur2" />
      <feMerge>
        <feMergeNode in="blur2" />
        <feMergeNode in="blur1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <filter id="stringLaser" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3.5" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>

    <pattern id="greekMeander" width="48" height="24" patternUnits="userSpaceOnUse">
      <path d="M0,12 L18,12 L18,4 L30,4 L30,20 L12,20 L12,8 L6,8 L6,16 L24,16 L24,8 L42,8 L42,20 L48,20" fill="none" stroke="#d97706" stroke-width="2" opacity="0.6" />
    </pattern>
  </defs>

  <!-- Canvas Background -->
  <rect width="1024" height="1024" fill="url(#bgAmbient)" />

  <!-- Volumetric Torch & Palace Lighting -->
  <circle cx="512" cy="420" r="480" fill="url(#sunRayGlow)" />

  <!-- Classical Ithaca Palace Architecture in Background -->
  <!-- Left Columns -->
  <g opacity="0.4">
    <rect x="50" y="60" width="80" height="620" fill="#201712" />
    <rect x="40" y="50" width="100" height="20" fill="#452718" />
    <rect x="40" y="660" width="100" height="25" fill="#452718" />

    <rect x="160" y="90" width="60" height="590" fill="#18110d" />
    <rect x="150" y="80" width="80" height="18" fill="#361e13" />
  </g>

  <!-- Right Columns -->
  <g opacity="0.4">
    <rect x="894" y="60" width="80" height="620" fill="#201712" />
    <rect x="884" y="50" width="100" height="20" fill="#452718" />
    <rect x="884" y="660" width="100" height="25" fill="#452718" />

    <rect x="804" y="90" width="60" height="590" fill="#18110d" />
    <rect x="794" y="80" width="80" height="18" fill="#361e13" />
  </g>

  <!-- Large Palace Stone Table / Floor Altar in Center-Foreground -->
  <polygon points="60,680 964,680 1024,960 0,960" fill="url(#stoneAltar)" />
  <rect x="60" y="675" width="904" height="14" fill="url(#goldFiligree)" opacity="0.85" />
  <rect x="60" y="689" width="904" height="24" fill="url(#greekMeander)" />
  <line x1="0" y1="960" x2="1024" y2="960" stroke="#b45309" stroke-width="4" opacity="0.6" />

  <!-- ======================================================== -->
  <!-- 12 ANCIENT GREEK BATTLE AXES (The Trial of the 12 Axes) -->
  <!-- ======================================================== -->
  <g id="TwelveAxesRow">
    <!-- Golden Target Line linking the 12 Axe Ring Sockets -->
    <line x1="160" y1="360" x2="880" y2="360" stroke="#fde047" stroke-width="3" stroke-dasharray="8,6" filter="url(#stringLaser)" opacity="0.85" />

    <!-- Distant perspective of the 12 Axes standing in a row -->
    ${Array.from({ length: 12 }).map((_, i) => {
      const x = 190 + i * 58;
      const y = 360;
      const scale = 0.85 + (i >= 5 && i <= 7 ? 0.15 : 0.0);
      return `
        <!-- Axe #${i + 1} -->
        <g transform="translate(${x}, ${y}) scale(${scale})">
          <!-- Wooden shaft sunk into stone -->
          <rect x="-4" y="-85" width="8" height="180" rx="3" fill="url(#axeWoodHandle)" stroke="#1a0f08" stroke-width="1.5" />
          
          <!-- Bronze Double-Bladed Axe Head (Labrys) -->
          <!-- Left Blade -->
          <path d="M -4,-25 C -26,-50 -44,-35 -40,0 C -44,35 -26,50 -4,25 Z" fill="url(#bronzeBlade)" stroke="#fbbf24" stroke-width="1.5" />
          <path d="M -40,0 C -44,30 -28,44 -8,22" fill="none" stroke="url(#steelEdge)" stroke-width="2" />
          
          <!-- Right Blade -->
          <path d="M 4,-25 C 26,-50 44,-35 40,0 C 44,35 26,50 4,25 Z" fill="url(#bronzeBlade)" stroke="#fbbf24" stroke-width="1.5" />
          <path d="M 40,0 C 44,30 28,44 8,22" fill="none" stroke="url(#steelEdge)" stroke-width="2" />

          <!-- Center Socket / Ring that the Arrow must shoot through -->
          <circle cx="0" cy="0" r="14" fill="#0d0806" stroke="url(#brightGold)" stroke-width="3" filter="url(#stringLaser)" />
          <circle cx="0" cy="0" r="8" fill="#1c120c" stroke="#fde047" stroke-width="1.5" />
        </g>
      `;
    }).join('')}
  </g>

  <!-- Two Large Heroic Double-Bladed Battle Axes (Close-up Foreground on Sides) -->
  <!-- Left Master Axe -->
  <g transform="translate(130, 620) rotate(15)">
    <!-- Axe Handle -->
    <rect x="-10" y="-220" width="20" height="380" rx="6" fill="url(#axeWoodHandle)" stroke="#1c1917" stroke-width="2" />
    <rect x="-11" y="-120" width="22" height="30" fill="url(#goldFiligree)" rx="2" />
    <rect x="-11" y="40" width="22" height="30" fill="url(#goldFiligree)" rx="2" />
    
    <!-- Heavy Bronze Head -->
    <path d="M -10,-190 C -60,-240 -110,-210 -100,-140 C -110,-70 -60,-40 -10,-90 Z" fill="url(#bronzeBlade)" stroke="url(#goldFiligree)" stroke-width="3" />
    <path d="M 10,-190 C 60,-240 110,-210 100,-140 C 110,-70 60,-40 10,-90 Z" fill="url(#bronzeBlade)" stroke="url(#goldFiligree)" stroke-width="3" />
    
    <!-- Razor Sharp Edges -->
    <path d="M -100,-140 C -110,-70 -60,-40 -10,-90" fill="none" stroke="url(#steelEdge)" stroke-width="3.5" filter="url(#stringLaser)" />
    <path d="M 100,-140 C 110,-70 60,-40 10,-90" fill="none" stroke="url(#steelEdge)" stroke-width="3.5" filter="url(#stringLaser)" />

    <!-- Center Ring Aperture -->
    <circle cx="0" cy="-140" r="22" fill="#170e08" stroke="url(#brightGold)" stroke-width="5" filter="url(#divineGlow)" />
    <circle cx="0" cy="-140" r="12" fill="#000" stroke="#fde047" stroke-width="2" />
  </g>

  <!-- Right Master Axe -->
  <g transform="translate(890, 620) rotate(-15)">
    <!-- Axe Handle -->
    <rect x="-10" y="-220" width="20" height="380" rx="6" fill="url(#axeWoodHandle)" stroke="#1c1917" stroke-width="2" />
    <rect x="-11" y="-120" width="22" height="30" fill="url(#goldFiligree)" rx="2" />
    <rect x="-11" y="40" width="22" height="30" fill="url(#goldFiligree)" rx="2" />
    
    <!-- Heavy Bronze Head -->
    <path d="M -10,-190 C -60,-240 -110,-210 -100,-140 C -110,-70 -60,-40 -10,-90 Z" fill="url(#bronzeBlade)" stroke="url(#goldFiligree)" stroke-width="3" />
    <path d="M 10,-190 C 60,-240 110,-210 100,-140 C 110,-70 60,-40 10,-90 Z" fill="url(#bronzeBlade)" stroke="url(#goldFiligree)" stroke-width="3" />
    
    <!-- Razor Sharp Edges -->
    <path d="M -100,-140 C -110,-70 -60,-40 -10,-90" fill="none" stroke="url(#steelEdge)" stroke-width="3.5" filter="url(#stringLaser)" />
    <path d="M 100,-140 C 110,-70 60,-40 10,-90" fill="none" stroke="url(#steelEdge)" stroke-width="3.5" filter="url(#stringLaser)" />

    <!-- Center Ring Aperture -->
    <circle cx="0" cy="-140" r="22" fill="#170e08" stroke="url(#brightGold)" stroke-width="5" filter="url(#divineGlow)" />
    <circle cx="0" cy="-140" r="12" fill="#000" stroke="#fde047" stroke-width="2" />
  </g>

  <!-- ======================================================== -->
  <!-- THE GREAT WAR BOW OF ODYSSEUS (Front and Center Star)   -->
  <!-- ======================================================== -->
  <g id="OdysseusGreatBow" transform="translate(0, 40)">
    <!-- Divine Golden Aura behind the Bow -->
    <path d="M 170,300 C 300,430 360,670 450,750 C 512,780 560,780 620,750 C 710,670 770,430 900,300" 
          fill="none" stroke="#f59e0b" stroke-width="36" filter="url(#divineGlow)" opacity="0.4" />
    
    <path d="M 170,300 C 300,430 360,670 450,750 C 512,780 560,780 620,750 C 710,670 770,430 900,300" 
          fill="none" stroke="#fde047" stroke-width="16" filter="url(#divineGlow)" opacity="0.6" />

    <!-- Bow Drop Shadow -->
    <path d="M 175,305 C 305,435 365,675 455,755 C 512,785 560,785 625,755 C 715,675 775,435 905,305" 
          fill="none" stroke="#000000" stroke-width="32" opacity="0.75" stroke-linecap="round" />

    <!-- Heavy Horn & Wood Bow Body (Massive Recurve Profile) -->
    <path d="M 170,300 C 300,430 360,670 450,750 C 512,780 560,780 620,750 C 710,670 770,430 900,300" 
          fill="none" stroke="url(#blackHorn)" stroke-width="26" stroke-linecap="round" />

    <!-- Golden Spine and Inlaid Wire on Bow Limb -->
    <path d="M 170,300 C 300,430 360,670 450,750 C 512,780 560,780 620,750 C 710,670 770,430 900,300" 
          fill="none" stroke="url(#brightGold)" stroke-width="7" stroke-linecap="round" />

    <!-- Left Bow Tip & Gold Reinforcement Rings -->
    <g fill="url(#goldFiligree)">
      <circle cx="170" cy="300" r="16" fill="url(#brightGold)" filter="url(#stringLaser)" />
      <polygon points="170,300 148,275 182,282" fill="url(#bronzeBlade)" />
      
      <!-- Gold Runic Rings -->
      <rect x="235" y="360" width="18" height="15" rx="3" transform="rotate(38 235 360)" fill="url(#goldFiligree)" stroke="#fde047" stroke-width="1.5" />
      <rect x="295" y="445" width="22" height="16" rx="3" transform="rotate(52 295 445)" fill="url(#goldFiligree)" stroke="#fde047" stroke-width="1.5" />
      <rect x="355" y="555" width="25" height="18" rx="3" transform="rotate(66 355 555)" fill="url(#goldFiligree)" stroke="#fde047" stroke-width="1.5" />
      <rect x="415" y="665" width="28" height="20" rx="3" transform="rotate(80 415 665)" fill="url(#goldFiligree)" stroke="#fde047" stroke-width="1.5" />
    </g>

    <!-- Right Bow Tip & Gold Reinforcement Rings -->
    <g fill="url(#goldFiligree)">
      <circle cx="900" cy="300" r="16" fill="url(#brightGold)" filter="url(#stringLaser)" />
      <polygon points="900,300 922,275 888,282" fill="url(#bronzeBlade)" />

      <!-- Gold Runic Rings -->
      <rect x="835" y="360" width="18" height="15" rx="3" transform="rotate(-38 835 360)" fill="url(#goldFiligree)" stroke="#fde047" stroke-width="1.5" />
      <rect x="775" y="445" width="22" height="16" rx="3" transform="rotate(-52 775 445)" fill="url(#goldFiligree)" stroke="#fde047" stroke-width="1.5" />
      <rect x="715" y="555" width="25" height="18" rx="3" transform="rotate(-66 715 555)" fill="url(#goldFiligree)" stroke="#fde047" stroke-width="1.5" />
      <rect x="655" y="665" width="28" height="20" rx="3" transform="rotate(-80 655 665)" fill="url(#goldFiligree)" stroke="#fde047" stroke-width="1.5" />
    </g>

    <!-- Royal Hero Grip (Wrapped in Ox-leather with Golden Bands & Ithaca Seal) -->
    <g transform="translate(535, 765)">
      <rect x="-55" y="-20" width="110" height="40" rx="8" fill="#140d09" stroke="url(#brightGold)" stroke-width="4" />
      <line x1="-36" y1="-20" x2="-36" y2="20" stroke="#ca8a04" stroke-width="3.5" />
      <line x1="-18" y1="-20" x2="-18" y2="20" stroke="#ca8a04" stroke-width="3.5" />
      <line x1="0" y1="-20" x2="0" y2="20" stroke="#fde047" stroke-width="4" />
      <line x1="18" y1="-20" x2="18" y2="20" stroke="#ca8a04" stroke-width="3.5" />
      <line x1="36" y1="-20" x2="36" y2="20" stroke="#ca8a04" stroke-width="3.5" />

      <!-- Royal Medallion on Grip -->
      <circle cx="0" cy="0" r="18" fill="url(#brightGold)" filter="url(#stringLaser)" />
      <circle cx="0" cy="0" r="13" fill="#2d1508" stroke="#fff" stroke-width="1" />
      <polygon points="0,-9 -7,6 7,6" fill="url(#brightGold)" />
    </g>

    <!-- Ethereal Taut Golden Bowstring vibrating with energy -->
    <line x1="170" y1="300" x2="900" y2="300" stroke="#f59e0b" stroke-width="8" filter="url(#divineGlow)" opacity="0.6" />
    <line x1="170" y1="300" x2="900" y2="300" stroke="#ffffff" stroke-width="3.5" filter="url(#stringLaser)" />
    <circle cx="535" cy="300" r="8" fill="#fde047" filter="url(#stringLaser)" />

    <!-- Ready Hero Arrow aimed through the center axis -->
    <g transform="translate(535, 300)">
      <!-- Arrow Shaft -->
      <line x1="0" y1="0" x2="0" y2="270" stroke="#5a2e17" stroke-width="7" />
      <line x1="0" y1="0" x2="0" y2="270" stroke="#fde047" stroke-width="2" filter="url(#stringLaser)" />

      <!-- Bronze & Gold Arrow Head (Piercing Upwards) -->
      <polygon points="0,-42 -16,0 16,0" fill="url(#bronzeBlade)" stroke="#fde047" stroke-width="2.5" filter="url(#stringLaser)" />
      <line x1="0" y1="-42" x2="0" y2="0" stroke="#ffffff" stroke-width="2" />

      <!-- Eagle Fletching Feathers -->
      <polygon points="0,210 -28,255 -3,248" fill="url(#brightGold)" opacity="0.9" />
      <polygon points="0,210 28,255 3,248" fill="url(#brightGold)" opacity="0.9" />
      <polygon points="0,230 -22,270 -2,264" fill="#ffffff" opacity="0.95" />
      <polygon points="0,230 22,270 2,264" fill="#ffffff" opacity="0.95" />
    </g>

    <!-- Luminous Mythic Particle Sparkles -->
    <circle cx="535" cy="240" r="4" fill="#ffffff" filter="url(#divineGlow)" />
    <circle cx="380" cy="300" r="3" fill="#fde047" filter="url(#divineGlow)" />
    <circle cx="690" cy="300" r="3" fill="#fde047" filter="url(#divineGlow)" />
    <circle cx="310" cy="460" r="3.5" fill="#f59e0b" filter="url(#divineGlow)" />
    <circle cx="760" cy="460" r="3.5" fill="#f59e0b" filter="url(#divineGlow)" />
    <circle cx="480" cy="720" r="4" fill="#fbbf24" filter="url(#divineGlow)" />
    <circle cx="590" cy="720" r="4" fill="#fbbf24" filter="url(#divineGlow)" />
  </g>

  <!-- Ornate Golden Mythological Frame -->
  <rect width="1024" height="1024" fill="none" stroke="#060402" stroke-width="36" />
  <rect x="22" y="22" width="980" height="980" fill="none" stroke="url(#brightGold)" stroke-width="3.5" opacity="0.9" />
  <rect x="32" y="32" width="960" height="960" fill="none" stroke="#d97706" stroke-width="1.5" opacity="0.6" />

  <!-- Corner Filigree Ornaments -->
  <polygon points="22,22 75,22 22,75" fill="url(#brightGold)" opacity="0.95" />
  <polygon points="1002,22 949,22 1002,75" fill="url(#brightGold)" opacity="0.95" />
  <polygon points="22,1002 75,1002 22,949" fill="url(#brightGold)" opacity="0.95" />
  <polygon points="1002,1002 949,1002 1002,949" fill="url(#brightGold)" opacity="0.95" />
</svg>
`;

async function main() {
  const file1 = 'src/assets/images/odysseus_bow_axes_mythic.jpg';
  const file2 = 'src/assets/images/odysseus_bow_mythic_art.jpg';
  const file3 = 'src/assets/images/bow_of_odysseus_master.jpg';

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 96 })
    .toFile(file1);

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 96 })
    .toFile(file2);

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 96 })
    .toFile(file3);

  console.log('Successfully generated Bow and Axes images:');
  console.log(' -', file1, fs.statSync(file1).size, 'bytes');
}

main().catch(console.error);
