/**
 * Given a binary array arr[] containing only 0s and 1s and an integer k,
 * you are allowed to flip at most k 0s to 1s.
 * Find the maximum number of consecutive 1's that can be obtained in the
 * array after performing the operation at most k times.
 *
 * Examples:
 *
 * Input: arr[] = [1, 0, 1], k = 1
 * Output: 3
 * Explanation:
 * By flipping the zero at index 1, we get the longest subarray from index 0
 * to 2 containing all 1’s.
 *
 * Input: arr[] = [1, 0, 0, 1, 0, 1, 0, 1], k = 2
 * Output: 5
 * Explanation:
 * By flipping the zeroes at indices 4 and 6, we get the longest subarray from
 * index 3 to 7 containing all 1’s.
 *
 * Input: arr[] = [1, 1], k = 2
 * Output: 2
 * Explanation:
 * Since the array already has the maximum consecutive 1's, no operation is
 * needed. Hence the answer is 2.
 *
 * Constraints:
 * 1 ≤ arr.size() ≤ 10^5
 * 0 ≤ k ≤ arr.size()
 * 0 ≤ arr[i] ≤ 1
 */


/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    maxOnes(arr, k) {
        // code here
        if(arr.length <= k){
            return Math.min(arr.length, k);
        }
        let max_len = 0;
        let left = 0;
        let zeros = 0;
        for(let right = 0; right < arr.length; right++){
            if(arr[right] == 0){
                zeros++;
            }
            while (zeros > k){
                let val = arr[left];
                if(val == 0){
                    zeros--;
                }
                left++;
            }
            
            max_len = Math.max(max_len, right - left + 1);
        }
        
        return max_len;
    }
}
