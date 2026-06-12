'use strict';

// ── Verified Shikaku Levels ───────────────────────────────────────────────
// Every level is constructed from a known partition, then clues are derived.
// Format: clues: [{r, c, v}] where v = area of the rectangle covering (r,c).

const LEVELS = [
  // ── Level 0: 4×4 (16 cells) ──────────────────────────────────────────
  // Partition:
  //   A rows0-1 cols0-1 (4)   B rows0-1 cols2-3 (4)
  //   C row2    cols0-1 (2)   D rows2-3 cols2-3 (4)
  //   E row3    cols0-1 (2)
  {
    id: 0, name: 'Leicht 1', size: 4, difficulty: 'Leicht',
    clues: [
      {r:0, c:0, v:4},
      {r:1, c:3, v:4},
      {r:2, c:1, v:2},
      {r:2, c:2, v:4},
      {r:3, c:0, v:2},
    ]
  },

  // ── Level 1: 5×5 (25 cells) ──────────────────────────────────────────
  // Partition:
  //   A row0    cols0-2 (3)   B rows0-1 cols3-4 (4)
  //   C rows1-2 cols0-1 (4)   D rows1-2 col2   (2)
  //   E row2    cols3-4 (2)   F row3    cols0-2 (3)
  //   G row3    cols3-4 (2)   H row4    cols0-4 (5)
  {
    id: 1, name: 'Leicht 2', size: 5, difficulty: 'Leicht',
    clues: [
      {r:0, c:1, v:3},
      {r:0, c:4, v:4},
      {r:1, c:0, v:4},
      {r:2, c:2, v:2},
      {r:2, c:3, v:2},
      {r:3, c:1, v:3},
      {r:3, c:4, v:2},
      {r:4, c:2, v:5},
    ]
  },

  // ── Level 2: 6×6 (36 cells) ──────────────────────────────────────────
  // Partition:
  //   A rows0-1 cols0-1 (4)   B row0    cols2-3 (2)
  //   C rows0-1 cols4-5 (4)   D row1    cols2-3 (2)
  //   E row2    cols0-2 (3)   F row2    cols3-5 (3)
  //   G rows3-5 col0   (3)   H row3    cols1-3 (3)
  //   I row3    cols4-5 (2)   J row4    cols1-2 (2)
  //   K row4    cols3-5 (3)   L row5    cols1-5 (5)
  {
    id: 2, name: 'Mittel 1', size: 6, difficulty: 'Mittel',
    clues: [
      {r:0, c:1, v:4},
      {r:0, c:2, v:2},
      {r:1, c:4, v:4},
      {r:1, c:3, v:2},
      {r:2, c:1, v:3},
      {r:2, c:4, v:3},
      {r:4, c:0, v:3},
      {r:3, c:2, v:3},
      {r:3, c:5, v:2},
      {r:4, c:2, v:2},
      {r:4, c:4, v:3},
      {r:5, c:3, v:5},
    ]
  },

  // ── Level 3: 7×7 (49 cells) — bigger rectangles ──────────────────────
  // Partition:
  //   A rows0-1 cols0-2 (6)   B row0    cols3-6 (4)
  //   C row1    cols3-6 (4)   D rows2-3 cols0-1 (4)
  //   E row2    cols2-4 (3)   F rows2-3 cols5-6 (4)
  //   G row3    cols2-4 (3)   H rows4-5 cols0-2 (6)
  //   I row4    cols3-5 (3)   J rows4-6 col6   (3)
  //   K row5    cols3-5 (3)   L row6    cols0-5 (6)
  // Total: 6+4+4+4+3+4+3+6+3+3+3+6 = 49 ✓
  {
    id: 3, name: 'Mittel 2', size: 7, difficulty: 'Mittel',
    clues: [
      {r:0, c:1, v:6},
      {r:0, c:5, v:4},
      {r:1, c:4, v:4},
      {r:2, c:0, v:4},
      {r:2, c:3, v:3},
      {r:2, c:5, v:4},
      {r:3, c:3, v:3},
      {r:4, c:1, v:6},
      {r:4, c:4, v:3},
      {r:5, c:6, v:3},
      {r:5, c:4, v:3},
      {r:6, c:3, v:6},
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
  {
    id: 4, name: 'Schwer 1', size: 8, difficulty: 'Schwer',
    clues: [
      {r:1, c:2, v:8},
      {r:0, c:4, v:4},
      {r:1, c:7, v:4},
      {r:2, c:0, v:4},
      {r:2, c:3, v:3},
      {r:3, c:6, v:6},
      {r:3, c:4, v:3},
      {r:5, c:1, v:6},
      {r:4, c:4, v:3},
      {r:4, c:6, v:4},
      {r:5, c:3, v:3},
      {r:6, c:1, v:4},
      {r:6, c:6, v:4},
      {r:7, c:2, v:4},
      {r:7, c:6, v:4},
    ]
  },
];

// ── Palette ───────────────────────────────────────────────────────────────
const PALETTE = [
  { fill: 'rgba(168,197,218,0.6)', stroke: '#5A8EAF' },
  { fill: 'rgba(159,196,154,0.6)', stroke: '#4A8645' },
  { fill: 'rgba(232,196,160,0.6)', stroke: '#B87030' },
  { fill: 'rgba(196,168,212,0.6)', stroke: '#8050A0' },
  { fill: 'rgba(240,196,160,0.6)', stroke: '#C06020' },
  { fill: 'rgba(160,196,196,0.6)', stroke: '#308080' },
  { fill: 'rgba(212,184,168,0.6)', stroke: '#805040' },
  { fill: 'rgba(184,212,168,0.6)', stroke: '#408030' },
  { fill: 'rgba(212,168,184,0.6)', stroke: '#803050' },
  { fill: 'rgba(184,196,212,0.6)', stroke: '#405070' },
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
  ctx.fillStyle = '#EDE8DC';
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
      { fill: 'rgba(123,158,107,0.25)', stroke: '#7B9E6B' },
      true
    );
  }

  // Grid lines
  ctx.strokeStyle = '#C4B99A';
  ctx.lineWidth = 1;
  for (let i = 0; i <= n; i++) {
    const v = i * CELL;
    ctx.beginPath(); ctx.moveTo(v, 0); ctx.lineTo(v, BOARD_PX); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, v); ctx.lineTo(BOARD_PX, v); ctx.stroke();
  }

  // Clue numbers
  const fontSize = Math.max(11, Math.round(CELL * 0.40));
  ctx.font = `600 ${fontSize}px -apple-system, BlinkMacSystemFont, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#3D3228';
  level.clues.forEach(clue => {
    ctx.fillText(
      String(clue.v),
      clue.c * CELL + CELL / 2,
      clue.r * CELL + CELL / 2
    );
  });
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
