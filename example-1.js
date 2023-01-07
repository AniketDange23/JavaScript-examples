 
//  Write a Program to input a string and check if it’s palindrome in nature or notusing recursion
 
 function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("ParttraP")); // true
console.log(isPalindrome("apple")); // false
