/*
Given an array of integers, return all triplets [a, b, c] such that a + b + c = 0.
The solution must not contain duplicate triplets (e.g., [ 1, 2, 3] and [ 2, 3, 1] are considered
duplicate triplets), If no such triplets are found, return an empty array.

Each triplet can be arranged in any order, and the output can be returned in any order.

Example:
- Input: nums = [0, -1, 2, -3, 1]
- Output [(-3, 1, 2], [-1, 0, 1]
*/

// time complexity O(n^3)


function tripletSumBruteForce(nums) {
    const n = nums.length

    const triplets = new Set()

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            for(let k = j + 1; k < n; k++){
                if(nums[i] + nums[j] + nums[k] === 0){
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b)

                    triplets.add(triplet.toString())
                }
            }
        }
    }

    return Array.from(triplets).map(triplet => triplet.split(',').map(Number))
}


/* Two Pointer Solution
- We need sort the array
[-1,2,-2,1,-1,2] -> sort -> [-2,-1,-1,1,2,2]

- We get the first element -> -2
- We'll use the pairSumSorted method on the rest of array [-1,-1,1,2,2]
- Find a pair whose sum equals 2
*/
function tripletSum(nums){

let triplets = []
nums.sort()

// We first sort the array, which takes O(n log(n)) time.

for (let i = 0; i < nums.length - 1; i++){

    // Optimization: triplets consisting of only positive numbers will never sum to zero
    if(nums[i] > 0) break
    // To avoid duplicate triplets, skip 'a' if it's the same as the previous number
    if(i > 0 && nums[i] === nums[i - 1]) continue
    // The previous number

    console.log('continua')

    // Find all pairs that sum to a target of '-a' (-nums[i])
    const pairs = pairSumSortedAllPairs(nums, i + 1, -nums[i])

    console.log(pairs, 'pairs of '+ nums[i])
    
    for (const pair of pairs) {
      triplets.push([nums[i], ...pair]);
    }
}

return triplets
}

function pairSumSortedAllPairs(nums, start, target) {
    const pairs = []
    let left = start
    let right = nums.length - 1

    while (left < right){
        let sum = nums[left] + nums[right]

        if(sum === target){
            pairs.push([nums[left], nums[right]])
            left++

            while (left < right && nums[left] === nums[left - 1]){
                left++
            }
        } else if(sum < target){
            left++
        } else {
            right--
        }
    }

    return pairs
}

const numbers = [0, -1, 2, -3, 1, 4]

// every sum of triplet should be zero
// console.log(tripletSumBruteForce(numbers), 'brute force')
console.log(tripletSum(numbers), 'final result with two pointers')