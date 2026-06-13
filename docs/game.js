'use strict';

// Bump this string on every deployment — drives the update indicator on the menu.
const GAME_VERSION = '20260613-10';

// ── Levels ────────────────────────────────────────────────────────────────
// hint: 'h'=horizontal, 'v'=vertical, 's'=square, null=no hint (cross shown)
// timeLimit: seconds allowed for this level

const LEVELS = [
  // ── Level 0: 4×4 — all hints, 2 min ──────────────────────────────────
  // A rows0-1 cols0-1 (2×2=4)  B rows0-1 cols2-3 (2×2=4)
  // C row2    cols0-1 (1×2=2)  D rows2-3 cols2-3 (2×2=4)
  // E row3    cols0-1 (1×2=2)
  {
    id: 0, name: 'Leicht 1', size: 4, difficulty: 'Leicht', timeLimit: 30,
    clues: [
      {r:0, c:0, v:4, hint:'s'},
      {r:1, c:3, v:4, hint:'s'},
      {r:2, c:1, v:2, hint:'h'},
      {r:2, c:2, v:4, hint:'s'},
      {r:3, c:0, v:2, hint:'h'},
    ]
  },

  // ── Level 1: 5×5 — 6/8 hints, 3 min ─────────────────────────────────
  // A row0    cols0-2 (1×3=3,'h')  B rows0-1 cols3-4 (2×2=4,'s')
  // C rows1-2 cols0-1 (2×2=4,null) D rows1-2 col2   (2×1=2,'v')
  // E row2    cols3-4 (1×2=2,'h')  F row3    cols0-2 (1×3=3,'h')
  // G row3    cols3-4 (1×2=2,null) H row4    cols0-4 (1×5=5,'h')
  {
    id: 1, name: 'Leicht 2', size: 5, difficulty: 'Leicht', timeLimit: 75,
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

  // ── Level 2: 6×6 — 8/12 hints, 5 min ────────────────────────────────
  // A rows0-1 cols0-1 (2×2=4,'s')  B row0    cols2-3 (1×2=2,'h')
  // C rows0-1 cols4-5 (2×2=4,'s')  D row1    cols2-3 (1×2=2,null)
  // E row2    cols0-2 (1×3=3,'h')  F row2    cols3-5 (1×3=3,'h')
  // G rows3-5 col0   (3×1=3,'v')  H row3    cols1-3 (1×3=3,null)
  // I row3    cols4-5 (1×2=2,null) J row4    cols1-2 (1×2=2,'h')
  // K row4    cols3-5 (1×3=3,'h')  L row5    cols1-5 (1×5=5,'h')
  {
    id: 2, name: 'Mittel 1', size: 6, difficulty: 'Mittel', timeLimit: 120,
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

  // ── Level 3: 7×7 — 7/12 hints, 7 min ────────────────────────────────
  // A rows0-1 cols0-2 (2×3=6,'h')  B row0    cols3-6 (1×4=4,null)
  // C row1    cols3-6 (1×4=4,null) D rows2-3 cols0-1 (2×2=4,'s')
  // E row2    cols2-4 (1×3=3,'h')  F rows2-3 cols5-6 (2×2=4,'s')
  // G row3    cols2-4 (1×3=3,null) H rows4-5 cols0-2 (2×3=6,'h')
  // I row4    cols3-5 (1×3=3,null) J rows4-6 col6   (3×1=3,'v')
  // K row5    cols3-5 (1×3=3,null) L row6    cols0-5 (1×6=6,'h')
  {
    id: 3, name: 'Mittel 2', size: 7, difficulty: 'Mittel', timeLimit: 210,
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

  // ── Level 4: 8×8 — 5/15 hints, 10 min ───────────────────────────────
  // A rows0-1 cols0-3 (2×4=8,'h')  B rows0-1 cols4-5 (2×2=4,null)
  // C rows0-1 cols6-7 (2×2=4,null) D rows2-3 cols0-1 (2×2=4,null)
  // E row2    cols2-4 (1×3=3,null) F rows2-3 cols5-7 (2×3=6,'h')
  // G row3    cols2-4 (1×3=3,null) H rows4-5 cols0-2 (2×3=6,'h')
  // I row4    cols3-5 (1×3=3,null) J rows4-5 cols6-7 (2×2=4,'s')
  // K row5    cols3-5 (1×3=3,null) L row6    cols0-3 (1×4=4,null)
  // M row6    cols4-7 (1×4=4,null) N row7    cols0-3 (1×4=4,null)
  // O row7    cols4-7 (1×4=4,'h')
  {
    id: 4, name: 'Schwer 1', size: 8, difficulty: 'Schwer', timeLimit: 360,
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

// ── Palette ───────────────────────────────────────────────────────────────
const PALETTE = [
  { fill: 'rgba(57,212,239,0.22)',  stroke: '#0992a9' },
  { fill: 'rgba(222,7,190,0.18)',   stroke: '#a90a91' },
  { fill: 'rgba(211,238,58,0.30)',  stroke: '#6d7f0b' },
  { fill: 'rgba(32,172,118,0.25)',  stroke: '#20ac76' },
  { fill: 'rgba(142,222,236,0.30)', stroke: '#0a6e7f' },
  { fill: 'rgba(235,142,221,0.28)', stroke: '#7f0b6d' },
  { fill: 'rgba(221,235,142,0.35)', stroke: '#91a90a' },
  { fill: 'rgba(15,144,230,0.22)',  stroke: '#0992a9' },
  { fill: 'rgba(190,222,7,0.28)',   stroke: '#4f5c0a' },
  { fill: 'rgba(6,192,223,0.22)',   stroke: '#0a505c' },
];

// ── Persistence ───────────────────────────────────────────────────────────
const STORAGE_KEY = 'patches_v1';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      solved = Array.isArray(data.solved) ? data.solved : [];
    }
  } catch (_) { solved = []; }
}

async function checkForUpdate() {
  const btn = document.getElementById('btn-hard-reset');
  btn.textContent = '↺ Spiel zurücksetzen';
  btn.classList.remove('has-update');
  try {
    const res = await fetch('./version.json', { cache: 'no-store' });
    if (!res.ok) return;
    const { version: serverVersion } = await res.json();
    latestServerVersion = serverVersion;
    // Compare against the last acknowledged version (set when user clicks reset)
    const ackedVersion = localStorage.getItem('patches_version_ack') || GAME_VERSION;
    if (serverVersion && serverVersion !== ackedVersion) {
      btn.textContent = 'Aktualisierung vorhanden — Spiel zurücksetzen';
      btn.classList.add('has-update');
    }
  } catch (_) {}
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ solved }));
  } catch (_) {}
}

