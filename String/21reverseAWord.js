// Reverse Words in a String III
// TC: O(n)
// SC: O(n)
// s = "Let's take LeetCode contest"
// O/P= "s'teL ekat edoCteeL tsetnoc"
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

