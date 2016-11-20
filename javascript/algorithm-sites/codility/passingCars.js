
//space-time complexity / Big-O notation: O(N**2)
//note: The speed can be improved further with a space-time complexity of O(N)
// function passingCars(A) {
// 	var countCars = 0;

// 	for (var i = 0; i < A.length; i++) {
// 		var value = A[i];
// 		if (value === 0) {
// 			for (var j = i; j < (A.length); j++) {
// 				var passedCar = A[j];
// 				if (passedCar === 1) {
// 					countCars+=1;
// 				}
// 			}
// 		}
// 	}

// 	return countCars;
// }

//space-time complexity / Big-O notation: O(N)
function passingCars(A) {
	var countCars = 0;
	var eastCars = 0;
	var westCars = 0;
	var skip = 0; //skips west cars which is not passed by east cars

	for (var i = 0; i < A.length; i++) {
		var value = A[i];
		if (value === 0) {
			eastCars += 1;
			skip += westCars;
		} else {
			westCars += 1;
		}
	}

	var totalPairCars = (eastCars * westCars) - skip;
	return totalPairCars > 1000000000 ? -1 : totalPairCars;
}

//test cases
console.log(passingCars([0,1,0,1,1,0,1]));
console.log(passingCars([0,1,0,1,1]));
