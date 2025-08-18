// Brute force
var checkIfExist = function(arr) {
    for(let i=0; i< arr.length; i++){
        for(let j=1; j<arr.length; j++){
            if(i !== j && ((arr[i] === 2 * arr[j]) || (arr[i] * 2 === arr[j]))){
                return true;
            }
        }
    }
    return false;
};

// using set
var checkIfExist = function(arr) {
    let countZero = 0;
    let arrSet = new Set(arr);

    for(let ch of arr){
        if(ch === 0){
            countZero++;
            if(countZero >= 2) return true;
        }
       else if(arrSet.has(ch/2) || arrSet.has(ch * 2)){
          return true;
       }
    }
    return false;
};

// using binary search;
var checkIfExist = function(arr) {
    let arrSort = arr.sort((a,b)=> a-b);

    for(let i =0; i< arr.length; i++){
        let target = arr[i] * 2;
        let index = binarySearch(arr,target, i);

        if(index !== -1){
             return true;
        }
    }
    return false;
};

function binarySearch(arr, target, skipIdx){
     let left = 0, right = arr.length-1;
     while(left <= right){
         let mid = Math.floor((left + right)/2);
         if(arr[mid] === target){
              if(mid !== skipIdx){
                 return mid;
              } else {
                return -1;
            }
         } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
     }
     return -1;
}