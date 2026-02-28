/*
Given two sorted arrays arr1[] and arr2[] of size n and m and a number x, find the pair whose sum is closest to x and the pair has an element from each array. In the case of multiple closest pairs return any one of them.

Note : In the driver code, the absolute difference between the sum of the closest pair and x is printed.

Examples:

Input : arr1[] = [1, 4, 5, 7], arr2[] = [10, 20, 30, 40], x = 32
Output : [1, 30]
Explanation:The closest pair whose sum is closest to 32 is [1, 30] = 31.
Input : arr1[] = [1, 4, 5, 7], arr2[] = [10, 20, 30, 40], x = 50 
Output : [7, 40] 
Explanation: The closest pair whose sum is closest to 50 is [7, 40] = 47.
Constraints:
1 ≤ arr1.size(), arr2.size() ≤ 105
1 ≤ arr1[i], arr2[i] ≤ 109
1 ≤ x ≤ 109
*/

/**
 * @param {number[]} arr
 * @param {number[]} brr
 * @param {number} n
 * @param {number} m
 * @param {number} x
 * @returns {number}
 */

class Solution {
    findClosestPair(arr1, arr2, x) {
        // your code here
        let n = arr1.length;
        let m = arr2.length
        
        let i = 0;
        let j = m - 1;
        
        let min = Number.MAX_VALUE;
        let pair = [0, 0]
        while(i < n && j >= 0){
            let sum = arr1[i] + arr2[j];
            let diff = Math.abs(sum - x);
            
            if(min > diff){
                pair = [arr1[i], arr2[j]];
                min = diff;
            }
            
            if(sum > x){
                j--;
            }else{
                i++;
            }
            
        }
        return pair;
        
    }
}
