const sharp = require('sharp');
const path = require('path');

// Reusable Ornate Arabesque Corner Brackets (matching the Hazrat Hud / Adam frame)
const cornerFiligree = `
  <g id="corner">
    <!-- Outer corner flourishing scrolls -->
    <path d="M 54 54 C 90 54 110 70 120 90 C 130 110 120 135 105 140 C 90 145 75 130 80 110 C 85 95 100 90 110 95 C 105 85 90 75 70 75 C 54 75 54 54 54 54 Z" fill="url(#goldGrad)" opacity="0.9"/>
    <path d="M 54 54 C 54 90 70 110 90 120 C 110 130 135 120 140 105 C 145 90 130 75 110 80 C 95 85 90 100 95 110 C 85 105 75 90 75 70 C 75 54 54 54 54 54 Z" fill="url(#goldGrad)" opacity="0.9"/>
    <!-- Intertwining palmette leaf -->
    <path d="M 60 60 Q 110 80 140 140 Q 80 110 60 60 Z" fill="none" stroke="url(#goldGrad)" stroke-width="2.5"/>
    <path d="M 65 65 Q 120 90 150 150 Q 90 120 65 65 Z" fill="none" stroke="url(#goldGrad)" stroke-width="1.2"/>
    <circle cx="100" cy="100" r="4" fill="url(#goldGrad)"/>
    <circle cx="130" cy="80" r="3" fill="url(#goldGrad)"/>
    <circle cx="80" cy="130" r="3" fill="url(#goldGrad)"/>
  </g>
`;

// Crescent Moon & Stars Template
const crescentAndStars = `
  <!-- Glowing Crescent Moon -->
  <g transform="translate(512, 160)" filter="url(#glow)">
    <path d="M 0 -45 A 45 45 0 1 0 35 35 A 42 42 0 1 1 0 -45 Z" fill="url(#moonGrad)"/>
  </g>
  <!-- Celestial Twinkling Stars -->
  <g fill="url(#goldGrad)">
    <!-- Major 4-point stars -->
    <path d="M 430 140 Q 430 155 420 155 Q 430 155 430 170 Q 430 155 440 155 Q 430 155 430 140 Z" opacity="0.95"/>
    <path d="M 590 145 Q 590 160 580 160 Q 590 160 590 175 Q 590 160 600 160 Q 590 160 590 145 Z" opacity="0.95"/>
    <path d="M 480 200 Q 480 208 474 208 Q 480 208 480 216 Q 480 208 486 208 Q 480 208 480 200 Z" opacity="0.85"/>
    <path d="M 550 195 Q 550 203 544 203 Q 550 203 550 211 Q 550 203 556 203 Q 550 203 550 195 Z" opacity="0.85"/>
    <path d="M 370 175 Q 370 182 365 182 Q 370 182 370 189 Q 370 182 375 182 Q 370 182 370 175 Z" opacity="0.75"/>
    <path d="M 650 180 Q 650 187 645 187 Q 650 187 650 194 Q 650 187 655 187 Q 650 187 650 180 Z" opacity="0.75"/>
    <!-- Distant star dots -->
    <circle cx="395" cy="130" r="1.8" opacity="0.8"/>
    <circle cx="460" cy="120" r="2.2" opacity="0.9"/>
    <circle cx="560" cy="115" r="2.2" opacity="0.9"/>
    <circle cx="625" cy="135" r="1.8" opacity="0.8"/>
    <circle cx="512" cy="95" r="2" opacity="0.7"/>
    <circle cx="340" cy="205" r="1.5" opacity="0.6"/>
    <circle cx="680" cy="210" r="1.5" opacity="0.6"/>
  </g>
`;

