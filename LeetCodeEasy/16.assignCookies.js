var findContentChildren = function(g, s) {
    g.sort((a,b)=> a-b);
    s.sort((a,b)=> a-b);

    let i=j=count = 0;
    while(i < g.length && j < s.length){
        if(s[j] >= g[i]){
            count++;
            i++;
        }
        j++;
    }
    return count;
};