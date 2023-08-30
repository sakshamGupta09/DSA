function findMaxConsecutiveOnes(nums) {
  let ones = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
      ones = Math.max(count, ones);
    } else {
      count = 0;
    }
  }
  return ones;
}
