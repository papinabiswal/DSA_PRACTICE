class LRUCache {
    constructor(capacity){
        this.capacity = capacity;
        this.map = new Map();
    }

    get(key){
        if(this.map.has(key)){
            let val = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, val);
            return val;
        } else {
            return -1;
        }
    }
    put(key, val){
        if(this.get(key) === -1){
            if(this.capacity === this.map.size){
                for(let keyVal of this.map){
                    this.map.delete(keyVal[0]);
                    break;
                }
            }
        }
        this.map.set(key, val);
    }
}


////////////////////////////////////////////////////////////////////////

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        // Dummy head and tail
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Remove node from DLL
    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // Insert node right after head (most recent)
    insert(node) {
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.map.has(key)) return -1;

        const node = this.map.get(key);

        // Move to front (most recently used)
        this.remove(node);
        this.insert(node);

        return node.value;
    }

    put(key, value) {

        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;

            this.remove(node);
            this.insert(node);
        } else {
            if (this.map.size === this.capacity) {
                // Remove LRU (node before tail)
                const lru = this.tail.prev;
                this.remove(lru);
                this.map.delete(lru.key);
            }

            const newNode = new Node(key, value);
            this.insert(newNode);
            this.map.set(key, newNode);
        }
    }
}
