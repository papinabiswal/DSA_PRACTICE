// Time Complexity:

// Each merge of two lists takes O(n),

// And we do this log(k) times → Total: O(N log k)

// Where N = total number of nodes across all lists, and k = number of lists.

// Space Complexity:

// O(log k) due to recursion stack in partitionAndMerge.

// ******************************************************************************************************
//if l1 val <= l2 val, will check next of remaining l1 and l2
// if l1 val > l2 val, will check next of remaining l1 and l2
// if l1 is null, return l2
// if l2 is null, return l1


function mergeTwoSortedLists(l1, l2){
    if(!l1) return l2;
    if(!l2) return l1;

    if (l1.val <= l2.val) {
        l1.next = mergeTwoSortedLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoSortedLists(l1, l2.next);
        return l2;
    }
} 

function partitionAndMerge(start, end, lists){
   if(start === end) return lists[start];
   if(start > end) return null;

   let mid = Math.floor((start + end)/2);
   
   let l1 = partitionAndMerge(start, mid, lists);
   let l2 = partitionAndMerge(mid+1, end, lists);

   return mergeTwoSortedLists(l1, l2);
}
var mergeKLists = function(lists) {
    if(lists.length === 0) return null;

    return partitionAndMerge(0, lists.length-1, lists);
};