function isUnlocked(idx) {
  if (idx === 0) return true;
  return solved.includes(LEVELS[idx - 1].id);
}

// ── App State ─────────────────────────────────────────────────────────────
let latestServerVersion = null; // populated by checkForUpdate
let currentLevelIndex = -1;
let rectangles     = [];
let solved         = [];
let dragActive     = false;
let dragStartCell  = null;
let dragCurrentCell = null;
let CELL = 0;
let BOARD_PX = 0;
let DPR = 1;

// Timer state
let timerInterval  = null;
let timeRemaining  = 0;
let timerRunning   = false;

// ── DOM ───────────────────────────────────────────────────────────────────
const menuScreen    = document.getElementById('menu');
const gameScreen    = document.getElementById('game');
const canvas        = document.getElementById('canvas');
const ctx           = canvas.getContext('2d');
const titleEl       = document.getElementById('game-title');
const timerEl       = document.getElementById('timer');
const winBanner     = document.getElementById('win-banner');
const winMsg        = document.getElementById('win-msg');
const btnNext       = document.getElementById('btn-next');
const timeoutBanner = document.getElementById('timeout-banner');
const boardEl       = document.getElementById('board');

// ── Timer ─────────────────────────────────────────────────────────────────
function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function startTimer() {
  stopTimer();
  timerRunning = true;
  timerEl.classList.remove('stopped', 'urgent');
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    if (!timerRunning) return;
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      stopTimer();
      onTimeout();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timerRunning = false;
}

