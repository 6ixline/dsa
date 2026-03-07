/*
Given n dice each with m faces. Find the number of ways to get sum x which is the summation of values on each face when all the dice are thrown.

Example:

Input: m = 6, n = 3, x = 12
Output: 25
Explanation: There are 25 total ways to get the Sum 12 using 3 dices with faces from 1 to 6.
Input: m = 2, n = 3, x = 6
Output: 1
Explanation: There is only 1 way to get the Sum 6 using 3 dices with faces from 1 to 2. All the dices will have to land on 2.
Constraints:
1 <= m,n,x <= 50
*/

class Solution {
    noOfWays(m, n, x) {
        // code here
        let dp = new Array(x + 1).fill(0);
        dp[0] = 1;
    
        for (let i = 1; i <= n; i++) {
            let next = new Array(x + 1).fill(0);
    
            for (let j = 0; j <= x; j++) {
                if (dp[j] > 0) {
                    for (let k = 1; k <= m; k++) {
                        if (j + k <= x) {
                            next[j + k] += dp[j];
                        }
                    }
                }
            }
    
            dp = next;
        }
    
        return dp[x];
    }
}
