class _Node {
  constructor (value, next) {
    this.value = value,
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
  }

  add (val) {
    let newItem = new _Node (val, null);

    if (this.head === null) {
      this.head = newItem;
    }
    else{
      let current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = newItem;
    }
  }  
}

function printLinkedList (head) {
  let current = head;

  while(current) {
    console.log(current.value);
    current = current.next;
  }
}

function main () {
  let fruits = new LinkedList;
  
  fruits.add('apple');
  fruits.add('banana');
  fruits.add('mango');
  fruits.add('peach');
  fruits.add('strawberry');

  reverseLinkedList(fruits.head);
  // printLinkedList(fruits.head);
}

function reverseLinkedList (head) {
  let tail = head;
  let currentHead = head;
  let currentNext;
  
  while(tail.next){
    currentNext = tail.next;

    tail.next = currentNext.next;

    currentNext.next = currentHead;

    currentHead = currentNext;
  }

  printLinkedList(currentHead);
}

main();