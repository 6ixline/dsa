/*
You are given an integer array arr[ ]. Your task is to count the number of subarrays where the first element is the minimum element of that subarray.

Note: A subarray is valid if its first element is not greater than any other element in that subarray.

Examples:

Input: arr[] = [1, 2, 1]
Output: 5
Explanation:
All possible subarrays are:
[1], [1, 2], [1, 2, 1], [2], [2, 1], [1]
Valid subarrays are:
[1], [1, 2], [1, 2, 1], [2], [1] -> total 5
Input: arr[] = [1, 3, 5, 2]
Output: 8
Explanation:
Valid subarrays are: [1], [1, 3], [1, 3, 5], [1, 3, 5, 2], [3], [3, 5], [5], [2] -> total 8
Constraints:
1 ≤ arr.size() ≤ 4*104
1 ≤ arr[i] ≤ 105
*/

/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    countSubarrays(arr) {
        // code here
        let n = arr.length;
        let nextSmaller = Array(n).fill(n);
        let stack = [];
    
        for (let i = 0; i < n; i++) {
            while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
                nextSmaller[stack.pop()] = i;
            }
            stack.push(i);
        }
    
        let count = 0;
        for (let i = 0; i < n; i++) {
            count += nextSmaller[i] - i;
        }
    
        return count;
    }
}
