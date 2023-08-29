function rotate(nums, k) {
  if (k == 0 || k == nums.length) {
    return;
  }
  if (k > nums.length) {
    k = k % nums.length;
  }
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(arr, s, e) {
  while (s < e) {
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    s++;
    e--;
  }
}

rotate([1, 2, 3, 4, 5], 3);
