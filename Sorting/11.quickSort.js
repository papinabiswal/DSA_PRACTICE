function quickSort(arr, low=0, high=arr.length-1){
    if(low < high){
        let pivotIdx = partition(arr,low, high);
        quickSort(arr, low, pivotIdx-1);
        quickSort(arr,pivotIdx+1, high)
    }
    return arr;
}

function partition(arr, low, high){
    let pivot = arr[low];
    let i = low+1;
    let j = high;

    while(true){
       while(i <= j && arr[i] <= pivot ){
           i++;
       } 
        while(pivot > arr[j]){
            j--;
        }

        if(i > j) break;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
}

let arr = [8, 3, 5, 4, 7, 6, 1, 2];
console.log(quickSort(arr));