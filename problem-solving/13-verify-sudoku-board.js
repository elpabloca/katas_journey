function verifySudokuBoard(board) {
  const rowSets = Array.from({ length: 9 }, () => new Set());
  const columnSets = Array.from({ length: 9 }, () => new Set());
  const subgridSets = Array.from({ length: 3 }, () =>
    Array.from({ length: 3 }, () => new Set())
  );

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const num = board[r][c];

      if (num === 0) continue;

      if (rowSets[r].has(num)) return false;
      if (columnSets[c].has(num)) return false;
      if (subgridSets[Math.floor(r / 3)][Math.floor(c / 3)].has(num)) {
        return false;
      }

      rowSets[r].add(num);
      columnSets[c].add(num);
      subgridSets[Math.floor(r / 3)][Math.floor(c / 3)].add(num);
    }
  }

  return true;
}

const board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

console.log(verifySudokuBoard(board)); // true