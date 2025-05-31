// push(x)	O(1)	Just push to input
// pop()	Amortized O(1), Worst O(n)	Transfers all elements from input to output only when output is empty
// peek()	O(1)	Returns top of output or peekEl
// empty()	O(1)	Checks lengths

class MyQueue {
    constructor() {
        this.input = [];
        this.output = [];
        this.peekEl = -1;
    }

    push(x) {
        if (this.input.length === 0) {
            this.peekEl = x;
        }
        this.input.push(x); // Always push to input
    }

    pop() {
        if (this.output.length === 0) {
            // Transfer all elements from input to output
            while (this.input.length > 0) {
                this.output.push(this.input.pop());
            }
        }

        const val = this.output.pop();
        return val;
    }

    peek() {
        if (this.output.length === 0) {
            return this.peekEl;
        }
        return this.output[this.output.length - 1];
    }

    empty() {
        return this.input.length === 0 && this.output.length === 0;
    }
}
