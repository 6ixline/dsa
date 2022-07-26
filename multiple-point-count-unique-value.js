// function countUniqueValues(arr){
//     if(arr.length == 0){
//         return 0;
//     }

//     let start = 0;
//     let end = 1;
    
//     while(end <= arr.length - 1){
//         if(arr[end] != arr[start]){
//             arr[start + 1] = arr[end];
//             start += 1;
//             end += 1;
//         }else if(arr[end] == arr[start]){
//             end += 1;
//         }
//     }

//     return start + 1;
// }
// Refactor
function countUniqueValues(arr){
    if(arr.length == 0) return 0;

    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}



console.log(countUniqueValues([1,1,1,2,2,2,3,3,4,4,5,7,7]))
