var topKFrequent = function(words, k) {
   let freq = {};
   for(let ch of words){
        freq[ch] = (freq[ch] || 0) + 1;
   }

   let sorted = Object.keys(freq).sort((a,b)=>{
        if(freq[a] === freq[b]){
            return a.localeCompare(b);
        }
        return freq[b] - freq[a]; 
   })
   return sorted.slice(0, k);
};