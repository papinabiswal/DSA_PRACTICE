// Decoded String at Index
// let the string is "ab23" , if you want to know 4th index value how to find it
// first find the size (when letter is there add and when number will be there multiply)
// so here ab(2) and digit(2) and digit (3) so the size will be 12
//  if k =4, then k = k%size which will be 4
// start the loop from end . i=n-1; i>=0; i--
// find k = k%size, if k === 0 and isAlpha(i) then return that char
// else isAlpha(i)  the size--;
// else if it is a digit then reduce digit
// convert string let's '2' to integer ch - '0'

var decodeAtIndex = function(s, k) {
    const n = s.length;
    let size = 0;

    for(let ch of s){
        if(/\d/.test(ch)){
           size *= ch - '0';
        } else {
            size++;
        }
    }

    for(let i = n-1; i>=0; i--){
       let ch = s[i];
       k %= size;

       if(k === 0 && (ch < '0' || ch > '9')) {// check if ch is a letter
          return ch;
       }
       if(/\d/.test(ch)){
          size = Math.floor(size / Number(ch));
       } else{
          size--;
       }
    }

    return "";
};
