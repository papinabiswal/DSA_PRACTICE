// TC: O(1)
// SC: O(10⁶)
class MyHashSet {
    constructor() {
        this.vec = new Array(1000001).fill(false);
    }

    add(key) {
        this.vec[key] = true;
    }

    remove(key) {
        this.vec[key] = false;
    }

    contains(key) {
        return this.vec[key] === true;
    }
}

// ********************************************************************************************* 
// collision: separate chaining and open addressing
// open addressing: linear probing, quadratic probing, double hashing
// Separate Chaining: TC: O(1), SC: O(n)
// Open Addressing: TC: O(1), SC: O(n)
class MyHashSet {
    constructor() {
        this.numBuckets = 15000;
        this.buckets = new Array(this.numBuckets);
        for (let i = 0; i < this.numBuckets; i++) {
            this.buckets[i] = [];
        }
    }

    getHashValue(key) {
        return key % this.numBuckets;
    }

    add(key) {
        const index = this.getHashValue(key);
        const bucket = this.buckets[index];

        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    remove(key) {
        const index = this.getHashValue(key);
        const bucket = this.buckets[index];
        const pos = bucket.indexOf(key);

        if (pos !== -1) {
            bucket.splice(pos, 1);
        }
    }

    contains(key) {
        const index = this.getHashValue(key);
        const bucket = this.buckets[index];
        return bucket.includes(key);
    }
}

