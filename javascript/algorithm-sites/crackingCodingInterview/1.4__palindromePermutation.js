
// #First solution
function testPalindrome(str) {

  let hash = {};
  let countLettersNotQualified = 0;
  
  //store # of letters in hash
  //O(n)
  for(i=0; i<str.length; i++) {
    const currLetter = str[i].toLowerCase();
    
    //if not blank, store
    if(currLetter.trim()) {
      if(hash[currLetter] === undefined) hash[currLetter] = 0;

      hash[currLetter] += 1; 
  	}
    
    //note: we don't have any assumptions on how many letters are in a string yet. It's too early for assumptions to point out that the particular letter only has a count of 1 or so.
      
  }
  
  //then count # of odd letters
  //O(n)
  const lettersNotQualifiedCount = Object.values(hash).reduce((init, curr) => curr === 1 || curr > 2 ? init+1 : init, 0)
  
  return lettersNotQualifiedCount < 2;
}

console.log(testPalindrome('Tact Coa'))
console.log(testPalindrome('Taco Cat'))
console.log(testPalindrome('Taco Catx'))
console.log(testPalindrome('Taco Catxxx'))


// Another solution
function testPalindrome(str) {

  let hash = {};
  let countLettersNotQualified = 0;
  
  let switchBitVector = 0;
  
  //store # of letters in hash
  //O(n)
  for(i=0; i<str.length; i++) {
    const currLetter = str[i].toLowerCase();
    
    //if not blank, store
    if(currLetter.trim()) {
      if(hash[currLetter] === undefined) {
       	hash[currLetter] = 1;
  			switchBitVector +=1;      
      }
      else switchBitVector -= 1;
  	}
    
    
  }
  
  console.log(switchBitVector)
  return switchBitVector === 0 || switchBitVector === 1;
}

// console.log(testPalindrome('Tact Coa'))
// console.log(testPalindrome('Taco Cat'))
// console.log(testPalindrome('Taco Catx'))
console.log(testPalindrome('Taco Catxxx')) //something wrong with this use-case. My logic is incorrect somehow.