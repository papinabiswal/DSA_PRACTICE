function isVowel(ch){
    ch = ch.toLowerCase();
    return 'aeiou'.includes(ch);
}
var reverseVowels = function(s) {
    let i=0;
    let j=s.length -1;

    let arr = s.split('');

    while(i < j){
       if(!isVowel(arr[i])){
          i++;
       } else if(!isVowel(arr[j])){
          j--;
       } else {
           [arr[i], arr[j]] = [arr[j], arr[i]];
           i++;
           j--;
       }
    }
    return arr.join('');
};