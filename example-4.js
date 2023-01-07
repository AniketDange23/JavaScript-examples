//   Write a Program to return the count of the occurrences of d as a digit for nnumber using recursion //


function countDigit(number, digit) {
    if (number === 0) {
      return 0;
    }
    return (number % 10 === digit ? 1 : 0) + countDigit(Math.floor(number / 10), digit);
  }
  
  console.log(countDigit(86487, 8)); // 2
  