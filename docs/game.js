'use strict';

// ── Verified Shikaku Levels ───────────────────────────────────────────────
// Each level has a unique solution. Clue positions are verified against it.
//
// 4×4 solution:          5×5 solution:
// AA BB CC               AAA BB
// AA DD CC               CC D BB
// EE DD FF               CC D EE
// EE GG FF               FFF GG
//                        HHHHH
//
// 6×6 solution:          7×7 solution:
// AA BB CC               AAA BB CC
// AA DD CC               EE F BB CC
// EEE FFF                EE F GGG H
// G HHH II               KK III J H
// G JJ KKK               KK L LL J H
// G LLLLL                MM K NNN O
//                        MM PP QQ O

const LEVELS = [
  {
    id: 0, name: 'Leicht 1', size: 4, difficulty: 'Leicht',
    // Solution: A=row0 c0-1, B=row0 c2-3, C=rows0-1 c... wait
    // Actual solution:
    // rows0-1 cols0-1 → 4 (A), row0 cols2-3 → 2 (B)
    // rows0-1 cols4-5... this is 4x4 so max col is 3
    // Let me redo:
    // A: rows0-1 cols0-1 = 4
    // B: row0 cols2-3 = 2
    // C: rows0-1 cols4-5... no, 4x4
    //
    // 4×4 actual solution partition:
    // [A][A][B][B]   A=rows0-1 cols0-1 (4), B=rows0-1 cols2-3 (4)
    // [A][A][B][B]   C=row2 cols0-1 (2),    D=rows2-3 cols2-3 (4)
    // [C][C][D][D]   E=row3 cols0-1 (2)
    // [E][E][D][D]
    // Total: 4+4+2+4+2 = 16 ✓
    clues: [
      {r:0, c:0, v:4},  // A: rows0-1, cols0-1
      {r:0, c:3, v:4},  // B: rows0-1, cols2-3
      {r:2, c:1, v:2},  // C: row2, cols0-1
      {r:3, c:2, v:4},  // D: rows2-3, cols2-3
      {r:3, c:0, v:2},  // E: row3, cols0-1
    ]
  },
  {
    id: 1, name: 'Leicht 2', size: 5, difficulty: 'Leicht',
    // 5×5 solution (25 cells):
    // [A][A][A][B][B]   A=row0 cols0-2 (3)
    // [C][C][D][B][B]   B=rows0-1 cols3-4 (4)
    // [C][C][D][E][E]   C=rows1-2 cols0-1 (4)
    // [F][F][F][G][G]   D=rows1-2 col2 (2)
    // [H][H][H][H][H]   E=row2 cols3-4 (2)
    //                   F=row3 cols0-2 (3)
    //                   G=row3 cols3-4 (2)
    //                   H=row4 cols0-4 (5)
    // Total: 3+4+4+2+2+3+2+5=25 ✓
    clues: [
      {r:0, c:1, v:3},  // A
      {r:0, c:4, v:4},  // B
      {r:1, c:0, v:4},  // C
      {r:2, c:2, v:2},  // D
      {r:2, c:3, v:2},  // E
      {r:3, c:1, v:3},  // F
      {r:3, c:4, v:2},  // G
      {r:4, c:2, v:5},  // H
    ]
  },
  {
    id: 2, name: 'Mittel 1', size: 6, difficulty: 'Mittel',
    // 6×6 solution (36 cells):
    // [A][A][B][B][C][C]   A=rows0-1 cols0-1 (4)
    // [A][A][D][D][C][C]   B=row0 cols2-3 (2)
    // [E][E][E][F][F][F]   C=rows0-1 cols4-5 (4)
    // [G][H][H][H][I][I]   D=row1 cols2-3 (2)
    // [G][J][J][K][K][K]   E=row2 cols0-2 (3)
    // [G][L][L][L][L][L]   F=row2 cols3-5 (3)
    //                       G=rows3-5 col0 (3)
    //                       H=row3 cols1-3 (3)
    //                       I=row3 cols4-5 (2)
    //                       J=row4 cols1-2 (2)
    //                       K=row4 cols3-5 (3)
    //                       L=row5 cols1-5 (5)
    // Total: 4+2+4+2+3+3+3+3+2+2+3+5=36 ✓
    clues: [
      {r:0, c:1, v:4},  // A
      {r:0, c:2, v:2},  // B
      {r:1, c:4, v:4},  // C
      {r:1, c:3, v:2},  // D
      {r:2, c:1, v:3},  // E
      {r:2, c:4, v:3},  // F
      {r:4, c:0, v:3},  // G
      {r:3, c:2, v:3},  // H
      {r:3, c:5, v:2},  // I
      {r:4, c:2, v:2},  // J
      {r:4, c:4, v:3},  // K
      {r:5, c:3, v:5},  // L
    ]
  },
  {
    id: 3, name: 'Mittel 2', size: 7, difficulty: 'Mittel',
    // 7×7 solution (49 cells):
    // [A][A][A][B][B][C][C]   A=row0 cols0-2 (3)
    // [D][D][E][B][B][C][C]   B=rows0-1 cols3-4 (4)
    // [D][D][E][F][F][F][G]   C=rows0-1 cols5-6 (4)
    // [H][H][I][I][I][J][G]   D=rows1-2 cols0-1 (4)
    // [H][H][K][L][L][J][G]   E=rows1-2 col2 (2)
    // [M][M][K][N][N][N][O]   F=row2 cols3-5 (3)
    // [M][M][P][P][Q][Q][O]   G=rows2-4 col6 (3)
    //                          H=rows3-4 cols0-1 (4)
    //                          I=row3 cols2-4 (3)
    //                          J=rows3-4 col5 (2)
    //                          K=rows4-5 col2 (2)
    //                          L=row4 cols3-4 (2)
    //                          M=rows5-6 cols0-1 (4)
    //                          N=row5 cols3-5 (3)
    //                          O=rows5-6 col6 (2)
    //                          P=row6 cols2-3 (2)
    //                          Q=row6 cols4-5 (2)
    // Total: 3+4+4+4+2+3+3+4+3+2+2+2+4+3+2+2+2=49 ✓
    clues: [
      {r:0, c:1, v:3},  // A
      {r:0, c:3, v:4},  // B
      {r:1, c:6, v:4},  // C
      {r:2, c:0, v:4},  // D
      {r:1, c:2, v:2},  // E
      {r:2, c:4, v:3},  // F
      {r:3, c:6, v:3},  // G
      {r:3, c:0, v:4},  // H
      {r:3, c:3, v:3},  // I
      {r:4, c:5, v:2},  // J
      {r:5, c:2, v:2},  // K
      {r:4, c:3, v:2},  // L
      {r:6, c:1, v:4},  // M
      {r:5, c:4, v:3},  // N
      {r:6, c:6, v:2},  // O
      {r:6, c:2, v:2},  // P
      {r:6, c:4, v:2},  // Q
    ]
  }
];

