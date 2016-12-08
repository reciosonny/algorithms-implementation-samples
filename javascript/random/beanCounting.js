function countBs(str) {

	return countChar(str, "B");
}

function countChar(str, char) {
	var count = 0;
	if (typeof str !== "string") {
		return "Not a string";
	}

	for (var i = 0; i < str.length; i++) {
		var value = str.charAt(i);
		
		if (value === char) {
			count+=1;
		}
	}

	return count;
}

console.log(countBs("BbBbB"));
console.log(countChar("AbcdAbcdAbcddd", 'd'));