var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles); // max speed she may need

    const canEatAll = (speed) => {
        let hours = 0;
        for (let bananas of piles) {
            hours += Math.ceil(bananas / speed);
        }
        return hours <= h;
    };

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canEatAll(mid)) {
            right = mid; // try smaller speed
        } else {
            left = mid + 1; // need faster speed
        }
    }

    return left; // smallest k that works
};
