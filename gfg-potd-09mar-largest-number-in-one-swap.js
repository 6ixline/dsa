/*
Given a string s, return the lexicographically largest string that can be obtained by swapping at most one pair of characters in s.

Examples:

Input: s = "768"
Output: "867"
Explanation: Swapping the 1st and 3rd characters(7 and 8 respectively), gives the lexicographically largest string.
Input: s = "333"
Output: "333"
Explanation: Performing any swaps gives the same result i.e "333".
Constraints:
1 ≤ |s| ≤ 105
'0' ≤ s[i] ≤ '9'
*/
/**
 * @param {string} s
 * @returns {boolean}
 */

class Solution {
    largestSwap(s) {
        // code here
        let arr = s.split('');
        let last = new Array(10).fill(-1);


        for (let i = 0; i < arr.length; i++) {
            last[arr[i]] = i;
        }

        for (let i = 0; i < arr.length; i++) {
            let current = Number(arr[i]);
            
            for (let d = 9; d > current; d--) {
                if (last[d] > i) {
                    [arr[i], arr[last[d]]] = [arr[last[d]], arr[i]];
                    return arr.join('');
                }
            }
        }

        return s; 
    }
}
