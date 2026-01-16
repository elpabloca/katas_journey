function isPalindrome(number) {
    if (number < 0 || (number % 10 === 0 && number !== 0)) return false

    let reversedHalf = 0

    while (number > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (number % 10)
        number = Math.floor(number/10)
    }
    return number === reversedHalf || number === Math.floor(reversedHalf / 10)
}

function isPalindrome2(x){
    if (x < 0){
        return false
    }

    const original = x
    let reversed = 0

    while (x > 0) {
        const lastDigit = x % 10
        
        reversed = (reversed * 10) + lastDigit

        x = Math.floor(x / 10)
    }

    return original === reversed
}

const num = 1223

console.log(isPalindrome(num)) // 3221 -> false