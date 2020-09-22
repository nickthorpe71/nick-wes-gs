/* Binary Search Tree v1*/
/* Usable v1*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(val) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(val);
      return;
    } else {
      const searchTree = function (node) {
        if (val < node.val) {
          if (node.left === null) {
            node.left = new Node(val);
            return;
          } else if (val.left !== null) {
            return searchTree(node.left);
          }
        } else if (val > node.val) {
          if (node.right === null) {
            node.right = new Node(val);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.val;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.val;
  }
  find(val) {
    let current = this.root;
    while (current.val !== val) {
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current;
  }
  isPresent(val) {
    let current = this.root;
    while (current) {
      if (val === current.val) {
        return true;
      }
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(val) {
    const removeNode = function (node, val) {
      if (node === null) {
        return null;
      }
      if (val === node.val) {
        // node has no children
        if (node.left === null && node.right === null) {
          return null;
        }
        // node had no left child
        if (node.left === null) {
          return node.right;
        }
        // node has noo right child
        if (node.right === null) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.val = tempNode.val;
        node.right = removeNode(node.right, tempNode.val);
        return node;
      } else if (val < node.val) {
        node.left = removeNode(node.left, val);
        return node;
      } else {
        node.right = removeNode(node.right, val);
        return node;
      }
    };
    this.root = removeNode(this.root, val);
  }
}

const bst = new BST();

// bst.add(4);
// bst.add(2);
// bst.add(6);
// bst.add(1);
// bst.add(3);
// bst.add(5);
// bst.add(7);
// bst.remove(4);
// console.log(bst.findMin());
// console.log(bst.findMax());
// bst.remove(7);
// console.log(bst.findMax());
// console.log(bst.isPresent(4));


export default BST;