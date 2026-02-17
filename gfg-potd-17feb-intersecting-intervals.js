/*
You are given an array of intervals arr[][], where each interval is represented by two integers [start, end] (inclusive). Return the maximum number of intervals that overlap at any point in time.

Examples :

Input: arr[][] = [[1, 2], [2, 4], [3, 6]]
Output: 2
Explanation: The maximum overlapping intervals are 2(between (1, 2) and (2, 4) or between (2, 4) and (3, 6))
 
Input: arr[][] = [[1, 8], [2, 5], [5, 6], [3, 7]]
Output: 4
Explanation: The maximum overlapping intervals are 4 (between (1, 8), (2, 5), (5, 6) and (3, 7))
Constraints:
2 ≤ arr.size() ≤ 2 * 104
1 ≤ arr[i][0] < arr[i][1] ≤ 4*106
*/

class Solution {
    overlapInt(arr) {
        let maxi = -1;

        for (let i = 0; i < arr.length; i++) {
            maxi = Math.max(maxi, Math.max(arr[i][0], arr[i][1]));
        }

        let v = new Array(maxi + 1).fill(0);
        for (let i = 0; i < arr.length; i++) {
            v[arr[i][0]] += 1;
            if (arr[i][1] < maxi) {
                v[arr[i][1] + 1] -= 1;
            }
        }

        for (let i = 1; i < v.length; i++) {
            v[i] += v[i - 1];
        }

        return Math.max(...v);
    }
};
