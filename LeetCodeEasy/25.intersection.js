var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let result = new Set();

    for(let num of nums2){
       if(set1.has(num)){
          result.add(num);
       }
    }
    return Array.from(result);
};

// two pointer
var intersection = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0, j = 0;
    const result = new Set();

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.add(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return Array.from(result);
};