// TC: O(1)
// SC: O(1)

// 1. Copy the value of the next node into the current node.
// 2. Skip the next node (which is now a duplicate).
// 3. The current node appears to be deleted.

var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};