let arr = [12,34,23,56,21,11,10,4,9,12];
let test = arr.filter((item, pos) => reduceDupes(arr, item, pos)).sort(sortDescending).slice(0,6);
function sortDescending(a,b) { return b-a; }
function reduceDupes(arr, item, pos) { return arr.indexOf(item) === pos}
// function reduceArray(arr) {
// 	//note: 1st implementation.
// 	// const res = arr.map((x, index) => isNaN(arr[index+1]) ? undefined : x+arr[index+1]).filter((x) => x !== undefined);
// 	// return res.length > 2 ? reduceArray(res) : res[0] * res[1];

// 	//note: 2nd implementation. Much shorter
// 	return arr.map((x, index) => isNaN(arr[index+1]) ? undefined : x+arr[index+1]).filter((x) => x !== undefined).map((x, index, res) => res.length > 2 ? reduceArray(res) : res[0] * res[1])[0];
// }
//note: 3rd implementation of reduceArray. The implementation is much shorter but the readability index suffers. Comment this out if you want to try the 1st or 2nd implementation of reduceArray
let reduceArray = (arr) => arr.map((x, index) => isNaN(arr[index+1]) ? undefined : x+arr[index+1]).filter((x) => x !== undefined).map((x, index, res) => res.length > 2 ? reduceArray(res) : res[0] * res[1])[0];

const permutator = (inputArr) => {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }
 permute(inputArr);
 return result;
}
var res = permutator(test);
var combinationLists = res.sort((a, b) => {
	let x = reduceArray(a), y = reduceArray(b);
	return y-x;
}).map((x) => x).slice(0,5);
combinationLists.forEach((x) => {
	console.log('The numbers in correct order are: ', x);
	let finalOutput = reduceArray(x);
	console.log('The product is: ', finalOutput);
});

// var testReduce = reduceArray([1,2,3,4,5]);
// console.log(testReduce);

