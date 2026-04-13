/*
Given a number, in the form of an array num[] containing digits from 1 to 9(inclusive). Find the next smallest palindrome strictly larger than the given number.

Examples:

Input: num[] = [9, 4, 1, 8, 7, 9, 7, 8, 3, 2, 2]
Output: [9, 4, 1, 8, 8, 0, 8, 8, 1, 4, 9]
Explanation: Next smallest palindrome is 9 4 1 8 8 0 8 8 1 4 9.
Input: num[] = [2, 3, 5, 4, 5]
Output: [2, 3, 6, 3, 2]
Explanation: Next smallest palindrome is 2 3 6 3 2.
Constraints:
1 ≤ n ≤ 105
1 ≤ num[i] ≤ 9

*/
class Solution {
    nextPalindrome(num) {
        // code here
        let n = num.length;

        // Check all 9s
        let allNine = num.every(d => d === 9);
        if (allNine) {
            let ans = new Array(n + 1).fill(0);
            ans[0] = 1;
            ans[n] = 1;
            return ans;
        }

        let ans = [...num];
        let mid = Math.floor(n / 2);

        // Mirror
        for (let i = 0; i < mid; i++) {
            ans[n - i - 1] = ans[i];
        }

        // Compare
        const isSmallerOrEqual = (a, b) => {
            for (let i = 0; i < a.length; i++) {
                if (a[i] < b[i]) return true;
                if (a[i] > b[i]) return false;
            }
            return true;
        };

        if (isSmallerOrEqual(ans, num)) {
            let i = (n % 2 === 0) ? mid - 1 : mid;
            let carry = 1;

            while (i >= 0 && carry > 0) {
                ans[i] += carry;
                carry = Math.floor(ans[i] / 10);
                ans[i] %= 10;

                ans[n - 1 - i] = ans[i];
                i--;
            }
        }

        return ans;
    }
}
