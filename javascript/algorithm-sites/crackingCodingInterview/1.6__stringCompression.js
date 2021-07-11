

function stringCompression (str) {

  var hashedString = {};
  var currChar = '';
  
  for (let i = 0; i < str.length; i++) {
    const value = str[i];
    
    if (hashedString[value]) {
      hashedString[value] += 1;
    }

    console.log(value);

  }

}


stringCompression('aabbcccc');


