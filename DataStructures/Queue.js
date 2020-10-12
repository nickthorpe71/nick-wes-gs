import LinkedList from './LinkedList.js';

class Queue {
  constructor() {
    this.items = new LinkedList();
  }

  /**
   * Add element to the queue
   * Runtime: O(1)
   * @param {any} item
   * @returns {queue} instance to allow chaining.
   */
  enqueue(item) {
    this.items.addLast(item);
    return this;
  }

  /**
   * Remove element from the queue
   * Runtime: O(1)
   * @returns {any} removed value.
   */
  dequeue() {
    return this.items.removeFirst();
  }

  /**
   * Size of the queue
   */
  get size() {
    return this.items.size;
  }

  /**
   * Return true if is empty false otherwise true
   */
  isEmpty() {
    return !this.items.size;
  }
}

// Aliases
Queue.prototype.add = Queue.prototype.enqueue;
Queue.prototype.remove = Queue.prototype.dequeue;

export default Queue;