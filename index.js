function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
