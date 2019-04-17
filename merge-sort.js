
const merge = (a, b) => {
  const merged = [];
  let aIndex = 0;
  let bIndex = 0;

  while ((aIndex < a.length) && (bIndex < b.length)) {
    if ((a[aIndex] <= b[bIndex])) {
      merged.push(a[aIndex]);
      aIndex++;
    } else {
      merged.push(b[bIndex]);
      bIndex++;
    }
  }

  if (aIndex===a.length) {
    merged.push(...b.slice(bIndex));
  } else {
    merged.push(...a.slice(aIndex));
  }

  return merged;
};

const mergeSort = (list) => {
  if (list.length === 1) return list;

  const firstHalf = mergeSort(list.slice(0, list.length / 2));
  const secondHalf = mergeSort(list.slice(list.length / 2));

  return merge(firstHalf, secondHalf);
};

console.log(
  mergeSort([2, 3, 1, 4, 1])
);
