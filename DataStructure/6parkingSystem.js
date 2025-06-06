class ParkingSystem {
    constructor(big, medium, small) {
        this.b = big;
        this.m = medium;
        this.s = small;
    }

    addCar(carType) {
        if (carType === 1) {
            if (this.b === 0) return false;
            this.b--;
        } else if (carType === 2) {
            if (this.m === 0) return false;
            this.m--;
        } else if (carType === 3) {
            if (this.s === 0) return false;
            this.s--;
        }
        return true;
    }
}
