function isVowel(ch){
    ch = ch.toLowerCase();
    return "AEIOUaeiou".includes(ch);
  }
  
  function stringGreat(s){
    let n = s.length;
    let mid = n/2;
  
    let countL= 0;
    let countR =0;
    let i=0, j =mid;
    while(i < mid && j < n){
       if(isVowel(s[i])){
          countL++;
       }
      if(isVowel(s[j])){
          countR++;
       }
    }
    console.log("test");
    return countL == countR;
  }
  stringGreat("book");