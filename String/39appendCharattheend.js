var appendCharacters = function(s, t) {
    let i=0;
    let j=0;
    let m = s.length;
    let n = t.length;
    while(i < m && j < n){
        if(s[i] === t[j]){
             i++;
             j++;
        } else {
            i++
        }

    }
    return n-j; //remaining char
};