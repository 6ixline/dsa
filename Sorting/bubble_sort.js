// O(n^2)
function bubbleSort(arr){
    let i = arr.length - 1;

    for(let i = arr.length - 1; i >= 0; i--){
        noswap = true;
        for(let j = 0; j <= i - 1; j++){
            if(arr[j] > arr[j+ 1]){
                arr = swap(arr, j, j+1);
                noswap = false;
            }
        }
        if(noswap) return arr;
    }

    return arr;
}

function swap (arr, ind1, ind2){
    let temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
    return arr;
}

console.log(bubbleSort([10,1,2,4,5]))