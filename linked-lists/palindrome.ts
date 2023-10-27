/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let current = head;
  let prev = null;
  const values = [];
  const reversedValues = [];
  while (current !== null) {
    values.push(current.val);
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  while (current !== null) {
    reversedValues.push(current.val);
    current = current.next;
  }

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== reversedValues[i]) {
      return false;
    }
  }

  return true;
};

// 1 2 3 3 2 1
