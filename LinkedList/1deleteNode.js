// TC: O(1)
// SC: O(1)

// 1. Copy the value of the next node into the current node.
// 2. Skip the next node (which is now a duplicate).
// 3. The current node appears to be deleted.

// node.val = node.next.val; → copy value of 1 into current node → list becomes 4 → 1 → 1 → 9

// node.next = node.next.next; → skip over the duplicate 1 → list becomes 4 → 1 → 9

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};