// All allphabet letters(A-Z) should present in that sentence that is called panagram
// if the frequency of that particular letter is 0 then that sentence is not panagram

function isPanagram(sentence){
   return new Set(sentence).size === 26;
}
isPanagram("thequickbrownfoxjumpsoverthelazydog");

//Without using map/set
// check if sentence length is less than 26 then return false;
// create an array fill with 0 which will keep the frequency of the letter
// get the frequency using ASCII value
// take the count variable to keep track of letter,
// if the frequency is 0, then make the letter value 1 in array, increase count
// if count === 26 reurn true else false
// time complexity : O(n)
// space complexity :O(1); 

var checkIfPangram = function(sentence) {
    if(sentence.length < 26) return false;
    let arr = new Array(26).fill(0);
    let count =0;
 
    for(let i=0; i< sentence.length; i++){
       let code = sentence.charCodeAt(i) - 'a'.charCodeAt(0);
        if(arr[code] === 0){
          arr[code] =1;
          count++;
        }
        if(count === 26){
         return true;
        }
    }
    return false;
 };
isPanagram("thequickbrownfoxjumpsoverthelazydog");