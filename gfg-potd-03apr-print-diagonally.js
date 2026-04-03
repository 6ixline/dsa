/**
Give a n * n square matrix mat[][], return all the elements of its anti-diagonals from top to bottom.

Examples :

Input: n = 2, mat[][] = [[1, 2],
                        [3, 4]]
Output: [1, 2, 3, 4]
Explanation: 

Input: n = 3, mat[][] = [[1, 2, 3],
                       [4, 5, 6],
                       [7, 8, 9]]
Output: [1, 2, 4, 3, 5, 7, 6, 8, 9]
Explanation: 

Constraints:
1 ≤ n ≤ 103
0 ≤ mat[i][j] ≤ 106
*/

/**
 * @param {number} n
 * @param {number[][]} mat
 * @returns {number[]}
 */

class Solution {
    diagView(mat) {
        //  code here
        let n = mat.length;
        let result = [];

        for (let d = 0; d < 2 * n - 1; d++) {
            let row = d < n ? 0 : d - n + 1;
            let col = d < n ? d : n - 1;
    
            while (row < n && col >= 0) {
                result.push(mat[row][col]);
                row++;
                col--;
            }
        }
    
        return result;
    }
}
