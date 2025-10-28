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

// always remember 3 pointer we need in reverse linked list
// one is prev which is null, curr-> which will point to node, and next-> which will point to next node of curr;
// store the next node in nextNode ;
// and move the curr next pointer to prev;
// then move prev to curr;
// and curr to nextNode until curr is null;
// then retun prev;

var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let nextNode = null;

    while(curr){
        nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
};