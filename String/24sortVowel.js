// TC: O(nlogn)
// (Separate string create and sort)
// convert the string to array using split('') because string is immutable but array is mutable to change the array it self.
// first find all the vowel and sort them
// loop the array, if find vowel , replace with sorted vowel
// increse j;
// convert arr to  string and then retun it

var sortVowels = function(s) {
    let temp = [];
    for(let ch of s){
       if(isVowel(ch)){
        temp.push(ch);
       }
    }
    temp.sort();
    let j=0;
    let result = s.split('');
    for(let i=0; i< result.length; i++){
        if(isVowel(result[i])){
           result[i] = temp[j];
           j++;
        }
    }
    return result.join('');
};

function isVowel(ch){
   ch = ch.toLowerCase();
   return (ch === 'a' || ch=== 'e' || ch === 'i' || ch === 'o' || ch === 'u');
}

// Tc: O(n)
// (Without sorting. Counting the vowels - counting sort)
// keep a variable which will keep all sorted vowel;
// create a array which will keep count of vowel present in a string
// take a j variable which will iterate over sorted variable
// if the char is consonant the add it to result, if it's vowel check that value present in an array
// if it's 0, then increase j 
// if not sorted voewl add to result
// decrese count of j in the array;

function sortVowel(s){
    const sortedVowel = "AEIOUaeiou";
    let vowelCount = new Array(sortedVowel.length).fill(0);

    for(let i=0; i < s.length; i++){
        let idx = sortedVowel.indexOf(s[i]);
        if(idx > -1){
         vowelCount[idx]++;
        }
    }

    let j=0;
    let result = '';

    for(let i=0; i< s.length; i++){
       if(sortedVowel.includes(s[i])){
          while(vowelCount[j] === 0){
            j++;
          }
          result += sortedVowel[j];
          vowelCount[j]--;
       } else{
         result += s[i];
       }
    }
    return result;
}
sortVowel("lEetcOde");
