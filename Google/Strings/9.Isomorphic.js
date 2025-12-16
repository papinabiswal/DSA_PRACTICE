var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    let mapST = {};
    let mapTS = {};

    for(let i=0; i< s.length; i++){
         let charS = s[i];
         let charT = t[i];

          if(mapST[charS] && mapST[charS] !== charT ||
             mapTS[charT] && mapTS[charT] !== charS){
               return false;
          }

         mapST[charS] = charT;
         mapTS[charT] = charS;
    }
    return true;
};

isIsomorphic('egg', 'add');


// TC: O(n)
// SC: O(1) since the size of the map is limited to the character set (256 for extended ASCII)
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    let mapST = new Array(256).fill(0);  // s -> t
    let mapTS = new Array(256).fill(0);  // t -> s

    for (let i = 0; i < s.length; i++) {
        let c1 = s.charCodeAt(i);
        let c2 = t.charCodeAt(i);

        // mapping exists but mismatched
        if ((mapST[c1] !== 0 && mapST[c1] !== c2) ||
            (mapTS[c2] !== 0 && mapTS[c2] !== c1)) {
            return false;
        }

        // create mapping
        mapST[c1] = c2;
        mapTS[c2] = c1;
    }

    return true;
};
