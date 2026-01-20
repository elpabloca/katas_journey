function isPalindromeValid(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // Skip non-alphanumeric characters from the left
    while (left < right && !isAlphanumeric(str[left])) {
      left++;
    }

    // Skip non-alphanumeric characters from the right
    while (left < right && !isAlphanumeric(str[right])) {
      right--;
    }

    // Compare characters
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Helper function (equivalent to Python's isalnum)
function isAlphanumeric(char) {
  return /[a-z0-9]/i.test(char);
}

// Example
const string = '12.02.2021';
console.log(isPalindromeValid(string));