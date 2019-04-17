// Generate all permutation of an array

const permutation = list => {
  if (list.length === 1) return [list];

  const last = list[list.length - 1];
  const permutations = permutation(list.slice(0, list.length - 1));

  const posibilities = [];

  for (let pIndex = 0; pIndex < permutations.length; pIndex ++) {
    const p = permutations[pIndex];

    for (let index = 0; index <= p.length; index++) {
      const _p = [...p];
      _p.splice(index, 0, last);

      posibilities.push(_p);
    }
  }

  return posibilities;
}

console.log(permutation([1, 2, 3, 4]));