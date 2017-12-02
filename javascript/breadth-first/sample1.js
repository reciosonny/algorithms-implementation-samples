var graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []
graph["tomm"] = []

// console.log(graph);
// var test = "name";
// console.log(test[test.length-1]);

function person_is_seller(name) {
	return name[name.length-1] === 'm';
}

function search(name) {
	var search_queue = [];
	var searched = [];
	search_queue = search_queue.concat(graph[name]);
	while (search_queue.length > 0) {
		var person = search_queue.shift();

		/*Sonny's note: Create a node-like relationship to each graph using D3.js demonstrating each relationship. */
		/*hint: Calculate the distance between 1st-rate relationships to 2nd-rate, so on and so forth. If possible, put an arrow for each connection*/
		// var para = document.createElement("div");
		// para.className = "node-circle";
		// var node = document.createTextNode(person);
		// para.appendChild(node);

		// var elem = document.getElementById("div1");
		// elem.appendChild(para);
		/*END*/

		if(searched.indexOf(person) < 0) {
			// console.log('no searched person');
			if (person_is_seller(person)) {
				console.log(person + " is a mango seller!");
				return true;
			}
			else {
				search_queue = search_queue.concat(graph[person]);
				searched.push(person);
			}
		}
		console.log(person);
	}
	
}

search("you");