var validPalindrome = function(s) {

    function isPal(i, j){
       while(i < j){
         if(s[i] !== s[j]){
            return false;
         }
         i++;
         j--;
       }
       return true;
    }
    
        let i=0; j = s.length-1;
        while(i < j){
           if(s[i] !== s[j]){
              return isPal(i+1, j) || isPal(i, j-1);
           }
           i++;
           j--;
        }
        return true;
    };
    
    