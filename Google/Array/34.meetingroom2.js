function meetingRoom2(intervals) {
    if (intervals.length === 0) return 0;

    let starts = [];
    let ends = [];

    for (let [s, e] of intervals) {
        starts.push(s);
        ends.push(e);
    }

    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let rooms = 0;
    let endPtr = 0;

    for (let i = 0; i < starts.length; i++) {
        if (starts[i] < ends[endPtr]) {
            rooms++;              // need new room
        } else {
            endPtr++;             // reuse room
        }
    }

    return rooms;
}

meetingRoom2([[0,30],[5,10],[15,20]]);