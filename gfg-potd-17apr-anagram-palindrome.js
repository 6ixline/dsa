/*
Given a string s, determine whether its characters can be rearranged to form a palindrome. Return true if it is possible to rearrange the string into a palindrome; otherwise, return false.

Examples

Input: s = "baba"
Output: true
Explanation: Can be rearranged to form a palindrome "abba" 
Input: s = "geeksogeeks"
Output: true
Explanation: The characters of the string can be rearranged to form the palindrome "geeksoskeeg".
Input: s = "geeksforgeeks"
Output: false
Explanation: The given string can't be converted into a palindrome.
Constraints:
1 ≤ s.length ≤ 106
s consists of only lowercase English letters.
*/
/**
 * @param {string} s
 * @returns {boolean}
 */
class Solution {
    canFormPalindrome(s) {
        // code here
        const freq = new Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            freq[s.charCodeAt(i) - 97]++;
        }
    
        let oddCount = 0;
    
        for (let i = 0; i < 26; i++) {
            if (freq[i] % 2 !== 0) oddCount++;
            if (oddCount > 1) return false;
        }
    
        return true;
    }
}
