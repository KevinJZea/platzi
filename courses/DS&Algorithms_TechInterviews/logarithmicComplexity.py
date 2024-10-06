def binary_search(list, target):
    left = 0
    right = len(list) - 1

    while left < right:
        half = (left + right) // 2

        if list[half] == target:
            return half
        elif list[half] < target:
            left = half + 1
        else:
            right = half - 1

    return -1