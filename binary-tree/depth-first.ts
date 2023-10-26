import { BinaryNodeType, a } from ".";

// const depthFirstValues = (
//   root: TreeNode
// ): Array<string | number | null> | null => {
//   if (root === null) {
//     return [];
//   }

//   const stack = [root];
//   const results: Array<string | number | null> = [];
//   while (stack.length > 0) {
//     const current = stack.pop();
//     if (current === undefined) {
//       break;
//     }

//     results.push(current.val);

//     if (current.right) {
//       stack.push(current.right);
//     }

//     if (current.left) {
//       stack.push(current.left);
//     }
//   }

//   return results;
// };

const depthFirstValues = (
  root: BinaryNodeType
): Array<string | number | null> => {
  if (root === null) {
    return [];
  }

  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);

  return [root.val].concat(leftValues).concat(rightValues);
};

const v = depthFirstValues(a);
console.log(v);
