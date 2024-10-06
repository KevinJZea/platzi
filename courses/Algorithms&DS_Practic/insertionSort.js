function insertionSort(arr = []) {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      console.log(`Iteración: i=${i} & j=${j}`);
      if (arr[j - 1] > arr[j]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}

insertionSort([6, 4, 3, 11, 10]);
