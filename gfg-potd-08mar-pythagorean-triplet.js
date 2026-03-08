/*
Given an array arr[], return true if there is a triplet (a, b, c) from the array (where a, b, and c are on different indexes) that satisfies a2 + b2 = c2, otherwise return false.

Examples:

Input: arr[] = [3, 2, 4, 6, 5]
Output: true
Explanation: a=3, b=4, and c=5 forms a pythagorean triplet.
Input: arr[] = [3, 8, 5]
Output: false
Explanation: No such triplet possible.
Input: arr[] = [1, 1, 1]
Output: false
Constraints:
1 <= arr.size() <= 105
1 <= arr[i] <= 103
*/
/**
 * @param {number[]} arr
 * @return {boolean}
 */

class Solution {
    pythagoreanTriplet(arr) {
        // code here
        const squares = new Set();

        for (let num of arr) {
            squares.add(num * num);
        }

        const nums = [...arr];

        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                let sum = nums[i] * nums[i] + nums[j] * nums[j];
                if (squares.has(sum)) {
                    return true;
                }
            }
        }

        return false;
    }
}
