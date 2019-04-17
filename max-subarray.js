

const allNegatives = nums => {
  for (let num of nums) {
    if (num > 0) return false;
  }
  return true;
}

const maxSublist = (nums) => {
  if (allNegatives(nums)) {
    return Math.max(...nums);
  }

  let max = -1;
  let max_ending = -1;

  for (let num of nums) {
    max_ending += num;

    if (max_ending < 0) max_ending = -1;
    if (max < max_ending) max = max_ending;
  }

  return max + 1;
};

console.log(
  maxSublist([-1, 2, 4, -3, 5, 2, -5, 2])
);
