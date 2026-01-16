/* two pointers algorithm */

function findPairClosest(arr, k){
    if (arr.length < 2){
        return null
    }
    let left = 0
    let right = arr.length - 1

    let closestDiff = Infinity
    let result = []

    while (left < right){
        const sum = arr[left] + arr[right]
        const diff = Math.abs(sum - k)

        if (diff < closestDiff) {
            closestDiff = diff
            result = [arr[left], arr[right]]
        }

        if (sum > k){
            right--
        } else {
            left++
        }

    }

    return result
}

const numbers = [5, 8, 14, 17, 25, 0]
const k = 40

console.log(findPairClosest(numbers, k))