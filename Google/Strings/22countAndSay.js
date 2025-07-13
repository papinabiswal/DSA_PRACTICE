//if n=== 1 return "1"(Base case)
// if n ==2 , return "11" it count the number of sting and that number


var countAndSay = function(n) {
    let result = "1";
  
    for(let i=2; i <=n; i++){
       let curr ='';
       let count =1;
       for(let j=1; j<= result.length; j++){
          if(j < result.length && result[j] === result[j-1]){
               count++
          } else {
             curr += count + result[j-1];
             count=1;
          }
       }
       result = curr;
    }
    return result;
  };
  countAndSay(3);