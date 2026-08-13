"""

A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget.
Given price lists for keyboards and USB drives and a budget, find the cost to buy them.
If it is not possible to buy both items, return -1.

Example
b = 60
keyboards = [40, 50, 60]
drives = [5, 8, 12]

The person can buy a 40 keyboard + 12 USB drive = 52, or a 50 keyboard + 8 USB drive = 58.
Choose the latter as the more expensive option and return 58.

"""

def getMoneySpent(keyboards, drives, b):
    maximum = -1
    for k in keyboards:
        if k > b:
            continue
        for d in drives:
            if d > b:
                continue
            amount = k + d
            if amount > maximum and amount <= b:
                maximum = amount
    return maximum

electronicsShop([3, 1], [5, 2, 8], 10); # 9
electronicsShop([4], [5], 5); # -1

# AI

def getMoneySpent2(keyboards, drives, b):
    keyboards.sort()
    drives.sort()
    max_spent = -1
    i, j = 0, len(drives) - 1
    while i < len(keyboards) and j >= 0:
        total = keyboards[i] + drives[j]
        if total > b:
            j -= 1
        else:
            if total > max_spent:
                max_spent = total
            i += 1
    return max_spent