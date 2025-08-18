var pickGifts = function(gifts, k) {
    gifts.sort((a,b)=> a-b);

    for(let i=0; i< k; i++){
        gifts[gifts.length-1] = Math.floor(Math.sqrt(gifts[gifts.length-1]));
        gifts.sort((a,b)=> a-b);
    }
    return gifts.reduce((sum, acc)=> sum+acc, 0);
};

// use maxHeap