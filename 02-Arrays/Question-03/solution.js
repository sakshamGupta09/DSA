function check(nums) {
  let k = 0;
  if (nums[0] < nums[nums.length - 1]) {
    k++;
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      k++;
    }
  }
  return k <= 1;
}
