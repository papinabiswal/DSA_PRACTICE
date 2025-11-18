// Brute force
// TC : O(m+n)
// SC : O(m+n)
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;

    let temp = new Array(m+n);
    let i=0, j=0, k=0;

    while(i < m && j < n){
       if(nums1[i] < nums2[j]){
          temp[k++] = nums1[i++]; 
       } else {
          temp[k++] = nums2[j++];
       }
    }

    while(i < m) temp[k++] = nums1[i++];
    while(j < n) temp[k++] = nums2[j++];

    let size = m+n;
    if(size % 2 !== 0){
        return temp[Math.floor(size/2)];
    }
    return (temp[size/2] + temp[(size/2)-1]) / 2;
};

// Better approach
// improve space complexity to O(1)
// TC : O(m+n)
// SC : O(1)
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let size = m + n;

    let idx1 = Math.floor(size / 2) - 1;
    let element1 = -1;

    let idx2 = Math.floor(size / 2);
    let element2 = -1;

    let i = 0, j = 0, k = 0;

    // Merge like merge-sort but only track idx1 and idx2
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            if (k === idx1) element1 = nums1[i];
            if (k === idx2) element2 = nums1[i];
            i++;
        } else {
            if (k === idx1) element1 = nums2[j];
            if (k === idx2) element2 = nums2[j];
            j++;
        }
        k++;
    }

    // Remaining elements from nums1
    while (i < m) {
        if (k === idx1) element1 = nums1[i];
        if (k === idx2) element2 = nums1[i];
        i++;
        k++;
    }

    // Remaining elements from nums2
    while (j < n) {
        if (k === idx1) element1 = nums2[j];
        if (k === idx2) element2 = nums2[j];
        j++;
        k++;
    }

    // If total length is odd
    if (size % 2 === 1) {
        return element2;
    }

    // Even length: average the two middle elements
    return (element1 + element2) / 2;
};
