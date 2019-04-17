// Image represented by NxN matrix. Each pixel in the image is 4 byte (represented by an int).
// Write method to rotate the image by 90 degrees.
// Special request: do this in-place.

const rotate = matrix => {
  const size = matrix.length;

  let _matrix = [];

  for (let i = 0; i < size; i++) {
    _matrix[i] = [];
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      _matrix[j][size - i - 1] = matrix[i][j];
    }
  }

  return _matrix;

  // Time O(N^2)
  // Space O(N^2)
};

const rotateInPlace = matrix => {
  const size = matrix.length;
  const iLimit = size % 2 === 0 ? (size / 2) : Math.ceil(size / 2);

  for (let i = 0; i < iLimit; i++) {
    for (let j = 0; j < Math.floor(size / 2); j++) {
      const temp  = matrix[i][j];

      matrix[i][j] = matrix[size - j - 1][i];
      matrix[size - j - 1][i] = matrix[size - i - 1][size - j - 1];
      matrix[size - i - 1][size - j - 1] = matrix[j][size - i - 1];
      matrix[j][size - i - 1] = temp;
    }
  }

  return matrix;
  // Time O(N^2)
  // Space O(1)
};

const matrix33 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrix44 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

console.log(rotate([...matrix33]));
console.log(rotateInPlace([...matrix33]));
console.log(rotateInPlace([...matrix44]));
