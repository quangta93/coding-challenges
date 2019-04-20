
// Heapify O(n)
// Remove O(nlogn)
// Space 0(n)

// Create a max heap
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

const heapify = (nums, length, index) => {
  let largest = index;

  if (2 * index + 1 < length && nums[2*index+1] > nums[largest]) {
    largest = 2 * index + 1;
  }

  if (2 * index + 2 < length && nums[2*index+2] > nums[largest]) {
    largest = 2 * index + 2;
  }

  if (largest !== index) {
    swap(nums, index, largest);
    heapify(nums, length, largest);
  }
};

const buildMaxHeap = nums => {
  const len = nums.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) heapify(nums, len, i);
}

const heapSort = (nums) => {
  buildMaxHeap(nums);

  for (let i = nums.length - 1; i > 0; i--) {
    swap(nums, 0, i); // largest item at the end
    heapify(nums, i, 0);
  }

  return nums;
};

console.log(heapSort([1, 4, 5, 2, 3, 1, 8, 9]));
