function arraySortedOrNot(arr, n) {
  if (n == 1) {
    return 1;
  }
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      return 0;
    }
  }
  return 1;
}
