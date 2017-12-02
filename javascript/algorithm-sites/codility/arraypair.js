function arrayPair(A) {
	var pairEvaluated = [];
	for (var i = 0; i < A.length; i++) {
		var num1 = A[i];
		var num2 = A[i+2];

		if (num1 !== num2 && !isInArray(num1, pairEvaluated) && num1 % 2 !== 0) {
			return num1;
		}
		pairEvaluated.push(num1);
	}

	return 0;
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

var arr = [9,3,9,3,9,7,9];

console.log(arrayPair(arr));




