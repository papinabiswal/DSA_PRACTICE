var removeStars = function(s) {
    let st =[];
    for(let ch of s){
        if(ch === '*' && st.length){
            st.pop()
        } else {
            st.push(ch);
        }
    }
    return st.join('');
};