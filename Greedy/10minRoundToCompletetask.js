// 1. Count the frequency of each task
// 2. If any task appears only once → return -1
// 3. If count % 3 === 0 → use only groups of 3
// 4. Else → use floor(count / 3) + 1 (one extra group of 2)
// 5. Sum all rounds and return
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