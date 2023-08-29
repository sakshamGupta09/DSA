function rotateByOne(nums, n) {
  for (let i = 0; i < n - 1; i++) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}

rotateByOne([1, 2, 3, 4, 5], 5);
