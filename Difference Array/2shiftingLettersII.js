var shiftingLetters = function(s, shifts) {
    const n = s.length;
    const diff = new Array(n).fill(0);

    for(let [start, end, direction] of shifts){
        const val = direction === 1 ? 1 : -1;

        diff[start] += val;
        if(end+1 < n){
            diff[end+1] -= val;
        }
    }

    for (let i = 1; i < n; i++) {
       diff[i] += diff[i - 1];
    }

     const aCode = 'a'.charCodeAt(0);
    const sArr = s.split('');
    for (let i = 0; i < n; i++) {
        let shift = diff[i] % 26;
        if (shift < 0) shift += 26;

        const originalCharCode = sArr[i].charCodeAt(0) - aCode;
        const newCharCode = (originalCharCode + shift) % 26;
        sArr[i] = String.fromCharCode(aCode + newCharCode);
    }

    return sArr.join('');
};