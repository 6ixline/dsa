/*
You are given n courses, labeled from 0 to n - 1 and a 2d array prerequisites[][] where prerequisites[i] = [x, y] indicates that we need to take course y first if we want to take course x.

Find if it is possible to complete all tasks. Return true if all tasks can be completed, or false if it is impossible.

Examples:

Input n = 4, prerequisites[] = [[2, 0], [2, 1], [3, 2]]
Output: true
Explanation: 
To take course 2, you must first finish courses 0 and 1.
To take course 3, you must first finish course 2.
All courses can be completed, for example in the order [0, 1, 2, 3] or [1, 0, 2, 3].
Input: n = 3, prerequisites[] = [[0, 1], [1, 2], [2, 0]]
Output: false
Explanation: 
To take course 0, you must first finish course 1. 
To take course 1, you must first finish course 2. 
To take course 2, you must first finish course 0.
Since each course depends on the other, it is impossible to complete all courses.
Constraints:
1 ≤ n ≤ 104
0 ≤ prerequisites.size() ≤ 105
0 ≤ prerequisites[i][0], prerequisites[i][1] < n
All prerequisite pairs are unique
prerequisites[i][0] ≠ prerequisites[i][1]
*/

/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @returns {boolean}
 */

class Solution {
    canFinish(n, prerequisites) {
        // Code here
        let graph = Array.from({length: n}, ()=> []);
        
        for(let i = 0; i < prerequisites.length; i++){
            let [x, y] = prerequisites[i];
            graph[y].push(x);
        }
        let visited = Array.from({length: n}, ()=> 0);
        function dfs(node){
            if(visited[node] == 1) return true;
            if(visited[node] == 2) return false;
        
            visited[node] = 1;
            
            for(let i = 0; i < graph[node].length; i++){
                if(dfs(graph[node][i])) return true;
            }
            
            visited[node] = 2;
            return false;
        }
        
        for(let i = 0; i < n; i++){
            if(dfs(i)) return false;
        }
        
        return true;
    }
}
