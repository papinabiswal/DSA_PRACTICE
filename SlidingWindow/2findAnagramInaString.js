function allZero(count){
    return count.every(e=>e=== 0);
   }
   
   var findAnagrams = function(txt, pat) {
       let k = pat.length;
       let count = new Array(26).fill(0);
       for(let ch of pat){
           count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
       }
   
       let i=0, j=0;
       let n = txt.length;
       let result =[];
   
        while(j < n){
           let idx = txt.charCodeAt(j) - 'a'.charCodeAt(0);
           count[idx]--;
           if(j-i+1 === k){
              if(allZero(count)){
                result.push(i);
              }
              let idx = txt.charCodeAt(i) - 'a'.charCodeAt(0);
              count[idx]++;
              i++
           }
           j++;
        }
        return result;
   };