function getBaseSvg(bgColorStart, bgColorEnd, centerContent) {
  return `<svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Radial Gradient with Luxury Dark Vignette -->
    <radialGradient id="bgGrad" cx="50%" cy="45%" r="70%">
      <stop offset="0%" stop-color="${bgColorStart}"/>
      <stop offset="65%" stop-color="${bgColorEnd}"/>
      <stop offset="100%" stop-color="#020306"/>
    </radialGradient>

    <!-- Warm Antique Gold Gradient -->
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE8A3"/>
      <stop offset="30%" stop-color="#E5C158"/>
      <stop offset="70%" stop-color="#B88A28"/>
      <stop offset="100%" stop-color="#8C6515"/>
    </linearGradient>

    <!-- Glowing Moon Gradient -->
    <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF8D6"/>
      <stop offset="50%" stop-color="#F2D175"/>
      <stop offset="100%" stop-color="#C2962C"/>
    </linearGradient>

    <!-- Subtle Golden Glow Filter -->
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>

    ${cornerFiligree}
  </defs>

  <!-- Background Base -->
  <rect width="1024" height="1024" fill="url(#bgGrad)"/>

  <!-- Subtle Parchment Texture Overlays -->
  <circle cx="512" cy="512" r="480" fill="none" stroke="#FFFFFF" stroke-opacity="0.015" stroke-width="40"/>

  <!-- Double Golden Linear Border -->
  <rect x="38" y="38" width="948" height="948" rx="18" fill="none" stroke="url(#goldGrad)" stroke-width="3.5" opacity="0.95"/>
  <rect x="52" y="52" width="920" height="920" rx="10" fill="none" stroke="url(#goldGrad)" stroke-width="1.5" opacity="0.75"/>

  <!-- Four Ornate Arabesque Corner Brackets -->
  <use href="#corner"/>
  <use href="#corner" transform="translate(1024, 0) scale(-1, 1)"/>
  <use href="#corner" transform="translate(0, 1024) scale(1, -1)"/>
  <use href="#corner" transform="translate(1024, 1024) scale(-1, -1)"/>

  <!-- Crescent Moon & Stars -->
  ${crescentAndStars}

  <!-- Center Artwork Content -->
  ${centerContent}
</svg>`;
}

// 1. Hazrat Ismail (A.S) - The Pure Spring of Zamzam in the Desert (NO Kaaba, NO Text)
const ismailContent = `
  <g transform="translate(512, 570)" stroke="url(#goldGrad)" fill="none">
    <!-- Gentle Desert Dunes in Background -->
    <path d="M -420 220 Q -200 130 0 180 Q 200 230 420 170" stroke-width="2.5" opacity="0.6"/>
    <path d="M -420 270 Q -150 200 80 230 Q 300 260 420 220" stroke-width="2" opacity="0.5"/>
    
    <!-- Sacred Desert Basin of Zamzam -->
    <!-- Outer ornate pool ring -->
    <ellipse cx="0" cy="90" rx="260" ry="105" stroke-width="3.5" fill="#041A1C" fill-opacity="0.8"/>
    <ellipse cx="0" cy="90" rx="242" ry="92" stroke-width="1.8" opacity="0.8"/>
    <ellipse cx="0" cy="90" rx="215" ry="78" stroke-width="1.5" opacity="0.7"/>

    <!-- Concentric rippling water waves -->
    <ellipse cx="0" cy="90" rx="175" ry="60" stroke-width="2" opacity="0.85"/>
    <ellipse cx="0" cy="90" rx="135" ry="44" stroke-width="2" opacity="0.9"/>
    <ellipse cx="0" cy="90" rx="90" ry="28" stroke-width="2.2"/>
    <ellipse cx="0" cy="90" rx="45" ry="14" stroke-width="2.5"/>

    <!-- Miraculous Gushing Spring Fountain rising from center -->
    <!-- Main water plumes -->
    <path d="M 0 85 Q -15 20 -40 -30 Q -60 -75 -85 -100 Q -105 -115 -135 -105 Q -145 -70 -95 -20 Q -45 25 0 90" fill="url(#goldGrad)" fill-opacity="0.25" stroke-width="2.5"/>
    <path d="M 0 85 Q 15 20 40 -30 Q 60 -75 85 -100 Q 105 -115 135 -105 Q 145 -70 95 -20 Q 45 25 0 90" fill="url(#goldGrad)" fill-opacity="0.25" stroke-width="2.5"/>
    
    <!-- Central high plume -->
    <path d="M -12 85 Q -25 -20 -35 -120 Q -40 -180 0 -210 Q 40 -180 35 -120 Q 25 -20 12 85 Z" fill="url(#goldGrad)" fill-opacity="0.35" stroke-width="3"/>
    
    <!-- Droplets splashing outward -->
    <circle cx="0" cy="-225" r="5" fill="url(#goldGrad)"/>
    <circle cx="-25" cy="-190" r="3.5" fill="url(#goldGrad)"/>
    <circle cx="25" cy="-190" r="3.5" fill="url(#goldGrad)"/>
    <circle cx="-90" cy="-135" r="4" fill="url(#goldGrad)"/>
    <circle cx="90" cy="-135" r="4" fill="url(#goldGrad)"/>
    <circle cx="-145" cy="-110" r="3.5" fill="url(#goldGrad)"/>
    <circle cx="145" cy="-110" r="3.5" fill="url(#goldGrad)"/>
    <circle cx="-165" cy="-70" r="3" fill="url(#goldGrad)"/>
    <circle cx="165" cy="-70" r="3" fill="url(#goldGrad)"/>

    <!-- Symmetrical Curved Horns Motif on flanks (Symbol of the Blessed Ransom) -->
    <g transform="translate(-250, 60)">
      <path d="M 0 0 C -40 -30 -60 -80 -40 -120 C -20 -150 20 -140 30 -110 C 35 -85 10 -65 -15 -80" stroke-width="3.2"/>
      <path d="M -10 -5 C -45 -30 -60 -75 -42 -110 C -25 -135 10 -130 18 -105" stroke-width="1.8" opacity="0.7"/>
    </g>
    <g transform="translate(250, 60) scale(-1, 1)">
      <path d="M 0 0 C -40 -30 -60 -80 -40 -120 C -20 -150 20 -140 30 -110 C 35 -85 10 -65 -15 -80" stroke-width="3.2"/>
      <path d="M -10 -5 C -45 -30 -60 -75 -42 -110 C -25 -135 10 -130 18 -105" stroke-width="1.8" opacity="0.7"/>
    </g>
  </g>
`;

