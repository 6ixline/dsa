/*
You are at the side of a river. You are given a m litre jug and a n litre jug . Both the jugs are initially empty. The jugs dont have markings to allow measuring smaller quantities. You have to use the jugs to measure d litres of water . Determine the minimum no of operations to be performed to obtain d litres of water in one of the jugs.
The operations you can perform are:

Empty a Jug
Fill a Jug
Pour water from one jug to the other until one of the jugs is either empty or full.
Examples:

Input: m = 3, n = 5, d = 4
Output: 6
Explanation: Operations are as follow-
1. Fill up the 5 litre jug.
2. Then fill up the 3 litre jug using 5 litre jug. Now 5 litre jug contains 2 litre water.
3. Empty the 3 litre jug.
4. Now pour the 2 litre of water from 5 litre jug to 3 litre jug.
5. Now 3 litre jug contains 2 litre of water and 5 litre jug is empty.
6. Now fill up the 5 litre jug.
7. Now fill one litre of water from 5 litre jug to 3 litre jug. Now we have 4 litre water in 5 litre jug.
Input: m = 8, n = 56, d = 46
Output: -1
Explanation: Not possible to fill any one of the jug with 46 litre of water.
Constraints:
1 ≤ n, m ≤ 100
1 ≤ d ≤ 100
*/
class Solution {
    gcd(a, b) {
        while (b !== 0) {
            let t = b;
            b = a % b;
            a = t;
        }
        return a;
    }

    pour(fromCap, toCap, d) {
        let from = fromCap;
        let to = 0;
        let step = 1;

        while (from !== d && to !== d) {
            let temp = Math.min(from, toCap - to);
            to += temp;
            from -= temp;
            step++;

            if (from === d || to === d) break;

            if (from === 0) {
                from = fromCap;
                step++;
            }

            if (to === toCap) {
                to = 0;
                step++;
            }
        }

        return step;
    }

    minSteps(m, n, d) {
        if (d > Math.max(m, n)) return -1;
        if (d % this.gcd(m, n) !== 0) return -1;

        return Math.min(this.pour(m, n, d), this.pour(n, m, d));
    }
}
