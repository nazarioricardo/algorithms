// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const a = new ListNode(1);
const b = new ListNode(3);
const c = new ListNode(4);
const d = new ListNode(5);
const e = new ListNode(7);

// a => b  => c => d => e
a.next = b;
b.next = c;
c.next = d;
d.next = e;

const a1 = new ListNode(1);
const b1 = new ListNode(2);
const c1 = new ListNode(3);
const d1 = new ListNode(5);
const e1 = new ListNode(6);

a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;

type NodeType = ListNode | null;

const getListSum = (head: NodeType, sum: number): number => {
  if (head === null) {
    return sum;
  }

  let current = head;
  return getListSum(current.next, current.val + sum);
};

const mergeSortedLinkedLists = (l: NodeType, n: NodeType): NodeType => {
  if (l === null) {
    return n;
  }

  if (n === null) {
    return l;
  }

  let current: NodeType;
  if (l.val < n.val) {
    current = new ListNode(l.val);
    current.next = mergeSortedLinkedLists(l.next, n);
    // l.next = mergeSortedLinkedLists(l.next, n);
    // return l;
  } else {
    current = new ListNode(n.val);
    current.next = mergeSortedLinkedLists(l, n.next);
    // n.next = mergeSortedLinkedLists(l, n.next);
    // return n;
  }

  return current;
};

const list = mergeSortedLinkedLists(a, a1);

const logValues = (l: NodeType) => {
  let current: NodeType = l;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

// const findTarget = (head: NodeType, target: number): boolean => {
//   let current = head;

//   while (current !== null) {
//     if (current.val === target) {
//       return true;
//     }

//     current = current.next;
//   }

//   return false;
// };

// const findTarget = (head: NodeType, target: number): boolean => {
//   if (head === null) {
//     return false;
//   }

//   if (head.val === target) {
//     return true;
//   }

//   return findTarget(head.next, target);
// };

// console.log(findTarget(list, 43));
// getListValues(c);

// const getValueAtIndex = (head: NodeType, index: number): number | null => {
//   let current = head;
//   let currentIndex = 0;
//   while (current !== null) {
//     if (index === currentIndex) {
//       return current.val;
//     }

//     current = current.next;
//     currentIndex++;
//   }

//   return null;
// };

// const getValueAtIndex = (head: NodeType, index: number): number | null => {
//   if (head === null) {
//     return null;
//   }

//   if (index === 0) {
//     return head.val;
//   }

//   return getValueAtIndex(head.next, index - 1);
// };

// const reverseList = (head: NodeType) => {
//   let current = head;
//   let prev: NodeType = null;

//   while (current !== null) {
//     // console.log(prev?.val, current.val, prev?.next?.val);
//     const next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }

//   return prev;
// };

// const reverseList = (head: NodeType, prev: NodeType): NodeType => {
//   if (head === null) {
//     return prev;
//   }

//   let current = head;
//   let next = current.next;
//   current.next = prev;
//   return reverseList(next, current);
// };

// const reversed = reverseList(list, null);
// logValues(reversed);

const isEven = (n: number): boolean => n % 2 === 0;

// const zipper = (h1: ListNode, h2: ListNode): ListNode => {
//   let tail = h1;
//   let current1: NodeType = h1.next;
//   let current2: NodeType = h2;
//   let count = 0;

//   while (current1 !== null && current2 !== null) {
//     if (isEven(count)) {
//       tail.next = current2;
//       current2 = current2.next;
//     } else {
//       tail.next = current1;
//       current1 = current1.next;
//     }

//     tail = tail.next;
//     count += 1;
//   }

//   if (current1 !== null) {
//     tail.next = current1;
//   }

//   if (current2 !== null) {
//     tail.next = current2;
//   }

//   return h1;
// };

const zipper = (h1: NodeType, h2: NodeType): NodeType => {
  if (h1 === null) {
    return h2;
  }

  if (h2 === null) {
    return h1;
  }

  const n1 = h1.next;
  const n2 = h2.next;
  h1.next = h2;
  h2.next = zipper(n1, n2);
  return h1;
};

const zipped = zipper(a, a1);

logValues(zipped);
