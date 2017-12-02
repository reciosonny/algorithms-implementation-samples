
//we implement it as objects in javascript
function hashFunctionDictionary() {

	var book = new Object();

	book["apple"] = 0.67;
	book["milk"] = 1.49;
	book["avocado"] = 1.49;
	
	return book;
}

var hashBook = hashFunctionDictionary();
console.log('Hash function start demonstration...');
for(key in hashBook) {
	var value = hashBook[key];
	console.log("key: "+key+"\n\tvalue: "+value);
}

