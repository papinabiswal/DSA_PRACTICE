var breakPalindrome = function(palindrome) {
    let n = palindrome.length;
    if(n === 1) return "";

   let chars = palindrome.split('');
    for(let i=0; i< Math.floor(n/2); i++){
        if(chars[i] !== 'a'){
            chars[i] = 'a';
            return chars.join('')
        }
    }

    chars[n-1] = 'b';
    return chars.join('');
};