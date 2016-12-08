// function isEven(num) {
// 	var remainder = num%2;
// 	console.log("remainder: "+remainder);
// 	if (remainder===0) {
// 		return true;
// 	} else if(remainder==1) {
// 		return false
// 	} else {
// 		return true;
// 	}
// }

function isEven(n) {
	console.log(n);
	if (n == 0)
		return true;
	else if (n == 1)
		return false;
	else if (n < 0)
		return isEven(-n);
	else
		return isEven(n - 2);
}

console.log(isEven(50))