// Check whether a string has all unique characters
const isUnique = str => {
  // NOTE: what kind of characters is allowed?

  // Array length = 256 (all ASCII codes).
  // Might be larger or smaller depends on the above question
  const characterChecks = [];

  for (let char of str) {
    const checkPos = char.charCodeAt();
    if (characterChecks[checkPos]) {
      return false;
    }
  }

  return true;

  // Time: O(N)
  // Space: max O(256)
};

const isUniqueWithoutChecks = str => {
  const charSet = new Set();

  for (let char of str) {
    if (charSet.has(char)) {
      return false;
    }

    charSet.add(char);
  }

  return true;
  // Time: O(N)
  // Space: O(N) - max
};

// Without data structure
const isUniqueWithoutDS = str => {
  // Sort string - takes O(N logN)
  let chars = str.split('');
  chars.sort((a, b) => (a.attr > b.attr) - (a.attr < b.attr));

  // O(N)
  for (let index = 0; index < chars.length - 1; index ++) {
    if (chars[index] === chars[index + 1]) {
      return false;
    }
  }

  return true;

  // Time: O(N logN)
  // Space: 0
};