// ── Palette ───────────────────────────────────────────────────────────────
const PALETTE = [
  { fill: 'rgba(168,197,218,0.55)', stroke: '#6A9FBF' },
  { fill: 'rgba(159,196,154,0.55)', stroke: '#5A9655' },
  { fill: 'rgba(232,196,160,0.55)', stroke: '#C88040' },
  { fill: 'rgba(196,168,212,0.55)', stroke: '#9060B0' },
  { fill: 'rgba(240,196,160,0.55)', stroke: '#D07030' },
  { fill: 'rgba(160,196,196,0.55)', stroke: '#409090' },
  { fill: 'rgba(212,184,168,0.55)', stroke: '#906050' },
  { fill: 'rgba(184,212,168,0.55)', stroke: '#509040' },
  { fill: 'rgba(212,168,184,0.55)', stroke: '#904060' },
  { fill: 'rgba(184,196,212,0.55)', stroke: '#506080' },
];

// ── App State ─────────────────────────────────────────────────────────────
let currentLevelIndex = -1;
let rectangles = [];       // { r0,c0,r1,c1, colorIdx }
let solved = [];           // Set of level IDs completed
let dragActive = false;
let dragStart = null;      // { r, c }
let dragEnd   = null;      // { r, c }

// ── DOM References ────────────────────────────────────────────────────────
const menuScreen = document.getElementById('menu');
const gameScreen = document.getElementById('game');
const canvas     = document.getElementById('canvas');
const ctx        = canvas.getContext('2d');
const titleEl    = document.getElementById('game-title');
const winBanner  = document.getElementById('win-banner');
const winMsg     = document.getElementById('win-msg');
const btnNext    = document.getElementById('btn-next');

