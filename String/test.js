
// TC: O(n) length of expr
// SC: O(1);
function fractionAddition(expr){
   let i=0;
   let n = expr.length;

   let nue = 0;
   let deno = 1;

   function gcd(a, b) {
      return b === 0 ? a : gcd(b, a % b);
  }
   
   while(i < n){
      let currNue =0;
      let currDeno = 0;

       let isNeg = (expr[i] === '-');

       if(expr[i] === '-' || expr[i] === '+'){
           i++;
       }

       while(i < n && !isNaN(expr[i])){
           let val = expr[i] - '0';
           currNue = (currNue * 10) + val;
           i++
       }

       if(isNeg){
           currNue *= -1;
       }
       i++;

       while(i < n && !isNaN(expr[i])){
           let val = expr[i] - '0';
           currDeno = (currDeno * 10) + val;
           i++;
       }
       nue = (nue * currDeno) + (currNue * deno);
       deno = deno * currDeno;

      let commonDivisor = gcd(Math.abs(nue), deno);

      nue /= commonDivisor;
      deno /= commonDivisor;
   }

   console.log(nue + "/" + deno);
   return nue + "/" + deno; 
}
fractionAddition("-1/2+1/2");