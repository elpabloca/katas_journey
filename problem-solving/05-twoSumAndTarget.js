// brute force
// time complexity= O(n^2)
// Space complexity= O(1)
function twoSum (nums, target) {
    for (let i = 0; i <= nums.length; i++){
        for (let j = 0; j <= nums.length; j++){
            if (nums[j] === target - nums[i]){
                return [i, j]
            }
        }
    }
    return []
}

// time complexity= O(n)
// Space complexity= O(n)
// more efficient
function twoSumPart2(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]

        if (map.has(complement)) {
            return [map.get(complement), i]
        }

        map.set(nums[i], i)
    }

    return []
}

const numbers = [11,15,2,7]
target = 17

console.log(twoSumPart2(numbers, target))

