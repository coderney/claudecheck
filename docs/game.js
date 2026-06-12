'use strict';

// ── Verified Shikaku Levels ───────────────────────────────────────────────
// Every level is constructed from a known partition, then clues are derived.
// Format: clues: [{r, c, v}] where v = area of the rectangle covering (r,c).

// hint: 'h' = horizontal, 'v' = vertical, 's' = square, null = no hint (harder)
// The small indicator rectangle behind the clue number shows its orientation.

const LEVELS = [
  // ── Level 0: 4×4 — all hints ─────────────────────────────────────────
  // A rows0-1 cols0-1 (2×2=4,'s')   B rows0-1 cols2-3 (2×2=4,'s')
  // C row2    cols0-1 (1×2=2,'h')   D rows2-3 cols2-3 (2×2=4,'s')
  // E row3    cols0-1 (1×2=2,'h')
  {
    id: 0, name: 'Leicht 1', size: 4, difficulty: 'Leicht',
    clues: [
      {r:0, c:0, v:4, hint:'s'},
      {r:1, c:3, v:4, hint:'s'},
      {r:2, c:1, v:2, hint:'h'},
      {r:2, c:2, v:4, hint:'s'},
      {r:3, c:0, v:2, hint:'h'},
    ]
  },

  // ── Level 1: 5×5 — 6/8 hints ─────────────────────────────────────────
  // A row0    cols0-2 (1×3=3,'h')   B rows0-1 cols3-4 (2×2=4,'s')
  // C rows1-2 cols0-1 (2×2=4, null) D rows1-2 col2   (2×1=2,'v')
  // E row2    cols3-4 (1×2=2,'h')   F row3    cols0-2 (1×3=3,'h')
  // G row3    cols3-4 (1×2=2, null) H row4    cols0-4 (1×5=5,'h')
  {
    id: 1, name: 'Leicht 2', size: 5, difficulty: 'Leicht',
    clues: [
      {r:0, c:1, v:3, hint:'h'},
      {r:0, c:4, v:4, hint:'s'},
      {r:1, c:0, v:4, hint:null},
      {r:2, c:2, v:2, hint:'v'},
      {r:2, c:3, v:2, hint:'h'},
      {r:3, c:1, v:3, hint:'h'},
      {r:3, c:4, v:2, hint:null},
      {r:4, c:2, v:5, hint:'h'},
    ]
  },

  // ── Level 2: 6×6 — 8/12 hints ────────────────────────────────────────
  // A rows0-1 cols0-1 (2×2=4,'s')   B row0    cols2-3 (1×2=2,'h')
  // C rows0-1 cols4-5 (2×2=4,'s')   D row1    cols2-3 (1×2=2, null)
  // E row2    cols0-2 (1×3=3,'h')   F row2    cols3-5 (1×3=3,'h')
  // G rows3-5 col0   (3×1=3,'v')   H row3    cols1-3 (1×3=3, null)
  // I row3    cols4-5 (1×2=2, null) J row4    cols1-2 (1×2=2,'h')
  // K row4    cols3-5 (1×3=3,'h')   L row5    cols1-5 (1×5=5,'h')
  {
    id: 2, name: 'Mittel 1', size: 6, difficulty: 'Mittel',
    clues: [
      {r:0, c:1, v:4, hint:'s'},
      {r:0, c:2, v:2, hint:'h'},
      {r:1, c:4, v:4, hint:'s'},
      {r:1, c:3, v:2, hint:null},
      {r:2, c:1, v:3, hint:'h'},
      {r:2, c:4, v:3, hint:'h'},
      {r:4, c:0, v:3, hint:'v'},
      {r:3, c:2, v:3, hint:null},
      {r:3, c:5, v:2, hint:null},
      {r:4, c:2, v:2, hint:'h'},
      {r:4, c:4, v:3, hint:'h'},
      {r:5, c:3, v:5, hint:'h'},
    ]
  },

  // ── Level 3: 7×7 — 7/12 hints ────────────────────────────────────────
  // A rows0-1 cols0-2 (2×3=6,'h')   B row0    cols3-6 (1×4=4, null)
  // C row1    cols3-6 (1×4=4, null) D rows2-3 cols0-1 (2×2=4,'s')
  // E row2    cols2-4 (1×3=3,'h')   F rows2-3 cols5-6 (2×2=4,'s')
  // G row3    cols2-4 (1×3=3, null) H rows4-5 cols0-2 (2×3=6,'h')
  // I row4    cols3-5 (1×3=3, null) J rows4-6 col6   (3×1=3,'v')
  // K row5    cols3-5 (1×3=3, null) L row6    cols0-5 (1×6=6,'h')
  // Total: 6+4+4+4+3+4+3+6+3+3+3+6 = 49 ✓
  {
    id: 3, name: 'Mittel 2', size: 7, difficulty: 'Mittel',
    clues: [
      {r:0, c:1, v:6, hint:'h'},
      {r:0, c:5, v:4, hint:null},
      {r:1, c:4, v:4, hint:null},
      {r:2, c:0, v:4, hint:'s'},
      {r:2, c:3, v:3, hint:'h'},
      {r:2, c:5, v:4, hint:'s'},
      {r:3, c:3, v:3, hint:null},
      {r:4, c:1, v:6, hint:'h'},
      {r:4, c:4, v:3, hint:null},
      {r:5, c:6, v:3, hint:'v'},
      {r:5, c:4, v:3, hint:null},
      {r:6, c:3, v:6, hint:'h'},
    ]
  },

  // ── Level 4: 8×8 (64 cells) — large rectangles ───────────────────────
  // Partition:
  //   A rows0-1 cols0-3 (8)   B rows0-1 cols4-5 (4)
  //   C rows0-1 cols6-7 (4)   D rows2-3 cols0-1 (4)
  //   E row2    cols2-4 (3)   F rows2-3 cols5-7 (6)
  //   G row3    cols2-4 (3)   H rows4-5 cols0-2 (6)
  //   I row4    cols3-5 (3)   J rows4-5 cols6-7 (4)
  //   K row5    cols3-5 (3)   L row6    cols0-3 (4)
  //   M row6    cols4-7 (4)   N row7    cols0-3 (4)
  //   O row7    cols4-7 (4)
  // Total: 8+4+4+4+3+6+3+6+3+4+3+4+4+4+4 = 64 ✓
  // ── Level 4: 8×8 — 5/15 hints (hard) ────────────────────────────────
  // A rows0-1 cols0-3 (2×4=8,'h')   B rows0-1 cols4-5 (2×2=4, null)
  // C rows0-1 cols6-7 (2×2=4, null) D rows2-3 cols0-1 (2×2=4, null)
  // E row2    cols2-4 (1×3=3, null) F rows2-3 cols5-7 (2×3=6,'h')
  // G row3    cols2-4 (1×3=3, null) H rows4-5 cols0-2 (2×3=6,'h')
  // I row4    cols3-5 (1×3=3, null) J rows4-5 cols6-7 (2×2=4,'s')
  // K row5    cols3-5 (1×3=3, null) L row6    cols0-3 (1×4=4, null)
  // M row6    cols4-7 (1×4=4, null) N row7    cols0-3 (1×4=4, null)
  // O row7    cols4-7 (1×4=4,'h')
  {
    id: 4, name: 'Schwer 1', size: 8, difficulty: 'Schwer',
    clues: [
      {r:1, c:2, v:8, hint:'h'},
      {r:0, c:4, v:4, hint:null},
      {r:1, c:7, v:4, hint:null},
      {r:2, c:0, v:4, hint:null},
      {r:2, c:3, v:3, hint:null},
      {r:3, c:6, v:6, hint:'h'},
      {r:3, c:4, v:3, hint:null},
      {r:5, c:1, v:6, hint:'h'},
      {r:4, c:4, v:3, hint:null},
      {r:4, c:6, v:4, hint:'s'},
      {r:5, c:3, v:3, hint:null},
      {r:6, c:1, v:4, hint:null},
      {r:6, c:6, v:4, hint:null},
      {r:7, c:2, v:4, hint:null},
      {r:7, c:6, v:4, hint:'h'},
    ]
  },
];

