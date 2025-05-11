function towerOfHanoi(n, from, to, aux) {
    function solve(n, from, to, aux) {
        if (n === 1) {
            console.log(`move disk 1 from rod ${from} to rod ${to}`);
            return 1;
        }

        let count = 0;
        count += solve(n - 1, from, aux, to);
        console.log(`move disk ${n} from rod ${from} to rod ${to}`);
        count++;
        count += solve(n - 1, aux, to, from);

        return count;
    }

    return solve(n, from, to, aux);
}