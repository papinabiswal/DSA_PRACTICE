var numRescueBoats = function(people, limit) {
    people.sort((a,b)=> a-b);
    let boat =0
    let i=0, j = people.length-1;

    while(i <= j){
       if(people[i] + people[j] <= limit){
         i++;
         j--;
         boat+= 1
       } else {
          j--;
           boat+= 1
       }   
    }
    return boat;
};