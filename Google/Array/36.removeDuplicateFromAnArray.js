// Remove Duplicates from an unsorted Array
function removeDeuplicatesFromAnArray(arr){
    let result = [];
    let seen = {};

    for(let i=0; i< arr.length; i++){
         if(!seen[arr[i]]){
             seen[arr[i]] = true;
             result.push(arr[i]);
         }
    }
    return result;
}
removeDeuplicatesFromAnArray([1,2,2,3,4])

// Remove Duplicates from a sorted Array

function removeDuplicatesFromSortedArray(arr){
   let i = 0;
   let j = 1;
   while(j < arr.length){
       if(arr[i] !== arr[j]){
          i++;
          arr[i] = arr[j]
       }
      j++;
   }
   return i+1;
}
removeDuplicatesFromSortedArray([1,1,2,2,3,4])