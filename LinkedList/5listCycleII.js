
// 1. Use two pointers (slow/fast) to detect cycle.
// 2. If they meet → cycle exists.
// 3. Start a pointer from head and move both (pointer & slow) step-by-step until they meet again → that's the cycle start.
// 4. If no meeting point → return null.

// TC: O(n)
// SC: O(1)


var detectCycle = function(head) {
    let slow = head;
    let fast = head;

    while(fast && fast.next){
       slow = slow.next;
       fast = fast.next.next;

        if(slow === fast){
            let pointer = head;
            while(pointer !== slow){
                pointer = pointer.next;
                slow = slow.next;
            }
            return pointer;
        }
    }
    return null;
};