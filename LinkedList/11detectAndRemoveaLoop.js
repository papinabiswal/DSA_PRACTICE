function detectAndRemoveLoop(head) {
    let slow = head;
    let fast = head;

    // Step 1: Detect loop
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            removeLoop(slow, head);
            return true; // loop was present and removed
        }
    }

    return false; // no loop
}

function removeLoop(meetingPoint, head) {
    let ptr1 = head;
    let ptr2 = meetingPoint;

    // If loop starts from head
    if (ptr1 === ptr2) {
        while (ptr2.next !== ptr1) {
            ptr2 = ptr2.next;
        }
        ptr2.next = null;
        return;
    }

    // Move both one step until next pointers match
    while (ptr1.next !== ptr2.next) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }

    // Break the loop
    ptr2.next = null;
}
