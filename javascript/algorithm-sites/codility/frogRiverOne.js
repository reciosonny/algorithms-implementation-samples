/**
* Finds earliest time a frog can cross the river.
*
* @param {Number} X The position to go to.
* @param {Number[]} A An array of leaves. Index key is time. Value is falling leaves positions.
* @return {Number} The earliest time (index of "A" Array). -1 if no position is found.
*/


function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

// function frogRiverOne(X, A) {
	
// 	for (var i = 0; i < A.length; i++) {
// 		var value = A[i];
// 		if (value === X) {
// 			return i;
// 		}
// 	}

// 	return -1;
// }

function frogRiverOne(X,A) {
	var evaluatedPositions = {};
	var leaves = 0;

	for (var i = 0; i < A.length; i++) {
		var value = A[i];
		if (value <= X && !evaluatedPositions[value]) {
			evaluatedPositions[value] = true;
			leaves++;
			if (leaves === X) {
				return i;
			}
		}
	}
	return -1;
}


//2nd solution
// function frogRiverOne(X, A) {
// 	const length = A.length;
// 	const positions = {};
// 	var leaves = 0;

// 	for(var i = 0; i < length; i++) {
// 		console.log(positions);
// 		// console.log(A[i])
// 		if(A[i] <= X && positions[A[i]] !== true) {
// 			positions[A[i]] = true;
// 			leaves++;
// 			if(leaves === X) {
// 				return i;
// 			}
// 		}
// 		// console.log(positions)
// 	}
// 	return -1;
// }



////////////////////
////*TEST CASES*////
////////////////////
console.log(frogRiverOne(5, [1,3,1,4,2,3,5,4]));
// console.log(frogRiverOne(2, [2,2,2,2]));
