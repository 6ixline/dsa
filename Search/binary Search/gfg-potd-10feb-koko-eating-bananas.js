/*

Koko is given an array arr[], where each element represents a pile of bananas. She has exactly k hours to eat all the bananas.

Each hour, Koko can choose one pile and eat up to s bananas from it.

If the pile has atleast s bananas, she eats exactly s bananas.
If the pile has fewer than s bananas, she eats the entire pile in that hour.

Koko can only eat from one pile per hour.


Your task is to find the minimum value of s (bananas per hour) such that Koko can finish all the piles within k hours.

Examples:

Input: arr[] = [5, 10, 3], k = 4
Output: 5
Explanation: If Koko eats at the rate of 5 bananas per hour:
First pile of 5 bananas will be finished in 1 hour.
Second pile of 10 bananas will be finished in 2 hours.
Third pile of 3 bananas will be finished in 1 hours.
Therefore, Koko can finish all piles of bananas in 1 + 2 + 1 = 4 hours.
Input: arr[] = [5, 10, 15, 20], k = 7
Output: 10
Explanation: If Koko eats at the rate of 10 bananas per hour, it will take 6 hours to finish all the piles.
Constraint:
1 ≤ arr.size() ≤ k ≤ 106
1 ≤ arr[i] ≤ 106

*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    canFinish(arr, k, s){
        let h = 0;
        for(let i = 0; i < arr.length; i++){
            h += Math.ceil(arr[i] / s);
        }
        
        return h <= k;
    }
    kokoEat(arr, k) {
        // code here
        let low = 0;
        let high = Number.MIN_VALUE;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > high){
                high = arr[i];
            }
        }
        let ans = high;
        while(low <= high){
            let mid = Math.floor((low + high) / 2);
            
            if(this.canFinish(arr, k, mid))
            {
                ans = mid;
                high = mid - 1;
            }else{
                low = mid + 1; 
            }
        }
        
        return ans;
    }
}
