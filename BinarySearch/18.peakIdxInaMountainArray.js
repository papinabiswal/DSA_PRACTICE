// Brute Force
var peakIndexInMountainArray = function(arr) {
   let n = arr.length;
   let i =0;

   while(i < n-1 && arr[i] < arr[i+1]){
      i++;
   } 
   return i;
};

// Binary Search


var peakIndexInMountainArray = function(arr) {
   let n = arr.length;
   
   let left = 0, right = n-1;

   while(left < right){
       let mid = Math.floor((left + right)/2);
       if(arr[mid] < arr[mid+1]){
           left = mid+1;
       } else {
           right = mid;
       }
   }
   return left;
};