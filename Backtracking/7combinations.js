var combine = function(n, k) {
    let result = [];

    function backtrack(start, k, temp){
          if(k === 0){
            result.push([...temp]);
            return;
          }
          
          if (start > n) return;

          temp.push(start);
          backtrack(start+1, k-1, temp);
          temp.pop(start);
          backtrack(start+1, k, temp);
    }
    backtrack(1, k,[]);
    return result;
};