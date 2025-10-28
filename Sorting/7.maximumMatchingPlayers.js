var matchPlayersAndTrainers = function(players, trainers) {
    let i = 0;
    let j = 0;

    players.sort((a,b)=> a-b);
    trainers.sort((a,b)=> a-b);
    let count = 0;

    while(i < players.length && j < trainers.length){
          if(trainers[j] >= players[i] ){
              count++;
              i++;
          }
          j++;
    }
    return count;
};