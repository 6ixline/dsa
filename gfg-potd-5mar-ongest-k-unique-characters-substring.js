/*

You are given a string s consisting only lowercase alphabets and an integer k. Your task is to find the length of the longest substring that contains exactly k distinct characters.

Note : If no such substring exists, return -1. 

Examples:

Input: s = "aabacbebebe", k = 3
Output: 7
Explanation: The longest substring with exactly 3 distinct characters is "cbebebe", which includes 'c', 'b', and 'e'.
Input: s = "aaaa", k = 2
Output: -1
Explanation: There's no substring with 2 distinct characters.
Input: s = "aabaaab", k = 2
Output: 7
Explanation: The entire string "aabaaab" has exactly 2 unique characters 'a' and 'b', making it the longest valid substring.
Constraints:
1 ≤ s.size() ≤ 105
1 ≤ k ≤ 26

*/

/**
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestKSubstr(s, k) {
        // code here
        let left = 0;
        let maxLen = -1;
        let freq = new Map();
    
        for (let right = 0; right < s.length; right++) {
            
            freq.set(s[right], (freq.get(s[right]) || 0) + 1);
    
            
            while (freq.size > k) {
                freq.set(s[left], freq.get(s[left]) - 1);
    
                if (freq.get(s[left]) === 0) {
                    freq.delete(s[left]);
                }
    
                left++;
            }
    
            
            if (freq.size === k) {
                maxLen = Math.max(maxLen, right - left + 1);
            }
        }
    
        return maxLen;
    }
}
