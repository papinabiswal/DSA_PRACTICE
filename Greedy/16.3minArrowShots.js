// - If no balloons, return 0
// - Sort balloons by their end points
// - Initialize arrows = 1, set end = first balloon’s end
// - For each balloon from second onwards:
//     - If balloon start > current end:
//         - arrows++
//         - update end = balloon’s end
// - Return arrows

var findMinArrowShots = function(points) {
    if(!points.length) return 0;

    points.sort((a,b)=> a[1] -b[1]);
    let end = points[0][1];
    let arrows = 1;

    for(let i=1; i < points.length; i++){
        if(points[i][0] > end){
            arrows++;
            end = points[i][1]
        }
    }
    return arrows;
};