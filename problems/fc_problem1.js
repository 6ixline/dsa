/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/


function sameFrequency(n1, n2){
    
    let num1 = n1.toString();
    let num2 = n2.toString();

    if(num1.length != num2.length){
        return false;
    }

    if(num1 == num2){
        return true;
    }

    let feqNum1 = {};
    let feqNum2 = {};

    for(let num of num1){
        feqNum1[num] = (feqNum1[num] || 0) + 1;
    }

    for(let num of num2){
        feqNum2[num] = (feqNum2[num] || 0) + 1;
    }

    for(let key in feqNum1){
        if(!feqNum2[key]){
            return false;
        }

        if(feqNum1[key] != feqNum2[key]){
            return false;
        }
    }

    return true;

}

console.log(sameFrequency(1332,1233));