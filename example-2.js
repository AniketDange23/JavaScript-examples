
// Write a Program to convert Decimal Number (BASE 10) TO Binary Number(BASE 2)


function decimalToBinary(decimal) {
    if (decimal === 0) {
      return "";
    }
    return decimalToBinary(Math.floor(decimal / 2)) + (decimal % 2).toString();
  }
  
  console.log(decimalToBinary(2)); // "10"