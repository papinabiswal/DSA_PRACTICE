class TrieNode {
  constructor() {
    this.children = {}; // character -> TrieNode
    this.isEndOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  // Add a word to the dictionary
  addWord(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  // Search with support for "."
  search(word) {
   const dfs = (index, node) => {
        for (let i = index; i < word.length; i++) {
            let char = word[i];

            if (char === ".") {
                // try all children for this dot
                for (let child of Object.values(node.children)) {
                    if (dfs(i + 1, child)) {
                        return true;
                    }
                }
                return false; // none matched
            } else {
                if (!node.children[char]) {
                    return false;
                }
                node = node.children[char]; // move down
            }
        }
        return node.isEndOfWord; // reached the end of word
    };

    return dfs(0, this.root);
  }
}
let dict = new WordDictionary();
dict.addWord("bad");
dict.addWord("dad");
dict.addWord("mad");

console.log(dict.search("pad")); // false
console.log(dict.search("bad")); // true
console.log(dict.search(".ad")); // true
console.log(dict.search("b..")); // true