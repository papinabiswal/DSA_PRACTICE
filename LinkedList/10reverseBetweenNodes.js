var reverseBetween = function(head, left, right) {
    if (head === null || head.next === null) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    // Move `prev` to the node before `left`
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let curr = prev.next;

    // Reverse the sublist between left and right
    for (let i = 1; i <= right - left; i++) {
        let temp = prev.next;           // Step 1: store prev.next
        prev.next = curr.next;          // Step 2: move curr.next up to prev.next
        curr.next = curr.next.next;     // Step 3: skip over the moved node
        prev.next.next = temp;          // Step 4: point moved node back to temp
    }

    return dummy.next;
};