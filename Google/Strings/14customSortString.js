var customSortString = function(order, s) {
    let count = {};
    let result = '';
    for(let ch of s){
       count[ch] = (count[ch] || 0)+1;
    }

    for(ch of order){
        if(ch in count){
             result += ch.repeat(count[ch]);
             delete count[ch];
        }
    }

    for(let ch in count){
      result += ch.repeat(count[ch]);
    }
    return result;
};