// - Step 1: Calculate time for each monster to reach you = dist[i]/speed[i] (ceil)
// - Step 2: Sort the times
// - Step 3: For each time unit:
//    - If monster reaches before current time → can't eliminate → return count
//    - Else eliminate → increase count and time
// - Step 4: Return final count

var eliminateMaximum = function(dist, speed) {
    let n = dist.length;
    let times =[];

    for(let i=0; i< n; i++){
       times.push(Math.ceil(dist[i]/speed[i]));
    }
     
     times.push((a,b)=> a-b);

     let count =1;
     let time_passed =1;

     for(let i=1; i< n; i++){
        if(times[i]-time_passed <= 0){
            return count;
        }
        count++;
        time_passed++;
     }
    return count;
};