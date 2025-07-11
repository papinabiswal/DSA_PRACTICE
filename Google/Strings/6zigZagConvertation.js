var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    let rows = new Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = false;

    for (let ch of s) {
        rows[currentRow] += ch;

        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown; // switch direction
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join('');
};
convert("PAYPALISHIRING", 3);