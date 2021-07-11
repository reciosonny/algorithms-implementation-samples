//O(n+m)
function checkPermStrings(s1, s2) {
  
  var hashS1 = {}
  for(i=0; i<s1.length; i+=1) {
    var currChar = s1[i];
    
    hashS1[currChar] = 1;
  }
  
  let countLettersMatched = 0;
  for(j=0; j<s2.length; j+=1) {
    const currChar = s2[j];
    
    countLettersMatched += hashS1[currChar] ?? 0;
  }
  
  return countLettersMatched === s1.length && s1.length === s2.length;
}

checkPermStrings('abc', 'cab')


// optimized version (using ASCII code to check letter frequency)
//O(n+m)
function checkPermStrings(s1, s2) {
  
  if(s1.length !== s2.length) return false;
  
  var hashedLetter = {}
  for(i=0; i<s1.length; i+=1) {
    var currChar = s1[i];
    
    hashedLetter[currChar] = hashedLetter[currChar]??0 + Number(currChar.charCodeAt(0));
  }
  
  for(j=0; j<s2.length; j+=1) {
    var currChar = s2[j];
    
    hashedLetter[currChar] = hashedLetter[currChar]??0 - Number(currChar.charCodeAt(0));
    console.log(hashedLetter[currChar])
    
    if (hashedLetter[currChar] < 0) { 
      return false
    }
  }
  
  
  return true;
}

checkPermStrings('aac', 'abc')