function validAnagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }else if(str1 == str2){
        return true;
    }
    let firstStr = {};
    let secondStr = {};
    
    
    for(let char of str1){
        firstStr[char] = (firstStr[char] || 0) + 1
    }
    for(let char of str2){
        secondStr[char] = (secondStr[char] || 0) + 1
    }
  
    for(let key in firstStr){
        if(!(key in secondStr)){
            return false;
        }
        if(!(firstStr[key] == secondStr[key])){
            return false;
        }
    }
    return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttext'));



