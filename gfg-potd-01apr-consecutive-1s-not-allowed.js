/*
Given a positive integer n, count all possible distinct binary strings of length n such that there are no consecutive 1’s.

Examples :

Input: n = 3
Output: 5
Explanation: 5 strings are ("000", "001", "010", "100", "101").
Input: n = 2
Output: 3
Explanation: 3 strings are ("00", "01", "10").
Input: n = 1
Output: 2
Constraints:
1 ≤ n ≤ 44
*/
/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
    countStrings(n) {
        // code here
        if (n === 1) return 2;
        if (n === 2) return 3;

        let prev2 = 2; // dp[1]
        let prev1 = 3; // dp[2]
    
        for (let i = 3; i <= n; i++) {
            let curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }

        return prev1;
    }
}
