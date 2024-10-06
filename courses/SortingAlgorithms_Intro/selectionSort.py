def selectionSort(arr):
    for i in range(len(arr)):
        
        idxDes = i

        for j in range(i+1,len(arr)):
            if arr[idxDes] > arr[j]:
                idxDes = j

        arr[i], arr[idxDes] = arr[idxDes], arr[i]

if __name__ == '__main__':
    array = [68, 999, 5, 21, 20, 7, 34, 23, 6]
    selectionSort(array)
    print("Sorted Array:")
    print(array)