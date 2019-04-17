// Check if 2 strings are at most 1 edit (remove, insert, replace) from each other

const oneAway = (a, b) => {
  let hasDiff = false;
  let bIndex = 0;

  for (let aIndex = 0; aIndex < a.length; aIndex++) {
    if (a[aIndex] !== b[bIndex]) {
      if (hasDiff) return false;

      hasDiff = true;

      if (a.length === b.length) {
        // op = replace
        bIndex ++;
      } else if (a.length < b.length) {
        // op = insert
        if (a[aIndex] !== b[bIndex + 1]) return false;
        bIndex += 2;
      } else {
        // op = remove. keep bIndex, aIndex increase as usual.
      }
    } else {
      bIndex++;
    }
  }

  return true;
  // Time: O(N)
  // Space: O(1)
};


// Testing
console.log(
  oneAway('pale', 'ple'),
  oneAway('pales', 'pale'),
  oneAway('pale', 'bale'),
  oneAway('pale', 'bake'),
);
