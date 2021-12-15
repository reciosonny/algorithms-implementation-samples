/* Trie Data Structure */

/**
 * Questions:
 * 1. How does a node keep track of keys stored in each node? How do they interact together? Answer: Node is just one-directional so no pointers for going back the node graph
 */
let Node = function() {
	this.keys = new Map();
	this.end = false;

  this.setKey = (letter) => {
    this.keys.set(letter, new Node());
  };
  this.getKey = (letter) => {
    return this.keys.get(letter);
  };
	this.setEnd = function() {
		this.end = true;
	};
	this.isEnd = function() {
		return this.end;
	};
};


let Trie = function() {

	this.root = new Node();

    /**
     * Algorithm:
     * This is responsible for setting all letters in a node using a `hashmap`. The following steps will add each letter in a string input into a node:
     * 
     * 1. We check first if the length of input contains a character
     * 2. We take the first letter on a string of input for evaluation and add it in a node
     *      - If the letter is not stored in a node yet, we store it in a node as `keys`. Then that letter also has an instance of a node
     *      - Else, we use that first letter to query the existing node with that letter and return the add function this time excluding the letter which was already added in a node
     * 3. Once the evaluation is done, we can then proceed with adding other letters in an input using `RECURSION` till we traverse all letters in string
   */
	this.add = function(input, node = this.root) {

		const [firstLetter, ...rest] = input;

		const remainingLetters = rest.join('');

		if (input.length == 0) {

			node.setEnd();
			return;
		} else if (!node.keys.has(firstLetter)) {

      node.setKey(firstLetter);

			return this.add(remainingLetters, node.getKey(firstLetter));
		} else {

			return this.add(remainingLetters, node.getKey(firstLetter));
		};
	};

	// Note: The idea here is as long as we get to the last letter and `isWord` is equals to true, then we can conclude the the word being checked is already stored in the trie data structure, so therefore it's considered a word
	this.isWord = function(word) {
		let node = this.root;

		const wordArr = word.split('');

		let currLetter;
		while (currLetter = wordArr.shift()) {

			if (!node.keys.has(currLetter)) {
				return false;
			} else {
				node = node.keys.get(currLetter); //assign node variable to current letter node
			};
		};

		return node.isEnd(); //check the last letter if isEnd is true
	};

	// checks prefix within the word
	this.startsWith = function(prefix) {
		let node = this.root;
	
		const wordArr = prefix.split('');
	
		let currLetter;
		while (currLetter = wordArr.shift()) {
			
			if (!node.keys.has(currLetter) && node.letter !== currLetter) {
				return false;
			} else {
				node = node.keys.get(currLetter); //assign node variable to current letter node
			}
		};
	
		return true;
	};

	this.print = function() {

		let words = new Array();

		let search = function(node, string) {
			if (node.keys.size != 0) {
				for (let letter of node.keys.keys()) {
					search(node.keys.get(letter), string.concat(letter));
				};
				if (node.isEnd()) {
					words.push(string);
				};
			} else {
				string.length > 0 ? words.push(string) : undefined;
				return;
			};
		};

		search(this.root, new String());


		return words.length > 0 ? words : mo;
	};

};

myTrie = new Trie();
myTrie.add('ball'); 
myTrie.add('bat'); 
myTrie.add('doll'); 
myTrie.add('dork'); 
myTrie.add('do'); 
myTrie.add('dorm');
myTrie.add('dr'); 
myTrie.add('send');
myTrie.add('sense');

console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dor'))
console.log(myTrie.isWord('dorf'))
console.log(myTrie.isWord('dork'))
console.log(myTrie.print());