// 2. Hazrat Ibrahim (A.S) - The Rose Garden Blooming from Cool Flames (NO Kaaba, NO Text)
const ibrahimContent = `
  <g transform="translate(512, 570)" stroke="url(#goldGrad)" fill="none">
    <!-- Gentle ground mound -->
    <path d="M -380 200 Q 0 140 380 200" stroke-width="2.5" opacity="0.6"/>

    <!-- Gentle Decorative Flame Arcs (Harmless, Cool Flame Ribbons) -->
    <path d="M -220 180 C -260 80 -230 -20 -180 -100 C -150 -150 -120 -190 -150 -240 C -110 -190 -80 -120 -110 -40 C -140 40 -150 120 -160 180" stroke-width="2.5" opacity="0.7" fill="url(#goldGrad)" fill-opacity="0.1"/>
    <path d="M 220 180 C 260 80 230 -20 180 -100 C 150 -150 120 -190 150 -240 C 110 -190 80 -120 110 -40 C 140 40 150 120 160 180" stroke-width="2.5" opacity="0.7" fill="url(#goldGrad)" fill-opacity="0.1"/>
    
    <path d="M -130 170 C -170 80 -140 0 -90 -70 C -60 -110 -40 -150 -70 -200 C -30 -150 0 -90 -20 -20 C -40 40 -60 110 -70 170" stroke-width="2" opacity="0.6"/>
    <path d="M 130 170 C 170 80 140 0 90 -70 C 60 -110 40 -150 70 -200 C 30 -150 0 -90 20 -20 C 40 40 60 110 70 170" stroke-width="2" opacity="0.6"/>

    <!-- Central Majestic Blooming Rose Garden (Symbolizing Bardan wa Salaman) -->
    <!-- Large Central Rose -->
    <g transform="translate(0, 0)">
      <!-- Rose Stem & Calyx -->
      <path d="M 0 60 Q 5 120 0 180" stroke-width="3.5"/>
      <path d="M 0 120 Q -40 100 -60 70 Q -40 60 0 95" stroke-width="2" fill="url(#goldGrad)" fill-opacity="0.2"/>
      <path d="M 0 140 Q 40 120 60 90 Q 40 80 0 115" stroke-width="2" fill="url(#goldGrad)" fill-opacity="0.2"/>
      
      <!-- Concentric Rose Petals -->
      <circle cx="0" cy="0" r="16" fill="url(#goldGrad)"/>
      <path d="M -15 -10 C -30 -40 30 -40 15 -10 C 35 15 -35 15 -15 -10 Z" stroke-width="2.5" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M -40 -20 C -70 -70 0 -90 40 -50 C 80 -10 60 50 10 70 C -40 85 -80 30 -40 -20 Z" stroke-width="2.5" fill="url(#goldGrad)" fill-opacity="0.2"/>
      <path d="M -60 -35 C -110 -100 20 -130 70 -70 C 120 -10 90 80 20 105 C -55 125 -120 50 -60 -35 Z" stroke-width="2.2" fill="url(#goldGrad)" fill-opacity="0.15"/>
      <path d="M -85 -50 C -145 -130 30 -170 100 -90 C 160 -15 125 110 30 140 C -75 165 -160 70 -85 -50 Z" stroke-width="1.8"/>
    </g>

    <!-- Side Blooming Roses -->
    <g transform="translate(-140, 50) scale(0.65)">
      <circle cx="0" cy="0" r="14" fill="url(#goldGrad)"/>
      <path d="M -30 -15 C -60 -55 0 -70 30 -40 C 60 -10 45 40 10 55 C -30 65 -60 25 -30 -15 Z" stroke-width="2.5" fill="url(#goldGrad)" fill-opacity="0.3"/>
      <path d="M -50 -30 C -90 -80 15 -105 55 -60 C 95 -10 70 65 15 85 C -45 100 -95 40 -50 -30 Z" stroke-width="2"/>
      <path d="M 0 50 Q -10 90 -20 140" stroke-width="3"/>
    </g>
    <g transform="translate(140, 50) scale(-0.65, 0.65)">
      <circle cx="0" cy="0" r="14" fill="url(#goldGrad)"/>
      <path d="M -30 -15 C -60 -55 0 -70 30 -40 C 60 -10 45 40 10 55 C -30 65 -60 25 -30 -15 Z" stroke-width="2.5" fill="url(#goldGrad)" fill-opacity="0.3"/>
      <path d="M -50 -30 C -90 -80 15 -105 55 -60 C 95 -10 70 65 15 85 C -45 100 -95 40 -50 -30 Z" stroke-width="2"/>
      <path d="M 0 50 Q -10 90 -20 140" stroke-width="3"/>
    </g>

    <!-- Soft radiant light rays from the garden -->
    <line x1="0" y1="-120" x2="0" y2="-190" stroke-width="2" stroke-dasharray="4,6" opacity="0.8"/>
    <line x1="-80" y1="-100" x2="-140" y2="-160" stroke-width="1.8" stroke-dasharray="4,6" opacity="0.7"/>
    <line x1="80" y1="-100" x2="140" y2="-160" stroke-width="1.8" stroke-dasharray="4,6" opacity="0.7"/>
  </g>
`;

