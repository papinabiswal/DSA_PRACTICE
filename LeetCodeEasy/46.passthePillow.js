var passThePillow = function(n, time) {
       let idx =1;
       let dir = 1; // left to right, -1 means RTL
       while(time > 0){
          if(idx + dir >= 1 && idx+dir<=n){
              idx += dir;
              time--;
          } else {
             dir *= -1;
          }
       }
    return idx
};