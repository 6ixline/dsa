/*
You are given an undirected graph, which has tree characteristics with V vertices numbered from 0 to V-1 and E edges, represented as a 2D array edges[][], where each element edges[i] = [u, v] represents an edge from vertex u to v.

You can choose any vertex as the root of the tree. Your task is to find all the vertices that, when chosen as the root, result in the minimum possible height of the tree.

Note: The height of a rooted tree is defined as the maximum number of edges on the path from the root to any leaf node.

Examples: 

Input: V = 5, E = 4, edges[][] = [[0, 2], [1, 2], [2, 3], [3, 4]]
   
Output: [2, 3]
Explanation: If we choose vertices 2 or 3 as the root, the resulting tree has the minimum possible height, which is 2.
  
Input: V = 4, E = 3, edges[][] = [[0, 1], [0, 2], [0, 3]]
   
Output: [0]
Explanation: Only vertex 0 as root gives the minimum possible height, which is 1.
  
Constraints:
1 ≤ V ≤ 105
0 ≤ E ≤ V-1
0 ≤ edges[i][0], edges[i][1] < V
*/
/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {number[]}
 */

class Solution {
    minHeightRoot(V, edges) {
        // Code here
        let graph = Array.from({length: V}, ()=> []);
        
        for(let i = 0; i < edges.length; i++){
            let [x, y] = edges[i];
            graph[x].push(y);
            graph[y].push(x);
        }
        
        let degree = new Array(V).fill(0);
        
        for(let i = 0; i < edges.length; i++){
            let [x, y] = edges[i];
            degree[x]++;
            degree[y]++;
        }
        
        let remainingNodes = V;
        let queue = [];
        
        for(let i = 0; i < V; i++){
            if(degree[i] == 1){
                queue.push(i);
            }
        }
        
        while(remainingNodes > 2){
            let size = queue.length;
            remainingNodes -= size;
            
            for(let i = 0; i < size; i++){
                let leaf = queue.shift();
                
                for(let neighbor of graph[leaf]){
                    degree[neighbor]--;
                    if(degree[neighbor] == 1){
                        queue.push(neighbor);
                    }
                }
            }
        }
        
        return queue;
    }
}
