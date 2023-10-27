import { BinaryNodeType, a } from ".";

const isBalanced = (root: BinaryNodeType): boolean => {
  let foundImbalance = false;

  const getTreeDepth = (root, depth) => {
    if (root === null) {
      return 0;
    }

    const leftDepth = getTreeDepth(root.left, depth);
    const rightDepth = getTreeDepth(root.right, depth);

    const diff = Math.abs(leftDepth - rightDepth);

    if (diff > 1) {
      foundImbalance = true;
    }

    depth += Math.max(leftDepth, rightDepth) + 1;
    return depth;
  };

  getTreeDepth(root, 0);
  return !foundImbalance;
};

// a
// b c
// c d e

console.log(isBalanced(a));
