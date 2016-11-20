//space-time complexity: O(B-A)
//note: this can be improved further to O(1)
// function countDiv(A,B,K) {
// 	var countDivisible = 0;

// 	for (var i = A; i <= B; i++) {
// 		if (i % K === 0) {
// 			countDivisible +=1;			
// 		}
// 	}
// 	return countDivisible;
// }


function countDiv(A,B,K) {
	var countDivisible = 0;

	// return ((A+B) / K) / K;
	// return Math.floor((B-A) / K) + 1;
	var result = (Math.floor(B/K)-Math.floor(A/K));
	return result + (A % K === 0 ? 1:0);
}

function assertFunction(valueToEvaluate, rightAnswer) {
	return valueToEvaluate === rightAnswer;
}

function Assert(argument) {
	// body...
};
Assert.prototype.areEqual = function(valueToEvaluate, rightAnswer) {
	return valueToEvaluate === rightAnswer;	
};

var assert = new Assert();
console.log(countDiv(6,11,2));
console.log(countDiv(6,11,1));
console.log(countDiv(5,11,5));
console.log(assert.areEqual(countDiv(5,17,6), 2));