//TC: O(n2), SC: O(n);
// orderly queue means lexicographically smallest string
// rotation of 1st letter to the end of string if k =1;
// rotation of any one of 1st two letter  to the end of the string if k =2;
// for more than one we can directly sort the program
// for k =1 you have to rotate the first string check lexicographically small

function orderlyQueue(s, k){
    if(k > 1){
        return s.split('').sort().join('');
     }
     
     let result = s;
     for(let i=1; i<s.length; i++){
        let temp = s.slice(i) + s.slice(0,i);
        result = result < temp ? result : temp;
     }
     return result;
}
orderlyQueue("cba", 1);