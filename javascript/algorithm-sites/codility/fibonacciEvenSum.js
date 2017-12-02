function fibonacci(n) {
	var result = 1;
	// if (n > 0) {
	// 	return fibonacci(n-1);
	// 	// result = fibonacci(n-1);
	// }
	var arr = [];
	for (var i = 0; i < 5; i++) {
		var oldVal = arr[i-2];
		var oldVal2 = arr[i-1];
	}

	while (n > 5) {
		result = result === 1 ? result + 1 : oldVal + result;
	}
	return result;
}

console.log(fibonacci(12));