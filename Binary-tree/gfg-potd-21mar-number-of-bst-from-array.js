/*
You are given an integer array arr[] containing distinct elements.

Your task is to return an array where the ith element denotes the number of unique BSTs formed when arr[i] is chosen as the root.

Examples :

Input: arr[] = [2, 1, 3]
Output: [1, 2, 2]
Explanation: 
4
Input: arr[] = [2, 1]
Ouput: [1, 1]
Constraints:
1 ≤ arr.size() ≤ 6
1 ≤ arr[i] ≤ 15
*/
/**
 * @param {number[]} arr
 * @return {number[]}
 */

class Solution {
    countBSTs(arr) {
        // Code here
        const n = arr.length;

        const sorted = [...arr].sort((a, b) => a - b);

        const catalan = new Array(n + 1).fill(0);
        catalan[0] = 1;
        catalan[1] = 1;

        for (let i = 2; i <= n; i++) {
            for (let j = 0; j < i; j++) {
                catalan[i] += catalan[j] * catalan[i - j - 1];
            }
        }

        const map = new Map();

        for (let i = 0; i < n; i++) {
            const left = i;
            const right = n - i - 1;
            map.set(sorted[i], catalan[left] * catalan[right]);
        }

        return arr.map(val => map.get(val));
    }
}
