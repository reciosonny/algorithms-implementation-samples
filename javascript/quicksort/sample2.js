
//much faster than sample1 since it performs at O(n) when partitioning array. And another O(n) for each partition. So it's in the worse-case scenario O(n^2)
function quicksort(arr) {
	// console.log(arr.length);
	if (arr.length < 2) {
		return arr;
	} else {
		var pivotElement = Math.round(arr.length / 2, 0) - 1;
		var pivot = arr[pivotElement];
		arr.splice(pivotElement, 1); //removes pivot value to element

		var less = [];
		var greater = [];
		var result = [];

		console.log(arr);
		console.log(pivot);
		for (var i = 0; i < arr.length; i++) {
			var j = arr[i];
			if (j <= pivot) {	
				less.push(j);
			} else if (j > pivot) {
				greater.push(j);
			}
		}
		
		return quicksort(less) + [pivot] + quicksort(greater);
	}
}

console.log(quicksort([10,5,2,3,7,4]));