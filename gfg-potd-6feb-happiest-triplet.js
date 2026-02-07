/*
You are given three arrays a[], b[], and c[] of the same size.
Find a triplet such that the difference (maximum - minimum) of the
triplet is the minimum among all possible triplets.

Rules:
- The triplet must contain exactly one element from each array.
- Among all triplets with the smallest (max - min) difference,
  choose the one with the smallest sum of elements.
- Print the final triplet in decreasing order.

This selected triplet is called the "happiest" triplet.

Examples:

Input:
a = [5, 2, 8]
b = [10, 7, 12]
c = [9, 14, 6]

Output:
[7, 6, 5]

Explanation:
The triplet [5, 7, 6] has a difference of (7 - 5) = 2,
which is the minimum possible among all triplets.

---

Input:
a = [15, 12, 18, 9]
b = [10, 17, 13, 8]
c = [14, 16, 11, 5]

Output:
[11, 10, 9]

Explanation:
Multiple triplets have the same minimum difference.
Among them, [11, 10, 9] has the smallest sum, so it is chosen.

Constraints:
- 1 ≤ a.length, b.length, c.length ≤ 10^5
- 1 ≤ a[i], b[i], c[i] ≤ 10^5
*/


/**
 * @param {number[]} a
 * @param {number[]} b
 * @param {number[]} c
 * @returns {number[]}
 */

class Solution {
    smallestDiff(a, b, c) {
        // code here
        a.sort((x, y) => x - y);
        b.sort((x, y) => x - y);
        c.sort((x, y) => x - y);
        
        let i = 0, j = 0, k = 0;
        let best_sum = Number.POSITIVE_INFINITY;
        let best_diff = Number.POSITIVE_INFINITY;
        let best_triplet = [];
    
        while (i < a.length && j < b.length && k < c.length){
            let x = a[i]; let y = b[j]; let z = c[k];
            
            let min_val = Math.min(a[i], b[j], c[k]);
            let max_val = Math.max(a[i], b[j], c[k]);
            
            let diff = max_val - min_val;
            let sum_val = x + y + z;
            
            if (diff < best_diff || (diff == best_diff && sum_val < best_sum)){
                best_sum = sum_val;
                best_diff = diff;
                best_triplet = [x, y, z];
            }
            
            if(min_val == x){
                i++;
            }else if(min_val == y){
                j++;
            }else{
                k++;
            }
            
        } 
        
        return best_triplet.sort((p, q) => q - p);
    }
}
