# Problem 1
#
# Google
#
# Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
# For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
#
# Bonus: Can you do this in one pass?


# O(N^2)
def with_brute_force(numbers, k):
    length = len(numbers)
    for i in range(length - 1):
        for j in range(i + 1, length):
            if numbers[i] + numbers[j] == k:
                return True
    return False


# O(N)
def with_an_object(numbers, k):
    solutions = {}
    for num in numbers:
        if num in solutions:
            return True
        solutions[k - num] = True
    return False


# O(N)
def with_a_set(numbers, k):
    solutions = set()
    for num in numbers:
        if num in solutions:
            return True
        solutions.add(k - num)
    return False
