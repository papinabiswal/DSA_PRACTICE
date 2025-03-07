//All letters are capital , return true EX: BAT
//All letter are not capital, return true: bat
//Only 1st letter is capital, return true: Bat
function detectCapital(word){
    function isCapital(word){
        for(let ch of word){
           if(ch < 'A' || ch > 'Z'){
             return false;
           }
        }
        return true;
     }
     function isSmall(word){
         for(let ch of word){
            if(ch < 'a' || ch > 'z'){
               return false;
            }
         }
         return true;
     }
     if(isCapital(word) || isSmall(word) || (word[0] === word[0].toUpperCase() && isSmall(word.slice(1)))){
         return true;
     }
     return false;
}
detectCapital("BAT");