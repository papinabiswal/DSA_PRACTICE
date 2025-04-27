const n = colors.length;
let alice = 0;
let bob = 0;

for (let i = 1; i < n - 1; i++) {
    if (colors[i - 1] === colors[i] && colors[i] === colors[i + 1]) {
        if (colors[i] === 'A') {
            alice++;
        } else {
            bob++;
        }
    }
}

return alice > bob;