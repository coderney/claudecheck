import SwiftUI

struct GameView: View {
    let level: Level
    @StateObject private var state: GameState
    @Environment(\.dismiss) private var dismiss

    init(level: Level) {
        self.level = level
        _state = StateObject(wrappedValue: GameState(level: level))
    }

    var body: some View {
        ZStack {
            Color(.systemBackground).ignoresSafeArea()
            VStack(spacing: 24) {
                GameBoardView(state: state)
                    .padding()
                if state.isSolved {
                    VStack(spacing: 12) {
                        Text("Gelöst! 🌸")
                            .font(.title2.bold())
                        Button("Zurück zum Menü") { dismiss() }
                            .buttonStyle(.borderedProminent)
                    }
                    .transition(.scale.combined(with: .opacity))
                }
            }
        }
        .navigationTitle(level.name)
        .navigationBarTitleDisplayMode(.inline)
        .toolbar {
            ToolbarItem(placement: .topBarTrailing) {
                Button {
                    state.rectangles.removeAll()
                    state.isSolved = false
                } label: {
                    Image(systemName: "arrow.counterclockwise")
                }
            }
        }
        .animation(.spring(duration: 0.4), value: state.isSolved)
    }
}
