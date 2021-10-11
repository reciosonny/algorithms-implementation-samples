function strToArrRecursion (str, idx) {
    
  if(str.length === idx) return [];

  const currVal = str[idx];

  return [currVal].concat(strToArrRecursion(str, idx+1));
}

const result = strToArrRecursion("12345", 0);

console.log(result.map(x => Number(x) * 2))
console.log(result);