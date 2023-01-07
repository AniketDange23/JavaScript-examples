//--- Write a Program to print a Pascal’s Triangle.11 11 2 11 3 3 11 4 6 4 11 5 10 10 5 11 ----//


function printPascalTriangle(n) {
    if (n === 0) {
      return;
    }
    printPascalTriangle(n - 1);
    for (let i = 0; i < n; i++) {
      console.log(binomialCoefficient(n - 1, i));
    }
  }
  
  function binomialCoefficient(n, k) {
    if (k === 0 || n === k) {
      return 1;
    }
    return binomialCoefficient(n - 1, k - 1) + binomialCoefficient(n - 1, k);
  }
  
  printPascalTriangle(6);
  