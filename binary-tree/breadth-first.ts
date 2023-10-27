import { BinaryNodeType, a } from ".";

// const breadthFirstValues = (root) => {
//   // todo
//   const queue = [root];
//   const values = [];

//   while (queue.length > 0) {
//     const current = queue.shift();

//     values.push(current.val);
//     if (current.left) {
//       queue.push(current.left);
//     }

//     if (current.right) {
//       queue.push(current.right);
//     }
//   }

//   return values;
// };

const breadthFirstValues = (root) => {
  if (root === null) {
    return [];
  }

  breadthFirstValues(root.left);
  breadthFirstValues(root.right);
};

const v = breadthFirstValues(a);
console.log(v);

// a
// b c
// c d e
// d e f
// e f
// f g
// g h
// h
//
