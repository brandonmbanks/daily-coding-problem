def two_num_sum(numbers, k):
    solveNums = {}
    if len(numbers) < 2:
        return False
    for num in numbers:
        if num in solveNums:
            return True
        solveNums[k - num] = True
    return False
