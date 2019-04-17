
const deepEqual = (a, b) => {
  if (a.length !== b.length) return false;

  for (let index = 0; index < a.length; index++) {
    if (a[index] !== b[index]) return false;
  }

  return true;
};

module.exports = deepEqual;