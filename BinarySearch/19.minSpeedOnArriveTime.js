// 🔑 Easy way to remember for interviews
// Goal	Use mid formula	Move pointers	Example
// Find smallest valid	(l + r) // 2	if valid → r = mid else l = mid + 1	“Find minimum…” problems
// Find largest valid	(l + r + 1) // 2	if valid → l = mid else r = mid - 1	“Find maximum…” problems ✅ (like this one)
var minSpeedOnTime = function(dist, hour) {
   const n = dist.length;
   let left = 1;
   let right = 1e7;

   function canReach(speed){
       let total = 0;
       for(let i =0; i< n; i++){
           let time = dist[i]/speed;
           total += (i === n - 1) ? time : Math.ceil(time);
       }
       return total <= hour;
   }
   while(left < right){
      const mid = Math.floor((left +right)/2);
      if(canReach(mid)){
          right = mid;
      } else {
          left = mid + 1;
      }
   } 
   return canReach(left) ? left : -1;
};