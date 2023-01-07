function decimalToBinary(decimal) {
    if (decimal === 0) {
      return "";
    }
    return decimalToBinary(Math.floor(decimal / 2)) + (decimal % 2).toString();
  }
  
  console.log(decimalToBinary(2)); // "10"
  