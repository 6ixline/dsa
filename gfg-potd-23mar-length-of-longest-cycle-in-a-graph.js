/*
Given an directed graph with V vertices numbered from 0 to V-1 and E edges, represented as a 2D array edges[][], where each entry edges[i] = [u, v] denotes an edge between vertices u and v. Each node has at most one outgoing edge.

Your task is to find the length of the longest cycle present in the graph. If no cycle exists, return -1.

Note: A cycle is a path that starts and ends at the same vertex.

Examples :

Input: V = 7, edges[][] = [[0, 5], [1, 0], [2, 4], [3, 1], [4, 6], [5, 6], [6, 3]]

Output: 5
Explanation: longest Cycle is 0->5->6->3->1->0
Input: V = 8, edges[][] = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 1], [5, 4], [6, 2], [7, 6]]

Output: 4
Explanation: longest Cycle is 0->1->2->3->0
Constraints:
1 ≤ V, E ≤ 104
0 ≤ edges[i][0], edges[i][1] < V
*/
/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {number}
 */

class Solution {
    longestCycle(V, edges) {
        // code here
        let next = new Array(V).fill(-1);
        for (let [u, v] of edges) {
            next[u] = v;
        }
    
        let visited = new Array(V).fill(false);
        let maxCycle = -1;
    
        for (let i = 0; i < V; i++) {
            if (visited[i]) continue;
    
            let current = i;
            let stepMap = new Map();
            let step = 0;
    
            while (current !== -1 && !visited[current]) {
                visited[current] = true;
                stepMap.set(current, step++);
                
                let nextNode = next[current];
    
                if (nextNode !== -1 && stepMap.has(nextNode)) {
                    let cycleLength = step - stepMap.get(nextNode);
                    maxCycle = Math.max(maxCycle, cycleLength);
                    break;
                }
    
                current = nextNode;
            }
        }
    
        return maxCycle;
    }
}
