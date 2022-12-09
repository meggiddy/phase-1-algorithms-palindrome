function isPalindrome(word) {
  // Write your algorithm here
  let str = word.split("");
  let reversedStr = str.reverse();
  let revStr = reversedStr.join("");

  if (revStr === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  Get string and change to array using split("") 
  use .reverse("") and store in a variable after .join("")
  if reversed is === to original str return is a palindrome
  else isNotPalindrome
*/

/*
  Add written explanation of your solution here
  i switched word into an array so that i can use reverse("");
  i joined it back to a string since word is a string and wouldnt equal to an array
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
