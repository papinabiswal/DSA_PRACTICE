var canBeEqual = function(target, arr) {
    let lookup = {};
    for(let letter of arr){
      lookup[letter] = (lookup[letter] || 0) + 1;
    }

    for(let letter of target){
       if(!lookup[letter]){
          return false;
       } else {
          lookup[letter] -= 1;
       }
    }
    return true;
};