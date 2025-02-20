//  Number of Laser Beams in a Bank
//   bank = ["011001","000000","010100","001000"]
// keep the count of '1' in eact row and multiply them
// so for the first row, 3 lasers are there, so the cuuCount will be 3
// but to create beam previous laser are not there , so prevcount is 0;
// resut += (prevCount * currCount);
// now update the prevCount with CurrCount
var numberOfBeams = function(bank) {
    let prevDeviceCount =0;
    let result =0;

    for(let i=0; i< bank.length; i++){
         let currDevCount = 0;
         for(let ch of bank[i]){
             if(ch === '1'){
                currDevCount++;
             }
         }
         result += (prevDeviceCount * currDevCount);
         prevDeviceCount = currDevCount === 0 ? prevDeviceCount : currDevCount;
    }
    return result;
};

numberOfBeams(["011001","000000","010100","001000"]);