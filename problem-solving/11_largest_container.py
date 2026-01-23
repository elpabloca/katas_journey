def largest_container_brute_force(heights: list[int]) -> int:
    n = len(heights)
    max_water = 0
    # Find the maximum amount of water stored between al 'I. pairs of
    # lines.
    for i in range(n):
        for j in range(i + 1, n):
            water= min(heights[i], heights[j]) * (j - i)
            max_water = max(max_water, water)
    return max_water

heights = [2, 7, 8, 3, 7, 6]
print(largest_container_brute_force(heights))