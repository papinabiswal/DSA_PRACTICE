class TrieNode {
    constructor(){
        this.children = {};   // key: character, value: TrieNode
        this.endOfWord = false; // true if this node completes a word
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode();
    }
   // Insert a word into the Trie
    insert(word){
       let node = this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char]; // Move the pointer down to that child, so the next character continues from here.
        }
        node.endOfWord = true;  // mark end of the word
    }


    // Search for a whole word
    search(word){
       let node = this.root;
       for(let char of word){
           if(!node.children[char]){
               return false;
           }
           node = node.children[char]; // If the character exists, move down into that child and continue checking the next character.
       }
        return node.endOfWord; // After finishing the loop, we’re at the node of the last character.
    }

    // Check if any word starts with a given prefix
    startsWith(word) {
        let node = this.root;
        for(let char of word){
           if(!node.children[char]){
               return false;
           }
           node = node.children[char];
       }
        return true;
    }
}

let trie = new Trie();
trie.insert("car");
trie.insert("cat");
trie.insert("dog");

console.log(trie.search("car"));
console.log(trie.search("cat"));
console.log(trie.search("cap"));

console.log(trie.startsWith("ca"));