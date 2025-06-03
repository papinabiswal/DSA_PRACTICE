// 1. Separate odd and even index nodes.
// 2. Use two pointers (odd, even) to rewire the links.
// 3. Join odd list with even list using saved `evenHead`.

// TC: O(n)
// SC: O(1)
var oddEvenList = function(head) {
    if (!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenHead = even;

    while(even && even.next){
        odd.next = even.next;
        odd = odd.next;

        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead
    return head;
};