var minimumRounds = function(tasks) {
    let map = {};
    for (let task of tasks) {
        map[task] = (map[task] || 0) + 1;
    }

    let rounds = 0;

    for (let task in map) {
         const count = map[task];

         if (count === 1) {
            return -1; // Cannot complete task if only one exists
        }

        if (count % 3 === 0) {
            rounds += count / 3;
        } else {
            rounds += Math.floor(count / 3) + 1;
        }
    }
    return rounds;
};