/*We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

copyMachine([true, false, true], 2) should return [[true, false, true], [true, false, true]]
Passed
copyMachine([1, 2, 3], 5) should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
Passed
copyMachine([true, true, null], 1) should return [[true, true, null]]
Passed
copyMachine(["it works"], 3) should return [["it works"], ["it works"], ["it works"]]
Passed
The copyMachine function should utilize the spread operator with array arr

Read the article: https://www.freecodecamp.org/forum/t/copy-an-array-with-the-spread-operator-arr/197425
*/


function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
      newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}
// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));