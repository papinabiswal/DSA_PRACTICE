// TC: O(n)
// SC: O(1)

// 1. Initialize two pointers at the heads of both lists.
// 2. Traverse each list; when a pointer reaches the end, jump to the head of the other list.
// 3. Eventually, pointers align at the intersection or both reach null.
// 4. Return the intersecting node or null.

var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) return null;

    let a = headA, b = headB;

    while(a !== b){
        a = a ? a.next: headB;
        b = b ? b.next: headA;
    }
    return a;
};