// ── Palette (Design System colors) ───────────────────────────────────────
// Primary teal, Secondary magenta, Accent yellow-green, semantic + neutrals
const PALETTE = [
  { fill: 'rgba(57,212,239,0.22)',  stroke: '#0992a9' },   // primary-400
  { fill: 'rgba(222,7,190,0.18)',   stroke: '#a90a91' },   // secondary-500
  { fill: 'rgba(211,238,58,0.30)',  stroke: '#6d7f0b' },   // accent-400
  { fill: 'rgba(32,172,118,0.25)',  stroke: '#20ac76' },   // success
  { fill: 'rgba(142,222,236,0.30)', stroke: '#0a6e7f' },   // primary-300
  { fill: 'rgba(235,142,221,0.28)', stroke: '#7f0b6d' },   // secondary-300
  { fill: 'rgba(221,235,142,0.35)', stroke: '#91a90a' },   // accent-300
  { fill: 'rgba(15,144,230,0.22)',  stroke: '#0992a9' },   // info
  { fill: 'rgba(190,222,7,0.28)',   stroke: '#4f5c0a' },   // accent-500
  { fill: 'rgba(6,192,223,0.22)',   stroke: '#0a505c' },   // primary-500
];

// ── App State ─────────────────────────────────────────────────────────────
let currentLevelIndex = -1;
let rectangles = [];
let solved = [];
let dragActive = false;
let dragStartCell = null;
let dragCurrentCell = null;
let CELL = 0;
let BOARD_PX = 0;
let DPR = 1;