function updateTimerDisplay() {
  timerEl.textContent = formatTime(Math.max(0, timeRemaining));
  timerEl.classList.toggle('urgent', timeRemaining <= 30 && timeRemaining > 0);
}

function onTimeout() {
  timerEl.classList.add('stopped');
  timeoutBanner.classList.add('visible');
}

// ── Navigation ────────────────────────────────────────────────────────────
function showMenu() {
  stopTimer();
  menuScreen.classList.add('active');
  gameScreen.classList.remove('active');
  currentLevelIndex = -1;
  renderMenu();
}

function showGame(idx) {
  currentLevelIndex = idx;
  rectangles  = [];
  dragActive  = false;
  winBanner.classList.remove('visible');
  timeoutBanner.classList.remove('visible');
  timerEl.classList.remove('stopped', 'urgent');
  titleEl.textContent = LEVELS[idx].name;
  timeRemaining = LEVELS[idx].timeLimit;
  updateTimerDisplay();
  menuScreen.classList.remove('active');
  gameScreen.classList.add('active');
  requestAnimationFrame(() => requestAnimationFrame(() => {
    resize();
    startTimer();
  }));
}

function renderMenu() {
  const list = document.getElementById('level-list');
  list.innerHTML = '';
  LEVELS.forEach((lvl, i) => {
    const unlocked = isUnlocked(i);
    const isSolved = solved.includes(lvl.id);
    const card = document.createElement('div');
    card.className = 'level-card' +
      (isSolved  ? ' solved'  : '') +
      (!unlocked ? ' locked' : '');

    const timeStr = formatTime(lvl.timeLimit);

    let badgeHtml;
    if (isSolved) {
      badgeHtml = `<div class="level-check">
        <svg viewBox="0 0 16 16"><polyline points="3,8 7,12 13,4"/></svg>
      </div>`;
    } else if (!unlocked) {
      badgeHtml = `<div class="level-lock">🔒</div>`;
    } else {
      badgeHtml = `<span class="level-time">${timeStr}</span>`;
    }

    card.innerHTML = `
      <div class="level-card-left">
        <span class="level-name">${lvl.name}</span>
        <span class="level-meta">${lvl.size}×${lvl.size} · ${lvl.difficulty}</span>
      </div>
      <div class="level-badge">${badgeHtml}</div>`;

    if (unlocked) card.addEventListener('click', () => showGame(i));
    list.appendChild(card);
  });
}

// ── Sizing ────────────────────────────────────────────────────────────────
function resize() {
  if (currentLevelIndex < 0) return;
  const wrap = document.getElementById('board-wrap');
  const n    = LEVELS[currentLevelIndex].size;
  const wrapRect = wrap.getBoundingClientRect();
  const availW = Math.floor(wrapRect.width  - 32);
  const availH = Math.floor(wrapRect.height - 12);
  const logicalSize = Math.max(80, Math.min(availW, availH));

  CELL     = Math.floor(logicalSize / n);
  BOARD_PX = CELL * n;
  DPR      = window.devicePixelRatio || 1;

  canvas.width  = BOARD_PX * DPR;
  canvas.height = BOARD_PX * DPR;
  canvas.style.width  = BOARD_PX + 'px';
  canvas.style.height = BOARD_PX + 'px';
  boardEl.style.width  = BOARD_PX + 'px';
  boardEl.style.height = BOARD_PX + 'px';

  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  draw();
}

