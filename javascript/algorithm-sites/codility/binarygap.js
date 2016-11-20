function binaryGap(N) {
	var binary = decimalToBinary(N);
	var gaps = [];
	var gapsCount = 0;

	for (var i = 0; i < binary.length; i++) {
		var binEval = binary[i];
		if (parseInt(binEval) === 0) {
			gapsCount+=1;
			// console.log('this is zero');
		} else {
			if (gapsCount > 0) {
				gaps.push(gapsCount);
				gapsCount=0;
			}
		}
	}

	var result = gaps.sort(sortNumber);
	return result.length > 0 ? result[0] : 0;
}

function sortNumber(a,b) {
    return b - a;
}

function decimalToBinary(num) {
	return (num >>> 0).toString(2);
}

// binaryGap(10);

console.log(binaryGap(15));