import BST from './DataStructures/BST.js';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

let data = [1, null, 2, 3];
const tree = new BST();

for (const ele of data) {
  tree.add(ele);
}
console.log(tree);


/**
 * Iterative
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let stack = [];

  if (root !== null)
    stack.push(root);

  let res = [];

  while (stack.length > 0) {
    let node = stack.pop();

    if (node.val !== null)
      res.push(node.val);

    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }

  return res;
};

const preorderTraversalRecursive = (root) => {
  preOrderHelper(root);
};

const preOrderHelper = (root) => {
  if (root !== null) {
    console.log(root.val);
    preOrderHelper(root.left);
    preOrderHelper(root.right);
  }
};

console.log(preorderTraversalRecursive(tree.root));