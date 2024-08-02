class ListNode{
    constructor(val, next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


let head = new ListNode(1);
head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

var reorderList = function(head) {
    let slow = head;
    let fast = head;

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }

    let mid = slow;

    let head2 = mid.next;
    mid.next = null;


    let prev = null;
    let curr = head2;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    let list1 = head;
    let list2 = prev;

    while(list2 != null){
        let temp = list1.next;
        list1.next = list2;
        list2 = list2.next;
        list1.next.next = temp;
        list1 = temp;
    }
    return head;

};

console.log(reorderList(head));