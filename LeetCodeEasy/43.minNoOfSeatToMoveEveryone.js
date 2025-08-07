// sort both the array
// sum += abs(seat - student);
var minMovesToSeat = function(seats, students) {
    seats.sort((a,b)=> a-b);
    students.sort((a,b)=> a-b);

    let i=0, j = 0;
    let move = 0
    while(i < seats.length && j < students.length){
       move += Math.abs(seats[i]- students[j]);
       i++;
       j++;
    }
    return move;
};

// 2nd approach
var minMovesToSeat = function(seats, students) {
   let positionSeat = new Array(101).fill(0);
    let positionStud = new Array(101).fill(0);

    for (let x of seats) {
        positionSeat[x]++;
    }

    for (let x of students) {
        positionStud[x]++;
    }

    let i = 0;
    let j = 0;
    let result = 0;

    while (i <= 100 && j <= 100) {
        // Skip empty seat positions
        while (i <= 100 && positionSeat[i] === 0) i++;

        // Skip empty student positions
        while (j <= 100 && positionStud[j] === 0) j++;

        // If both i and j are valid and non-empty, pair them
        if (i <= 100 && j <= 100 && positionSeat[i] > 0 && positionStud[j] > 0) {
            result += Math.abs(i - j);
            positionSeat[i]--;
            positionStud[j]--;
        }
    }

    return result;
};