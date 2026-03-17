/*

Given the root of a binary tree and a target node, determine the minimum time required to burn the entire tree if the target node is set on fire. In one second, the fire spreads from a node to its left child, right child, and parent.

Note: The tree contains unique values.

Examples : 

Input: root = [1, 2, 3, 4, 5, 6, 7], target = 2
  
Output: 3
Explanation: Initially 2 is set to fire at 0 sec 
At 1 sec: Nodes 4, 5, 1 catches fire.
At 2 sec: Node 3 catches fire.
At 3 sec: Nodes 6, 7 catches fire.
It takes 3s to burn the complete tree.
Input: root = [1, 2, 3, 4, 5, N, 7, 8, N, N, 10], target = 10

Output: 5
Explanation: Initially 10 is set to fire at 0 sec 
At 1 sec: Node 5 catches fire.
At 2 sec: Node 2 catches fire.
At 3 sec: Nodes 1 and 4 catches fire.
At 4 sec: Node 3 and 8 catches fire.
At 5 sec: Node 7 catches fire.
It takes 5s to burn the complete tree.
Constraints:
1 ≤ number of nodes ≤ 105
1 ≤ node->data ≤ 105

*/

/**
 * @param {Node} root
 * @param {number} target
 * @return {number}
 */

/*
class Node {
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
} */

class Solution {
    minTime(root, target) {
        // code here
        if (!root) return 0;

        let parentMap = new Map();
        let targetNode = null;
    
        function dfs(node, parent) {
            if (!node) return;
    
            if (node.data === target) {
                targetNode = node;
            }
        
            parentMap.set(node, parent);
        
            dfs(node.left, node);
            dfs(node.right, node);
          }
    
        dfs(root, null);
    
        let queue = [targetNode];
        let visited = new Set();
        visited.add(targetNode);
    
        let time = 0;
    
        while (queue.length > 0) {
            let size = queue.length;
            let burnedSomething = false;
    
            for (let i = 0; i < size; i++) {
                let node = queue.shift();
    
              let neighbors = [
                node.left,
                node.right,
                parentMap.get(node)
            ];
    
            for (let neigh of neighbors) {
                if (neigh && !visited.has(neigh)) {
                    visited.add(neigh);
                    queue.push(neigh);
                    burnedSomething = true;
                }
            }
        }
    
        if (burnedSomething) time++;
      }
    
      return time;
    }
}
