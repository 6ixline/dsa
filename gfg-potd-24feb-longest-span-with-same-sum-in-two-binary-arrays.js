/* 

Given two binary arrays, a1[] and a2[] of equal length. Find the length of longest common span (i, j), where i<= j such that a1[i] + a1[i+1] + .... + a1[j] =  a2[i] + a2[i+1] + ... + a2[j].

Examples:

Input: a1[] = [0, 1, 0, 0, 0, 0], a2[] = [1, 0, 1, 0, 0, 1]
Output: 4
Explanation: The longest span with same sum is from index 1 to 4 (0-based indexing).
Input: a1[] = [0, 1, 0, 1, 1, 1, 1], a2[] = [1, 1, 1, 1, 1, 0, 1]
Output: 6
Explanation: The longest span with same sum is from index 1 to 6 (0-based indexing).
Input: a1[] = [0, 0, 0], a2[] = [1, 1, 1]
Output: 0
Explanation: There is no span where the sum of the elements in a1[] and a2[] is equal.
Constraints:
1 ≤ a1.size() = a2.size() ≤ 106
0 ≤ a1[i], a2[i] ≤ 1

*/

/**
 * @param {number[]} a1
 * @param {number[]} a2
 * @returns {number}
 */
class Solution {
    equalSumSpan(a1, a2) {
        // code here
        const n = a1.length;
    
        let sum1 = 0;
        let sum2 = 0;
        let maxLen = 0;
        
        const map = new Map();
        map.set(0, -1);
        
        for (let i = 0; i < n; i++) {
            sum1 += a1[i];
            sum2 += a2[i];
            
            let diff = sum1 - sum2;
            
            if (map.has(diff)) {
                let length = i - map.get(diff);
                maxLen = Math.max(maxLen, length);
            } else {
                map.set(diff, i);
            }
        }
        
        return maxLen;
    }
}