// 3. Hazrat Yunus (A.S) - The Majestic Whale swimming inside Olive Wreath (High Res, NO Text)
const yunusContent = `
  <g transform="translate(512, 570)" stroke="url(#goldGrad)" fill="none">
    <!-- Circular Olive Leaf Wreath -->
    <g stroke-width="2.2" opacity="0.85">
      <ellipse cx="0" cy="-20" rx="270" ry="240" stroke-width="1.5" stroke-dasharray="6,8"/>
      <!-- Olive leaves along the circular wreath -->
      <!-- Left curve leaves -->
      <path d="M -260 -40 Q -285 -60 -290 -85 Q -275 -75 -260 -55" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M -240 -110 Q -260 -135 -260 -160 Q -245 -145 -235 -125" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M -190 -175 Q -205 -205 -195 -230 Q -185 -210 -180 -190" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M -115 -225 Q -125 -255 -110 -275 Q -105 -250 -105 -235" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M -250 40 Q -280 60 -290 85 Q -270 80 -250 55" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M -220 120 Q -245 145 -245 175 Q -230 160 -215 135" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M -160 185 Q -180 215 -170 245 Q -160 225 -150 200" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M -80 230 Q -95 265 -80 290 Q -75 265 -70 245" fill="url(#goldGrad)" fill-opacity="0.4"/>

      <!-- Right curve leaves -->
      <path d="M 260 -40 Q 285 -60 290 -85 Q 275 -75 260 -55" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M 240 -110 Q 260 -135 260 -160 Q 245 -145 235 -125" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M 190 -175 Q 205 -205 195 -230 Q 185 -210 180 -190" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M 115 -225 Q 125 -255 110 -275 Q 105 -250 105 -235" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M 250 40 Q 280 60 290 85 Q 270 80 250 55" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M 220 120 Q 245 145 245 175 Q 230 160 215 135" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M 160 185 Q 180 215 170 245 Q 160 225 150 200" fill="url(#goldGrad)" fill-opacity="0.4"/>
      <path d="M 80 230 Q 95 265 80 290 Q 75 265 70 245" fill="url(#goldGrad)" fill-opacity="0.4"/>
    </g>

    <!-- The Great Whale swimming peacefully in the center -->
    <g transform="translate(0, -25)">
      <!-- Main Whale Body Outline -->
      <path d="M -170 40 C -120 70 -30 95 60 80 C 130 70 200 35 230 -10 C 240 -25 240 -50 210 -65 C 160 -85 70 -80 -20 -60 C -90 -45 -150 -10 -170 40 Z" fill="url(#goldGrad)" fill-opacity="0.25" stroke-width="3.5"/>
      
      <!-- Whale Belly Grooves (Rorqual pleats) -->
      <path d="M -30 5 C 30 50 120 45 180 15" stroke-width="2" opacity="0.8"/>
      <path d="M -10 20 C 45 60 130 55 190 25" stroke-width="1.8" opacity="0.7"/>
      <path d="M 10 35 C 60 70 140 65 195 35" stroke-width="1.5" opacity="0.6"/>

      <!-- Whale Eye & Blowhole -->
      <circle cx="165" cy="-35" r="4.5" fill="url(#goldGrad)"/>
      <path d="M 125 -68 Q 135 -72 145 -68" stroke-width="2.5"/>

      <!-- Pectoral Fin -->
      <path d="M 30 35 C 20 80 0 125 -30 150 C -45 160 -55 150 -45 130 C -25 95 5 55 30 35 Z" fill="url(#goldGrad)" fill-opacity="0.3" stroke-width="2.8"/>

      <!-- Whale Tail Flukes -->
      <path d="M -160 30 C -185 20 -210 -10 -240 -40 C -255 -55 -270 -50 -265 -30 C -260 0 -230 35 -190 45 C -230 65 -260 95 -265 125 C -270 145 -255 145 -240 130 C -210 100 -185 70 -160 55 Z" fill="url(#goldGrad)" fill-opacity="0.3" stroke-width="3"/>
    </g>

    <!-- Gentle calming water ripples beneath -->
    <path d="M -220 200 Q -110 185 0 200 Q 110 215 220 200" stroke-width="2.2" opacity="0.7"/>
    <path d="M -160 225 Q -80 215 0 225 Q 80 235 160 225" stroke-width="1.8" opacity="0.5"/>
  </g>
`;