// ── Drawing ───────────────────────────────────────────────────────────────
function draw() {
  if (!ctx || BOARD_PX === 0) return;
  const level = LEVELS[currentLevelIndex];
  const n = level.size;

  ctx.clearRect(0, 0, BOARD_PX, BOARD_PX);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, BOARD_PX, BOARD_PX);

  ctx.save();
  ctx.beginPath();
  ctx.rect(0, 0, BOARD_PX, BOARD_PX);
  ctx.clip();

  // Clue indicators — drawn first so rectangles go on top
  level.clues.forEach(clue => drawClueIndicator(clue));

  // Clue numbers — drawn before rectangles, will be covered by selections
  const fontSize = Math.max(11, Math.round(CELL * 0.40));
  ctx.font = `700 ${fontSize}px 'Montserrat', sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#0a363d';
  level.clues.forEach(clue => {
    ctx.fillText(String(clue.v),
      clue.c * CELL + CELL / 2,
      clue.r * CELL + CELL / 2);
  });

  // Placed rectangles — red if invalid (wrong area, orientation, or clue count)
  const ERROR_COLOR = { fill: 'rgba(234,56,46,0.18)', stroke: '#ea382e' };
  rectangles.forEach(rect => {
    const ok = rectStatus(rect.r0, rect.c0, rect.r1, rect.c1) === 'valid';
    paintRect(rect.r0, rect.c0, rect.r1, rect.c1,
      ok ? PALETTE[rect.colorIdx % PALETTE.length] : ERROR_COLOR, false);
  });

  // Drag preview — red if the current selection would be invalid
  if (dragActive && dragStartCell && dragCurrentCell) {
    const pr0 = Math.min(dragStartCell.r, dragCurrentCell.r);
    const pr1 = Math.max(dragStartCell.r, dragCurrentCell.r);
    const pc0 = Math.min(dragStartCell.c, dragCurrentCell.c);
    const pc1 = Math.max(dragStartCell.c, dragCurrentCell.c);
    const ok = rectStatus(pr0, pc0, pr1, pc1) === 'valid';
    paintRect(pr0, pc0, pr1, pc1,
      ok ? { fill: 'rgba(9,146,169,0.15)', stroke: '#0992a9' }
         : { fill: 'rgba(234,56,46,0.12)', stroke: '#ea382e' },
      true);
  }

  // Grid lines (always on top so the grid structure stays visible)
  ctx.strokeStyle = '#d8dbdf';
  ctx.lineWidth = 1;
  for (let i = 0; i <= n; i++) {
    const v = i * CELL;
    ctx.beginPath(); ctx.moveTo(v, 0); ctx.lineTo(v, BOARD_PX); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, v); ctx.lineTo(BOARD_PX, v); ctx.stroke();
  }

  ctx.restore();
}

// Orientation indicator behind a clue number.
// Size is derived from the actual font size + inner padding, so the rectangle
// always wraps the number with comfortable breathing room.
// hint null → "+" cross (no directional info)
// hint 'h'/'v'/'s' → teal rectangle with matching aspect ratio
function drawClueIndicator(clue) {
  const cx = clue.c * CELL + CELL / 2;
  const cy = clue.r * CELL + CELL / 2;

  // Clip to the same inner area as a selection rect so the indicator
  // never extends beyond the selection rectangle's padding
  const selPad = Math.max(2, Math.round(CELL * 0.05));
  ctx.save();
  ctx.beginPath();
  ctx.rect(clue.c * CELL + selPad, clue.r * CELL + selPad, CELL - selPad * 2, CELL - selPad * 2);
  ctx.clip();

  const fontSize  = Math.max(11, Math.round(CELL * 0.40));
  const innerPad  = Math.max(5, Math.round(CELL * 0.15)); // padding around text
  const snug      = fontSize + innerPad * 2;              // rect snug around number
  const maxDim    = CELL - 4;
  const elongated = Math.min(maxDim, snug * 2.4);

  if (!clue.hint) {
    // "+" cross: two bars, each snug-height thick and elongated-length long
    const thick = Math.min(maxDim, snug);
    const arm   = Math.min(maxDim, elongated);
    const r     = Math.min(4, thick * 0.25);

    ctx.fillStyle   = 'rgba(96,111,133,0.12)';
    ctx.strokeStyle = 'rgba(96,111,133,0.42)';
    ctx.lineWidth   = 1.5;

    ctx.beginPath();
    ctx.roundRect(cx - arm / 2, cy - thick / 2, arm, thick, r);
    ctx.fill(); ctx.stroke();

    ctx.beginPath();
    ctx.roundRect(cx - thick / 2, cy - arm / 2, thick, arm, r);
    ctx.fill(); ctx.stroke();
    ctx.restore();
    return;
  }

  let iw, ih;
  if (clue.hint === 'h') {
    ih = Math.min(maxDim, snug);
    iw = Math.min(maxDim, elongated);
  } else if (clue.hint === 'v') {
    iw = Math.min(maxDim, snug);
    ih = Math.min(maxDim, elongated);
  } else {
    iw = ih = Math.min(maxDim, Math.round(snug * 1.15));
  }

  const rr = Math.min(5, iw * 0.2, ih * 0.2);
  ctx.beginPath();
  ctx.roundRect(cx - iw / 2, cy - ih / 2, iw, ih, rr);
  ctx.fillStyle   = 'rgba(9,146,169,0.13)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(9,146,169,0.55)';
  ctx.lineWidth   = 1.5;
  ctx.stroke();
  ctx.restore();
}

function paintRect(r0, c0, r1, c1, color, dashed) {
  const minR = Math.min(r0, r1), maxR = Math.max(r0, r1);
  const minC = Math.min(c0, c1), maxC = Math.max(c0, c1);
  const pad = Math.max(2, Math.round(CELL * 0.05));
  const x = minC * CELL + pad;
  const y = minR * CELL + pad;
  const w = (maxC - minC + 1) * CELL - pad * 2;
  const h = (maxR - minR + 1) * CELL - pad * 2;
  const radius = Math.min(14, CELL * 0.22);

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

// ── Input ─────────────────────────────────────────────────────────────────
function cellFromPoint(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const n = LEVELS[currentLevelIndex].size;
  const cellPx = rect.width / n;
  return {
    r: Math.max(0, Math.min(n - 1, Math.floor(y / cellPx))),
    c: Math.max(0, Math.min(n - 1, Math.floor(x / cellPx))),
  };
}

canvas.addEventListener('touchstart', e => {
  e.preventDefault();
  if (!timerRunning) return;
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

canvas.addEventListener('touchcancel', () => { dragActive = false; draw(); });

canvas.addEventListener('mousedown', e => {
  if (!timerRunning) return;
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

// Returns 'valid' if the rectangle has exactly one clue, correct area,
// and matching orientation hint. Returns 'invalid' otherwise.
function rectStatus(r0, c0, r1, c1) {
  const level = LEVELS[currentLevelIndex];
  const rows = r1 - r0 + 1;
  const cols = c1 - c0 + 1;
  const area = rows * cols;
  const inside = level.clues.filter(
    cl => cl.r >= r0 && cl.r <= r1 && cl.c >= c0 && cl.c <= c1
  );
  if (inside.length !== 1) return 'invalid';
  const clue = inside[0];
  if (area !== clue.v) return 'invalid';
  if (area > 1 && clue.hint !== null) {
    if (clue.hint === 'h' && cols <= rows) return 'invalid';
    if (clue.hint === 'v' && rows <= cols) return 'invalid';
    if (clue.hint === 's' && rows !== cols) return 'invalid';
  }
  return 'valid';
}

function placeRect() {
  if (!dragStartCell || !dragCurrentCell) return;
  const r0 = Math.min(dragStartCell.r, dragCurrentCell.r);
  const r1 = Math.max(dragStartCell.r, dragCurrentCell.r);
  const c0 = Math.min(dragStartCell.c, dragCurrentCell.c);
  const c1 = Math.max(dragStartCell.c, dragCurrentCell.c);

  rectangles = rectangles.filter(rect => !overlaps(rect, r0, c0, r1, c1));

  const usedColors = new Set(
    rectangles.filter(rect => isAdjacent(rect, r0, c0, r1, c1)).map(r => r.colorIdx)
  );
  let colorIdx = 0;
  while (usedColors.has(colorIdx) && colorIdx < PALETTE.length - 1) colorIdx++;

  rectangles.push({ r0, c0, r1, c1, colorIdx });
}

function overlaps(rect, r0, c0, r1, c1) {
  return !(rect.r1 < r0 || rect.r0 > r1 || rect.c1 < c0 || rect.c0 > c1);
}

function isAdjacent(rect, r0, c0, r1, c1) {
  return !(rect.r1 < r0-1 || rect.r0 > r1+1 || rect.c1 < c0-1 || rect.c0 > c1+1);
}

function checkWin() {
  const level = LEVELS[currentLevelIndex];
  const n = level.size;

  const grid = Array.from({ length: n }, () => new Uint8Array(n));
  for (const rect of rectangles) {
    for (let r = rect.r0; r <= rect.r1; r++)
      for (let c = rect.c0; c <= rect.c1; c++)
        grid[r][c]++;
  }
  for (let r = 0; r < n; r++)
    for (let c = 0; c < n; c++)
      if (grid[r][c] !== 1) return;

  for (const rect of rectangles) {
    const area = (rect.r1 - rect.r0 + 1) * (rect.c1 - rect.c0 + 1);
    const inside = level.clues.filter(
      cl => cl.r >= rect.r0 && cl.r <= rect.r1 && cl.c >= rect.c0 && cl.c <= rect.c1
    );
    if (inside.length !== 1 || inside[0].v !== area) return;
  }

  // Solved!
  stopTimer();
  timerEl.classList.add('stopped');
  if (!solved.includes(level.id)) {
    solved.push(level.id);
    saveProgress();
  }

  const nextIdx = currentLevelIndex + 1;
  const hasNext = nextIdx < LEVELS.length && isUnlocked(nextIdx);
  // isUnlocked(nextIdx) will now be true since we just solved current
  winMsg.textContent = nextIdx < LEVELS.length
    ? 'Weiter zum nächsten Rätsel?'
    : 'Alle Rätsel gelöst! 🎉';
  btnNext.textContent = nextIdx < LEVELS.length ? 'Nächstes Rätsel →' : 'Zurück zum Menü';
  winBanner.classList.add('visible');
}

// ── Buttons ───────────────────────────────────────────────────────────────
document.getElementById('btn-back').addEventListener('click', showMenu);

document.getElementById('btn-reset').addEventListener('click', () => {
  rectangles = [];
  winBanner.classList.remove('visible');
  timeoutBanner.classList.remove('visible');
  timerEl.classList.remove('stopped');
  timeRemaining = LEVELS[currentLevelIndex].timeLimit;
  startTimer();
  draw();
});

btnNext.addEventListener('click', () => {
  const nextIdx = currentLevelIndex + 1;
  if (nextIdx < LEVELS.length) showGame(nextIdx);
  else showMenu();
});

document.getElementById('btn-retry').addEventListener('click', () => {
  rectangles = [];
  timeoutBanner.classList.remove('visible');
  timeRemaining = LEVELS[currentLevelIndex].timeLimit;
  startTimer();
  draw();
});

window.addEventListener('resize', () => { if (currentLevelIndex >= 0) resize(); });

// ── Hard Reset ────────────────────────────────────────────────────────────
document.getElementById('btn-hard-reset').addEventListener('click', async () => {
  // Clear game progress
  try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}

  // Mark this server version as acknowledged so the update banner
  // doesn't reappear after the reload (until a newer version ships)
  if (latestServerVersion) {
    try { localStorage.setItem('patches_version_ack', latestServerVersion); } catch (_) {}
  }

  // Clear all SW caches
  if ('caches' in window) {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => caches.delete(k)));
  }

  // Unregister service workers so they re-install fresh
  if ('serviceWorker' in navigator) {
    const regs = await navigator.serviceWorker.getRegistrations();
    await Promise.all(regs.map(r => r.unregister()));
  }

  // Hard reload — bypasses browser cache
  window.location.reload(true);
});

// ── Boot ──────────────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

loadProgress();
checkForUpdate();
showMenu();
