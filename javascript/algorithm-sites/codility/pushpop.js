var arr = [1,2,3,4,5];


// console.log(arr.pop());
// console.log(arr.pop());
arr.concat([6,7]);

//queue
// console.log(arr.shift());
// console.log(arr.shift());

//stack
// console.log(arr.pop());


function cyclicRotation(a, k) {

	while(k > 0) {
		a.unshift(a.pop());
		k-=1;
	}
	return a;
}

var arrSample = [3,8,9,7,6];

console.log(cyclicRotation(arrSample, 3));