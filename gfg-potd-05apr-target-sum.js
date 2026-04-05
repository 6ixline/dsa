/*
Given an array of integers arr[] and an integer target. We need to build an expression out of arr[] by adding one of the symbols '+' or  '-' before each integer in arr[] and then concatenate all the integers. 
For example : if arr[] = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that can be built, which evaluates to target.

Note : An expression is considered different from another if the placement of '+' and '-' operators differs, even if the resulting value is the same. 

Examples :

Input: arr[] = [1, 1, 1, 1, 1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3
Input: arr[] = [1, 2, 3], target = 2
Output: 1
Explanation: There are 1 way to assign symbols to make the sum of nums be target 2(+1 -2 +3). 
Constraints:
1 ≤ arr.size() ≤ 50
1 ≤ arr[i] ≤ 20
0 ≤ sum(arr) ≤ 1000
-1000 ≤ target ≤ 1000
*/
class Solution {
    /**
    * @param number n
    * @param number[] arr
    * @param number target

    * @returns number
    */
    totalWays(arr, target) {
        // code here
        let totalSum = arr.reduce((a, b) => a + b, 0);

        // Edge cases
        if ((target + totalSum) % 2 !== 0) return 0;

        let P = (target + totalSum) / 2;
        if (P < 0) return 0;

        // DP array
        let dp = new Array(P + 1).fill(0);
        dp[0] = 1; // One way to make sum 0

        for (let num of arr) {
            for (let j = P; j >= num; j--) {
                dp[j] += dp[j - num];
            }
        }

        return dp[P];
    }
}
