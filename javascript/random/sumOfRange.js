function range(start, end, step) {
	var arr = [];
	if (step === undefined) {
		step = start > end ? -1 : 1;
	}

	// note: my solution
	// if (step < 0) {
	// 	for (; start >= end; start -= step) {
	// 		arr.push(start);
	// 	}

	// } else {
	// 	for (; start <= end; start += step) 
	// 		arr.push(start);
	// }

	//note: my solution # 2
	for (var i = start; step > 0 ? i <= end : i >= end; i += step)
		arr.push(i);

	//note: book's solution
	// if (step > 0) {
	// 	for (var i = start; step > 0 ? i <= end : i >= end; i += step)
	// 		arr.push(i);
	// } else {
	// 	for (var i = start; i >= end; i += step)
	// 		arr.push(i);
	// }

	return arr;
}

function sum(arr) {
	var result = 0;
	arr.forEach(function (i) {
		result += i;
	});
	return result;
}

console.log(range(1,10,2));
console.log(sum(range(1,10,2)));
console.log(range(10,1,-2));
console.log(sum(range(10,1,-2)));