// 4. Hazrat Nuh (A.S) - The Sacred Ark sailing over Rhythmic Waves (High Res, NO Text)
const nuhContent = `
  <g transform="translate(512, 570)" stroke="url(#goldGrad)" fill="none">
    <!-- Rolling Ocean Waves -->
    <path d="M -420 180 C -320 130 -220 230 -120 180 C -20 130 80 230 180 180 C 280 130 380 230 420 180" stroke-width="3" opacity="0.85"/>
    <path d="M -420 220 C -340 170 -260 270 -180 220 C -100 170 0 270 80 220 C 160 170 240 270 320 220 C 370 190 400 240 420 220" stroke-width="2.2" opacity="0.7"/>
    <path d="M -420 260 C -300 210 -180 300 -60 250 C 60 200 180 300 300 250 C 360 220 400 270 420 250" stroke-width="1.8" opacity="0.5"/>

    <!-- The Mighty Wooden Ark (Kashti) -->
    <g transform="translate(0, 30)">
      <!-- Ship Hull -->
      <path d="M -230 -30 C -210 70 -120 130 0 130 C 120 130 210 70 230 -30 C 170 -20 70 -15 0 -15 C -70 -15 -170 -20 -230 -30 Z" fill="url(#goldGrad)" fill-opacity="0.3" stroke-width="3.5"/>
      
      <!-- Horizontal Wooden Planks of the Hull -->
      <path d="M -210 10 C -120 45 0 50 120 45 C 180 40 205 15 210 10" stroke-width="2"/>
      <path d="M -180 50 C -100 80 0 85 100 80 C 150 75 175 55 180 50" stroke-width="1.8"/>
      <path d="M -130 85 C -60 105 0 110 60 105 C 105 100 125 90 130 85" stroke-width="1.5"/>

      <!-- Multi-tiered Cabin & Upper Decks -->
      <rect x="-140" y="-85" width="280" height="70" rx="6" stroke-width="2.8" fill="url(#goldGrad)" fill-opacity="0.2"/>
      <rect x="-100" y="-135" width="200" height="50" rx="4" stroke-width="2.5" fill="url(#goldGrad)" fill-opacity="0.25"/>
      <rect x="-60" y="-175" width="120" height="40" rx="4" stroke-width="2.2" fill="url(#goldGrad)" fill-opacity="0.3"/>

      <!-- Sanctuary Windows on the Upper Tier -->
      <rect x="-85" y="-72" width="22" height="30" rx="10" stroke-width="1.8"/>
      <rect x="-40" y="-72" width="22" height="30" rx="10" stroke-width="1.8"/>
      <rect x="18" y="-72" width="22" height="30" rx="10" stroke-width="1.8"/>
      <rect x="63" y="-72" width="22" height="30" rx="10" stroke-width="1.8"/>
      
      <rect x="-45" y="-124" width="18" height="25" rx="8" stroke-width="1.5"/>
      <rect x="27" y="-124" width="18" height="25" rx="8" stroke-width="1.5"/>
    </g>

    <!-- Flying Peaceful Dove with Olive Branch in sky -->
    <g transform="translate(190, -110)">
      <!-- Dove Wings & Body -->
      <path d="M 0 0 C 15 -25 40 -40 70 -45 C 60 -20 45 5 20 15 C 35 30 45 60 30 75 C 15 60 5 35 0 15 C -15 20 -35 20 -45 10 C -40 -5 -20 -10 0 0 Z" fill="url(#goldGrad)" fill-opacity="0.4" stroke-width="2.2"/>
      <!-- Olive sprig in beak -->
      <path d="M -45 10 Q -65 15 -80 10" stroke-width="2"/>
      <ellipse cx="-60" cy="10" rx="7" ry="4" transform="rotate(-20 -60 10)" fill="url(#goldGrad)"/>
      <ellipse cx="-75" cy="8" rx="6" ry="3.5" transform="rotate(15 -75 8)" fill="url(#goldGrad)"/>
    </g>
  </g>
`;

