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