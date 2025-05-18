// - Look for triplets (same char at i-1, i, i+1)
// - Count how many such triplets 'A' and 'B' have
// - Alice plays on 'A' triplets, Bob on 'B'
// - Alice wins if her move count > Bob's

var winnerOfGame = function(colors) {
    let n = colors.length;
    let alice =0;
    let bob =0;

    for(let i=1; i < n-1; i++){
        if(colors[i-1] === colors[i] && colors[i] === colors[i+1]){
            if(colors[i] === 'A'){
                alice++;
            } else {
                bob++
            }
        }
    }
    return alice > bob;
};