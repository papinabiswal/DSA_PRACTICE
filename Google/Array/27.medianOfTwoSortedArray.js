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
    if(nums1.length > nums2.length){
        return findMedianSortedArrays(nums2, nums1);
    }
   let m = nums1.length;
   let n = nums2.length;

   let left = 0;
   let right = m;

   while(left <= right){
      let cut1 = Math.floor((left+right)/2);
      let cut2 = Math.floor((m+n+1)/2) - cut1;

      let left1 = cut1 === 0 ? -Infinity : nums1[cut1-1];
      let right1 = cut1 ===  m ? Infinity : nums1[cut1];

      let left2 = cut2 === 0 ? -Infinity : nums2[cut2-1];
      let right2 = cut2 === n ? Infinity : nums2[cut2];

      if(left1 <= right2 && left2 <= right1){
          if((m+n)%2 === 0){
            return (Math.max(left1, left2) + Math.min(right1,right2))/2;
          } else {
              return Math.max(left1, left2);
          }
      } else if(left1 > right2){
          right = cut1-1;
      } else {
          left = cut1+1;
      }
   }
};