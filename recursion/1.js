function factorial(num){
    if(num == 1) return 1;
    return num * factorial(num - 1);
}

// console.log(factorial(4));


function productOfArray(arr){
    if(arr.length == 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60


/* 

Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
*/

function recursiveRange(num){
    let i = 0, sum = 0, val = num;
    function helperRange(num){
        if(val == i) return;
        i++;
        sum += i;
        return helperRange(i);

    }
   helperRange(num)
   return sum;
}

function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
 }
// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55


/*

Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

*/
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465


