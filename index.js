function reverseString(word) {
  return word.split("").reverse().join("");
}
function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
/*
  Need to make a isPalindrome function that returns either true or false.
  When the input string is the same forwards and backwards, I should return true.
  That means that if the input string is the same after I reverse it, I should return
  true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
