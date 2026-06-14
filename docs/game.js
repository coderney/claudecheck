'use strict';

// Bump this string on every deployment — drives the update indicator on the menu.
const GAME_VERSION = '20260614-3';

// ── Levels ────────────────────────────────────────────────────────────────
// hint: 'h'=horizontal, 'v'=vertical, 's'=square, null=no hint (cross shown)
// timeLimit: seconds allowed for this level

const LEVELS = [
  {
    "id": 0,
    "name": "Leicht 1",
    "size": 4,
    "difficulty": "Leicht",
    "timeLimit": 15,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 2,
        "v": 2,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 3,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 1,
    "name": "Leicht 2",
    "size": 4,
    "difficulty": "Leicht",
    "timeLimit": 16,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 4,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 0,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 2,
        "v": 3,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 1,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 3,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 3,
        "c": 0,
        "v": 1,
        "hint": "s"
      }
    ]
  },
  {
    "id": 2,
    "name": "Leicht 3",
    "size": 4,
    "difficulty": "Leicht",
    "timeLimit": 17,
    "clues": [
      {
        "r": 0,
        "c": 0,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 2,
        "v": 3,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 1,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 3,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 3,
        "c": 0,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 3,
        "c": 2,
        "v": 3,
        "hint": "h"
      }
    ]
  },
  {
    "id": 3,
    "name": "Leicht 4",
    "size": 4,
    "difficulty": "Leicht",
    "timeLimit": 18,
    "clues": [
      {
        "r": 0,
        "c": 0,
        "v": 2,
        "hint": "h"
      },
      {
        "r": 0,
        "c": 3,
        "v": 2,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 2,
        "v": 2,
        "hint": null
      },
      {
        "r": 2,
        "c": 2,
        "v": 4,
        "hint": "s"
      }
    ]
  },
  {
    "id": 4,
    "name": "Leicht 5",
    "size": 4,
    "difficulty": "Leicht",
    "timeLimit": 19,
    "clues": [
      {
        "r": 0,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 0,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 0,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 2,
        "c": 2,
        "v": 3,
        "hint": null
      },
      {
        "r": 3,
        "c": 1,
        "v": 1,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 2,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 5,
    "name": "Leicht 6",
    "size": 4,
    "difficulty": "Leicht",
    "timeLimit": 20,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 4,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 3,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 1,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 3,
        "v": 3,
        "hint": null
      },
      {
        "r": 3,
        "c": 1,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 6,
    "name": "Leicht 7",
    "size": 4,
    "difficulty": "Leicht",
    "timeLimit": 21,
    "clues": [
      {
        "r": 0,
        "c": 0,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 1,
        "v": 4,
        "hint": null
      },
      {
        "r": 1,
        "c": 3,
        "v": 3,
        "hint": "v"
      },
      {
        "r": 2,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 2,
        "c": 2,
        "v": 1,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 2,
        "v": 2,
        "hint": null
      }
    ]
  },
  {
    "id": 7,
    "name": "Leicht 8",
    "size": 4,
    "difficulty": "Leicht",
    "timeLimit": 21,
    "clues": [
      {
        "r": 0,
        "c": 2,
        "v": 4,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 2,
        "c": 2,
        "v": 3,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 3,
        "v": 2,
        "hint": null
      },
      {
        "r": 3,
        "c": 0,
        "v": 2,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 3,
        "v": 1,
        "hint": null
      }
    ]
  },
  {
    "id": 8,
    "name": "Leicht 9",
    "size": 4,
    "difficulty": "Leicht",
    "timeLimit": 22,
    "clues": [
      {
        "r": 0,
        "c": 0,
        "v": 2,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 2,
        "v": 6,
        "hint": null
      },
      {
        "r": 1,
        "c": 1,
        "v": 2,
        "hint": null
      },
      {
        "r": 3,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 3,
        "c": 2,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 9,
    "name": "Leicht 10",
    "size": 4,
    "difficulty": "Leicht",
    "timeLimit": 23,
    "clues": [
      {
        "r": 1,
        "c": 0,
        "v": 4,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 2,
        "v": 6,
        "hint": null
      },
      {
        "r": 2,
        "c": 1,
        "v": 2,
        "hint": null
      },
      {
        "r": 2,
        "c": 3,
        "v": 2,
        "hint": null
      },
      {
        "r": 3,
        "c": 1,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 10,
    "name": "Mittel 1",
    "size": 5,
    "difficulty": "Mittel",
    "timeLimit": 24,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 0,
        "c": 3,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 2,
        "v": 5,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 3,
        "v": 6,
        "hint": "h"
      }
    ]
  },
  {
    "id": 11,
    "name": "Mittel 2",
    "size": 5,
    "difficulty": "Mittel",
    "timeLimit": 25,
    "clues": [
      {
        "r": 0,
        "c": 2,
        "v": 5,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 4,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 1,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 3,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 3,
        "c": 1,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 3,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 12,
    "name": "Mittel 3",
    "size": 5,
    "difficulty": "Mittel",
    "timeLimit": 26,
    "clues": [
      {
        "r": 0,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 0,
        "c": 3,
        "v": 3,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 4,
        "v": 3,
        "hint": "v"
      },
      {
        "r": 3,
        "c": 0,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 4,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 4,
        "v": 1,
        "hint": "s"
      }
    ]
  },
  {
    "id": 13,
    "name": "Mittel 4",
    "size": 5,
    "difficulty": "Mittel",
    "timeLimit": 27,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 3,
        "hint": "h"
      },
      {
        "r": 0,
        "c": 3,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 1,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 1,
        "c": 2,
        "v": 1,
        "hint": null
      },
      {
        "r": 3,
        "c": 2,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 3,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 4,
        "v": 3,
        "hint": "v"
      }
    ]
  },
  {
    "id": 14,
    "name": "Mittel 5",
    "size": 5,
    "difficulty": "Mittel",
    "timeLimit": 28,
    "clues": [
      {
        "r": 1,
        "c": 0,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 3,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 3,
        "v": 3,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 0,
        "v": 2,
        "hint": null
      },
      {
        "r": 4,
        "c": 1,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 4,
        "v": 4,
        "hint": "s"
      }
    ]
  },
  {
    "id": 15,
    "name": "Mittel 6",
    "size": 5,
    "difficulty": "Mittel",
    "timeLimit": 29,
    "clues": [
      {
        "r": 0,
        "c": 0,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 2,
        "v": 4,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 1,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 3,
        "v": 2,
        "hint": null
      },
      {
        "r": 3,
        "c": 3,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 3,
        "c": 0,
        "v": 3,
        "hint": "v"
      },
      {
        "r": 4,
        "c": 1,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 16,
    "name": "Mittel 7",
    "size": 5,
    "difficulty": "Mittel",
    "timeLimit": 30,
    "clues": [
      {
        "r": 0,
        "c": 2,
        "v": 5,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 6,
        "hint": null
      },
      {
        "r": 1,
        "c": 3,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 2,
        "v": 4,
        "hint": null
      },
      {
        "r": 4,
        "c": 4,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 4,
        "c": 0,
        "v": 2,
        "hint": null
      }
    ]
  },
  {
    "id": 17,
    "name": "Mittel 8",
    "size": 5,
    "difficulty": "Mittel",
    "timeLimit": 31,
    "clues": [
      {
        "r": 0,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 0,
        "c": 3,
        "v": 3,
        "hint": null
      },
      {
        "r": 2,
        "c": 2,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 4,
        "v": 2,
        "hint": null
      },
      {
        "r": 3,
        "c": 0,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 4,
        "c": 4,
        "v": 2,
        "hint": null
      },
      {
        "r": 4,
        "c": 2,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 18,
    "name": "Mittel 9",
    "size": 5,
    "difficulty": "Mittel",
    "timeLimit": 32,
    "clues": [
      {
        "r": 0,
        "c": 0,
        "v": 2,
        "hint": "h"
      },
      {
        "r": 0,
        "c": 3,
        "v": 6,
        "hint": null
      },
      {
        "r": 1,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 3,
        "c": 2,
        "v": 3,
        "hint": null
      },
      {
        "r": 2,
        "c": 3,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 4,
        "c": 3,
        "v": 2,
        "hint": null
      }
    ]
  },
  {
    "id": 19,
    "name": "Mittel 10",
    "size": 5,
    "difficulty": "Mittel",
    "timeLimit": 32,
    "clues": [
      {
        "r": 2,
        "c": 0,
        "v": 5,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 2,
        "v": 8,
        "hint": null
      },
      {
        "r": 2,
        "c": 1,
        "v": 2,
        "hint": null
      },
      {
        "r": 3,
        "c": 3,
        "v": 6,
        "hint": null
      },
      {
        "r": 4,
        "c": 1,
        "v": 4,
        "hint": "s"
      }
    ]
  },
  {
    "id": 20,
    "name": "Schwer 1",
    "size": 6,
    "difficulty": "Schwer",
    "timeLimit": 33,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 0,
        "c": 4,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 3,
        "v": 4,
        "hint": "h"
      },
      {
        "r": 4,
        "c": 2,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 3,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 4,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 21,
    "name": "Schwer 2",
    "size": 6,
    "difficulty": "Schwer",
    "timeLimit": 34,
    "clues": [
      {
        "r": 0,
        "c": 2,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 0,
        "v": 5,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 2,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 1,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 3,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 4,
        "c": 5,
        "v": 3,
        "hint": "v"
      },
      {
        "r": 5,
        "c": 1,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 22,
    "name": "Schwer 3",
    "size": 6,
    "difficulty": "Schwer",
    "timeLimit": 35,
    "clues": [
      {
        "r": 0,
        "c": 0,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 2,
        "v": 3,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 4,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 2,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 0,
        "v": 3,
        "hint": "v"
      },
      {
        "r": 3,
        "c": 1,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 4,
        "v": 3,
        "hint": "h"
      },
      {
        "r": 4,
        "c": 3,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 5,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 5,
        "c": 1,
        "v": 3,
        "hint": "h"
      }
    ]
  },
  {
    "id": 23,
    "name": "Schwer 4",
    "size": 6,
    "difficulty": "Schwer",
    "timeLimit": 36,
    "clues": [
      {
        "r": 1,
        "c": 0,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 3,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 4,
        "v": 4,
        "hint": null
      },
      {
        "r": 4,
        "c": 0,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 5,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 4,
        "v": 4,
        "hint": "s"
      }
    ]
  },
  {
    "id": 24,
    "name": "Schwer 5",
    "size": 6,
    "difficulty": "Schwer",
    "timeLimit": 37,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 0,
        "c": 4,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 2,
        "c": 2,
        "v": 6,
        "hint": null
      },
      {
        "r": 2,
        "c": 4,
        "v": 2,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 2,
        "v": 4,
        "hint": null
      },
      {
        "r": 5,
        "c": 4,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 25,
    "name": "Schwer 6",
    "size": 6,
    "difficulty": "Schwer",
    "timeLimit": 38,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 4,
        "v": 9,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 1,
        "v": 3,
        "hint": "h"
      },
      {
        "r": 4,
        "c": 0,
        "v": 6,
        "hint": null
      },
      {
        "r": 3,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 2,
        "v": 2,
        "hint": "h"
      },
      {
        "r": 5,
        "c": 4,
        "v": 2,
        "hint": null
      }
    ]
  },
  {
    "id": 26,
    "name": "Schwer 7",
    "size": 6,
    "difficulty": "Schwer",
    "timeLimit": 39,
    "clues": [
      {
        "r": 0,
        "c": 2,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 6,
        "hint": null
      },
      {
        "r": 1,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 1,
        "c": 4,
        "v": 4,
        "hint": null
      },
      {
        "r": 3,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 4,
        "v": 6,
        "hint": null
      },
      {
        "r": 5,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 2,
        "v": 2,
        "hint": null
      }
    ]
  },
  {
    "id": 27,
    "name": "Schwer 8",
    "size": 6,
    "difficulty": "Schwer",
    "timeLimit": 40,
    "clues": [
      {
        "r": 1,
        "c": 1,
        "v": 9,
        "hint": "s"
      },
      {
        "r": 0,
        "c": 4,
        "v": 6,
        "hint": null
      },
      {
        "r": 2,
        "c": 4,
        "v": 3,
        "hint": "h"
      },
      {
        "r": 4,
        "c": 0,
        "v": 3,
        "hint": null
      },
      {
        "r": 3,
        "c": 1,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 3,
        "v": 4,
        "hint": null
      },
      {
        "r": 4,
        "c": 5,
        "v": 3,
        "hint": "v"
      },
      {
        "r": 5,
        "c": 2,
        "v": 4,
        "hint": null
      }
    ]
  },
  {
    "id": 28,
    "name": "Schwer 9",
    "size": 6,
    "difficulty": "Schwer",
    "timeLimit": 41,
    "clues": [
      {
        "r": 0,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 0,
        "c": 3,
        "v": 4,
        "hint": null
      },
      {
        "r": 2,
        "c": 2,
        "v": 6,
        "hint": null
      },
      {
        "r": 1,
        "c": 4,
        "v": 4,
        "hint": null
      },
      {
        "r": 2,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 4,
        "v": 6,
        "hint": null
      },
      {
        "r": 5,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 5,
        "c": 2,
        "v": 4,
        "hint": null
      }
    ]
  },
  {
    "id": 29,
    "name": "Schwer 10",
    "size": 6,
    "difficulty": "Schwer",
    "timeLimit": 42,
    "clues": [
      {
        "r": 1,
        "c": 0,
        "v": 3,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 2,
        "v": 6,
        "hint": null
      },
      {
        "r": 0,
        "c": 4,
        "v": 2,
        "hint": null
      },
      {
        "r": 2,
        "c": 4,
        "v": 6,
        "hint": null
      },
      {
        "r": 2,
        "c": 2,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 4,
        "c": 0,
        "v": 3,
        "hint": null
      },
      {
        "r": 5,
        "c": 1,
        "v": 4,
        "hint": null
      },
      {
        "r": 5,
        "c": 3,
        "v": 4,
        "hint": null
      },
      {
        "r": 5,
        "c": 5,
        "v": 2,
        "hint": "v"
      }
    ]
  },
  {
    "id": 30,
    "name": "Experte 1",
    "size": 7,
    "difficulty": "Experte",
    "timeLimit": 43,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 5,
        "v": 9,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 1,
        "v": 4,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 2,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 3,
        "c": 5,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 5,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 6,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 6,
        "c": 2,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 31,
    "name": "Experte 2",
    "size": 7,
    "difficulty": "Experte",
    "timeLimit": 43,
    "clues": [
      {
        "r": 0,
        "c": 3,
        "v": 7,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 3,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 5,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 4,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 4,
        "c": 6,
        "v": 3,
        "hint": "v"
      },
      {
        "r": 5,
        "c": 0,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 6,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 4,
        "v": 2,
        "hint": "h"
      },
      {
        "r": 6,
        "c": 6,
        "v": 1,
        "hint": "s"
      }
    ]
  },
  {
    "id": 32,
    "name": "Experte 3",
    "size": 7,
    "difficulty": "Experte",
    "timeLimit": 44,
    "clues": [
      {
        "r": 1,
        "c": 1,
        "v": 9,
        "hint": "s"
      },
      {
        "r": 0,
        "c": 4,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 4,
        "v": 4,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 0,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 3,
        "c": 2,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 4,
        "c": 4,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 3,
        "c": 6,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 5,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 2,
        "v": 2,
        "hint": "h"
      },
      {
        "r": 5,
        "c": 6,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 6,
        "c": 3,
        "v": 4,
        "hint": "h"
      }
    ]
  },
  {
    "id": 33,
    "name": "Experte 4",
    "size": 7,
    "difficulty": "Experte",
    "timeLimit": 45,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 4,
        "hint": "h"
      },
      {
        "r": 0,
        "c": 5,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 2,
        "v": 4,
        "hint": null
      },
      {
        "r": 2,
        "c": 5,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 4,
        "v": 4,
        "hint": null
      },
      {
        "r": 5,
        "c": 6,
        "v": 3,
        "hint": "v"
      },
      {
        "r": 6,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 0,
        "v": 2,
        "hint": "h"
      },
      {
        "r": 6,
        "c": 4,
        "v": 2,
        "hint": null
      }
    ]
  },
  {
    "id": 34,
    "name": "Experte 5",
    "size": 7,
    "difficulty": "Experte",
    "timeLimit": 46,
    "clues": [
      {
        "r": 1,
        "c": 0,
        "v": 3,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 2,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 0,
        "c": 5,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 1,
        "v": 4,
        "hint": null
      },
      {
        "r": 2,
        "c": 4,
        "v": 4,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 3,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 5,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 1,
        "v": 6,
        "hint": null
      },
      {
        "r": 6,
        "c": 3,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 5,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 1,
        "v": 3,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 0,
        "v": 1,
        "hint": null
      }
    ]
  },
  {
    "id": 35,
    "name": "Experte 6",
    "size": 7,
    "difficulty": "Experte",
    "timeLimit": 47,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 0,
        "c": 4,
        "v": 4,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 3,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 5,
        "v": 4,
        "hint": null
      },
      {
        "r": 3,
        "c": 1,
        "v": 9,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 5,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 3,
        "v": 2,
        "hint": "h"
      },
      {
        "r": 5,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 6,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 5,
        "v": 6,
        "hint": "h"
      }
    ]
  },
  {
    "id": 36,
    "name": "Experte 7",
    "size": 7,
    "difficulty": "Experte",
    "timeLimit": 48,
    "clues": [
      {
        "r": 0,
        "c": 3,
        "v": 7,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 1,
        "v": 6,
        "hint": null
      },
      {
        "r": 2,
        "c": 3,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 2,
        "c": 5,
        "v": 6,
        "hint": null
      },
      {
        "r": 3,
        "c": 1,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 5,
        "c": 3,
        "v": 4,
        "hint": null
      },
      {
        "r": 4,
        "c": 5,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 5,
        "c": 2,
        "v": 1,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 3,
        "v": 3,
        "hint": null
      },
      {
        "r": 6,
        "c": 5,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 37,
    "name": "Experte 8",
    "size": 7,
    "difficulty": "Experte",
    "timeLimit": 49,
    "clues": [
      {
        "r": 1,
        "c": 0,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 4,
        "v": 5,
        "hint": null
      },
      {
        "r": 2,
        "c": 2,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 5,
        "v": 6,
        "hint": null
      },
      {
        "r": 3,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 5,
        "v": 3,
        "hint": null
      },
      {
        "r": 4,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 4,
        "v": 6,
        "hint": null
      },
      {
        "r": 5,
        "c": 6,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 6,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 6,
        "c": 2,
        "v": 2,
        "hint": "h"
      },
      {
        "r": 6,
        "c": 6,
        "v": 1,
        "hint": null
      }
    ]
  },
  {
    "id": 38,
    "name": "Experte 9",
    "size": 7,
    "difficulty": "Experte",
    "timeLimit": 50,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 5,
        "v": 9,
        "hint": null
      },
      {
        "r": 2,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 3,
        "c": 2,
        "v": 4,
        "hint": null
      },
      {
        "r": 3,
        "c": 5,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 5,
        "c": 0,
        "v": 6,
        "hint": null
      },
      {
        "r": 4,
        "c": 2,
        "v": 4,
        "hint": null
      },
      {
        "r": 6,
        "c": 4,
        "v": 4,
        "hint": null
      },
      {
        "r": 6,
        "c": 6,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 6,
        "c": 2,
        "v": 2,
        "hint": null
      }
    ]
  },
  {
    "id": 39,
    "name": "Experte 10",
    "size": 7,
    "difficulty": "Experte",
    "timeLimit": 51,
    "clues": [
      {
        "r": 0,
        "c": 2,
        "v": 7,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 8,
        "hint": null
      },
      {
        "r": 1,
        "c": 3,
        "v": 6,
        "hint": null
      },
      {
        "r": 2,
        "c": 5,
        "v": 6,
        "hint": null
      },
      {
        "r": 3,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 4,
        "v": 1,
        "hint": null
      },
      {
        "r": 5,
        "c": 5,
        "v": 6,
        "hint": null
      },
      {
        "r": 6,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 5,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 5,
        "v": 3,
        "hint": null
      }
    ]
  },
  {
    "id": 40,
    "name": "Meister 1",
    "size": 8,
    "difficulty": "Meister",
    "timeLimit": 52,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 0,
        "c": 5,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 3,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 6,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 1,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 4,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 6,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 7,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 7,
        "c": 6,
        "v": 4,
        "hint": "s"
      }
    ]
  },
  {
    "id": 41,
    "name": "Meister 2",
    "size": 8,
    "difficulty": "Meister",
    "timeLimit": 53,
    "clues": [
      {
        "r": 0,
        "c": 3,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 8,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 3,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 6,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 3,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 4,
        "c": 6,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 6,
        "c": 0,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 5,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 6,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 7,
        "c": 3,
        "v": 3,
        "hint": "h"
      },
      {
        "r": 7,
        "c": 6,
        "v": 3,
        "hint": "h"
      }
    ]
  },
  {
    "id": 42,
    "name": "Meister 3",
    "size": 8,
    "difficulty": "Meister",
    "timeLimit": 54,
    "clues": [
      {
        "r": 0,
        "c": 0,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 2,
        "v": 4,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 6,
        "v": 9,
        "hint": "s"
      },
      {
        "r": 1,
        "c": 2,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 3,
        "c": 0,
        "v": 3,
        "hint": "v"
      },
      {
        "r": 3,
        "c": 1,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 4,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 4,
        "c": 6,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 0,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 5,
        "c": 3,
        "v": 4,
        "hint": "h"
      },
      {
        "r": 5,
        "c": 6,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 7,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 7,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 7,
        "c": 6,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 43,
    "name": "Meister 4",
    "size": 8,
    "difficulty": "Meister",
    "timeLimit": 54,
    "clues": [
      {
        "r": 1,
        "c": 0,
        "v": 8,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 3,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 0,
        "c": 6,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 2,
        "v": 4,
        "hint": null
      },
      {
        "r": 3,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 6,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 4,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 3,
        "v": 6,
        "hint": null
      },
      {
        "r": 4,
        "c": 5,
        "v": 1,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 5,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 7,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 2,
        "v": 4,
        "hint": null
      },
      {
        "r": 7,
        "c": 4,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 6,
        "c": 7,
        "v": 3,
        "hint": "v"
      }
    ]
  },
  {
    "id": 44,
    "name": "Meister 5",
    "size": 8,
    "difficulty": "Meister",
    "timeLimit": 55,
    "clues": [
      {
        "r": 0,
        "c": 3,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 2,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 1,
        "c": 5,
        "v": 8,
        "hint": null
      },
      {
        "r": 3,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 6,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 2,
        "v": 4,
        "hint": null
      },
      {
        "r": 6,
        "c": 0,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 5,
        "c": 5,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 7,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 7,
        "c": 5,
        "v": 4,
        "hint": null
      }
    ]
  },
  {
    "id": 45,
    "name": "Meister 6",
    "size": 8,
    "difficulty": "Meister",
    "timeLimit": 56,
    "clues": [
      {
        "r": 0,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 0,
        "c": 3,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 6,
        "v": 8,
        "hint": "v"
      },
      {
        "r": 2,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 3,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 0,
        "v": 8,
        "hint": "v"
      },
      {
        "r": 4,
        "c": 3,
        "v": 6,
        "hint": null
      },
      {
        "r": 4,
        "c": 6,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 7,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 6,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 7,
        "c": 6,
        "v": 4,
        "hint": null
      }
    ]
  },
  {
    "id": 46,
    "name": "Meister 7",
    "size": 8,
    "difficulty": "Meister",
    "timeLimit": 57,
    "clues": [
      {
        "r": 0,
        "c": 4,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 0,
        "v": 8,
        "hint": null
      },
      {
        "r": 1,
        "c": 3,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 2,
        "c": 6,
        "v": 6,
        "hint": null
      },
      {
        "r": 3,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 4,
        "c": 4,
        "v": 4,
        "hint": null
      },
      {
        "r": 4,
        "c": 6,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 6,
        "c": 2,
        "v": 6,
        "hint": "v"
      },
      {
        "r": 6,
        "c": 4,
        "v": 4,
        "hint": null
      },
      {
        "r": 7,
        "c": 6,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 7,
        "c": 0,
        "v": 2,
        "hint": null
      },
      {
        "r": 7,
        "c": 4,
        "v": 2,
        "hint": "h"
      }
    ]
  },
  {
    "id": 47,
    "name": "Meister 8",
    "size": 8,
    "difficulty": "Meister",
    "timeLimit": 58,
    "clues": [
      {
        "r": 1,
        "c": 0,
        "v": 8,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 3,
        "v": 8,
        "hint": null
      },
      {
        "r": 0,
        "c": 6,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 2,
        "v": 4,
        "hint": null
      },
      {
        "r": 3,
        "c": 4,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 3,
        "c": 6,
        "v": 6,
        "hint": null
      },
      {
        "r": 4,
        "c": 0,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 5,
        "c": 3,
        "v": 6,
        "hint": null
      },
      {
        "r": 4,
        "c": 5,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 5,
        "c": 6,
        "v": 4,
        "hint": null
      },
      {
        "r": 7,
        "c": 1,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 7,
        "c": 3,
        "v": 4,
        "hint": null
      },
      {
        "r": 7,
        "c": 5,
        "v": 2,
        "hint": "v"
      },
      {
        "r": 7,
        "c": 6,
        "v": 2,
        "hint": null
      }
    ]
  },
  {
    "id": 48,
    "name": "Meister 9",
    "size": 8,
    "difficulty": "Meister",
    "timeLimit": 59,
    "clues": [
      {
        "r": 0,
        "c": 1,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 1,
        "c": 4,
        "v": 8,
        "hint": null
      },
      {
        "r": 0,
        "c": 6,
        "v": 4,
        "hint": null
      },
      {
        "r": 3,
        "c": 0,
        "v": 4,
        "hint": null
      },
      {
        "r": 2,
        "c": 2,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 6,
        "v": 4,
        "hint": null
      },
      {
        "r": 5,
        "c": 0,
        "v": 8,
        "hint": null
      },
      {
        "r": 5,
        "c": 2,
        "v": 4,
        "hint": null
      },
      {
        "r": 4,
        "c": 5,
        "v": 8,
        "hint": "h"
      },
      {
        "r": 7,
        "c": 2,
        "v": 4,
        "hint": null
      },
      {
        "r": 6,
        "c": 4,
        "v": 4,
        "hint": null
      },
      {
        "r": 7,
        "c": 6,
        "v": 4,
        "hint": null
      }
    ]
  },
  {
    "id": 49,
    "name": "Meister 10",
    "size": 8,
    "difficulty": "Meister",
    "timeLimit": 60,
    "clues": [
      {
        "r": 3,
        "c": 0,
        "v": 8,
        "hint": "v"
      },
      {
        "r": 0,
        "c": 2,
        "v": 8,
        "hint": null
      },
      {
        "r": 0,
        "c": 6,
        "v": 6,
        "hint": null
      },
      {
        "r": 2,
        "c": 1,
        "v": 4,
        "hint": null
      },
      {
        "r": 3,
        "c": 3,
        "v": 4,
        "hint": "s"
      },
      {
        "r": 2,
        "c": 6,
        "v": 6,
        "hint": null
      },
      {
        "r": 4,
        "c": 1,
        "v": 4,
        "hint": null
      },
      {
        "r": 5,
        "c": 3,
        "v": 4,
        "hint": null
      },
      {
        "r": 4,
        "c": 6,
        "v": 6,
        "hint": "h"
      },
      {
        "r": 7,
        "c": 1,
        "v": 4,
        "hint": null
      },
      {
        "r": 6,
        "c": 3,
        "v": 4,
        "hint": null
      },
      {
        "r": 6,
        "c": 6,
        "v": 6,
        "hint": null
      }
    ]
  }
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
    // window.__versionPromise is started in index.html (always fresh)
    // so this works even when game.js itself is served from cache.
    const serverVersion = await window.__versionPromise;
    if (!serverVersion) return;
    latestServerVersion = serverVersion;
    if (serverVersion !== GAME_VERSION) {
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
function findCurrentLevel() {
  for (let i = 0; i < LEVELS.length; i++) {
    if (!solved.includes(LEVELS[i].id)) return i;
  }
  return 0; // all solved → restart from beginning
}

function showMenu() {
  stopTimer();
  menuScreen.classList.add('active');
  gameScreen.classList.remove('active');
  currentLevelIndex = -1;
  const btn = document.getElementById('btn-continue');
  if (solved.length === 0) {
    btn.textContent = 'Spiel starten';
  } else if (solved.length >= LEVELS.length) {
    btn.textContent = 'Nochmal spielen';
  } else {
    btn.textContent = 'Spiel fortsetzen';
  }
}

function showGame(idx) {
  currentLevelIndex = idx;
  rectangles  = [];
  dragActive  = false;
  winBanner.classList.remove('visible');
  timeoutBanner.classList.remove('visible');
  timerEl.classList.remove('stopped', 'urgent');
  titleEl.textContent = 'Level ' + (idx + 1);
  timeRemaining = LEVELS[idx].timeLimit;
  updateTimerDisplay();
  menuScreen.classList.remove('active');
  gameScreen.classList.add('active');
  requestAnimationFrame(() => requestAnimationFrame(() => {
    resize();
    showStartOverlay(timeRemaining, startTimer);
  }));
}

function showStartOverlay(seconds, callback) {
  var overlay = document.getElementById('start-overlay');
  var label   = document.getElementById('start-overlay-time');
  if (!overlay || !label) { callback(); return; }
  label.textContent = seconds + 's';
  overlay.classList.add('visible');
  setTimeout(function() {
    overlay.classList.remove('visible');
    setTimeout(callback, 250);
  }, 1800);
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
document.getElementById('btn-continue').addEventListener('click', () => showGame(findCurrentLevel()));

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
  try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}

  try {
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => caches.delete(k)));
    }
  } catch (_) {}

  try {
    if ('serviceWorker' in navigator) {
      const regs = await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r => r.unregister()));
    }
  } catch (_) {}

  // Append timestamp so iOS fetches a fresh copy instead of using disk cache
  const base = window.location.href.replace(/\?.*$/, '');
  window.location.replace(base + '?r=' + Date.now());
});

// ── Boot ──────────────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

loadProgress();
checkForUpdate();
showMenu();
