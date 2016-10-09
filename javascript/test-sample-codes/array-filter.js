var filtered=[1,2,3,4].filter(function(e){ return this.indexOf(e)<0; }, [2,4]);
var filteredNames = ["Sonny","Zebulun","Ishtar"].filter(function (e) {
	return this.indexOf(e) < 0;
}, ["Sonny"]);

console.log('test');
console.log(filteredNames);

// filtered.pop();
filtered.remove(1);
console.log(filtered);