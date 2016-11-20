function ropeKnot(K, A) {

	var ropeValue=0;
	var totalRopesMergedCount=0
	for (var i = 0; i < A.length; i++) {
		var arrVal = A[i];
		ropeValue+=arrVal;
		
		if (ropeValue >= K) {
			totalRopesMergedCount+=1;
			ropeValue = 0;
		}

	}

	return totalRopesMergedCount;
}