// ── DOM ───────────────────────────────────────────────────────────────────
const menuScreen  = document.getElementById('menu');
const gameScreen  = document.getElementById('game');
const canvas      = document.getElementById('canvas');
const ctx         = canvas.getContext('2d');
const titleEl     = document.getElementById('game-title');
const winBanner   = document.getElementById('win-banner');
const winMsg      = document.getElementById('win-msg');
const btnNext     = document.getElementById('btn-next');
const boardEl     = document.getElementById('board');

// ── Sizing ────────────────────────────────────────────────────────────────
function resize() {
  if (currentLevelIndex < 0) return;
  const wrap = document.getElementById('board-wrap');
  const n    = LEVELS[currentLevelIndex].size;

  // getBoundingClientRect gives us the real rendered size including border
  const wrapRect = wrap.getBoundingClientRect();
  const padX = 32;  // 16px left + 16px right
  const padY = 12;  // 6px top + 6px bottom
  const availW = Math.floor(wrapRect.width  - padX);
  const availH = Math.floor(wrapRect.height - padY);
  const logicalSize = Math.max(80, Math.min(availW, availH));

  CELL = Math.floor(logicalSize / n);
  BOARD_PX = CELL * n;

  // Retina / high-DPR support
  DPR = window.devicePixelRatio || 1;
  canvas.width  = BOARD_PX * DPR;
  canvas.height = BOARD_PX * DPR;
  canvas.style.width  = BOARD_PX + 'px';
  canvas.style.height = BOARD_PX + 'px';

  // Size the wrapper div too so border shows correctly
  boardEl.style.width  = BOARD_PX + 'px';
  boardEl.style.height = BOARD_PX + 'px';

  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  draw();
}

// ── Navigation ────────────────────────────────────────────────────────────
function showMenu() {
  menuScreen.classList.add('active');
  gameScreen.classList.remove('active');
  currentLevelIndex = -1;
  renderMenu();
}

function showGame(idx) {
  currentLevelIndex = idx;
  rectangles = [];
  dragActive = false;
  winBanner.classList.remove('visible');
  titleEl.textContent = LEVELS[idx].name;
  menuScreen.classList.remove('active');
  gameScreen.classList.add('active');
  // Wait for layout, then size canvas
  requestAnimationFrame(() => requestAnimationFrame(resize));
}

function renderMenu() {
  const list = document.getElementById('level-list');
  list.innerHTML = '';
  LEVELS.forEach((lvl, i) => {
    const card = document.createElement('div');
    card.className = 'level-card' + (solved.includes(lvl.id) ? ' solved' : '');
    card.innerHTML = `
      <div class="level-card-left">
        <span class="level-name">${lvl.name}</span>
        <span class="level-meta">${lvl.size}×${lvl.size} · ${lvl.difficulty}</span>
      </div>
      <div class="level-check">
        <svg viewBox="0 0 16 16"><polyline points="3,8 7,12 13,4"/></svg>
      </div>`;
    card.addEventListener('click', () => showGame(i));
    list.appendChild(card);
  });
}

