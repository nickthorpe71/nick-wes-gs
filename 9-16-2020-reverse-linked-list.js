import LinkedList from './DataStructures/SLL.js';

const data = [1, 2, 3, 4, 5];
const list = new LinkedList();

for (const i of data) {
  list.push(i);
}

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let node = head;
  let prev;
  let temp;

  while (node) {
    temp = node.next;

    node.next = prev;

    prev = node;
    node = temp;
  }

  return prev;
};


console.log(reverseList(list.head));



/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseListWithExtraList = function (head) {
  let result = new LinkedList();

  for (let i = 0; i < 5; i++) {
    let current = head;
    let prev = head;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    result.push(current.element);
    prev.next = null;
  }

  return result.head;
};




