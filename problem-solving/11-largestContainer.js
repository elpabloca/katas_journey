// You are given an array of numbers, each representing the height of a vertical line on a graph,
// A container can be ~rmed with any pair of these lines, along with the x-axis o'f the graph,
// Return the amount of water which the largest container can hold.

// - Input heights = [2, 7, 8, 3, 7, 6]
// - Output: 24

function largestContainerBruteForce(heights) {
  const n = heights.length;
  let maxWater = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const water = Math.min(heights[i], heights[j]) * (j - i);
      maxWater = Math.max(maxWater, water);
    }
  }

  return maxWater;
}

const heights = [2, 7, 8, 3, 7, 6];
console.log(largestContainerBruteForce(heights));