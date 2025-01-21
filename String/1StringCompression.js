// so the givien ex is ["a","a","b","b","c","c","c"]
// the input should change , there will be no new array
// ["a","2","b","2","c","3","c"] so it will return the index till 3. it will ignore the last c;
// convert the count to string, if the count is two char ["a","2","1","c","5","c","c"] , the index will count till 5;
// keep one index variable to count the duplicates, another index variable to count the to update the variable.
// Time Complexity : O(N)
// Space Complexity: O(1)

function stringCompression(chars){
  let writeIdx = 0;
  let readIdx =0;

  while(readIdx < chars.length){
     let count =0;
     let current_char = chars[readIdx];

     while(readIdx < chars.length && chars[readIdx] === current_char){
        readIdx++;
        count++;
     }
     chars[writeIdx] = current_char;
     writeIdx++;

     if(count > 1){
        const countStr = count.toString();
        for(let i=0; i< countStr.length; i++){
             chars[writeIdx] = countStr[i];
             writeIdx++;
        }
     }
  }
  console.log(writeIdx);
  return writeIdx;
}
stringCompression(["a","a","b","b","c","c","c"]);