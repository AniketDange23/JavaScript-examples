// Write a Program to print all permutations of an array 



function permute(array, index) {
    if (index === array.length - 1) {
      console.log(array);
      return;
    }
  
    for (let i = index; i < array.length; i++) {
      // Swap elements at index and i
      [array[index], array[i]] = [array[i], array[index]];
      permute(array, index + 1);
      // Swap them back to restore original array
      [array[index], array[i]] = [array[i], array[index]];
    }
  }
  
  permute([1, 2, 3]);
/* output 
 [1, 2, 3]
[1, 3, 2]
[2, 1, 3]
[2, 3, 1]
[3, 2, 1]
[3, 1, 2]  */
