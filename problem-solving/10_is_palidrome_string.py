# time complexity: O(n)
# Space complexity: O(1)

def is_palindrome_valid(string: str) -> bool:
    left = 0
    right = len(string) - 1

    while left < right:
        # Skip non-alphanumeric characters from the left.
        while left < right and not string[left].isalnum():
            left += 1
        
        # Skip noo-alphanumeric characters from the right.
        while left < right and not string[right].isalnum():
            right -= 1

        # If the characters at the left and right pointers don 't
        # match, the string is not a palindrome.
        if string[left] != string[right]:
            return False

        left += 1
        right -= 1
    return True

# '!. (?)'
# '12.02.2021'
string = '21.02.2021'
print(is_palindrome_valid(string))

# A palindrome Is a sequence of characters that reads the same forward and backward.
# Given a string, determine if it's a palindrome after removing all non-alphanumeric characters.

# A character is alphanumeric if it's either a letter or a number.

# Example 1:
#  Input: s = 'a dog! a panic in a pagoda.'
#  Output: True
# Example 2:
#  Input s = 'abc123'
#  Output False

# Constraints:
# The string may include a combination of lowercase English letters, numbers, spaces, and punctuations.