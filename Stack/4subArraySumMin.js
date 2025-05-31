// 1. Calculate NSL and NSR for all elements.
// 2. For each i:
//    - Count subarrays where arr[i] is minimum = (i - NSL[i]) * (NSR[i] - i)
//    - Add arr[i] * count to total sum
// 3. Return total sum % (1e9 + 7)

function getNSR(arr) {
    const n = arr.length;
    const result = new Array(n);
    const st = [];

    for (let i = n - 1; i >= 0; i--) {
        while (st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
            st.pop();
        }
        result[i] = st.length === 0 ? n : st[st.length - 1];
        st.push(i);
    }

    return result;
}
function getNSL(arr) {
    const n = arr.length;
    const result = new Array(n);
    const st = [];

    for (let i = 0; i < n; i++) {
        while (st.length > 0 && arr[st[st.length - 1]] > arr[i]) {
            st.pop();
        }
        result[i] = st.length === 0 ? -1 : st[st.length - 1];
        st.push(i);
    }

    return result;
} 
var sumSubarrayMins = function(arr) {
    let NSL = getNSL(arr);
    let NSR = getNSR(arr);
    const MOD = 1e9 + 7;

    let sum =0;
    for(let i=0; i<arr.length; i++){
      let left = i - NSL[i];
      let right = NSR[i] - i;

      let count = left * right;
      let contrib = count * arr[i];

      sum = (sum + contrib) % MOD;
    }
    return Number(sum);
};