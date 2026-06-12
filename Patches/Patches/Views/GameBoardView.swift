import SwiftUI

private let palette: [Color] = [
    .blue, .green, .orange, .purple, .pink, .teal, .indigo, .mint, .cyan, .brown
]

struct GameBoardView: View {
    @ObservedObject var state: GameState

    @State private var dragStart: CGPoint = .zero
    @State private var dragCurrent: CGPoint = .zero
    @State private var isDragging = false
    @State private var cellSize: CGFloat = 0

    var body: some View {
        GeometryReader { geo in
            let size = min(geo.size.width, geo.size.height)
            let cell = size / CGFloat(state.level.size)

            ZStack(alignment: .topLeading) {
                // Placed rectangles
                ForEach(Array(state.rectangles.enumerated()), id: \.element.id) { index, rect in
                    let isConflict = state.conflicts.contains(rect.id)
                    RoundedRectangle(cornerRadius: 6)
                        .fill(isConflict ? Color.red.opacity(0.3) : palette[index % palette.count].opacity(0.35))
                        .overlay(
                            RoundedRectangle(cornerRadius: 6)
                                .stroke(isConflict ? Color.red : palette[index % palette.count], lineWidth: 2)
                        )
                        .frame(
                            width: CGFloat(rect.width) * cell - 4,
                            height: CGFloat(rect.height) * cell - 4
                        )
                        .offset(
                            x: CGFloat(rect.minCol) * cell + 2,
                            y: CGFloat(rect.minRow) * cell + 2
                        )
                }

                // Preview rectangle while dragging
                if isDragging {
                    let preview = previewRect(cell: cell)
                    if let p = preview {
                        RoundedRectangle(cornerRadius: 6)
                            .stroke(Color.accentColor, lineWidth: 2)
                            .fill(Color.accentColor.opacity(0.15))
                            .frame(
                                width: CGFloat(p.width) * cell - 4,
                                height: CGFloat(p.height) * cell - 4
                            )
                            .offset(
                                x: CGFloat(p.minCol) * cell + 2,
                                y: CGFloat(p.minRow) * cell + 2
                            )
                    }
                }

                // Grid lines
                Canvas { ctx, canvasSize in
                    let c = canvasSize.width / CGFloat(state.level.size)
                    for i in 0...state.level.size {
                        let x = CGFloat(i) * c
                        let y = CGFloat(i) * c
                        var vPath = Path()
                        vPath.move(to: CGPoint(x: x, y: 0))
                        vPath.addLine(to: CGPoint(x: x, y: canvasSize.height))
                        ctx.stroke(vPath, with: .color(.gray.opacity(0.3)), lineWidth: 1)
                        var hPath = Path()
                        hPath.move(to: CGPoint(x: 0, y: y))
                        hPath.addLine(to: CGPoint(x: canvasSize.width, y: y))
                        ctx.stroke(hPath, with: .color(.gray.opacity(0.3)), lineWidth: 1)
                    }
                }
                .frame(width: size, height: size)

                // Clue numbers
                ForEach(state.level.clues, id: \.row) { clue in
                    Text("\(clue.value)")
                        .font(.system(size: cell * 0.38, weight: .semibold, design: .rounded))
                        .frame(width: cell, height: cell)
                        .offset(x: CGFloat(clue.col) * cell, y: CGFloat(clue.row) * cell)
                }

                // Invisible drag area
                Color.clear
                    .contentShape(Rectangle())
                    .gesture(
                        DragGesture(minimumDistance: 0)
                            .onChanged { value in
                                if !isDragging {
                                    dragStart = value.startLocation
                                    isDragging = true
                                    cellSize = cell
                                }
                                dragCurrent = value.location
                            }
                            .onEnded { value in
                                let startCell = cellCoord(point: dragStart, cell: cell, size: state.level.size)
                                let endCell = cellCoord(point: value.location, cell: cell, size: state.level.size)
                                let rect = GameRectangle.from(start: startCell, end: endCell)
                                state.place(rect)
                                isDragging = false
                            }
                    )
            }
            .frame(width: size, height: size)
            .background(Color(.secondarySystemBackground), in: RoundedRectangle(cornerRadius: 12))
        }
        .aspectRatio(1, contentMode: .fit)
    }

    private func cellCoord(point: CGPoint, cell: CGFloat, size: Int) -> (row: Int, col: Int) {
        let col = max(0, min(size - 1, Int(point.x / cell)))
        let row = max(0, min(size - 1, Int(point.y / cell)))
        return (row, col)
    }

    private func previewRect(cell: CGFloat) -> GameRectangle? {
        let size = state.level.size
        let s = cellCoord(point: dragStart, cell: cell, size: size)
        let e = cellCoord(point: dragCurrent, cell: cell, size: size)
        return GameRectangle.from(start: s, end: e)
    }
}