// 5. Hazrat Saleh (A.S) - The Miraculous She-Camel by Al-Hijr Rock Mountain (High Res, NO Text)
const salehContent = `
  <g transform="translate(512, 570)" stroke="url(#goldGrad)" fill="none">
    <!-- Towering Carved Mountain of Al-Hijr in background -->
    <path d="M -380 200 L -350 40 L -280 -60 L -180 -140 L -70 -190 L 40 -170 L 160 -110 L 260 -50 L 340 30 L 380 200" stroke-width="2.8" opacity="0.6"/>
    <!-- Carved Mountain Entrance Portal -->
    <path d="M -190 200 L -190 30 Q -120 -20 -50 30 L -50 200" stroke-width="2.5" fill="#200A0D" fill-opacity="0.7"/>
    <path d="M -170 200 L -170 50 Q -120 10 -70 50 L -70 200" stroke-width="1.8" opacity="0.7"/>
    <rect x="-140" y="70" width="40" height="60" rx="4" stroke-width="1.5" opacity="0.8"/>

    <!-- The Miraculous She-Camel (Naqatullah) standing gracefully in foreground -->
    <g transform="translate(100, 20)">
      <!-- Camel Legs -->
      <path d="M -50 80 L -55 170" stroke-width="3.2"/>
      <path d="M -30 80 L -35 170" stroke-width="3"/>
      <path d="M 50 80 L 55 170" stroke-width="3.2"/>
      <path d="M 70 80 L 75 170" stroke-width="3"/>

      <!-- Camel Body & Hump -->
      <path d="M -70 80 C -85 70 -95 40 -85 10 C -75 -15 -45 -10 -30 10 C -15 -35 25 -50 55 -20 C 75 -35 110 -20 105 20 C 100 55 85 75 70 80 Z" fill="url(#goldGrad)" fill-opacity="0.35" stroke-width="3.5"/>

      <!-- Long Graceful Neck & Head -->
      <path d="M -85 10 C -95 -25 -110 -70 -130 -110 C -145 -135 -140 -160 -120 -165 C -100 -165 -90 -145 -85 -125 C -75 -90 -65 -30 -50 10" stroke-width="3.2" fill="url(#goldGrad)" fill-opacity="0.3"/>
      
      <!-- Camel Ear & Eye -->
      <path d="M -125 -165 Q -130 -185 -120 -180" stroke-width="2.5"/>
      <circle cx="-120" cy="-150" r="3" fill="url(#goldGrad)"/>

      <!-- Tail -->
      <path d="M 105 20 Q 125 50 120 90" stroke-width="2.5"/>
    </g>

    <!-- Calming desert blooms / foliage at base -->
    <g transform="translate(-250, 150)" stroke-width="2">
      <path d="M 0 30 Q -15 0 -30 -10 Q -10 -5 0 30"/>
      <path d="M 0 30 Q 15 0 30 -10 Q 10 -5 0 30"/>
      <circle cx="-32" cy="-12" r="3" fill="url(#goldGrad)"/>
      <circle cx="32" cy="-12" r="3" fill="url(#goldGrad)"/>
    </g>
  </g>
`;

