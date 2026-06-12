import SwiftUI

struct MenuView: View {
    @State private var levels: [Level] = []
    @State private var selectedLevel: Level?

    var body: some View {
        NavigationStack {
            ScrollView {
                LazyVGrid(columns: [GridItem(.adaptive(minimum: 100))], spacing: 16) {
                    ForEach(levels) { level in
                        Button {
                            selectedLevel = level
                        } label: {
                            VStack(spacing: 8) {
                                Text(level.name)
                                    .font(.headline)
                                    .foregroundStyle(.primary)
                                Text("\(level.size)×\(level.size)")
                                    .font(.caption)
                                    .foregroundStyle(.secondary)
                            }
                            .frame(maxWidth: .infinity)
                            .padding()
                            .background(.thinMaterial, in: RoundedRectangle(cornerRadius: 12))
                        }
                    }
                }
                .padding()
            }
            .navigationTitle("Patches")
            .navigationDestination(item: $selectedLevel) { level in
                GameView(level: level)
            }
        }
        .onAppear(perform: loadLevels)
    }

    private func loadLevels() {
        guard let url = Bundle.main.url(forResource: "levels", withExtension: "json"),
              let data = try? Data(contentsOf: url),
              let collection = try? JSONDecoder().decode(LevelCollection.self, from: data)
        else { return }
        levels = collection.levels
    }
}
