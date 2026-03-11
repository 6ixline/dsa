/*

Given an array arr[] of positive integers, find the total sum of the minimum elements of every possible subarrays.

Note: It is guaranteed that the total sum will fit within a 32-bit unsigned integer.

Examples:

Input: arr[] = [10, 20]
Output: 40
Explanation: Subarrays are [10], [20], [10, 20]. Minimums are 10, 20, 10.
Sum of all these is 40.
Input: arr[] = [1, 2, 3, 4]
Output: 20
Explanation: Subarrays are [1], [2], [3], [4], [1, 2], [1, 2, 3], [1, 2, 3, 4], [2, 3], [2, 3, 4], [3, 4]. Minimums are 1, 2, 3, 4, 1, 1, 1, 2, 2, 3.
Sum of all these is 20.
Constraints:
1 ≤ arr.size() ≤ 3*104
1 ≤ arr[i] ≤ 103

*/


/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    sumSubMins(arr) {
        // code here
        let n = arr.length;
        let stack = [];
        let left = new Array(n);
        let right = new Array(n);
    
        for (let i = 0; i < n; i++) {
            while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
                stack.pop();
            }
            left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
            stack.push(i);
        }
    
        stack = [];
    
        for (let i = n - 1; i >= 0; i--) {
            while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
                stack.pop();
            }
            right[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
            stack.push(i);
        }
    
        let sum = 0;
    
        for (let i = 0; i < n; i++) {
            sum += arr[i] * left[i] * right[i];
        }
    
        return sum;
    }
}