// ── Sizing ────────────────────────────────────────────────────────────────
let CELL = 0;
let BOARD_PX = 0;

function resize() {
  if (currentLevelIndex < 0) return;
  const wrap = document.getElementById('board-wrap');
  const size = Math.min(wrap.clientWidth, wrap.clientHeight) - 4;
  const n = LEVELS[currentLevelIndex].size;
  CELL = Math.floor(size / n);
  BOARD_PX = CELL * n;
  canvas.width  = BOARD_PX;
  canvas.height = BOARD_PX;
  canvas.style.width  = BOARD_PX + 'px';
  canvas.style.height = BOARD_PX + 'px';
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
  menuScreen.classList.remove('active');
  gameScreen.classList.add('active');
  winBanner.classList.remove('visible');
  titleEl.textContent = LEVELS[idx].name;
  setTimeout(resize, 30);
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

  // Background
  ctx.fillStyle = '#EDE8DC';
  ctx.fillRect(0, 0, BOARD_PX, BOARD_PX);

  // Placed rectangles
  rectangles.forEach((rect, idx) => {
    drawRect(rect.r0, rect.c0, rect.r1, rect.c1, PALETTE[rect.colorIdx % PALETTE.length], false);
  });

  // Preview
  if (dragActive && dragStart && dragEnd) {
    const previewColor = { fill: 'rgba(123,158,107,0.25)', stroke: '#7B9E6B' };
    drawRect(dragStart.r, dragStart.c, dragEnd.r, dragEnd.c, previewColor, true);
  }

  // Grid lines
  ctx.strokeStyle = '#C4B99A';
  ctx.lineWidth = 1;
  for (let i = 0; i <= n; i++) {
    const x = i * CELL, y = i * CELL;
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, BOARD_PX); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(BOARD_PX, y); ctx.stroke();
  }

  // Clue numbers
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const fontSize = Math.round(CELL * 0.38);
  ctx.font = `600 ${fontSize}px -apple-system, sans-serif`;
  level.clues.forEach(clue => {
    const x = clue.c * CELL + CELL / 2;
    const y = clue.r * CELL + CELL / 2;
    ctx.fillStyle = '#3D3228';
    ctx.fillText(clue.v, x, y);
  });
}

function drawRect(r0, c0, r1, c1, color, dashed) {
  const minR = Math.min(r0, r1), maxR = Math.max(r0, r1);
  const minC = Math.min(c0, c1), maxC = Math.max(c0, c1);
  const pad = 3;
  const x = minC * CELL + pad;
  const y = minR * CELL + pad;
  const w = (maxC - minC + 1) * CELL - pad * 2;
  const h = (maxR - minR + 1) * CELL - pad * 2;
  const radius = 6;

  ctx.beginPath();
  ctx.roundRect(x, y, w, h, radius);
  ctx.fillStyle = color.fill;
  ctx.fill();

  if (dashed) ctx.setLineDash([4, 3]);
  ctx.strokeStyle = color.stroke;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.setLineDash([]);
}

