function isAdditiveSequence(n) {
    //code here
    let arr = n.split("");
    let a = arr[0];
    let b = arr[1];

    for(let i = 2; i < arr.length; i++){
        let temp = b;
        b = parseInt(a) + parseInt(b);
        a = temp;
        let val = String(b);
        if(val != n.slice(i, i + val.length)){
            return 0;
        }

        if(i + val.length >= arr.length){
            return 1;
        }
    }

    return 1;
}


console.log(isAdditiveSequence("1235813"));