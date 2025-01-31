var reverseWords = function(s) {
    let reverseSentence = "";
    let word = "";

    for(let i=0; i< s.length; i++){
       if(s[i] === ' '){
          reverseSentence += word + ' ';
          word = '';
       } else {
          word = s[i] + word;
       }
    }
    return reverseSentence + word;
};

