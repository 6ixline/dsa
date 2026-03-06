/*

Given two strings s and p. Find the smallest substring in s consisting of all the characters (including duplicates) of the string p. Return empty string in case no such substring is present.
If there are multiple such substring of the same length found, return the one with the least starting index.

Examples:

Input: s = "timetopractice", p = "toc"
Output: "toprac"
Explanation: "toprac" is the smallest substring in which "toc" can be found.
Input: s = "zoomlazapzo", p = "oza"
Output: "apzo"
Explanation: "apzo" is the smallest substring in which "oza" can be found.
Input: s = "zoom", p = "zooe"
Output: ""
Explanation: No substring is present containing all characters of p.
Constraints: 
1 ≤ s.length(), p.length() ≤ 106
s, p consists of lowercase english letters

*/
/**
 * @param {string} s
 * @param {string} p
 * @return {string}
 **/

class Solution {
    minWindow(s, p) {
        // code here
        if (p.length > s.length) return "";

        let need = new Array(26).fill(0);
    
        for (let char of p) {
            need[char.charCodeAt(0) - 97]++;
        }
    
        let required = p.length;
        let left = 0;
        let minLen = Infinity;
        let start = 0;
    
        for (let right = 0; right < s.length; right++) {
    
            let idx = s.charCodeAt(right) - 97;
    
            if (need[idx] > 0) {
                required--;
            }
    
            need[idx]--;
    
            while (required === 0) {
    
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    start = left;
                }
    
                let leftIdx = s.charCodeAt(left) - 97;
    
                need[leftIdx]++;
    
                if (need[leftIdx] > 0) {
                    required++;
                }
    
                left++;
            }
        }
    
        return minLen === Infinity ? "" : s.substring(start, start + minLen);
    }
}
