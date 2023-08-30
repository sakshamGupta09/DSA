function sortColors(nums) {
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  while (mid <= high) {
    if (nums[mid] == 0) {
      nums[mid] = nums[low];
      nums[low] = 0;
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else {
      nums[mid] = nums[high];
      nums[high] = 2;
      high--;
    }
  }
}
