function maxCounters(N, A) {
	var arrOperations = [];
	var maxCounterLength = N + 1;
	var maxValue = 0;
	for (var i = 0; i < N; i++) {
		arrOperations.push(0);
	}

	for (var i = 0; i < A.length; i++) {
		var value = A[i];
		if (value === N+1) {
			for (var j = 0; j < arrOperations.length; j++) {
				arrOperations[j] = maxValue;
			}
		} else {
			if (arrOperations.length >= value) {
				var opElement = value-1;
				arrOperations[opElement] += 1;
				if (arrOperations[opElement] > maxValue) {
					maxValue = arrOperations[opElement];
				}
			}

		}
	}

	return arrOperations;
}



console.log(maxCounters(5, [3,4,4,6,1,4,4]));