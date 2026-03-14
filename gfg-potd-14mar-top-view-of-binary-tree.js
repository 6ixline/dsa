/*
You are given the root of a binary tree, and your task is to return its top view. The top view of a binary tree is the set of nodes visible when the tree is viewed from the top.

Note:

Return the nodes from the leftmost node to the rightmost node.
If multiple nodes overlap at the same horizontal position, only the topmost (closest to the root) node is included in the view. 
Examples:

Input: root = [1, 2, 3]
Output: [2, 1, 3]
Explanation: The Green colored nodes represents the top view in the below Binary tree.
 
Input: root = [10, 20, 30, 40, 60, 90, 100]
Output: [40, 20, 10, 30, 100]
Explanation: The Green colored nodes represents the top view in the below Binary tree.


Constraints:
1 ≤ number of nodes ≤ 105
1 ≤ node->data ≤ 105

*/

/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/
class Solution {
    topView(root) {
        // code here
        if (!root) return [];

        let map = new Map();
        let queue = [[root, 0]];
        let minHD = 0, maxHD = 0;
    
        while (queue.length > 0) {
            let [node, hd] = queue.shift();
    
            if (!map.has(hd)) {
                map.set(hd, node.data);
            }
    
            if (node.left) {
                queue.push([node.left, hd - 1]);
                minHD = Math.min(minHD, hd - 1);
            }
    
            if (node.right) {
                queue.push([node.right, hd + 1]);
                maxHD = Math.max(maxHD, hd + 1);
            }
        }
    
        let result = [];
        for (let i = minHD; i <= maxHD; i++) {
            if (map.has(i)) result.push(map.get(i));
        }
    
        return result;
    }
}
