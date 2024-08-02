var maxSumAfterPartitioning = function(arr, k) {
    let n = arr.length;
    arr.sort((a, b) => b - a);
    let hs = new Set();
    let arr1 = [];
    for(let i = 0; i < n; i++){
        if(!hs.has(arr[i])){
            arr1.push(arr[i]);
            hs.add(arr[i]);
        }
    }
    let len = 0;
    let sum = 0;
    let i = 0;
    console.log(arr1);
    while(len + k < n){
        sum += arr1[i] * k;
        len += k;
        i++;
    }
    let remain = n - len;
    if(remain > 0){
        sum += remain * arr1[i];
    }
    return sum;
};

console.log(maxSumAfterPartitioning([1,4,1,5,7,3,6,1,9,9,3], 4))