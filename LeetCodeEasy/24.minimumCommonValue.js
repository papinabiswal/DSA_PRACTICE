// two pointer
var getCommon = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;

    let i = 0, j= 0;

    while(i < m && j < n){
       if(nums1[i] === nums2[j]){
           return nums1[i]; // found common 
       } else if(nums1[i] < nums2[j]){
           i++;
       } else {
          j++;
       }

    }
    return -1;
};

// hashset 
var getCommon = function(nums1, nums2) {
    const set = new Set(nums1);

    for (let num of nums2) {
        if (set.has(num)) return num;
    }

    return -1;
};

