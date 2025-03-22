var distributeCookies = function(cookies, k) {
    let result = Number.MAX_SAFE_INTEGER;
    let children = new Array(k).fill(0);

    function backTrack(idx){
      if(idx === cookies.length){
        let maxCookies = Math.max(...children); // check who got max cookies
         result = Math.min(result, maxCookies); // compares this value with the best (minimum) unfairness she has seen so far
         return;
      }
      for(let i=0; i< k; i++){
         children[i] += cookies[idx];
         backTrack(idx+1);
         children[i] -= cookies[idx];
      }
    }
    backTrack(0);
    return result;
};