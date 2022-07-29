/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)


*/


function isSubsequence(str1, str2){
    if(str1 == str2){
        return true;
    }

    let start = 0;
    let p1 = str1.length -1;
    let p2 = str2.length -1;

    for(let val of str1){
        
    }

  
}