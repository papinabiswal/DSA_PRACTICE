// TC: O(n)
// SC: O(n)
var isPalindrome = function(head) {
    let arr =[];

    while(head !== null){
       arr.push(head.val);
       head = head.next;
    }

    let left =0;
    let right = arr.length-1;

    while(left < right){
        if(arr[left] !== arr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// TC: O(n)
// SC: O(1)

var isPalindrome = function(head) {
    if (!head || !head.next) return true;

    // Step 1: Find the middle using slow and fast pointers
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the list
    let prev =null;
    while(slow){
       let nextNode = slow.next;
       slow.next = prev;
       prev = slow;
       slow = nextNode;
    }
    
    // Step 3: Compare the two halves
    let left = head;
    let right = prev;
    while (right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;
};