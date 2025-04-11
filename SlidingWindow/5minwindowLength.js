var minWindow = function(s, t) {
    let count = new Array(256).fill(0); // both caps and small letter
   for(let i = 0; i < t.length; i++) {
       count[t.charCodeAt(i)]++;
   }

   let requiredCount = t.length;
   let i = 0;
   let j = 0;
   let minL = Infinity;
   let start = -1;
   while(j < s.length) {
       if(count[s.charCodeAt(j)] > 0) {
           requiredCount--;
       }
       count[s.charCodeAt(j)]--;
       while(requiredCount === 0) {
           count[s.charCodeAt(i)]++;
           if(count[s.charCodeAt(i)] > 0) {
               requiredCount++;
           }
           if(minL > j - i + 1) {
               minL = j - i + 1;
               start = i;
           }
           i++;
       }
       j++;
   }
   return start === -1 ? '' : s.slice(start, start + minL);

};