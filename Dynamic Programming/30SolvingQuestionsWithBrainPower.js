var mostPoints = function(questions) {
    const n = questions.length;

    function solve(i){
         if(i >=n) return 0;

         const [point, skip] = questions[i];
         const take = point + solve(i+skip+1);
         const notTake = solve(i+1);

         return Math.max(take, notTake);
    }
    return solve(0);
};

// Buttom up
var mostPoints = function(questions) {
    const n = questions.length;
   
   const t = new Array(n + 1).fill(0);
   
   for (let i = n - 1; i >= 0; i--) {
       const [points, skip] = questions[i];
       const nextIndex = i + skip + 1;
       const take = points + (nextIndex < n ? t[nextIndex] : 0);
       const notTake = t[i + 1];
       
       t[i] = Math.max(take, notTake);
   }

   return t[0];
};