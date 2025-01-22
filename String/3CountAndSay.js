//if n=== 1 return "1"(Base case)
// if n ==2 , return "11" it count the number of sting and that number


function countAndSay(n){
    if(n === 1) return "1";

    let say = countAndSay(n-1);
    let result = "";

    for(let i=0; i< say.length; i++){
        let ch = say[i];
        let count =1;
        
        while(i < say.length -1 && say[i] === say[i+1]){
          count++;
          i++;
        }
        result += count.toString() + ch;
    }
    console.log(result);
    return result;
}
countAndSay(3);