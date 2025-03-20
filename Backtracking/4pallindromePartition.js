var partition = function(s) {
    let n = s.length;
    let result =[];
     
     function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }


     function backTrack(idx, curr){
       if(idx === n){
        result.push([...curr]);
        return;
       }

       for(let i=idx; i< n; i++){
          if(isPalindrome(s, idx, i)){
              curr.push(s.substring(idx, i + 1));
              backTrack(i + 1, curr);
              curr.pop();
          }
       }
     }
     backTrack(0, []);
    return result;
};