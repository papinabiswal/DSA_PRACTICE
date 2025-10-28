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


// space optimised(for both uper case and lower case)
var longestPalindrome = function(s) {
    let count = new Array(52).fill(0);
    for(let i =0; i < s.length; i++){
       let code = s.charCodeAt(i);
       if(code >=65 && code <= 90){
          // 'A' → 0 ... 'Z' → 25
          count[code - 65]++;
       } else if(code >=97 && code <= 122){
           // 'a' → 26 ... 'z' → 51
           count[26 + (code - 97)]++
       }
    }

    let res = 0;
    for(let key of count){
        res += (key%2 === 0) ? key : key -1;
    }
    return res < s.length ? res+1 : res;
};