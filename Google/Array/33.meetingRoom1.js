// Given intervals, can a person attend all meetings?
// intervals = [[0,30],[5,10],[15,20]]

var canAttendMeetings = function(intervals) {
    intervals.sort((a,b)=> a[0] - b[0]);

    for(let i=1; i<intervals.length; i++){
        if(intervals[i][0] < intervals[i-1][1]){
            return false; // overlap found
        }
    }
    return true;
};
canAttendMeetings([[0,30],[5,10],[15,20]]); // false
canAttendMeetings([[0,5],[10,15],[20,25]]); // true