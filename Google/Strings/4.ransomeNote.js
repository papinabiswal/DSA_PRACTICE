// same as anagram question, here we don't have to check length
var canConstruct = function(ransomNote, magazine) {
    let obj = {};
    for(let i=0; i< magazine.length; i++){
        let ch = magazine[i];
        obj[ch] = (obj[ch] || 0) + 1;
    }

    for(let i=0; i< ransomNote.length; i++){
         let char = ransomNote[i];
         if(!obj[char]){
            return false;
         } else {
            obj[char] -= 1;
         }
    }
    return true;
};