# def largest_container_brute_force(heights: list[int]) -> int:
#     n = len(heights)
#     max_water = 0
#     # Find the maximum amount of water stored between al 'I. pairs of
#     # lines.
#     for i in range(n):
#         for j in range(i + 1, n):
#             water= min(heights[i], heights[j]) * (j - i)
#             max_water = max(max_water, water)
#     return max_water

def largest_container(heights):
    max_water = 0
    left = 0
    right = len(heights) - 1

    while(left < right):
        # calculates the water contained between the current pair of lines
        water = min(heights[left], heights[right]) * (right - left)
        max_water = max(max_water, water)

        if(heights[left] < heights[right]):
            left += 1
        elif(heights[left] > heights[right]):
            right -= 1
        else:
            left += 1
            right -= 1
    
    return max_water

# [2, 7, 8, 3, 7, 6]            
# [9, 2, 4, 8, 9, 2, 5, 8]
heigs = [9, 2, 4, 8, 9, 2, 5, 3]
# print(largest_container_brute_force(heights))
print(largest_container(heigs))