var successfulPairs = function(spells, potions, success) {
    potions.sort((a,b)=> a-b);
    let result = [];

    for(let spell of spells){
        let left = 0;
        let right = potions.length;

        while(left < right){
            let mid = Math.floor((left+right)/2);
            if(spell * potions[mid] >= success){
                 right = mid;
            } else {
                left = mid+1;
            }
        }
       result.push(potions.length - left);
    }
    return result;
};