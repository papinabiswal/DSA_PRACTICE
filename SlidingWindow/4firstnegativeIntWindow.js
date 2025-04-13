// kya j jahan hai us element negative hai. then push in queue
// then we will increase queue
// kya i jispe hai wo -ve number hai, agr ni hai queue se delete ni krna else remove from queue
// but window size same hone pe queue pe kuch -v elemet hai , if yes then push the front one in result

function firstNegInt(arr, k) {
    let i=0, j=0;
    let queue = [];
    let result =[];
    let n = arr.length;
    
    while(j < n){
        if(arr[j] < 0){
            queue.push(j);
        }
        if(j-i+1 === k){
            while(queue.length > 0 && queue[0] < i){ // i ka pos agr -ve element pe tha pehele queue se us value ko remove karo
                queue.shift();
            }
            
            if(queue.length > 0){
                 result.push(arr[queue[0]]) 
            } else {
                result.push(0);
            }
            i++
        }
        j++
    }
    return result;
}