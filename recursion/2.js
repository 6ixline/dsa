// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str){
    // add whatever parameters you deem necessary - good luck!]
    if(str.length === 0) return '';
    return str[str.length - 1] + reverse(str.slice(0,str.length - 1))
}
  
  console.log(reverse('awesome')) // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'


//   Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!

    function reverse(str){
        // add whatever parameters you deem necessary - good luck!]
        if(str.length === 0) return '';
        return str[str.length - 1] + reverse(str.slice(0,str.length - 1))
    }

    let str2 = reverse(str);

    if(str1 == str2){
        return true;
    }

    return false;
}


// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.


// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, fun){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0) return false;

    if(fun(arr[0])){
        return true;
    }else{
       return someRecursive(arr.slice(1), fun)
    }
}






function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }
  