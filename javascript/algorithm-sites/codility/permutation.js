function permutation(A) {
	var numSequence = 1;
	var result = 1;
	var sortedArray = A.sort(sortNumber);

	for (var i = 0; i < A.length; i++) {
		var val = sortedArray[i];

		if (val !== numSequence) {
			return 0;
		}
		numSequence += 1;		
	}

	// A.sort(sortNumber).forEach(function (i) {
	// 	if (i !== numSequence && result !== 0) {
	// 		result = 0;
	// 	}
	// 	numSequence += 1;
	// });

	return 1;
}

function sortNumber(a,b) {
	return a-b;
}

console.log(permutation([8,7,6,5,4,3,2,1]));