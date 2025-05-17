// - Use two queues: one for Radiant (R), one for Dire (D)
// - Push initial indices into respective queues
// - Simulate rounds:
//   - Compare front of each queue
//   - Smaller index bans the other, re-enters next round with `index + n`
// - Return the party that still has members left

var predictPartyVictory = function(senate) {
    let n = senate.length;
    const radient =[];
    const dire =[];

    for(let i=0; i< n; i++){
        if(senate[i] === 'R'){
            radient.push(i)
        } else {
            dire.push(i);
        }
    }

    while(radient.length > 0 && dire.length > 0){
         const rIndex = radient.shift();
         const dIndex = dire.shift();

         if(rIndex < dIndex){
             radient.push(rIndex + n);
         } else {
            dire.push(dIndex + n);
         }
    }
    return radient.length > 0 ? "Radiant" : "Dire"
};

// Example Step-by-Step for "RDD":
// Start:

// Radiant: [0]

// Dire: [1, 2]

// Round 1:

// Compare Radiant[0] = 0 and Dire[0] = 1

// 0 < 1 → Radiant wins!

// Dire[1] is banned ❌

// Radiant[0] goes to next round: 0 + 3 = 3 → Radiant = [3]

// Dire = [2]

// Round 2:

// Radiant: [3]

// Dire: [2]

// Compare 3 and 2

// 2 < 3 → Dire wins!

// Radiant[3] is banned ❌

// Dire[2] goes to next round: 2 + 3 = 5 → Dire = [5]

// Now:

// Radiant: []

// Dire: [5]

// Radiant has no toys left → Dire wins!

