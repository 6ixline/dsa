// My Solution

function selectionSort(arr){
    

    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }

        if(i != lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    
    return arr;
}



console.log(selectionSort([2,12,11,5,6,7,3]));