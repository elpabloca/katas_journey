/* 
Given an array of integers, find the sum of its elements.

For example, if the array [1,2,3] => 1 + 2 + 3, so return 6
*/

function arraySum(numbers) {
   return numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    )
}

const numbers = [11,15,2,7]
console.log(arraySum(numbers))