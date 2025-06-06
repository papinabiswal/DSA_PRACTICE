class MyHashMap {
    constructor() {
      this.numBuckets = 15000;
      this.buckets = Array.from({ length: this.numBuckets }, () => []);
    }
  
    getHash(key) {
      return key % this.numBuckets;
    }
  
    put(key, value) {
      const index = this.getHash(key);
      const bucket = this.buckets[index];
  
      for (let pair of bucket) {
        if (pair[0] === key) {
          pair[1] = value; // Update
          return;
        }
      }
      bucket.push([key, value]); // Insert new
    }
  
    get(key) {
      const index = this.getHash(key);
      const bucket = this.buckets[index];
  
      for (let pair of bucket) {
        if (pair[0] === key) return pair[1];
      }
      return -1;
    }
  
    remove(key) {
      const index = this.getHash(key);
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return;
        }
      }
    }
  }
  