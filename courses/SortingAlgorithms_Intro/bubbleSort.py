def bubbleSort(arr):
    n = len(arr)
    currentSwaps = 0
    swaps = 0

    for i in range(n):

        if i > 0 and swaps == 0:
            return

        for j in range(0, n - i - 1):

            if arr[j] > arr[j+1]:
                currentSwaps += 1
                arr[j], arr[j+1] = arr[j+1], arr[j]
            
            print(arr)
        
        swaps = currentSwaps
        currentSwaps = 0


if __name__ == '__main__':
    array = [190, 1200, 1, 2, 4, 55, 1000, 6, 800]
    bubbleSort(array)