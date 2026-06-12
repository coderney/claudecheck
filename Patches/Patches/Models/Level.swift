import Foundation

struct Clue: Codable, Equatable {
    let row: Int
    let col: Int
    let value: Int
}

struct Level: Codable, Identifiable {
    let id: Int
    let name: String
    let size: Int
    let clues: [Clue]
}

struct LevelCollection: Codable {
    let levels: [Level]
}
