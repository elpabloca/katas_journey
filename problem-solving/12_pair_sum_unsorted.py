def pair_sum_unsorted_two_pass(nums, target):

    num_map = {}
    # First pass: Populate the hash map with each number and its index.

    for i, num in enumerate(nums):
        num_map[num] = i

    print(num_map)

    # Second pass: Check for each number's complement in the hash map.
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map and num_map[complement] != i:
            return [i, num_map[complement]]
    return []


# time complexity: O(n)
# space complexity: O(n)
def pair_sum_unsorted(nums, target):

    hash_map = {}

    for i, x in enumerate(nums):
        if target - x in hash_map:
            return [hash_map[target - x], i]
        hash_map[x] = i

    return []

nums = [-1, 3, 4, 2]
target = 3

print(pair_sum_unsorted_two_pass(nums, target))
print(pair_sum_unsorted(nums, target))