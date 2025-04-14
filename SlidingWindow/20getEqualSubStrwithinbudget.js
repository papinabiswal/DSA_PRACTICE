var equalSubstring = function(s, t, maxCost) {
    let i =0, j=0;
    let currentCost =0;
    let maxL =0;
    let n = s.length;
 
    while(j < n){
       currentCost += Math.abs(s.charCodeAt(j) - t.charCodeAt(j));
 
       while(currentCost > maxCost){
          currentCost -= Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
          i++;
       } 
       maxL = Math.max(maxL, j-i+1);
       j++;
    } 
    return maxL
 };