// delete the column if the column is not coming lexicographically
// ["cba", "daf", "ghi"]
// 1st check 1st letter of all words(cdg)
// 2nd check 2nd letter of all words(bah)
// 3rd check 3rd letter of all words(afi)
// if the column are not lexicographically correct delete the column , increase the count
function minDeletionSize(strs){
    let n = strs.length;
    let k = strs[0].length;
    let count = 0;

    for (let i = 0; i < k; i++) {
        for (let j = 1; j < n; j++) {
            if (strs[j][i] < strs[j - 1][i]) {
                count++;
                break;
            }
        }
    }

    return count;
}
minDeletionSize(["cba","daf","ghi"]);