// - Pair each seed with (plantTime, growTime)
// - Sort seeds descending by growTime
// - Plant one seed per day, accumulate planting days
// - Track when each seed will bloom (planting time + grow time)
// - Return the max bloom day
// Time Complexity: O(n log n)
// Space Complexity: O(n)

var earliestFullBloom = function(plantTime, growTime) {
    const n = plantTime.length;

    let currDay =0;
    let earliestBloomDay =0;

    let seeds =[];
    for(let i=0; i< n; i++){
       seeds.push({plant: plantTime[i], grow: growTime[i]}) 
    }

    // Sort seeds by growTime in descending order
    seeds.sort((a,b)=>b.grow - a.grow);

    for (const seed of seeds) {
      currDay += seed.plant;
      earliestBloomDay = Math.max(earliestBloomDay, currDay + seed.grow);
    }
    return earliestBloomDay;
};