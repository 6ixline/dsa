// O(N^2)
function insertion_sort(arr){
    for(let i = 0; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && currentVal < arr[j]; j--){
            arr[j + 1] = arr[j];
        }
        arr[j+ 1] = currentVal;
    }

    return arr;
}

console.log(insertion_sort([54, 43, 74, 4, 6, 8]))
