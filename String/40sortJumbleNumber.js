function getMappingStr(num, mapping){
    let mapNum = '';
    for(let ch of num){
        mapNum += mapping[parseInt(ch,10)];
    }
    return mapNum;
}

var sortJumbled = function(mapping, nums) {
    let res = [];
    let n = nums.length;
    for(let i=0; i< n; i++){
        let numStr = nums[i].toString();
        let mappingstr = getMappingStr(numStr, mapping);
        let mappingNum = parseInt(mappingstr, 10);
        res.push({mappingNum, originalIdx: i});
    }
     res.sort((a,b)=> a.mappingNum - b.mappingNum);
    
    let result =[];
    for(let i=0; i< n; i++){
        let originalNumIdx = res[i].originalIdx;
        result[i] = nums[originalNumIdx];
    }
    return result;
    
};
sortJumbled([8,9,4,0,2,1,3,5,7,6], [991,338,38]);

// or

function sortJumbled(mapping, nums) {
    return nums
        .map((num, index) => ({
            original: num,
            mapped: parseInt([...num.toString()].map(digit => mapping[digit]).join(''), 10)
        }))
        .sort((a, b) => a.mapped - b.mapped)
        .map(item => item.original);
}

// Example usage:
let mapping = [8, 9, 4, 0, 2, 1, 3, 5, 7, 6];
let nums = [990, 332, 981];
console.log(sortJumbled(mapping, nums));

