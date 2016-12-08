function palindrome(str) {
	var originalWord = str.replace("_", "").replace(/\s/g, "").replace(", ", "").replace(".", "").toLowerCase();
  	var reversedWord = str.split("").reverse().join("").replace("_", "").replace(" ", "").replace(", ", "").replace(".", "").toLowerCase();
  
  console.log(originalWord);
  return originalWord === reversedWord;
}

palindrome("never odd or even");