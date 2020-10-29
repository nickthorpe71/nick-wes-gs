// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if(!root){
    return 0;
  }

  let minimumDepth = null;

  function traverse(node, currentDepth = 1) {
    if(!node.left && !node.right){
      minimumDepth = currentDepth;
      return;
    }

    if(!minimumDepth || minimumDepth > currentDepth) {
      if(node.left){
        traverse(node.left, currentDepth + 1);
      }
    }

    if(!minimumDepth || minimumDepth > currentDepth) {
      if(node.right){
        traverse(node.right, currentDepth + 1);
      }
    }
  }
  
  traverse(root);

  return minimumDepth;
};