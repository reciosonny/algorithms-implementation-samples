

function rotateString (s1, s2) {
  
  
  const s1FirstLetter = s1[0];
  let countIterations = 0;
  let s2ConcatString = "";
  
  for (i=s2.length-1; i>0; i--) {
    const lastLetter = s2[i];
    
  	//note: not sure about the time complexity of this one...
    s2ConcatString = lastLetter + s2ConcatString;
    countIterations+=1;
    
    if(lastLetter === s1FirstLetter) {
      break;
    }
    
  }
  
  //note: not sure about the time complexity of this one...
  const s2Reconstructed = `${s2ConcatString}${s2.substring(0, s2.length-countIterations)}`;
  
  return s1 === s2Reconstructed;
}

// rotateString('waterbottle', 'erbottlewat')
// rotateString('waterjog', 'jogwater')
rotateString('waterjog', 'letw')

// "water".substring(0, 5)