function tapeEquilibrium(A) {
	var total = 0;
	A.forEach(function (i) {
		total+=i;
	});
	// console.log('total value: '+total);
	var beforeSum = 0;
	var afterSum = 0;
	var smallestDiff = Number.MAX_VALUE;
	for (var i = 0; i < A.length; i++) {
		beforeSum += A[i];
		afterSum = total - beforeSum;
		var diff = Math.abs(beforeSum - afterSum);
		if (diff < smallestDiff) {
			smallestDiff = diff;
		}
		
		// console.log('beforesum: '+beforeSum+' aftersum:'+afterSum);
	}

	return smallestDiff;
}


var test = tapeEquilibrium([3,1,2,4,3]);
console.log(test);