// 6. Hazrat Yaqub (A.S) - The 11 Radiant Stars, Sun & Moon of Yusuf's Vision (High Res, NO Text)
const yaqubContent = `
  <g transform="translate(512, 570)" stroke="url(#goldGrad)" fill="none">
    <!-- Peaceful valley hills in distance -->
    <path d="M -400 180 Q -200 120 0 160 Q 200 200 400 150" stroke-width="2.5" opacity="0.6"/>

    <!-- Central Majestic Radiant Sun (Symbolizing Fatherhood & Guidance) -->
    <g transform="translate(0, 0)">
      <circle cx="0" cy="0" r="45" fill="url(#goldGrad)" fill-opacity="0.4" stroke-width="3"/>
      <circle cx="0" cy="0" r="32" fill="url(#goldGrad)" fill-opacity="0.6"/>
      <!-- Sun Rays -->
      <line x1="0" y1="-55" x2="0" y2="-75" stroke-width="2.5"/>
      <line x1="0" y1="55" x2="0" y2="75" stroke-width="2.5"/>
      <line x1="-55" y1="0" x2="-75" y2="0" stroke-width="2.5"/>
      <line x1="55" y1="0" x2="75" y2="0" stroke-width="2.5"/>
      <line x1="-40" y1="-40" x2="-55" y2="-55" stroke-width="2"/>
      <line x1="40" y1="-40" x2="55" y2="-55" stroke-width="2"/>
      <line x1="-40" y1="40" x2="-55" y2="55" stroke-width="2"/>
      <line x1="40" y1="40" x2="55" y2="55" stroke-width="2"/>
    </g>

    <!-- The Eleven Radiant Constellation Stars Circling in Serene Orbit -->
    <!-- Circular orbit line -->
    <ellipse cx="0" cy="0" rx="220" ry="180" stroke-dasharray="4,6" stroke-width="1.5" opacity="0.5"/>
    
    <!-- 11 Star Emblems around the orbit -->
    <!-- Star 1 -->
    <path d="M 0 -180 Q 0 -170 -6 -170 Q 0 -170 0 -160 Q 0 -170 6 -170 Q 0 -170 0 -180 Z" fill="url(#goldGrad)"/>
    <!-- Star 2 -->
    <path d="M 120 -150 Q 120 -142 115 -142 Q 120 -142 120 -134 Q 120 -142 125 -142 Q 120 -142 120 -150 Z" fill="url(#goldGrad)"/>
    <!-- Star 3 -->
    <path d="M 205 -70 Q 205 -62 200 -62 Q 205 -62 205 -54 Q 205 -62 210 -62 Q 205 -62 205 -70 Z" fill="url(#goldGrad)"/>
    <!-- Star 4 -->
    <path d="M 215 50 Q 215 58 210 58 Q 215 58 215 66 Q 215 58 220 58 Q 215 58 215 50 Z" fill="url(#goldGrad)"/>
    <!-- Star 5 -->
    <path d="M 140 140 Q 140 148 135 148 Q 140 148 140 156 Q 140 148 145 148 Q 140 148 140 140 Z" fill="url(#goldGrad)"/>
    <!-- Star 6 -->
    <path d="M 40 180 Q 40 188 35 188 Q 40 188 40 196 Q 40 188 45 188 Q 40 188 40 180 Z" fill="url(#goldGrad)"/>
    <!-- Star 7 -->
    <path d="M -60 175 Q -60 183 -65 183 Q -60 183 -60 191 Q -60 183 -55 183 Q -60 183 -60 175 Z" fill="url(#goldGrad)"/>
    <!-- Star 8 -->
    <path d="M -155 130 Q -155 138 -160 138 Q -155 138 -155 146 Q -155 138 -150 138 Q -155 138 -155 130 Z" fill="url(#goldGrad)"/>
    <!-- Star 9 -->
    <path d="M -215 40 Q -215 48 -220 48 Q -215 48 -215 56 Q -215 48 -210 48 Q -215 48 -215 40 Z" fill="url(#goldGrad)"/>
    <!-- Star 10 -->
    <path d="M -200 -75 Q -200 -67 -205 -67 Q -200 -67 -200 -59 Q -200 -67 -195 -67 Q -200 -67 -200 -75 Z" fill="url(#goldGrad)"/>
    <!-- Star 11 -->
    <path d="M -115 -150 Q -115 -142 -120 -142 Q -115 -142 -115 -134 Q -115 -142 -110 -142 Q -115 -142 -115 -150 Z" fill="url(#goldGrad)"/>

    <!-- Wreath of Patience (Sabrun Jameel) beneath -->
    <g transform="translate(0, 160)" stroke-width="2.2" opacity="0.8">
      <path d="M -180 30 Q -90 -20 0 0 Q 90 -20 180 30"/>
      <!-- Olive leaves of peace & healing -->
      <path d="M -120 5 Q -140 -15 -135 -30 Q -120 -15 -110 5" fill="url(#goldGrad)" fill-opacity="0.3"/>
      <path d="M -50 -5 Q -70 -25 -65 -40 Q -50 -25 -40 -5" fill="url(#goldGrad)" fill-opacity="0.3"/>
      <path d="M 50 -5 Q 70 -25 65 -40 Q 50 -25 40 -5" fill="url(#goldGrad)" fill-opacity="0.3"/>
      <path d="M 120 5 Q 140 -15 135 -30 Q 120 -15 110 5" fill="url(#goldGrad)" fill-opacity="0.3"/>
    </g>
  </g>
`;

