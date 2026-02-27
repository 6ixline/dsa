/*
Given a matrix mat[][] of size n × m and an integer x, find the number of square submatrices whose sum of elements is equal to x.

Examples:

Input: mat[][] = [[2, 4, 7, 8, 10], 
               [3, 1, 1, 1, 1], 
               [9, 11, 1, 2, 1], 
               [12, -17, 1, 1, 1]] , 
x = 10
Output: 3
Explanation: The sub-squares whose sum of elements = 10, are colored in the matrix.

Input: mat[][] = [[3, 3, 5, 3], 
               [2, 2, 2, 6], 
               [11, 2, 2, 4]] ,
x = 1
Output: 0
Explanation: There is no sub-squares whose sum of elements is 1.
Constraints:
1 ≤ n, m ≤ 100
-103 ≤ mat[i] ≤ 103
-109 ≤ x ≤ 109
*/
class Solution {
    countSquare(mat, x) {
        // code here
        const n = mat.length;
  const m = mat[0].length;

  let count = 0;
  const maxSize = Math.min(n, m);

  for (let size = 1; size <= maxSize; size++) {
    
    for (let top = 0; top + size <= n; top++) {
      
      const colSum = Array(m).fill(0);

      for (let r = top; r < top + size; r++) {
        for (let c = 0; c < m; c++) {
          colSum[c] += mat[r][c];
        }
      }

      
      let windowSum = 0;

      
      for (let c = 0; c < size; c++) {
        windowSum += colSum[c];
      }

      if (windowSum === x) count++;

      
      for (let c = size; c < m; c++) {
        windowSum += colSum[c] - colSum[c - size];
        if (windowSum === x) count++;
      }
    }
  }

  return count;
    }
}
