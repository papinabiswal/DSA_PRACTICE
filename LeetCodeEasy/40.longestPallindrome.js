var longestPalindrome = function(s) {
    let obj = {};
    let result = 0;
    for(let i=0; i< s.length; i++){
         obj[s[i]] = (obj[s[i]] || 0) + 1;
    }

    for(let count of Object.values(obj)){
       result += (count % 2 === 0) ? count : count -1;
    }
   return result < s.length ? result + 1 : result;
};