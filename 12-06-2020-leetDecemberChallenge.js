// Given a binary tree

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

 

// Follow up:

// You may only use constant extra space.
// Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.


/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    let rowElementCount = 1;
    let row = 1;
    let result = [];

    for(let i = 0; i <= root.length; i++) {        
        if(rowElementCount > Math.pow(2, row-1)) {
            row++;
            rowElementCount = 1;
            result.push('#')
        }
        
        if(root[i]){
            result.push(root[i])            
        }

        rowElementCount++
    }
    
    return result
};

console.log(connect([1,2,3,4,5,null,7]))