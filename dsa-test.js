// let solve = function (A, B) {
//   let hm = new Map();
//   let initialCount = 0;
//   let ans = [];
//   for (let i = 0; i < B; i++) {
//     if (hm.has(A[i])) {
//       hm.set(A[i], hm.get(A[i]) + 1);
//     } else {
//         initialCount++;
//       hm.set(A[i], 1);
//     }
//   }
//   ans.push(initialCount);

//   for(let i = B; i < A.length; i++){
//     hm.set(A[i - B], hm.get(A[i - B]) - 1);
//     if(hm.get(A[i - B]) <= 0){
//         initialCount--;
//     }

//     if(hm.has(A[i])){
//         ans.push(initialCount);
//         hm.set(A[i], hm.get(A[i] + 1));
//     }else{ 
//         initialCount++;
//         hm.set(A[i], 1);
//         ans.push(initialCount);
//     }
//   }

//   return ans;
// };

let solve = function (A, B){
    let hm = new Map();
    let initialCount = 0;
    let ans = [];
    
    for(let i = 0; i < B; i++){
        if(hm.has(A[i])){
            hm.set(A[i], hm.get(A[i]) + 1);
        }else{
            initialCount++;
            hm.set(A[i], 1);
        }
    }
    
    ans.push(initialCount);
    
    for(let i = B; i < A.length; i++){
        hm.set(A[i - B], hm.get(A[i - B] - 1));
        if(hm.get(A[i - B]) <= 0){
            initialCount--;
        }
        
        if(hm.has(A[i])){
            ans.push(initialCount);
            hm.set(A[i], hm.get(A[i]) + 1);
        }else{
            initialCount++;
            hm.set(A[i], 1);
            ans.push(initialCount);
        }
    }
    
    return ans;
}

console.log(solve([80, 18, 80, 80, 80, 80, 80, 80, 94, 18], 8));
