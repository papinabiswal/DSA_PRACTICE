var findComplement = function(num) {
    const binary = num.toString(2);

    let flipped = '';
    for(let bit of binary ){
       flipped += bit === '0' ? '1' : '0';
    }
    return parseInt(flipped, 2);
};

// bitswise
function findComplement(num) {
  const mask = (1 << num.toString(2).length) - 1;
  return num ^ mask;
}