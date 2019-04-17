// Largest path in a grid
// Only down & right steps allowed
const get = (list, i, j) => (i < 0) ? 0 : ((j < 0) ? 0 : list[i][j]);

const largestPath = (grid) => {
  const size = grid.length;
  const max = new Array(size);

  for (let i = 0; i < size; i++) {
    max[i] = new Array(size).fill(0);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      max[i][j] = Math.max(
        get(max, i-1, j),
        get(max, i, j-1),
      ) + grid[i][j];
    }
  }

  return max[grid.length-1][grid.length -1];
}

const grid = [
  [3, 7, 9, 2, 7],
  [9, 8, 3, 5, 5],
  [1, 7, 9, 8, 5],
  [3, 8, 6, 4, 10],
  [6, 3, 9, 7, 8],
];
const expected = 67;

console.log(
  (largestPath(grid) === expected) ? 'CORRECT' : 'INCORRECT'
)