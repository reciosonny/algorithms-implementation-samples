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
	// var result = Math.floor((B-A) / K); //one possible answer(only 75% correct)
	var result = (Math.floor(B/K)-Math.floor(A/K)); //another possible answer
	return result + (A % K === 0 ? 1:0);
}

function assertFunction(valueToEvaluate, rightAnswer) {
	return valueToEvaluate === rightAnswer;
}

class_name.prototype.method_name = function(first_argument) {
	// body...
};
var Assert = (function () {
	function Assert() {
	};
	Assert.prototype.areEqual = function(valueToEvaluate, rightAnswer) {
		return valueToEvaluate === rightAnswer;	
	};
	Assert.prototype.display = function() {
		return _self.tester
	};
	return Assert;
}());

var assert = new Assert("Test zzzz");
console.log(assert.display());
console.log(countDiv(6,11,2));
console.log(countDiv(6,11,1));
console.log(countDiv(5,11,5));
console.log(assert.areEqual(countDiv(5,17,6), 2));