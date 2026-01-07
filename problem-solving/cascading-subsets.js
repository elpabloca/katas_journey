// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]

function eachConst (arr, sizeSubsetNumber) {
    const result = []

    // calculate how many subarrays would be have
    for (let i=0; i <= arr.length - sizeSubsetNumber; i++){
        result.push(arr.slice(i, i + sizeSubsetNumber))
        console.log(result, 'result array')
    }
    return result
}

const numbers = [1,2,3,4]

console.log(eachConst(numbers, 2))
console.log(eachConst(numbers, 3))