var maximumRequests = function(n, requests) {
    let result =0;
    let m = requests.length;
    let balance = new Array(n).fill(0)
    function backtrack(idx, count, balance){
         if(idx === m){
            if(balance.every(val => val === 0)){
                result = Math.max(result, count);
            }
            return;
         }

         let [from, to] = requests[idx]; // Take the request
         balance[from]--;
         balance[to]++;
         backtrack(idx+1, count+1, balance);
         balance[from]++;
         balance[to]--;
         backtrack(idx+1, count, balance);    // Skip the request
    };
    backtrack(0, 0, balance);
    return result;
};