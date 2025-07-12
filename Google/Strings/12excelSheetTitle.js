var convertToTitle = function(columnNumber) {
    let result = '';

    while(columnNumber > 0){
       columnNumber--;
       let remainder = columnNumber % 26;
       let char = String.fromCharCode(remainder+65);
       result = char + result; 
       columnNumber = Math.floor(columnNumber / 26);
    }
    return result;
};