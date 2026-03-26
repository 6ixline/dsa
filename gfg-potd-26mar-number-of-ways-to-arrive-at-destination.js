/*
You are given an undirected weighted graph with V vertices numbered from 0 to V-1 and E edges, represented as a 2D array edges[][], where edges[i] = [ui, vi, timei] means that there is an undirected edge between nodes ui and vi that takes timei minutes to reach.
Your task is to return in how many ways you can travel from node 0 to node V - 1 in the shortest amount of time.

Examples:

Input: V = 4, edges[][] = [[0, 1, 2], [1, 2, 3], [0, 3, 5], [1, 3, 3], [2, 3, 4]]
    
Output: 2
Explanation: The shortest path from 0 to 3 is 5.
Two ways to reach 3 in 5 minutes are:
0 -> 3
0 -> 1 -> 3
Input: V = 6, edges[][] = [[0, 2, 3], [0, 4, 2], [0, 5, 7], [2, 3, 1], [2, 5, 5], [5, 3, 3], [5, 1, 4], [1, 4, 1], [4, 5, 5]]
    
Output: 4
Explanation: The shortest path from 0 to 5 is 7.
Four ways to reach 5 in 7 minutes are:
0 -> 5
0 -> 4 -> 5
0 -> 4 -> 1 -> 5
0 -> 2 -> 3 -> 5
Constraints:
1 ≤ V ≤ 200
V - 1 ≤ edges.size() ≤ V * (V - 1) / 2
0 ≤ ui, vi ≤ V - 1
1 ≤ timei ≤ 105
ui != vi
*/

/**
 * @param {number} V
 * @param {number[][]} edges
 * @returns {number}
 */

class Solution {
    countPaths(V, edges) {
        // code here
        const MOD = 1e9 + 7;
        
        const graph = Array.from({ length: V }, () => []);
        for (let [u, v, wt] of edges) {
            graph[u].push([v, wt]);
            graph[v].push([u, wt]);
        }

        class MinHeap {
            constructor() {
                this.heap = [];
            }

            push(val) {
                this.heap.push(val);
                this.bubbleUp();
            }

            bubbleUp() {
                let i = this.heap.length - 1;
                while (i > 0) {
                    let p = Math.floor((i - 1) / 2);
                    if (this.heap[p][0] <= this.heap[i][0]) break;
                    [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
                    i = p;
                }
            }

            pop() {
                if (this.heap.length === 1) return this.heap.pop();
                const top = this.heap[0];
                this.heap[0] = this.heap.pop();
                this.bubbleDown();
                return top;
            }

            bubbleDown() {
                let i = 0;
                const n = this.heap.length;

                while (true) {
                    let left = 2 * i + 1;
                    let right = 2 * i + 2;
                    let smallest = i;

                    if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
                        smallest = left;
                    }
                    if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
                        smallest = right;
                    }

                    if (smallest === i) break;

                    [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                    i = smallest;
                }
            }

            isEmpty() {
                return this.heap.length === 0;
            }
        }

        const dist = new Array(V).fill(Infinity);
        const ways = new Array(V).fill(0);

        dist[0] = 0;
        ways[0] = 1;

        const pq = new MinHeap();
        pq.push([0, 0]);

        while (!pq.isEmpty()) {
            const [time, node] = pq.pop();

            if (time > dist[node]) continue;

            for (let [adjNode, wt] of graph[node]) {
                const newTime = time + wt;

                
                if (newTime < dist[adjNode]) {
                    dist[adjNode] = newTime;
                    ways[adjNode] = ways[node];
                    pq.push([newTime, adjNode]);
                }
                else if (newTime === dist[adjNode]) {
                    ways[adjNode] = (ways[adjNode] + ways[node]) % MOD;
                }
            }
        }

        return ways[V - 1];
    }
}
