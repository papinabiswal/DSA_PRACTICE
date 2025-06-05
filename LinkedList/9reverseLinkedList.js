// recursive
// TC: O(n)
//SC: O(n)
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
}

// iterative
// TC: O(n)
// SC: O(1)

// 1 -> 2 -> 3 -> null
// 1st Iteration:
// nextNode = current.next → nextNode = 2
// Reverse the link: current.next = prev → 1.next = null
// Move prev to current → prev = 1
// Move current to nextNode → current = 2

// 2nd Iteration:
// nextNode = current.next → nextNode = 3
// Reverse the link: current.next = prev → 2.next = 1
// Move prev to current → prev = 2
// Move current to nextNode → current = 3

var reverseList = function(head) {
    let current = head;
    let prev =null;

    while(current){
       let nextNode = current.next;
       current.next = prev;
       prev = current;
       current = nextNode;
    }
    return prev;
};