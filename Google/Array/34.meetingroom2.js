function minMeetingRooms(intervals) {
        if (!intervals.length) return 0;

    let starts = intervals.map(i => i[0]).sort((a,b)=>a-b);
    let ends   = intervals.map(i => i[1]).sort((a,b)=>a-b);

    let rooms = 0;
    let endPtr = 0;

    for (let i = 0; i < intervals.length; i++) {
        if (starts[i] < ends[endPtr]) {
            rooms++; // need a new room
        } else {
            endPtr++; // free a room
        }
    }
    return rooms;
    }
minMeetingRooms([[0,10],[10,20],[5,15]]);