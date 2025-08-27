class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var first = new Node(10);
first.next = new Node(20);
first.next.next = new Node(30);
first.next.next.next = new Node(40);

// type in console first
// type in console first.next 
// you can get the corresponding value.

// *******************************************************************************************************************************

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length =0;
    }
    push(val) {
         let newNode = new ListNode(val);
         if(!this.head){
            this.head  = newNode;
            this.tail = newNode;
         } else {
            this.tail.next = newNode;
            this.tail = newNode;
         }
         this.length++;
         return this;
    }

    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        return current;
    }
    shift() {
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        let newNode = new ListNode(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val) { // set the value of the node at the given index to the given value
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        let newNode = new ListNode(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    print() {
       let arr = [];
       let current = this.head;
       while(current){
          arr.push(current.val);
          current = current.next;
       }
       console.log(arr);
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;
        for(const element of this) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

}

let list = new SingleLinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);