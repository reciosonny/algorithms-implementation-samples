function binarySearch(arrayList, item) {
	var low = 0;
	var high = arrayList.length - 1;
	var timesGuessed = 1;

	while(low <= high) {
		console.log('guessing...');
		var midArrayAddress = Math.round((low + high) / 2); //this formula searches the middle value and uses this address as the guess #
		var guess = arrayList[midArrayAddress];

		console.log('midArrayAddress/current guess array: '+midArrayAddress);
		console.log('high: '+high);
		console.log('low: '+low);
		console.log('guess: '+guess)

		if (guess == item) {
			console.log();
			console.log();
			console.log('you guessed it correctly!');
			console.log('# of times guessed: '+timesGuessed);
			return;
		}
		if (guess > item)
			high = midArrayAddress - 1;
		else
			low = midArrayAddress + 1;
		timesGuessed+=1;
	}

	console.log();
	console.log();
	console.log('cannot find the # to guess in array element');
	console.log('# of times guessed: '+timesGuessed);
	return null;
}

// var my_list = [11,1,3,5,7,9];
// var my_list = [5,1,3,2,7,6];
var my_list = []; //100 elements evaluation
for (var i = 1; i <= 100; i++) {
	my_list.push(i);
}

console.log(binarySearch(my_list, 1000)); //will return 1
// console.log(binarySearch(my_list, -1)); //will return null