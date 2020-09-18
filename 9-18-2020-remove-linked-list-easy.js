import LinkedList from './DataStructures/SLL.js';

/** https://leetcode.com/problems/remove-linked-list-elements/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const data = [1, 2, 2, 1];
const list = new LinkedList();

for (const i of data) {
  list.push(i);
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null)
    return null;

  else {
    let prev = head;
    let current = head;

    while (current) {
      if (current.val === val) {
        if (head === current) {
          head = current.next;

        } else {
          prev.next = prev.next.next;
        }
      } else {
        prev = current;
      }

      current = current.next;
    }
  }
  return head;
};

console.log(removeElements(list.head, 2));