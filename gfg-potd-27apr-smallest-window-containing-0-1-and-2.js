/*
Given a string s consisting only of the characters '0', '1' and '2', determine the length of the smallest substring that contains all three characters at least once.

If no such substring exists, return -1.

Examples :

Input: s = "10212"
Output: 3
Explanation: The substring "102" is the shortest substring that contains all three characters '0', '1', and '2', so the answer is 3.
Input: s = "12121"
Output: -1
Explanation: The character '0' is not present in the string, so no substring can contain all three characters '0', '1', and '2'. Hence, the answer is -1.
Constraints:
1 ≤ s.size() ≤ 105
*/
/**
 * @param {string} s
 * @returns {number}
 */
class Solution {
    smallestSubstring(s) {
        // code here
        let count = { '0': 0, '1': 0, '2': 0 };
        let left = 0, minLen = Infinity, unique = 0;
    
        for (let right = 0; right < s.length; right++) {
            if (count[s[right]] === 0) unique++;
            count[s[right]]++;
    
            while (unique === 3) {
                minLen = Math.min(minLen, right - left + 1);
                count[s[left]]--;
                if (count[s[left]] === 0) unique--;
                left++;
            }
        }
    
        return minLen === Infinity ? -1 : minLen;
    }
};
