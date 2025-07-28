// simulation process(Queue Rotation)
// If the first student prefers the sandwich on top, they take it and both are removed.
// Otherwise, the student goes to the end of the queue.

var countStudents = function(students, sandwiches) {
    let queue = [...students];
    let i=0;
    let pass = 0

    while(queue.length && pass < queue.length){
       if(queue[0] === sandwiches[i]){
            queue.shift();
            i++;
            pass =0;
       } else {
           queue.push(queue.shift());
           pass++;
       }
    }
    return queue.length;
};

// optimized
// Count number of students who want 0s and 1s.
// Go through sandwiches, and decrement count.
// If count of that sandwich type is 0, remaining students can't eat.

var countStudents = function(students, sandwiches) {
    let count = [0, 0];
    for(let s of students){
       count[s]++
    }
    for(let s of sandwiches){
       if(count[s] === 0) break;
       count[s]--;
    }
    return count[0] + count[1];
};