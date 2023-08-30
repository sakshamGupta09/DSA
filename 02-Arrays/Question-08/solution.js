function union(arr1, arr2, n, m) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      if (result[result.length - 1] != arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
    } else if (arr1[i] > arr2[j]) {
      if (result[result.length - 1] != arr2[j]) {
        result.push(arr2[j]);
      }
      j++;
    } else {
      if (result[result.length - 1] != arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
      j++;
    }
  }
  if (i < n) {
    for (let k = i; k < n; k++) {
      if (result[result.length - 1] != arr1[k]) {
        result.push(arr1[k]);
      }
    }
  }
  if (j < m) {
    for (let k = j; k < m; k++) {
      if (result[result.length - 1] != arr2[k]) {
        result.push(arr2[k]);
      }
    }
  }
  return result;
}
