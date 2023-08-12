function doubleNumbers(numbers) {
    const doubledArray = numbers.map(number => number * 2);
    return doubledArray;
  }
 
  const inputArray = [1, 2, 3, 4, 5];
  const doubledResult = doubleNumbers(inputArray);
  console.log(doubledResult);
