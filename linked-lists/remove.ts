function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let current = head;
  let prev = null;
  let index = 0;
  while (current !== null) {
    if (index === n) {
      prev.next = current.next;
      break;
    }

    prev = current;
    current = current.next;
    index++;
  }

  return head;
};
