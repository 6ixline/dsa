/*
Given the root of a Binary Tree, find the vertical traversal of the tree starting from the leftmost level to the rightmost level.

Note: If there are multiple nodes passing through a vertical line, then they should be printed as they appear in level order traversal of the tree.

Examples:

Input: root = [1, 2, 3, 4, 5, 6, 7, N, N, N, 8, N, 9, N, 10, 11, N]
                    
Output: [[4], [2], [1, 5, 6, 11], [3, 8, 9], [7], [10]]
Explanation: The below image shows the horizontal distances used to print vertical traversal starting from the leftmost level to the rightmost level.
     
Input: root = [1, 2, 3, 4, 5, N, 6]
     
Output: [[4], [2], [1, 5], [3], [6]]
Explanation: From left to right the vertical order will be [[4], [2], [1, 5], [3], [6]]
Constraints:
1 ≤ number of nodes ≤ 105
1 ≤ node->data ≤ 105
*/
/**
 * @param {Node} root
 * @returns {number[][]}
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
    verticalOrder(root) {
        // code here
        if (!root) return [];

        let map = new Map();
        let queue = [{ node: root, hd: 0 }];

        let minHD = 0;
        let maxHD = 0;

        while (queue.length) {
            let { node, hd } = queue.shift();

            if (!map.has(hd)) map.set(hd, []);
            map.get(hd).push(node.data);

            minHD = Math.min(minHD, hd);
            maxHD = Math.max(maxHD, hd);

            if (node.left) queue.push({ node: node.left, hd: hd - 1 });
            if (node.right) queue.push({ node: node.right, hd: hd + 1 });
        }

        let result = [];

        for (let i = minHD; i <= maxHD; i++) {
            if (map.has(i)) {
                result.push(map.get(i));
            }
        }

        return result;
    }
}
