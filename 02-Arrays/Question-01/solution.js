function print2largest(arr, n) {
  let max = -1;
  let smax = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      smax = max;
      max = arr[i];
    } else if (arr[i] > smax && arr[i] != max) {
      smax = arr[i];
    }
  }
  return smax;
}

print2largest([10, 10, 5], 3);
