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