// corridor = "SSPPSPS"
// so the question is in first place corridor is there and in last place corridor is there;
// i need to num of way to divide the corridor.
// so when we divide the corridor there must be "2 seat", plant can be multiple
// divide the section of first s and last s. store the index
// [0,1,4,6] in the above ex it will be store like this
// so here is one gap, 4-1 = 3 ways, if two gap and diff is 3 multiply them 3*3 store in result
// return the result;
// TC: O(n)
// SC: O(n)

var numberOfWays = function(corridor) {
    const posOfSeat = [];
    const mod = 1e9 + 7;

    for(let i=0; i< corridor.length; i++){
         if(corridor[i] === 'S'){
           posOfSeat.push(i);
         }
    }

    if(posOfSeat.length % 2 !== 0 || posOfSeat.length === 0){
        return 0;
    }

    let result = 1;
    let prev = posOfSeat[1];
    for(let i= 2; i < posOfSeat.length; i+=2){
        let length = posOfSeat[i] - prev;
        result = (result * length) % mod;
        prev = posOfSeat[i+1];
    }
    return result;
};
numberOfWays("SSPPSPS");