// 1. Traverse temperatures from right to left.
// 2. For each day:
//    - Pop indices from stack while current temp >= top temp.
//    - If stack is not empty:
//      - result[i] = st.top() - i
//    - Else:
//      - result[i] = 0
// 3. Push current index to stack

// temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    let st =[];
    const result = new Array(n).fill(0);

    for(let i=n-1; i>=0; i--){
        while(st.length > 0 && temperatures[i] >= temperatures[st[st.length-1]]){
            st.pop();
        }
        if(st.length === 0){
            result[i] =0;
        } else {
            result[i] = st[st.length-1] -i;
        }
        st.push(i);
    }
    return result;
};