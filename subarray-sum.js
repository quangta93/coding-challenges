// array of n positive ints
// target sum x
// find a subarray whose sum is x or  report that there is no such subarray

const subArraySum = (nums, x) => {
  if (nums.length === 0) return false;
  if (nums.length === 1 && nums[0] !== x) return false;

  let p1 = 0;
  let p2 = 1;
  let sum = nums[p1];

  while (p2 < nums.length && p1 <= p2) {
    if (sum === x) return nums.slice(p1, p2);

    if (sum < x) {
      sum += nums[p2++];
    } else {
      sum -= nums[p1++];
    }
  }

  return false;
};

console.log(subArraySum([1, 3, 2, 5, 1, 1, 2, 3], 8));