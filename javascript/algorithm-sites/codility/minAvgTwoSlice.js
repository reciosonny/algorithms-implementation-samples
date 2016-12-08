//note: unfinished
function solution(A) {

	var total = 0;
	var avg = 0;
	var avg2 = 0;
	for (var i = 0; i < A.length-1; i++) {
		var val = A[i];
		var val2 = A[i+1];
		total+=val;
		avg = total / (i+1);
		avg2 = (val+val2) / 2;
		console.log(val);
	}

	return avg;
}

function slice(P, Q) {
	var total = 0;
	var avg = 0;
	for (var i = P; i <= Q; i++) {
		var val = arr[i];
		total += val;
	}

	console.log('total: '+total);
	return total / (Q-P+1);
}

var arr = [4,2,2,5,1,5,8];
// solution(arr);

console.log('avg: '+slice(0,1));
console.log('avg: '+ slice(1,2));
console.log('avg: '+slice(3,4));
console.log('avg: '+slice(1,4));

// console.log(arr.length);