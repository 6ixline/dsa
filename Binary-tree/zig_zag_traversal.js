class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

class Solution 
{
    //Function to store the zig zag order traversal of tree in a list.
    zigZagTraversal(root)
    {
        //your code here
        // if null then return
        if (root == null) 
        {
            return;
        }

        let ans = [];
 
        // declare two stacks
        let currentLevel = [];
        let nextLevel = [];
 
        // push the root
        currentLevel.push(root);
        let leftToRight = true;
 
        // check if stack is empty
        while (currentLevel.length > 0) 
        {
 
            // pop out of stack
            let node = currentLevel.pop();
 
            // print the data in it
            ans.push(node.data);
 
            // store data according to current
            // order.
            if (leftToRight) 
            {
                if (node.left != null) 
                {
                    nextLevel.push(node.left);
                }
 
                if (node.right != null) 
                {
                    nextLevel.push(node.right);
                }
            }
            else
            {
                if (node.right != null) 
                {
                    nextLevel.push(node.right);
                }
 
                if (node.left != null) 
                {
                    nextLevel.push(node.left);
                }
            }
 
            if (currentLevel.length == 0) {
                leftToRight = !leftToRight;
                let temp = currentLevel;
                currentLevel = nextLevel;
                nextLevel = temp;
            }
        }

        return ans;
    }
}
let solution = new Solution();
console.log(solution.zigZagTraversal(root));