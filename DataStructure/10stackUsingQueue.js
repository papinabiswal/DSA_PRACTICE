// single queue
// Time complexity:
// pop, top and empty are O(1), push is O(n)

// Space complexity: O(n)
class MyStack {
    constructor() {
        this.q = []; // single queue
    }

    push(x) {
        this.q.push(x); // Step 1: Add element to end
        // Step 2: Rotate the queue so the new element is at the front
        for (let i = 0; i < this.q.length - 1; i++) {
            this.q.push(this.q.shift());
        }
    }

    pop() {
        return this.q.shift(); // Removes the front element (top of stack)
    }

    top() {
        return this.q[0]; // Peek front element
    }

    empty() {
        return this.q.length === 0;
    }
}
