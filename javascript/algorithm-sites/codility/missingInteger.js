function missingInteger(A) {
	
	var valueToEvaluate = 0;
	var valuesAlreadyEvaluated = [];
	var sortedArray = A.sort(sortNumber);
	var result = 0;

	for (var i = 0; i < A.length; i++) {
		var value = sortedArray[i];

		if (!isInArray(value, valuesAlreadyEvaluated) && value > 0) {
			valueToEvaluate += 1;

			if (valueToEvaluate != value) {
				result = valueToEvaluate;
				break;
			} else {
				valuesAlreadyEvaluated.push(value);
			}

		}
	}

	return result;
}


function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

function sortNumber(a,b) {
    return a-b;
}

console.log(missingInteger([1,3,6,4,1,2]));