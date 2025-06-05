// Dry Run on 1 -> 2 -> 3 -> 4 -> 5 and n = 2
// Initial:
// fast = head (1)
// slow = head (1)

// Step 1: Move fast n steps ahead (2 steps)
// i = 1 → fast = 2
// i = 2 → fast = 3

// Step 2: Now move both fast and slow together until fast.next === null
// fast = 4, slow = 2
// fast = 5, slow = 3 → stop here (fast.next === null)

// Step 3: Remove the node after slow
// slow = 3, so slow.next = 4
// We set: slow.next = slow.next.next
// So: 3.next = 5, skipping 4

// Resulting List:
// ✅ 1 -> 2 -> 3 -> 5


var removeNthFromEnd = function(head, n) {

    let fast = head;
    let slow = head;

    for(let i=1; i<= n; i++){
        fast = fast.next;
    }

    if(fast === null){
        return head.next;
    }

    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
}