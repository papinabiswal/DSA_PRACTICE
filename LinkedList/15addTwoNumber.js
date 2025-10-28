// 1. Push all nodes from l1 into stack1 → O(n)
// 2. Push all nodes from l2 into stack2 → O(m)
// 3. While stack1 or stack2 or carry:
//    - Pop from both stacks → O(n + m)
//    - Add, compute carry, and build new list

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let total = val1 + val2 + carry;
        carry = Math.floor(total / 10);

        curr.next = new ListNode(total % 10); // ✅ append here
        curr = curr.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return dummy.next;
};