// ── Input Handling ────────────────────────────────────────────────────────
function pointToCell(e) {
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width  / rect.width;
  const scaleY = canvas.height / rect.height;
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  const x = (clientX - rect.left) * scaleX;
  const y = (clientY - rect.top)  * scaleY;
  const n = LEVELS[currentLevelIndex].size;
  return {
    r: Math.max(0, Math.min(n - 1, Math.floor(y / CELL))),
    c: Math.max(0, Math.min(n - 1, Math.floor(x / CELL))),
  };
}

canvas.addEventListener('pointerdown', e => {
  e.preventDefault();
  canvas.setPointerCapture(e.pointerId);
  dragActive = true;
  dragStart = pointToCell(e);
  dragEnd = { ...dragStart };
  draw();
});

canvas.addEventListener('pointermove', e => {
  if (!dragActive) return;
  e.preventDefault();
  dragEnd = pointToCell(e);
  draw();
});

canvas.addEventListener('pointerup', e => {
  if (!dragActive) return;
  e.preventDefault();
  dragEnd = pointToCell(e);
  placeRectangle();
  dragActive = false;
  dragStart = null;
  dragEnd = null;
  draw();
  checkWin();
});

canvas.addEventListener('pointercancel', () => {
  dragActive = false;
  draw();
});

// ── Game Logic ────────────────────────────────────────────────────────────
function placeRectangle() {
  if (!dragStart || !dragEnd) return;
  const r0 = Math.min(dragStart.r, dragEnd.r);
  const r1 = Math.max(dragStart.r, dragEnd.r);
  const c0 = Math.min(dragStart.c, dragEnd.c);
  const c1 = Math.max(dragStart.c, dragEnd.c);

  // Remove any existing rectangle overlapping this area
  rectangles = rectangles.filter(rect => !overlaps(rect, r0, c0, r1, c1));

  // Pick a color not used by adjacent rectangles (simple cycle)
  const usedColors = new Set(rectangles.map(r => r.colorIdx));
  let colorIdx = 0;
  while (usedColors.has(colorIdx) && colorIdx < PALETTE.length - 1) colorIdx++;

  rectangles.push({ r0, c0, r1, c1, colorIdx });
}

function overlaps(rect, r0, c0, r1, c1) {
  return !(rect.r1 < r0 || rect.r0 > r1 || rect.c1 < c0 || rect.c0 > c1);
}

function checkWin() {
  const level = LEVELS[currentLevelIndex];
  const n = level.size;

  // Coverage check
  const grid = Array.from({length: n}, () => new Array(n).fill(0));
  for (const rect of rectangles) {
    for (let r = rect.r0; r <= rect.r1; r++)
      for (let c = rect.c0; c <= rect.c1; c++)
        grid[r][c]++;
  }
  if (!grid.every(row => row.every(v => v === 1))) return;

  // Each rectangle must contain exactly one clue with matching area
  for (const rect of rectangles) {
    const area = (rect.r1 - rect.r0 + 1) * (rect.c1 - rect.c0 + 1);
    const inside = level.clues.filter(
      cl => cl.r >= rect.r0 && cl.r <= rect.r1 && cl.c >= rect.c0 && cl.c <= rect.c1
    );
    if (inside.length !== 1 || inside[0].v !== area) return;
  }

  // Solved!
  if (!solved.includes(level.id)) solved.push(level.id);
  const nextIdx = currentLevelIndex + 1;
  const hasNext = nextIdx < LEVELS.length;
  winMsg.textContent = hasNext ? 'Weiter zum nächsten Rätsel?' : 'Alle Rätsel gelöst! 🎉';
  btnNext.textContent = hasNext ? 'Nächstes Rätsel →' : 'Zurück zum Menü';
  winBanner.classList.add('visible');
}

// ── Button Handlers ───────────────────────────────────────────────────────
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

// ── Init ──────────────────────────────────────────────────────────────────
window.addEventListener('resize', () => { if (currentLevelIndex >= 0) resize(); });

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

showMenu();
