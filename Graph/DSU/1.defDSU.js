class DSU {
    constructor(n){
       this.parent = new Array(n);
       for(let i=0; i< n; i++){
          this.parent[i] = i;
       }
    } 
 
    // if the parent and the given node same then wahi hai parent node
    // agr ni hai recursive call
    find(x){
       if(this.parent[x] !== x){
         return this.find(this.parent[x]); 
       }
       return this.parent[x];
    }
 
    // union of two diff set parent node;
    // make one of them parent when they are not same
    union(x, y){ 
       let parentx = this.find(x);
       let parenty = this.find(y);
       if(parentx !== parenty){
          this.parent[parentx] = parenty
       }
    }
 }
 let dsu = new DSU(5);
 dsu.union(0,1);
 dsu.union(1,2);
 console.log(dsu.find(0));
 console.log(dsu.find(2));

 //path compression ======================================================================================================

 class DSU {
    constructor(n){
       this.parent = new Array(n);
       for(let i=0; i< n; i++){
          this.parent[i] = i;
       }
    } 
 
    // if the parent and the given node same then wahi hai parent node
    // agr ni hai recursive call
    find(x){
        if(this.parent[x] !== x){
         this.parent[x] = this.find(this.parent[x]);  // only this line change for path compression
        }
        return this.parent[x];
     }
 
    // union of two diff set parent node;
    // make one of them parent when they are not same
    union(x, y){ 
       let parentx = this.find(x);
       let parenty = this.find(y);
       if(parentx !== parenty){
          this.parent[parentx] = parenty
       }
    }
 }
 
 // ================================================*********************************=================
 // Ranking
 // rank equal hai to kisi ek ko parent banao(with +1)
 // agr equal ni hai jiska highest ranking hai usko panrent banao

 class DSU {
    constructor(n){
       this.parent = new Array(n);
       this.rank = new Array(n);
       for(let i=0; i< n; i++){
          this.parent[i] = i;
          this.rank[i] = 0;
       }
    } 
 
    // if the parent and the given node same then wahi hai parent node
    // agr ni hai recursive call
    find(x){
       if(this.parent[x] !== x){
         return this.find(this.parent[x]); 
       }
       return this.parent[x];
    }
 
    // union of two diff set parent node;
    // make one of them parent when they are not same
    union(x, y){ 
       let parentx = this.find(x);
       let parenty = this.find(y);

       if(parentx === parenty) return;  // belong to same set

       if(this.rank[parentx] > this.rank[parenty]){
          this.parent[parenty] = parentx;
       } else if(this.rank[parentx] < this.rank[parenty]){
           this.parent[parentx] = parenty;
       } else {
        this.parent[parentx] = parenty;
        rank[parenty] +=1;
       }
    }
 }