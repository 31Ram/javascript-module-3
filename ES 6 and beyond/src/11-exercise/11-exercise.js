/**
 * Exercise 11:
 *
 * Finish the code of the `exercise11` function so that it:
 *
 * 1. Receives 2 parameters: `array` and `entry`
 *
 * @example
 *
 * function fn (array, entry) {...}
 *
 * 2. Executes the array.find() method to find the `entry`
 *    in the `array` parameter that the function receives.
 *
 * 3. Returns the result
 */

function exercise11(matrizArr, parameter) {
   return (matrizArr.find(element=>element===parameter));
}

export default exercise11;
