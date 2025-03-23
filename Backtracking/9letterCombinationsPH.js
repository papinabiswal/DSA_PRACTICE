// Since strings don’t change in-place, this undo step isn't needed.
var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    const map = {
        '2': "abc", '3': "def", '4': "ghi", '5': "jkl",
        '6': "mno", '7': "pqrs", '8': "tuv", '9': "wxyz"
    };

    let result = [];
    function backtrack(idx, temp){
        if(idx === digits.length){
            result.push(temp);
            return;
        }

        let ch = digits[idx];
        let str = map[ch];

        for(let i=0; i< str.length; i++){
             backtrack(idx+1, temp+str[i]);  // we are not doing undo because string are immutable
        }
    }
    backtrack(0, "");
    return result;
};