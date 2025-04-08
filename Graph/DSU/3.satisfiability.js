
var equationsPossible = function(equations) {
    const parent = [];
   for (let i = 0; i < 26; i++) {
       parent[i] = i;
   }
   const rank = Array(26).fill(0);

   function find(x) {
       if (parent[x] !== x) {
           parent[x] = find(parent[x]);
       }
       return parent[x];
   }

   function union(x, y) {
       const xRoot = find(x);
       const yRoot = find(y);

       if (xRoot === yRoot) return;

       if (rank[xRoot] > rank[yRoot]) {
           parent[yRoot] = xRoot;
       } else if (rank[xRoot] < rank[yRoot]) {
           parent[xRoot] = yRoot;
       } else {
           parent[xRoot] = yRoot;
           rank[yRoot]++;
       }
   }
// 2nd letter agr equal hai to union nil do
// 2nd letter agr not qual hai, find first and 3rd letter parent then check if same parent return false;
   for (let eq of equations) {
       if (eq[1] === '=') {
           const x = eq.charCodeAt(0) - 'a'.charCodeAt(0);
           const y = eq.charCodeAt(3) - 'a'.charCodeAt(0);
           union(x, y);
       }
   }

   // Pass 2: Process all "!=" equations
   for (let eq of equations) {
       if (eq[1] === '!') {
           const x = eq.charCodeAt(0) - 'a'.charCodeAt(0);
           const y = eq.charCodeAt(3) - 'a'.charCodeAt(0);
           if (find(x) === find(y)) {
               return false;
           }
       }
   }
   return true;
};