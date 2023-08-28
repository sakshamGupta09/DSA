function removeDuplicates(nums) {
  if (nums.length == 1) {
    return 1;
  }
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
}
