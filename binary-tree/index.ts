type BinaryNodeType = TreeNode | null;

class TreeNode {
  val: number | string | null;
  left: BinaryNodeType;
  right: BinaryNodeType;
  constructor(
    val?: number | string | null,
    left?: BinaryNodeType,
    right?: BinaryNodeType
  ) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

export { a, BinaryNodeType };
