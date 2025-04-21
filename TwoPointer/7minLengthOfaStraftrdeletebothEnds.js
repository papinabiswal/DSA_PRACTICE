var minimumLength = function(s) {
    let n = s.length;
    let i=0, j= n-1;
 
    while(i < j && s[i] === s[j]){
        let ch = s[i]; // s[j]
 
        while(i < j && s[i] === ch){
           i++;
        }
        while(j >= i && s[j] === ch){
            j--;
        }
    } 
    return j-i+1; 
 };