var BrowserHistory = function(homepage) {
    this.past = [];
    this.future = [];
    this.curr = homepage;
};

BrowserHistory.prototype.visit = function(url) {
    this.past.push(this.curr);     // Fix: store current page before visiting
    this.curr = url;
    this.future = [];              // Clear forward history
};

BrowserHistory.prototype.back = function(steps) {
    while (steps > 0 && this.past.length > 0) {
        this.future.push(this.curr);
        this.curr = this.past.pop();
        steps--;
    }
    return this.curr;
};

BrowserHistory.prototype.forward = function(steps) {
    while (steps > 0 && this.future.length > 0) {
        this.past.push(this.curr);
        this.curr = this.future.pop();
        steps--;
    }
    return this.curr;
};
