// - Maintain stack of [price, span].
// - For new price:
//    - Initialize span = 1.
//    - While top of stack ≤ current price:
//        - Pop and add popped span to current span.
//    - Push [price, span].
//    - Return span.

class StockSpanner {
    constructor() {
        this.stack = []; // Each element is [price, span]
    }

    next(price) {
        let span = 1;

        while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
            span += this.stack.pop()[1];
        }

        this.stack.push([price, span]);
        return span;
    }
}
