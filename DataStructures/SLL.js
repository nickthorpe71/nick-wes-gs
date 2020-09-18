// Basic singly linked list
// we can gradually add functionality as challenges require


/**
 * Singly Linked List
 * Current Functions:
 * push - adds an element to the end of the list
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(val) {
    let node = new _Node(val);

    let current;

    if (this.head === null)
      this.head = node;
    else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  print() {
    let current = this.head;
    let result = 'head:';
    while (current) {
      result += current.val + '->';
      current = current.next;
    }
    console.log(result.slice(0, result.length - 2));
  }
}


class _Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export default LinkedList;