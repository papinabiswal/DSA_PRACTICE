// TC: O(n)
// SC: O(1)

// 1. Use two pointers, slow and fast.
// 2. Move slow by one step and fast by two steps until fast reaches the end.
// head = [1, 2, 3, 4, 5]
// 1st iteration slow = 2, fast = 3 but prev = 1
// 2nd iteration slow = 3, fast = 5 but prev = 2
// as there is no next for the fast pointer, the loop will break and prev will be so prev.next = slow.next will be 4



var deleteMiddle = function(head) {
    if(!head || !head.next) return null;

    let slow = head, fast = head, prev =null;
    while(fast && fast.next){
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    prev.next = slow.next;
    return head;
};