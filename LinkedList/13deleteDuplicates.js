// sorted array
var deleteDuplicates = function(head) {
    let current = head;

    while(current && current.next){
       if(current.val === current.next.val){

           current.next = current.next.next;

       } else {
           current = current.next;
       }
    }


    return head;
};

// unsorted array

var deleteDuplicates = function(head) {
    let current = head;
    let set = new Set();
    while(current && current.next){
       if(set.has(current.val)){
           current.next = current.next.next;
       } else {
           set.add(current.val);
           current = current.next;  
       }
    }
    return head;
}