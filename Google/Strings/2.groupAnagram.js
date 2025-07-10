// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// {
//   "aet": ["eat","tea","ate"],
//   "ant": ["tan","nat"],
//   "abt": ["bat"]

// }

// TC: O(n * k log k)
// SC: O(n * k)
var groupAnagrams = function(strs) {
    const map = new Map();
    
    for(let str of strs){
         let sortedStr = str.split('').sort().join('');
         if(!map.has(sortedStr)){
            map.set(sortedStr, []);
         }
         map.get(sortedStr).push(str);
    }
    return Array.from(map.values());
};


// **********************************************************************************************************************************************************************

// 2nd approach using hash map
// TC: O(n * k)
// SC: O(n * k)

var groupAnagrams = function(strs) {
    const map = new Map();

    for(let str of strs){
       let count = new Array(26).fill(0);
       for(let ch of str){
          count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
       }
       const key = count.join('#');
       if(!map.has(key)){
          map.set(key, []);
       }
       map.get(key).push(str);
    }
    return Array.from(map.values());
}