// ── Drawing ───────────────────────────────────────────────────────────────
function draw() {
  if (!ctx || BOARD_PX === 0) return;
  const level = LEVELS[currentLevelIndex];
  const n = level.size;

  ctx.clearRect(0, 0, BOARD_PX, BOARD_PX);

  // Board background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, BOARD_PX, BOARD_PX);

  // Placed rectangles
  rectangles.forEach((rect, idx) => {
    paintRect(rect.r0, rect.c0, rect.r1, rect.c1,
              PALETTE[rect.colorIdx % PALETTE.length], false);
  });

  // Drag preview
  if (dragActive && dragStartCell && dragCurrentCell) {
    paintRect(
      dragStartCell.r, dragStartCell.c,
      dragCurrentCell.r, dragCurrentCell.c,
      { fill: 'rgba(9,146,169,0.15)', stroke: '#0992a9' }, // primary-600 preview
      true
    );
  }

  // Grid lines
  ctx.strokeStyle = '#d8dbdf'; // neutral-200
  ctx.lineWidth = 1;
  for (let i = 0; i <= n; i++) {
    const v = i * CELL;
    ctx.beginPath(); ctx.moveTo(v, 0); ctx.lineTo(v, BOARD_PX); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, v); ctx.lineTo(BOARD_PX, v); ctx.stroke();
  }

  // Clue indicators (orientation hint behind the number)
  level.clues.forEach(clue => drawClueIndicator(clue));

  // Clue numbers (on top of indicators)
  const fontSize = Math.max(11, Math.round(CELL * 0.40));
  ctx.font = `700 ${fontSize}px 'Montserrat', sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#0a363d'; // primary-900
  level.clues.forEach(clue => {
    ctx.fillText(
      String(clue.v),
      clue.c * CELL + CELL / 2,
      clue.r * CELL + CELL / 2
    );
  });
}

// Draw a small orientation-hint rectangle behind a clue number.
// 'h' = wide, 'v' = tall, 's' = square, null = no indicator.
function drawClueIndicator(clue) {
  if (!clue.hint) return;

  const cx = clue.c * CELL + CELL / 2;
  const cy = clue.r * CELL + CELL / 2;
  const max = CELL - 8;

  let iw, ih;
  if (clue.hint === 'h') {
    iw = Math.min(max, CELL * 0.82);
    ih = Math.min(max, CELL * 0.32);
  } else if (clue.hint === 'v') {
    iw = Math.min(max, CELL * 0.32);
    ih = Math.min(max, CELL * 0.82);
  } else {
    iw = ih = Math.min(max, CELL * 0.54);
  }

  const radius = Math.min(4, iw * 0.18, ih * 0.18);
  ctx.beginPath();
  ctx.roundRect(cx - iw / 2, cy - ih / 2, iw, ih, radius);
  ctx.fillStyle   = 'rgba(9,146,169,0.13)';  // primary-600 very subtle
  ctx.fill();
  ctx.strokeStyle = 'rgba(9,146,169,0.55)';  // primary-600 medium
  ctx.lineWidth   = 1.5;
  ctx.stroke();
}

function paintRect(r0, c0, r1, c1, color, dashed) {
  const minR = Math.min(r0, r1), maxR = Math.max(r0, r1);
  const minC = Math.min(c0, c1), maxC = Math.max(c0, c1);
  const pad = Math.max(2, Math.round(CELL * 0.05));
  const x = minC * CELL + pad;
  const y = minR * CELL + pad;
  const w = (maxC - minC + 1) * CELL - pad * 2;
  const h = (maxR - minR + 1) * CELL - pad * 2;
  const r = Math.min(6, CELL * 0.12);

  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
  ctx.fillStyle = color.fill;
  ctx.fill();
  if (dashed) ctx.setLineDash([4, 3]);
  ctx.strokeStyle = color.stroke;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.setLineDash([]);
}

// ── Touch / Pointer Input ─────────────────────────────────────────────────
function cellFromPoint(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const n = LEVELS[currentLevelIndex].size;
  // rect.width is the CSS display size (= BOARD_PX)
  const cellPx = rect.width / n;
  return {
    r: Math.max(0, Math.min(n - 1, Math.floor(y / cellPx))),
    c: Math.max(0, Math.min(n - 1, Math.floor(x / cellPx))),
  };
}

// Use touch events (most reliable on iOS Safari)
canvas.addEventListener('touchstart', e => {
  e.preventDefault();
  const t = e.changedTouches[0];
  dragActive = true;
  dragStartCell = cellFromPoint(t.clientX, t.clientY);
  dragCurrentCell = { ...dragStartCell };
  draw();
}, { passive: false });

canvas.addEventListener('touchmove', e => {
  e.preventDefault();
  if (!dragActive) return;
  const t = e.changedTouches[0];
  dragCurrentCell = cellFromPoint(t.clientX, t.clientY);
  draw();
}, { passive: false });

canvas.addEventListener('touchend', e => {
  e.preventDefault();
  if (!dragActive) return;
  const t = e.changedTouches[0];
  dragCurrentCell = cellFromPoint(t.clientX, t.clientY);
  placeRect();
  dragActive = false;
  draw();
  checkWin();
}, { passive: false });

canvas.addEventListener('touchcancel', () => {
  dragActive = false;
  draw();
});

// Mouse fallback for desktop testing
canvas.addEventListener('mousedown', e => {
  dragActive = true;
  dragStartCell = cellFromPoint(e.clientX, e.clientY);
  dragCurrentCell = { ...dragStartCell };
  draw();
});
canvas.addEventListener('mousemove', e => {
  if (!dragActive) return;
  dragCurrentCell = cellFromPoint(e.clientX, e.clientY);
  draw();
});
canvas.addEventListener('mouseup', e => {
  if (!dragActive) return;
  dragCurrentCell = cellFromPoint(e.clientX, e.clientY);
  placeRect();
  dragActive = false;
  draw();
  checkWin();
});

// ── Game Logic ────────────────────────────────────────────────────────────
function placeRect() {
  if (!dragStartCell || !dragCurrentCell) return;
  const r0 = Math.min(dragStartCell.r, dragCurrentCell.r);
  const r1 = Math.max(dragStartCell.r, dragCurrentCell.r);
  const c0 = Math.min(dragStartCell.c, dragCurrentCell.c);
  const c1 = Math.max(dragStartCell.c, dragCurrentCell.c);

  // Remove rectangles overlapping this area
  rectangles = rectangles.filter(rect => !overlaps(rect, r0, c0, r1, c1));

  // Pick a color distinct from neighbours
  const usedColors = new Set(
    rectangles
      .filter(rect => isAdjacent(rect, r0, c0, r1, c1))
      .map(r => r.colorIdx)
  );
  let colorIdx = 0;
  while (usedColors.has(colorIdx) && colorIdx < PALETTE.length - 1) colorIdx++;

  rectangles.push({ r0, c0, r1, c1, colorIdx });
}

function overlaps(rect, r0, c0, r1, c1) {
  return !(rect.r1 < r0 || rect.r0 > r1 || rect.c1 < c0 || rect.c0 > c1);
}

function isAdjacent(rect, r0, c0, r1, c1) {
  const expand = 1;
  return !(rect.r1 < r0 - expand || rect.r0 > r1 + expand ||
           rect.c1 < c0 - expand || rect.c0 > c1 + expand);
}

function checkWin() {
  const level = LEVELS[currentLevelIndex];
  const n = level.size;

  // 1. Every cell covered exactly once
  const grid = Array.from({ length: n }, () => new Uint8Array(n));
  for (const rect of rectangles) {
    for (let r = rect.r0; r <= rect.r1; r++)
      for (let c = rect.c0; c <= rect.c1; c++)
        grid[r][c]++;
  }
  for (let r = 0; r < n; r++)
    for (let c = 0; c < n; c++)
      if (grid[r][c] !== 1) return;

  // 2. Each rectangle has exactly one clue, area matches
  for (const rect of rectangles) {
    const area = (rect.r1 - rect.r0 + 1) * (rect.c1 - rect.c0 + 1);
    const inside = level.clues.filter(
      cl => cl.r >= rect.r0 && cl.r <= rect.r1 &&
            cl.c >= rect.c0 && cl.c <= rect.c1
    );
    if (inside.length !== 1 || inside[0].v !== area) return;
  }

  // Solved!
  if (!solved.includes(level.id)) solved.push(level.id);
  const nextIdx = currentLevelIndex + 1;
  const hasNext = nextIdx < LEVELS.length;
  winMsg.textContent = hasNext
    ? 'Weiter zum nächsten Rätsel?'
    : 'Alle Rätsel gelöst! 🎉';
  btnNext.textContent = hasNext ? 'Nächstes Rätsel →' : 'Zurück zum Menü';
  winBanner.classList.add('visible');
}

// ── Buttons ───────────────────────────────────────────────────────────────
document.getElementById('btn-back').addEventListener('click', showMenu);

document.getElementById('btn-reset').addEventListener('click', () => {
  rectangles = [];
  winBanner.classList.remove('visible');
  draw();
});

btnNext.addEventListener('click', () => {
  const nextIdx = currentLevelIndex + 1;
  if (nextIdx < LEVELS.length) showGame(nextIdx);
  else showMenu();
});

// ── Resize ────────────────────────────────────────────────────────────────
window.addEventListener('resize', () => {
  if (currentLevelIndex >= 0) resize();
});

// ── Boot ──────────────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

showMenu();
