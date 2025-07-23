var minimumTime = function(time, totalTrips) {
    let left =1; 
    let right = Math.min(...time) * totalTrips;

    function canCompleteTrip(s){
       let total = 0
       for(let t of time){
           total += Math.floor(s/t)
       }
       return total;
    }
    while(left < right){
        let mid = Math.floor((left+right)/2);

        if(canCompleteTrip(mid) >= totalTrips){
            right = mid
        } else {
            left = mid+1;
        }
    }
    return left;
};