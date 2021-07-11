// https://leetcode.com/problems/longest-substring-without-repeating-characters/


// O(n) solution:
var lengthOfLongestSubstring = function(s) {
  
  var l = 0;
  var hashedChars = {};
  
  const result = s.split("").reduce((longest, c, idx) => {
      
      if(hashedChars[c] !== undefined) {
          l = Math.max(l, hashedChars[c] + 1);
      }
      
      hashedChars[c] = idx;
      
      return Math.max(idx - l + 1, longest);
  }, 0);
  
  return result;
}

