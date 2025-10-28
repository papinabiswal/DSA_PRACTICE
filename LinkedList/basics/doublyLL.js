class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
   push(val){
       let newNode = new Node(val);
       if(!this.head){
           this.head = newNode;
           this.tail = newNode;
       } else {
           this.tail.next = newNode;
           newNode.prev = this.tail;
           this.tail = newNode;
       }
       this.length++;
       return this;
   }
    pop(){
     if(!this.head) return undefined;
     let removed = this.tail;  // store the node to return

      if(this.length === 1){
         this.head = null;
         this.tail = null;
      } else {
          this.tail = removed.prev; 
          this.tail.next = null;  // detach last node
          removed.prev = null;    // clear the pointer
      }
        this.length--;
        return removed;
    }

    shift(){
        if(!this.head) return undefined;
        let removed = this.head;
        
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = removed.next;
            this.head.prev = null;
            removed.next = null;
        }
        this.length--;
        return removed;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
      if(index < 0 || index >= this.length) return null;
        let current;

        // if index is in the first half, start from head
        if(index <= this.length/2){
            current = this.head;
            let count = 0;
            while(count !== index){
               current = current.next;
                count++;
            }
        } else {
        // if index is in the second half, start from tail
           current = this.tail;
           let counter = this.length-1;
            while(counter !== index){
               current = current.prev;
               counter--;
            }
        }
        return current;
    }

    set(index, val){
       var foundNode = this.get(index);
       if(foundNode){
           foundNode.val = val;
           return true;
       }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0){
            this.unshift(val);
            return true;
        }
        if(index === this.length){
            this.push(val);
            return true;
        }

        let newNode = new Node(val);
        let beforeNode = this.get(index);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        newNode.prev = beforeNode;

        this.length++;
        return true;
    }

    remove(index){
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;

    }
}

let list = new doublyLL();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
