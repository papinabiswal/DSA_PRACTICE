// KMP Algorithm string matching

function computeLps(pattern){
    const lps = new Array(pattern.length).fill(0);
    let length = 0;  // length of longest prefix suffix
    let i = 1;

    while(i < pattern.length){
        if(pattern[i] === pattern[length]){
            length++;
            lps[i] = length;
            i++;
        } else {
            if(length !== 0){
                length = lps[length-1];
            } else {
                lps[i] =0;
                i++;
            }
        }
    }
   return lps;
}
function Search(text, pattern){
   let i = 0;
   let j = 0;

   let result =[];
   const lps = computeLps(pattern);

   while(i < text.length){
       if(text[i] === pattern[j]){
          i++;
          j++;
       }
       if(j === pattern.length){
        // Pattern found, store starting index (1-based index)
          result.push(i-j+1);
          j = lps[j-1];
       } else if(i < text.length && pattern[j] !== text[i]){
           // Mismatch after j matches
           if(j !== 0){
               j = lps[j-1];
           } else {
               i++;
           }
       }
   }
   console.log(result);
   return result;
}
Search("sadbutsad", "sad");
