

class ListNode{
    constructor(val, next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);


var isPalindrome = function(head) {
    let arr = [];

    let slow = head;
    let fast = head;
    let temp = head;
    let linkLength  = 0;
    while(temp != null){    
        linkLength++;
        temp = temp.next;
    }

    while(fast != null && fast.next != null){
        arr.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }

    if(linkLength % 2 != 0){
        slow = slow.next;
    }


    if(linkLength <= 2){
        return slow.val == arr.pop(); 
    }

    while(slow != null){
        if(!(slow.val == arr.pop())){
            return false;
        }
        slow = slow.next;
    }

    return true;

};

console.log(isPalindrome(head));