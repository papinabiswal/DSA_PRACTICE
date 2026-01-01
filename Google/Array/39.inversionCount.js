class Solution {
    inversionCount(arr) {
        let temp = new Array(arr.length);
        return this.mergeSort(arr, temp, 0, arr.length - 1);
    }
    
    mergeSort(arr, temp, left, right) {
        let invCount = 0;
        
        if (left < right) {
            let mid = Math.floor((left + right) / 2);
            
            invCount += this.mergeSort(arr, temp, left, mid); // here also we will keep invCount
            invCount += this.mergeSort(arr, temp, mid + 1, right);
            invCount += this.merge(arr, temp, left, mid, right);
        }
        return invCount;
    }
    
    merge(arr, temp, left, mid, right) {
        let i = left;
        let j = mid + 1;
        let k = left;
        let invCount = 0;
        
        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
                invCount += (mid - i + 1); // 🔥 key logic 
            }
        }
        
        while (i <= mid) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];
        
        // ✅ MISSING STEP (VERY IMPORTANT)
        // Without copying back:
       // Next merge uses old unsorted data
        // Inversion count becomes wrong
        for (let x = left; x <= right; x++) {
            arr[x] = temp[x];
        }
        
        return invCount;
    }
}
