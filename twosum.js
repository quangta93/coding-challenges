// given n nums
// target sum x
// find 2 array values such that their sum is x, or report that no such values exist.

const twoSum = (nums, x) => {
  nums.sort();

  let p1 = 0;
  let p2 = nums.length - 1;

  while (p1 !== p2) {
    if (nums[p1] + nums[p2] < x) {
      p1++;
    } else if (nums[p1] + nums[p2] > x) {
      p2--;
    } else {
      return [nums[p1], nums[p2]];
    }
  }

  return false;
};

console.log(twoSum([1, 4, 9, 2, 10, 5, 6, 7], 12));