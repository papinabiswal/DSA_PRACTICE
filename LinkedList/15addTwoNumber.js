// 1. Push all nodes from l1 into stack1 → O(n)
// 2. Push all nodes from l2 into stack2 → O(m)
// 3. While stack1 or stack2 or carry:
//    - Pop from both stacks → O(n + m)
//    - Add, compute carry, and build new list

var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];

    while(l1){
      stack1.push(l1.val);
      l1 = l1.next;
    }

    while(l2){
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let carry =0;
    let result = null;

    while(stack1.length > 0 || stack2.length > 0 || carry > 0 ){
        let val1 = stack1.pop() || 0;
        let val2 = stack2.pop() || 0;

        let total = val1 + val2 + carry;
        carry = Math.floor(total/10);

        let node = new ListNode(total % 10);
            node.next = result;
            result = node;
    }
    return result;
};