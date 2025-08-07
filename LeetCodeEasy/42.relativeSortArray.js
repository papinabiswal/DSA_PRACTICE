var relativeSortArray = function(arr1, arr2) {
    let lookup = {};
    for(let letter of arr1){
      lookup[letter] = (lookup[letter] || 0) + 1;
    }

    let result = [];
    for(let letter of arr2){
        if(lookup[letter]){
            result.push(...new Array(lookup[letter]).fill(letter));
            delete lookup[letter];
        }
    }

    let remaining = []
    for(key in lookup){
        remaining.push(...new Array(lookup[key]).fill(Number(key)));
    }
    remaining.sort((a,b)=> a-b);
    return result.concat(remaining);

};