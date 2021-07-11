

// naive solution
// Space complexity: O(n+m+o)
var groupAnagrams = function(strs) {
    
  var cacheGroupedAnagrams = {};
  
  //O(n)
  const hashedResult = strs.reduce((init, currVal) => {
      
      //O(n+m+o) - split, sort, join
      const sortedAnagram = currVal.split('').sort().join('');
      
      
      if(!init[sortedAnagram]) init[sortedAnagram] = [];
      
      init[sortedAnagram].push(currVal);
      
      return init;
  }, {});
  
  //O(n)
  const result = Object.keys(hashedResult).reduce((init, curr) => {
      init.push(hashedResult[curr]);
      
      return init;
  }, []);
  
  return result;
};



// Optimized solution(watch this: https://www.youtube.com/watch?v=kQL41OMf51Y&ab_channel=ThinkFWD)