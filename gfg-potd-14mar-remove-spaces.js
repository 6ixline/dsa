/*
Given a string s, remove all the spaces from the string and return the modified string.

Examples:

Input: s = "g eeks for ge eeks"
Output: "geeksforgeeks"
Explanation: All space characters are removed from the given string while preserving the order of the remaining characters, resulting in the final string "geeksforgeeks".
Input: s = "abc d "
Output: "abcd"
Explanation:  All space characters are removed from the given string while preserving the order of the remaining characters, resulting in the final string "abcd".
Constraints:
1 ≤ |s| ≤ 105

*/
/**
 * @param {string}s
 * @returns {string}
 */
class Solution {
    removeSpaces(s) {
        // code here
       return s.replace(/ /g, ""); 
    }
}
