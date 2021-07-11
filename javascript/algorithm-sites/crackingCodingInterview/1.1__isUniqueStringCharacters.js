// Problem: Check if string each has unique characters. What if you can't use additional data structures?

function isUnique(s) {
  
  var cacheChars = {};
  
  
  for(i=0; i<s.length; i+=1) {
    const charVal = s[i];
    
    if(cacheChars[charVal]) return false;
    
    cacheChars[charVal] = 1;
  }
  
  return true;
}

isUnique("abcde");