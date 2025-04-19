var eliminateMaximum = function(dist, speed) {
    let n = dist.length;
    let times =[];

    for(let i=0; i< n; i++){
       times.push(Math.ceil(dist[i]/speed[i]));
    }
    times.sort((a,b)=> a-b);

    for(let minutes =0; minutes <=n; minutes++){
        if(times[minutes] <= minutes){
            return minutes;
        }
    }
    return n;
};