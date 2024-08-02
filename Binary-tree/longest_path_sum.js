class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// let root = new Node(4);
// root.left = new Node(2);
// root.right = new Node(5);
// root.left.left = new Node(7);
// root.left.right = new Node(1);
// root.right.left = new Node(2);
// root.right.right = new Node(3);
// root.left.right.left = new Node(6);


// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);

let root = new Node(4);
root.left = new Node(9);
root.right = new Node(6);
root.left.left = new Node(5);
root.left.right = new Node(0);
root.right.left = new Node(0);
root.right.right = new Node(3);
root.right.left.left = new Node(6);

class Solution {
  sumOfLongRootToLeafPath(root) {

    let pathSum = 0;
    let ans = 0;
    let n = 0;
    let maxn = 0;
    function findMax(root){
        //code here
        if (root == null) {
            return 0;
        }
        n += 1;
        let sum = 0;
        pathSum += root.data;
        if(n >= maxn){
            if(n > maxn){
                ans = pathSum;
            }else{
                ans = Math.max(pathSum, ans);
            }
            maxn = n;
        }
        sum = pathSum + Math.max(findMax(root.left), findMax(root.right));
        pathSum -= root.data;
        n -= 1;
        return sum;
    }
    findMax(root)
    return ans;
  }
}

let solution = new Solution();
console.log(solution.sumOfLongRootToLeafPath(root))
