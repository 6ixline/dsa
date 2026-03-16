/*
Given the root of a binary tree and an integer k, determine the number of downward-only paths where the sum of the node values in the path equals k.

Note: A path can start and end at any node within the tree but must always move downward (from parent to child).

Examples:

Input: root = [8, 4, 5, 3, 2, N, 2, 3, -2, N, 1], k = 7

Output: 3
Explanation: The following paths sum to k
 
Input: root = [1, 2, 3], k = 3

Output: 2 
Explanation: The following paths sum to k

Constraints:
1 ≤ number of nodes ≤ 104
-100 ≤ node value ≤ 100
-109 ≤ k ≤ 109
*/

/**
 * @param {Node} root
 * @param {number} k
 * @return {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    countAllPaths(root, k) {
        // code here
        let count = 0;
        const prefixMap = new Map();
        prefixMap.set(0, 1);
    
        function dfs(node, currentSum) {
            if (!node) return;
    
            currentSum += node.data;
    
            if (prefixMap.has(currentSum - k)) {
                count += prefixMap.get(currentSum - k);
            }
    
            prefixMap.set(currentSum, (prefixMap.get(currentSum) || 0) + 1);
    
            dfs(node.left, currentSum);
            dfs(node.right, currentSum);
            
            prefixMap.set(currentSum, prefixMap.get(currentSum) - 1);
        }
    
        dfs(root, 0);
        return count;
    }
}
