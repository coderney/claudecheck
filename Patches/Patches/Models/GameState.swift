import Foundation
import Combine

struct GameRectangle: Equatable, Identifiable {
    let id = UUID()
    var minRow: Int
    var minCol: Int
    var maxRow: Int
    var maxCol: Int

    var width: Int { maxCol - minCol + 1 }
    var height: Int { maxRow - minRow + 1 }
    var area: Int { width * height }

    func contains(row: Int, col: Int) -> Bool {
        row >= minRow && row <= maxRow && col >= minCol && col <= maxCol
    }

    func overlaps(with other: GameRectangle) -> Bool {
        !(maxRow < other.minRow || minRow > other.maxRow ||
          maxCol < other.minCol || minCol > other.maxCol)
    }

    static func from(start: (row: Int, col: Int), end: (row: Int, col: Int)) -> GameRectangle {
        GameRectangle(
            minRow: min(start.row, end.row),
            minCol: min(start.col, end.col),
            maxRow: max(start.row, end.row),
            maxCol: max(start.col, end.col)
        )
    }
}

class GameState: ObservableObject {
    let level: Level
    @Published var rectangles: [GameRectangle] = []
    @Published var isSolved: Bool = false
    @Published var conflicts: Set<UUID> = []

    init(level: Level) {
        self.level = level
    }

    func place(_ rect: GameRectangle) {
        rectangles.removeAll { $0.overlaps(with: rect) }
        rectangles.append(rect)
        validate()
    }

    func removeCovering(row: Int, col: Int) {
        rectangles.removeAll { $0.contains(row: row, col: col) }
        isSolved = false
        conflicts = []
    }

    private func validate() {
        let size = level.size
        var coverage = Array(repeating: Array(repeating: 0, count: size), count: size)
        for rect in rectangles {
            for r in rect.minRow...rect.maxRow {
                for c in rect.minCol...rect.maxCol {
                    coverage[r][c] += 1
                }
            }
        }

        guard coverage.allSatisfy({ $0.allSatisfy({ $0 == 1 }) }) else {
            isSolved = false
            return
        }

        var badIds: Set<UUID> = []
        for rect in rectangles {
            let cluesInside = level.clues.filter { rect.contains(row: $0.row, col: $0.col) }
            if cluesInside.count != 1 || cluesInside[0].value != rect.area {
                badIds.insert(rect.id)
            }
        }

        conflicts = badIds
        isSolved = badIds.isEmpty && rectangles.count == level.clues.count
    }
}
