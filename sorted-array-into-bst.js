// Convert sorted array into binary search tree (BST)

// Given [-10, -3, 0, 5, 9]
// Possible answer [0, -3, 9, -10, null, 5]

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const sortedArrayToBST = nums => {
  if (nums.length === 0) return null;

  const createTree = (start, end) => {
    if (start > end) {
      return null;
    }

    const pivot = start + Math.floor((end - start) / 2);
    const head = new TreeNode(nums[pivot]);

    head.left = createTree(start, pivot - 1);
    head.right = createTree(pivot + 1, end);

    return head;
  };

  return createTree(0, nums.length - 1);
}

const logTree = root => {
  const q = [root];
  const nums = [];
  let queueStartIndex = 0;

  while (queueStartIndex < q.length) {
    const node = q[queueStartIndex++];

    if (node) {
      nums.push(node.val);

      q.push(node.left);
      q.push(node.right);
    }
  }

  console.log(nums);
}

logTree(
  sortedArrayToBST([-10, -3, 0, 5, 9])
);

// const tree = sortedArrayToBST([-10, -3, 0, 5, 9])
// console.log(JSON.stringify(tree, 0, 2))