// merge Interval
// TC: O(nlogn)
// SC: O(n)
// leetcode 56
var merge = function(intervals) {
    let n = intervals.length;
    intervals.sort((a,b)=> a[0]-b[0]);

    let result = [intervals[0]];

    for(let i=1; i< n; i++){
        let [currStart, currend] = intervals[i];
        const lastEnd = result[result.length-1][1];
        if(currStart > lastEnd){
            result.push(intervals[i]);
        } else {
            result[result.length-1][1] = Math.max(lastEnd, currend);
        }
    }
    return result;
};



// x-axis merge interval
// y-axix merge interval
// x.length >= 3 || y.length >= 3
// leetcode 3394

// TC: O(nlogn)
// SC: O(n)

function merge(intervals){
    intervals.sort((a,b)=> a[0] -b[0]);
    let result = [intervals[0]];
 
    for(let i=1; i< intervals.length; i++){
       let [currstart, currend] = intervals[i];
       let resEnd = result[result.length - 1][1];
 
       if(currstart >= resEnd){
           result.push(intervals[i])
       } else {
         result[result.length -1][1] = Math.max(resEnd, currend);
       }
    }
    return result;
 }
 var checkValidCuts = function(n, rectangles) {
     let hor = [];
     let ver = [];
 
     for(let coordinate of rectangles){
        const [x1, y1, x2, y2] = coordinate;
        hor.push([x1, x2]);
        ver.push([y1, y2]);
     }
 
     let res1 = merge(hor);
     if(res1.length >= 3) return true;
 
     let res2 = merge(ver);
     return res2.length >= 3;
 };