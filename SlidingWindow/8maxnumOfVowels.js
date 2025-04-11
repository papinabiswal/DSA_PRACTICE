function isVowel(ch){
    ch = ch.toLowerCase();
  return 'aeiou'.includes(ch);
}
var maxVowels = function(s, k) {
    let n = s.length;
    let i=0, j=0;

    let count =0;
    let maxCount=0;

    while(j < n){
        if(isVowel(s[j])){
            count++;
        }
        if(j-i+1 === k){
            maxCount = Math.max(maxCount, count);
            if(isVowel(s[i])){
                count--;
            }
            i++;
        }
        j++;
    }
    return maxCount;
};