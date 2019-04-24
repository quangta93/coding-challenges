// Given sorted (increasing order) list of ints
// Return a binary search tree.

// [1, 2, 3, 4, 5, 6, 7, 8]
// 5
// 3 7
// 2 4 6 8
// 1

function Node(val) {
  this.val = val;
  this.left = this.right = null;
}

const treeify = (nums, start, end) => {
  if (start > end) {
    return null;
  }

  if (start === end) {
    return new Node(nums[start]);
  }

  const pivot = start + Math.floor((end - start) / 2);

  const node = new Node(nums[pivot]);
  node.left = treeify(nums, start, pivot - 1);
  node.right = treeify(nums, pivot + 1, end);

  return node;
}

const minimalTree = (nums) => {
  return treeify(nums, 0, nums.length - 1);
}

const breathFirstPrint = root => {
  // console.log(JSON.stringify(root, 0, 2));

  const q = [root];
  const nums = [];

  while (q.length > 0) {
    const node = q.shift();

    if (node) {
      nums.push(node.val);

      q.push(node.left);
      q.push(node.right);
    }
  }

  console.log(nums);
}

breathFirstPrint(minimalTree([1, 2, 3, 4, 5, 6, 7, 8]));