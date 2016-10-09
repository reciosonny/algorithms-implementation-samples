function quicksort(arr) {
	// console.log(arr.length);
	if (arr.length < 2) {
		return arr;
	} else {
		var pivot = arr[0];
		var less = [];
		var greater = [];
		var result = [];

		for (var i = 1; i < arr.length; i++) { //skip first array
			var j = arr[i];
			if (j <= pivot) {	
				less.push(j);
			} else if (j > pivot) {
				greater.push(j);
			}
		}
		
		// console.log(less);
		return quicksort(less) + [pivot] + quicksort(greater);
	}
}

console.log(quicksort([10,5,2,3,7,4]));
// console.log([1,2,3])
// console.log([1,2,3] + [1] + [4,5,6]);