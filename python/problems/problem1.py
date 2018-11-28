# Problem 1
#
# Google
#
# Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
# For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
#
# Bonus: Can you do this in one pass?


def two_num_sum(numbers, k):
    solve_nums = {}
    if len(numbers) < 2:
        return False
    for num in numbers:
        if num in solve_nums:
            return True
        solve_nums[k - num] = True
    return False
