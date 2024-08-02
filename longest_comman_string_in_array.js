/*
    Given an array of strings arr. Return the longest common prefix among all strings present in the array. If there's no prefix common in all the strings, return "-1".

    Example:
    Input: arr[] = ["geeksforgeeks", "geeks", "geek", "geezer"]
    Output: gee
    Explanation: "gee" is the longest common prefix in all the given strings.

    Input: arr[] = ["hello", "world"]
    Output: -1
    Explanation: There's no common prefix in the given strings.

*/

function longestCommonPrefix(arr) {
    // code here
    if(arr.length == 1){
        return arr[0];
    }

    let prefix = "";
    let n = arr.length;
    let minLength = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length < minLength){
            minLength = arr[i].length;
        }
    }
    
    for(let i = 0; i < minLength; i++){
        let str = arr[0][i];
        for(let j = 1; j < arr.length; j++){
            if(arr[j][i] != str){
                return prefix.length == 0 ? -1 : prefix;
            }
        }
        prefix += str;
    }
    
    return prefix
}


console.log(longestCommonPrefix(["hello","hell"]))