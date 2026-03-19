/*
You're given a binary tree. Your task is to find the size of the largest subtree within this binary tree that also satisfies the properties of a Binary Search Tree (BST). The size of a subtree is defined as the number of nodes it contains.

Note: A subtree of the binary tree is considered a BST if for every node in that subtree, the left child is less than the node, and the right child is greater than the node, without any duplicate values in the subtree.

Examples :

Input: root = [5, 2, 4, 1, 3]
Root-to-leaf-path-sum-equal-to-a-given-number-copy
Output: 3
Explanation:The following sub-tree is a BST of size 3
Balance-a-Binary-Search-Tree-3-copy
Input: root = [6, 7, 3, N, 2, 2, 4]

Output: 3
Explanation: The following sub-tree is a BST of size 3:

Constraints:
1 ≤ number of nodes ≤ 105
1 ≤ node->data ≤ 105

*/
/*
class Node
{
    constructor(x){
        this.key=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @return {number}
 */
class Solution {
    largestBst(root) {
        // code here
        let maxSize = 0;

        function helper(node) {
           
            if (!node) {
                return {
                    isBST: true,
                    size: 0,
                    min: Infinity,
                    max: -Infinity
                };
            }
    
            let left = helper(node.left);
            let right = helper(node.right);
    
            if (
                left.isBST &&
                right.isBST &&
                node.key > left.max &&
                node.key < right.min
            ) {
                let size = left.size + right.size + 1;
    
                maxSize = Math.max(maxSize, size);
    
                return {
                    isBST: true,
                    size: size,
                    min: Math.min(node.key, left.min),
                    max: Math.max(node.key, right.max)
                };
            }
    
            // Not a BST
            return {
                isBST: false,
                size: 0,
                min: -Infinity,
                max: Infinity
            };
        }
    
        helper(root);
        return maxSize;
    }
}
