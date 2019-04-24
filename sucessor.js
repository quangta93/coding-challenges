// Find "next" node inorder traverse in a binary search tree.
// Each node has a link to its parent.

const next = (node) => {
  /*
  if (node.right) {
    return leftMost(node.right);
  }

  while (node is on node.parent.right) {
    node = node.parent
  }
  */
  if (!node) return null;

  if (node.right) {
    return leftMost(node.right);
  }

  let n = node;
  let p = node.parent;

  while (p !== null && p.right === n) {
    n = p;
    p = p.parent;
  }

  return p;
}

const leftMost = node => {
  while (node.left) {
    node = node.left;
  }

  return node;
}