/*
Given an array arr[] consisting of positive integers, your task is to find the length of the longest subarray that contains at most two distinct integers.

Examples:

Input: arr[] = [2, 1, 2]
Output: 3
Explanation: The entire array [2, 1, 2] contains at most two distinct integers (2 and 1). Hence, the length of the longest subarray is 3.
Input: arr[] = [3, 1, 2, 2, 2, 2]
Output: 5
Explanation: The longest subarray containing at most two distinct integers is [1, 2, 2, 2, 2], which has a length of 5.
Constraints:
1 ≤ arr.size() ≤ 105
1 ≤ arr[i] ≤ 105
*/

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    totalElements(arr) {
        // code here
        let left = 0;
        let maxLength = 0;
        let countMap = new Map();
    
        for (let right = 0; right < arr.length; right++) {
            
            countMap.set(arr[right], (countMap.get(arr[right]) || 0) + 1);
    
            
            while (countMap.size > 2) {
                countMap.set(arr[left], countMap.get(arr[left]) - 1);
    
                if (countMap.get(arr[left]) === 0) {
                    countMap.delete(arr[left]);
                }
    
                left++;
            }
    
            
            maxLength = Math.max(maxLength, right - left + 1);
        }
    
        return maxLength;
    }
}
