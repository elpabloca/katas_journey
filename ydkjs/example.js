const nums = [1,2,3,4]

const result = nums.map(n => n * 2).reduce((acc, n) => acc + n, 0)

console.log(result)