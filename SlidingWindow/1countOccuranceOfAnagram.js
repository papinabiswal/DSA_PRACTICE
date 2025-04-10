function allZero(count) {
    return count.every(val => val === 0);
}

function search(pat, txt) {
    let k = pat.length;
    let count = new Array(26).fill(0);

    for (let ch of pat) {
        count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let i = 0, j = 0;
    let n = txt.length;
    let result = 0;

    while (j < n) {
        let idx = txt.charCodeAt(j) - 'a'.charCodeAt(0);  // jb counter pe j jis index pe jata usko counter se minus krna;
        count[idx]--;

        if (j - i + 1 === k) {
            if (allZero(count)) {
                result++;
            }

            let iIdx = txt.charCodeAt(i) - 'a'.charCodeAt(0); // jb window lent complete  ho jayega above check and i ka value ko usme reset krna hai
            count[iIdx]++;
            i++;
        }

        j++;
    }

    return result;
}