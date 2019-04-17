// Iterative binary search

const binarySearch = (list, item) => {
  let start = 0;
  let end = list.length - 1;

  while (start !== end) {
    const middle = Math.floor((start + end) / 2);

    if (list[middle] === item) {
      return middle;
    }

    if (list[middle] < item) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
};

console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9 , 10], 3)
)