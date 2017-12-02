function tester() {
	return "test";
}


function* idMaker() {
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

// gen.forEach(function (i) {
	
// 	console.log(i);
// });


console.log(gen.next());