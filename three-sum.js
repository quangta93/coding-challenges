// given n nums
// target sum x
// find 2 array values such that their sum is x, or report that no such values exist.

// time O(n)
const twoSum = (nums, start, end, x) => {
  let p1 = start;
  let p2 = end;

  while (p1 !== p2) {
    if (nums[p1] + nums[p2] < x) {
      p1++;
    } else if (nums[p1] + nums[p2] > x) {
      p2--;
    } else {
      return true;
    }
  }

  return false;
};

// Time: O(n^2)
const threeSum = (nums, x) => {
  nums.sort((a, b) => (a - b));

  for (let i = 0; i < nums.length - 2; i++) { // O(n)
    // Find 2 values in range [i + 1, len) that has sum (x - nums[i])
    const foundSum = twoSum(nums, i + 1, nums.length - 1, x - nums[i]); // O(n)
    if (foundSum) return true;
  }

  return false;
};

console.log(threeSum([1, 5, 6, 7, 4, 10, 9], 10));
