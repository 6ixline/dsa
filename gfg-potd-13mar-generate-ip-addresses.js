/*
Given a string s containing only digits, your task is to restore it by returning all possible valid IP address combinations. You can return your answer in any order.

A valid IP address must be in the form of A.B.C.D, where A, B, C, and D are numbers from 0-255(inclusive).

Note: The numbers cannot be 0 prefixed unless they are 0. For example, 1.1.2.11 and 0.11.21.1 are valid IP addresses while 01.1.2.11 and 00.11.21.1 are not.
If there are no possible valid IP address return an empty list. The driver code will print -1 in this case.

Examples:

Input: s = “255678166”
Output: [“25.56.78.166”, “255.6.78.166”, “255.67.8.166”, “255.67.81.66”]
Explanation: These are the only valid possible IP addresses.
Input: s = “25505011535”
Output: []
Explanation: We cannot generate a valid IP address with this string.
Constraints:
1 ≤ s.size() ≤ 16
s contains only digits(i.e. 0-9)
*/

/**
 * @param {string} s
 * @returns {string[]}
 */

class Solution {
    generateIp(s) {
        // code here
        const result = [];

        function backtrack(start, parts, path) {
            
            if (parts === 4 && start === s.length) {
                result.push(path.join('.'));
                return;
            }
    
            if (parts === 4 || start === s.length) return;
    
            for (let len = 1; len <= 3; len++) {
                if (start + len > s.length) break;
    
                let segment = s.substring(start, start + len);
    
                if (segment.length > 1 && segment[0] === '0') continue;
    
                if (Number(segment) > 255) continue;
    
                path.push(segment);
                backtrack(start + len, parts + 1, path);
                path.pop();
            }
        }
    
        backtrack(0, 0, []);
        return result;
    }
}
