// time coomplexity O(n)
// space complexity O(1)
function pairSumSorted(nums, target) {
    //two pointers algorithm  - inward traversal
    let left = 0
    let right = nums.length - 1

    while(left < right) {
        let sum = nums[left] + nums[right]

        if (sum < target) {
            left++  
        } else if(sum > target){ 
            right--
        } else {
            return [left, right]
        }
    }

    return []
}

// [1, 1, 1] - 2
// [-5,-2,3,5,6] - 7
// [-3,-2,-1] - -5
const numbers = [-3,-2,-1]
const target = -5

console.log(pairSumSorted(numbers, target))

/**
Given an array of integers sorted in ascending order and a target value, return the indexes
of any pair of numbers in the array that sum to the tar-get.
The order of the indexes In the result doesn't matter.

If no pair is found, return an empty array.
I
Example 1:
- Input: nums = [-5, -2, 3, 4, 6]., target = 7
- Output [2, 3]
- Explanation: nums[2] + nums[3] = 3 + 4 = 7

Example 2:
- Input: nums = [1, 1, 1], target = 2
- Output: [0, 1]
I [2, 11 .
 */