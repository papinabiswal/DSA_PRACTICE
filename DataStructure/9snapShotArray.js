// brute force
class SnapshotArray {
    constructor(length) {
        this.arr = new Array(length).fill(0);
        this.snaps = []; // array of arrays: full copies at each snap
    }

    set(index, val) {
        this.arr[index] = val;
    }

    snap() {
        // store a full copy of the array
        this.snaps.push([...this.arr]);
        return this.snaps.length - 1;
    }

    get(index, snap_id) {
        return this.snaps[snap_id][index];
    }
}

const obj = new SnapshotArray(3);
obj.set(0, 5);
console.log(obj.snap()); // 0
obj.set(0, 6);
console.log(obj.get(0, 0)); // 5

// ********************************************************************************************* 

