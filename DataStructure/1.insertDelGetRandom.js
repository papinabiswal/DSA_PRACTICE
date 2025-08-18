var RandomizedSet = function() {
    this.values = [];
    this.valuesIdx = {}; // value: index
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(val in this.valuesIdx){
        return false;
    }
    this.valuesIdx[val] = this.values.length;
    this.values.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!(val in this.valuesIdx)) {
        return false;
    }
    const index = this.valuesIdx[val];
    const lastStackVal = this.values[this.values.length - 1];

    // move last value into removed index
    this.values[index] = lastStackVal;
    this.valuesIdx[lastStackVal] = index;

    // clean up
    this.values.pop();
    delete this.valuesIdx[val];

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const index = Math.floor(Math.random() * this.values.length);
    return this.values[index];
};


let set = new RandomizedSet();
console.log(set.insert(1)); // true
console.log(set.insert(2)); // true
console.log(set.insert(1)); // false (already exists)
console.log(set.remove(1)); // true
console.log(set.getRandom()); // returns 2 (only element left)
