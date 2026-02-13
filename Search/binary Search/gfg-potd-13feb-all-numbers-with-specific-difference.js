/*
Given a positive number n and a number d. Find the count of positive numbers smaller or equal to n such that the difference between the number and sum of its digits is greater than or equal to given specific value d.

Examples:

Input: n = 13, d = 2
Output: 4
Explanation:
There are 4 numbers satisfying the
Conditions. These are 10, 11, 12 and 13.
Input: n = 14, d = 3
Output: 5
Explanation:
There are 5 numbers satisfying the
Conditions. These are 10, 11, 12, 13 and 14.
Constraints:
1 ≤ n ≤ 109
1 ≤ d ≤ 109

*/

/**
 * @param number n
 * @param number d
 * @returns number
 */

class Solution {
    digitSum(n) {
        let total = 0;
    
        while (n > 0) {
            total += n % 10;          
            n = Math.floor(n / 10);
        }
    
        return total;
    }
    getCount(n, d) {
        // code here
        let low = 10;
        let high = n;
        let ans = 0;
        let x = -1;
        while(low <= high){
            let mid = Math.floor((low + high) / 2);
            
            if(mid - this.digitSum(mid) >= d){
                x = mid;
                high = mid - 1;
            }else{
                low = mid + 1;
            }
        }
        
        if(x == -1) return 0;
        
        return n - x + 1;
    }
}