async function generateAllCovers() {
  const tasks = [
    {
      name: 'hazrat-ismail.jpg',
      bgStart: '#041E20',
      bgEnd: '#020C0D',
      content: ismailContent
    },
    {
      name: 'hazrat-ibrahim.jpg',
      bgStart: '#181412',
      bgEnd: '#0A0807',
      content: ibrahimContent
    },
    {
      name: 'hazrat-yunus.jpg',
      bgStart: '#06172E',
      bgEnd: '#020914',
      content: yunusContent
    },
    {
      name: 'hazrat-nuh.jpg',
      bgStart: '#05192E',
      bgEnd: '#020A14',
      content: nuhContent
    },
    {
      name: 'hazrat-saleh.jpg',
      bgStart: '#200A0D',
      bgEnd: '#0E0305',
      content: salehContent
    },
    {
      name: 'hazrat-yaqub.jpg',
      bgStart: '#071228',
      bgEnd: '#020712',
      content: yaqubContent
    }
  ];

  for (const t of tasks) {
    const svg = getBaseSvg(t.bgStart, t.bgEnd, t.content);
    const outPath = path.join(__dirname, '..', 'public', 'stories', t.name);
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 96 })
      .toFile(outPath);
    console.log(`Generated 100% clean, text-free cover: ${t.name}`);
  }
  console.log('ALL PROPHET COVERS GENERATED SUCCESSFULLY!');
}

generateAllCovers().catch(err => {
  console.error('Generation error:', err);
  process.exit(1);
});
